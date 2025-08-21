import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const evolucionEstudiosData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    torax: [2, 1, 2, 2, 3, 2],
    columna: [1, 1, 1, 1, 2, 2],
    extremidades: [0, 0, 1, 0, 0, 1],
    otros: [0, 0, 0, 0, 1, 0]
};

const evolucionDosisData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    dosisAnual: [2.1, 1.8, 3.2, 2.5, 4.1, 3.8],
    dosisAcumulada: [2.1, 3.9, 7.1, 9.6, 13.7, 17.5],
    limiteAnual: [20, 20, 20, 20, 20, 20],
    limiteAcumulado: [100, 100, 100, 100, 100, 100]
};

const progresionHallazgosData = [
    {
        año: '2019',
        hallazgos: ['Parénquima pulmonar normal', 'Columna cervical sin alteraciones'],
        categoria: 'Normal',
        seguimiento: 'Rutinario'
    },
    {
        año: '2020',
        hallazgos: ['Tórax normal', 'Leve rectificación cervical'],
        categoria: 'Cambios Menores',
        seguimiento: 'Anual'
    },
    {
        año: '2021',
        hallazgos: ['Sin cambios significativos tórax', 'Progresión cambios cervicales'],
        categoria: 'Cambios Leves',
        seguimiento: 'Semestral'
    },
    {
        año: '2022',
        hallazgos: ['Parénquima conservado', 'Espondiloartrosis L4-L5 inicial'],
        categoria: 'Cambios Degenerativos',
        seguimiento: 'Semestral'
    },
    {
        año: '2023',
        hallazgos: ['Tórax normal', 'Progresión espondiloartrosis lumbar'],
        categoria: 'Cambios Moderados',
        seguimiento: 'Trimestral'
    },
    {
        año: '2024',
        hallazgos: ['Sin cambios tórax', 'Estabilización cambios lumbares'],
        categoria: 'Estable',
        seguimiento: 'Semestral'
    }
];

const comparativaTemporalData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    calidadTecnica: [88, 90, 92, 93, 95, 95],
    informacionClinica: [80, 82, 85, 87, 88, 88],
    seguimientoRecomendaciones: [75, 80, 85, 88, 90, 92]
};

const tendenciasPatologicasData = [
    { patologia: 'Neumoconiosis', 2019: 0, 2020: 0, 2021: 0, 2022: 0, 2023: 0, 2024: 0 },
    { patologia: 'Cambios Degenerativos', 2019: 1, 2020: 1, 2021: 2, 2022: 3, 2023: 3, 2024: 3 },
    { patologia: 'Alteraciones Posturales', 2019: 0, 2020: 1, 2021: 1, 2022: 2, 2023: 2, 2024: 2 },
    { patologia: 'Patología Traumática', 2019: 0, 2020: 0, 2021: 1, 2022: 0, 2023: 0, 2024: 0 }
];

const intervencionesSignificativasData = [
    {
        fecha: '2021-05-15',
        tipo: 'Tomografía Cervical',
        motivo: 'Evaluación cambios degenerativos',
        resultado: 'Confirmación espondiloartrosis',
        seguimiento: 'Terapia física iniciada',
        impacto: 'Mejoría sintomática'
    },
    {
        fecha: '2022-08-20',
        tipo: 'Resonancia Lumbar',
        motivo: 'Dolor lumbar persistente',
        resultado: 'Discopatía L4-L5',
        seguimiento: 'Manejo conservador',
        impacto: 'Control del dolor'
    },
    {
        fecha: '2023-11-10',
        tipo: 'TAC Torácica',
        motivo: 'Seguimiento exposición laboral',
        resultado: 'Sin neumoconiosis',
        seguimiento: 'Control anual',
        impacto: 'Tranquilidad diagnóstica'
    }
];

const frecuenciaEstudiosData = [
    { año: '2019', urgentes: 0, programados: 3, seguimiento: 0, total: 3 },
    { año: '2020', urgentes: 0, programados: 2, seguimiento: 0, total: 2 },
    { año: '2021', urgentes: 1, programados: 2, seguimiento: 1, total: 4 },
    { año: '2022', urgentes: 0, programados: 2, seguimiento: 1, total: 3 },
    { año: '2023', urgentes: 0, programados: 3, seguimiento: 2, total: 5 },
    { año: '2024', urgentes: 0, programados: 3, seguimiento: 1, total: 4 }
];

