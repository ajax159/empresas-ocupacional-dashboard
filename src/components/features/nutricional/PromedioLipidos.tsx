import { Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function PromedioLipidos() {
    // Datos simulados para niveles de lípidos (mg/dL)
    const colesterolData = {
        optimo: 45,      // <200 mg/dL
        limite: 25,      // 200-239 mg/dL
        alto: 20,        // 240+ mg/dL
        promedio: 195
    };

    const trigliceridosData = {
        normal: 55,      // <150 mg/dL
        limite: 30,      // 150-199 mg/dL
        alto: 15,        // 200+ mg/dL
        promedio: 145
    };

    // Datos para el gráfico de barras agrupadas
    const lipidosData = [
        { categoria: 'Colesterol Total', optimo: 45, limite: 25, alto: 20, muy_alto: 10 },
        { categoria: 'Triglicéridos', optimo: 55, limite: 30, alto: 10, muy_alto: 5 },
    ];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Distribución de Niveles Lipídicos
                </Typography>

                {/* Valores promedio */}
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            Colesterol promedio
                        </Typography>
                        <Typography variant="h6" color="primary">
                            {colesterolData.promedio} mg/dL
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            Triglicéridos promedio
                        </Typography>
                        <Typography variant="h6" color="primary">
                            {trigliceridosData.promedio} mg/dL
                        </Typography>
                    </Box>
                </Stack>

                {/* Gráfico de distribución */}
                <BarChart
                    xAxis={[{
                        scaleType: 'band',
                        data: lipidosData.map(item => item.categoria)
                    }]}
                    series={[
                        {
                            data: lipidosData.map(item => item.optimo),
                            color: '#4caf50'
                        },
                        {
                            data: lipidosData.map(item => item.limite),
                            color: '#ff9800'
                        },
                        {
                            data: lipidosData.map(item => item.alto),
                            color: '#f44336'
                        },
                        {
                            data: lipidosData.map(item => item.muy_alto),
                            color: '#9c27b0'
                        }
                    ]}
                    height={300}
                    margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom' },
                        },
                    }}
                />

                {/* Valores de referencia */}
                <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Valores de referencia:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                        <Chip
                            label="Colesterol: <200 mg/dL (Óptimo)"
                            size="small"
                            color="success"
                            variant="outlined"
                        />
                        <Chip
                            label="Triglicéridos: <150 mg/dL (Normal)"
                            size="small"
                            color="success"
                            variant="outlined"
                        />
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
}
