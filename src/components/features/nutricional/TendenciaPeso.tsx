import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TendenciaPeso() {
    const meses = [
        '01/07', '02/07', '03/07', '04/07', '05/07', '06/07',
        '07/07', '08/07', '09/07', '10/07', '11/07', '12/07'
    ];

    const pesoData = {
        hombres: [78.2, 78.5, 78.1, 77.8, 77.5, 77.3, 77.0, 76.8, 76.5, 76.3, 76.1, 75.9],
        mujeres: [65.1, 65.3, 65.0, 64.8, 64.5, 64.3, 64.0, 63.8, 63.6, 63.4, 63.2, 63.0],
        promedio: [71.6, 71.9, 71.5, 71.3, 71.0, 70.8, 70.5, 70.3, 70.0, 69.8, 69.6, 69.4]
    };

    const pesoFinalPromedio = pesoData.promedio[pesoData.promedio.length - 1];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Tendencia de Peso Promedio
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Peso Promedio Actual
                        </Typography>
                        <Typography variant="h6" color="primary">
                            {pesoFinalPromedio} kg
                        </Typography>
                    </Box>
                </Stack>

                <LineChart
                    xAxis={[{
                        scaleType: 'point',
                        data: meses
                    }]}
                    series={[
                        {
                            id: 'hombres',
                            label: 'Hombres',
                            data: pesoData.hombres,
                            color: '#1976d2',
                            curve: 'linear'
                        },
                        {
                            id: 'mujeres',
                            label: 'Mujeres',
                            data: pesoData.mujeres,
                            color: '#e91e63',
                            curve: 'linear'
                        },
                        {
                            id: 'promedio',
                            label: 'Promedio General',
                            data: pesoData.promedio,
                            color: '#ff9800',
                            curve: 'linear'
                        }
                    ]}
                    height={300}
                    grid={{ horizontal: true, vertical: false }}
                />

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Evolución del peso promedio por género y general. Datos basados en controles mensuales.
                </Typography>
            </CardContent>
        </Card>
    );
}
