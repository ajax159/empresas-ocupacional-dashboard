import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const evolucionTemporalData = [
    { año: '2019', od_promedio: 15, oi_promedio: 12, indice_global: 85, proteccion_uso: 60 },
    { año: '2020', od_promedio: 18, oi_promedio: 15, indice_global: 82, proteccion_uso: 70 },
    { año: '2021', od_promedio: 22, oi_promedio: 18, indice_global: 78, proteccion_uso: 80 },
    { año: '2022', od_promedio: 26, oi_promedio: 22, indice_global: 75, proteccion_uso: 85 },
    { año: '2023', od_promedio: 30, oi_promedio: 25, indice_global: 72, proteccion_uso: 90 },
    { año: '2024', od_promedio: 33, oi_promedio: 28, indice_global: 70, proteccion_uso: 95 }
];

const progresionFrecuenciasData = [
    { frecuencia: '125', año_2019: 10, año_2020: 12, año_2021: 15, año_2022: 18, año_2023: 20, año_2024: 22 },
    { frecuencia: '250', año_2019: 12, año_2020: 15, año_2021: 18, año_2022: 22, año_2023: 25, año_2024: 28 },
    { frecuencia: '500', año_2019: 15, año_2020: 18, año_2021: 22, año_2022: 26, año_2023: 30, año_2024: 32 },
    { frecuencia: '1000', año_2019: 18, año_2020: 22, año_2021: 26, año_2022: 30, año_2023: 33, año_2024: 35 },
    { frecuencia: '2000', año_2019: 20, año_2020: 25, año_2021: 30, año_2022: 35, año_2023: 38, año_2024: 40 },
    { frecuencia: '4000', año_2019: 25, año_2020: 32, año_2021: 38, año_2022: 42, año_2023: 45, año_2024: 48 },
    { frecuencia: '8000', año_2019: 30, año_2020: 38, año_2021: 45, año_2022: 50, año_2023: 55, año_2024: 58 }
];

const cambiosSignificativosData = [
    { periodo: '2019-2020', tipo: 'Deterioro Leve', frecuencias_afectadas: ['4000 Hz', '8000 Hz'], magnitud: '5-8 dB', factor_riesgo: 'Inicio exposición ruido' },
    { periodo: '2020-2021', tipo: 'Deterioro Moderado', frecuencias_afectadas: ['2000 Hz', '4000 Hz', '8000 Hz'], magnitud: '7-10 dB', factor_riesgo: 'Incremento nivel ruido' },
    { periodo: '2021-2022', tipo: 'Deterioro Leve', frecuencias_afectadas: ['1000 Hz', '2000 Hz'], magnitud: '4-5 dB', factor_riesgo: 'Exposición sostenida' },
    { periodo: '2022-2023', tipo: 'Estabilización', frecuencias_afectadas: ['General'], magnitud: '2-3 dB', factor_riesgo: 'Protección implementada' },
    { periodo: '2023-2024', tipo: 'Mejora Leve', frecuencias_afectadas: ['Bajas frecuencias'], magnitud: '-1 dB', factor_riesgo: 'Protección optimizada' }
];

const evaluacionProgresionData = [
    { año: '2019', clasificacion: 'Audición Normal', riesgo: 'Bajo', proteccion: 'Ocasional', seguimiento: 'Anual' },
    { año: '2020', clasificacion: 'Límite Normal', riesgo: 'Moderado', proteccion: 'Regular', seguimiento: 'Semestral' },
    { año: '2021', clasificacion: 'Hipoacusia Leve', riesgo: 'Alto', proteccion: 'Constante', seguimiento: 'Trimestral' },
    { año: '2022', clasificacion: 'Hipoacusia Leve', riesgo: 'Alto', proteccion: 'Óptima', seguimiento: 'Trimestral' },
    { año: '2023', clasificacion: 'Hipoacusia Leve', riesgo: 'Moderado', proteccion: 'Óptima', seguimiento: 'Semestral' },
    { año: '2024', clasificacion: 'Hipoacusia Leve', riesgo: 'Moderado', proteccion: 'Óptima', seguimiento: 'Semestral' }
];

const tendenciasPronosticoData = [
    { indicador: 'Velocidad Deterioro', valor_actual: '2.5 dB/año', tendencia: 'Desacelerando', pronostico: 'Estabilización en 2025' },
    { indicador: 'Frecuencias Críticas', valor_actual: '4000-8000 Hz', tendencia: 'Estable', pronostico: 'Sin nuevas afecciones' },
    { indicador: 'Eficacia Protección', valor_actual: '95%', tendencia: 'Mejorando', pronostico: 'Mantener nivel actual' },
    { indicador: 'Riesgo Ocupacional', valor_actual: 'Moderado', tendencia: 'Disminuyendo', pronostico: 'Riesgo bajo en 1 año' }
];

