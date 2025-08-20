import { Card, CardContent, Typography, Box, Grid, Chip, Avatar } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { Visibility, RemoveRedEye, Warning, CheckCircle } from '@mui/icons-material';

const evolucionAgudezaData = [
    { fecha: 'Ene 2023', od: 1.0, oi: 0.9 },
    { fecha: 'Abr 2023', od: 1.0, oi: 0.8 },
    { fecha: 'Jul 2023', od: 0.9, oi: 0.8 },
    { fecha: 'Oct 2023', od: 0.9, oi: 0.8 },
    { fecha: 'Ene 2024', od: 1.0, oi: 0.8 }
];

const hallazgosData = [
    { hallazgo: 'Conjuntivitis', frecuencia: 15, gravedad: 'leve', icono: <Warning /> },
    { hallazgo: 'Ojo Seco', frecuencia: 25, gravedad: 'leve', icono: <RemoveRedEye /> },
    { hallazgo: 'Pterigion', frecuencia: 8, gravedad: 'moderado', icono: <Visibility /> },
    { hallazgo: 'Normal', frecuencia: 52, gravedad: 'normal', icono: <CheckCircle /> }
];

const recomendacionesData = [
    'Uso obligatorio de gafas de seguridad',
    'Pausas visuales cada 2 horas',
    'Lubricación ocular en ambientes secos',
    'Control oftalmológico semestral'
];

export default function EvolucionYHallazgos() {
    const fechas = evolucionAgudezaData.map(item => item.fecha);
    const agudezaOD = evolucionAgudezaData.map(item => item.od);
    const agudezaOI = evolucionAgudezaData.map(item => item.oi);

    const getGravedadColor = (gravedad: string) => {
        switch (gravedad) {
            case 'normal': return 'success';
            case 'leve': return 'info';
            case 'moderado': return 'warning';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getIconColor = (gravedad: string) => {
        switch (gravedad) {
            case 'normal': return 'success.main';
            case 'leve': return 'info.main';
            case 'moderado': return 'warning.main';
            case 'severo': return 'error.main';
            default: return 'grey.500';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución y Hallazgos Oftalmológicos
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={7}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución de Agudeza Visual (Último Año)
                        </Typography>
                        <Box sx={{ height: 220 }}>
                            <LineChart
                                width={350}
                                height={220}
                                series={[
                                    {
                                        data: agudezaOD,
                                        label: 'Ojo Derecho',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: agudezaOI,
                                        label: 'Ojo Izquierdo',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: fechas, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={5}>
                        <Typography variant="subtitle2" gutterBottom>
                            Hallazgos Frecuentes
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {hallazgosData.map((item, index) => (
                                <Box key={index} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1.5,
                                    p: 1,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1
                                }}>
                                    <Avatar sx={{
                                        width: 32,
                                        height: 32,
                                        mr: 1.5,
                                        bgcolor: getIconColor(item.gravedad)
                                    }}>
                                        {item.icono}
                                    </Avatar>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.hallazgo}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.frecuencia}% de casos
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={item.gravedad.toUpperCase()}
                                        color={getGravedadColor(item.gravedad)}
                                        size="small"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Recomendaciones de Salud Ocupacional
                    </Typography>
                    <Grid container spacing={1}>
                        {recomendacionesData.map((recomendacion, index) => (
                            <Grid key={index} size={6}>
                                <Box sx={{
                                    p: 1,
                                    bgcolor: 'primary.light',
                                    borderRadius: 1,
                                    color: 'primary.contrastText',
                                    minHeight: 40,
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Typography variant="caption">
                                        {recomendacion}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📊 Monitoreo continuo de salud visual | Última evaluación: Enero 2024
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
