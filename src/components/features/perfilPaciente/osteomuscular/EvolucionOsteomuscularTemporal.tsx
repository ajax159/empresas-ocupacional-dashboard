import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const evolucionOsteomuscularData = [
    { año: 2020, puntajeGlobal: 85, cervical: 22, dorsal: 18, lumbar: 16, miembros: 18, sintomas: 1 },
    { año: 2021, puntajeGlobal: 82, cervical: 21, dorsal: 17, lumbar: 15, miembros: 17, sintomas: 2 },
    { año: 2022, puntajeGlobal: 78, cervical: 20, dorsal: 16, lumbar: 13, miembros: 16, sintomas: 3 },
    { año: 2023, puntajeGlobal: 76, cervical: 19, dorsal: 15, lumbar: 13, miembros: 16, sintomas: 3 },
    { año: 2024, puntajeGlobal: 75, cervical: 18, dorsal: 15, lumbar: 12, miembros: 16, sintomas: 4 }
];

const tendenciasSegmentosData = [
    { segmento: 'Cervical', tendencia: 'deterioro', cambio: '-18%', significancia: 'significativo' },
    { segmento: 'Dorsal', tendencia: 'deterioro', cambio: '-17%', significancia: 'moderado' },
    { segmento: 'Lumbar', tendencia: 'deterioro', cambio: '-25%', significancia: 'significativo' },
    { segmento: 'Extremidades', tendencia: 'estable', cambio: '-11%', significancia: 'leve' }
];

const intervencionesData = [
    { año: 2021, intervencion: 'Programa ejercicios cervicales', resultado: 'Mejoría temporal' },
    { año: 2022, intervencion: 'Capacitación ergonómica', resultado: 'Estabilización síntomas' },
    { año: 2023, intervencion: 'Ajuste puesto de trabajo', resultado: 'Reducción dolor lumbar' },
    { año: 2024, intervencion: 'Fisioterapia preventiva', resultado: 'En seguimiento' }
];

const alertasTemporalesData = [
    { año: 2022, alerta: 'Aparición dolor lumbar crónico', severidad: 'moderada' },
    { año: 2023, alerta: 'Aumento sintomatología cervical', severidad: 'leve' },
    { año: 2024, alerta: 'Limitación funcional en rotación', severidad: 'moderada' }
];

export default function EvolucionOsteomuscularTemporal() {
    const años = evolucionOsteomuscularData.map(item => item.año);
    const puntajeGlobal = evolucionOsteomuscularData.map(item => item.puntajeGlobal);
    const cervical = evolucionOsteomuscularData.map(item => item.cervical);
    const lumbar = evolucionOsteomuscularData.map(item => item.lumbar);
    const sintomas = evolucionOsteomuscularData.map(item => item.sintomas);

    const getTendenciaColor = (tendencia: string) => {
        switch (tendencia) {
            case 'mejoria': return 'success';
            case 'estable': return 'info';
            case 'deterioro': return 'warning';
            case 'critico': return 'error';
            default: return 'default';
        }
    };

    const getTendenciaIcon = (tendencia: string) => {
        switch (tendencia) {
            case 'mejoria': return '↗';
            case 'estable': return '→';
            case 'deterioro': return '↘';
            case 'critico': return '⚠';
            default: return '→';
        }
    };

    const getSignificanciaColor = (significancia: string) => {
        switch (significancia) {
            case 'leve': return 'success';
            case 'moderado': return 'warning';
            case 'significativo': return 'error';
            default: return 'default';
        }
    };

    const getSeveridadColor = (severidad: string) => {
        switch (severidad) {
            case 'leve': return 'info';
            case 'moderada': return 'warning';
            case 'severa': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Osteomuscular Temporal
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias 2020-2024
                        </Typography>
                        <Box sx={{ height: 240 }}>
                            <LineChart
                                width={480}
                                height={240}
                                series={[
                                    {
                                        data: puntajeGlobal,
                                        label: 'Puntaje Global',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: cervical,
                                        label: 'Cervical',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: lumbar,
                                        label: 'Lumbar',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                    {
                                        data: sintomas,
                                        label: 'Síntomas',
                                        color: '#9c27b0',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Análisis de Tendencias
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {tendenciasSegmentosData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.segmento}
                                        </Typography>
                                        <Typography variant="h6">
                                            {getTendenciaIcon(item.tendencia)}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                        <Chip
                                            label={item.tendencia.toUpperCase()}
                                            color={getTendenciaColor(item.tendencia)}
                                            size="small"
                                        />
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                                            {item.cambio}
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={item.significancia.toUpperCase()}
                                        color={getSignificanciaColor(item.significancia)}
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Intervenciones Realizadas
                        </Typography>
                        {intervencionesData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5, color: 'info.contrastText' }}>
                                    {item.año}: {item.intervencion}
                                </Typography>
                                <Typography variant="caption" color="info.contrastText">
                                    Resultado: {item.resultado}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Alertas Históricas
                        </Typography>
                        {alertasTemporalesData.map((alerta, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1, border: '1px solid', borderColor: 'warning.main' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'warning.contrastText' }}>
                                        {alerta.año}
                                    </Typography>
                                    <Chip
                                        label={alerta.severidad.toUpperCase()}
                                        color={getSeveridadColor(alerta.severidad)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="warning.contrastText">
                                    {alerta.alerta}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'error.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="error.contrastText">
                        📉 Tendencia de deterioro progresivo | Requiere intervención intensiva y seguimiento estrecho
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
