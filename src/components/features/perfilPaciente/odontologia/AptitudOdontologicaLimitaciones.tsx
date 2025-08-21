import { Card, CardContent, Typography, Box, Grid, Chip, Alert } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const aptitudOdontologicaData = [
    { actividad: 'Trabajo de Oficina', aptitud: 'apto', restricciones: [], observaciones: 'Sin limitaciones orales para trabajo sedentario' },
    { actividad: 'Trabajo con Mascarilla', aptitud: 'apto_condicional', restricciones: ['Pausas hidratación'], observaciones: 'Requiere hidratación frecuente por respiración bucal' },
    { actividad: 'Exposición Química', aptitud: 'apto_condicional', restricciones: ['EPP específico'], observaciones: 'Protección adicional por sensibilidad dental' },
    { actividad: 'Comunicación Intensiva', aptitud: 'apto', restricciones: [], observaciones: 'Fonación normal sin impedimentos' },
    { actividad: 'Trabajo Nocturno', aptitud: 'apto_condicional', restricciones: ['Higiene nocturna'], observaciones: 'Control xerostomía nocturna' },
    { actividad: 'Manejo Alimentos', aptitud: 'apto', restricciones: [], observaciones: 'Higiene oral adecuada para manipulación' }
];

const limitacionesOdontologicasData = [
    {
        limitacion: 'Sensibilidad Dental Moderada',
        impacto: 'Molestias con cambios temperatura',
        duracion: 'Temporal - 3 meses',
        manejo: ['Pasta desensibilizante', 'Evitar extremos temperatura'],
        severidad: 'leve'
    },
    {
        limitacion: 'Bruxismo Nocturno',
        impacto: 'Desgaste dental y tensión muscular',
        duracion: 'Crónico - manejo continuo',
        manejo: ['Placa oclusal nocturna', 'Relajación muscular'],
        severidad: 'moderada'
    },
    {
        limitacion: 'Xerostomía Leve',
        impacto: 'Riesgo aumentado caries y halitosis',
        duracion: 'Temporal - 6 meses',
        manejo: ['Hidratación frecuente', 'Saliva artificial'],
        severidad: 'leve'
    }
];

const adaptacionesOdontologicasData = [
    { adaptacion: 'Pausas para Hidratación', implementada: true, efectividad: 90, beneficio: 'Previene xerostomía laboral' },
    { adaptacion: 'EPP Oral Específico', implementada: true, efectividad: 85, beneficio: 'Protección contra exposiciones' },
    { adaptacion: 'Horarios Flexibles Citas', implementada: true, efectividad: 95, beneficio: 'Facilita seguimiento odontológico' },
    { adaptacion: 'Área Descanso con Agua', implementada: false, efectividad: 0, beneficio: 'Mejora hidratación durante jornada' },
    { adaptacion: 'Kit Higiene Laboral', implementada: true, efectividad: 88, beneficio: 'Mantiene higiene durante trabajo' }
];

const seguimientoOdontologicoData = [
    { tipo: 'Control Rutinario', frecuencia: 'Semestral', proximo: '2024-12-15', objetivo: 'Mantenimiento salud oral' },
    { tipo: 'Profilaxis Dental', frecuencia: 'Semestral', proximo: '2024-12-15', objetivo: 'Prevención enfermedad periodontal' },
    { tipo: 'Radiografías Control', frecuencia: 'Anual', proximo: '2025-03-20', objetivo: 'Detección temprana problemas' },
    { tipo: 'Evaluación Bruxismo', frecuencia: 'Trimestral', proximo: '2024-11-10', objetivo: 'Ajuste placa oclusal' },
    { tipo: 'Fluorización', frecuencia: 'Semestral', proximo: '2024-12-15', objetivo: 'Prevención caries' }
];

