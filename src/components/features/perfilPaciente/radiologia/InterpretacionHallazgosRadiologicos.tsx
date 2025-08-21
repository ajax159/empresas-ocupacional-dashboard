import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const interpretacionRadiologicaData = [
    { estudio: 'Radiografía Tórax', fecha: '2024-06-15', hallazgos: ['Parénquima pulmonar normal', 'Silueta cardíaca conservada'], conclusion: 'Normal', seguimiento: 'Anual' },
    { estudio: 'TAC Torácica', fecha: '2024-03-20', hallazgos: ['Ausencia neumoconiosis', 'Vías aéreas permeables'], conclusion: 'Sin patología ocupacional', seguimiento: 'Bianual' },
    { estudio: 'Rx Columna Lumbar', fecha: '2024-01-10', hallazgos: ['Espondiloartrosis L4-L5', 'Reducción espacio discal'], conclusion: 'Cambios degenerativos', seguimiento: 'Anual' },
    { estudio: 'Rx Ambas Manos', fecha: '2023-11-08', hallazgos: ['Articulaciones conservadas', 'Sin calcificaciones'], conclusion: 'Normal', seguimiento: 'Según síntomas' }
];

const hallazgosPatologicosData = [
    { patologia: 'Neumoconiosis', presente: false, grado: 'N/A', categoria: 'Ausente', riesgo: 'Bajo' },
    { patologia: 'Silicosis', presente: false, grado: 'N/A', categoria: 'Ausente', riesgo: 'Moderado' },
    { patologia: 'Asbestosis', presente: false, grado: 'N/A', categoria: 'Ausente', riesgo: 'Bajo' },
    { patologia: 'Enfermedad Degenerativa', presente: true, grado: 'Leve', categoria: 'Inicial', riesgo: 'Moderado' },
    { patologia: 'Alteraciones Posturales', presente: true, grado: 'Leve', categoria: 'Ocupacional', riesgo: 'Moderado' }
];

const correlacionClinicaData = [
    { sintoma: 'Dolor Lumbar', correlacion: 'Positiva', grado: 'Alto', hallazgo: 'Espondiloartrosis L4-L5', concordancia: 95 },
    { sintoma: 'Disnea de Esfuerzo', correlacion: 'Negativa', grado: 'Bajo', hallazgo: 'Tórax normal', concordancia: 88 },
    { sintoma: 'Dolor Cervical', correlacion: 'Positiva', grado: 'Moderado', hallazgo: 'Rectificación cervical', concordancia: 78 },
    { sintoma: 'Fatiga', correlacion: 'Indeterminada', grado: 'Bajo', hallazgo: 'Sin correlato radiológico', concordancia: 45 }
];

const evolucionHallazgosData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    cambiosDegenerativos: [1, 1, 2, 2, 3, 3],
    alteracionesPosturales: [0, 1, 1, 2, 2, 2],
    patologiaOcupacional: [0, 0, 0, 0, 0, 0],
    hallazgosNormales: [3, 2, 2, 1, 1, 1]
};

const recomendacionesSeguimientoData = [
    {
        hallazgo: 'Espondiloartrosis Lumbar',
        recomendaciones: ['Control anual', 'Ergonomía laboral', 'Fisioterapia'],
        prioridad: 'Media',
        plazo: '12 meses'
    },
    {
        hallazgo: 'Rectificación Cervical',
        recomendaciones: ['Evaluación postural', 'Ejercicios cervicales', 'Pausas laborales'],
        prioridad: 'Media',
        plazo: '6 meses'
    },
    {
        hallazgo: 'Tórax Normal',
        recomendaciones: ['Seguimiento rutinario', 'Mantener protección respiratoria'],
        prioridad: 'Baja',
        plazo: '12 meses'
    }
];

const clasificacionOITData = [
    { categoria: '0/0', descripcion: 'Sin neumoconiosis', presente: true, trabajadores: 85 },
    { categoria: '0/1', descripcion: 'Dudosa neumoconiosis', presente: false, trabajadores: 10 },
    { categoria: '1/0', descripcion: 'Neumoconiosis leve', presente: false, trabajadores: 3 },
    { categoria: '1/1', descripcion: 'Neumoconiosis establecida', presente: false, trabajadores: 2 }
];

const calidadInterpretacionData = [
    { aspecto: 'Concordancia Interobservador', puntuacion: 92, observaciones: 'Alta concordancia entre radiólogos' },
    { aspecto: 'Correlación Clínica', puntuacion: 85, observaciones: 'Buena correlación con síntomas' },
    { aspecto: 'Precisión Diagnóstica', puntuacion: 94, observaciones: 'Diagnósticos precisos y detallados' },
    { aspecto: 'Seguimiento Recomendaciones', puntuacion: 88, observaciones: 'Seguimiento apropiado establecido' }
];

const distribucionHallazgosData = [
    { categoria: '2019', normales: 3, leves: 0, moderados: 0, severos: 0 },
    { categoria: '2020', normales: 2, leves: 1, moderados: 0, severos: 0 },
    { categoria: '2021', normales: 2, leves: 2, moderados: 0, severos: 0 },
    { categoria: '2022', normales: 1, leves: 2, moderados: 1, severos: 0 },
    { categoria: '2023', normales: 1, leves: 3, moderados: 1, severos: 0 },
    { categoria: '2024', normales: 1, leves: 3, moderados: 1, severos: 0 }
];

