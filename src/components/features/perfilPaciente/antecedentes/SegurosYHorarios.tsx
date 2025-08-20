import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const segurosData = [
    { id: 0, value: 45, label: 'EsSalud', color: '#1976d2' },
    { id: 1, value: 30, label: 'EPS', color: '#388e3c' },
    { id: 2, value: 15, label: 'SCTR', color: '#f57c00' },
    { id: 3, value: 7, label: 'Otro', color: '#7b1fa2' },
    { id: 4, value: 3, label: 'Niega', color: '#d32f2f' },
];

const horasTrabajoData = [
    { tipo: 'A demanda', cantidad: 12, porcentaje: 15 },
    { tipo: 'Menor a 6hs', cantidad: 18, porcentaje: 22 },
    { tipo: '6hs al día', cantidad: 20, porcentaje: 25 },
    { tipo: '8hs al día', cantidad: 25, porcentaje: 31 },
    { tipo: '12hs al día', cantidad: 5, porcentaje: 7 },
];

export default function SegurosYHorarios() {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Seguros y Horarios de Trabajo
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tipo de Seguro
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <PieChart
                                series={[
                                    {
                                        data: segurosData,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        innerRadius: 20,
                                        outerRadius: 80,
                                    },
                                ]}
                                width={280}
                                height={200}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Horas de Trabajo
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {horasTrabajoData.map((item, index) => (
                                <Box key={index} sx={{ mb: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">{item.tipo}</Typography>
                                        <Typography variant="body2">{item.cantidad}</Typography>
                                    </Box>
                                    <Box sx={{
                                        width: '100%',
                                        height: 8,
                                        bgcolor: 'grey.200',
                                        borderRadius: 1,
                                        overflow: 'hidden'
                                    }}>
                                        <Box sx={{
                                            width: `${item.porcentaje}%`,
                                            height: '100%',
                                            bgcolor: 'primary.main',
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
                        {segurosData.map((item) => (
                            <Grid key={item.id} size={2.4}>
                                <Chip
                                    label={`${item.label}: ${item.value}%`}
                                    size="small"
                                    sx={{
                                        width: '100%',
                                        bgcolor: item.color,
                                        color: 'white',
                                        '& .MuiChip-label': { fontSize: '0.7rem' }
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
