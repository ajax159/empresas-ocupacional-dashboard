import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const evolucionEspirometriaData = [
    { año: 2020, fvc: 4.1, fev1: 3.3, fev1_fvc: 0.80, pef: 510 },
    { año: 2021, fvc: 4.2, fev1: 3.4, fev1_fvc: 0.81, pef: 515 },
    { año: 2022, fvc: 4.1, fev1: 3.3, fev1_fvc: 0.80, pef: 505 },
    { año: 2023, fvc: 4.2, fev1: 3.4, fev1_fvc: 0.81, pef: 520 },
    { año: 2024, fvc: 4.2, fev1: 3.4, fev1_fvc: 0.81, pef: 520 }
];

const tendenciasData = [
    { parametro: 'FVC', tendencia: 'estable', variacion: '+2.4%', significancia: 'normal' },
    { parametro: 'FEV1', tendencia: 'estable', variacion: '+3.0%', significancia: 'normal' },
    { parametro: 'FEV1/FVC', tendencia: 'estable', variacion: '+1.3%', significancia: 'normal' },
    { parametro: 'PEF', tendencia: 'aumentando', variacion: '+2.0%', significancia: 'normal' }
];

const alertasData = [
    { año: 2021, alerta: 'Disminución leve FVC', resolucion: 'Normalizada en control posterior' },
    { año: 2022, alerta: 'PEF por debajo del percentil 5', resolucion: 'Mejoría con tratamiento broncodilatador' }
];

export default function EvolucionEspirometricaTemporal() {
    const años = evolucionEspirometriaData.map(item => item.año);
    const fvc = evolucionEspirometriaData.map(item => item.fvc);
    const fev1 = evolucionEspirometriaData.map(item => item.fev1);
    const fev1_fvc = evolucionEspirometriaData.map(item => item.fev1_fvc * 100);

    const getTendenciaColor = (tendencia: string) => {
        switch (tendencia) {
            case 'estable': return 'success';
            case 'aumentando': return 'info';
            case 'disminuyendo': return 'warning';
            case 'deterioro': return 'error';
            default: return 'default';
        }
    };

    const getTendenciaIcon = (tendencia: string) => {
        switch (tendencia) {
            case 'estable': return '→';
            case 'aumentando': return '↗';
            case 'disminuyendo': return '↘';
            case 'deterioro': return '⚠';
            default: return '→';
        }
    };

    const getSignificanciaColor = (significancia: string) => {
        switch (significancia) {
            case 'normal': return 'success';
            case 'atencion': return 'warning';
            case 'significativo': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Espirométrica Temporal
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias 2020-2024
                        </Typography>
                        <Box sx={{ height: 240 }}>
                            <LineChart
                                width={400}
                                height={240}
                                series={[
                                    {
                                        data: fvc,
                                        label: 'FVC (L)',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: fev1,
                                        label: 'FEV1 (L)',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: fev1_fvc,
                                        label: 'FEV1/FVC (%)',
                                        color: '#4caf50',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Análisis de Tendencias
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {tendenciasData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.parametro}
                                        </Typography>
                                        <Typography variant="h6">
                                            {getTendenciaIcon(item.tendencia)}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                        <Chip
                                            label={item.tendencia.toUpperCase()}
                                            color={getTendenciaColor(item.tendencia)}
                                            size="small"
                                        />
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {item.variacion}
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={item.significancia.toUpperCase()}
                                        color={getSignificanciaColor(item.significancia)}
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {alertasData.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Alertas Históricas
                        </Typography>
                        <Grid container spacing={1}>
                            {alertasData.map((alerta, index) => (
                                <Grid key={index} size={6}>
                                    <Box sx={{
                                        p: 1.5,
                                        bgcolor: 'warning.light',
                                        borderRadius: 1,
                                        border: '1px solid',
                                        borderColor: 'warning.main'
                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                                            {alerta.año}: {alerta.alerta}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {alerta.resolucion}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📈 Función pulmonar estable en últimos 5 años | Sin deterioro significativo
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
