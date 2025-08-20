import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const evolucionData = [
    { fecha: 'Ene 2023', glucosa: 88, colesterol: 180, creatinina: 0.8, hemoglobina: 14.1 },
    { fecha: 'Mar 2023', glucosa: 92, colesterol: 175, creatinina: 0.9, hemoglobina: 14.3 },
    { fecha: 'Jun 2023', glucosa: 85, colesterol: 185, creatinina: 0.8, hemoglobina: 14.0 },
    { fecha: 'Sep 2023', glucosa: 95, colesterol: 190, creatinina: 0.9, hemoglobina: 14.2 },
    { fecha: 'Dic 2023', glucosa: 90, colesterol: 185, creatinina: 0.9, hemoglobina: 14.2 },
];

const tendenciasData = [
    { parametro: 'Glucosa', tendencia: 'estable', variacion: '+2%' },
    { parametro: 'Colesterol', tendencia: 'aumentando', variacion: '+8%' },
    { parametro: 'Creatinina', tendencia: 'estable', variacion: '0%' },
    { parametro: 'Hemoglobina', tendencia: 'estable', variacion: '+1%' },
];

export default function EvolucionLaboratorio() {
    const fechas = evolucionData.map(item => item.fecha);
    const glucosa = evolucionData.map(item => item.glucosa);
    const colesterol = evolucionData.map(item => item.colesterol);
    const creatinina = evolucionData.map(item => item.creatinina * 10);
    const hemoglobina = evolucionData.map(item => item.hemoglobina);

    const getTendenciaColor = (tendencia: string) => {
        switch (tendencia) {
            case 'estable': return 'success';
            case 'aumentando': return 'warning';
            case 'disminuyendo': return 'info';
            case 'critico': return 'error';
            default: return 'default';
        }
    };

    const getTendenciaIcon = (tendencia: string) => {
        switch (tendencia) {
            case 'estable': return '→';
            case 'aumentando': return '↗';
            case 'disminuyendo': return '↘';
            case 'critico': return '⚠';
            default: return '→';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución de Laboratorio
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias Anuales 2023
                        </Typography>
                        <Box sx={{ height: 240 }}>
                            <LineChart
                                width={400}
                                height={240}
                                series={[
                                    {
                                        data: glucosa,
                                        label: 'Glucosa (mg/dL)',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: colesterol,
                                        label: 'Colesterol (mg/dL)',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: creatinina,
                                        label: 'Creatinina (x10)',
                                        color: '#4caf50',
                                        curve: 'linear'
                                    },
                                    {
                                        data: hemoglobina,
                                        label: 'Hemoglobina (g/dL)',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                ]}
                                xAxis={[{ data: fechas, scaleType: 'point' }]}
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
                                    <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.parametro}
                                        </Typography>
                                        <Typography variant="h6" sx={{ ml: 1 }}>
                                            {getTendenciaIcon(item.tendencia)}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Chip
                                            label={item.tendencia.toUpperCase()}
                                            color={getTendenciaColor(item.tendencia)}
                                            size="small"
                                        />
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {item.variacion}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1, color: 'info.contrastText' }}>
                    <Typography variant="caption">
                        📈 Monitoreo continuo de parámetros clave | Última actualización: Diciembre 2023
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
