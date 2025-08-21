import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const exposicionRuidoOcupacionalData = [
    { año: '2019', nivel_promedio: 88, picos_maximos: 102, duracion_diaria: 7.5, proteccion_uso: 45 },
    { año: '2020', nivel_promedio: 92, picos_maximos: 108, duracion_diaria: 8.0, proteccion_uso: 60 },
    { año: '2021', nivel_promedio: 95, picos_maximos: 112, duracion_diaria: 8.5, proteccion_uso: 75 },
    { año: '2022', nivel_promedio: 90, picos_maximos: 105, duracion_diaria: 8.0, proteccion_uso: 85 },
    { año: '2023', nivel_promedio: 85, picos_maximos: 98, duracion_diaria: 7.5, proteccion_uso: 90 },
    { año: '2024', nivel_promedio: 82, picos_maximos: 95, duracion_diaria: 7.0, proteccion_uso: 95 }
];

const fuentesRuidoLaboralData = [
    { fuente: 'Maquinaria Pesada', nivel_db: 95, exposicion_diaria: '4 horas', factor_riesgo: 'Alto', medidas_control: 'Cabina insonorizada' },
    { fuente: 'Herramientas Neumáticas', nivel_db: 88, exposicion_diaria: '3 horas', factor_riesgo: 'Moderado', medidas_control: 'Protección auditiva' },
    { fuente: 'Ventilación Industrial', nivel_db: 78, exposicion_diaria: '8 horas', factor_riesgo: 'Bajo', medidas_control: 'Mantenimiento preventivo' },
    { fuente: 'Tráfico Vehicular', nivel_db: 82, exposicion_diaria: '2 horas', factor_riesgo: 'Moderado', medidas_control: 'Rutas alternativas' },
    { fuente: 'Procesos Industriales', nivel_db: 90, exposicion_diaria: '6 horas', factor_riesgo: 'Alto', medidas_control: 'Encerramiento acústico' }
];

const proteccionAuditivaData = [
    { año: '2019', tipo_equipo: 'Tapones básicos', reduccion_db: 15, uso_diario: 45, eficacia: 'Baja' },
    { año: '2020', tipo_equipo: 'Orejeras estándar', reduccion_db: 20, uso_diario: 60, eficacia: 'Media' },
    { año: '2021', tipo_equipo: 'Protección combinada', reduccion_db: 25, uso_diario: 75, eficacia: 'Alta' },
    { año: '2022', tipo_equipo: 'Orejeras premium', reduccion_db: 28, uso_diario: 85, eficacia: 'Alta' },
    { año: '2023', tipo_equipo: 'Sistema adaptativo', reduccion_db: 30, uso_diario: 90, eficacia: 'Muy Alta' },
    { año: '2024', tipo_equipo: 'Protección inteligente', reduccion_db: 35, uso_diario: 95, eficacia: 'Excepcional' }
];

const impactoRuidoSaludData = [
    { indicador: 'Umbral Auditivo Promedio', valor_2019: 15, valor_2024: 30, cambio: '+15 dB', severidad: 'Moderado' },
    { indicador: 'Frecuencias Altas (4-8 kHz)', valor_2019: 20, valor_2024: 48, cambio: '+28 dB', severidad: 'Severo' },
    { indicador: 'Discriminación Verbal', valor_2019: 98, valor_2024: 92, cambio: '-6%', severidad: 'Leve' },
    { indicador: 'Síntomas Asociados', valor_2019: 1, valor_2024: 4, cambio: '+3 síntomas', severidad: 'Moderado' }
];

const evaluacionRiesgoLaboralData = [
    { factor: 'Nivel Sonoro Continuo', valor_actual: '82 dB', limite_permisible: '85 dB', estado: 'Dentro de límite', riesgo: 'Bajo' },
    { factor: 'Picos de Ruido', valor_actual: '95 dB', limite_permisible: '100 dB', estado: 'Dentro de límite', riesgo: 'Moderado' },
    { factor: 'Duración Exposición', valor_actual: '7 horas', limite_permisible: '8 horas', estado: 'Dentro de límite', riesgo: 'Bajo' },
    { factor: 'Protección Efectiva', valor_actual: '95% uso', limite_recomendado: '100%', estado: 'Casi óptimo', riesgo: 'Muy Bajo' },
    { factor: 'Medidas Administrativas', valor_actual: 'Implementadas', limite_recomendado: 'Completas', estado: 'Adecuado', riesgo: 'Bajo' }
];

