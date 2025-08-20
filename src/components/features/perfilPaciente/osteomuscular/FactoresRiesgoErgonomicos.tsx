import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const factoresRiesgoData = [
    { factor: 'Movimientos Repetitivos', exposicion: 8.5, limite: 6.0, frecuencia: 'diaria', años: 5 },
    { factor: 'Posturas Forzadas', exposicion: 7.2, limite: 5.0, frecuencia: 'frecuente', años: 5 },
    { factor: 'Levantamiento Manual', exposicion: 9.1, limite: 7.0, frecuencia: 'diaria', años: 5 },
    { factor: 'Vibración Cuerpo Entero', exposicion: 2.8, limite: 4.0, frecuencia: 'ocasional', años: 3 },
    { factor: 'Trabajo en Altura', exposicion: 3.5, limite: 5.0, frecuencia: 'semanal', años: 2 }
];

const evaluacionPuestoData = [
    { aspecto: 'Diseño del Puesto', puntuacion: 65, evaluacion: 'mejorable' },
    { aspecto: 'Organización del Trabajo', puntuacion: 70, evaluacion: 'aceptable' },
    { aspecto: 'Herramientas de Trabajo', puntuacion: 55, evaluacion: 'deficiente' },
    { aspecto: 'Ambiente Físico', puntuacion: 75, evaluacion: 'bueno' },
    { aspecto: 'Capacitación Ergonómica', puntuacion: 60, evaluacion: 'mejorable' }
];

const cargaTrabajoData = [
    { label: 'Ligera', value: 20, color: '#4caf50' },
    { label: 'Moderada', value: 45, color: '#ff9800' },
    { label: 'Pesada', value: 30, color: '#f44336' },
    { label: 'Muy Pesada', value: 5, color: '#9c27b0' }
];

const riesgosEspecificosData = [
    { riesgo: 'Lumbalgia Mecánica', probabilidad: 75, evidencia: 'Flexión repetida >50 veces/día' },
    { riesgo: 'Síndrome Túnel Carpiano', probabilidad: 45, evidencia: 'Movimientos repetitivos muñeca' },
    { riesgo: 'Cervicalgia Tensional', probabilidad: 60, evidencia: 'Postura estática prolongada' },
    { riesgo: 'Epicondilitis', probabilidad: 35, evidencia: 'Movimientos rotación antebrazo' }
];

const medidasControlData = [
    { medida: 'Rotación de Puestos', implementada: true, efectividad: 70 },
    { medida: 'Pausas Activas', implementada: true, efectividad: 65 },
    { medida: 'Capacitación Ergonómica', implementada: true, efectividad: 60 },
    { medida: 'Mejora Herramientas', implementada: false, efectividad: 0 },
    { medida: 'Rediseño Puesto', implementada: false, efectividad: 0 }
];

export default function FactoresRiesgoErgonomicos() {
    const factores = factoresRiesgoData.map(item => item.factor);
    const exposiciones = factoresRiesgoData.map(item => item.exposicion);
    const limites = factoresRiesgoData.map(item => item.limite);

    const aspectos = evaluacionPuestoData.map(item => item.aspecto);
    const puntuaciones = evaluacionPuestoData.map(item => item.puntuacion);

    const getRiesgoColor = (exposicion: number, limite: number) => {
        const ratio = exposicion / limite;
        if (ratio >= 1.5) return 'error';
        if (ratio >= 1.0) return 'warning';
        return 'success';
    };

    const getProbabilidadColor = (probabilidad: number) => {
        if (probabilidad >= 70) return 'error';
        if (probabilidad >= 50) return 'warning';
        if (probabilidad >= 30) return 'info';
        return 'success';
    };

    const getImplementadaColor = (implementada: boolean) => {
        return implementada ? 'success' : 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Factores de Riesgo Ergonómicos
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Exposición vs Límites Recomendados
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: exposiciones,
                                        label: 'Exposición Actual',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: limites,
                                        label: 'Límite Recomendado',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: factores,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Carga de Trabajo
                        </Typography>
                        <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <PieChart
                                series={[
                                    {
                                        data: cargaTrabajoData,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                width={350}
                                height={200}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Detalle Factores de Riesgo
                        </Typography>
                        {factoresRiesgoData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.factor}
                                    </Typography>
                                    <Chip
                                        label={getRiesgoColor(item.exposicion, item.limite) === 'error' ? 'ALTO' :
                                            getRiesgoColor(item.exposicion, item.limite) === 'warning' ? 'MODERADO' : 'BAJO'}
                                        color={getRiesgoColor(item.exposicion, item.limite)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Frecuencia: {item.frecuencia} | Exposición: {item.años} años
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={(item.exposicion / item.limite) * 100}
                                    sx={{ height: 6, borderRadius: 3 }}
                                />
                                <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                                    {item.exposicion} / {item.limite} (ratio)
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación del Puesto de Trabajo
                        </Typography>
                        <Box sx={{ height: 120, mb: 2 }}>
                            <BarChart
                                width={300}
                                height={120}
                                series={[
                                    {
                                        data: puntuaciones,
                                        label: 'Puntuación',
                                        color: '#2196f3'
                                    }
                                ]}
                                xAxis={[{
                                    data: aspectos,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 60, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 100 }]}
                            />
                        </Box>

                        <Typography variant="subtitle2" gutterBottom>
                            Riesgos Específicos Identificados
                        </Typography>
                        {riesgosEspecificosData.map((riesgo, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {riesgo.riesgo}
                                    </Typography>
                                    <Chip
                                        label={`${riesgo.probabilidad}%`}
                                        color={getProbabilidadColor(riesgo.probabilidad)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {riesgo.evidencia}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={riesgo.probabilidad}
                                    sx={{ mt: 1, height: 4, borderRadius: 2 }}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Medidas de Control Implementadas
                    </Typography>
                    <Grid container spacing={1}>
                        {medidasControlData.map((medida, index) => (
                            <Grid key={index} size={2.4}>
                                <Box sx={{
                                    p: 1.5,
                                    textAlign: 'center',
                                    bgcolor: medida.implementada ? 'success.light' : 'error.light',
                                    borderRadius: 1,
                                    border: '1px solid',
                                    borderColor: medida.implementada ? 'success.main' : 'error.main'
                                }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block', mb: 0.5 }}>
                                        {medida.medida}
                                    </Typography>
                                    <Chip
                                        label={medida.implementada ? 'IMPLEMENTADA' : 'PENDIENTE'}
                                        color={getImplementadaColor(medida.implementada)}
                                        size="small"
                                        sx={{ mb: 0.5 }}
                                    />
                                    {medida.implementada && (
                                        <Typography variant="caption" sx={{ display: 'block' }}>
                                            Efectividad: {medida.efectividad}%
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'error.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="error.contrastText">
                        🚨 Múltiples factores de riesgo por encima de límites | Intervención ergonómica urgente requerida
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
