import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const datosFamiliaresMujeresData = [
    { label: 'Sin datos reproductivos', value: 35, color: '#e0e0e0' },
    { label: 'Con embarazos', value: 45, color: '#4caf50' },
    { label: 'Sin embarazos', value: 20, color: '#2196f3' },
];

const metodosAnticonceptivosData = [
    { metodo: 'Píldoras', porcentaje: 35, tipo: 'Hormonal' },
    { metodo: 'DIU', porcentaje: 25, tipo: 'Dispositivo' },
    { metodo: 'Preservativo', porcentaje: 20, tipo: 'Barrera' },
    { metodo: 'Natural', porcentaje: 10, tipo: 'Natural' },
    { metodo: 'Ninguno', porcentaje: 10, tipo: 'Ninguno' },
];

const riesgosFamiliaresData = [
    { riesgo: 'Diabetes Familiar', prevalencia: 30 },
    { riesgo: 'Hipertensión Familiar', prevalencia: 45 },
    { riesgo: 'Cáncer Familiar', prevalencia: 15 },
    { riesgo: 'Cardiopatías', prevalencia: 25 },
    { riesgo: 'Enf. Mentales', prevalencia: 20 },
];

export default function AntecedentesReproductivosYFamiliares() {
    const getColorByPercentage = (value: number) => {
        if (value <= 15) return 'success';
        if (value <= 30) return 'warning';
        return 'error';
    };

    const getMethodColor = (metodo: string) => {
        switch (metodo) {
            case 'Píldoras': return 'primary';
            case 'DIU': return 'secondary';
            case 'Preservativo': return 'info';
            case 'Natural': return 'success';
            case 'Ninguno': return 'warning';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Antecedentes Reproductivos y Familiares
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={5}>
                        <Typography variant="subtitle2" gutterBottom>
                            Datos Reproductivos (Mujeres)
                        </Typography>
                        <Box sx={{ height: 200, display: 'flex', justifyContent: 'center' }}>
                            <PieChart
                                series={[{
                                    data: datosFamiliaresMujeresData,
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
                            Métodos Anticonceptivos y Riesgos Familiares
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                                Métodos Anticonceptivos:
                            </Typography>
                            <Grid container spacing={1}>
                                {metodosAnticonceptivosData.map((item, index) => (
                                    <Grid key={index} size={6}>
                                        <Chip
                                            label={`${item.metodo}: ${item.porcentaje}%`}
                                            color={getMethodColor(item.metodo)}
                                            size="small"
                                            sx={{
                                                width: '100%',
                                                '& .MuiChip-label': { fontSize: '0.7rem' }
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                                Antecedentes Familiares:
                            </Typography>
                            {riesgosFamiliaresData.map((item, index) => (
                                <Box key={index} sx={{ mb: 1.5 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                            {item.riesgo}
                                        </Typography>
                                        <Chip
                                            label={`${item.prevalencia}%`}
                                            color={getColorByPercentage(item.prevalencia)}
                                            size="small"
                                        />
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.prevalencia * 2}
                                        color={getColorByPercentage(item.prevalencia)}
                                        sx={{ height: 6, borderRadius: 1 }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                        📊 Datos reproductivos aplicables solo a trabajadoras mujeres |
                        👨‍👩‍👧‍👦 Antecedentes familiares declarados en exámenes médicos ocupacionales
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
