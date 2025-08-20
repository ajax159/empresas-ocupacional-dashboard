import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 35, label: 'Respiratorios', color: '#1976d2' },
    { id: 1, value: 25, label: 'Musculoesqueléticos', color: '#388e3c' },
    { id: 2, value: 20, label: 'Cardiovasculares', color: '#f57c00' },
    { id: 3, value: 12, label: 'Neurológicos', color: '#7b1fa2' },
    { id: 4, value: 8, label: 'Otros', color: '#616161' },
];

export default function DiagnosticosPorCategoria() {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Diagnósticos por Categoría
                </Typography>

                <Box sx={{ width: '100%', height: 300 }}>
                    <PieChart
                        series={[
                            {
                                data,
                                highlightScope: { fade: 'global', highlight: 'item' },
                                innerRadius: 30,
                                outerRadius: 120,
                                paddingAngle: 2,
                                cornerRadius: 5,
                            },
                        ]}
                        width={400}
                        height={300}
                    />
                </Box>

                <Box sx={{ mt: 2 }}>
                    {data.map((item) => (
                        <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    backgroundColor: item.color,
                                    borderRadius: '50%',
                                }}
                            />
                            <Typography variant="body2">
                                {item.label}: {item.value}%
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}
