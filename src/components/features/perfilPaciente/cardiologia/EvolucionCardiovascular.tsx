import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const evolucionCardiovascularData = [
    { año: 2020, presionSistolica: 120, colesterolTotal: 190, hdl: 45, ldl: 120, trigliceridos: 150 },
    { año: 2021, presionSistolica: 125, colesterolTotal: 185, hdl: 48, ldl: 115, trigliceridos: 145 },
    { año: 2022, presionSistolica: 118, colesterolTotal: 180, hdl: 50, ldl: 110, trigliceridos: 140 },
    { año: 2023, presionSistolica: 122, colesterolTotal: 175, hdl: 52, ldl: 105, trigliceridos: 135 },
    { año: 2024, presionSistolica: 119, colesterolTotal: 170, hdl: 55, ldl: 100, trigliceridos: 130 }
];

const indicadoresCardiovasculareData = [
    { indicador: 'Presión Arterial', valor: 85, meta: 90, estado: 'bueno' },
    { indicador: 'Perfil Lipídico', valor: 92, meta: 90, estado: 'excelente' },
    { indicador: 'Función Cardíaca', valor: 88, meta: 85, estado: 'excelente' },
    { indicador: 'Capacidad Física', valor: 90, meta: 80, estado: 'excelente' }
];

const recomendacionesData = [
    'Mantener actividad física regular (150 min/semana)',
    'Dieta mediterránea baja en sodio',
    'Control anual de perfil lipídico',
    'Monitoreo de presión arterial mensual'
];

export default function EvolucionCardiovascular() {
    const años = evolucionCardiovascularData.map(item => item.año);
    const presionSistolica = evolucionCardiovascularData.map(item => item.presionSistolica);
    const colesterolTotal = evolucionCardiovascularData.map(item => item.colesterolTotal);
    const hdl = evolucionCardiovascularData.map(item => item.hdl);

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'excelente': return 'success';
            case 'bueno': return 'info';
            case 'regular': return 'warning';
            case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    const getTendencia = (datos: number[]) => {
        if (datos.length < 2) return 'estable';
        const ultimoValor = datos[datos.length - 1];
        const penultimoValor = datos[datos.length - 2];
        if (ultimoValor > penultimoValor) return 'aumentando';
        if (ultimoValor < penultimoValor) return 'disminuyendo';
        return 'estable';
    };

    const getTendenciaIcon = (tendencia: string) => {
        switch (tendencia) {
            case 'aumentando': return '↗️';
            case 'disminuyendo': return '↘️';
            case 'estable': return '→';
            default: return '→';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Cardiovascular
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias Cardiovasculares (2020-2024)
                        </Typography>
                        <Box sx={{ height: 240 }}>
                            <LineChart
                                width={400}
                                height={240}
                                series={[
                                    {
                                        data: presionSistolica,
                                        label: 'Presión Sistólica (mmHg)',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                    {
                                        data: colesterolTotal,
                                        label: 'Colesterol Total (mg/dL)',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: hdl,
                                        label: 'HDL (mg/dL)',
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
                            Indicadores de Salud
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {indicadoresCardiovasculareData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                            {item.indicador}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                            {item.valor}%
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={item.valor}
                                            color={item.estado === 'excelente' ? 'success' :
                                                item.estado === 'bueno' ? 'info' :
                                                    item.estado === 'regular' ? 'warning' : 'error'}
                                            sx={{ height: 6, borderRadius: 1, flexGrow: 1 }}
                                        />
                                        <Chip
                                            label={item.estado.toUpperCase()}
                                            color={getEstadoColor(item.estado)}
                                            size="small"
                                        />
                                    </Box>
                                    <Typography variant="caption" color="text.secondary">
                                        Meta: {item.meta}%
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Análisis de Tendencias
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <Box sx={{ p: 1, bgcolor: 'success.light', borderRadius: 1, textAlign: 'center' }}>
                                <Typography variant="caption" display="block">
                                    Presión Arterial
                                </Typography>
                                <Typography variant="h6">
                                    {getTendenciaIcon(getTendencia(presionSistolica))}
                                </Typography>
                                <Typography variant="caption">
                                    {getTendencia(presionSistolica)}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={3}>
                            <Box sx={{ p: 1, bgcolor: 'info.light', borderRadius: 1, textAlign: 'center' }}>
                                <Typography variant="caption" display="block">
                                    Colesterol
                                </Typography>
                                <Typography variant="h6">
                                    {getTendenciaIcon(getTendencia(colesterolTotal))}
                                </Typography>
                                <Typography variant="caption">
                                    {getTendencia(colesterolTotal)}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={6}>
                            <Box sx={{ p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
                                    Recomendaciones Principales:
                                </Typography>
                                <Typography variant="caption">
                                    {recomendacionesData[0]}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        📈 Tendencia cardiovascular positiva | Reducción de factores de riesgo en últimos 2 años
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