const planTratamientoOdontologicoData = {
    objetivo: 'Mantenimiento óptimo salud oral y prevención complicaciones',
    duracion: '12 meses',
    fases: [
        { fase: 'Mantenimiento', duracion: '6 meses', objetivos: 'Control rutinario y profilaxis' },
        { fase: 'Prevención', duracion: '6 meses', objetivos: 'Medidas preventivas específicas' }
    ],
    metas: [
        'Mantener índices de salud oral actuales',
        'Prevenir progresión bruxismo',
        'Control efectivo sensibilidad dental',
        'Adaptaciones laborales optimizadas'
    ]
};

const riesgosOdontologicosData = [
    { riesgo: 'Progresión Bruxismo', probabilidad: 30, factores: ['Estrés laboral', 'Tensión muscular'] },
    { riesgo: 'Enfermedad Periodontal', probabilidad: 15, factores: ['Higiene insuficiente', 'Factores sistémicos'] },
    { riesgo: 'Caries por Xerostomía', probabilidad: 20, factores: ['Medicamentos', 'Ambiente laboral seco'] },
    { riesgo: 'Trauma Dental Laboral', probabilidad: 10, factores: ['Exposición riesgos', 'Falta EPP'] }
];

const rendimientoLaboralOralData = [
    { aspecto: 'Comunicación Verbal', impacto: 5, descripcion: 'Mínimo impacto en claridad del habla' },
    { aspecto: 'Concentración', impacto: 15, descripcion: 'Ocasionales molestias por sensibilidad' },
    { aspecto: 'Productividad General', impacto: 8, descripcion: 'Ligeras interrupciones por cuidados orales' },
    { aspecto: 'Relaciones Interpersonales', impacto: 3, descripcion: 'Sin impacto significativo' },
    { aspecto: 'Ausentismo', impacto: 5, descripcion: 'Mínimas ausencias por tratamientos' }
];

export default function AptitudOdontologicaLimitaciones() {
    const aptitudLabels = aptitudOdontologicaData.map(item => item.actividad);
    const aptitudValues = aptitudOdontologicaData.map(item => {
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
        if (probabilidad <= 15) return 'success';
        if (probabilidad <= 30) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Aptitud Odontológica y Limitaciones
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aptitud por Tipo de Actividad Laboral
                        </Typography>
                        {aptitudOdontologicaData.map((item, index) => (
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
                            Impacto en Rendimiento Laboral
                        </Typography>
                        {rendimientoLaboralOralData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', fontSize: '0.8rem' }}>
                                        {item.aspecto}
                                    </Typography>
                                    <Chip
                                        label={`${item.impacto}%`}
                                        color={item.impacto <= 5 ? 'success' : item.impacto <= 15 ? 'warning' : 'error'}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {item.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Limitaciones Odontológicas Específicas
                        </Typography>
                        {limitacionesOdontologicasData.map((limitacion, index) => (
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
                            Adaptaciones Odontológicas Laborales
                        </Typography>
                        {adaptacionesOdontologicasData.map((adaptacion, index) => (
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
                            Seguimiento Odontológico Programado
                        </Typography>
                        {seguimientoOdontologicoData.map((seguimiento, index) => (
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
                            Plan de Tratamiento Odontológico
                        </Typography>
                        <Box sx={{ mb: 2, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'success.contrastText' }}>
                                {planTratamientoOdontologicoData.objetivo}
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'success.contrastText' }}>
                                Duración: {planTratamientoOdontologicoData.duracion}
                            </Typography>
                            {planTratamientoOdontologicoData.fases.map((fase, index) => (
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
                            Riesgos Odontológicos
                        </Typography>
                        {riesgosOdontologicosData.map((riesgo, index) => (
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

                <Alert severity="info" sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                        Recomendación de Seguimiento Integral
                    </Typography>
                    <Typography variant="caption">
                        Trabajador con aptitud odontológica favorable y adaptaciones efectivas | Mantenimiento preventivo continuo | Monitoreo factores de riesgo específicos
                    </Typography>
                </Alert>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Aptitud odontológica compatible con actividades laborales | Limitaciones controladas con manejo adecuado | Pronóstico favorable
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
