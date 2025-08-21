import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';
import { BarChart } from '@mui/x-charts/BarChart';

const evaluacionPsicologicaActualData = {
    puntajeGlobal: 78,
    clasificacion: 'aceptable',
    fecha: '2024-08-15',
    observaciones: 'Trabajador con adaptación laboral adecuada, leve estrés por carga de trabajo'
};

const dominiosPsicologicosData = [
    { dominio: 'Estado de Ánimo', puntaje: 82, maximo: 100, estado: 'bueno', descripcion: 'Estabilidad emocional adecuada' },
    { dominio: 'Ansiedad', puntaje: 65, maximo: 100, estado: 'moderado', descripcion: 'Niveles leves de ansiedad situacional' },
    { dominio: 'Estrés Laboral', puntaje: 70, maximo: 100, estado: 'moderado', descripcion: 'Estrés relacionado con demandas laborales' },
    { dominio: 'Autoestima', puntaje: 85, maximo: 100, estado: 'bueno', descripcion: 'Autoconcepto positivo y confianza' },
    { dominio: 'Relaciones Interpersonales', puntaje: 88, maximo: 100, estado: 'excelente', descripcion: 'Habilidades sociales desarrolladas' }
];

const factoresPsicosocialesData = [
    { factor: 'Demandas Psicológicas', nivel: 75, riesgo: 'moderado', impacto: 'medio' },
    { factor: 'Control sobre el Trabajo', nivel: 60, riesgo: 'bajo', impacto: 'bajo' },
    { factor: 'Apoyo Social', nivel: 85, riesgo: 'bajo', impacto: 'positivo' },
    { factor: 'Inseguridad Laboral', nivel: 45, riesgo: 'moderado', impacto: 'medio' },
    { factor: 'Equilibrio Trabajo-Vida', nivel: 55, riesgo: 'moderado', impacto: 'medio' }
];

const pruebasPsicometricasData = [
    { prueba: 'Inventario Beck Depresión', resultado: 8, interpretacion: 'Normal', rango: '0-63' },
    { prueba: 'Escala Hamilton Ansiedad', resultado: 12, interpretacion: 'Leve', rango: '0-56' },
    { prueba: 'Maslach Burnout', resultado: 25, interpretacion: 'Bajo', rango: '0-132' },
    { prueba: 'Cuestionario Estrés Laboral', resultado: 45, interpretacion: 'Moderado', rango: '0-100' },
    { prueba: 'Test Personalidad NEO-PI', resultado: 72, interpretacion: 'Adaptativo', rango: '0-100' }
];

const recomendacionesPsicologicasData = [
    'Técnicas de manejo de estrés y relajación',
    'Capacitación en habilidades de comunicación asertiva',
    'Programa de pausas activas para reducir tensión',
    'Seguimiento psicológico trimestral',
    'Evaluación de factores psicosociales en el puesto'
];

export default function EvaluacionPsicologicaActual() {
    const dominios = dominiosPsicologicosData.map(item => item.dominio);
    const puntajes = dominiosPsicologicosData.map(item => (item.puntaje / item.maximo) * 100);

    const factores = factoresPsicosocialesData.map(item => item.factor);
    const niveles = factoresPsicosocialesData.map(item => item.nivel);

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'excelente': return 'success';
            case 'bueno': return 'info';
            case 'moderado': return 'warning';
            case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    const getInterpretacionColor = (interpretacion: string) => {
        switch (interpretacion) {
            case 'Normal': return 'success';
            case 'Leve': return 'info';
            case 'Moderado': return 'warning';
            case 'Severo': return 'error';
            case 'Bajo': return 'success';
            case 'Adaptativo': return 'success';
            default: return 'default';
        }
    };

    const getClasificacionColor = (clasificacion: string) => {
        switch (clasificacion) {
            case 'excelente': return 'success';
            case 'bueno': return 'info';
            case 'aceptable': return 'warning';
            case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evaluación Psicológica Actual
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom align="center">
                            Estado Psicológico Global
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={120}
                                height={120}
                                value={evaluacionPsicologicaActualData.puntajeGlobal}
                                valueMax={100}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .MuiGauge-valueText`]: {
                                        fontSize: 16,
                                        transform: 'translate(0px, 0px)',
                                    },
                                }}
                                text={({ value }) => `${value}%`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Chip
                                label={evaluacionPsicologicaActualData.clasificacion.toUpperCase()}
                                color={getClasificacionColor(evaluacionPsicologicaActualData.clasificacion)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="caption" display="block" color="text.secondary">
                                Evaluación: {evaluacionPsicologicaActualData.fecha}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Dominios Psicológicos
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={480}
                                height={200}
                                series={[
                                    {
                                        data: puntajes,
                                        label: 'Puntaje (%)',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: dominios,
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
                            Detalle Dominios Psicológicos
                        </Typography>
                        {dominiosPsicologicosData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.dominio}
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
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    {item.puntaje} / {item.maximo} puntos
                                </Typography>
                                <Typography variant="caption" color="primary.main">
                                    {item.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores Psicosociales Laborales
                        </Typography>
                        <Box sx={{ height: 120, mb: 2 }}>
                            <BarChart
                                width={350}
                                height={120}
                                series={[
                                    {
                                        data: niveles,
                                        label: 'Nivel',
                                        color: '#ff9800'
                                    }
                                ]}
                                xAxis={[{
                                    data: factores,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 60, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 100 }]}
                            />
                        </Box>

                        <Typography variant="subtitle2" gutterBottom>
                            Pruebas Psicométricas
                        </Typography>
                        {pruebasPsicometricasData.map((prueba, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {prueba.prueba}
                                    </Typography>
                                    <Chip
                                        label={prueba.interpretacion}
                                        color={getInterpretacionColor(prueba.interpretacion)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                    Resultado: {prueba.resultado} | Rango: {prueba.rango}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Recomendaciones Psicológicas
                    </Typography>
                    <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                        {recomendacionesPsicologicasData.map((recomendacion, index) => (
                            <Typography key={index} variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                • {recomendacion}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ mt: 2, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5, color: 'success.contrastText' }}>
                        Observaciones Clínicas
                    </Typography>
                    <Typography variant="caption" color="success.contrastText">
                        {evaluacionPsicologicaActualData.observaciones}
                    </Typography>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Estado psicológico aceptable con necesidad de seguimiento | Factores de estrés laboral bajo control
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
