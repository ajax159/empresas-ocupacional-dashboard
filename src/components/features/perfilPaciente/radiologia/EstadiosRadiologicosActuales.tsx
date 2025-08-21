import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';

const estadoRadiologicoGeneralData = {
    indiceGlobal: 82,
    clasificacion: 'Normal',
    riesgoGeneral: 'Bajo',
    cambiosOcupacionales: 'Mínimos',
    seguimiento: 'Rutinario'
};

const estudiosRealizadosData = [
    { tipo: 'Radiografía de Tórax', fecha: '2024-06-15', resultado: 'Normal', hallazgos: 'Sin alteraciones significativas' },
    { tipo: 'Tomografía Torácica', fecha: '2024-03-20', resultado: 'Normal', hallazgos: 'Parénquima pulmonar conservado' },
    { tipo: 'Radiografía Columna Lumbar', fecha: '2024-01-10', resultado: 'Alteraciones Menores', hallazgos: 'Leve espondiloartrosis L4-L5' },
    { tipo: 'Radiografía Ambas Manos', fecha: '2023-11-08', resultado: 'Normal', hallazgos: 'Articulaciones conservadas' }
];

const hallazgosRadiologicosData = [
    { categoria: 'Tórax', hallazgos: ['Parénquima normal', 'Silueta cardíaca normal'], gravedad: 'Normal', seguimiento: 'Anual' },
    { categoria: 'Columna', hallazgos: ['Leve espondiloartrosis', 'Disminución espacio L4-L5'], gravedad: 'Leve', seguimiento: 'Bianual' },
    { categoria: 'Extremidades', hallazgos: ['Sin alteraciones óseas', 'Articulaciones conservadas'], gravedad: 'Normal', seguimiento: 'Según síntomas' },
    { categoria: 'Abdomen', hallazgos: ['No evaluado en período actual'], gravedad: 'N/A', seguimiento: 'Según indicación' }
];

const distribucionEstudiosData = [
    { id: 0, value: 45, label: 'Tórax' },
    { id: 1, value: 30, label: 'Columna' },
    { id: 2, value: 15, label: 'Extremidades' },
    { id: 3, value: 10, label: 'Otros' }
];

const exposicionRadiacionData = [
    { año: '2019', estudios: 3, dosis: 2.1, tipo: 'Diagnóstica', proteccion: 'Estándar' },
    { año: '2020', estudios: 2, dosis: 1.8, tipo: 'Diagnóstica', proteccion: 'Estándar' },
    { año: '2021', estudios: 4, dosis: 3.2, tipo: 'Diagnóstica', proteccion: 'Estándar' },
    { año: '2022', estudios: 3, dosis: 2.5, tipo: 'Diagnóstica', proteccion: 'Estándar' },
    { año: '2023', estudios: 5, dosis: 4.1, tipo: 'Diagnóstica + TAC', proteccion: 'Reforzada' },
    { año: '2024', estudios: 4, dosis: 3.8, tipo: 'Diagnóstica + TAC', proteccion: 'Reforzada' }
];

const riesgosRadiologicosData = [
    { riesgo: 'Exposición Acumulativa', nivel: 'Bajo', descripcion: 'Dosis dentro de límites seguros', valor: 15 },
    { riesgo: 'Cambios Degenerativos', nivel: 'Moderado', descripcion: 'Progresión espondiloartrosis', valor: 35 },
    { riesgo: 'Patología Ocupacional', nivel: 'Bajo', descripcion: 'Sin evidencia neumoconiosis', valor: 10 },
    { riesgo: 'Efectos Secundarios', nivel: 'Mínimo', descripcion: 'No reacciones adversas', valor: 5 }
];

const controlCalidadData = [
    { aspecto: 'Calidad Técnica', puntuacion: 95, observaciones: 'Imágenes de excelente calidad' },
    { aspecto: 'Protección Radiológica', puntuacion: 92, observaciones: 'Protocolos de seguridad seguidos' },
    { aspecto: 'Información Clínica', puntuacion: 88, observaciones: 'Historia clínica completa' },
    { aspecto: 'Interpretación', puntuacion: 94, observaciones: 'Informes detallados y precisos' }
];

