import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';
import { BarChart } from '@mui/x-charts/BarChart';

const indiceSaludOcupacionalData = {
    indice_global: 78,
    componentes: {
        salud_fisica: 82,
        salud_mental: 75,
        capacidad_laboral: 80,
        riesgo_ocupacional: 25,
        calidad_vida: 85
    },
    clasificacion: 'Bueno',
    tendencia: 'Estable'
};

const evaluacionAptitudActualData = {
    clasificacion_general: 'Apto con Restricciones',
    restricciones_activas: 3,
    fecha_ultima_evaluacion: '2024-07-15',
    proxima_evaluacion: '2025-07-15',
    validez: 'Vigente'
};

const restriccionesActivasData = [
    { restriccion: 'Ambientes de Alto Ruido', justificacion: 'Hipoacusia ocupacional leve', fecha_inicio: '2021-03-15', revision: 'Trimestral' },
    { restriccion: 'Levantamiento >15kg', justificacion: 'Antecedente lumbalgia', fecha_inicio: '2022-06-20', revision: 'Semestral' },
    { restriccion: 'Trabajo Nocturno', justificacion: 'Trastorno adaptativo', fecha_inicio: '2023-02-10', revision: 'Anual' }
];

const capacidadLaboralSistemasData = [
    { sistema: 'Cardiovascular', capacidad: 85, estado: 'Bueno', limitaciones: 'Esfuerzo máximo prolongado', recomendaciones: 'Controles periódicos' },
    { sistema: 'Respiratorio', capacidad: 88, estado: 'Bueno', limitaciones: 'Exposición a irritantes', recomendaciones: 'Protección respiratoria' },
    { sistema: 'Musculoesquelético', capacidad: 75, estado: 'Regular', limitaciones: 'Posturas forzadas', recomendaciones: 'Pausas activas' },
    { sistema: 'Neurológico', capacidad: 92, estado: 'Excelente', limitaciones: 'Ninguna significativa', recomendaciones: 'Mantener estado' },
    { sistema: 'Visual', capacidad: 80, estado: 'Bueno', limitaciones: 'Trabajo detalle prolongado', recomendaciones: 'Descansos visuales' },
    { sistema: 'Auditivo', capacidad: 70, estado: 'Comprometido', limitaciones: 'Ambientes ruidosos', recomendaciones: 'Protección auditiva' }
];

const factoresRiesgoOcupacionalData = [
    { factor: 'Exposición Ruido', nivel_riesgo: 'Alto', probabilidad_daño: 'Media', medidas_control: 'Protección auditiva + rotación', efectividad: 85 },
    { factor: 'Esfuerzo Físico', nivel_riesgo: 'Moderado', probabilidad_daño: 'Baja', medidas_control: 'Técnicas levantamiento + pausas', efectividad: 90 },
    { factor: 'Posturas Forzadas', nivel_riesgo: 'Moderado', probabilidad_daño: 'Media', medidas_control: 'Ergonomía + ejercicios', efectividad: 75 },
    { factor: 'Estrés Laboral', nivel_riesgo: 'Moderado', probabilidad_daño: 'Media', medidas_control: 'Apoyo psicológico + organización', efectividad: 80 },
    { factor: 'Exposición Química', nivel_riesgo: 'Bajo', probabilidad_daño: 'Baja', medidas_control: 'EPP + ventilación', efectividad: 95 }
];

const recomendacionesAjustesData = [
    { tipo: 'Organizacional', recomendacion: 'Rotación entre puestos de trabajo', prioridad: 'Alta', implementacion: 'Inmediata', responsable: 'Jefe Directo' },
    { tipo: 'Ambiental', recomendacion: 'Mejora acústica área trabajo', prioridad: 'Media', implementacion: 'Mediano plazo', responsable: 'Ingeniería' },
    { tipo: 'Individual', recomendacion: 'Capacitación ergonomía personal', prioridad: 'Alta', implementacion: 'Corto plazo', responsable: 'SST' },
    { tipo: 'Médica', recomendacion: 'Seguimiento audiológico especializado', prioridad: 'Alta', implementacion: 'Inmediata', responsable: 'Med. Ocupacional' },
    { tipo: 'Tecnológica', recomendacion: 'Dispositivos asistivos auditivos', prioridad: 'Media', implementacion: 'Corto plazo', responsable: 'Recursos Humanos' }
];

const seguimientoEspecializadoData = [
    { especialidad: 'Cardiología', frecuencia: 'Anual', ultimo_control: '2024-03-10', proximo: '2025-03-10', estado: 'Programado' },
    { especialidad: 'Audiología', frecuencia: 'Trimestral', ultimo_control: '2024-05-15', proximo: '2024-08-15', estado: 'Vencido' },
    { especialidad: 'Ergonomía', frecuencia: 'Semestral', ultimo_control: '2024-02-20', proximo: '2024-08-20', estado: 'Próximo' },
    { especialidad: 'Psicología', frecuencia: 'Anual', ultimo_control: '2024-01-30', proximo: '2025-01-30', estado: 'Vigente' }
];

const distribucionCapacidadData = [
    { sistema: 'Cardiovascular', capacidad: 85 },
    { sistema: 'Respiratorio', capacidad: 88 },
    { sistema: 'Musculoesquelético', capacidad: 75 },
    { sistema: 'Neurológico', capacidad: 92 },
    { sistema: 'Visual', capacidad: 80 },
    { sistema: 'Auditivo', capacidad: 70 }
];

