import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const consultas2023 = [12, 8, 15, 10, 18, 22, 16, 14, 20, 17, 13, 9];
const consultas2024 = [15, 11, 18, 13, 21, 25, 19, 17, 23, 20, 16, 12];

export default function ConsultasMedicasAnuales() {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Consultas Médicas Anuales
                </Typography>

                <Box sx={{ width: '100%', height: 300 }}>
                    <LineChart
                        width={500}
                        height={300}
                        series={[
                            {
                                data: consultas2023,
                                label: '2023',
                                color: '#1976d2',
                                curve: 'linear',
                            },
                            {
                                data: consultas2024,
                                label: '2024',
                                color: '#388e3c',
                                curve: 'linear',
                            },
                        ]}
                        xAxis={[{ scaleType: 'point', data: months }]}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </Box>

                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">
                        Promedio 2023: {(consultas2023.reduce((a, b) => a + b) / 12).toFixed(1)} consultas/mes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Promedio 2024: {(consultas2024.reduce((a, b) => a + b) / 12).toFixed(1)} consultas/mes
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
