import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function PrevalenciaPresbicia() {
    const presbiciaData = [
        { edad: '35-39', casos: 5, total: 120, porcentaje: 4.2 },
        { edad: '40-44', casos: 25, total: 110, porcentaje: 22.7 },
        { edad: '45-49', casos: 45, total: 95, porcentaje: 47.4 },
        { edad: '50-54', casos: 68, total: 85, porcentaje: 80.0 },
        { edad: '55-59', casos: 42, total: 50, porcentaje: 84.0 },
        { edad: '60+', casos: 28, total: 30, porcentaje: 93.3 },
    ];

    const edades = presbiciaData.map(item => item.edad);
    const totalCasos = presbiciaData.reduce((sum, item) => sum + item.casos, 0);
    const totalTrabajadores = presbiciaData.reduce((sum, item) => sum + item.total, 0);
    const prevalenciaGeneral = ((totalCasos / totalTrabajadores) * 100).toFixed(1);

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Prevalencia de Presbicia por Grupo de Edad
                </Typography>

                <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Casos Totales
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {totalCasos}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Prevalencia General
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {prevalenciaGeneral}%
                        </Typography>
                    </Box>
                </Stack>

                <Box sx={{ mt: 2 }}>
                    <BarChart
                        xAxis={[{
                            scaleType: 'band',
                            data: edades
                        }]}
                        series={[
                            {
                                label: 'Casos de Presbicia',
                                data: presbiciaData.map(item => item.casos),
                                color: '#1976d2'
                            },
                            {
                                label: 'Sin Presbicia',
                                data: presbiciaData.map(item => item.total - item.casos),
                                color: '#e0e0e0'
                            }
                        ]}
                        height={300}
                        margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
                        slotProps={{
                            legend: {
                                direction: 'horizontal',
                                position: { vertical: 'bottom' }
                            },
                        }}
                    />
                </Box>

                <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Porcentaje por grupo de edad:
                    </Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1, display: 'flex', justifyContent: 'space-between' }}>
                        {presbiciaData.map((item, index) => (
                            <Typography key={index} variant="caption" sx={{
                                px: 1,
                                py: 0.5,
                                bgcolor: 'white',
                                borderRadius: 0.5,
                                border: '1px solid #e0e0e0'
                            }}>
                                {item.edad}: {item.porcentaje}%
                            </Typography>
                        ))}
                    </Stack>
                </Box>

            </CardContent>
        </Card>
    );
}
