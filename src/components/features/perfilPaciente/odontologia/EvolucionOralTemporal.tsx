import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const evolucionCPODData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    cariados: [2, 1, 3, 2, 1, 1],
    perdidos: [0, 0, 1, 1, 2, 3],
    obturados: [1, 2, 2, 3, 3, 4],
    sanos: [29, 29, 26, 26, 26, 24]
};

const evolucionIndicesData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    ihos: [2.1, 1.8, 1.5, 1.3, 1.2, 1.2],
    gingival: [1.2, 1.1, 0.9, 0.8, 0.8, 0.8],
    placa: [25, 22, 18, 16, 15, 15],
    sondaje: [2.8, 2.6, 2.4, 2.2, 2.1, 2.1]
};

const tratamientosTemporalesData = [
    { año: '2019', tratamientos: ['Examen Inicial', 'Profilaxis', 'Radiografías'], costo: 150, resultado: 'Diagnóstico base establecido' },
    { año: '2020', tratamientos: ['Profilaxis', 'Obturación x2'], costo: 280, resultado: 'Control de caries activas' },
    { año: '2021', tratamientos: ['Detartraje', 'Extracción molar', 'Profilaxis'], costo: 320, resultado: 'Mejora estado periodontal' },
    { año: '2022', tratamientos: ['Profilaxis', 'Obturación', 'Control'], costo: 200, resultado: 'Mantenimiento preventivo' },
    { año: '2023', tratamientos: ['Profilaxis', 'Aplicación flúor', 'Control'], costo: 180, resultado: 'Estabilización óptima' },
    { año: '2024', tratamientos: ['Profilaxis', 'Control periodontal'], costo: 160, resultado: 'Mantenimiento exitoso' }
];

const intervencionesSignificativasData = [
    {
        fecha: '2021-03-15',
        tipo: 'Extracción Quirúrgica',
        pieza: 'Molar 48',
        motivo: 'Caries extensa no restaurable',
        complicaciones: 'Ninguna',
        resultado: 'Exitoso',
        seguimiento: 'Cicatrización normal'
    },
    {
        fecha: '2022-08-20',
        tipo: 'Tratamiento Periodontal',
        pieza: 'Sectores posteriores',
        motivo: 'Gingivitis moderada',
        complicaciones: 'Sangrado inicial',
        resultado: 'Exitoso',
        seguimiento: 'Mejora significativa'
    },
    {
        fecha: '2023-05-10',
        tipo: 'Restauración Compleja',
        pieza: 'Molar 16',
        motivo: 'Caries profunda',
        complicaciones: 'Sensibilidad temporal',
        resultado: 'Exitoso',
        seguimiento: 'Asintomático'
    }
];

const tendenciasRiesgoData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    riesgoCaries: [8, 7, 6, 5, 4, 4],
    riesgoPeriodontal: [6, 5, 4, 3, 3, 3],
    riesgoGeneral: [7, 6, 5, 4, 3.5, 3.5]
};

const comparativaAnualData = [
    { año: '2019', citas: 4, urgencias: 2, preventivas: 2, curativas: 3, satisfaccion: 75 },
    { año: '2020', citas: 3, urgencias: 1, preventivas: 2, curativas: 2, satisfaccion: 80 },
    { año: '2021', citas: 5, urgencias: 2, preventivas: 2, curativas: 4, satisfaccion: 85 },
    { año: '2022', citas: 3, urgencias: 0, preventivas: 3, curativas: 1, satisfaccion: 90 },
    { año: '2023', citas: 3, urgencias: 0, preventivas: 3, curativas: 1, satisfaccion: 92 },
    { año: '2024', citas: 2, urgencias: 0, preventivas: 2, curativas: 0, satisfaccion: 95 }
];

export default function EvolucionOralTemporal() {
    const getResultadoColor = (resultado: string) => {
        switch (resultado.toLowerCase()) {
            case 'exitoso': return 'success';
            case 'parcial': return 'warning';
            case 'fallido': return 'error';
            default: return 'default';
        }
    };



    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Oral Temporal
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución CPOD (Cariados, Perdidos, Obturados)
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: evolucionCPODData.cariados,
                                        label: 'Cariados',
                                        color: '#f44336'
                                    },
                                    {
                                        data: evolucionCPODData.perdidos,
                                        label: 'Perdidos',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: evolucionCPODData.obturados,
                                        label: 'Obturados',
                                        color: '#2196f3'
                                    }
                                ]}
                                xAxis={[{
                                    data: evolucionCPODData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Índices de Salud Oral
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: evolucionIndicesData.ihos,
                                        label: 'IHOS',
                                        color: '#4caf50'
                                    },
                                    {
                                        data: evolucionIndicesData.gingival,
                                        label: 'Índice Gingival',
                                        color: '#9c27b0'
                                    },
                                    {
                                        data: evolucionIndicesData.sondaje,
                                        label: 'Sondaje (mm)',
                                        color: '#ff5722'
                                    }
                                ]}
                                xAxis={[{
                                    data: evolucionIndicesData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Comparativa Anual de Atenciones
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: comparativaAnualData.map(item => item.citas),
                                        label: 'Total Citas',
                                        color: '#2196f3'
                                    },
                                    {
                                        data: comparativaAnualData.map(item => item.urgencias),
                                        label: 'Urgencias',
                                        color: '#f44336'
                                    },
                                    {
                                        data: comparativaAnualData.map(item => item.preventivas),
                                        label: 'Preventivas',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: comparativaAnualData.map(item => item.año),
                                    scaleType: 'band'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias de Riesgo Oral
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: tendenciasRiesgoData.riesgoCaries,
                                        label: 'Riesgo Caries',
                                        color: '#f44336'
                                    },
                                    {
                                        data: tendenciasRiesgoData.riesgoPeriodontal,
                                        label: 'Riesgo Periodontal',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: tendenciasRiesgoData.riesgoGeneral,
                                        label: 'Riesgo General',
                                        color: '#9c27b0'
                                    }
                                ]}
                                xAxis={[{
                                    data: tendenciasRiesgoData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                                yAxis={[{ min: 0, max: 10 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tratamientos por Año
                        </Typography>
                        {tratamientosTemporalesData.map((año, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {año.año}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        ${año.costo}
                                    </Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Tratamientos: {año.tratamientos.join(', ')}
                                </Typography>
                                <Typography variant="caption" color="success.main" sx={{ fontWeight: 'medium' }}>
                                    {año.resultado}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Intervenciones Significativas
                        </Typography>
                        {intervencionesSignificativasData.map((intervencion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {intervencion.tipo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={intervencion.pieza}
                                            color="info"
                                            size="small"
                                            variant="outlined"
                                        />
                                        <Chip
                                            label={intervencion.resultado}
                                            color={getResultadoColor(intervencion.resultado)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Fecha: {intervencion.fecha} | Motivo: {intervencion.motivo}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Complicaciones: {intervencion.complicaciones}
                                </Typography>
                                <Typography variant="caption" color="success.main" sx={{ fontWeight: 'medium' }}>
                                    Seguimiento: {intervencion.seguimiento}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📊 Evolución positiva con reducción sostenida de riesgos orales | Mantenimiento preventivo eficaz
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
