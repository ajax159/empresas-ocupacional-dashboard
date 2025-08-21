import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const aptitudAuditivaLaboralData = {
    clasificacion_general: 'Apto con Restricciones',
    nivel_riesgo: 'Moderado',
    capacidad_comunicativa: 78,
    funcionalidad_laboral: 75,
    recomendacion_medica: 'Seguimiento trimestral'
};

const evaluacionAptitudData = [
    { criterio: 'Umbrales Auditivos', puntuacion: 70, limite_aceptable: 80, estado: 'Borderline', observaciones: 'Leve deterioro en frecuencias altas' },
    { criterio: 'Discriminación Verbal', puntuacion: 92, limite_aceptable: 85, estado: 'Satisfactorio', observaciones: 'Excelente comprensión verbal' },
    { criterio: 'Localización Sonora', puntuacion: 75, limite_aceptable: 70, estado: 'Satisfactorio', observaciones: 'Capacidad preservada' },
    { criterio: 'Atención Selectiva', puntuacion: 68, limite_aceptable: 75, estado: 'Insatisfactorio', observaciones: 'Dificultad en ambientes ruidosos' },
    { criterio: 'Comunicación Telefónica', puntuacion: 65, limite_aceptable: 70, estado: 'Insatisfactorio', observaciones: 'Requiere amplificación' },
    { criterio: 'Alerta a Señales', puntuacion: 80, limite_aceptable: 85, estado: 'Borderline', observaciones: 'Buena respuesta con apoyo visual' }
];

const restriccionesLaboralesData = [
    { restriccion: 'Ambientes Extremo Ruido', aplicable: true, justificacion: 'Riesgo progresión hipoacusia', alternativas: ['Cabina insonorizada', 'Trabajo remoto'] },
    { restriccion: 'Trabajo en Alturas', aplicable: true, justificacion: 'Comunicación crítica para seguridad', alternativas: ['Sistemas comunicación visual', 'Compañero auditivo'] },
    { restriccion: 'Operación Maquinaria Pesada', aplicable: false, justificacion: 'Compensado con protección', alternativas: ['Protección optimizada', 'Señales visuales'] },
    { restriccion: 'Atención al Público', aplicable: false, justificacion: 'Adaptable con tecnología', alternativas: ['Amplificadores', 'Comunicación escrita'] },
    { restriccion: 'Trabajo Nocturno', aplicable: true, justificacion: 'Reducida percepción señales', alternativas: ['Turnos diurnos', 'Sistemas táctiles'] }
];

const adaptacionesRecomendadasData = [
    { tipo: 'Tecnológicas', adaptacion: 'Amplificadores personales', prioridad: 'Alta', costo: 'Moderado', implementacion: 'Inmediata' },
    { tipo: 'Ambientales', adaptacion: 'Mejora acústica espacios', prioridad: 'Media', costo: 'Alto', implementacion: 'Mediano plazo' },
    { tipo: 'Organizacionales', adaptacion: 'Políticas comunicación inclusiva', prioridad: 'Alta', costo: 'Bajo', implementacion: 'Inmediata' },
    { tipo: 'Individuales', adaptacion: 'Entrenamiento comunicativo', prioridad: 'Media', costo: 'Bajo', implementacion: 'Corto plazo' },
    { tipo: 'Seguridad', adaptacion: 'Sistemas alerta multimodal', prioridad: 'Alta', costo: 'Moderado', implementacion: 'Corto plazo' }
];

const seguimientoRequeridoData = [
    { componente: 'Audiometría Control', frecuencia: 'Trimestral', responsable: 'Medicina Ocupacional', objetivo: 'Monitorear progresión' },
    { componente: 'Evaluación Funcional', frecuencia: 'Semestral', responsable: 'Fonoaudiología', objetivo: 'Valorar adaptaciones' },
    { componente: 'Revisión Aptitud', frecuencia: 'Anual', responsable: 'Comité Médico', objetivo: 'Actualizar restricciones' },
    { componente: 'Capacitación Preventiva', frecuencia: 'Anual', responsable: 'Salud Ocupacional', objetivo: 'Reforzar medidas' },
    { componente: 'Evaluación Tecnológica', frecuencia: 'Según necesidad', responsable: 'Tecnología Asistiva', objetivo: 'Optimizar ayudas' }
];

const factoresRiesgoAdicionalData = [
    { factor: 'Progresión Hipoacusia', nivel: 'Moderado', probabilidad: 'Media', medidas_preventivas: ['Protección auditiva', 'Control exposición'] },
    { factor: 'Accidentes Laborales', nivel: 'Alto', probabilidad: 'Baja', medidas_preventivas: ['Señales visuales', 'Comunicación redundante'] },
    { factor: 'Aislamiento Social', nivel: 'Moderado', probabilidad: 'Media', medidas_preventivas: ['Apoyo psicológico', 'Integración grupal'] },
    { factor: 'Fatiga Auditiva', nivel: 'Alto', probabilidad: 'Alta', medidas_preventivas: ['Descansos auditivos', 'Rotación tareas'] },
    { factor: 'Estrés Comunicativo', nivel: 'Moderado', probabilidad: 'Media', medidas_preventivas: ['Estrategias comunicación', 'Apoyo tecnológico'] }
];

const distribucionAptitudData = [
    { id: 0, value: 45, label: 'Apto' },
    { id: 1, value: 40, label: 'Apto con Restricciones' },
    { id: 2, value: 12, label: 'No Apto Temporal' },
    { id: 3, value: 3, label: 'No Apto Definitivo' }
];

