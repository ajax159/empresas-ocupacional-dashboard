import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';

export default function PorcentajeDislipidemia() {

    const dislipidemiaData = [
        { id: 0, label: 'Normal', value: 65, color: '#4caf50' },
        { id: 1, label: 'Colesterol Alto', value: 20, color: '#ff9800' },
        { id: 2, label: 'Triglicéridos Altos', value: 10, color: '#f44336' },
        { id: 3, label: 'Mixta (Ambos)', value: 5, color: '#9c27b0' }
    ];

    const colesterolAlto = 25;
    const trigliceridosAltos = 15;
    const dislipidemiaTotal = 35;

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Prevalencia de Dislipidemia
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }} >
                        <Box sx={{ height: 300 }}>
                            <PieChart
                                series={[
                                    {
                                        data: dislipidemiaData,
                                        arcLabel: (item) => `${item.value}%`,
                                        arcLabelMinAngle: 10,
                                        arcLabelRadius: '60%',
                                    },
                                ]}
                                height={300}
                                sx={{
                                    [`& .${pieArcLabelClasses.root}`]: {
                                        fontWeight: 'bold',
                                        fontSize: '12px',
                                        fill: 'white',
                                    },
                                }}
                                slotProps={{
                                    legend: {
                                        position: { vertical: 'middle' }
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Typography variant="body2" fontWeight="medium" gutterBottom>
                                    Colesterol Alto
                                </Typography>
                                <Gauge
                                    value={colesterolAlto}
                                    startAngle={-90}
                                    endAngle={90}
                                    width={120}
                                    height={80}
                                    text={`${colesterolAlto}%`}
                                    sx={{
                                        '& .MuiGauge-valueText': {
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography variant="body2" fontWeight="medium" gutterBottom>
                                    Triglicéridos Altos
                                </Typography>
                                <Gauge
                                    value={trigliceridosAltos}
                                    startAngle={-90}
                                    endAngle={90}
                                    width={120}
                                    height={80}
                                    text={`${trigliceridosAltos}%`}
                                    sx={{
                                        '& .MuiGauge-valueText': {
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }
                                    }}
                                />
                            </Box>

                            <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
                                <Typography variant="body2">
                                    Total con Dislipidemia
                                </Typography>
                                <Typography variant="h4" fontWeight="bold">
                                    {dislipidemiaTotal}%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Distribución de pacientes según presencia de dislipidemia (colesterol ≥240 mg/dL o triglicéridos ≥200 mg/dL)
                </Typography>
            </CardContent>
        </Card>
    );
}
