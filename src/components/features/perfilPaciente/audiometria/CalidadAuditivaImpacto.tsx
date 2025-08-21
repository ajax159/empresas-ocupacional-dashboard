import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';

const calidadAuditivaGlobalData = {
    indice_calidad: 78,
    capacidad_comunicativa: 85,
    funcionalidad_laboral: 72,
    calidad_vida: 80,
    satisfaccion_auditiva: 75
};

const evaluacionFuncionalData = [
    { aspecto: 'Comprensión Conversacional', puntuacion: 88, impacto: 'Mínimo', descripcion: 'Comprende bien en ambientes silenciosos' },
    { aspecto: 'Comunicación en Ruido', puntuacion: 65, impacto: 'Moderado', descripcion: 'Dificultad con ruido de fondo' },
    { aspecto: 'Localización Espacial', puntuacion: 75, impacto: 'Leve', descripcion: 'Capacidad parcialmente preservada' },
    { aspecto: 'Discriminación Verbal', puntuacion: 92, impacto: 'Mínimo', descripcion: 'Excelente discriminación de palabras' },
    { aspecto: 'Atención Auditiva', puntuacion: 70, impacto: 'Moderado', descripcion: 'Fatiga auditiva en jornadas largas' },
    { aspecto: 'Memoria Auditiva', puntuacion: 82, impacto: 'Leve', descripcion: 'Retención adecuada de información' }
];

const impactoSocialLaboralData = [
    { area: 'Participación Reuniones', calificacion: 7, dificultades: ['Ruido ambiente', 'Múltiples hablantes'], adaptaciones: ['Asiento frontal', 'Amplificación'] },
    { area: 'Comunicación Telefónica', calificacion: 6, dificultades: ['Calidad línea', 'Sonidos agudos'], adaptaciones: ['Auriculares especiales', 'Volumen alto'] },
    { area: 'Alertas de Seguridad', calificacion: 8, dificultades: ['Frecuencias altas'], adaptaciones: ['Señales visuales', 'Dispositivos táctiles'] },
    { area: 'Trabajo en Equipo', calificacion: 7, dificultades: ['Ambientes ruidosos'], adaptaciones: ['Comunicación visual', 'Protocolos escritos'] },
    { area: 'Capacitaciones', calificacion: 6, dificultades: ['Acústica aulas', 'Distancia'], adaptaciones: ['Asiento preferencial', 'Material escrito'] }
];

const estrategiasAdaptacionData = [
    { estrategia: 'Tecnologías Asistivas', implementacion: 'Completa', eficacia: 90, descripcion: 'Amplificadores, auriculares especializados' },
    { estrategia: 'Modificaciones Ambientales', implementacion: 'Parcial', eficacia: 75, descripcion: 'Reducción ruido, mejor acústica' },
    { estrategia: 'Comunicación Alternativa', implementacion: 'Buena', eficacia: 85, descripcion: 'Señales visuales, lenguaje gestual' },
    { estrategia: 'Apoyo Organizacional', implementacion: 'Excelente', eficacia: 95, descripcion: 'Políticas inclusivas, sensibilización' },
    { estrategia: 'Adaptaciones Laborales', implementacion: 'Buena', eficacia: 80, descripcion: 'Horarios flexibles, tareas adaptadas' }
];

const participacionSocialData = [
    { actividad: 'Conversaciones Grupales', frecuencia: 60, satisfaccion: 6, limitaciones: 'Ruido ambiente, múltiples voces' },
    { actividad: 'Eventos Sociales', frecuencia: 45, satisfaccion: 5, limitaciones: 'Música alta, acústica deficiente' },
    { actividad: 'Actividades Familiares', frecuencia: 85, satisfaccion: 8, limitaciones: 'Mínimas en ambiente controlado' },
    { actividad: 'Entretenimiento Audiovisual', frecuencia: 70, satisfaccion: 7, limitaciones: 'Necesita subtítulos, volumen alto' },
    { actividad: 'Ejercicio/Deportes', frecuencia: 80, satisfaccion: 8, limitaciones: 'Comunicación durante actividad' }
];

const factoresProtectivosData = [
    { factor: 'Uso Consistente Protección', presente: true, impacto: 'Alto', descripcion: 'Protección auditiva 95% del tiempo' },
    { factor: 'Entorno Laboral Adaptado', presente: true, impacto: 'Moderado', descripcion: 'Medidas de control de ruido implementadas' },
    { factor: 'Apoyo Familiar/Social', presente: true, impacto: 'Alto', descripcion: 'Comprensión y apoyo del entorno' },
    { factor: 'Acceso Tecnología Asistiva', presente: true, impacto: 'Alto', descripcion: 'Dispositivos de amplificación disponibles' },
    { factor: 'Seguimiento Médico Regular', presente: true, impacto: 'Moderado', descripcion: 'Controles audiológicos trimestrales' }
];

const distribucionImpactoData = [
    { id: 0, value: 35, label: 'Impacto Mínimo' },
    { id: 1, value: 40, label: 'Impacto Leve' },
    { id: 2, value: 20, label: 'Impacto Moderado' },
    { id: 3, value: 5, label: 'Impacto Severo' }
];

const evaluacionCalidadVidaData = [
    { dimension: 'Funcional', puntuacion: 75, observaciones: 'Adaptación laboral exitosa con apoyos' },
    { dimension: 'Emocional', puntuacion: 70, observaciones: 'Ocasional frustración en comunicación' },
    { dimension: 'Social', puntuacion: 65, observaciones: 'Participación limitada en grupos grandes' },
    { dimension: 'Físico', puntuacion: 85, observaciones: 'Sin limitaciones físicas asociadas' }
];

