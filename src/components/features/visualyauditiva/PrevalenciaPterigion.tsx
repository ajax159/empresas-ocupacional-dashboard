import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function PrevalenciaPterigion() {
    const pterigionData = [
        { zona: 'Oficina', gradoI: 5, gradoII: 2, gradoIII: 1 },
        { zona: 'Taller', gradoI: 15, gradoII: 8, gradoIII: 3 },
        { zona: 'Campo/Exterior', gradoI: 25, gradoII: 12, gradoIII: 6 },
        { zona: 'Soldadura', gradoI: 18, gradoII: 10, gradoIII: 4 },
        { zona: 'Almacén', gradoI: 8, gradoII: 4, gradoIII: 1 },
    ];

    const zonas = pterigionData.map(item => item.zona);

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Prevalencia de Pterigión por Zona de Trabajo
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <BarChart
                        xAxis={[{
                            scaleType: 'band',
                            data: zonas
                        }]}
                        series={[
                            {
                                label: 'Grado I (Leve)',
                                data: pterigionData.map(item => item.gradoI),
                                color: '#4caf50'
                            },
                            {
                                label: 'Grado II (Moderado)',
                                data: pterigionData.map(item => item.gradoII),
                                color: '#ff9800'
                            },
                            {
                                label: 'Grado III (Severo)',
                                data: pterigionData.map(item => item.gradoIII),
                                color: '#f44336'
                            }
                        ]}
                        height={350}
                        margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                        slotProps={{
                            legend: {
                                direction: 'horizontal',
                                position: { vertical: 'bottom' },
                            },
                        }}
                    />
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Distribución de casos de pterigión según grado de severidad y área de trabajo
                </Typography>
            </CardContent>
        </Card>
    );
}
