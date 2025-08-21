import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const alertasActualesData = [
    { alerta: 'Examen Periódico Vencido', tipo: 'Crítica', fecha_vencimiento: '2024-08-15', dias_vencido: 6, accion_requerida: 'Programar cita inmediata' },
    { alerta: 'Seguimiento Cardiológico', tipo: 'Importante', fecha_vencimiento: '2024-08-25', dias_vencido: -4, accion_requerida: 'Contactar especialista' },
    { alerta: 'Audiometría de Control', tipo: 'Importante', fecha_vencimiento: '2024-09-01', dias_vencido: -11, accion_requerida: 'Agendar evaluación' },
    { alerta: 'Renovación Aptitud', tipo: 'Moderada', fecha_vencimiento: '2024-09-15', dias_vencido: -25, accion_requerida: 'Preparar documentación' },
    { alerta: 'Capacitación Seguridad', tipo: 'Moderada', fecha_vencimiento: '2024-10-01', dias_vencido: -41, accion_requerida: 'Programar capacitación' }
];

const seguimientosActivosData = [
    { seguimiento: 'Control Hipertensión', responsable: 'Dr. García', frecuencia: 'Mensual', ultimo_control: '2024-07-20', proximo: '2024-08-20', estado: 'Al día' },
    { seguimiento: 'Monitoreo Auditivo', responsable: 'Dra. López', frecuencia: 'Trimestral', ultimo_control: '2024-05-15', proximo: '2024-08-15', estado: 'Vencido' },
    { seguimiento: 'Evaluación Ergonómica', responsable: 'Ing. Martín', frecuencia: 'Semestral', ultimo_control: '2024-02-10', proximo: '2024-08-10', estado: 'Vencido' },
    { seguimiento: 'Control Nutricional', responsable: 'Nut. Silva', frecuencia: 'Trimestral', ultimo_control: '2024-06-30', proximo: '2024-09-30', estado: 'Próximo' },
    { seguimiento: 'Revisión Psicológica', responsable: 'Psic. Rojas', frecuencia: 'Anual', ultimo_control: '2024-01-15', proximo: '2025-01-15', estado: 'Vigente' }
];

const historialAtencionesData = [
    { mes: 'Ene', atenciones_programadas: 4, atenciones_realizadas: 4, cancelaciones: 0, reprogramaciones: 0 },
    { mes: 'Feb', atenciones_programadas: 3, atenciones_realizadas: 2, cancelaciones: 1, reprogramaciones: 0 },
    { mes: 'Mar', atenciones_programadas: 5, atenciones_realizadas: 5, cancelaciones: 0, reprogramaciones: 0 },
    { mes: 'Abr', atenciones_programadas: 2, atenciones_realizadas: 2, cancelaciones: 0, reprogramaciones: 0 },
    { mes: 'May', atenciones_programadas: 3, atenciones_realizadas: 3, cancelaciones: 0, reprogramaciones: 0 },
    { mes: 'Jun', atenciones_programadas: 4, atenciones_realizadas: 3, cancelaciones: 0, reprogramaciones: 1 },
    { mes: 'Jul', atenciones_programadas: 3, atenciones_realizadas: 3, cancelaciones: 0, reprogramaciones: 0 },
    { mes: 'Ago', atenciones_programadas: 2, atenciones_realizadas: 1, cancelaciones: 0, reprogramaciones: 1 }
];

const metricsResumenData = [
    { metrica: 'Adherencia Citas', valor: 92, meta: 90, tendencia: 'Estable', periodo: '2024' },
    { metrica: 'Cumplimiento Seguimientos', valor: 88, meta: 95, tendencia: 'Mejorando', periodo: '2024' },
    { metrica: 'Respuesta Alertas', valor: 85, meta: 90, tendencia: 'Mejorando', periodo: 'Último mes' },
    { metrica: 'Satisfacción Atención', valor: 95, meta: 90, tendencia: 'Excelente', periodo: '2024' }
];

