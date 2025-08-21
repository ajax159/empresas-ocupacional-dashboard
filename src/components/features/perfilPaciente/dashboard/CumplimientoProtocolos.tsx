import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { Gauge } from '@mui/x-charts/Gauge';

const cumplimientoProtocolosData = [
    { año: '2019', examenes_cumplidos: 80, capacitaciones: 60, seguimientos: 70, intervenciones: 50 },
    { año: '2020', examenes_cumplidos: 85, capacitaciones: 70, seguimientos: 75, intervenciones: 65 },
    { año: '2021', examenes_cumplidos: 90, capacitaciones: 80, seguimientos: 85, intervenciones: 75 },
    { año: '2022', examenes_cumplidos: 95, capacitaciones: 85, seguimientos: 90, intervenciones: 80 },
    { año: '2023', examenes_cumplidos: 98, capacitaciones: 90, seguimientos: 95, intervenciones: 90 },
    { año: '2024', examenes_cumplidos: 100, capacitaciones: 95, seguimientos: 98, intervenciones: 95 }
];

const protocolosVigentesData = [
    { protocolo: 'Vigilancia Cardiovascular', cumplimiento: 98, ultima_revision: '2024-01', frecuencia: 'Anual', estado: 'Vigente' },
    { protocolo: 'Control Auditivo', cumplimiento: 100, ultima_revision: '2024-03', frecuencia: 'Trimestral', estado: 'Vigente' },
    { protocolo: 'Evaluación Ergonómica', cumplimiento: 85, ultima_revision: '2024-02', frecuencia: 'Semestral', estado: 'Vigente' },
    { protocolo: 'Vigilancia Respiratoria', cumplimiento: 92, ultima_revision: '2024-01', frecuencia: 'Anual', estado: 'Vigente' },
    { protocolo: 'Control Oftalmológico', cumplimiento: 88, ultima_revision: '2024-04', frecuencia: 'Bianual', estado: 'Vigente' },
    { protocolo: 'Evaluación Psicológica', cumplimiento: 75, ultima_revision: '2024-02', frecuencia: 'Bianual', estado: 'Pendiente' }
];

const indicadoresCalidadData = [
    { indicador: 'Adherencia Programas', valor_actual: 95, meta: 90, tendencia: 'Mejorando', categoria: 'Excelente' },
    { indicador: 'Oportunidad Atención', valor_actual: 88, meta: 85, tendencia: 'Estable', categoria: 'Bueno' },
    { indicador: 'Seguimiento Post-examen', valor_actual: 92, meta: 90, tendencia: 'Mejorando', categoria: 'Excelente' },
    { indicador: 'Documentación Completa', valor_actual: 98, meta: 95, tendencia: 'Estable', categoria: 'Excelente' },
    { indicador: 'Tiempo Respuesta', valor_actual: 82, meta: 85, tendencia: 'Mejorando', categoria: 'Bueno' },
    { indicador: 'Satisfacción Trabajador', valor_actual: 90, meta: 85, tendencia: 'Estable', categoria: 'Excelente' }
];

const auditoriasRealizadasData = [
    { año: '2019', auditorias_internas: 2, auditorias_externas: 1, hallazgos: 15, cumplimiento_global: 75 },
    { año: '2020', auditorias_internas: 2, auditorias_externas: 1, hallazgos: 12, cumplimiento_global: 80 },
    { año: '2021', auditorias_internas: 3, auditorias_externas: 1, hallazgos: 8, cumplimiento_global: 85 },
    { año: '2022', auditorias_internas: 3, auditorias_externas: 2, hallazgos: 6, cumplimiento_global: 90 },
    { año: '2023', auditorias_internas: 4, auditorias_externas: 2, hallazgos: 4, cumplimiento_global: 95 },
    { año: '2024', auditorias_internas: 4, auditorias_externas: 2, hallazgos: 2, cumplimiento_global: 98 }
];

const mejorasContinuasData = [
    { mejora: 'Digitalización Expedientes', año_implementacion: '2021', impacto: 'Alto', estado: 'Completado', beneficio: 'Acceso inmediato información' },
    { mejora: 'Automatización Recordatorios', año_implementacion: '2022', impacto: 'Medio', estado: 'Completado', beneficio: 'Reducción citas perdidas' },
    { mejora: 'Portal Trabajador', año_implementacion: '2023', impacto: 'Alto', estado: 'Completado', beneficio: 'Autogestión citas' },
    { mejora: 'Integración Sistemas', año_implementacion: '2024', impacto: 'Alto', estado: 'En curso', beneficio: 'Datos unificados' },
    { mejora: 'Telemedicina Seguimientos', año_implementacion: '2024', impacto: 'Medio', estado: 'Planificado', beneficio: 'Acceso remoto' }
];

const certificacionesVigentesData = [
    { certificacion: 'ISO 45001', vigencia: '2025-12', estado: 'Vigente', ultima_auditoria: '2024-03' },
    { certificacion: 'Habilitación Ministerio', vigencia: '2025-06', estado: 'Vigente', ultima_auditoria: '2024-01' },
    { certificacion: 'Acreditación ICONTEC', vigencia: '2024-12', estado: 'Por renovar', ultima_auditoria: '2024-02' },
    { certificacion: 'Certificación Calidad', vigencia: '2025-08', estado: 'Vigente', ultima_auditoria: '2024-04' }
];

