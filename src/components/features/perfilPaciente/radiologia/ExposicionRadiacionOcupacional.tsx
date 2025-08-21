import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const exposicionRadiacionLaboralData = [
    { fuente: 'Rayos X Diagnósticos', exposicion: 'Moderada', dosis: 3.2, proteccion: 'Delantal Plomado', eficacia: 95 },
    { fuente: 'Tomografía Computarizada', exposicion: 'Baja', dosis: 1.8, proteccion: 'Sala Blindada', eficacia: 98 },
    { fuente: 'Fluoroscopía', exposicion: 'Mínima', dosis: 0.5, proteccion: 'Protector Tiroides', eficacia: 90 },
    { fuente: 'Medicina Nuclear', exposicion: 'Ocasional', dosis: 0.3, proteccion: 'Protocolo Especial', eficacia: 99 },
    { fuente: 'Radiación Ambiental', exposicion: 'Continua', dosis: 2.0, proteccion: 'Monitoreo Personal', eficacia: 85 }
];

const riesgosOcupacionalesRadiologicosData = [
    { riesgo: 'Exposición Acumulativa', severidad: 'Moderado', probabilidad: 25, factores: ['Frecuencia estudios', 'Tipo exposición'] },
    { riesgo: 'Efectos Determinísticos', severidad: 'Bajo', probabilidad: 5, factores: ['Dosis umbral', 'Tiempo exposición'] },
    { riesgo: 'Efectos Estocásticos', severidad: 'Bajo', probabilidad: 15, factores: ['Exposición crónica', 'Susceptibilidad individual'] },
    { riesgo: 'Contaminación Radioactiva', severidad: 'Mínimo', probabilidad: 2, factores: ['Procedimientos medicina nuclear'] },
    { riesgo: 'Exposición Ocupacional', severidad: 'Moderado', probabilidad: 30, factores: ['Trabajo en radiología', 'Protocolos seguridad'] }
];

const impactoSaludOcupacionalData = [
    { aspecto: 'Función Tiroidea', impacto: 8, descripcion: 'Monitoreo por exposición cervical' },
    { aspecto: 'Sistema Reproductivo', impacto: 5, descripcion: 'Protección específica implementada' },
    { aspecto: 'Sistema Hematológico', impacto: 12, descripcion: 'Controles hemáticos periódicos' },
    { aspecto: 'Piel y Tejidos', impacto: 3, descripcion: 'Sin evidencia de radiodermatitis' },
    { aspecto: 'Sistema Nervioso', impacto: 2, descripcion: 'No efectos neurológicos evidentes' }
];

const medidaProteccionData = [
    { medida: 'Dosimetría Personal', implementada: true, efectividad: 95, frecuencia: 'Mensual', cumplimiento: 98 },
    { medida: 'Equipos Protección', implementada: true, efectividad: 92, frecuencia: 'Cada uso', cumplimiento: 100 },
    { medida: 'Capacitación Radiológica', implementada: true, efectividad: 88, frecuencia: 'Anual', cumplimiento: 95 },
    { medida: 'Exámenes Médicos', implementada: true, efectividad: 90, frecuencia: 'Semestral', cumplimiento: 100 },
    { medida: 'Rotación de Personal', implementada: false, efectividad: 0, frecuencia: 'N/A', cumplimiento: 0 }
];

const distribucionExposicionData = [
    { id: 0, value: 40, label: 'Diagnóstica' },
    { id: 1, value: 25, label: 'Terapéutica' },
    { id: 2, value: 20, label: 'Ocupacional' },
    { id: 3, value: 15, label: 'Ambiental' }
];

const evaluacionRiesgoTemporalData = [
    { periodo: '2019-2020', riesgoGeneral: 15, exposicionLaboral: 12, proteccion: 85, incidentes: 0 },
    { periodo: '2021-2022', riesgoGeneral: 18, exposicionLaboral: 15, proteccion: 88, incidentes: 0 },
    { periodo: '2023-2024', riesgoGeneral: 20, exposicionLaboral: 18, proteccion: 92, incidentes: 0 }
];

const monitoreoSaludData = [
    { parametro: 'Hemograma Completo', frecuencia: 'Trimestral', ultimoResultado: 'Normal', proximoControl: '2024-12-15' },
    { parametro: 'Función Tiroidea', frecuencia: 'Semestral', ultimoResultado: 'Normal', proximoControl: '2025-01-20' },
    { parametro: 'Dosimetría Personal', frecuencia: 'Mensual', ultimoResultado: '0.8 mSv', proximoControl: '2024-09-30' },
    { parametro: 'Examen Oftalmológico', frecuencia: 'Anual', ultimoResultado: 'Sin alteraciones', proximoControl: '2025-06-15' },
    { parametro: 'Evaluación Dermatológica', frecuencia: 'Anual', ultimoResultado: 'Piel normal', proximoControl: '2025-03-10' }
];