const proximasActividadesData = [
    { actividad: 'Examen Médico Periódico', fecha: '2024-08-25', responsable: 'Dr. García', tipo: 'Examen', urgencia: 'Alta' },
    { actividad: 'Audiometría Control', fecha: '2024-09-01', responsable: 'Dra. López', tipo: 'Especializado', urgencia: 'Media' },
    { actividad: 'Evaluación Ergonómica', fecha: '2024-09-10', responsable: 'Ing. Martín', tipo: 'Evaluación', urgencia: 'Media' },
    { actividad: 'Control Cardiológico', fecha: '2024-09-15', responsable: 'Dr. Herrera', tipo: 'Seguimiento', urgencia: 'Baja' },
    { actividad: 'Capacitación Preventiva', fecha: '2024-10-01', responsable: 'Eq. SST', tipo: 'Capacitación', urgencia: 'Baja' }
];

const estadisticasGeneralesData = {
    total_alertas_activas: 5,
    alertas_criticas: 1,
    seguimientos_activos: 5,
    seguimientos_vencidos: 2,
    citas_pendientes: 3,
    cumplimiento_general: 89
};

export default function AlertasSeguimientos() {
    const getTipoAlertaColor = (tipo: string) => {
        switch (tipo.toLowerCase()) {
            case 'crítica': return 'error';
            case 'importante': return 'warning';
            case 'moderada': return 'info';
            default: return 'default';
        }
    };

    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'al día': case 'vigente': return 'success';
            case 'próximo': return 'info';
            case 'vencido': return 'error';
            default: return 'default';
        }
    };

    const getTendenciaColor = (tendencia: string) => {
        switch (tendencia.toLowerCase()) {
            case 'excelente': case 'mejorando': return 'success';
            case 'estable': return 'info';
            case 'deteriorando': return 'error';
            default: return 'default';
        }
    };

    const getUrgenciaColor = (urgencia: string) => {
        switch (urgencia.toLowerCase()) {
            case 'alta': return 'error';
            case 'media': return 'warning';
            case 'baja': return 'success';
            default: return 'default';
        }
    };

    const getVencimientoColor = (diasVencido: number) => {
        if (diasVencido > 0) return 'error';
        if (diasVencido > -7) return 'warning';
        return 'success';
    };

    const getMetricaColor = (valor: number, meta: number) => {
        if (valor >= meta) return 'success';
        if (valor >= meta * 0.9) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Alertas y Seguimientos
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Historial de Atenciones 2024
                        </Typography>
                        <Box sx={{ height: 250 }}>
                            <BarChart
                                width={500}
                                height={250}
                                dataset={historialAtencionesData}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'mes',
                                    label: 'Mes'
                                }]}
                                yAxis={[{ label: 'Cantidad' }]}
                                series={[
                                    { dataKey: 'atenciones_programadas', label: 'Programadas', color: '#1976d2' },
                                    { dataKey: 'atenciones_realizadas', label: 'Realizadas', color: '#2e7d32' },
                                    { dataKey: 'cancelaciones', label: 'Cancelaciones', color: '#d32f2f' },
                                    { dataKey: 'reprogramaciones', label: 'Reprogramaciones', color: '#ed6c02' }
                                ]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Métricas de Gestión
                        </Typography>
                        <Box sx={{ height: 250 }}>
                            <LineChart
                                width={500}
                                height={250}
                                series={[
                                    {
                                        data: [85, 88, 90, 92, 89, 91, 92, 89],
                                        label: 'Adherencia (%)',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: [80, 85, 87, 90, 88, 90, 88, 85],
                                        label: 'Respuesta Alertas (%)',
                                        color: '#d32f2f'
                                    },
                                    {
                                        data: [92, 94, 95, 96, 95, 95, 95, 95],
                                        label: 'Satisfacción (%)',
                                        color: '#2e7d32'
                                    }
                                ]}
                                xAxis={[{
                                    scaleType: 'point',
                                    data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago']
                                }]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Alertas Activas
                        </Typography>
                        {alertasActualesData.map((alerta, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {alerta.alerta}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={alerta.tipo}
                                            color={getTipoAlertaColor(alerta.tipo)}
                                            size="small"
                                        />
                                        <Chip
                                            label={alerta.dias_vencido > 0 ? `+${alerta.dias_vencido}d` : `${alerta.dias_vencido}d`}
                                            color={getVencimientoColor(alerta.dias_vencido)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Vencimiento: {alerta.fecha_vencimiento}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Acción: {alerta.accion_requerida}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Seguimientos Activos
                        </Typography>
                        {seguimientosActivosData.map((seguimiento, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {seguimiento.seguimiento}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={seguimiento.estado}
                                            color={getEstadoColor(seguimiento.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    Responsable: {seguimiento.responsable} | Frecuencia: {seguimiento.frecuencia}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', color: 'info.contrastText' }}>
                                    Último: {seguimiento.ultimo_control} | Próximo: {seguimiento.proximo}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Próximas Actividades
                        </Typography>
                        {proximasActividadesData.map((actividad, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {actividad.actividad}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={actividad.urgencia}
                                            color={getUrgenciaColor(actividad.urgencia)}
                                            size="small"
                                        />
                                        <Chip
                                            label={actividad.tipo}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    Fecha: {actividad.fecha}
                                </Typography>
                                <Typography variant="caption" color="success.contrastText">
                                    Responsable: {actividad.responsable}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Resumen de Gestión
                        </Typography>
                        {metricsResumenData.map((metrica, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'warning.contrastText' }}>
                                        {metrica.metrica}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${metrica.valor}%`}
                                            color={getMetricaColor(metrica.valor, metrica.meta)}
                                            size="small"
                                        />
                                        <Chip
                                            label={metrica.tendencia}
                                            color={getTendenciaColor(metrica.tendencia)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                    Meta: {metrica.meta}% | Período: {metrica.periodo}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={metrica.valor}
                                    color={getMetricaColor(metrica.valor, metrica.meta) === 'error' ? 'error' : getMetricaColor(metrica.valor, metrica.meta) === 'warning' ? 'warning' : 'success'}
                                    sx={{ height: 4, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.3)' }}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estadísticas Generales
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={2}>
                                <Box sx={{ p: 1.5, bgcolor: 'error.light', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'error.contrastText' }}>
                                        {estadisticasGeneralesData.alertas_criticas}
                                    </Typography>
                                    <Typography variant="caption" color="error.contrastText">
                                        Alertas Críticas
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={2}>
                                <Box sx={{ p: 1.5, bgcolor: 'warning.light', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'warning.contrastText' }}>
                                        {estadisticasGeneralesData.total_alertas_activas}
                                    </Typography>
                                    <Typography variant="caption" color="warning.contrastText">
                                        Total Alertas
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={2}>
                                <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                        {estadisticasGeneralesData.seguimientos_activos}
                                    </Typography>
                                    <Typography variant="caption" color="info.contrastText">
                                        Seguimientos Activos
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={2}>
                                <Box sx={{ p: 1.5, bgcolor: 'error.light', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'error.contrastText' }}>
                                        {estadisticasGeneralesData.seguimientos_vencidos}
                                    </Typography>
                                    <Typography variant="caption" color="error.contrastText">
                                        Seguimientos Vencidos
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={2}>
                                <Box sx={{ p: 1.5, bgcolor: 'primary.light', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                                        {estadisticasGeneralesData.citas_pendientes}
                                    </Typography>
                                    <Typography variant="caption" color="primary.contrastText">
                                        Citas Pendientes
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={2}>
                                <Box sx={{ p: 1.5, bgcolor: 'success.light', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>
                                        {estadisticasGeneralesData.cumplimiento_general}%
                                    </Typography>
                                    <Typography variant="caption" color="success.contrastText">
                                        Cumplimiento
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ 1 alerta crítica requiere atención inmediata | 2 seguimientos vencidos | Gestión general en buen estado
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
