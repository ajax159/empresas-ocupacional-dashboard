import { Card, CardContent, Typography, Box, Stack, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TendenciaPeso() {
    // Datos históricos simulados (últimos 12 meses)
    const meses = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    const pesoData = {
        hombres: [78.2, 78.5, 78.1, 77.8, 77.5, 77.3, 77.0, 76.8, 76.5, 76.3, 76.1, 75.9],
        mujeres: [65.1, 65.3, 65.0, 64.8, 64.5, 64.3, 64.0, 63.8, 63.6, 63.4, 63.2, 63.0],
        promedio: [71.6, 71.9, 71.5, 71.3, 71.0, 70.8, 70.5, 70.3, 70.0, 69.8, 69.6, 69.4]
    };

    // Estadísticas
    const pesoInicialPromedio = pesoData.promedio[0];
    const pesoFinalPromedio = pesoData.promedio[pesoData.promedio.length - 1];
    const perdidaPeso = pesoInicialPromedio - pesoFinalPromedio;
    const porcentajePerdida = ((perdidaPeso / pesoInicialPromedio) * 100);

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Tendencia de Peso Promedio (Últimos 12 Meses)
                </Typography>

                {/* Indicadores estadísticos */}
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Peso Promedio Actual
                        </Typography>
                        <Typography variant="h6" color="primary">
                            {pesoFinalPromedio} kg
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Reducción Total
                        </Typography>
                        <Typography variant="h6" color="success.main">
                            -{perdidaPeso.toFixed(1)} kg
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            % de Reducción
                        </Typography>
                        <Typography variant="h6" color="success.main">
                            -{porcentajePerdida.toFixed(1)}%
                        </Typography>
                    </Box>
                </Stack>

                {/* Gráfico de líneas */}
                <LineChart
                    xAxis={[{
                        scaleType: 'point',
                        data: meses
                    }]}
                    series={[
                        {
                            id: 'hombres',
                            label: 'Hombres',
                            data: pesoData.hombres,
                            color: '#1976d2',
                            curve: 'linear'
                        },
                        {
                            id: 'mujeres',
                            label: 'Mujeres',
                            data: pesoData.mujeres,
                            color: '#e91e63',
                            curve: 'linear'
                        },
                        {
                            id: 'promedio',
                            label: 'Promedio General',
                            data: pesoData.promedio,
                            color: '#ff9800',
                            curve: 'linear'
                        }
                    ]}
                    height={300}
                    margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
                    grid={{ horizontal: true, vertical: false }}
                />

                {/* Análisis de tendencia */}
                <Box sx={{ mt: 2 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                        <Chip
                            label="Tendencia Descendente"
                            size="small"
                            color="success"
                            icon={<span>📉</span>}
                        />
                        <Chip
                            label="Programa Nutricional Efectivo"
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                        <Chip
                            label={`Meta: ${(pesoFinalPromedio - 2).toFixed(1)} kg`}
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Evolución del peso promedio por género y general. Datos basados en controles mensuales.
                </Typography>
            </CardContent>
        </Card>
    );
}
