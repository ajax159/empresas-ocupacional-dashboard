import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const tendenciasEvolucionSaludData = [
    { año: '2019', indice_salud: 85, factores_riesgo: 3, patologias_activas: 1, capacidad_funcional: 90 },
    { año: '2020', indice_salud: 83, factores_riesgo: 4, patologias_activas: 2, capacidad_funcional: 88 },
    { año: '2021', indice_salud: 80, factores_riesgo: 5, patologias_activas: 2, capacidad_funcional: 85 },
    { año: '2022', indice_salud: 78, factores_riesgo: 6, patologias_activas: 3, capacidad_funcional: 82 },
    { año: '2023', indice_salud: 75, factores_riesgo: 7, patologias_activas: 3, capacidad_funcional: 80 },
    { año: '2024', indice_salud: 72, factores_riesgo: 8, patologias_activas: 4, capacidad_funcional: 78 }
];

const patologiasDetectadasData = [
    { patologia: 'Hipertensión Arterial', año_deteccion: '2020', estado_actual: 'Controlada', seguimiento: 'Trimestral', riesgo_laboral: 'Moderado' },
    { patologia: 'Hipoacusia Ocupacional', año_deteccion: '2021', estado_actual: 'Progresiva', seguimiento: 'Trimestral', riesgo_laboral: 'Alto' },
    { patologia: 'Lumbalgia Mecánica', año_deteccion: '2022', estado_actual: 'Episódica', seguimiento: 'Semestral', riesgo_laboral: 'Moderado' },
    { patologia: 'Dermatitis Contacto', año_deteccion: '2023', estado_actual: 'Controlada', seguimiento: 'Anual', riesgo_laboral: 'Bajo' },
    { patologia: 'Síndrome Visual', año_deteccion: '2024', estado_actual: 'Activa', seguimiento: 'Semestral', riesgo_laboral: 'Moderado' }
];

const factoresRiesgoEvolucionData = [
    { factor: 'Exposición Ruido', nivel_2019: 'Moderado', nivel_2024: 'Alto', tendencia: 'Empeorando', medidas: 'Protección auditiva mejorada' },
    { factor: 'Esfuerzo Físico', nivel_2019: 'Bajo', nivel_2024: 'Moderado', tendencia: 'Empeorando', medidas: 'Capacitación ergonómica' },
    { factor: 'Exposición Química', nivel_2019: 'Bajo', nivel_2024: 'Bajo', tendencia: 'Estable', medidas: 'Controles ambientales' },
    { factor: 'Estrés Laboral', nivel_2019: 'Moderado', nivel_2024: 'Moderado', tendencia: 'Estable', medidas: 'Programas bienestar' },
    { factor: 'Posturas Forzadas', nivel_2019: 'Bajo', nivel_2024: 'Moderado', tendencia: 'Empeorando', medidas: 'Ajustes ergonómicos' }
];

const capacidadFuncionalData = [
    { sistema: 'Cardiovascular', evaluacion_2019: 90, evaluacion_2024: 85, cambio: -5, estado: 'Bueno' },
    { sistema: 'Respiratorio', evaluacion_2019: 88, evaluacion_2024: 82, cambio: -6, estado: 'Bueno' },
    { sistema: 'Musculoesquelético', evaluacion_2019: 92, evaluacion_2024: 80, cambio: -12, estado: 'Regular' },
    { sistema: 'Neurológico', evaluacion_2019: 95, evaluacion_2024: 90, cambio: -5, estado: 'Excelente' },
    { sistema: 'Visual', evaluacion_2019: 85, evaluacion_2024: 78, cambio: -7, estado: 'Regular' },
    { sistema: 'Auditivo', evaluacion_2019: 90, evaluacion_2024: 70, cambio: -20, estado: 'Comprometido' }
];

const distribucionPatologiasData = [
    { id: 0, value: 25, label: 'Ocupacionales' },
    { id: 1, value: 35, label: 'Relacionadas Trabajo' },
    { id: 2, value: 30, label: 'Comunes' },
    { id: 3, value: 10, label: 'Preexistentes' }
];

const intervencionesRealizadasData = [
    { intervencion: 'Cambio Puesto Trabajo', año: '2021', efectividad: 85, seguimiento: 'Exitoso' },
    { intervencion: 'Programa Ergonomía', año: '2022', efectividad: 70, seguimiento: 'Parcial' },
    { intervencion: 'Controles Médicos', año: '2020', efectividad: 95, seguimiento: 'Continuo' },
    { intervencion: 'Capacitación Preventiva', año: '2023', efectividad: 80, seguimiento: 'Activo' },
    { intervencion: 'Protección Personal', año: '2021', efectividad: 90, seguimiento: 'Optimizado' }
];

const indicadoresPronosticoData = [
    { indicador: 'Progresión Patologías', valor: 'Lenta', probabilidad: 'Media', tiempo_estimado: '3-5 años' },
    { indicador: 'Capacidad Laboral', valor: 'Estable', probabilidad: 'Alta', tiempo_estimado: '2-3 años' },
    { indicador: 'Riesgo Incapacidad', valor: 'Bajo', probabilidad: 'Baja', tiempo_estimado: '>5 años' },
    { indicador: 'Calidad Vida', valor: 'Buena', probabilidad: 'Alta', tiempo_estimado: 'Mantenida' }
];

