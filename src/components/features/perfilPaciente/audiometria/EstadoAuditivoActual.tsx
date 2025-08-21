import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';

const estadoAuditivoGeneralData = {
    indiceGlobal: 75,
    clasificacion: 'Hipoacusia Leve',
    riesgoOcupacional: 'Moderado',
    umbralPromedio: 28,
    discriminacion: 92
};



const clasificacionAuditivaData = [
    { frecuencia: '125 Hz', od: 15, oi: 10, interpretacion: 'Normal', riesgo: 'Bajo' },
    { frecuencia: '250 Hz', od: 20, oi: 15, interpretacion: 'Normal', riesgo: 'Bajo' },
    { frecuencia: '500 Hz', od: 25, oi: 20, interpretacion: 'Leve', riesgo: 'Moderado' },
    { frecuencia: '1000 Hz', od: 30, oi: 25, interpretacion: 'Leve', riesgo: 'Moderado' },
    { frecuencia: '2000 Hz', od: 35, oi: 30, interpretacion: 'Leve', riesgo: 'Moderado' },
    { frecuencia: '4000 Hz', od: 45, oi: 40, interpretacion: 'Moderada', riesgo: 'Alto' },
    { frecuencia: '8000 Hz', od: 55, oi: 50, interpretacion: 'Moderada', riesgo: 'Alto' }
];

const distribucionPerdidaData = [
    { id: 0, value: 30, label: 'Normal' },
    { id: 1, value: 45, label: 'Leve' },
    { id: 2, value: 20, label: 'Moderada' },
    { id: 3, value: 5, label: 'Severa' }
];

const exposicionRuidoLaboralData = [
    { fuente: 'Maquinaria Industrial', nivel: 95, duracion: '8 horas', proteccion: 'Orejeras', reduccion: 25 },
    { fuente: 'Herramientas Neumáticas', nivel: 88, duracion: '4 horas', proteccion: 'Tapones', reduccion: 20 },
    { fuente: 'Ambiente General', nivel: 75, duracion: 'Continua', proteccion: 'Ninguna', reduccion: 0 },
    { fuente: 'Vehículos Pesados', nivel: 82, duracion: '2 horas', proteccion: 'Orejeras', reduccion: 25 }
];

const factoresRiesgoAuditivoData = [
    { factor: 'Exposición Ruido Ocupacional', presente: true, nivel: 'Alto', descripcion: 'Exposición diaria >85 dB por 8 horas' },
    { factor: 'Edad (Presbiacusia)', presente: true, nivel: 'Moderado', descripcion: 'Deterioro relacionado con edad' },
    { factor: 'Antecedentes Familiares', presente: false, nivel: 'Bajo', descripcion: 'Sin historia familiar significativa' },
    { factor: 'Medicamentos Ototóxicos', presente: false, nivel: 'Bajo', descripcion: 'No uso de medicamentos ototóxicos' },
    { factor: 'Trauma Acústico', presente: true, nivel: 'Moderado', descripcion: 'Episodio previo de trauma acústico' }
];

const evaluacionComunicacionData = [
    { aspecto: 'Comprensión Conversación', puntuacion: 85, observaciones: 'Buena en ambiente silencioso' },
    { aspecto: 'Comunicación Ruido', puntuacion: 65, observaciones: 'Dificultad moderada con ruido de fondo' },
    { aspecto: 'Localización Sonidos', puntuacion: 78, observaciones: 'Capacidad preservada parcialmente' },
    { aspecto: 'Discriminación Palabras', puntuacion: 92, observaciones: 'Excelente discriminación verbal' }
];

const proteccionAuditivaData = [
    { equipo: 'Orejeras Industriales', uso: 'Diario', reduccion: 25, cumplimiento: 95, eficacia: 'Alta' },
    { equipo: 'Tapones Espuma', uso: 'Ocasional', reduccion: 20, cumplimiento: 70, eficacia: 'Media' },
    { equipo: 'Tapones Silicona', uso: 'Reserva', reduccion: 18, cumplimiento: 60, eficacia: 'Media' },
    { equipo: 'Protección Combinada', uso: 'Ruido Extremo', reduccion: 35, cumplimiento: 100, eficacia: 'Muy Alta' }
];

