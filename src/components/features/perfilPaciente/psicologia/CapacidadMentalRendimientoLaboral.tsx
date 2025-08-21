import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const capacidadMentalData = [
    { año: 2020, atencion: 85, memoria: 88, concentracion: 82, procesamiento: 80, flexibilidad: 78 },
    { año: 2021, atencion: 83, memoria: 86, concentracion: 80, procesamiento: 78, flexibilidad: 76 },
    { año: 2022, atencion: 78, memoria: 82, concentracion: 75, procesamiento: 73, flexibilidad: 72 },
    { año: 2023, atencion: 75, memoria: 80, concentracion: 72, procesamiento: 70, flexibilidad: 68 },
    { año: 2024, atencion: 80, memoria: 84, concentracion: 78, procesamiento: 76, flexibilidad: 74 }
];

const rendimientoLaboralData = [
    { año: 2020, productividad: 92, calidad: 88, eficiencia: 85, creatividad: 80, satisfaccion: 85 },
    { año: 2021, productividad: 90, calidad: 86, eficiencia: 83, creatividad: 78, satisfaccion: 82 },
    { año: 2022, productividad: 85, calidad: 80, eficiencia: 78, creatividad: 72, satisfaccion: 75 },
    { año: 2023, productividad: 82, calidad: 78, eficiencia: 75, creatividad: 70, satisfaccion: 72 },
    { año: 2024, productividad: 88, calidad: 84, eficiencia: 82, creatividad: 76, satisfaccion: 80 }
];


export default function CapacidadMentalRendimientoLaboral() {
    const años = capacidadMentalData.map(item => item.año);
    const atencion = capacidadMentalData.map(item => item.atencion);
    const memoria = capacidadMentalData.map(item => item.memoria);
    const concentracion = capacidadMentalData.map(item => item.concentracion);

    const productividad = rendimientoLaboralData.map(item => item.productividad);
    const calidad = rendimientoLaboralData.map(item => item.calidad);
    const satisfaccion = rendimientoLaboralData.map(item => item.satisfaccion);

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Capacidad Mental y Rendimiento Laboral
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Capacidades Cognitivas
                        </Typography>
                        <Box sx={{ height: 'auto' }}>
                            <LineChart
                                width={450}
                                height={300}
                                series={[
                                    {
                                        data: atencion,
                                        label: 'Atención',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: memoria,
                                        label: 'Memoria',
                                        color: '#4caf50',
                                        curve: 'linear'
                                    },
                                    {
                                        data: concentracion,
                                        label: 'Concentración',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Rendimiento Laboral
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={450}
                                height={300}
                                series={[
                                    {
                                        data: productividad,
                                        label: 'Productividad',
                                        color: '#9c27b0',
                                        curve: 'linear'
                                    },
                                    {
                                        data: calidad,
                                        label: 'Calidad',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                    {
                                        data: satisfaccion,
                                        label: 'Satisfacción',
                                        color: '#795548',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