const medidasControlRuidoData = [
    { medida: 'Control en la Fuente', implementacion: 'Completa', eficacia: 95, descripcion: 'Mantenimiento equipos, silenciadores' },
    { medida: 'Control en el Medio', implementacion: 'Parcial', eficacia: 75, descripcion: 'Barreras acústicas, encerramiento' },
    { medida: 'Control en el Receptor', implementacion: 'Óptima', eficacia: 98, descripcion: 'Protección auditiva personalizada' },
    { medida: 'Medidas Administrativas', implementacion: 'Completa', eficacia: 85, descripcion: 'Rotación personal, capacitación' },
    { medida: 'Vigilancia Médica', implementacion: 'Excelente', eficacia: 90, descripcion: 'Audiometrías periódicas, seguimiento' }
];

const programaConservacionData = [
    { componente: 'Evaluación Inicial', estado: 'Completado', cumplimiento: 100, observaciones: 'Mapeo sonoro detallado realizado' },
    { componente: 'Medidas de Control', estado: 'En progreso', cumplimiento: 85, observaciones: 'Implementación de nuevas medidas' },
    { componente: 'Protección Personal', estado: 'Óptimo', cumplimiento: 95, observaciones: 'Equipos de alta calidad en uso' },
    { componente: 'Capacitación Personal', estado: 'Actualizado', cumplimiento: 90, observaciones: 'Formación continua implementada' },
    { componente: 'Vigilancia Audiométrica', estado: 'Activo', cumplimiento: 100, observaciones: 'Seguimiento trimestral establecido' },
    { componente: 'Mantenimiento Equipos', estado: 'Programado', cumplimiento: 88, observaciones: 'Cronograma preventivo activo' }
];

