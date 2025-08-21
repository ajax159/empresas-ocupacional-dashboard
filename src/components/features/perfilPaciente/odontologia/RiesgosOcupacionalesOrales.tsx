import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const exposicionRiesgosLaboralesData = [
    { factor: 'Polvo y Partículas', exposicion: 'Alta', impacto: 'Enfermedad Periodontal', proteccion: 'Mascarilla N95', eficacia: 85 },
    { factor: 'Químicos Corrosivos', exposicion: 'Media', impacto: 'Erosión Dental', proteccion: 'Protector Facial', eficacia: 90 },
    { factor: 'Temperatura Extrema', exposicion: 'Baja', impacto: 'Sensibilidad Dental', proteccion: 'EPP Térmico', eficacia: 80 },
    { factor: 'Radiación', exposicion: 'Mínima', impacto: 'Xerostomía', proteccion: 'Blindaje Plomado', eficacia: 95 },
    { factor: 'Vibración', exposicion: 'Media', impacto: 'Trauma Oclusal', proteccion: 'Protector Bucal', eficacia: 75 }
];

const patologiaOcupacionalData = [
    { patologia: 'Xerostomía Ocupacional', prevalencia: 15, causas: ['Estrés laboral', 'Medicamentos', 'Ambiente seco'], severidad: 'Leve' },
    { patologia: 'Erosión Dental Química', prevalencia: 8, causas: ['Exposición ácidos', 'Vapores químicos'], severidad: 'Moderada' },
    { patologia: 'Gingivitis por Polvo', prevalencia: 25, causas: ['Partículas irritantes', 'Higiene deficiente'], severidad: 'Leve' },
    { patologia: 'Bruxismo Laboral', prevalencia: 35, causas: ['Estrés ocupacional', 'Tensión muscular'], severidad: 'Moderada' },
    { patologia: 'Trauma Dental', prevalencia: 5, causas: ['Accidentes trabajo', 'Objetos contundentes'], severidad: 'Severa' }
];

const impactoRendimientoData = [
    { aspecto: 'Dolor Orofacial', impacto: 65, descripcion: 'Reducción concentración y productividad' },
    { aspecto: 'Halitosis', impacto: 30, descripcion: 'Afecta relaciones interpersonales' },
    { aspecto: 'Dificultad Masticación', impacto: 40, descripcion: 'Limitación alimentación durante trabajo' },
    { aspecto: 'Sensibilidad Dental', impacto: 50, descripcion: 'Molestias con cambios temperatura' },
    { aspecto: 'Problemas Comunicación', impacto: 25, descripcion: 'Dificultad pronunciación por ausencias dentales' }
];

const medidasPreventivasData = [
    { medida: 'Programa Higiene Oral', implementada: true, efectividad: 90, frecuencia: 'Diaria', costo: 'Bajo' },
    { medida: 'Uso EPP Específico', implementada: true, efectividad: 85, frecuencia: 'Durante exposición', costo: 'Medio' },
    { medida: 'Exámenes Periódicos', implementada: true, efectividad: 80, frecuencia: 'Semestral', costo: 'Medio' },
    { medida: 'Capacitación Salud Oral', implementada: false, efectividad: 0, frecuencia: 'Anual', costo: 'Bajo' },
    { medida: 'Modificación Ambiente', implementada: true, efectividad: 70, frecuencia: 'Permanente', costo: 'Alto' }
];

const distribucionRiesgosData = [
    { id: 0, value: 35, label: 'Químico' },
    { id: 1, value: 25, label: 'Físico' },
    { id: 2, value: 20, label: 'Biológico' },
    { id: 3, value: 15, label: 'Ergonómico' },
    { id: 4, value: 5, label: 'Psicosocial' }
];

const capacidadLaboralOralData = [
    { actividad: 'Comunicación Verbal', capacidad: 95, limitaciones: 'Ninguna', adaptaciones: [] },
    { actividad: 'Trabajo con Mascarilla', capacidad: 90, limitaciones: 'Respiración bucal', adaptaciones: ['Pausas hidratación'] },
    { actividad: 'Exposición Química', capacidad: 85, limitaciones: 'Sensibilidad aumentada', adaptaciones: ['EPP reforzado'] },
    { actividad: 'Trabajo Nocturno', capacidad: 80, limitaciones: 'Xerostomía nocturna', adaptaciones: ['Hidratación frecuente'] },
    { actividad: 'Manejo Alimentos', capacidad: 88, limitaciones: 'Higiene estricta', adaptaciones: ['Protocolos específicos'] }
];

