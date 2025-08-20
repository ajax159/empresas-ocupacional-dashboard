import { Card, CardContent, Typography, Box, Grid, Chip, Alert } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const indicadoresSaludData = [
    { año: 2020, fvc_predicho: 98, fev1_predicho: 96, pef_predicho: 94, sintomas: 0 },
    { año: 2021, fvc_predicho: 99, fev1_predicho: 97, pef_predicho: 95, sintomas: 1 },
    { año: 2022, fvc_predicho: 97, fev1_predicho: 95, pef_predicho: 92, sintomas: 2 },
    { año: 2023, fvc_predicho: 98, fev1_predicho: 96, pef_predicho: 94, sintomas: 1 },
    { año: 2024, fvc_predicho: 99, fev1_predicho: 97, pef_predicho: 95, sintomas: 0 }
];

const sintomasRespiratoriosData = [
    { sintoma: 'Tos Seca', frecuencia: 2, severidad: 'leve', relacion_trabajo: 'si' },
    { sintoma: 'Disnea Esfuerzo', frecuencia: 1, severidad: 'leve', relacion_trabajo: 'posible' },
    { sintoma: 'Sibilancias', frecuencia: 0, severidad: 'ausente', relacion_trabajo: 'no' },
    { sintoma: 'Opresión Torácica', frecuencia: 1, severidad: 'leve', relacion_trabajo: 'si' }
];

const capacidadFuncionalData = [
    { actividad: 'Trabajo en Altura', capacidad: 95, restriccion: 'ninguna' },
    { actividad: 'Espacios Confinados', capacidad: 90, restriccion: 'vigilancia' },
    { actividad: 'Exposición Química', capacidad: 85, restriccion: 'protección' },
    { actividad: 'Trabajo Físico Pesado', capacidad: 92, restriccion: 'ninguna' }
];

const alertasRespiratoriasData = [
    { tipo: 'Preventiva', mensaje: 'Evaluación semestral por exposición a sílice', nivel: 'info' },
    { tipo: 'Seguimiento', mensaje: 'Control de síntomas respiratorios relacionados con trabajo', nivel: 'warning' }
];

const tengoData = [
    { categoria: 'Función Pulmonar', valor: 96.5, estado: 'normal' },
    { categoria: 'Capacidad Respiratoria', valor: 93.8, estado: 'normal' },
    { categoria: 'Respuesta Broncodilatadora', valor: 2.1, estado: 'negativa' },
    { categoria: 'Intercambio Gaseoso', valor: 98.2, estado: 'normal' }
];

export default function IndicadoresSaludRespiratoria() {
    const años = indicadoresSaludData.map(item => item.año);
    const fvcPredicho = indicadoresSaludData.map(item => item.fvc_predicho);
    const fev1Predicho = indicadoresSaludData.map(item => item.fev1_predicho);
    const pefPredicho = indicadoresSaludData.map(item => item.pef_predicho);

    const actividades = capacidadFuncionalData.map(item => item.actividad);
    const capacidades = capacidadFuncionalData.map(item => item.capacidad);

    const getSeveridadColor = (severidad: string) => {
        switch (severidad) {
            case 'ausente': return 'success';
            case 'leve': return 'warning';
            case 'moderada': return 'error';
            case 'severa': return 'error';
            default: return 'default';
        }
    };

    const getRelacionColor = (relacion: string) => {
        switch (relacion) {
            case 'si': return 'error';
            case 'posible': return 'warning';
            case 'no': return 'success';
            default: return 'default';
        }
    };

    const getRestriccionColor = (restriccion: string) => {
        switch (restriccion) {
            case 'ninguna': return 'success';
            case 'vigilancia': return 'warning';
            case 'protección': return 'info';
            case 'restriccion': return 'error';
            default: return 'default';
        }
    };

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'alterado': return 'warning';
            case 'patologico': return 'error';
            case 'negativa': return 'success';
            default: return 'default';
        }
    };

    const getAlertaColor = (nivel: string) => {
        switch (nivel) {
            case 'info': return 'info';
            case 'warning': return 'warning';
            case 'error': return 'error';
            default: return 'info';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Indicadores de Salud Respiratoria
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Función Pulmonar (% Predicho)
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={500}
                                height={200}
                                series={[
                                    {
                                        data: fvcPredicho,
                                        label: 'FVC',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: fev1Predicho,
                                        label: 'FEV1',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: pefPredicho,
                                        label: 'PEF',
                                        color: '#4caf50',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                yAxis={[{ min: 85, max: 105 }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estado Actual Función Pulmonar
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {tengoData.map((item, index) => (
                                <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.categoria}
                                        </Typography>
                                        <Chip
                                            label={item.estado.toUpperCase()}
                                            color={getEstadoColor(item.estado)}
                                            size="small"
                                        />
                                    </Box>
                                    <Typography variant="h6" color="primary.main">
                                        {item.valor}%
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Síntomas Respiratorios
                        </Typography>
                        {sintomasRespiratoriosData.map((sintoma, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {sintoma.sintoma}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={sintoma.severidad.toUpperCase()}
                                            color={getSeveridadColor(sintoma.severidad)}
                                            size="small"
                                        />
                                        <Chip
                                            label={sintoma.relacion_trabajo === 'si' ? 'LABORAL' :
                                                sintoma.relacion_trabajo === 'posible' ? 'POSIBLE' : 'NO LABORAL'}
                                            color={getRelacionColor(sintoma.relacion_trabajo)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Frecuencia últimos 6 meses: {sintoma.frecuencia} episodios
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad Funcional Laboral
                        </Typography>
                        <Box sx={{ height: 150, mb: 2 }}>
                            <BarChart
                                width={300}
                                height={150}
                                series={[
                                    {
                                        data: capacidades,
                                        label: 'Capacidad (%)',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: actividades,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 60, left: 30, right: 10 }}
                            />
                        </Box>
                        {capacidadFuncionalData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'medium' }}>
                                        {item.actividad}
                                    </Typography>
                                    <Chip
                                        label={item.restriccion.toUpperCase()}
                                        color={getRestriccionColor(item.restriccion)}
                                        size="small"
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                {alertasRespiratoriasData.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Alertas y Recomendaciones
                        </Typography>
                        <Grid container spacing={1}>
                            {alertasRespiratoriasData.map((alerta, index) => (
                                <Grid key={index} size={6}>
                                    <Alert severity={getAlertaColor(alerta.nivel)} sx={{ mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                                            {alerta.tipo}
                                        </Typography>
                                        <Typography variant="caption">
                                            {alerta.mensaje}
                                        </Typography>
                                    </Alert>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ Función pulmonar dentro de parámetros normales | Apto para actividades laborales actuales
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
