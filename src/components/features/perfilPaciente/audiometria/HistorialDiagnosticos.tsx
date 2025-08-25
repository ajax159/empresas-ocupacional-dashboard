import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { BarChart, LineChart } from '@mui/x-charts';
import { audiometriaData } from '../../../../mock';

export const HistorialDiagnosticos: React.FC = () => {
    const prepareDiagnosticosData = () => {
        return audiometriaData.map(data => ({
            anio: data.anio,
            descripcion: data.audiometria_ocupacional.diagnostico.descripcion,
            tieneHipoacusia: data.audiometria_ocupacional.diagnostico.descripcion.includes('HIPOACUSIA') ? 1 : 0,
            esInducidaPorRuido: data.audiometria_ocupacional.diagnostico.descripcion.includes('INDUCIDA POR RUIDO') ? 1 : 0,
            esBilateral: data.audiometria_ocupacional.diagnostico.descripcion.includes('BILATERAL') ? 1 : 0,
            esLeve: data.audiometria_ocupacional.diagnostico.descripcion.includes('LEVE') ? 1 : 0,
            longitudDescripcion: data.audiometria_ocupacional.diagnostico.descripcion.length
        }));
    };

    const prepareRecomendacionesData = () => {
        return audiometriaData.map(data => ({
            anio: data.anio,
            cantidadRecomendaciones: data.audiometria_ocupacional.diagnostico.recomendaciones.split('.').filter(r => r.trim().length > 0).length,
            requireEPP: data.audiometria_ocupacional.diagnostico.recomendaciones.includes('EPP') ? 1 : 0,
            requiereSeguimiento: data.audiometria_ocupacional.diagnostico.recomendaciones.includes('SEGUIMIENTO') ||
                data.audiometria_ocupacional.diagnostico.recomendaciones.includes('CONTROL') ? 1 : 0,
            requiereEspecialista: data.audiometria_ocupacional.diagnostico.recomendaciones.includes('ESPECIALIZADA') ? 1 : 0
        }));
    };

    const getDiagnosticoColor = (descripcion: string): string => {
        if (descripcion.includes('NORMAL')) return '#2e7d32';
        if (descripcion.includes('HIPOACUSIA') && descripcion.includes('LEVE')) return '#ed6c02';
        if (descripcion.includes('HIPOACUSIA')) return '#dc004e';
        return '#1976d2';
    };

    const getSeveridadNivel = (descripcion: string): number => {
        if (descripcion.includes('NORMAL')) return 0;
        if (descripcion.includes('LEVE')) return 1;
        if (descripcion.includes('MODERADA')) return 2;
        if (descripcion.includes('SEVERA')) return 3;
        return 1;
    };

    const diagnosticosData = prepareDiagnosticosData();
    const recomendacionesData = prepareRecomendacionesData();
    const severidadData = diagnosticosData.map(d => ({ anio: d.anio, severidad: getSeveridadNivel(d.descripcion) }));

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Historial de Diagnósticos y Recomendaciones
                </Typography>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Evolución de la Severidad del Diagnóstico</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 250, mb: 2 }}>
                            <LineChart
                                width={800}
                                height={250}
                                series={[
                                    {
                                        data: severidadData.map(d => d.severidad),
                                        label: 'Nivel de Severidad',
                                        color: '#dc004e'
                                    }
                                ]}
                                xAxis={[{
                                    data: severidadData.map(d => d.anio),
                                    scaleType: 'point'
                                }]}
                                yAxis={[{
                                    min: 0,
                                    max: 3
                                }]}
                            />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Escala: 0=Normal, 1=Leve, 2=Moderada, 3=Severa
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Características del Diagnóstico</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 250, mb: 2 }}>
                            <BarChart
                                width={800}
                                height={250}
                                series={[
                                    {
                                        data: diagnosticosData.map(d => d.tieneHipoacusia),
                                        label: 'Hipoacusia',
                                        color: '#dc004e'
                                    },
                                    {
                                        data: diagnosticosData.map(d => d.esInducidaPorRuido),
                                        label: 'Inducida por Ruido',
                                        color: '#ed6c02'
                                    },
                                    {
                                        data: diagnosticosData.map(d => d.esBilateral),
                                        label: 'Bilateral',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: diagnosticosData.map(d => d.esLeve),
                                        label: 'Leve',
                                        color: '#2e7d32'
                                    }
                                ]}
                                xAxis={[{
                                    data: diagnosticosData.map(d => d.anio),
                                    scaleType: 'band'
                                }]}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Análisis de Recomendaciones</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 250, mb: 2 }}>
                            <BarChart
                                width={800}
                                height={250}
                                series={[
                                    {
                                        data: recomendacionesData.map(d => d.cantidadRecomendaciones),
                                        label: 'Total Recomendaciones',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: recomendacionesData.map(d => d.requireEPP),
                                        label: 'Requiere EPP',
                                        color: '#ed6c02'
                                    },
                                    {
                                        data: recomendacionesData.map(d => d.requiereSeguimiento),
                                        label: 'Requiere Seguimiento',
                                        color: '#2e7d32'
                                    },
                                    {
                                        data: recomendacionesData.map(d => d.requiereEspecialista),
                                        label: 'Requiere Especialista',
                                        color: '#dc004e'
                                    }
                                ]}
                                xAxis={[{
                                    data: recomendacionesData.map(d => d.anio),
                                    scaleType: 'band'
                                }]}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Detalle de Diagnósticos por Año</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            {audiometriaData.map(data => (
                                <Grid size={{ xs: 12 }} key={data.anio}>
                                    <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="subtitle2" color="primary">
                                                Año {data.anio}
                                            </Typography>
                                            <Chip
                                                label={`Severidad: ${getSeveridadNivel(data.audiometria_ocupacional.diagnostico.descripcion)}`}
                                                size="small"
                                                sx={{
                                                    backgroundColor: getDiagnosticoColor(data.audiometria_ocupacional.diagnostico.descripcion),
                                                    color: 'white'
                                                }}
                                            />
                                        </Box>

                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            <strong>Diagnóstico:</strong> {data.audiometria_ocupacional.diagnostico.descripcion}
                                        </Typography>

                                        <Typography variant="body2">
                                            <strong>Recomendaciones:</strong> {data.audiometria_ocupacional.diagnostico.recomendaciones}
                                        </Typography>

                                        {data.audiometria_ocupacional.diagnostico.cie_10 && (
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                <strong>CIE-10:</strong> {data.audiometria_ocupacional.diagnostico.cie_10}
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
