import { Card, CardContent, Typography, Box, Grid, Chip, Alert } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const aptitudRadiologicaData = [
    { actividad: 'Trabajo con Radiación', aptitud: 'apto_condicional', restricciones: ['Dosimetría obligatoria'], observaciones: 'Apto con monitoreo continuo de exposición' },
    { actividad: 'Trabajo en Altura', aptitud: 'apto', restricciones: [], observaciones: 'Sin contraindicaciones radiológicas' },
    { actividad: 'Carga Manual', aptitud: 'apto_condicional', restricciones: ['Peso máximo 15kg'], observaciones: 'Limitación por espondiloartrosis lumbar' },
    { actividad: 'Trabajo Subterráneo', aptitud: 'apto', restricciones: [], observaciones: 'Ausencia neumoconiosis permite trabajo minero' },
    { actividad: 'Exposición Polvos', aptitud: 'apto_condicional', restricciones: ['EPP respiratorio'], observaciones: 'Protección respiratoria obligatoria' },
    { actividad: 'Trabajo Sedentario', aptitud: 'apto', restricciones: [], observaciones: 'Sin limitaciones para trabajo de oficina' }
];

const limitacionesRadiologicasData = [
    {
        limitacion: 'Espondiloartrosis Lumbar L4-L5',
        impacto: 'Limitación para carga manual pesada',
        severidad: 'Leve',
        duracion: 'Crónica - manejo continuo',
        manejo: ['Ergonomía', 'Pausas frecuentes', 'Fisioterapia']
    },
    {
        limitacion: 'Rectificación Cervical',
        impacto: 'Molestias en trabajo con computadora',
        severidad: 'Leve',
        duracion: 'Progresiva - control postural',
        manejo: ['Ergonomía estación trabajo', 'Ejercicios cervicales', 'Pausas']
    },
    {
        limitacion: 'Exposición Radiación Previa',
        impacto: 'Consideración para futuras exposiciones',
        severidad: 'Moderada',
        duracion: 'Permanente - historial acumulado',
        manejo: ['Dosimetría estricta', 'Rotación si necesario', 'Monitoreo salud']
    }
];

const adaptacionesRadiologicasData = [
    { adaptacion: 'Silla Ergonómica Lumbar', implementada: true, efectividad: 85, beneficio: 'Reduce dolor lumbar durante jornada' },
    { adaptacion: 'Monitor a Altura Adecuada', implementada: true, efectividad: 78, beneficio: 'Previene progresión cervical' },
    { adaptacion: 'Dosímetro Personal', implementada: true, efectividad: 98, beneficio: 'Control exposición radiológica' },
    { adaptacion: 'Pausas Programadas', implementada: true, efectividad: 80, beneficio: 'Alivio tensión muscular' },
    { adaptacion: 'Rotación de Actividades', implementada: false, efectividad: 0, beneficio: 'Evita sobrecarga específica' }
];

const seguimientoRadiologicoData = [
    { tipo: 'Control Radiológico Lumbar', frecuencia: 'Anual', proximo: '2025-01-15', objetivo: 'Monitoreo progresión degenerativa' },
    { tipo: 'Radiografía Tórax', frecuencia: 'Anual', proximo: '2025-06-15', objetivo: 'Seguimiento salud pulmonar ocupacional' },
    { tipo: 'Dosimetría Personal', frecuencia: 'Mensual', proximo: '2024-09-30', objetivo: 'Control exposición radiológica' },
    { tipo: 'Evaluación Postural', frecuencia: 'Semestral', proximo: '2024-12-20', objetivo: 'Prevención progresión cervical' }
];

const planTratamientoRadiologicoData = {
    objetivo: 'Control progresión cambios degenerativos y mantenimiento aptitud laboral',
    duracion: '24 meses',
    fases: [
        { fase: 'Control Síntomas', duracion: '6 meses', objetivos: 'Manejo dolor y limitación funcional' },
        { fase: 'Estabilización', duracion: '12 meses', objetivos: 'Prevención progresión degenerativa' },
        { fase: 'Mantenimiento', duracion: '6 meses', objetivos: 'Seguimiento y adaptaciones laborales' }
    ],
    metas: [
        'Mantener capacidad laboral actual',
        'Prevenir progresión espondiloartrosis',
        'Control efectivo exposición radiológica',
        'Adaptaciones ergonómicas optimizadas'
    ]
};

