import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ClasificacionIMC() {
    const imcData = [
        { grupo: '18-29', normal: 45, sobrepeso: 25, obesidadI: 15, obesidadII: 8 },
        { grupo: '30-39', normal: 40, sobrepeso: 30, obesidadI: 20, obesidadII: 12 },
        { grupo: '40-49', normal: 35, sobrepeso: 35, obesidadI: 22, obesidadII: 15 },
        { grupo: '50-59', normal: 30, sobrepeso: 40, obesidadI: 25, obesidadII: 18 },
        { grupo: '60+', normal: 28, sobrepeso: 42, obesidadI: 23, obesidadII: 20 },
    ];

    const grupos = imcData.map(item => item.grupo);

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Clasificación IMC por Grupo de Edad
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <BarChart
                        xAxis={[{
                            scaleType: 'band',
                            data: grupos
                        }]}
                        slotProps={{
                            legend: {
                                direction: 'horizontal',
                                position: { vertical: 'bottom' },
                            }
                        }}
                        series={[
                            {
                                label: 'Normal (18.5-24.9)',
                                data: imcData.map(item => item.normal),
                                stack: 'total',
                                color: '#4caf50'
                            },
                            {
                                label: 'Sobrepeso (25-29.9)',
                                data: imcData.map(item => item.sobrepeso),
                                stack: 'total',
                                color: '#ff9800'
                            },
                            {
                                label: 'Obesidad I (30-34.9)',
                                data: imcData.map(item => item.obesidadI),
                                stack: 'total',
                                color: '#f44336'
                            },
                            {
                                label: 'Obesidad II (35+)',
                                data: imcData.map(item => item.obesidadII),
                                stack: 'total',
                                color: '#9c27b0'
                            }
                        ]}
                        height={350}
                    />
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Distribución de pacientes por clasificación de IMC según grupo de edad
                </Typography>
            </CardContent>
        </Card>
    );
}
