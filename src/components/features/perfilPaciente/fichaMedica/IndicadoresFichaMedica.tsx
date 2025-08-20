import { Grid, Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import { LocalHospital, Assignment, Healing, Timeline } from '@mui/icons-material';

const metricas = [
    {
        title: 'Total Consultas',
        value: 186,
        target: 200,
        icon: <LocalHospital />,
        color: '#1976d2',
        description: 'Este año',
    },
    {
        title: 'Diagnósticos Activos',
        value: 8,
        target: 10,
        icon: <Assignment />,
        color: '#388e3c',
        description: 'Actualmente',
    },
    {
        title: 'Tratamientos',
        value: 12,
        target: 15,
        icon: <Healing />,
        color: '#f57c00',
        description: 'En curso',
    },
    {
        title: 'Seguimientos',
        value: 24,
        target: 30,
        icon: <Timeline />,
        color: '#7b1fa2',
        description: 'Programados',
    },
];

export default function IndicadoresFichaMedica() {
    return (
        <Grid container spacing={2}>
            {metricas.map((metrica, index) => {
                const porcentaje = (metrica.value / metrica.target) * 100;

                return (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card sx={{ height: 200 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <Box sx={{ color: metrica.color }}>
                                        {metrica.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontSize: '0.9rem' }}>
                                        {metrica.title}
                                    </Typography>
                                </Box>

                                <Typography variant="h3" sx={{ color: metrica.color, fontWeight: 'bold', mb: 1 }}>
                                    {metrica.value}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {metrica.description}
                                </Typography>

                                <Box sx={{ mb: 1 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={Math.min(porcentaje, 100)}
                                        sx={{
                                            height: 8,
                                            borderRadius: 4,
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: metrica.color,
                                            },
                                        }}
                                    />
                                </Box>

                                <Typography variant="caption" color="text.secondary">
                                    {porcentaje.toFixed(0)}% de {metrica.target}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}
