import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const riesgosOcupacionalesData = [
    { riesgo: 'Radiación UV', exposicion: 75, limite: 100, proteccion: 85 },
    { riesgo: 'Partículas', exposicion: 60, limite: 100, proteccion: 90 },
    { riesgo: 'Químicos Vapores', exposicion: 40, limite: 100, proteccion: 95 },
    { riesgo: 'Impactos', exposicion: 85, limite: 100, proteccion: 88 }
];

const indicadoresData = [
    { indicador: 'Agudeza Visual', actual: 95, meta: 100, estado: 'excelente' },
    { indicador: 'Campo Visual', actual: 92, meta: 95, estado: 'bueno' },
    { indicador: 'Presión Ocular', actual: 88, meta: 90, estado: 'bueno' },
    { indicador: 'Visión Colores', actual: 100, meta: 100, estado: 'excelente' }
];

const aptitudLaboralData = [
    { area: 'Trabajo en Altura', apto: 85, conRestricciones: 10, noApto: 5 },
    { area: 'Soldadura', apto: 70, conRestricciones: 20, noApto: 10 },
    { area: 'Laboratorio', apto: 95, conRestricciones: 3, noApto: 2 },
    { area: 'Oficina', apto: 98, conRestricciones: 2, noApto: 0 }
];

export default function RiesgosYAptitud() {
    const areas = aptitudLaboralData.map(item => item.area);
    const aptos = aptitudLaboralData.map(item => item.apto);
    const restricciones = aptitudLaboralData.map(item => item.conRestricciones);
    const noAptos = aptitudLaboralData.map(item => item.noApto);

    const getRiesgoLevel = (exposicion: number, proteccion: number) => {
        const riesgoNeto = exposicion * (1 - proteccion / 100);
        if (riesgoNeto < 20) return 'bajo';
        if (riesgoNeto < 40) return 'medio';
        return 'alto';
    };

    const getRiesgoColor = (level: string) => {
        switch (level) {
            case 'bajo': return 'success';
            case 'medio': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'excelente': return 'success';
            case 'bueno': return 'info';
            case 'regular': return 'warning';
            case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Riesgos Ocupacionales y Aptitud
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aptitud Laboral por Área
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={300}
                                height={200}
                                series={[
                                    { data: aptos, label: 'Apto (%)', color: '#4caf50' },
                                    { data: restricciones, label: 'Con Restricciones (%)', color: '#ff9800' },
                                    { data: noAptos, label: 'No Apto (%)', color: '#f44336' },
                                ]}
                                xAxis={[{ data: areas, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Riesgos Ocupacionales Oculares
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {riesgosOcupacionalesData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">
                                            {item.riesgo}
                                        </Typography>
                                        <Chip
                                            label={getRiesgoLevel(item.exposicion, item.proteccion).toUpperCase()}
                                            color={getRiesgoColor(getRiesgoLevel(item.exposicion, item.proteccion))}
                                            size="small"
                                        />
                                    </Box>
                                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 0.5 }}>
                                        Exposición: {item.exposicion}% | Protección: {item.proteccion}%
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.exposicion}
                                        color={getRiesgoLevel(item.exposicion, item.proteccion) === 'alto' ? 'error' :
                                            getRiesgoLevel(item.exposicion, item.proteccion) === 'medio' ? 'warning' : 'success'}
                                        sx={{ height: 6, borderRadius: 1 }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Indicadores de Salud Visual
                    </Typography>
                    <Grid container spacing={2}>
                        {indicadoresData.map((item, index) => (
                            <Grid key={index} size={3}>
                                <Box sx={{
                                    p: 1.5,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1,
                                    textAlign: 'center'
                                }}>
                                    <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
                                        {item.indicador}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                                        {item.actual}%
                                    </Typography>
                                    <Chip
                                        label={item.estado.toUpperCase()}
                                        color={getEstadoColor(item.estado)}
                                        size="small"
                                        sx={{ mb: 0.5 }}
                                    />
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.actual}
                                        color={item.estado === 'excelente' ? 'success' :
                                            item.estado === 'bueno' ? 'info' :
                                                item.estado === 'regular' ? 'warning' : 'error'}
                                        sx={{ height: 4, borderRadius: 1 }}
                                    />
                                    <Typography variant="caption" color="text.secondary">
                                        Meta: {item.meta}%
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Trabajador APTO para actividades visuales exigentes | Continuar con protección ocular
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