export default function IndiceSaludOcupacional() {
    const getIndiceColor = (indice: number) => {
        if (indice >= 80) return 'success';
        if (indice >= 60) return 'warning';
        return 'error';
    };

    const getCapacidadColor = (capacidad: number) => {
        if (capacidad >= 85) return 'success';
        if (capacidad >= 70) return 'warning';
        return 'error';
    };

    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'excelente': case 'bueno': return 'success';
            case 'regular': return 'warning';
            case 'comprometido': case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    const getRiesgoColor = (riesgo: string) => {
        switch (riesgo.toLowerCase()) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getPrioridadColor = (prioridad: string) => {
        switch (prioridad.toLowerCase()) {
            case 'alta': return 'error';
            case 'media': return 'warning';
            case 'baja': return 'success';
            default: return 'default';
        }
    };

    const getSeguimientoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'vigente': case 'programado': return 'success';
            case 'próximo': return 'info';
            case 'vencido': return 'error';
            default: return 'default';
        }
    };

    const getEfectividadColor = (efectividad: number) => {
        if (efectividad >= 85) return 'success';
        if (efectividad >= 70) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Índice de Salud Ocupacional
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Índice Global de Salud Ocupacional
                        </Typography>
                        <Box sx={{ height: 150, display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={150}
                                height={150}
                                value={indiceSaludOcupacionalData.indice_global}
                                startAngle={-110}
                                endAngle={110}
                                valueMin={0}
                                valueMax={100}
                                text={({ value }) => `${value}%`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Chip
                                label={indiceSaludOcupacionalData.clasificacion}
                                color={getIndiceColor(indiceSaludOcupacionalData.indice_global)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                Tendencia: {indiceSaludOcupacionalData.tendencia}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Riesgo Ocupacional: {indiceSaludOcupacionalData.componentes.riesgo_ocupacional}%
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad Laboral por Sistema
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={300}
                                height={200}
                                dataset={distribucionCapacidadData}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'sistema',
                                    label: 'Sistema'
                                }]}
                                yAxis={[{ label: 'Capacidad (%)' }]}
                                series={[
                                    { dataKey: 'capacidad', label: 'Capacidad', color: '#1976d2' }
                                ]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación de Aptitud Actual
                        </Typography>
                        <Box sx={{ p: 2, bgcolor: 'warning.light', borderRadius: 2, mb: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'warning.contrastText', textAlign: 'center' }}>
                                {evaluacionAptitudActualData.clasificacion_general}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1, color: 'warning.contrastText', textAlign: 'center' }}>
                                Restricciones Activas: {evaluacionAptitudActualData.restricciones_activas}
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText', textAlign: 'center' }}>
                                Última Evaluación: {evaluacionAptitudActualData.fecha_ultima_evaluacion}
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', color: 'warning.contrastText', textAlign: 'center' }}>
                                Próxima: {evaluacionAptitudActualData.proxima_evaluacion}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                <Chip
                                    label={evaluacionAptitudActualData.validez}
                                    color="success"
                                    size="small"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad Laboral Detallada por Sistema
                        </Typography>
                        {capacidadLaboralSistemasData.map((sistema, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {sistema.sistema}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${sistema.capacidad}%`}
                                            color={getCapacidadColor(sistema.capacidad)}
                                            size="small"
                                        />
                                        <Chip
                                            label={sistema.estado}
                                            color={getEstadoColor(sistema.estado)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Limitaciones: {sistema.limitaciones}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Recomendaciones: {sistema.recomendaciones}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={sistema.capacidad}
                                    color={getCapacidadColor(sistema.capacidad) === 'error' ? 'error' : getCapacidadColor(sistema.capacidad) === 'warning' ? 'warning' : 'success'}
                                    sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                                />
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores de Riesgo Ocupacional
                        </Typography>
                        {factoresRiesgoOcupacionalData.map((factor, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {factor.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={factor.nivel_riesgo}
                                            color={getRiesgoColor(factor.nivel_riesgo)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${factor.efectividad}%`}
                                            color={getEfectividadColor(factor.efectividad)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Probabilidad Daño: {factor.probabilidad_daño}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Medidas: {factor.medidas_control}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Restricciones Laborales Activas
                        </Typography>
                        {restriccionesActivasData.map((restriccion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'error.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'error.contrastText' }}>
                                    {restriccion.restriccion}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'error.contrastText' }}>
                                    Justificación: {restriccion.justificacion}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'error.contrastText' }}>
                                    Desde: {restriccion.fecha_inicio}
                                </Typography>
                                <Typography variant="caption" color="error.contrastText">
                                    Revisión: {restriccion.revision}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Recomendaciones y Ajustes
                        </Typography>
                        {recomendacionesAjustesData.map((recomendacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {recomendacion.tipo}
                                    </Typography>
                                    <Chip
                                        label={recomendacion.prioridad}
                                        color={getPrioridadColor(recomendacion.prioridad)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    {recomendacion.recomendacion}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    Implementación: {recomendacion.implementacion}
                                </Typography>
                                <Typography variant="caption" color="success.contrastText">
                                    Responsable: {recomendacion.responsable}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Seguimiento Especializado
                        </Typography>
                        {seguimientoEspecializadoData.map((seguimiento, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'primary.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'primary.contrastText' }}>
                                        {seguimiento.especialidad}
                                    </Typography>
                                    <Chip
                                        label={seguimiento.estado}
                                        color={getSeguimientoColor(seguimiento.estado)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'primary.contrastText' }}>
                                    Frecuencia: {seguimiento.frecuencia}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'primary.contrastText' }}>
                                    Último: {seguimiento.ultimo_control}
                                </Typography>
                                <Typography variant="caption" color="primary.contrastText">
                                    Próximo: {seguimiento.proximo}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📊 Índice de salud ocupacional bueno | Apto con restricciones controladas | Seguimiento especializado requerido
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