export default function CumplimientoProtocolos() {
    const getCumplimientoColor = (cumplimiento: number) => {
        if (cumplimiento >= 95) return 'success';
        if (cumplimiento >= 85) return 'warning';
        return 'error';
    };

    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'vigente': case 'completado': return 'success';
            case 'en curso': return 'info';
            case 'pendiente': case 'por renovar': return 'warning';
            case 'planificado': return 'default';
            default: return 'default';
        }
    };

    const getTendenciaColor = (tendencia: string) => {
        switch (tendencia.toLowerCase()) {
            case 'mejorando': return 'success';
            case 'estable': return 'info';
            case 'deteriorando': return 'error';
            default: return 'default';
        }
    };

    const getCategoriaColor = (categoria: string) => {
        switch (categoria.toLowerCase()) {
            case 'excelente': return 'success';
            case 'bueno': return 'info';
            case 'regular': return 'warning';
            case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    const getImpactoColor = (impacto: string) => {
        switch (impacto.toLowerCase()) {
            case 'alto': return 'error';
            case 'medio': return 'warning';
            case 'bajo': return 'success';
            default: return 'default';
        }
    };

    const cumplimientoGlobal = 94;

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Cumplimiento de Protocolos
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Cumplimiento Global
                        </Typography>
                        <Box sx={{ height: 150, display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={150}
                                height={150}
                                value={cumplimientoGlobal}
                                startAngle={-110}
                                endAngle={110}
                                valueMin={0}
                                valueMax={100}
                                text={({ value }) => `${value}%`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Chip
                                label="Excelente"
                                color={getCumplimientoColor(cumplimientoGlobal)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                Cumplimiento de protocolos médicos ocupacionales
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Cumplimiento por Área (2019-2024)
                        </Typography>
                        <Box sx={{ height: 250 }}>
                            <LineChart
                                width={600}
                                height={250}
                                series={[
                                    {
                                        data: cumplimientoProtocolosData.map(item => item.examenes_cumplidos),
                                        label: 'Exámenes',
                                        color: '#1976d2'
                                    },
                                    {
                                        data: cumplimientoProtocolosData.map(item => item.capacitaciones),
                                        label: 'Capacitaciones',
                                        color: '#2e7d32'
                                    },
                                    {
                                        data: cumplimientoProtocolosData.map(item => item.seguimientos),
                                        label: 'Seguimientos',
                                        color: '#ed6c02'
                                    },
                                    {
                                        data: cumplimientoProtocolosData.map(item => item.intervenciones),
                                        label: 'Intervenciones',
                                        color: '#d32f2f'
                                    }
                                ]}
                                xAxis={[{
                                    scaleType: 'point',
                                    data: cumplimientoProtocolosData.map(item => item.año)
                                }]}
                                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Protocolos Vigentes
                        </Typography>
                        {protocolosVigentesData.map((protocolo, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {protocolo.protocolo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${protocolo.cumplimiento}%`}
                                            color={getCumplimientoColor(protocolo.cumplimiento)}
                                            size="small"
                                        />
                                        <Chip
                                            label={protocolo.estado}
                                            color={getEstadoColor(protocolo.estado)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                    Frecuencia: {protocolo.frecuencia} | Última revisión: {protocolo.ultima_revision}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Indicadores de Calidad
                        </Typography>
                        {indicadoresCalidadData.map((indicador, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                        {indicador.indicador}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={indicador.categoria}
                                            color={getCategoriaColor(indicador.categoria)}
                                            size="small"
                                        />
                                        <Chip
                                            label={indicador.tendencia}
                                            color={getTendenciaColor(indicador.tendencia)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', color: 'info.contrastText' }}>
                                    Actual: {indicador.valor_actual}% | Meta: {indicador.meta}%
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Mejoras Continuas
                        </Typography>
                        {mejorasContinuasData.map((mejora, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {mejora.mejora}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={mejora.impacto}
                                            color={getImpactoColor(mejora.impacto)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    Año: {mejora.año_implementacion} | Estado: {mejora.estado}
                                </Typography>
                                <Typography variant="caption" color="success.contrastText">
                                    {mejora.beneficio}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Auditorías y Hallazgos
                        </Typography>
                        {auditoriasRealizadasData.slice(-3).map((auditoria, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'warning.contrastText' }}>
                                        Año {auditoria.año}
                                    </Typography>
                                    <Chip
                                        label={`${auditoria.cumplimiento_global}%`}
                                        color={getCumplimientoColor(auditoria.cumplimiento_global)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'warning.contrastText' }}>
                                    Internas: {auditoria.auditorias_internas} | Externas: {auditoria.auditorias_externas}
                                </Typography>
                                <Typography variant="caption" color="warning.contrastText">
                                    Hallazgos: {auditoria.hallazgos}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Certificaciones Vigentes
                        </Typography>
                        {certificacionesVigentesData.map((certificacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'primary.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'primary.contrastText' }}>
                                        {certificacion.certificacion}
                                    </Typography>
                                    <Chip
                                        label={certificacion.estado}
                                        color={getEstadoColor(certificacion.estado)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'primary.contrastText' }}>
                                    Vigencia: {certificacion.vigencia}
                                </Typography>
                                <Typography variant="caption" color="primary.contrastText">
                                    Última auditoría: {certificacion.ultima_auditoria}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Cumplimiento excelente de protocolos | Mejora continua implementada | Certificaciones vigentes y actualizadas
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