const factoresInfluyentesData = [
    { factor: 'Edad (Presbiacusia)', impacto: 'Moderado', contribucion: '30%', tendencia: 'Creciente' },
    { factor: 'Exposición Ocupacional', impacto: 'Alto', contribucion: '50%', tendencia: 'Controlada' },
    { factor: 'Protección Auditiva', impacto: 'Protectivo', contribucion: '-25%', tendencia: 'Mejorando' },
    { factor: 'Factores Ambientales', impacto: 'Bajo', contribucion: '10%', tendencia: 'Estable' },
    { factor: 'Condiciones Médicas', impacto: 'Mínimo', contribucion: '5%', tendencia: 'Estable' }
];

export default function EvolucionAuditivaTemporal() {
    const getRiesgoColor = (riesgo: string) => {
        switch (riesgo.toLowerCase()) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getTipoColor = (tipo: string) => {
        if (tipo.includes('Mejora')) return 'success';
        if (tipo.includes('Estabilización')) return 'info';
        if (tipo.includes('Leve')) return 'warning';
        if (tipo.includes('Moderado')) return 'error';
        return 'default';
    };

    const getTendenciaColor = (tendencia: string) => {
        if (tendencia.includes('Mejorando') || tendencia.includes('Disminuyendo') || tendencia.includes('Desacelerando')) return 'success';
        if (tendencia.includes('Estable') || tendencia.includes('Controlada')) return 'info';
        if (tendencia.includes('Creciente')) return 'warning';
        return 'default';
    };

    const getImpactoColor = (impacto: string) => {
        if (impacto.includes('Protectivo')) return 'success';
        if (impacto.includes('Mínimo') || impacto.includes('Bajo')) return 'info';
        if (impacto.includes('Moderado')) return 'warning';
        if (impacto.includes('Alto')) return 'error';
        return 'default';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Auditiva Temporal
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Umbrales Auditivos (2019-2024)
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <LineChart
                                width={500}
                                height={300}
                                series={[
                                    {
                                        data: evolucionTemporalData.map(item => item.od_promedio),
                                        label: 'Oído Derecho (dB)',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: evolucionTemporalData.map(item => item.oi_promedio),
                                        label: 'Oído Izquierdo (dB)',
                                        color: '#dc004e'
                                    },
                                    {
                                        data: evolucionTemporalData.map(item => item.indice_global),
                                        label: 'Índice Global (%)',
                                        color: '#00c853'
                                    }
                                ]}
                                xAxis={[{
                                    scaleType: 'point',
                                    data: evolucionTemporalData.map(item => item.año)
                                }]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Progresión por Frecuencias
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <BarChart
                                width={500}
                                height={300}
                                dataset={progresionFrecuenciasData}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'frecuencia',
                                    label: 'Frecuencia (Hz)'
                                }]}
                                yAxis={[{ label: 'Umbral (dB)' }]}
                                series={[
                                    { dataKey: 'año_2019', label: '2019', color: '#e3f2fd' },
                                    { dataKey: 'año_2021', label: '2021', color: '#bbdefb' },
                                    { dataKey: 'año_2023', label: '2023', color: '#90caf9' },
                                    { dataKey: 'año_2024', label: '2024', color: '#1976d2' }
                                ]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Cambios Significativos por Período
                        </Typography>
                        {cambiosSignificativosData.map((cambio, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {cambio.periodo}
                                    </Typography>
                                    <Chip
                                        label={cambio.tipo}
                                        color={getTipoColor(cambio.tipo)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Frecuencias: {cambio.frecuencias_afectadas.join(', ')}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Magnitud: {cambio.magnitud}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Factor: {cambio.factor_riesgo}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación de Progresión Anual
                        </Typography>
                        {evaluacionProgresionData.map((evaluacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {evaluacion.año}
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
                                    {evaluacion.clasificacion}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Protección: {evaluacion.proteccion}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Seguimiento: {evaluacion.seguimiento}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias y Pronóstico
                        </Typography>
                        {tendenciasPronosticoData.map((tendencia, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {tendencia.indicador}
                                    </Typography>
                                    <Chip
                                        label={tendencia.tendencia}
                                        color={getTendenciaColor(tendencia.tendencia)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    Actual: {tendencia.valor_actual}
                                </Typography>
                                <Typography variant="caption" color="success.contrastText">
                                    Pronóstico: {tendencia.pronostico}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores Influyentes en la Evolución
                        </Typography>
                        <Grid container spacing={2}>
                            {factoresInfluyentesData.map((factor, index) => (
                                <Grid key={index} size={2.4}>
                                    <Box sx={{ p: 1.5, bgcolor: 'warning.light', borderRadius: 1, textAlign: 'center' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'warning.contrastText' }}>
                                            {factor.factor}
                                        </Typography>
                                        <Chip
                                            label={factor.impacto}
                                            color={getImpactoColor(factor.impacto)}
                                            size="small"
                                            sx={{ mb: 1 }}
                                        />
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                            Contribución: {factor.contribucion}
                                        </Typography>
                                        <Chip
                                            label={factor.tendencia}
                                            color={getTendenciaColor(factor.tendencia)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📈 Evolución controlada con protección auditiva | Deterioro estabilizado | Pronóstico favorable con medidas preventivas actuales
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
