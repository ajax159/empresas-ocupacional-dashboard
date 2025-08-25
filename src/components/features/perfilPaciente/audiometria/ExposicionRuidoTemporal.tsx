import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts';
import { audiometriaData } from '../../../../mock';

export const ExposicionRuidoTemporal: React.FC = () => {
    const prepareExposicionData = () => {
        return audiometriaData.map(data => ({
            anio: data.anio,
            horasExpuesto: data.audiometria_ocupacional.trabajoActual.horasDiaExpuesto === 'N.A.' ? 0 :
                parseInt(data.audiometria_ocupacional.trabajoActual.horasDiaExpuesto.replace(' HRS', '')),
            expuestoRuido: data.audiometria_ocupacional.trabajoActual.expuestoRuido === 'SI' ? 1 : 0,
            usoProteccion: (data.audiometria_ocupacional.trabajoActual.usoTapones === 'SI' ? 1 : 0) +
                (data.audiometria_ocupacional.trabajoActual.usoOrejeras === 'SI' ? 1 : 0),
            tiempoTrabajoNumero: data.audiometria_ocupacional.trabajoActual.tiempoTrabajo ?
                parseInt(data.audiometria_ocupacional.trabajoActual.tiempoTrabajo.replace(' AÑOS', '')) : 0
        }));
    };

    const prepareApreciacionData = () => {
        const apreciacionCount: { [key: string]: number } = {};
        audiometriaData.forEach(data => {
            const apreciacion = data.audiometria_ocupacional.trabajoActual.apreciacionRuido;
            apreciacionCount[apreciacion] = (apreciacionCount[apreciacion] || 0) + 1;
        });

        return Object.entries(apreciacionCount).map(([apreciacion, count]) => ({
            apreciacion,
            cantidad: count
        }));
    };

    const exposicionData = prepareExposicionData();
    const apreciacionData = prepareApreciacionData();

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Exposición a Ruido Ocupacional
                </Typography>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Evolución Temporal de Exposición</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 300, mb: 2 }}>
                            <BarChart
                                width={800}
                                height={300}
                                series={[
                                    {
                                        data: exposicionData.map(d => d.horasExpuesto),
                                        label: 'Horas/día expuesto',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: exposicionData.map(d => d.tiempoTrabajoNumero),
                                        label: 'Años de trabajo',
                                        color: '#dc004e'
                                    },
                                    {
                                        data: exposicionData.map(d => d.usoProteccion),
                                        label: 'EPP auditivos usados',
                                        color: '#2e7d32'
                                    }
                                ]}
                                xAxis={[{
                                    data: exposicionData.map(d => d.anio),
                                    scaleType: 'band'
                                }]}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Apreciación del Ruido</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 250 }}>
                            <BarChart
                                width={800}
                                height={250}
                                series={[
                                    {
                                        data: apreciacionData.map(d => d.cantidad),
                                        label: 'Cantidad',
                                        color: '#ed6c02'
                                    }
                                ]}
                                xAxis={[{
                                    data: apreciacionData.map(d => d.apreciacion),
                                    scaleType: 'band'
                                }]}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle1">Detalle por Año</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            {audiometriaData.map(data => (
                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={data.anio}>
                                    <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                                        <Typography variant="subtitle2" color="primary" gutterBottom>
                                            Año {data.anio}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Expuesto:</strong> {data.audiometria_ocupacional.trabajoActual.expuestoRuido}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Apreciación:</strong> {data.audiometria_ocupacional.trabajoActual.apreciacionRuido}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Horas/día:</strong> {data.audiometria_ocupacional.trabajoActual.horasDiaExpuesto}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Tiempo trabajo:</strong> {data.audiometria_ocupacional.trabajoActual.tiempoTrabajo}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Tapones:</strong> {data.audiometria_ocupacional.trabajoActual.usoTapones}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Orejeras:</strong> {data.audiometria_ocupacional.trabajoActual.usoOrejeras}
                                        </Typography>
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
