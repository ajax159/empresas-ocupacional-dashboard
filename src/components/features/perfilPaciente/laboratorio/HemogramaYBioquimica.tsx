import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

const hemogramaData = {
    hemoglobina: { valor: 14.2, referencia: '12.0-15.5', estado: 'normal' },
    hematocrito: { valor: 42.5, referencia: '36.0-46.0', estado: 'normal' },
    leucocitos: { valor: 6.8, referencia: '4.0-10.0', estado: 'normal' },
    plaquetas: { valor: 285, referencia: '150-450', estado: 'normal' },
};

const bioquimicaData = {
    glucosa: { valor: 95, referencia: '70-100', estado: 'normal' },
    colesterol: { valor: 185, referencia: '<200', estado: 'normal' },
    trigliceridos: { valor: 145, referencia: '<150', estado: 'normal' },
    creatinina: { valor: 0.9, referencia: '0.6-1.2', estado: 'normal' },
};

export default function HemogramaYBioquimica() {
    const getStatusColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'alto': return 'warning';
            case 'critico': return 'error';
            default: return 'default';
        }
    };

    const getGaugeValue = (valor: number, referencia: string) => {
        const [, max] = referencia.includes('-')
            ? referencia.split('-').map(v => parseFloat(v))
            : [0, parseFloat(referencia.replace('<', ''))];
        return (valor / max) * 100;
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Hemograma y Bioquímica
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Hemograma Completo
                        </Typography>
                        <Grid container spacing={2}>
                            {Object.entries(hemogramaData).map(([key, data]) => (
                                <Grid key={key} size={6}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Gauge
                                            width={120}
                                            height={120}
                                            value={getGaugeValue(data.valor, data.referencia)}
                                            startAngle={-110}
                                            endAngle={110}
                                            sx={{
                                                [`& .MuiGauge-valueText`]: {
                                                    fontSize: 14,
                                                    transform: 'translate(0px, 0px)',
                                                },
                                            }}
                                            text={`${data.valor}`}
                                        />
                                        <Typography variant="caption" display="block">
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </Typography>
                                        <Chip
                                            label={data.estado.toUpperCase()}
                                            color={getStatusColor(data.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Bioquímica Sanguínea
                        </Typography>
                        <Grid container spacing={2}>
                            {Object.entries(bioquimicaData).map(([key, data]) => (
                                <Grid key={key} size={6}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Gauge
                                            width={120}
                                            height={120}
                                            value={getGaugeValue(data.valor, data.referencia)}
                                            startAngle={-110}
                                            endAngle={110}
                                            sx={{
                                                [`& .MuiGauge-valueText`]: {
                                                    fontSize: 14,
                                                    transform: 'translate(0px, 0px)',
                                                },
                                            }}
                                            text={`${data.valor}`}
                                        />
                                        <Typography variant="caption" display="block">
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </Typography>
                                        <Chip
                                            label={data.estado.toUpperCase()}
                                            color={getStatusColor(data.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                        🩸 Últimos resultados de laboratorio | Valores dentro de rangos normales
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
