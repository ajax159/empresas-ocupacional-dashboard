import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 45, label: 'Cardiología', color: '#ff6b6b' },
    { id: 1, value: 30, label: 'Neurología', color: '#4ecdc4' },
    { id: 2, value: 15, label: 'Oftalmología', color: '#45b7d1' },
    { id: 3, value: 10, label: 'Otras', color: '#96ceb4' },
];

export default function InterconsultasPorEspecialidad() {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Interconsultas por Especialidad
                </Typography>
                <Box sx={{ width: '100%', height: 300 }}>
                    <PieChart
                        series={[
                            {
                                data,
                                highlightScope: { fade: 'global', highlight: 'item' },
                            },
                        ]}
                        width={400}
                        height={300}
                    />
                </Box>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    {data.map((item) => (
                        <Grid key={item.id} size={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        backgroundColor: item.color,
                                        borderRadius: '50%',
                                    }}
                                />
                                <Typography variant="body2">{item.label}: {item.value}%</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}
