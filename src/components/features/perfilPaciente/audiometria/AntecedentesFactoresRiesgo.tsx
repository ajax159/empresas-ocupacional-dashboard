import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { BarChart, PieChart } from '@mui/x-charts';
import { audiometriaData } from '../../../../mock';

export const AntecedentesFactoresRiesgo: React.FC = () => {
    const prepareAntecedentesData = () => {
        return audiometriaData.map(data => ({
            anio: data.anio,
            consumoTabaco: data.audiometria_ocupacional.antecedentesRelacionados.consumoTabaco === 'SI' ? 1 : 0,
            exposicionQuimicos: data.audiometria_ocupacional.antecedentesRelacionados.exposicionQuimicos === 'SI' ? 1 : 0,
            servicioMilitar: data.audiometria_ocupacional.antecedentesRelacionados.servicioMilitar.respuesta === 'SI' ? 1 : 0,
            hobbiesRuido: data.audiometria_ocupacional.antecedentesRelacionados.hobbiesRuido.respuesta === 'SI' ? 1 : 0,
            usoOtotoxicos: data.audiometria_ocupacional.antecedentesRelacionados.usoOtotoxicos === 'SI' ? 1 : 0,
            infeccionOido: data.audiometria_ocupacional.antecedentesRelacionados.infeccionOido === 'SI' ? 1 : 0,
            totalFactores: [
                data.audiometria_ocupacional.antecedentesRelacionados.consumoTabaco,
                data.audiometria_ocupacional.antecedentesRelacionados.exposicionQuimicos,
                data.audiometria_ocupacional.antecedentesRelacionados.servicioMilitar.respuesta,
                data.audiometria_ocupacional.antecedentesRelacionados.hobbiesRuido.respuesta,
                data.audiometria_ocupacional.antecedentesRelacionados.usoOtotoxicos,
                data.audiometria_ocupacional.antecedentesRelacionados.infeccionOido
            ].filter(factor => factor === 'SI').length
        }));
    };

    const prepareFactoresRiesgoResumen = () => {
        const factores = {
            'Consumo Tabaco': 0,
            'Exposición Químicos': 0,
            'Servicio Militar': 0,
            'Hobbies con Ruido': 0,
            'Uso Ototóxicos': 0,
            'Infección Oído': 0
        };

        audiometriaData.forEach(data => {
            if (data.audiometria_ocupacional.antecedentesRelacionados.consumoTabaco === 'SI') factores['Consumo Tabaco']++;
            if (data.audiometria_ocupacional.antecedentesRelacionados.exposicionQuimicos === 'SI') factores['Exposición Químicos']++;
            if (data.audiometria_ocupacional.antecedentesRelacionados.servicioMilitar.respuesta === 'SI') factores['Servicio Militar']++;
            if (data.audiometria_ocupacional.antecedentesRelacionados.hobbiesRuido.respuesta === 'SI') factores['Hobbies con Ruido']++;
            if (data.audiometria_ocupacional.antecedentesRelacionados.usoOtotoxicos === 'SI') factores['Uso Ototóxicos']++;
            if (data.audiometria_ocupacional.antecedentesRelacionados.infeccionOido === 'SI') factores['Infección Oído']++;
        });

        return Object.entries(factores).map(([factor, count], index) => ({
            id: index,
            value: count,
            label: factor
        }));
    };

    const getFactorColor = (factor: string): string => {
        switch (factor) {
            case 'consumoTabaco': return '#dc004e';
            case 'exposicionQuimicos': return '#ed6c02';
            case 'servicioMilitar': return '#1976d2';
            case 'hobbiesRuido': return '#2e7d32';
            case 'usoOtotoxicos': return '#9c27b0';
            case 'infeccionOido': return '#f57c00';
            default: return '#795548';
        }
    };

    const antecedentesData = prepareAntecedentesData();
    const factoresResumen = prepareFactoresRiesgoResumen();

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Antecedentes y Factores de Riesgo Auditivo
                </Typography>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Evolución de Factores de Riesgo</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 300, mb: 2 }}>
                            <BarChart
                                width={800}
                                height={300}
                                series={[
                                    {
                                        data: antecedentesData.map(d => d.consumoTabaco),
                                        label: 'Consumo Tabaco',
                                        color: '#dc004e'
                                    },
                                    {
                                        data: antecedentesData.map(d => d.exposicionQuimicos),
                                        label: 'Exposición Químicos',
                                        color: '#ed6c02'
                                    },
                                    {
                                        data: antecedentesData.map(d => d.servicioMilitar),
                                        label: 'Servicio Militar',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: antecedentesData.map(d => d.hobbiesRuido),
                                        label: 'Hobbies con Ruido',
                                        color: '#2e7d32'
                                    },
                                    {
                                        data: antecedentesData.map(d => d.usoOtotoxicos),
                                        label: 'Uso Ototóxicos',
                                        color: '#9c27b0'
                                    },
                                    {
                                        data: antecedentesData.map(d => d.infeccionOido),
                                        label: 'Infección Oído',
                                        color: '#f57c00'
                                    }
                                ]}
                                xAxis={[{
                                    data: antecedentesData.map(d => d.anio),
                                    scaleType: 'band'
                                }]}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Distribución de Factores de Riesgo</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ height: 300 }}>
                                    <PieChart
                                        series={[{
                                            data: factoresResumen,
                                            highlightScope: { fade: 'global', highlight: 'item' },
                                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }
                                        }]}
                                        width={400}
                                        height={300}
                                    />
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="subtitle2" gutterBottom>
                                    Resumen de Factores por Año:
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {antecedentesData.map(data => (
                                        <Box key={data.anio} sx={{ mb: 1, p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                                            <Typography variant="body2">
                                                <strong>Año {data.anio}:</strong> {data.totalFactores} factores de riesgo
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Detalle de Antecedentes por Año</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            {audiometriaData.map(data => (
                                <Grid size={{ xs: 12, sm: 6 }} key={data.anio}>
                                    <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                                        <Typography variant="subtitle2" color="primary" gutterBottom>
                                            Año {data.anio}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                            {Object.entries(data.audiometria_ocupacional.antecedentesRelacionados).map(([key, value]) => {
                                                if (typeof value === 'object') {
                                                    return (
                                                        <Chip
                                                            key={key}
                                                            label={`${key}: ${value.respuesta}`}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: value.respuesta === 'SI' ? getFactorColor(key) : '#e0e0e0',
                                                                color: value.respuesta === 'SI' ? 'white' : 'black',
                                                                fontSize: '0.7rem'
                                                            }}
                                                        />
                                                    );
                                                }
                                                return (
                                                    <Chip
                                                        key={key}
                                                        label={`${key}: ${value}`}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: value === 'SI' ? getFactorColor(key) : '#e0e0e0',
                                                            color: value === 'SI' ? 'white' : 'black',
                                                            fontSize: '0.7rem'
                                                        }}
                                                    />
                                                );
                                            })}
                                        </Box>

                                        {data.audiometria_ocupacional.antecedentesRelacionados.servicioMilitar.descripcion && (
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                <strong>Descripción Servicio Militar:</strong> {data.audiometria_ocupacional.antecedentesRelacionados.servicioMilitar.descripcion}
                                            </Typography>
                                        )}

                                        {data.audiometria_ocupacional.antecedentesRelacionados.hobbiesRuido.descripcion && (
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                <strong>Descripción Hobbies:</strong> {data.audiometria_ocupacional.antecedentesRelacionados.hobbiesRuido.descripcion}
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    );
};
