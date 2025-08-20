import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

const espirometriaActualData = {
    fvc: { valor: 4.2, predicho: 4.5, porcentaje: 93, estado: 'normal' },
    fev1: { valor: 3.4, predicho: 3.6, porcentaje: 94, estado: 'normal' },
    fev1_fvc: { valor: 0.81, predicho: 0.80, porcentaje: 101, estado: 'normal' },
    pef: { valor: 520, predicho: 550, porcentaje: 95, estado: 'normal' }
};

const interpretacionData = {
    patron: 'Normal',
    severidad: 'Sin alteración',
    calidad: 'Excelente',
    colaboracion: 'Adecuada',
    criteriosATS: 'Cumple'
};

const comparacionReferenciaData = [
    { parametro: 'FVC', actual: 93, referencia: 80, estado: 'normal' },
    { parametro: 'FEV1', actual: 94, referencia: 80, estado: 'normal' },
    { parametro: 'FEV1/FVC', actual: 101, referencia: 70, estado: 'normal' },
    { parametro: 'PEF', actual: 95, referencia: 80, estado: 'normal' }
];

export default function ParametrosEspirometricosActuales() {
    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'leve': return 'info';
            case 'moderado': return 'warning';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getPatronColor = (patron: string) => {
        switch (patron) {
            case 'Normal': return 'success';
            case 'Obstructivo': return 'warning';
            case 'Restrictivo': return 'error';
            case 'Mixto': return 'error';
            default: return 'default';
        }
    };

    const getGaugeValue = (porcentaje: number) => Math.min(porcentaje, 120);

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Parámetros Espirométricos Actuales
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Valores Principales
                        </Typography>
                        <Grid container spacing={2}>
                            {Object.entries(espirometriaActualData).map(([key, data]) => (
                                <Grid key={key} size={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Gauge
                                            width={120}
                                            height={120}
                                            value={getGaugeValue(data.porcentaje)}
                                            startAngle={-110}
                                            endAngle={110}
                                            sx={{
                                                [`& .MuiGauge-valueText`]: {
                                                    fontSize: 12,
                                                    transform: 'translate(0px, 0px)',
                                                },
                                            }}
                                            text={`${data.porcentaje}%`}
                                        />
                                        <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                                            {key.toUpperCase()}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                                            {data.valor} / {data.predicho}
                                        </Typography>
                                        <Chip
                                            label={data.estado.toUpperCase()}
                                            color={getEstadoColor(data.estado)}
                                            size="small"
                                            sx={{ mt: 0.5 }}
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Interpretación
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                                    Patrón Respiratorio
                                </Typography>
                                <Chip
                                    label={interpretacionData.patron}
                                    color={getPatronColor(interpretacionData.patron)}
                                    sx={{ mb: 1 }}
                                />
                                <Typography variant="caption" display="block">
                                    Severidad: {interpretacionData.severidad}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                                    Calidad del Examen
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>
                                    Calidad: {interpretacionData.calidad}
                                </Typography>
                                <Typography variant="caption">
                                    Colaboración: {interpretacionData.colaboracion}
                                </Typography>
                            </Box>

                            <Box sx={{ p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                                    Criterios ATS
                                </Typography>
                                <Chip
                                    label={interpretacionData.criteriosATS}
                                    color="success"
                                    size="small"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Comparación con Valores de Referencia
                    </Typography>
                    <Grid container spacing={1}>
                        {comparacionReferenciaData.map((item, index) => (
                            <Grid key={index} size={3}>
                                <Box sx={{
                                    p: 1,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1,
                                    textAlign: 'center'
                                }}>
                                    <Typography variant="caption" display="block">
                                        {item.parametro}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {item.actual}%
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Ref: ≥{item.referencia}%
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Función pulmonar normal | Sin evidencia de alteración ventilatoria
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
