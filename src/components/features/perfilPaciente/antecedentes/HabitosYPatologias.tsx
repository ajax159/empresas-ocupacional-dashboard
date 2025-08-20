import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const habitosData = [
    { habito: 'Tabaco', consume: 25, noConsume: 75, tipo: 'Cigarrillos' },
    { habito: 'Alcohol', consume: 40, noConsume: 60, tipo: 'Social' },
    { habito: 'Drogas', consume: 5, noConsume: 95, tipo: 'Recreativas' },
    { habito: 'Medicamentos', consume: 65, noConsume: 35, tipo: 'Prescritos' },
];

const patologiasData = [
    { categoria: 'Hipertensión', cantidad: 18 },
    { categoria: 'Diabetes', cantidad: 12 },
    { categoria: 'Asma', cantidad: 8 },
    { categoria: 'Obesidad', cantidad: 22 },
    { categoria: 'Otros', cantidad: 15 },
];

export default function HabitosYPatologias() {
    const habitos = habitosData.map(item => item.habito);
    const consumo = habitosData.map(item => item.consume);
    const noConsumo = habitosData.map(item => item.noConsume);

    const getColorByValue = (value: number) => {
        if (value <= 10) return 'success';
        if (value <= 30) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Hábitos y Patologías
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={7}>
                        <Typography variant="subtitle2" gutterBottom>
                            Hábitos de Consumo (%)
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    { data: consumo, label: 'Consume', color: '#f44336' },
                                    { data: noConsumo, label: 'No consume', color: '#4caf50' },
                                ]}
                                xAxis={[{ data: habitos, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={5}>
                        <Typography variant="subtitle2" gutterBottom>
                            Patologías Declaradas
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {patologiasData.map((item, index) => (
                                <Box key={index} sx={{ mb: 1.5 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">{item.categoria}</Typography>
                                        <Chip
                                            label={`${item.cantidad}%`}
                                            color={getColorByValue(item.cantidad)}
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{
                                        width: '100%',
                                        height: 6,
                                        bgcolor: 'grey.200',
                                        borderRadius: 1,
                                        overflow: 'hidden'
                                    }}>
                                        <Box sx={{
                                            width: `${item.cantidad * 4}%`,
                                            height: '100%',
                                            bgcolor: item.cantidad <= 10 ? 'success.main' : item.cantidad <= 20 ? 'warning.main' : 'error.main',
                                            borderRadius: 1,
                                        }} />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={1}>
                        {habitosData.map((item, index) => (
                            <Grid key={index} size={3}>
                                <Chip
                                    label={`${item.habito}: ${item.tipo}`}
                                    size="small"
                                    color={item.consume > 30 ? 'error' : item.consume > 10 ? 'warning' : 'default'}
                                    sx={{ width: '100%', '& .MuiChip-label': { fontSize: '0.7rem' } }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
