import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const factoresPsicosocialesData = [
    { factor: 'Demandas Psicológicas', nivel: 75, optimo: 50, riesgo: 'alto', descripcion: 'Carga mental excesiva por multitareas' },
    { factor: 'Control sobre Trabajo', nivel: 60, optimo: 70, riesgo: 'moderado', descripcion: 'Autonomía limitada en decisiones' },
    { factor: 'Apoyo Social Supervisores', nivel: 85, optimo: 80, riesgo: 'bajo', descripcion: 'Excelente relación con jefatura' },
    { factor: 'Apoyo Social Compañeros', nivel: 90, optimo: 80, riesgo: 'bajo', descripcion: 'Ambiente colaborativo positivo' },
    { factor: 'Inseguridad Laboral', nivel: 45, optimo: 30, riesgo: 'moderado', descripcion: 'Preocupación por estabilidad' },
    { factor: 'Calidad Liderazgo', nivel: 78, optimo: 75, riesgo: 'bajo', descripcion: 'Liderazgo efectivo y empático' }
];

const estresLaboralData = [
    { fuente: 'Sobrecarga de Trabajo', intensidad: 8, frecuencia: 'diaria', estrategias: ['Priorización tareas', 'Delegación'] },
    { fuente: 'Presión Temporal', intensidad: 7, frecuencia: 'frecuente', estrategias: ['Planificación', 'Gestión tiempo'] },
    { fuente: 'Conflictos Interpersonales', intensidad: 3, frecuencia: 'rara', estrategias: ['Comunicación asertiva'] },
    { fuente: 'Falta de Recursos', intensidad: 6, frecuencia: 'ocasional', estrategias: ['Solicitud recursos', 'Improvisación'] },
    { fuente: 'Ambigüedad Rol', intensidad: 4, frecuencia: 'rara', estrategias: ['Clarificación funciones'] }
];

const riesgosPsicosocialesData = [
    { label: 'Bajo Riesgo', value: 35, color: '#4caf50' },
    { label: 'Riesgo Moderado', value: 45, color: '#ff9800' },
    { label: 'Alto Riesgo', value: 20, color: '#f44336' }
];

const afrontamientoEstrategias = [
    { estrategia: 'Centradas en Problema', efectividad: 85, uso: 'frecuente', ejemplos: ['Planificación', 'Búsqueda apoyo instrumental'] },
    { estrategia: 'Centradas en Emoción', efectividad: 70, uso: 'moderado', ejemplos: ['Relajación', 'Reevaluación positiva'] },
    { estrategia: 'Evitación', efectividad: 30, uso: 'ocasional', ejemplos: ['Negación', 'Escape mental'] }
];

const intervencionesRecomendadasData = [
    { tipo: 'Individual', intervenciones: ['Psicoterapia cognitivo-conductual', 'Técnicas manejo estrés'] },
    { tipo: 'Grupal', intervenciones: ['Talleres comunicación', 'Grupos apoyo'] },
    { tipo: 'Organizacional', intervenciones: ['Rediseño puesto', 'Programas bienestar'] }
];

export default function FactoresPsicosocialesEstres() {
    const factores = factoresPsicosocialesData.map(item => item.factor);
    const niveles = factoresPsicosocialesData.map(item => item.nivel);
    const optimos = factoresPsicosocialesData.map(item => item.optimo);

    const fuentes = estresLaboralData.map(item => item.fuente);
    const intensidades = estresLaboralData.map(item => item.intensidad);

    const getRiesgoColor = (riesgo: string) => {
        switch (riesgo) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getIntensidadColor = (intensidad: number) => {
        if (intensidad <= 3) return 'success';
        if (intensidad <= 6) return 'warning';
        return 'error';
    };

    const getEfectividadColor = (efectividad: number) => {
        if (efectividad >= 70) return 'success';
        if (efectividad >= 50) return 'warning';
        return 'error';
    };

    const getFrecuenciaColor = (frecuencia: string) => {
        switch (frecuencia) {
            case 'rara': return 'success';
            case 'ocasional': return 'info';
            case 'frecuente': return 'warning';
            case 'diaria': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Factores Psicosociales y Estrés
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores Psicosociales vs Niveles Óptimos
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: niveles,
                                        label: 'Nivel Actual',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: optimos,
                                        label: 'Nivel Óptimo',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: factores,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Riesgos Psicosociales
                        </Typography>
                        <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <PieChart
                                series={[
                                    {
                                        data: riesgosPsicosocialesData,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                width={350}
                                height={200}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Detalle Factores Psicosociales
                        </Typography>
                        {factoresPsicosocialesData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.factor}
                                    </Typography>
                                    <Chip
                                        label={item.riesgo.toUpperCase()}
                                        color={getRiesgoColor(item.riesgo)}
                                        size="small"
                                    />
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={item.nivel}
                                    sx={{ height: 6, borderRadius: 3, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Actual: {item.nivel} | Óptimo: {item.optimo}
                                </Typography>
                                <Typography variant="caption" color="primary.main">
                                    {item.descripcion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Fuentes de Estrés Laboral
                        </Typography>
                        <Box sx={{ height: 120, mb: 2 }}>
                            <BarChart
                                width={300}
                                height={120}
                                series={[
                                    {
                                        data: intensidades,
                                        label: 'Intensidad',
                                        color: '#f44336'
                                    }
                                ]}
                                xAxis={[{
                                    data: fuentes,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 60, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 10 }]}
                            />
                        </Box>

                        {estresLaboralData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.fuente}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${item.intensidad}/10`}
                                            color={getIntensidadColor(item.intensidad)}
                                            size="small"
                                        />
                                        <Chip
                                            label={item.frecuencia.toUpperCase()}
                                            color={getFrecuenciaColor(item.frecuencia)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Estrategias: {item.estrategias.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estrategias de Afrontamiento
                        </Typography>
                        {afrontamientoEstrategias.map((estrategia, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {estrategia.estrategia}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${estrategia.efectividad}%`}
                                            color={getEfectividadColor(estrategia.efectividad)}
                                            size="small"
                                        />
                                        <Chip
                                            label={estrategia.uso.toUpperCase()}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Ejemplos: {estrategia.ejemplos.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Intervenciones Recomendadas
                        </Typography>
                        {intervencionesRecomendadasData.map((categoria, index) => (
                            <Box key={index} sx={{ mb: 2, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'info.contrastText' }}>
                                    Nivel {categoria.tipo}
                                </Typography>
                                {categoria.intervenciones.map((intervencion, idx) => (
                                    <Typography key={idx} variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                        • {intervencion}
                                    </Typography>
                                ))}
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Factores de riesgo psicosocial moderado identificados | Intervención preventiva recomendada
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
