import { Card, CardContent, Typography, Box, Grid, Chip, Avatar } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Science, Biotech, LocalHospital, Warning } from '@mui/icons-material';

const alertasData = [
    { label: 'Crítica', value: 2, color: '#f44336' },
    { label: 'Atención', value: 5, color: '#ff9800' },
    { label: 'Seguimiento', value: 3, color: '#2196f3' },
    { label: 'Normal', value: 85, color: '#4caf50' },
];

const proximosExamenesData = [
    { examen: 'Hemograma Completo', fecha: '15 Sep 2024', prioridad: 'alta', icono: <LocalHospital /> },
    { examen: 'Perfil Lipídico', fecha: '22 Sep 2024', prioridad: 'media', icono: <Science /> },
    { examen: 'Toxicología Plomo', fecha: '30 Sep 2024', prioridad: 'alta', icono: <Warning /> },
    { examen: 'Biomarcadores', fecha: '05 Oct 2024', prioridad: 'baja', icono: <Biotech /> },
];

const recomendacionesData = [
    'Mantener hidratación adecuada antes de exámenes',
    'Ayuno de 12 horas para perfil lipídico',
    'Evitar exposición a metales 48h antes',
    'Reportar medicamentos actuales al laboratorio',
];

export default function AlertasYSeguimiento() {
    const getPrioridadColor = (prioridad: string) => {
        switch (prioridad) {
            case 'alta': return 'error';
            case 'media': return 'warning';
            case 'baja': return 'success';
            default: return 'default';
        }
    };

    const getPrioridadText = (prioridad: string) => {
        switch (prioridad) {
            case 'alta': return 'URGENTE';
            case 'media': return 'PROGRAMADO';
            case 'baja': return 'RUTINA';
            default: return 'NORMAL';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Alertas y Seguimiento
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={5}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estado de Alertas
                        </Typography>
                        <Box sx={{ height: 200, display: 'flex', justifyContent: 'center' }}>
                            <PieChart
                                series={[{
                                    data: alertasData,
                                    innerRadius: 30,
                                    outerRadius: 80,
                                    paddingAngle: 2,
                                    cornerRadius: 3,
                                }]}
                                width={200}
                                height={200}
                                margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={7}>
                        <Typography variant="subtitle2" gutterBottom>
                            Próximos Exámenes Programados
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {proximosExamenesData.map((item, index) => (
                                <Box key={index} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1.5,
                                    p: 1,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1,
                                    border: item.prioridad === 'alta' ? '1px solid' : 'none',
                                    borderColor: item.prioridad === 'alta' ? 'error.main' : 'transparent'
                                }}>
                                    <Avatar sx={{
                                        width: 32,
                                        height: 32,
                                        mr: 1.5,
                                        bgcolor: getPrioridadColor(item.prioridad) + '.main',
                                        color: 'white'
                                    }}>
                                        {item.icono}
                                    </Avatar>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.examen}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.fecha}
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={getPrioridadText(item.prioridad)}
                                        color={getPrioridadColor(item.prioridad)}
                                        size="small"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Recomendaciones Médicas
                    </Typography>
                    <Grid container spacing={1}>
                        {recomendacionesData.map((recomendacion, index) => (
                            <Grid key={index} size={6}>
                                <Box sx={{
                                    p: 1,
                                    bgcolor: 'primary.light',
                                    borderRadius: 1,
                                    color: 'primary.contrastText'
                                }}>
                                    <Typography variant="caption">
                                        {recomendacion}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
