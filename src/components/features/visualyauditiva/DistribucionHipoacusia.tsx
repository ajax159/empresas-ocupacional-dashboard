import { Card, CardContent, Typography, Box, Stack, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function DistribucionHipoacusia() {
    const distribucionData = [
        { grupo: '20-30 años', izquierdo: 8, derecho: 6 },
        { grupo: '31-40 años', izquierdo: 15, derecho: 12 },
        { grupo: '41-50 años', izquierdo: 22, derecho: 25 },
        { grupo: '51-60 años', izquierdo: 28, derecho: 30 },
        { grupo: '60+ años', izquierdo: 18, derecho: 21 },
    ];

    const grupos = distribucionData.map(item => item.grupo);

    const totalIzquierdo = distribucionData.reduce((sum, item) => sum + item.izquierdo, 0);
    const totalDerecho = distribucionData.reduce((sum, item) => sum + item.derecho, 0);
    const totalCasos = totalIzquierdo + totalDerecho;

    const bilaterales = Math.min(totalIzquierdo, totalDerecho) * 0.7;
    const casosUnicos = totalIzquierdo + totalDerecho - bilaterales;

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Distribución de Hipoacusia por Oído y Grupo Etario
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            Oído Izquierdo
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {totalIzquierdo}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            Oído Derecho
                        </Typography>
                        <Typography variant="h5" color="secondary.main">
                            {totalDerecho}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            Casos Bilaterales
                        </Typography>
                        <Typography variant="h5" color="warning.main">
                            {Math.round(bilaterales)}
                        </Typography>
                    </Box>
                </Stack>

                <Box sx={{ mt: 2 }}>
                    <BarChart
                        xAxis={[{
                            scaleType: 'band',
                            data: grupos
                        }]}
                        series={[
                            {
                                label: 'Oído Izquierdo',
                                data: distribucionData.map(item => item.izquierdo),
                                color: '#1976d2'
                            },
                            {
                                label: 'Oído Derecho',
                                data: distribucionData.map(item => item.derecho),
                                color: '#9c27b0'
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
                        Análisis comparativo:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <Chip
                            label={`Predominio derecho: ${((totalDerecho / totalIzquierdo - 1) * 100).toFixed(1)}%`}
                            size="small"
                            color={totalDerecho > totalIzquierdo ? "warning" : "success"}
                            variant="outlined"
                        />
                        <Chip
                            label={`Bilateral estimado: ${((bilaterales / casosUnicos) * 100).toFixed(1)}%`}
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                        <Chip
                            label={`Mayor incidencia: 51-60 años`}
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Distribución por grupo etario:
                    </Typography>
                    <Stack spacing={0.5} sx={{ mt: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                        {distribucionData.map((item, index) => {
                            const totalGrupo = item.izquierdo + item.derecho;
                            const porcentaje = ((totalGrupo / totalCasos) * 100).toFixed(1);
                            return (
                                <Typography key={index} variant="caption" color="text.secondary">
                                    {item.grupo}: {totalGrupo} casos ({porcentaje}%)
                                </Typography>
                            );
                        })}
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
}
