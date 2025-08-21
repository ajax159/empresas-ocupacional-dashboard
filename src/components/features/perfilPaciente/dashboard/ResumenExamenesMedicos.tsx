import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const resumenExamenesMedicosData = [
    { año: '2019', examenes_realizados: 12, examenes_pendientes: 3, cumplimiento: 80, aptitud_global: 85 },
    { año: '2020', examenes_realizados: 15, examenes_pendientes: 2, cumplimiento: 88, aptitud_global: 82 },
    { año: '2021', examenes_realizados: 18, examenes_pendientes: 1, cumplimiento: 95, aptitud_global: 78 },
    { año: '2022', examenes_realizados: 20, examenes_pendientes: 2, cumplimiento: 91, aptitud_global: 75 },
    { año: '2023', examenes_realizados: 22, examenes_pendientes: 1, cumplimiento: 96, aptitud_global: 72 },
    { año: '2024', examenes_realizados: 25, examenes_pendientes: 0, cumplimiento: 100, aptitud_global: 70 }
];

const distribucionExamenesPorTipoData = [
    { tipo: 'Ingreso', cantidad_2019: 1, cantidad_2020: 0, cantidad_2021: 0, cantidad_2022: 1, cantidad_2023: 0, cantidad_2024: 1 },
    { tipo: 'Periódico', cantidad_2019: 4, cantidad_2020: 6, cantidad_2021: 8, cantidad_2022: 8, cantidad_2023: 10, cantidad_2024: 12 },
    { tipo: 'Retiro', cantidad_2019: 0, cantidad_2020: 1, cantidad_2021: 0, cantidad_2022: 0, cantidad_2023: 1, cantidad_2024: 0 },
    { tipo: 'Reintegro', cantidad_2019: 2, cantidad_2020: 3, cantidad_2021: 4, cantidad_2022: 5, cantidad_2023: 4, cantidad_2024: 3 },
    { tipo: 'Post-incidente', cantidad_2019: 1, cantidad_2020: 2, cantidad_2021: 2, cantidad_2022: 1, cantidad_2023: 2, cantidad_2024: 1 },
    { tipo: 'Especializado', cantidad_2019: 4, cantidad_2020: 3, cantidad_2021: 4, cantidad_2022: 5, cantidad_2023: 5, cantidad_2024: 8 }
];

const estadisticasGeneralesData = [
    { metrica: 'Total Exámenes', valor_actual: 132, tendencia: 'Creciente', variacion: '+15%', periodo: '2019-2024' },
    { metrica: 'Cumplimiento Promedio', valor_actual: 92, tendencia: 'Mejorando', variacion: '+20%', periodo: '2019-2024' },
    { metrica: 'Aptitud Global Promedio', valor_actual: 77, tendencia: 'Decreciente', variacion: '-15%', periodo: '2019-2024' },
    { metrica: 'Exámenes Pendientes', valor_actual: 0, tendencia: 'Mejorando', variacion: '-100%', periodo: '2024' }
];

const indicadoresSaludOcupacionalData = [
    { indicador: 'Índice Salud General', valor_2019: 85, valor_2024: 78, cambio: -7, estado: 'Alerta' },
    { indicador: 'Capacidad Laboral', valor_2019: 90, valor_2024: 85, cambio: -5, estado: 'Estable' },
    { indicador: 'Riesgo Ocupacional', valor_2019: 25, valor_2024: 35, cambio: +10, estado: 'Incremento' },
    { indicador: 'Adherencia Programas', valor_2019: 70, valor_2024: 95, cambio: +25, estado: 'Excelente' },
    { indicador: 'Calidad de Vida', valor_2019: 80, valor_2024: 85, cambio: +5, estado: 'Mejora' }
];

