import { Card, CardContent, Typography, Box, Chip, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [
    { year: '2020', normal: 45, alterado: 15, critico: 5 },
    { year: '2021', normal: 52, alterado: 18, critico: 8 },
    { year: '2022', normal: 48, alterado: 22, critico: 12 },
    { year: '2023', normal: 55, alterado: 25, critico: 10 },
    { year: '2024', normal: 60, alterado: 20, critico: 7 },
];

export default function TriajeEvolucion() {
    const years = data.map(item => item.year);
    const normal = data.map(item => item.normal);
    const alterado = data.map(item => item.alterado);
    const critico = data.map(item => item.critico);

    const totalActual = normal[4] + alterado[4] + critico[4];

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución de Triaje Médico
                </Typography>

                <Grid container spacing={1} sx={{ mb: 2 }}>
                    <Grid size={4}>
                        <Chip
                            label={`Normal: ${((normal[4] / totalActual) * 100).toFixed(0)}%`}
                            color="success"
                            size="small"
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid size={4}>
                        <Chip
                            label={`Alterado: ${((alterado[4] / totalActual) * 100).toFixed(0)}%`}
                            color="warning"
                            size="small"
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid size={4}>
                        <Chip
                            label={`Crítico: ${((critico[4] / totalActual) * 100).toFixed(0)}%`}
                            color="error"
                            size="small"
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ width: '100%', height: 300 }}>
                    <BarChart
                        width={500}
                        height={300}
                        series={[
                            { data: normal, label: 'Normal', color: '#4caf50' },
                            { data: alterado, label: 'Alterado', color: '#ff9800' },
                            { data: critico, label: 'Crítico', color: '#f44336' },
                        ]}
                        xAxis={[{ data: years, scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}