export default function ExposicionRadiacionOcupacional() {
    const getExposicionColor = (exposicion: string) => {
        switch (exposicion.toLowerCase()) {
            case 'mínima': case 'ocasional': return 'success';
            case 'baja': case 'moderada': return 'warning';
            case 'alta': case 'continua': return 'error';
            default: return 'default';
        }
    };

    const getSeveridadColor = (severidad: string) => {
        switch (severidad.toLowerCase()) {
            case 'mínimo': case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getImplementadaColor = (implementada: boolean) => {
        return implementada ? 'success' : 'error';
    };

    const getProbabilidadColor = (probabilidad: number) => {
        if (probabilidad <= 10) return 'success';
        if (probabilidad <= 25) return 'warning';
        return 'error';
    };

    const getResultadoColor = (resultado: string) => {
        switch (resultado.toLowerCase()) {
            case 'normal': case 'sin alteraciones': case 'piel normal': return 'success';
            case 'alterado': case 'anormal': return 'error';
            default: return 'info';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Exposición a Radiación Ocupacional
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Fuentes de Exposición Radiológica
                        </Typography>
                        {exposicionRadiacionLaboralData.map((fuente, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {fuente.fuente}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={fuente.exposicion}
                                            color={getExposicionColor(fuente.exposicion)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${fuente.dosis} mSv`}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Protección: {fuente.proteccion}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography variant="caption" color="success.main" sx={{ fontWeight: 'medium' }}>
                                        Eficacia: {fuente.eficacia}%
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={fuente.eficacia}
                                        color="success"
                                        sx={{ height: 4, borderRadius: 2, flexGrow: 1 }}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Exposición
                        </Typography>
                        <Box sx={{ height: 180, mb: 2 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionExposicionData,
                                        innerRadius: 30,
                                        outerRadius: 70,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        highlightScope: { fade: 'global', highlight: 'item' }
                                    },
                                ]}
                                width={300}
                                height={180}
                            />
                        </Box>

                        <Typography variant="subtitle2" gutterBottom>
                            Impacto en Salud Ocupacional
                        </Typography>
                        <Box sx={{ height: 140 }}>
                            <BarChart
                                width={300}
                                height={140}
                                series={[
                                    {
                                        data: impactoSaludOcupacionalData.map(item => item.impacto),
                                        label: 'Impacto (%)',
                                        color: '#ff9800'
                                    }
                                ]}
                                xAxis={[{
                                    data: impactoSaludOcupacionalData.map(item => item.aspecto),
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 60, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 15 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Riesgos Ocupacionales Radiológicos
                        </Typography>
                        {riesgosOcupacionalesRadiologicosData.map((riesgo, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {riesgo.riesgo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${riesgo.probabilidad}%`}
                                            color={getProbabilidadColor(riesgo.probabilidad)}
                                            size="small"
                                        />
                                        <Chip
                                            label={riesgo.severidad}
                                            color={getSeveridadColor(riesgo.severidad)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Factores: {riesgo.factores.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Medidas de Protección Radiológica
                        </Typography>
                        {medidaProteccionData.map((medida, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {medida.medida}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={medida.implementada ? 'ACTIVA' : 'PENDIENTE'}
                                            color={getImplementadaColor(medida.implementada)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${medida.cumplimiento}%`}
                                            color={medida.cumplimiento >= 95 ? 'success' : medida.cumplimiento >= 80 ? 'warning' : 'error'}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Frecuencia: {medida.frecuencia}
                                </Typography>
                                {medida.implementada && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography variant="caption" color="success.main" sx={{ fontWeight: 'medium' }}>
                                            Efectividad: {medida.efectividad}%
                                        </Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={medida.efectividad}
                                            color="success"
                                            sx={{ height: 4, borderRadius: 2, flexGrow: 1 }}
                                        />
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evaluación de Riesgo Temporal
                        </Typography>
                        {evaluacionRiesgoTemporalData.map((periodo, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'info.contrastText' }}>
                                    {periodo.periodo}
                                </Typography>
                                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, mb: 1 }}>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                            Riesgo General: {periodo.riesgoGeneral}%
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                            Exposición: {periodo.exposicionLaboral}%
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                            Protección: {periodo.proteccion}%
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                            Incidentes: {periodo.incidentes}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Monitoreo de Salud Radiológica
                        </Typography>
                        {monitoreoSaludData.map((parametro, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'success.light', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'success.contrastText' }}>
                                        {parametro.parametro}
                                    </Typography>
                                    <Chip
                                        label={parametro.ultimoResultado}
                                        color={getResultadoColor(parametro.ultimoResultado)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                    Frecuencia: {parametro.frecuencia}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'success.contrastText' }}>
                                    Próximo control: {parametro.proximoControl}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Exposición radiológica controlada con medidas de protección efectivas | Monitoreo de salud continuo | Sin evidencia de efectos adversos
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