export default function RiesgosOcupacionalesOrales() {
    const getExposicionColor = (exposicion: string) => {
        switch (exposicion.toLowerCase()) {
            case 'mínima': case 'baja': return 'success';
            case 'media': return 'warning';
            case 'alta': return 'error';
            default: return 'default';
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

    const getCostoColor = (costo: string) => {
        switch (costo.toLowerCase()) {
            case 'bajo': return 'success';
            case 'medio': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Riesgos Ocupacionales Orales
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Exposición a Riesgos Laborales
                        </Typography>
                        {exposicionRiesgosLaboralesData.map((riesgo, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {riesgo.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={riesgo.exposicion}
                                            color={getExposicionColor(riesgo.exposicion)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${riesgo.eficacia}%`}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Impacto: {riesgo.impacto}
                                </Typography>
                                <Typography variant="caption" color="primary.main">
                                    Protección: {riesgo.proteccion}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Riesgos Ocupacionales
                        </Typography>
                        <Box sx={{ height: 200, mb: 2 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionRiesgosData,
                                        innerRadius: 30,
                                        outerRadius: 80,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        highlightScope: { fade: 'global', highlight: 'item' }
                                    },
                                ]}
                                width={300}
                                height={200}
                            />
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Impacto en Rendimiento Laboral
                        </Typography>
                        <Box sx={{ height: 150 }}>
                            <BarChart
                                width={300}
                                height={150}
                                series={[
                                    {
                                        data: impactoRendimientoData.map(item => item.impacto),
                                        label: 'Impacto (%)',
                                        color: '#ff9800'
                                    }
                                ]}
                                xAxis={[{
                                    data: impactoRendimientoData.map(item => item.aspecto),
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 100 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Patologías Orales Ocupacionales
                        </Typography>
                        {patologiaOcupacionalData.map((patologia, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {patologia.patologia}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={`${patologia.prevalencia}%`}
                                            color="info"
                                            size="small"
                                        />
                                        <Chip
                                            label={patologia.severidad}
                                            color={getSeveridadColor(patologia.severidad)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Causas: {patologia.causas.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Medidas Preventivas Implementadas
                        </Typography>
                        {medidasPreventivasData.map((medida, index) => (
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
                                            label={medida.costo}
                                            color={getCostoColor(medida.costo)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Frecuencia: {medida.frecuencia}
                                </Typography>
                                {medida.implementada && (
                                    <Box>
                                        <Typography variant="caption" color="success.main" sx={{ fontWeight: 'medium', mr: 1 }}>
                                            Efectividad: {medida.efectividad}%
                                        </Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={medida.efectividad}
                                            color="success"
                                            sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                                        />
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad Laboral con Consideraciones Orales
                        </Typography>
                        <Grid container spacing={1}>
                            {capacidadLaboralOralData.map((actividad, index) => (
                                <Grid key={index} size={2.4}>
                                    <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1, height: '100%' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'info.contrastText' }}>
                                            {actividad.actividad}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                                {actividad.capacidad}%
                                            </Typography>
                                            <Chip
                                                label={actividad.capacidad >= 90 ? 'ÓPTIMA' : actividad.capacidad >= 80 ? 'BUENA' : 'LIMITADA'}
                                                color={actividad.capacidad >= 90 ? 'success' : actividad.capacidad >= 80 ? 'warning' : 'error'}
                                                size="small"
                                            />
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={actividad.capacidad}
                                            sx={{ height: 6, borderRadius: 3, mb: 1, bgcolor: 'rgba(255,255,255,0.3)' }}
                                        />
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                            Limitaciones: {actividad.limitaciones}
                                        </Typography>
                                        {actividad.adaptaciones.length > 0 && (
                                            <Typography variant="caption" sx={{ display: 'block', color: 'info.contrastText' }}>
                                                Adaptaciones: {actividad.adaptaciones.join(', ')}
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Seguimiento continuo de exposiciones ocupacionales | Medidas preventivas activas | Capacidad laboral preservada
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
