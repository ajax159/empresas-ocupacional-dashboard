import { Card, CardContent, Typography, Box, Grid, Chip, Alert } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const aptitudLaboralOsteomuscularData = [
    { actividad: 'Trabajo Oficina', aptitud: 'apto', restricciones: ['Pausas cada 2h'], limitaciones: 'Postural' },
    { actividad: 'Manejo Manual Cargas', aptitud: 'no_apto', restricciones: ['Prohibido >10kg'], limitaciones: 'Lumbar severa' },
    { actividad: 'Trabajo en Altura', aptitud: 'apto_condicional', restricciones: ['Supervisor presente'], limitaciones: 'Cervical leve' },
    { actividad: 'Trabajo Repetitivo', aptitud: 'no_apto_temporal', restricciones: ['Suspendido 6 meses'], limitaciones: 'Extremidades' },
    { actividad: 'Conducción Vehículos', aptitud: 'apto_condicional', restricciones: ['Máximo 4h continuas'], limitaciones: 'Lumbar' }
];

const restriccionesEspecificasData = [
    {
        tipo: 'Levantamiento',
        limite: '10 kg máximo',
        duracion: 'Permanente',
        justificacion: 'Lumbalgia crónica con limitación funcional'
    },
    {
        tipo: 'Flexión Repetida',
        limite: 'Máximo 20 veces/hora',
        duracion: 'Temporal - 6 meses',
        justificacion: 'Dolor lumbar con movimientos de flexión'
    },
    {
        tipo: 'Trabajo Nocturno',
        limite: 'Contraindicado',
        duracion: 'Temporal - 3 meses',
        justificacion: 'Tratamiento farmacológico activo'
    },
    {
        tipo: 'Vibración',
        limite: '<2.5 m/s² por 8h',
        duracion: 'Permanente',
        justificacion: 'Riesgo agravamiento cervical'
    }
];

const adaptacionesPuestoData = [
    { adaptacion: 'Silla Ergonómica', implementada: true, efectividad: 75, costo: 'bajo' },
    { adaptacion: 'Mesa Regulable', implementada: true, efectividad: 70, costo: 'medio' },
    { adaptacion: 'Monitor a Nivel Ojos', implementada: true, efectividad: 65, costo: 'bajo' },
    { adaptacion: 'Reposapiés', implementada: true, efectividad: 60, costo: 'bajo' },
    { adaptacion: 'Ayudas Mecánicas', implementada: false, efectividad: 0, costo: 'alto' }
];

const seguimientoMedicoData = [
    { tipo: 'Evaluación Médica', frecuencia: 'Mensual', proximo: '2024-09-15', responsable: 'Médico Ocupacional' },
    { tipo: 'Fisioterapia', frecuencia: 'Semanal', proximo: '2024-08-22', responsable: 'Fisioterapeuta' },
    { tipo: 'Ergonomía', frecuencia: 'Trimestral', proximo: '2024-11-20', responsable: 'Ergónomo' },
    { tipo: 'Psicología', frecuencia: 'Quincenal', proximo: '2024-09-05', responsable: 'Psicólogo Ocupacional' }
];

const capacidadTrabajoData = [
    { categoria: 'Físico Ligero', capacidad: 85, recomendado: true },
    { categoria: 'Físico Moderado', capacidad: 45, recomendado: false },
    { categoria: 'Físico Pesado', capacidad: 15, recomendado: false },
    { categoria: 'Trabajo Sedentario', capacidad: 90, recomendado: true },
    { categoria: 'Trabajo de Precisión', capacidad: 70, recomendado: true }
];

const planRehabilitacionData = {
    objetivo: 'Mejorar capacidad funcional y reducir dolor',
    duracion: '6 meses',
    fases: [
        { fase: 'Aguda', duracion: '4 semanas', objetivos: 'Control dolor y inflamación' },
        { fase: 'Subaguda', duracion: '8 semanas', objetivos: 'Recuperación movilidad' },
        { fase: 'Crónica', duracion: '12 semanas', objetivos: 'Fortalecimiento y acondicionamiento' }
    ],
    metas: [
        'Reducción dolor EVA <4',
        'Incremento movilidad lumbar 20%',
        'Retorno actividades básicas trabajo',
        'Capacitación ergonomía específica'
    ]
};