export default function EstadoAuditivoActual() {
    const getInterpretacionColor = (interpretacion: string) => {
        switch (interpretacion.toLowerCase()) {
            case 'normal': return 'success';
            case 'leve': return 'warning';
            case 'moderada': return 'error';
            case 'severa': case 'profunda': return 'error';
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

    const getNivelColor = (nivel: string) => {
        switch (nivel.toLowerCase()) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getPresenteColor = (presente: boolean) => {
        return presente ? 'error' : 'success';
    };

    const getPuntuacionColor = (puntuacion: number) => {
        if (puntuacion >= 85) return 'success';
        if (puntuacion >= 70) return 'warning';
        return 'error';
    };

    const getEficaciaColor = (eficacia: string) => {
        switch (eficacia.toLowerCase()) {
            case 'muy alta': case 'alta': return 'success';
            case 'media': return 'warning';
            case 'baja': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Estado Auditivo Actual
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Índice de Salud Auditiva Global
                        </Typography>
                        <Box sx={{ height: 120, display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={120}
                                height={120}
                                value={estadoAuditivoGeneralData.indiceGlobal}
                                startAngle={-110}
                                endAngle={110}
                                valueMin={0}
                                valueMax={100}
                                text={({ value }) => `${value}%`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Chip
                                label={estadoAuditivoGeneralData.clasificacion}
                                color={getInterpretacionColor(estadoAuditivoGeneralData.clasificacion)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                Umbral Promedio: {estadoAuditivoGeneralData.umbralPromedio} dB
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Discriminación: {estadoAuditivoGeneralData.discriminacion}%
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Riesgo Ocupacional: {estadoAuditivoGeneralData.riesgoOcupacional}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Pérdida Auditiva
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionPerdidaData,
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
                            Evaluación de Comunicación
                        </Typography>
                        {evaluacionComunicacionData.map((aspecto, index) => (
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
                            Clasificación Auditiva por Frecuencia
                        </Typography>
                        {clasificacionAuditivaData.map((frecuencia, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {frecuencia.frecuencia}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={frecuencia.interpretacion}
                                            color={getInterpretacionColor(frecuencia.interpretacion)}
                                            size="small"
                                        />
                                        <Chip
                                            label={frecuencia.riesgo}
                                            color={getRiesgoColor(frecuencia.riesgo)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    OD: {frecuencia.od} dB | OI: {frecuencia.oi} dB
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores de Riesgo Auditivo
                        </Typography>
                        {factoresRiesgoAuditivoData.map((factor, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {factor.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={factor.presente ? 'PRESENTE' : 'AUSENTE'}
                                            color={getPresenteColor(!factor.presente)}
                                            size="small"
                                        />
                                        <Chip
                                            label={factor.nivel}
                                            color={getNivelColor(factor.nivel)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {factor.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Exposición a Ruido Laboral
                        </Typography>
                        {exposicionRuidoLaboralData.map((exposicion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {exposicion.fuente}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                            {exposicion.nivel} dB
                                        </Typography>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                            -{exposicion.reduccion} dB
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Duración: {exposicion.duracion}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Protección: {exposicion.proteccion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Protección Auditiva Utilizada
                        </Typography>
                        {proteccionAuditivaData.map((proteccion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {proteccion.equipo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={proteccion.eficacia}
                                            color={getEficaciaColor(proteccion.eficacia)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${proteccion.cumplimiento}%`}
                                            color={proteccion.cumplimiento >= 90 ? 'success' : proteccion.cumplimiento >= 70 ? 'warning' : 'error'}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    Uso: {proteccion.uso} | Reducción: -{proteccion.reduccion} dB
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={proteccion.cumplimiento}
                                    sx={{ height: 4, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.3)' }}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Hipoacusia ocupacional leve detectada | Protección auditiva implementada | Seguimiento audiométrico requerido
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
