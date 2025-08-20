import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const presionOcularData = [
    { ojo: 'OD', presion: 14, normal: 18, estado: 'normal' },
    { ojo: 'OI', presion: 16, normal: 18, estado: 'normal' }
];

const campoVisualData = [
    { sector: 'Superior', od: 95, oi: 92 },
    { sector: 'Inferior', od: 98, oi: 96 },
    { sector: 'Nasal', od: 94, oi: 95 },
    { sector: 'Temporal', od: 97, oi: 93 }
];

const riesgosOcularesData = [
    { riesgo: 'Exposición UV', nivel: 65, limite: 100, estado: 'medio' },
    { riesgo: 'Partículas', nivel: 45, limite: 100, estado: 'bajo' },
    { riesgo: 'Químicos', nivel: 80, limite: 100, estado: 'alto' },
    { riesgo: 'Pantallas', nivel: 90, limite: 100, estado: 'alto' }
];

export default function PresionOcularYCampoVisual() {
    const sectores = campoVisualData.map(item => item.sector);
    const valoresOD = campoVisualData.map(item => item.od);
    const valoresOI = campoVisualData.map(item => item.oi);

    const getStatusColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'elevada': return 'warning';
            case 'alta': return 'error';
            default: return 'default';
        }
    };

    const getRiesgoColor = (estado: string) => {
        switch (estado) {
            case 'bajo': return 'success';
            case 'medio': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getPressureStatus = (presion: number) => {
        if (presion <= 15) return 'normal';
        if (presion <= 21) return 'elevada';
        return 'alta';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Presión Ocular y Campo Visual
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Presión Intraocular
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {presionOcularData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.ojo}
                                        </Typography>
                                        <Typography variant="h6">
                                            {item.presion} mmHg
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="caption" color="text.secondary">
                                            Normal: &lt;{item.normal} mmHg
                                        </Typography>
                                        <Chip
                                            label={getPressureStatus(item.presion).toUpperCase()}
                                            color={getStatusColor(getPressureStatus(item.presion))}
                                            size="small"
                                        />
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={(item.presion / item.normal) * 100}
                                        color={getPressureStatus(item.presion) === 'normal' ? 'success' :
                                            getPressureStatus(item.presion) === 'elevada' ? 'warning' : 'error'}
                                        sx={{ height: 6, borderRadius: 1, mt: 1 }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Campo Visual por Sectores
                        </Typography>
                        <Box sx={{ height: 200, mt: 1 }}>
                            <BarChart
                                width={400}
                                height={200}
                                series={[
                                    { data: valoresOD, label: 'Ojo Derecho (%)', color: '#2196f3' },
                                    { data: valoresOI, label: 'Ojo Izquierdo (%)', color: '#ff9800' },
                                ]}
                                xAxis={[{ data: sectores, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Riesgos Ocupacionales Oculares
                    </Typography>
                    <Grid container spacing={2}>
                        {riesgosOcularesData.map((item, index) => (
                            <Grid key={index} size={3}>
                                <Box sx={{
                                    p: 1.5,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1,
                                    border: item.estado === 'alto' ? '1px solid' : 'none',
                                    borderColor: item.estado === 'alto' ? 'error.main' : 'transparent'
                                }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                        {item.riesgo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="caption">
                                            {item.nivel}%
                                        </Typography>
                                        <Chip
                                            label={item.estado.toUpperCase()}
                                            color={getRiesgoColor(item.estado)}
                                            size="small"
                                        />
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.nivel}
                                        color={item.estado === 'bajo' ? 'success' :
                                            item.estado === 'medio' ? 'warning' : 'error'}
                                        sx={{ height: 6, borderRadius: 1 }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