const riesgosRadiologicosFuturosData = [
    { riesgo: 'Progresión Espondiloartrosis', probabilidad: 40, factores: ['Edad', 'Actividad laboral', 'Factores genéticos'] },
    { riesgo: 'Aparición Neumoconiosis', probabilidad: 10, factores: ['Exposición polvos', 'Duración exposición', 'Protección insuficiente'] },
    { riesgo: 'Efectos Radiación Acumulativa', probabilidad: 15, factores: ['Exposición continuada', 'Dosis acumulada', 'Susceptibilidad individual'] },
    { riesgo: 'Alteraciones Posturales', probabilidad: 35, factores: ['Ergonomía inadecuada', 'Tiempo trabajo', 'Falta ejercicio'] }
];

const capacidadLaboralRadiologicaData = [
    { actividad: 'Trabajo con Pantallas', capacidad: 95, limitaciones: 'Ergonomía cervical', adaptaciones: ['Monitor ajustable'] },
    { actividad: 'Manipulación Cargas', capacidad: 75, limitaciones: 'Peso máximo 15kg', adaptaciones: ['Ayudas mecánicas'] },
    { actividad: 'Trabajo con Radiación', capacidad: 90, limitaciones: 'Monitoreo continuo', adaptaciones: ['Dosimetría personal'] },
    { actividad: 'Trabajo Prolongado de Pie', capacidad: 80, limitaciones: 'Pausas frecuentes', adaptaciones: ['Superficie antiestés'] },
    { actividad: 'Actividades Administrativas', capacidad: 98, limitaciones: 'Ninguna significativa', adaptaciones: ['Ergonomía básica'] }
];

const controlExposicionData = [
    { parametro: 'Dosis Anual Actual', valor: '3.8 mSv', limite: '20 mSv', porcentaje: 19, estado: 'Seguro' },
    { parametro: 'Dosis Acumulada 5 años', valor: '17.5 mSv', limite: '100 mSv', porcentaje: 18, estado: 'Muy Seguro' },
    { parametro: 'Exposición Mensual Promedio', valor: '0.3 mSv', limite: '1.7 mSv', porcentaje: 18, estado: 'Muy Seguro' },
    { parametro: 'Exposición Diaria Máxima', valor: '0.15 mSv', limite: '0.1 mSv', porcentaje: 150, estado: 'Ocasionalmente Alto' }
];

