import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { audiometriaData } from '../../../../mock';

export const EvolucionAudiogram: React.FC = () => {
    const [oido, setOido] = useState<'oidoDerecho' | 'oidoIzquierdo'>('oidoDerecho');
    const [tipoConduccion, setTipoConduccion] = useState<'aerea' | 'osea'>('aerea');

    const colors = ['#1976d2', '#dc004e', '#ed6c02', '#2e7d32'];

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Audiograma por Año
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 6 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Oído</InputLabel>
                                <Select
                                    value={oido}
                                    label="Oído"
                                    onChange={(e) => setOido(e.target.value as 'oidoDerecho' | 'oidoIzquierdo')}
                                >
                                    <MenuItem value="oidoDerecho">Oído Derecho</MenuItem>
                                    <MenuItem value="oidoIzquierdo">Oído Izquierdo</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Tipo de Conducción</InputLabel>
                                <Select
                                    value={tipoConduccion}
                                    label="Tipo de Conducción"
                                    onChange={(e) => setTipoConduccion(e.target.value as 'aerea' | 'osea')}
                                >
                                    <MenuItem value="aerea">Vía Aérea</MenuItem>
                                    <MenuItem value="osea">Vía Ósea</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ height: 380 }}>
                    <LineChart
                        width={800}
                        height={380}
                        series={audiometriaData.map((data, index) => ({
                            data: [250, 500, 1000, 2000, 3000, 4000, 6000, 8000].map(freq => {
                                const value = data.audiometria_ocupacional.audiograma[oido][tipoConduccion][freq as keyof typeof data.audiometria_ocupacional.audiograma[typeof oido][typeof tipoConduccion]];
                                return value !== null ? value : null;
                            }),
                            label: `${data.anio}`,
                            color: colors[index % colors.length]
                        }))}
                        xAxis={[{
                            data: [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
                            scaleType: 'log',
                            min: 250,
                            max: 8000,
                            tickNumber: 8
                        }]}
                        yAxis={[{
                            min: -10,
                            max: 120,
                            reverse: true
                        }]}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};