const historialAptitudLaboralData = [
    { año: '2019', apto: 10, apto_restricciones: 2, no_apto_temporal: 0, no_apto_definitivo: 0 },
    { año: '2020', apto: 12, apto_restricciones: 3, no_apto_temporal: 0, no_apto_definitivo: 0 },
    { año: '2021', apto: 14, apto_restricciones: 4, no_apto_temporal: 0, no_apto_definitivo: 0 },
    { año: '2022', apto: 15, apto_restricciones: 4, no_apto_temporal: 1, no_apto_definitivo: 0 },
    { año: '2023', apto: 16, apto_restricciones: 6, no_apto_temporal: 1, no_apto_definitivo: 0 },
    { año: '2024', apto: 18, apto_restricciones: 6, no_apto_temporal: 1, no_apto_definitivo: 0 }
];

export default function ResumenExamenesMedicos() {
    const getTendenciaColor = (tendencia: string) => {
        switch (tendencia.toLowerCase()) {
            case 'creciente': case 'mejorando': return 'success';
            case 'estable': return 'info';
            case 'decreciente': return 'warning';
            default: return 'default';
        }
    };

    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'excelente': case 'mejora': return 'success';
            case 'estable': return 'info';
            case 'alerta': return 'warning';
            case 'incremento': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Resumen de Exámenes Médicos
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Anual de Exámenes (2019-2024)
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <LineChart
                                width={500}
                                height={300}
                                series={[
                                    {
                                        data: resumenExamenesMedicosData.map(item => item.examenes_realizados),
                                        label: 'Exámenes Realizados',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: resumenExamenesMedicosData.map(item => item.cumplimiento),
                                        label: 'Cumplimiento (%)',
                                        color: '#2e7d32'
                                    },
                                    {
                                        data: resumenExamenesMedicosData.map(item => item.aptitud_global),
                                        label: 'Aptitud Global (%)',
                                        color: '#ed6c02'
                                    }
                                ]}
                                xAxis={[{
                                    scaleType: 'point',
                                    data: resumenExamenesMedicosData.map(item => item.año)
                                }]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Exámenes por Tipo
                        </Typography>
                        <Box sx={{ height: 300 }}>
                            <BarChart
                                width={500}
                                height={300}
                                dataset={distribucionExamenesPorTipoData}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'tipo',
                                    label: 'Tipo de Examen'
                                }]}
                                yAxis={[{ label: 'Cantidad' }]}
                                series={[
                                    { dataKey: 'cantidad_2019', label: '2019', color: '#e3f2fd' },
                                    { dataKey: 'cantidad_2021', label: '2021', color: '#bbdefb' },
                                    { dataKey: 'cantidad_2023', label: '2023', color: '#90caf9' },
                                    { dataKey: 'cantidad_2024', label: '2024', color: '#1976d2' }
                                ]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estadísticas Generales del Período
                        </Typography>
                        {estadisticasGeneralesData.map((estadistica, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {estadistica.metrica}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={estadistica.valor_actual}
                                            color="primary"
                                            size="small"
                                        />
                                        <Chip
                                            label={estadistica.tendencia}
                                            color={getTendenciaColor(estadistica.tendencia)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Período: {estadistica.periodo}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Variación: {estadistica.variacion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Indicadores de Salud Ocupacional
                        </Typography>
                        {indicadoresSaludOcupacionalData.map((indicador, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {indicador.indicador}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={indicador.estado}
                                            color={getEstadoColor(indicador.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    2019: {indicador.valor_2019} | 2024: {indicador.valor_2024}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Cambio: {indicador.cambio > 0 ? '+' : ''}{indicador.cambio}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Historial de Aptitud Laboral por Año
                        </Typography>
                        <Grid container spacing={2}>
                            {historialAptitudLaboralData.map((aptitud, index) => (
                                <Grid key={index} size={2}>
                                    <Box sx={{ p: 1.5, bgcolor: 'success.light', borderRadius: 1, textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'success.contrastText' }}>
                                            {aptitud.año}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                            Apto: {aptitud.apto}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                            Con Restricciones: {aptitud.apto_restricciones}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                            No Apto Temporal: {aptitud.no_apto_temporal}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', color: 'success.contrastText' }}>
                                            No Apto Definitivo: {aptitud.no_apto_definitivo}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📊 Seguimiento médico sistemático | Cumplimiento óptimo alcanzado | Tendencia de aptitud requiere monitoreo especializado
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