export default function AptitudRadiologicaLimitaciones() {
    const aptitudLabels = aptitudRadiologicaData.map(item => item.actividad);
    const aptitudValues = aptitudRadiologicaData.map(item => {
        switch (item.aptitud) {
            case 'apto': return 100;
            case 'apto_condicional': return 80;
            case 'no_apto_temporal': return 40;
            case 'no_apto': return 0;
            default: return 50;
        }
    });

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

    const getSeveridadColor = (severidad: string) => {
        switch (severidad.toLowerCase()) {
            case 'leve': return 'success';
            case 'moderada': return 'warning';
            case 'severa': return 'error';
            default: return 'default';
        }
    };

    const getImplementadaColor = (implementada: boolean) => {
        return implementada ? 'success' : 'error';
    };

    const getProbabilidadColor = (probabilidad: number) => {
        if (probabilidad <= 20) return 'success';
        if (probabilidad <= 40) return 'warning';
        return 'error';
    };

    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'muy seguro': case 'seguro': return 'success';
            case 'ocasionalmente alto': return 'warning';
            case 'alto': case 'peligroso': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Aptitud Radiológica y Limitaciones
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aptitud por Tipo de Actividad Laboral
                        </Typography>
                        {aptitudRadiologicaData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.actividad}
                                    </Typography>
                                    <Chip
                                        label={getAptitudText(item.aptitud)}
                                        color={getAptitudColor(item.aptitud)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    {item.observaciones}
                                </Typography>
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
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aptitud por Actividad (% Capacidad)
                        </Typography>
                        <Box sx={{ height: 200, mb: 2 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: aptitudValues,
                                        label: 'Aptitud (%)',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: aptitudLabels,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 100 }]}
                            />
                        </Box>

                        <Typography variant="subtitle2" gutterBottom>
                            Control de Exposición Radiológica
                        </Typography>
                        {controlExposicionData.map((control, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', fontSize: '0.8rem' }}>
                                        {control.parametro}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {control.valor}
                                        </Typography>
                                        <Chip
                                            label={control.estado}
                                            color={getEstadoColor(control.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Límite: {control.limite} | Porcentaje: {control.porcentaje}%
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Limitaciones Radiológicas Específicas
                        </Typography>
                        {limitacionesRadiologicasData.map((limitacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {limitacion.limitacion}
                                    </Typography>
                                    <Chip
                                        label={limitacion.severidad.toUpperCase()}
                                        color={getSeveridadColor(limitacion.severidad)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Impacto: {limitacion.impacto}
                                </Typography>
                                <Typography variant="caption" color="primary.main" sx={{ display: 'block', mb: 0.5 }}>
                                    Duración: {limitacion.duracion}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Manejo: {limitacion.manejo.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Adaptaciones Radiológicas Laborales
                        </Typography>
                        {adaptacionesRadiologicasData.map((adaptacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {adaptacion.adaptacion}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={adaptacion.implementada ? 'ACTIVA' : 'PENDIENTE'}
                                            color={getImplementadaColor(adaptacion.implementada)}
                                            size="small"
                                        />
                                        {adaptacion.implementada && (
                                            <Chip
                                                label={`${adaptacion.efectividad}%`}
                                                color="info"
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {adaptacion.beneficio}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Seguimiento Radiológico Programado
                        </Typography>
                        {seguimientoRadiologicoData.map((seguimiento, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {seguimiento.tipo}
                                    </Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                        {seguimiento.frecuencia}
                                    </Typography>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', color: 'info.contrastText', mb: 0.5 }}>
                                    Próxima: {seguimiento.proximo}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Objetivo: {seguimiento.objetivo}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Riesgos Radiológicos Futuros
                        </Typography>
                        {riesgosRadiologicosFuturosData.map((riesgo, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', fontSize: '0.8rem' }}>
                                        {riesgo.riesgo}
                                    </Typography>
                                    <Chip
                                        label={`${riesgo.probabilidad}%`}
                                        color={getProbabilidadColor(riesgo.probabilidad)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Factores: {riesgo.factores.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Plan de Tratamiento Radiológico
                        </Typography>
                        <Box sx={{ mb: 2, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'success.contrastText' }}>
                                {planTratamientoRadiologicoData.objetivo}
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'success.contrastText' }}>
                                Duración: {planTratamientoRadiologicoData.duracion}
                            </Typography>
                            {planTratamientoRadiologicoData.fases.map((fase, index) => (
                                <Box key={index} sx={{ mb: 0.5 }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>
                                        {fase.fase} ({fase.duracion}):
                                    </Typography>
                                    <Typography variant="caption" sx={{ ml: 0.5, color: 'success.contrastText' }}>
                                        {fase.objetivos}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography variant="subtitle2" gutterBottom>
                            Metas de Tratamiento
                        </Typography>
                        <Box sx={{ p: 1.5, bgcolor: 'warning.light', borderRadius: 1 }}>
                            {planTratamientoRadiologicoData.metas.map((meta, index) => (
                                <Typography key={index} variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                    • {meta}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad Laboral por Actividad
                        </Typography>
                        {capacidadLaboralRadiologicaData.map((actividad, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {actividad.actividad}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                            {actividad.capacidad}%
                                        </Typography>
                                        <Chip
                                            label={actividad.capacidad >= 90 ? 'ÓPTIMA' : actividad.capacidad >= 75 ? 'BUENA' : 'LIMITADA'}
                                            color={actividad.capacidad >= 90 ? 'success' : actividad.capacidad >= 75 ? 'warning' : 'error'}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Limitaciones: {actividad.limitaciones}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', color: 'info.contrastText' }}>
                                    Adaptaciones: {actividad.adaptaciones.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Alert severity="info" sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                        Recomendación de Seguimiento Integral
                    </Typography>
                    <Typography variant="caption">
                        Trabajador con aptitud radiológica favorable con adaptaciones menores | Control exposición radiológica efectivo | Limitaciones degenerativas manejables
                    </Typography>
                </Alert>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Aptitud radiológica compatible con actividades laborales | Exposición dentro de límites seguros | Pronóstico laboral favorable
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
