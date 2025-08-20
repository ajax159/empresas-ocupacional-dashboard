import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';
import { BarChart } from '@mui/x-charts/BarChart';

const evaluacionPosturalData = {
    puntajeTotal: 75,
    puntajeMaximo: 100,
    clasificacion: 'moderado',
    fecha: '2024-08-15'
};

const segmentosEvaluadosData = [
    { segmento: 'Cervical', puntaje: 18, maximo: 25, estado: 'bueno' },
    { segmento: 'Dorsal', puntaje: 15, maximo: 20, estado: 'moderado' },
    { segmento: 'Lumbar', puntaje: 12, maximo: 20, estado: 'riesgo' },
    { segmento: 'Extremidades Superiores', puntaje: 16, maximo: 20, estado: 'bueno' },
    { segmento: 'Extremidades Inferiores', puntaje: 14, maximo: 15, estado: 'excelente' }
];

const posturaTrabajoData = [
    { posicion: 'Bipedestación', porcentaje: 60, evaluacion: 'adecuada' },
    { posicion: 'Sedestación', porcentaje: 30, evaluacion: 'mejorable' },
    { posicion: 'Flexión Repetida', porcentaje: 10, evaluacion: 'riesgo' }
];

const factoresRiesgoData = [
    { factor: 'Movimientos Repetitivos', nivel: 'alto', frecuencia: 'diaria', impacto: 8 },
    { factor: 'Posturas Forzadas', nivel: 'moderado', frecuencia: 'ocasional', impacto: 6 },
    { factor: 'Levantamiento Manual', nivel: 'alto', frecuencia: 'frecuente', impacto: 9 },
    { factor: 'Vibración Segmentaria', nivel: 'bajo', frecuencia: 'rara', impacto: 3 }
];

const recomendacionesData = [
    'Ejercicios de fortalecimiento lumbar 3x/semana',
    'Pausas activas cada 2 horas durante jornada laboral',
    'Técnicas de levantamiento seguro - refuerzo capacitación',
    'Evaluación ergonómica del puesto de trabajo',
    'Control médico en 6 meses'
];

export default function EvaluacionPosturalActual() {
    const segmentos = segmentosEvaluadosData.map(item => item.segmento);
    const puntajes = segmentosEvaluadosData.map(item => (item.puntaje / item.maximo) * 100);

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'excelente': return 'success';
            case 'bueno': return 'info';
            case 'moderado': return 'warning';
            case 'riesgo': return 'error';
            default: return 'default';
        }
    };

    const getNivelColor = (nivel: string) => {
        switch (nivel) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getEvaluacionColor = (evaluacion: string) => {
        switch (evaluacion) {
            case 'adecuada': return 'success';
            case 'mejorable': return 'warning';
            case 'riesgo': return 'error';
            default: return 'default';
        }
    };

    const getClasificacionColor = (clasificacion: string) => {
        switch (clasificacion) {
            case 'excelente': return 'success';
            case 'bueno': return 'info';
            case 'moderado': return 'warning';
            case 'riesgo': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evaluación Postural Actual
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom align="center">
                            Puntaje Global Postural
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={120}
                                height={120}
                                value={evaluacionPosturalData.puntajeTotal}
                                valueMax={evaluacionPosturalData.puntajeMaximo}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .MuiGauge-valueText`]: {
                                        fontSize: 16,
                                        transform: 'translate(0px, 0px)',
                                    },
                                }}
                                text={({ value, valueMax }) => `${value}/${valueMax}`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Chip
                                label={evaluacionPosturalData.clasificacion.toUpperCase()}
                                color={getClasificacionColor(evaluacionPosturalData.clasificacion)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="caption" display="block" color="text.secondary">
                                Evaluación: {evaluacionPosturalData.fecha}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación por Segmentos Corporales
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={450}
                                height={200}
                                series={[
                                    {
                                        data: puntajes,
                                        label: 'Puntaje (%)',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: segmentos,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 40, right: 10 }}
                                yAxis={[{ min: 0, max: 100 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Detalle por Segmento
                        </Typography>
                        {segmentosEvaluadosData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.segmento}
                                    </Typography>
                                    <Chip
                                        label={item.estado.toUpperCase()}
                                        color={getEstadoColor(item.estado)}
                                        size="small"
                                    />
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={(item.puntaje / item.maximo) * 100}
                                    sx={{ height: 6, borderRadius: 3, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                    {item.puntaje} / {item.maximo} puntos
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Análisis Postural en el Trabajo
                        </Typography>
                        {posturaTrabajoData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.posicion}
                                    </Typography>
                                    <Chip
                                        label={item.evaluacion.toUpperCase()}
                                        color={getEvaluacionColor(item.evaluacion)}
                                        size="small"
                                    />
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={item.porcentaje}
                                    sx={{ height: 6, borderRadius: 3, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                    {item.porcentaje}% del tiempo laboral
                                </Typography>
                            </Box>
                        ))}

                        <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                            Factores de Riesgo Identificados
                        </Typography>
                        {factoresRiesgoData.map((factor, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'medium' }}>
                                        {factor.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={factor.nivel.toUpperCase()}
                                            color={getNivelColor(factor.nivel)}
                                            size="small"
                                        />
                                        <Typography variant="caption" color="primary.main" sx={{ fontWeight: 'bold' }}>
                                            {factor.impacto}/10
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Recomendaciones Específicas
                    </Typography>
                    <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                        {recomendacionesData.map((recomendacion, index) => (
                            <Typography key={index} variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                • {recomendacion}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Riesgo moderado osteomuscular | Seguimiento y medidas correctivas requeridas
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