const pronosticoLaboralData = [
    { aspecto: 'Continuidad Laboral', evaluacion: 'Favorable', tiempo_estimado: '2-3 años', condiciones: 'Con adaptaciones implementadas' },
    { aspecto: 'Progresión Carrera', evaluacion: 'Limitada', tiempo_estimado: 'Variable', condiciones: 'Roles adaptados disponibles' },
    { aspecto: 'Riesgo Incapacidad', evaluacion: 'Bajo', tiempo_estimado: '>5 años', condiciones: 'Medidas preventivas mantenidas' },
    { aspecto: 'Calidad Vida Laboral', evaluacion: 'Buena', tiempo_estimado: 'Actual', condiciones: 'Apoyo organizacional presente' }
];

export default function AptitudAuditivaLimitaciones() {
    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'satisfactorio': return 'success';
            case 'borderline': return 'warning';
            case 'insatisfactorio': return 'error';
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

    const getNivelColor = (nivel: string) => {
        switch (nivel.toLowerCase()) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getProbabilidadColor = (probabilidad: string) => {
        switch (probabilidad.toLowerCase()) {
            case 'baja': return 'success';
            case 'media': return 'warning';
            case 'alta': return 'error';
            default: return 'default';
        }
    };

    const getEvaluacionColor = (evaluacion: string) => {
        switch (evaluacion.toLowerCase()) {
            case 'favorable': case 'buena': return 'success';
            case 'limitada': return 'warning';
            case 'desfavorable': case 'mala': return 'error';
            default: return 'info';
        }
    };

    const getAplicableColor = (aplicable: boolean) => {
        return aplicable ? 'error' : 'success';
    };

    const getCostoColor = (costo: string) => {
        switch (costo.toLowerCase()) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Aptitud Auditiva y Limitaciones Laborales
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación General de Aptitud
                        </Typography>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {aptitudAuditivaLaboralData.capacidad_comunicativa}%
                            </Typography>
                            <Chip
                                label={aptitudAuditivaLaboralData.clasificacion_general}
                                color="warning"
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                Nivel de Riesgo: {aptitudAuditivaLaboralData.nivel_riesgo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                Funcionalidad: {aptitudAuditivaLaboralData.funcionalidad_laboral}%
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {aptitudAuditivaLaboralData.recomendacion_medica}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución Aptitud Poblacional
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionAptitudData,
                                        innerRadius: 30,
                                        outerRadius: 80,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        highlightScope: { fade: 'global', highlight: 'item' }
                                    },
                                ]}
                                width={300}
                                height={200}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Pronóstico Laboral
                        </Typography>
                        {pronosticoLaboralData.map((pronostico, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {pronostico.aspecto}
                                    </Typography>
                                    <Chip
                                        label={pronostico.evaluacion}
                                        color={getEvaluacionColor(pronostico.evaluacion)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Tiempo: {pronostico.tiempo_estimado}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    {pronostico.condiciones}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación por Criterios de Aptitud
                        </Typography>
                        {evaluacionAptitudData.map((criterio, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {criterio.criterio}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${criterio.puntuacion}%`}
                                            color={criterio.puntuacion >= criterio.limite_aceptable ? 'success' : 'error'}
                                            size="small"
                                        />
                                        <Chip
                                            label={criterio.estado}
                                            color={getEstadoColor(criterio.estado)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Límite: {criterio.limite_aceptable}% | Actual: {criterio.puntuacion}%
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={criterio.puntuacion}
                                    color={criterio.puntuacion >= criterio.limite_aceptable ? 'success' : 'error'}
                                    sx={{ height: 4, borderRadius: 2, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                    {criterio.observaciones}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Restricciones Laborales Identificadas
                        </Typography>
                        {restriccionesLaboralesData.map((restriccion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'warning.contrastText' }}>
                                        {restriccion.restriccion}
                                    </Typography>
                                    <Chip
                                        label={restriccion.aplicable ? 'APLICABLE' : 'NO APLICABLE'}
                                        color={getAplicableColor(!restriccion.aplicable)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                    Justificación: {restriccion.justificacion}
                                </Typography>
                                <Typography variant="caption" color="warning.contrastText">
                                    Alternativas: {restriccion.alternativas.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Adaptaciones Recomendadas
                        </Typography>
                        {adaptacionesRecomendadasData.map((adaptacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {adaptacion.tipo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={adaptacion.prioridad}
                                            color={getPrioridadColor(adaptacion.prioridad)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    {adaptacion.adaptacion}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                    <Chip
                                        label={adaptacion.costo}
                                        color={getCostoColor(adaptacion.costo)}
                                        size="small"
                                        variant="outlined"
                                    />
                                    <Chip
                                        label={adaptacion.implementacion}
                                        color="info"
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores de Riesgo Adicional
                        </Typography>
                        {factoresRiesgoAdicionalData.map((factor, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'error.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'error.contrastText' }}>
                                        {factor.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={factor.nivel}
                                            color={getNivelColor(factor.nivel)}
                                            size="small"
                                        />
                                        <Chip
                                            label={factor.probabilidad}
                                            color={getProbabilidadColor(factor.probabilidad)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="error.contrastText">
                                    Medidas: {factor.medidas_preventivas.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Seguimiento Requerido
                        </Typography>
                        {seguimientoRequeridoData.map((seguimiento, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'primary.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'primary.contrastText' }}>
                                        {seguimiento.componente}
                                    </Typography>
                                    <Chip
                                        label={seguimiento.frecuencia}
                                        color="primary"
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'primary.contrastText' }}>
                                    Responsable: {seguimiento.responsable}
                                </Typography>
                                <Typography variant="caption" color="primary.contrastText">
                                    Objetivo: {seguimiento.objetivo}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Trabajador apto con restricciones específicas | Adaptaciones requeridas para desempeño seguro | Seguimiento médico trimestral necesario
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