export default function InterpretacionHallazgosRadiologicos() {
    const getConclusionColor = (conclusion: string) => {
        switch (conclusion.toLowerCase()) {
            case 'normal': case 'sin patología ocupacional': return 'success';
            case 'cambios degenerativos': case 'alteraciones menores': return 'warning';
            case 'patología significativa': return 'error';
            default: return 'default';
        }
    };

    const getGradoColor = (grado: string) => {
        switch (grado.toLowerCase()) {
            case 'n/a': case 'normal': return 'success';
            case 'leve': case 'inicial': return 'warning';
            case 'moderado': case 'establecida': return 'error';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getCorrelacionColor = (correlacion: string) => {
        switch (correlacion.toLowerCase()) {
            case 'positiva': return 'success';
            case 'negativa': return 'info';
            case 'indeterminada': return 'warning';
            default: return 'default';
        }
    };

    const getPrioridadColor = (prioridad: string) => {
        switch (prioridad.toLowerCase()) {
            case 'baja': return 'success';
            case 'media': return 'warning';
            case 'alta': return 'error';
            default: return 'default';
        }
    };

    const getPresenteColor = (presente: boolean) => {
        return presente ? 'error' : 'success';
    };

    const getConcordanciaColor = (concordancia: number) => {
        if (concordancia >= 90) return 'success';
        if (concordancia >= 75) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Interpretación y Hallazgos Radiológicos
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución de Hallazgos por Severidad
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: distribucionHallazgosData.map(item => item.normales),
                                        label: 'Normales',
                                        color: '#4caf50'
                                    },
                                    {
                                        data: distribucionHallazgosData.map(item => item.leves),
                                        label: 'Leves',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: distribucionHallazgosData.map(item => item.moderados),
                                        label: 'Moderados',
                                        color: '#f44336'
                                    }
                                ]}
                                xAxis={[{
                                    data: distribucionHallazgosData.map(item => item.categoria),
                                    scaleType: 'band'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias Patológicas Temporales
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: evolucionHallazgosData.cambiosDegenerativos,
                                        label: 'Cambios Degenerativos',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: evolucionHallazgosData.alteracionesPosturales,
                                        label: 'Alteraciones Posturales',
                                        color: '#2196f3'
                                    },
                                    {
                                        data: evolucionHallazgosData.patologiaOcupacional,
                                        label: 'Patología Ocupacional',
                                        color: '#f44336'
                                    }
                                ]}
                                xAxis={[{
                                    data: evolucionHallazgosData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Interpretación de Estudios Recientes
                        </Typography>
                        {interpretacionRadiologicaData.map((estudio, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {estudio.estudio}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Typography variant="caption" color="text.secondary">
                                            {estudio.fecha}
                                        </Typography>
                                        <Chip
                                            label={estudio.conclusion}
                                            color={getConclusionColor(estudio.conclusion)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Hallazgos: {estudio.hallazgos.join(', ')}
                                </Typography>
                                <Chip
                                    label={`Seguimiento: ${estudio.seguimiento}`}
                                    color="info"
                                    size="small"
                                    variant="outlined"
                                />
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Hallazgos Patológicos Específicos
                        </Typography>
                        {hallazgosPatologicosData.map((patologia, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {patologia.patologia}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={patologia.presente ? 'PRESENTE' : 'AUSENTE'}
                                            color={getPresenteColor(!patologia.presente)}
                                            size="small"
                                        />
                                        {patologia.presente && (
                                            <Chip
                                                label={patologia.grado}
                                                color={getGradoColor(patologia.grado)}
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Categoría: {patologia.categoria} | Riesgo: {patologia.riesgo}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Correlación Clínico-Radiológica
                        </Typography>
                        {correlacionClinicaData.map((correlacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {correlacion.sintoma}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {correlacion.concordancia}%
                                        </Typography>
                                        <Chip
                                            label={correlacion.correlacion}
                                            color={getCorrelacionColor(correlacion.correlacion)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Hallazgo: {correlacion.hallazgo}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={correlacion.concordancia}
                                    color={getConcordanciaColor(correlacion.concordancia) === 'error' ? 'error' : getConcordanciaColor(correlacion.concordancia) === 'warning' ? 'warning' : 'success'}
                                    sx={{ height: 4, borderRadius: 2 }}
                                />
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Calidad de Interpretación
                        </Typography>
                        {calidadInterpretacionData.map((calidad, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {calidad.aspecto}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                        {calidad.puntuacion}%
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={calidad.puntuacion}
                                    sx={{ height: 6, borderRadius: 3, mb: 0.5, bgcolor: 'rgba(255,255,255,0.3)' }}
                                />
                                <Typography variant="caption" color="info.contrastText">
                                    {calidad.observaciones}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Clasificación OIT para Neumoconiosis
                        </Typography>
                        {clasificacionOITData.map((categoria, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {categoria.categoria} - {categoria.descripcion}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={categoria.presente ? 'SÍ' : 'NO'}
                                            color={categoria.presente ? 'warning' : 'success'}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${categoria.trabajadores}%`}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Recomendaciones de Seguimiento
                        </Typography>
                        {recomendacionesSeguimientoData.map((recomendacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {recomendacion.hallazgo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={recomendacion.prioridad}
                                            color={getPrioridadColor(recomendacion.prioridad)}
                                            size="small"
                                        />
                                        <Chip
                                            label={recomendacion.plazo}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="success.contrastText">
                                    Recomendaciones: {recomendacion.recomendaciones.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Interpretación radiológica consistente | Ausencia de patología ocupacional significativa | Seguimiento apropiado establecido
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
