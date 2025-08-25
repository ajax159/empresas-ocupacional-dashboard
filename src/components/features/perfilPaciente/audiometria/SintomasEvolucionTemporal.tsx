import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { LineChart, BarChart } from '@mui/x-charts';
import { audiometriaData } from '../../../../mock';

export const SintomasEvolucionTemporal: React.FC = () => {
    const prepareSintomasData = () => {
        return audiometriaData.map(data => {
            const sintomas = data.audiometria_ocupacional.sintomasActuales;
            return {
                anio: data.anio,
                hipoacusia: getSintomaValue(sintomas.hipoacusia),
                otalgia: sintomas.otalgia === 'SI' ? 1 : 0,
                zumbidos: getSintomaValue(sintomas.zumbidos),
                mareos: sintomas.mareos === 'SI' ? 1 : 0,
                otitis: sintomas.otitis === 'SI' ? 1 : 0,
                resfrio: sintomas.resfrio === 'SI' ? 1 : 0,
                totalSintomas: Object.values(sintomas).filter(s => s === 'SI' || s === 'LEVE' || s === 'OCASIONAL').length
            };
        });
    };

    const getSintomaValue = (sintoma: string): number => {
        if (sintoma === 'SI') return 1;
        if (sintoma === 'LEVE') return 0.5;
        if (sintoma === 'OCASIONAL') return 0.3;
        return 0;
    };

    const getSintomaColor = (sintoma: string): string => {
        if (sintoma === 'SI') return '#dc004e';
        if (sintoma === 'LEVE') return '#ed6c02';
        if (sintoma === 'OCASIONAL') return '#1976d2';
        return '#2e7d32';
    };

    const sintomasData = prepareSintomasData();

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución de Síntomas Auditivos
                </Typography>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Tendencia de Síntomas por Año</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 300, mb: 2 }}>
                            <LineChart
                                width={800}
                                height={300}
                                series={[
                                    {
                                        data: sintomasData.map(d => d.totalSintomas),
                                        label: 'Total Síntomas',
                                        color: '#dc004e'
                                    },
                                    {
                                        data: sintomasData.map(d => d.hipoacusia),
                                        label: 'Hipoacusia',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: sintomasData.map(d => d.zumbidos),
                                        label: 'Zumbidos',
                                        color: '#ed6c02'
                                    },
                                    {
                                        data: sintomasData.map(d => d.otalgia),
                                        label: 'Otalgia',
                                        color: '#2e7d32'
                                    }
                                ]}
                                xAxis={[{
                                    data: sintomasData.map(d => d.anio),
                                    scaleType: 'point'
                                }]}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Distribución de Síntomas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 250, mb: 2 }}>
                            <BarChart
                                width={800}
                                height={250}
                                series={[
                                    {
                                        data: sintomasData.map(d => d.hipoacusia),
                                        label: 'Hipoacusia',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: sintomasData.map(d => d.zumbidos),
                                        label: 'Zumbidos',
                                        color: '#ed6c02'
                                    },
                                    {
                                        data: sintomasData.map(d => d.otalgia),
                                        label: 'Otalgia',
                                        color: '#2e7d32'
                                    },
                                    {
                                        data: sintomasData.map(d => d.mareos),
                                        label: 'Mareos',
                                        color: '#9c27b0'
                                    },
                                    {
                                        data: sintomasData.map(d => d.otitis),
                                        label: 'Otitis',
                                        color: '#f57c00'
                                    },
                                    {
                                        data: sintomasData.map(d => d.resfrio),
                                        label: 'Resfriado',
                                        color: '#795548'
                                    }
                                ]}
                                xAxis={[{
                                    data: sintomasData.map(d => d.anio),
                                    scaleType: 'band'
                                }]}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Detalle de Síntomas por Año</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            {audiometriaData.map(data => (
                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={data.anio}>
                                    <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                                        <Typography variant="subtitle2" color="primary" gutterBottom>
                                            Año {data.anio}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                            {Object.entries(data.audiometria_ocupacional.sintomasActuales).map(([sintoma, valor]) => (
                                                <Chip
                                                    key={sintoma}
                                                    label={`${sintoma}: ${valor}`}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: getSintomaColor(valor),
                                                        color: 'white',
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                            ))}
                                        </Box>
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
