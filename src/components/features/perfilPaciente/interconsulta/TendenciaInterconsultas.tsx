import { Box, Card, CardContent, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const xLabels = [
    '2021', '2022', '2023', '2024', '2025'
];

const data = [6, 9, 7, 5, 8, 6];

export default function TendenciaInterconsultas() {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Tendencia de Interconsultas
                </Typography>
                <Box sx={{ width: '100%', height: 300 }}>
                    <LineChart
                        width={500}
                        height={300}
                        series={[
                            {
                                data,
                                label: 'Interconsultas',
                                color: '#8884d8',
                            },
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Promedio mensual: {(data.reduce((a, b) => a + b, 0) / data.length).toFixed(1)} interconsultas
                </Typography>
            </CardContent>
        </Card>
    );
}