export default function EstadiosRadiologicosActuales() {
    const getResultadoColor = (resultado: string) => {
        switch (resultado.toLowerCase()) {
            case 'normal': return 'success';
            case 'alteraciones menores': case 'leve': return 'warning';
            case 'alteraciones moderadas': case 'moderado': return 'error';
            case 'alteraciones severas': case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getGravedadColor = (gravedad: string) => {
        switch (gravedad.toLowerCase()) {
            case 'normal': case 'n/a': return 'success';
            case 'leve': return 'warning';
            case 'moderado': case 'moderada': return 'error';
            case 'severo': case 'severa': return 'error';
            default: return 'default';
        }
    };

    const getNivelColor = (nivel: string) => {
        switch (nivel.toLowerCase()) {
            case 'mínimo': case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getPuntuacionColor = (puntuacion: number) => {
        if (puntuacion >= 90) return 'success';
        if (puntuacion >= 80) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Estudios Radiológicos Actuales
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estado Radiológico General
                        </Typography>
                        <Box sx={{ height: 120, display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={120}
                                height={120}
                                value={estadoRadiologicoGeneralData.indiceGlobal}
                                startAngle={-110}
                                endAngle={110}
                                valueMin={0}
                                valueMax={100}
                                text={({ value }) => `${value}%`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Chip
                                label={estadoRadiologicoGeneralData.clasificacion}
                                color={getResultadoColor(estadoRadiologicoGeneralData.clasificacion)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                Cambios Ocupacionales: {estadoRadiologicoGeneralData.cambiosOcupacionales}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Riesgo General: {estadoRadiologicoGeneralData.riesgoGeneral}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Seguimiento: {estadoRadiologicoGeneralData.seguimiento}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Estudios
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionEstudiosData,
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
                            Control de Calidad Radiológica
                        </Typography>
                        {controlCalidadData.map((aspecto, index) => (
                            <Box key={index} sx={{ mb: 1.5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                        {aspecto.aspecto}
                                    </Typography>
                                    <Chip
                                        label={`${aspecto.puntuacion}%`}
                                        color={getPuntuacionColor(aspecto.puntuacion)}
                                        size="small"
                                    />
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={aspecto.puntuacion}
                                    color={getPuntuacionColor(aspecto.puntuacion) === 'error' ? 'error' : getPuntuacionColor(aspecto.puntuacion) === 'warning' ? 'warning' : 'success'}
                                    sx={{ height: 4, borderRadius: 2, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                    {aspecto.observaciones}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estudios Radiológicos Recientes
                        </Typography>
                        {estudiosRealizadosData.map((estudio, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {estudio.tipo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Typography variant="caption" color="text.secondary">
                                            {estudio.fecha}
                                        </Typography>
                                        <Chip
                                            label={estudio.resultado}
                                            color={getResultadoColor(estudio.resultado)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Hallazgos: {estudio.hallazgos}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Hallazgos por Categoría Anatómica
                        </Typography>
                        {hallazgosRadiologicosData.map((categoria, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {categoria.categoria}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={categoria.gravedad}
                                            color={getGravedadColor(categoria.gravedad)}
                                            size="small"
                                        />
                                        <Chip
                                            label={categoria.seguimiento}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Hallazgos: {categoria.hallazgos.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Exposición a Radiación Acumulativa
                        </Typography>
                        {exposicionRadiacionData.map((año, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {año.año}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                            {año.estudios} estudios
                                        </Typography>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                            {año.dosis} mSv
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Tipo: {año.tipo}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Protección: {año.proteccion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación de Riesgos Radiológicos
                        </Typography>
                        {riesgosRadiologicosData.map((riesgo, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {riesgo.riesgo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {riesgo.valor}%
                                        </Typography>
                                        <Chip
                                            label={riesgo.nivel}
                                            color={getNivelColor(riesgo.nivel)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={riesgo.valor}
                                    color={getNivelColor(riesgo.nivel) === 'error' ? 'error' : getNivelColor(riesgo.nivel) === 'warning' ? 'warning' : 'success'}
                                    sx={{ height: 4, borderRadius: 2, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                    {riesgo.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Estudios radiológicos dentro de parámetros normales | Exposición a radiación controlada | Seguimiento preventivo adecuado
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
