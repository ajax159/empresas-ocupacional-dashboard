import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { diagnosticosPorAnoData, resumenDiagnosticosData } from '../../../../mock/psicologia.mock';
import { getDataSource } from '../../../../mock/config';

export default function CapacidadMentalRendimientoLaboral() {
    const diagnosticosData = getDataSource(diagnosticosPorAnoData);
    const resumenData = getDataSource(resumenDiagnosticosData);
    const años = diagnosticosData.map((item: { año: number }) => item.año);
    const maxDiagnosticos = Math.max(...diagnosticosData.map((item: { diagnosticos: string[] }) => item.diagnosticos.length));


    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Diagnósticos Psicológicos por Año
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Diagnósticos Anuales
                        </Typography>
                        <Box sx={{ height: 350 }}>
                            <BarChart
                                width={800}
                                height={350}
                                series={[{
                                    data: diagnosticosData.map((yearData: { diagnosticos: string[] }) => yearData.diagnosticos.length),
                                    label: 'Número de Diagnósticos',
                                    color: '#2196f3'
                                }]}
                                xAxis={[{
                                    data: años,
                                    scaleType: 'band'
                                }]}
                                margin={{ top: 20, bottom: 60, left: 60, right: 20 }}
                                yAxis={[{
                                    min: 0,
                                    max: maxDiagnosticos + 1,
                                    label: 'Número de Diagnósticos'
                                }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Detalle de Diagnósticos por Año
                        </Typography>
                        {diagnosticosData.map((yearData: { año: number; diagnosticos: string[] }, index: number) => (
                            <Box key={index} sx={{ mb: 2, p: 2, borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="h6" color="primary">
                                        Año {yearData.año}
                                    </Typography>
                                    <Chip
                                        label={`${yearData.diagnosticos.length} diagnóstico${yearData.diagnosticos.length > 1 ? 's' : ''}`}
                                        size="small"
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {yearData.diagnosticos.map((diagnostico: string, diagIndex: number) => (
                                        <Chip
                                            key={diagIndex}
                                            label={diagnostico}
                                            size="small"
                                            sx={{
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#281953ff',
                                                    opacity: 0.8
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Resumen de Diagnósticos
                        </Typography>
                        {resumenData.map((resumen: { diagnostico: string; frecuencia: number; años: string[] }, index: number) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', fontSize: '0.8rem' }}>
                                        {resumen.diagnostico}
                                    </Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Frecuencia: {resumen.frecuencia} vez{resumen.frecuencia > 1 ? 'es' : ''}
                                </Typography>
                                <br />
                                <Typography variant="caption" color="text.secondary">
                                    Años: {resumen.años.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
