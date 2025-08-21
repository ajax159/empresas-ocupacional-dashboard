import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';

const estadoOralGeneralData = {
    indiceGlobal: 78,
    clasificacion: 'Bueno',
    riesgoGeneral: 'Bajo',
    estadoEncillas: 'Saludables',
    higieneBucal: 85
};

const indicesOdontologicosData = [
    { nombre: 'CPOD (Cariados, Perdidos, Obturados)', valor: 12, referencia: '< 15', estado: 'Normal' },
    { nombre: 'IHOS (Índice Higiene Oral Simplificado)', valor: 1.2, referencia: '< 1.5', estado: 'Bueno' },
    { nombre: 'Índice Gingival', valor: 0.8, referencia: '< 1.0', estado: 'Saludable' },
    { nombre: 'Profundidad Sondaje Promedio', valor: 2.1, referencia: '< 3.0 mm', estado: 'Normal' },
    { nombre: 'Índice Placa Bacteriana', valor: 15, referencia: '< 20%', estado: 'Aceptable' }
];

const distribucionCariesData = [
    { id: 0, value: 5, label: 'Cariados' },
    { id: 1, value: 3, label: 'Perdidos' },
    { id: 2, value: 4, label: 'Obturados' },
    { id: 3, value: 20, label: 'Sanos' }
];

const estadoPeriodontalData = [
    { zona: 'Sector Anterior Superior', estado: 'Saludable', inflamacion: 0, sangrado: false, bolsas: 0 },
    { zona: 'Sector Posterior Superior Derecho', estado: 'Gingivitis Leve', inflamacion: 1, sangrado: true, bolsas: 0 },
    { zona: 'Sector Posterior Superior Izquierdo', estado: 'Saludable', inflamacion: 0, sangrado: false, bolsas: 0 },
    { zona: 'Sector Anterior Inferior', estado: 'Gingivitis Leve', inflamacion: 1, sangrado: true, bolsas: 1 },
    { zona: 'Sector Posterior Inferior Derecho', estado: 'Saludable', inflamacion: 0, sangrado: false, bolsas: 0 },
    { zona: 'Sector Posterior Inferior Izquierdo', estado: 'Gingivitis Moderada', inflamacion: 2, sangrado: true, bolsas: 2 }
];

const factoresRiesgoOralData = [
    { factor: 'Tabaquismo', presente: false, impacto: 'Alto', descripcion: 'No fumador activo' },
    { factor: 'Consumo Azúcar Frecuente', presente: true, impacto: 'Medio', descripcion: 'Consumo moderado entre comidas' },
    { factor: 'Xerostomía', presente: false, impacto: 'Alto', descripcion: 'Salivación normal' },
    { factor: 'Bruxismo', presente: true, impacto: 'Alto', descripcion: 'Bruxismo nocturno diagnosticado' },
    { factor: 'Medicamentos Xerogénicos', presente: false, impacto: 'Medio', descripcion: 'No toma medicamentos que afecten salivación' }
];

const tratamientosRealizadosData = [
    { tratamiento: 'Profilaxis Dental', fecha: '2024-06-15', resultado: 'Exitoso', observaciones: 'Eliminación completa placa y cálculo' },
    { tratamiento: 'Obturación Molar 16', fecha: '2024-04-20', resultado: 'Exitoso', observaciones: 'Restauración con resina compuesta' },
    { tratamiento: 'Detartraje Subgingival', fecha: '2024-02-10', resultado: 'Exitoso', observaciones: 'Mejora significativa estado periodontal' },
    { tratamiento: 'Aplicación Flúor', fecha: '2024-01-15', resultado: 'Exitoso', observaciones: 'Prevención caries en zonas de riesgo' }
];

