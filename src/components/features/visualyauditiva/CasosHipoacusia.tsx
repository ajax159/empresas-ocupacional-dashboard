import { Card, CardContent, Typography, Box, Stack, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function CasosHipoacusia() {
    const hipoacusiaData = [
        { departamento: 'Producción', leve: 12, moderada: 8, severa: 3 },
        { departamento: 'Mantenimiento', leve: 15, moderada: 10, severa: 5 },
        { departamento: 'Soldadura', leve: 18, moderada: 12, severa: 7 },
        { departamento: 'Carpintería', leve: 10, moderada: 6, severa: 2 },
        { departamento: 'Administración', leve: 2, moderada: 1, severa: 0 },
        { departamento: 'Almacén', leve: 6, moderada: 3, severa: 1 },
    ];

    const departamentos = hipoacusiaData.map(item => item.departamento);
    const totalCasos = hipoacusiaData.reduce((sum, item) =>
        sum + item.leve + item.moderada + item.severa, 0
    );

    const totales = {
        leve: hipoacusiaData.reduce((sum, item) => sum + item.leve, 0),
        moderada: hipoacusiaData.reduce((sum, item) => sum + item.moderada, 0),
        severa: hipoacusiaData.reduce((sum, item) => sum + item.severa, 0)
    };

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Casos de Hipoacusia por Severidad y Departamento
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            Total Casos
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {totalCasos}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            Casos Severos
                        </Typography>
                        <Typography variant="h5" color="error.main">
                            {totales.severa}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            % Severos
                        </Typography>
                        <Typography variant="h5" color="error.main">
                            {((totales.severa / totalCasos) * 100).toFixed(1)}%
                        </Typography>
                    </Box>
                </Stack>

                <Box sx={{ mt: 2 }}>
                    <BarChart
                        xAxis={[{
                            scaleType: 'band',
                            data: departamentos
                        }]}
                        series={[
                            {
                                label: 'Leve (26-40 dB)',
                                data: hipoacusiaData.map(item => item.leve),
                                color: '#66bb6a'
                            },
                            {
                                label: 'Moderada (41-70 dB)',
                                data: hipoacusiaData.map(item => item.moderada),
                                color: '#ff9800'
                            },
                            {
                                label: 'Severa (>70 dB)',
                                data: hipoacusiaData.map(item => item.severa),
                                color: '#f44336'
                            }
                        ]}
                        height={350}
                        margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                        slotProps={{
                            legend: {
                                direction: 'horizontal',
                                position: { vertical: 'bottom' }
                            },
                        }}
                    />
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Distribución total por severidad:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <Chip
                            label={`Leve: ${totales.leve} casos (${((totales.leve / totalCasos) * 100).toFixed(1)}%)`}
                            size="small"
                            color="success"
                            variant="outlined"
                        />
                        <Chip
                            label={`Moderada: ${totales.moderada} casos (${((totales.moderada / totalCasos) * 100).toFixed(1)}%)`}
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                        <Chip
                            label={`Severa: ${totales.severa} casos (${((totales.severa / totalCasos) * 100).toFixed(1)}%)`}
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Departamentos con mayor exposición a ruido muestran mayor prevalencia de hipoacusia severa
                </Typography>
            </CardContent>
        </Card>
    );
}