export default function EvolucionRadiologicaTemporal() {
    const getCategoriaColor = (categoria: string) => {
        switch (categoria.toLowerCase()) {
            case 'normal': return 'success';
            case 'cambios menores': case 'cambios leves': return 'info';
            case 'cambios moderados': case 'cambios degenerativos': return 'warning';
            case 'estable': return 'success';
            case 'cambios severos': return 'error';
            default: return 'default';
        }
    };

    const getSeguimientoColor = (seguimiento: string) => {
        switch (seguimiento.toLowerCase()) {
            case 'rutinario': case 'anual': return 'success';
            case 'semestral': return 'warning';
            case 'trimestral': case 'mensual': return 'error';
            default: return 'default';
        }
    };

    const getResultadoColor = (resultado: string) => {
        switch (resultado.toLowerCase()) {
            case 'sin neumoconiosis': case 'normal': return 'success';
            case 'confirmación espondiloartrosis': case 'discopatía l4-l5': return 'warning';
            default: return 'info';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Radiológica Temporal
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución de Estudios por Tipo
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: evolucionEstudiosData.torax,
                                        label: 'Tórax',
                                        color: '#4caf50'
                                    },
                                    {
                                        data: evolucionEstudiosData.columna,
                                        label: 'Columna',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: evolucionEstudiosData.extremidades,
                                        label: 'Extremidades',
                                        color: '#2196f3'
                                    },
                                    {
                                        data: evolucionEstudiosData.otros,
                                        label: 'Otros',
                                        color: '#9c27b0'
                                    }
                                ]}
                                xAxis={[{
                                    data: evolucionEstudiosData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución de Dosis de Radiación
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: evolucionDosisData.dosisAnual,
                                        label: 'Dosis Anual (mSv)',
                                        color: '#f44336'
                                    },
                                    {
                                        data: evolucionDosisData.dosisAcumulada,
                                        label: 'Dosis Acumulada (mSv)',
                                        color: '#ff5722'
                                    }
                                ]}
                                xAxis={[{
                                    data: evolucionDosisData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                                yAxis={[{ min: 0, max: 25 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Frecuencia de Estudios por Año
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: frecuenciaEstudiosData.map(item => item.urgentes),
                                        label: 'Urgentes',
                                        color: '#f44336'
                                    },
                                    {
                                        data: frecuenciaEstudiosData.map(item => item.programados),
                                        label: 'Programados',
                                        color: '#4caf50'
                                    },
                                    {
                                        data: frecuenciaEstudiosData.map(item => item.seguimiento),
                                        label: 'Seguimiento',
                                        color: '#2196f3'
                                    }
                                ]}
                                xAxis={[{
                                    data: frecuenciaEstudiosData.map(item => item.año),
                                    scaleType: 'band'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Calidad y Seguimiento Temporal
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: comparativaTemporalData.calidadTecnica,
                                        label: 'Calidad Técnica (%)',
                                        color: '#4caf50'
                                    },
                                    {
                                        data: comparativaTemporalData.informacionClinica,
                                        label: 'Información Clínica (%)',
                                        color: '#2196f3'
                                    },
                                    {
                                        data: comparativaTemporalData.seguimientoRecomendaciones,
                                        label: 'Seguimiento (%)',
                                        color: '#ff9800'
                                    }
                                ]}
                                xAxis={[{
                                    data: comparativaTemporalData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                                yAxis={[{ min: 70, max: 100 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Progresión de Hallazgos por Año
                        </Typography>
                        {progresionHallazgosData.map((año, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {año.año}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={año.categoria}
                                            color={getCategoriaColor(año.categoria)}
                                            size="small"
                                        />
                                        <Chip
                                            label={año.seguimiento}
                                            color={getSeguimientoColor(año.seguimiento)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Hallazgos: {año.hallazgos.join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Intervenciones Radiológicas Significativas
                        </Typography>
                        {intervencionesSignificativasData.map((intervencion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {intervencion.tipo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Typography variant="caption" color="text.secondary">
                                            {intervencion.fecha}
                                        </Typography>
                                        <Chip
                                            label={intervencion.resultado}
                                            color={getResultadoColor(intervencion.resultado)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Motivo: {intervencion.motivo}
                                </Typography>
                                <Typography variant="caption" color="primary.main" sx={{ display: 'block', mb: 0.5 }}>
                                    Seguimiento: {intervencion.seguimiento}
                                </Typography>
                                <Typography variant="caption" color="success.main" sx={{ fontWeight: 'medium' }}>
                                    Impacto: {intervencion.impacto}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias Patológicas por Tipo
                        </Typography>
                        <Grid container spacing={1}>
                            {tendenciasPatologicasData.map((patologia, index) => (
                                <Grid key={index} size={3}>
                                    <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1, height: '100%' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'info.contrastText' }}>
                                            {patologia.patologia}
                                        </Typography>
                                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0.5, mb: 1 }}>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                                    2019: {patologia['2019']}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                                    2020: {patologia['2020']}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                                    2021: {patologia['2021']}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                                    2022: {patologia['2022']}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                                    2023: {patologia['2023']}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                                    2024: {patologia['2024']}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="caption" sx={{ display: 'block', color: 'info.contrastText' }}>
                                            Tendencia: {patologia['2024'] > patologia['2019'] ? 'Ascendente' : patologia['2024'] === patologia['2019'] ? 'Estable' : 'Descendente'}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📊 Evolución radiológica controlada con seguimiento adecuado | Dosis acumulada dentro de límites seguros | Cambios degenerativos estabilizados
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