export default function EstadoOralActual() {
    const getEstadoColor = (estado: string) => {
        switch (estado.toLowerCase()) {
            case 'saludable': case 'normal': case 'bueno': case 'aceptable': return 'success';
            case 'gingivitis leve': case 'leve': return 'warning';
            case 'gingivitis moderada': case 'moderado': return 'error';
            case 'gingivitis severa': case 'severo': return 'error';
            default: return 'default';
        }
    };



    const getImpactoColor = (impacto: string) => {
        switch (impacto.toLowerCase()) {
            case 'bajo': return 'success';
            case 'medio': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getPresenteColor = (presente: boolean) => {
        return presente ? 'error' : 'success';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Estado Oral Actual
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Índice de Salud Oral Global
                        </Typography>
                        <Box sx={{ height: 120, display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Gauge
                                width={120}
                                height={120}
                                value={estadoOralGeneralData.indiceGlobal}
                                startAngle={-110}
                                endAngle={110}
                                valueMin={0}
                                valueMax={100}
                                text={({ value }) => `${value}%`}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Chip
                                label={estadoOralGeneralData.clasificacion}
                                color={getEstadoColor(estadoOralGeneralData.clasificacion)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                Estado de Encías: {estadoOralGeneralData.estadoEncillas}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Riesgo General: {estadoOralGeneralData.riesgoGeneral}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución Dental (CPOD)
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionCariesData,
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
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Índices Odontológicos Principales
                        </Typography>
                        {indicesOdontologicosData.map((indice, index) => (
                            <Box key={index} sx={{ mb: 1.5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                        {indice.nombre}
                                    </Typography>
                                    <Chip
                                        label={indice.estado}
                                        color={getEstadoColor(indice.estado)}
                                        size="small"
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {indice.valor}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Ref: {indice.referencia}
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={indice.valor > 15 ? 100 : (indice.valor / 15) * 100}
                                    color={getEstadoColor(indice.estado) === 'default' ? 'primary' : getEstadoColor(indice.estado) as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'inherit'}
                                    sx={{ height: 4, borderRadius: 2 }}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estado Periodontal por Sectores
                        </Typography>
                        {estadoPeriodontalData.map((sector, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {sector.zona}
                                    </Typography>
                                    <Chip
                                        label={sector.estado}
                                        color={getEstadoColor(sector.estado)}
                                        size="small"
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    <Chip
                                        label={`Inflamación: ${sector.inflamacion}`}
                                        color={sector.inflamacion === 0 ? 'success' : sector.inflamacion === 1 ? 'warning' : 'error'}
                                        size="small"
                                        variant="outlined"
                                    />
                                    <Chip
                                        label={sector.sangrado ? 'Sangrado' : 'Sin Sangrado'}
                                        color={sector.sangrado ? 'error' : 'success'}
                                        size="small"
                                        variant="outlined"
                                    />
                                    <Chip
                                        label={`Bolsas: ${sector.bolsas}`}
                                        color={sector.bolsas === 0 ? 'success' : sector.bolsas === 1 ? 'warning' : 'error'}
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores de Riesgo Oral
                        </Typography>
                        {factoresRiesgoOralData.map((factor, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {factor.factor}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={factor.presente ? 'PRESENTE' : 'AUSENTE'}
                                            color={getPresenteColor(!factor.presente)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`Impacto ${factor.impacto}`}
                                            color={getImpactoColor(factor.impacto)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {factor.descripcion}
                                </Typography>
                            </Box>
                        ))}

                        <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                            Higiene Bucal
                        </Typography>
                        <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'info.contrastText' }}>
                                    Índice de Higiene Bucal
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.contrastText' }}>
                                    {estadoOralGeneralData.higieneBucal}%
                                </Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={estadoOralGeneralData.higieneBucal}
                                sx={{ height: 8, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.3)' }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tratamientos Realizados Recientes
                        </Typography>
                        <Grid container spacing={1}>
                            {tratamientosRealizadosData.map((tratamiento, index) => (
                                <Grid key={index} size={3}>
                                    <Box sx={{ p: 1.5, bgcolor: 'success.light', borderRadius: 1, height: '100%' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5, color: 'success.contrastText' }}>
                                            {tratamiento.tratamiento}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: 'success.contrastText' }}>
                                            {tratamiento.fecha}
                                        </Typography>
                                        <Chip
                                            label={tratamiento.resultado}
                                            color="success"
                                            size="small"
                                            sx={{ mb: 0.5 }}
                                        />
                                        <Typography variant="caption" sx={{ display: 'block', color: 'success.contrastText' }}>
                                            {tratamiento.observaciones}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Estado oral general favorable con control periodontal adecuado | Continuar protocolo preventivo
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