export default function CalidadAuditivaImpacto() {
    const getImpactoColor = (impacto: string) => {
        switch (impacto.toLowerCase()) {
            case 'mínimo': return 'success';
            case 'leve': return 'info';
            case 'moderado': return 'warning';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getCalificacionColor = (calificacion: number) => {
        if (calificacion >= 8) return 'success';
        if (calificacion >= 6) return 'warning';
        return 'error';
    };

    const getPuntuacionColor = (puntuacion: number) => {
        if (puntuacion >= 80) return 'success';
        if (puntuacion >= 60) return 'warning';
        return 'error';
    };

    const getImplementacionColor = (implementacion: string) => {
        switch (implementacion.toLowerCase()) {
            case 'completa': case 'excelente': return 'success';
            case 'buena': return 'info';
            case 'parcial': return 'warning';
            case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    const getFrecuenciaColor = (frecuencia: number) => {
        if (frecuencia >= 80) return 'success';
        if (frecuencia >= 60) return 'warning';
        return 'error';
    };

    const getSatisfaccionColor = (satisfaccion: number) => {
        if (satisfaccion >= 8) return 'success';
        if (satisfaccion >= 6) return 'warning';
        return 'error';
    };

    const getPresenteColor = (presente: boolean) => {
        return presente ? 'success' : 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Calidad Auditiva e Impacto Funcional
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Índices de Calidad Auditiva
                        </Typography>
                        <Box sx={{ height: 120, display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={120}
                                height={120}
                                value={calidadAuditivaGlobalData.indice_calidad}
                                startAngle={-110}
                                endAngle={110}
                                valueMin={0}
                                valueMax={100}
                                text={({ value }) => `${value}%`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Calidad Global: {calidadAuditivaGlobalData.indice_calidad}%</strong>
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                Comunicativa: {calidadAuditivaGlobalData.capacidad_comunicativa}%
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                Laboral: {calidadAuditivaGlobalData.funcionalidad_laboral}%
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                Calidad Vida: {calidadAuditivaGlobalData.calidad_vida}%
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block' }}>
                                Satisfacción: {calidadAuditivaGlobalData.satisfaccion_auditiva}%
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución del Impacto Funcional
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionImpactoData,
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
                            Evaluación Calidad de Vida
                        </Typography>
                        {evaluacionCalidadVidaData.map((dimension, index) => (
                            <Box key={index} sx={{ mb: 1.5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                        {dimension.dimension}
                                    </Typography>
                                    <Chip
                                        label={`${dimension.puntuacion}%`}
                                        color={getPuntuacionColor(dimension.puntuacion)}
                                        size="small"
                                    />
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={dimension.puntuacion}
                                    color={getPuntuacionColor(dimension.puntuacion) === 'error' ? 'error' : getPuntuacionColor(dimension.puntuacion) === 'warning' ? 'warning' : 'success'}
                                    sx={{ height: 4, borderRadius: 2, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                    {dimension.observaciones}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación Funcional Auditiva
                        </Typography>
                        {evaluacionFuncionalData.map((evaluacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {evaluacion.aspecto}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${evaluacion.puntuacion}%`}
                                            color={getPuntuacionColor(evaluacion.puntuacion)}
                                            size="small"
                                        />
                                        <Chip
                                            label={evaluacion.impacto}
                                            color={getImpactoColor(evaluacion.impacto)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {evaluacion.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Impacto Social y Laboral
                        </Typography>
                        {impactoSocialLaboralData.map((impacto, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {impacto.area}
                                    </Typography>
                                    <Chip
                                        label={`${impacto.calificacion}/10`}
                                        color={getCalificacionColor(impacto.calificacion)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Dificultades: {impacto.dificultades.join(', ')}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Adaptaciones: {impacto.adaptaciones.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estrategias de Adaptación
                        </Typography>
                        {estrategiasAdaptacionData.map((estrategia, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {estrategia.estrategia}
                                    </Typography>
                                    <Chip
                                        label={`${estrategia.eficacia}%`}
                                        color={estrategia.eficacia >= 90 ? 'success' : estrategia.eficacia >= 75 ? 'warning' : 'error'}
                                        size="small"
                                    />
                                </Box>
                                <Chip
                                    label={estrategia.implementacion}
                                    color={getImplementacionColor(estrategia.implementacion)}
                                    size="small"
                                    sx={{ mb: 0.5 }}
                                />
                                <Typography variant="caption" sx={{ display: 'block', color: 'success.contrastText' }}>
                                    {estrategia.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Participación Social
                        </Typography>
                        {participacionSocialData.map((participacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'warning.contrastText' }}>
                                        {participacion.actividad}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`F:${participacion.frecuencia}%`}
                                            color={getFrecuenciaColor(participacion.frecuencia)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`S:${participacion.satisfaccion}/10`}
                                            color={getSatisfaccionColor(participacion.satisfaccion)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="warning.contrastText">
                                    Limitaciones: {participacion.limitaciones}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores Protectivos
                        </Typography>
                        {factoresProtectivosData.map((factor, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'primary.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'primary.contrastText' }}>
                                        {factor.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={factor.presente ? 'PRESENTE' : 'AUSENTE'}
                                            color={getPresenteColor(factor.presente)}
                                            size="small"
                                        />
                                        <Chip
                                            label={factor.impacto}
                                            color={factor.impacto === 'Alto' ? 'success' : 'warning'}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="primary.contrastText">
                                    {factor.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        💡 Calidad auditiva compensada con adaptaciones | Impacto funcional controlado | Estrategias de comunicación efectivas implementadas
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
