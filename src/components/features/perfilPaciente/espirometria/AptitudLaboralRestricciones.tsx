import { Card, CardContent, Typography, Box, Grid, Chip, Alert } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const aptitudLaboralData = [
    { categoria: 'Trabajo en Altura', aptitud: 'apto', restricciones: [], observaciones: 'Sin limitaciones' },
    { categoria: 'Espacios Confinados', aptitud: 'apto_condicional', restricciones: ['Control semestral'], observaciones: 'Vigilancia por exposición química' },
    { categoria: 'Manejo de Químicos', aptitud: 'apto_condicional', restricciones: ['EPP obligatorio', 'Ventilación adecuada'], observaciones: 'Uso permanente de protección respiratoria' },
    { categoria: 'Trabajo Físico Pesado', aptitud: 'apto', restricciones: [], observaciones: 'Capacidad pulmonar adecuada' }
];

const restriccionesLaboralesData = [
    { tipo: 'Exposición', detalle: 'Exposición a concentraciones >50% LPP de sílice', nivel: 'moderado', duracion: 'Temporal - 6 meses' },
    { tipo: 'Actividad', detalle: 'Trabajo en áreas sin ventilación mecánica', nivel: 'alto', duracion: 'Permanente hasta mejora infraestructura' },
    { tipo: 'Horarios', detalle: 'Jornadas >10 horas en ambientes polvorientos', nivel: 'bajo', duracion: 'Temporal - revisión en 3 meses' }
];

const recomendacionesData = [
    { categoria: 'Protección Personal', items: ['Respirador N95 mínimo', 'Cambio de filtros cada 8 horas', 'Entrenamiento en uso correcto'] },
    { categoria: 'Vigilancia Médica', items: ['Espirometría cada 6 meses', 'Evaluación síntomas respiratorios', 'Rx tórax anual'] },
    { categoria: 'Medidas Preventivas', items: ['Rotación de puestos', 'Pausas en ambientes limpios', 'Hidratación adecuada'] }
];

const capacidadTrabajoData = [
    { puesto: 'Operador Actual', capacidad: 95, limitaciones: 'Ninguna' },
    { puesto: 'Supervisor de Área', capacidad: 90, limitaciones: 'Control exposición' },
    { puesto: 'Trabajo en Altura', capacidad: 92, limitaciones: 'Ninguna' },
    { puesto: 'Mantenimiento', capacidad: 85, limitaciones: 'EPP especializado' }
];

const seguimientoEspirometricoData = [
    { parametro: 'FVC', frecuencia: 'Semestral', objetivo: 'Mantener >90% predicho', estado: 'cumpliendo' },
    { parametro: 'FEV1', frecuencia: 'Semestral', objetivo: 'Mantener >90% predicho', estado: 'cumpliendo' },
    { parametro: 'FEV1/FVC', frecuencia: 'Semestral', objetivo: 'Mantener >70%', estado: 'cumpliendo' },
    { parametro: 'PEF', frecuencia: 'Semestral', objetivo: 'Variabilidad <20%', estado: 'cumpliendo' }
];

export default function AptitudLaboralRestricciones() {
    const puestos = capacidadTrabajoData.map(item => item.puesto);
    const capacidades = capacidadTrabajoData.map(item => item.capacidad);

    const getAptitudColor = (aptitud: string) => {
        switch (aptitud) {
            case 'apto': return 'success';
            case 'apto_condicional': return 'warning';
            case 'no_apto': return 'error';
            case 'no_apto_temporal': return 'info';
            default: return 'default';
        }
    };

    const getAptitudText = (aptitud: string) => {
        switch (aptitud) {
            case 'apto': return 'APTO';
            case 'apto_condicional': return 'APTO CONDICIONAL';
            case 'no_apto': return 'NO APTO';
            case 'no_apto_temporal': return 'NO APTO TEMPORAL';
            default: return aptitud.toUpperCase();
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

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'cumpliendo': return 'success';
            case 'vigilancia': return 'warning';
            case 'incumpliendo': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Aptitud Laboral y Restricciones
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aptitud por Categoría Laboral
                        </Typography>
                        {aptitudLaboralData.map((item, index) => (
                            <Box key={index} sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.categoria}
                                    </Typography>
                                    <Chip
                                        label={getAptitudText(item.aptitud)}
                                        color={getAptitudColor(item.aptitud)}
                                        size="small"
                                    />
                                </Box>
                                {item.restricciones.length > 0 && (
                                    <Box sx={{ mb: 1 }}>
                                        {item.restricciones.map((restriccion, idx) => (
                                            <Chip
                                                key={idx}
                                                label={restriccion}
                                                color="warning"
                                                size="small"
                                                variant="outlined"
                                                sx={{ mr: 0.5, mb: 0.5 }}
                                            />
                                        ))}
                                    </Box>
                                )}
                                <Typography variant="caption" color="text.secondary">
                                    {item.observaciones}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad por Puesto de Trabajo
                        </Typography>
                        <Box sx={{ height: 180, mb: 2 }}>
                            <BarChart
                                width={300}
                                height={180}
                                series={[
                                    {
                                        data: capacidades,
                                        label: 'Capacidad (%)',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: puestos,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 70, left: 30, right: 10 }}
                            />
                        </Box>
                        {capacidadTrabajoData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'medium' }}>
                                        {item.puesto}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {item.limitaciones}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Restricciones Laborales Específicas
                        </Typography>
                        {restriccionesLaboralesData.map((restriccion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {restriccion.tipo}
                                    </Typography>
                                    <Chip
                                        label={restriccion.nivel.toUpperCase()}
                                        color={getNivelColor(restriccion.nivel)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    {restriccion.detalle}
                                </Typography>
                                <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'primary.main' }}>
                                    {restriccion.duracion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Seguimiento Espirométrico
                        </Typography>
                        {seguimientoEspirometricoData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.parametro}
                                    </Typography>
                                    <Chip
                                        label={item.estado.toUpperCase()}
                                        color={getEstadoColor(item.estado)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Frecuencia: {item.frecuencia}
                                </Typography>
                                <Typography variant="caption" color="primary.main">
                                    Objetivo: {item.objetivo}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Recomendaciones Específicas
                    </Typography>
                    <Grid container spacing={2}>
                        {recomendacionesData.map((categoria, index) => (
                            <Grid key={index} size={4}>
                                <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'info.contrastText' }}>
                                        {categoria.categoria}
                                    </Typography>
                                    {categoria.items.map((item, idx) => (
                                        <Typography key={idx} variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                            • {item}
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Alert severity="info" sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                        Próxima Evaluación Programada
                    </Typography>
                    <Typography variant="caption">
                        Espirometría de control en 6 meses (Enero 2025) • Evaluación de síntomas respiratorios en 3 meses • Revisión de restricciones laborales en 6 meses
                    </Typography>
                </Alert>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Trabajador bajo vigilancia respiratoria | Cumplimiento estricto de medidas preventivas requerido
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
