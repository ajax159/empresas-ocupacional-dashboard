import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

const kpis = [
    {
        title: 'Total Interconsultas',
        value: 28,
        target: 30,
        unit: '',
        color: '#1976d2',
    },
    {
        title: 'Tiempo Promedio Respuesta',
        value: 3.2,
        target: 5,
        unit: 'días',
        color: '#2e7d32',
    },
    {
        title: 'Tasa de Cumplimiento',
        value: 92,
        target: 100,
        unit: '%',
        color: '#ed6c02',
    },
    {
        title: 'Interconsultas Urgentes',
        value: 5,
        target: 10,
        unit: '',
        color: '#d32f2f',
    },
];

export default function KPIsInterconsultas() {
    return (
        <Grid container spacing={2}>
            {kpis.map((kpi, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card sx={{ height: 280 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '0.9rem' }}>
                                {kpi.title}
                            </Typography>                            <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                                <Gauge
                                    width={120}
                                    height={120}
                                    value={kpi.value}
                                    valueMax={kpi.target}
                                    startAngle={-110}
                                    endAngle={110}
                                    sx={{
                                        [`& .MuiGauge-valueText`]: {
                                            fontSize: 16,
                                            transform: 'translate(0px, 0px)',
                                        },
                                    }}
                                />
                            </Box>

                            <Typography variant="h4" sx={{ color: kpi.color, fontWeight: 'bold' }}>
                                {kpi.value}{kpi.unit}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Meta: {kpi.target}{kpi.unit}
                            </Typography>

                            <Box sx={{ mt: 1 }}>
                                <Typography
                                    variant="caption"
                                    color={kpi.value >= kpi.target * 0.8 ? 'success.main' : 'warning.main'}
                                >
                                    {((kpi.value / kpi.target) * 100).toFixed(0)}% del objetivo
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