export default function ExposicionRuidoOcupacional() {
    const getRiesgoColor = (riesgo: string) => {
        switch (riesgo.toLowerCase()) {
            case 'muy bajo': case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getEstadoColor = (estado: string) => {
        if (estado.includes('Dentro') || estado.includes('óptimo') || estado.includes('Adecuado')) return 'success';
        if (estado.includes('Casi') || estado.includes('Parcial')) return 'warning';
        return 'error';
    };

    const getImplementacionColor = (implementacion: string) => {
        switch (implementacion.toLowerCase()) {
            case 'completa': case 'óptima': case 'excelente': return 'success';
            case 'parcial': case 'en progreso': return 'warning';
            case 'incompleta': case 'deficiente': return 'error';
            default: return 'info';
        }
    };

    const getSeveridadColor = (severidad: string) => {
        switch (severidad.toLowerCase()) {
            case 'leve': return 'success';
            case 'moderado': return 'warning';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getEficaciaColor = (eficacia: string) => {
        if (eficacia.includes('Excepcional') || eficacia.includes('Muy Alta')) return 'success';
        if (eficacia.includes('Alta')) return 'info';
        if (eficacia.includes('Media')) return 'warning';
        return 'error';
    };

    const getCumplimientoColor = (cumplimiento: number) => {
        if (cumplimiento >= 90) return 'success';
        if (cumplimiento >= 75) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Exposición a Ruido Ocupacional
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Exposición al Ruido (2019-2024)
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <LineChart
                                width={500}
                                height={300}
                                series={[
                                    {
                                        data: exposicionRuidoOcupacionalData.map(item => item.nivel_promedio),
                                        label: 'Nivel Promedio (dB)',
                                        color: '#ff5722'
                                    },
                                    {
                                        data: exposicionRuidoOcupacionalData.map(item => item.picos_maximos),
                                        label: 'Picos Máximos (dB)',
                                        color: '#d32f2f'
                                    },
                                    {
                                        data: exposicionRuidoOcupacionalData.map(item => item.proteccion_uso),
                                        label: 'Uso Protección (%)',
                                        color: '#2e7d32'
                                    }
                                ]}
                                xAxis={[{
                                    scaleType: 'point',
                                    data: exposicionRuidoOcupacionalData.map(item => item.año)
                                }]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Fuentes de Ruido Laboral
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <BarChart
                                width={500}
                                height={300}
                                dataset={fuentesRuidoLaboralData}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'fuente',
                                    label: 'Fuentes de Ruido'
                                }]}
                                yAxis={[{ label: 'Nivel (dB)' }]}
                                series={[
                                    { dataKey: 'nivel_db', label: 'Nivel dB', color: '#ff5722' }
                                ]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Impacto del Ruido en la Salud
                        </Typography>
                        {impactoRuidoSaludData.map((impacto, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {impacto.indicador}
                                    </Typography>
                                    <Chip
                                        label={impacto.severidad}
                                        color={getSeveridadColor(impacto.severidad)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    2019: {impacto.valor_2019} | 2024: {impacto.valor_2024}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Cambio: {impacto.cambio}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación de Riesgo Laboral
                        </Typography>
                        {evaluacionRiesgoLaboralData.map((evaluacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {evaluacion.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={evaluacion.riesgo}
                                            color={getRiesgoColor(evaluacion.riesgo)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Actual: {evaluacion.valor_actual}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Límite: {evaluacion.limite_permisible}
                                </Typography>
                                <Chip
                                    label={evaluacion.estado}
                                    color={getEstadoColor(evaluacion.estado)}
                                    size="small"
                                    variant="outlined"
                                />
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Medidas de Control de Ruido
                        </Typography>
                        {medidasControlRuidoData.map((medida, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {medida.medida}
                                    </Typography>
                                    <Chip
                                        label={`${medida.eficacia}%`}
                                        color={medida.eficacia >= 90 ? 'success' : medida.eficacia >= 75 ? 'warning' : 'error'}
                                        size="small"
                                    />
                                </Box>
                                <Chip
                                    label={medida.implementacion}
                                    color={getImplementacionColor(medida.implementacion)}
                                    size="small"
                                    sx={{ mb: 0.5 }}
                                />
                                <Typography variant="caption" sx={{ display: 'block', color: 'success.contrastText' }}>
                                    {medida.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Protección Auditiva
                        </Typography>
                        {proteccionAuditivaData.map((proteccion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'warning.contrastText' }}>
                                        {proteccion.año} - {proteccion.tipo_equipo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={proteccion.eficacia}
                                            color={getEficaciaColor(proteccion.eficacia)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${proteccion.uso_diario}%`}
                                            color={proteccion.uso_diario >= 90 ? 'success' : proteccion.uso_diario >= 70 ? 'warning' : 'error'}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                    Reducción: -{proteccion.reduccion_db} dB
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={proteccion.uso_diario}
                                    color={proteccion.uso_diario >= 90 ? 'success' : proteccion.uso_diario >= 70 ? 'warning' : 'error'}
                                    sx={{ height: 4, borderRadius: 2 }}
                                />
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Programa de Conservación Auditiva
                        </Typography>
                        {programaConservacionData.map((programa, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'primary.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'primary.contrastText' }}>
                                        {programa.componente}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={programa.estado}
                                            color={getImplementacionColor(programa.estado)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${programa.cumplimiento}%`}
                                            color={getCumplimientoColor(programa.cumplimiento)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'primary.contrastText' }}>
                                    {programa.observaciones}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={programa.cumplimiento}
                                    color={getCumplimientoColor(programa.cumplimiento) === 'error' ? 'error' : getCumplimientoColor(programa.cumplimiento) === 'warning' ? 'warning' : 'success'}
                                    sx={{ height: 4, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.3)' }}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Exposición controlada dentro de límites permisibles | Programa de conservación auditiva activo | Vigilancia audiométrica continua
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