export default function TendenciasEvolucionSalud() {
    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'controlada': case 'excelente': case 'bueno': return 'success';
            case 'episódica': case 'regular': return 'warning';
            case 'activa': case 'progresiva': case 'comprometido': return 'error';
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

    const getTendenciaColor = (tendencia: string) => {
        switch (tendencia.toLowerCase()) {
            case 'mejorando': return 'success';
            case 'estable': return 'info';
            case 'empeorando': return 'error';
            default: return 'default';
        }
    };

    const getCambioColor = (cambio: number) => {
        if (cambio >= 0) return 'success';
        if (cambio >= -10) return 'warning';
        return 'error';
    };

    const getEfectividadColor = (efectividad: number) => {
        if (efectividad >= 85) return 'success';
        if (efectividad >= 70) return 'warning';
        return 'error';
    };

    const getProbabilidadColor = (probabilidad: string) => {
        switch (probabilidad.toLowerCase()) {
            case 'alta': return 'success';
            case 'media': return 'warning';
            case 'baja': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Tendencias y Evolución de Salud
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Índices de Salud (2019-2024)
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <BarChart
                                width={500}
                                height={300}
                                dataset={tendenciasEvolucionSaludData}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'año',
                                    label: 'Año'
                                }]}
                                yAxis={[{ label: 'Puntuación' }]}
                                series={[
                                    { dataKey: 'indice_salud', label: 'Índice Salud', color: '#1976d2' },
                                    { dataKey: 'capacidad_funcional', label: 'Capacidad Funcional', color: '#2e7d32' },
                                    { dataKey: 'factores_riesgo', label: 'Factores Riesgo', color: '#d32f2f' }
                                ]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Patologías
                        </Typography>
                        <Box sx={{ height: 200, mb: 2 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionPatologiasData,
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
                        <Typography variant="subtitle2" gutterBottom>
                            Indicadores de Pronóstico
                        </Typography>
                        {indicadoresPronosticoData.map((indicador, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {indicador.indicador}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={indicador.valor}
                                            color={indicador.valor === 'Buena' || indicador.valor === 'Estable' ? 'success' : indicador.valor === 'Lenta' || indicador.valor === 'Bajo' ? 'warning' : 'default'}
                                            size="small"
                                        />
                                        <Chip
                                            label={indicador.probabilidad}
                                            color={getProbabilidadColor(indicador.probabilidad)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Patologías Detectadas
                        </Typography>
                        {patologiasDetectadasData.map((patologia, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {patologia.patologia}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={patologia.estado_actual}
                                            color={getEstadoColor(patologia.estado_actual)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Detectada: {patologia.año_deteccion} | Seguimiento: {patologia.seguimiento}
                                </Typography>
                                <Chip
                                    label={`Riesgo: ${patologia.riesgo_laboral}`}
                                    color={getRiesgoColor(patologia.riesgo_laboral)}
                                    size="small"
                                    variant="outlined"
                                />
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Factores de Riesgo
                        </Typography>
                        {factoresRiesgoEvolucionData.map((factor, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'warning.contrastText' }}>
                                        {factor.factor}
                                    </Typography>
                                    <Chip
                                        label={factor.tendencia}
                                        color={getTendenciaColor(factor.tendencia)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                    2019: {factor.nivel_2019} → 2024: {factor.nivel_2024}
                                </Typography>
                                <Typography variant="caption" color="warning.contrastText">
                                    Medidas: {factor.medidas}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad Funcional por Sistema
                        </Typography>
                        {capacidadFuncionalData.map((sistema, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {sistema.sistema}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={sistema.estado}
                                            color={getEstadoColor(sistema.estado)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${sistema.cambio}`}
                                            color={getCambioColor(sistema.cambio)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    2019: {sistema.evaluacion_2019}% → 2024: {sistema.evaluacion_2024}%
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={sistema.evaluacion_2024}
                                    color={sistema.evaluacion_2024 >= 80 ? 'success' : sistema.evaluacion_2024 >= 70 ? 'warning' : 'error'}
                                    sx={{ height: 4, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.3)' }}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Intervenciones Realizadas y Efectividad
                        </Typography>
                        <Grid container spacing={2}>
                            {intervencionesRealizadasData.map((intervencion, index) => (
                                <Grid key={index} size={2.4}>
                                    <Box sx={{ p: 1.5, bgcolor: 'primary.light', borderRadius: 1, textAlign: 'center' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'primary.contrastText' }}>
                                            {intervencion.intervencion}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'primary.contrastText' }}>
                                            Año: {intervencion.año}
                                        </Typography>
                                        <Chip
                                            label={`${intervencion.efectividad}%`}
                                            color={getEfectividadColor(intervencion.efectividad)}
                                            size="small"
                                            sx={{ mb: 0.5 }}
                                        />
                                        <Typography variant="caption" sx={{ display: 'block', color: 'primary.contrastText' }}>
                                            {intervencion.seguimiento}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        📈 Deterioro gradual controlado | Intervenciones efectivas implementadas | Seguimiento médico especializado requerido
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