export default function AptitudLaboralRestriccionesOsteomuscular() {
    const categorias = capacidadTrabajoData.map(item => item.categoria);
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

    const getDuracionColor = (duracion: string) => {
        if (duracion.includes('Permanente')) return 'error';
        if (duracion.includes('6 meses')) return 'warning';
        return 'info';
    };

    const getImplementadaColor = (implementada: boolean) => {
        return implementada ? 'success' : 'error';
    };

    const getCostoColor = (costo: string) => {
        switch (costo) {
            case 'bajo': return 'success';
            case 'medio': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getRecomendadoColor = (recomendado: boolean) => {
        return recomendado ? 'success' : 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Aptitud Laboral y Restricciones Osteomusculares
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aptitud por Tipo de Actividad
                        </Typography>
                        {aptitudLaboralOsteomuscularData.map((item, index) => (
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
                                    Limitación: {item.limitaciones}
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
                            Capacidad por Tipo de Trabajo
                        </Typography>
                        <Box sx={{ height: 180, mb: 2 }}>
                            <BarChart
                                width={350}
                                height={180}
                                series={[
                                    {
                                        data: capacidades,
                                        label: 'Capacidad (%)',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: categorias,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 100 }]}
                            />
                        </Box>
                        {capacidadTrabajoData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'medium' }}>
                                        {item.categoria}
                                    </Typography>
                                    <Chip
                                        label={item.recomendado ? 'RECOMENDADO' : 'NO RECOMENDADO'}
                                        color={getRecomendadoColor(item.recomendado)}
                                        size="small"
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Restricciones Específicas
                        </Typography>
                        {restriccionesEspecificasData.map((restriccion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {restriccion.tipo}
                                    </Typography>
                                    <Chip
                                        label={restriccion.duracion.split(' ')[0].toUpperCase()}
                                        color={getDuracionColor(restriccion.duracion)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Límite: {restriccion.limite}
                                </Typography>
                                <Typography variant="caption" color="primary.main">
                                    {restriccion.justificacion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Adaptaciones del Puesto
                        </Typography>
                        {adaptacionesPuestoData.map((adaptacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {adaptacion.adaptacion}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={adaptacion.implementada ? 'IMPLEMENTADA' : 'PENDIENTE'}
                                            color={getImplementadaColor(adaptacion.implementada)}
                                            size="small"
                                        />
                                        <Chip
                                            label={adaptacion.costo.toUpperCase()}
                                            color={getCostoColor(adaptacion.costo)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                {adaptacion.implementada && (
                                    <Typography variant="caption" color="text.secondary">
                                        Efectividad: {adaptacion.efectividad}%
                                    </Typography>
                                )}
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Seguimiento Médico Programado
                        </Typography>
                        {seguimientoMedicoData.map((seguimiento, index) => (
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
                                    Próxima cita: {seguimiento.proximo}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Responsable: {seguimiento.responsable}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Plan de Rehabilitación
                        </Typography>
                        <Box sx={{ mb: 2, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'success.contrastText' }}>
                                {planRehabilitacionData.objetivo}
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'success.contrastText' }}>
                                Duración total: {planRehabilitacionData.duracion}
                            </Typography>
                            {planRehabilitacionData.fases.map((fase, index) => (
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
                            {planRehabilitacionData.metas.map((meta, index) => (
                                <Typography key={index} variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                    • {meta}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Alert severity="warning" sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                        Evaluación de Reubicación Laboral
                    </Typography>
                    <Typography variant="caption">
                        Considerando limitaciones funcionales actuales, se recomienda evaluación para reubicación en puesto con menores demandas físicas | Seguimiento médico estrecho durante proceso de adaptación
                    </Typography>
                </Alert>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Trabajador con múltiples restricciones osteomusculares | Plan integral de rehabilitación y adaptación laboral en curso
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
