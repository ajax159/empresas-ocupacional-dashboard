import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const evolucionPsicologicaData = [
    { año: 2020, bienestar: 85, estres: 30, ansiedad: 25, depresion: 15, autoestima: 80 },
    { año: 2021, bienestar: 82, estres: 35, ansiedad: 30, depresion: 20, autoestima: 78 },
    { año: 2022, bienestar: 78, estres: 45, ansiedad: 40, depresion: 25, autoestima: 75 },
    { año: 2023, bienestar: 75, estres: 50, ansiedad: 45, depresion: 30, autoestima: 72 },
    { año: 2024, bienestar: 78, estres: 42, ansiedad: 38, depresion: 22, autoestima: 78 }
];

const tendenciasPsicologicasData = [
    { aspecto: 'Bienestar General', tendencia: 'mejoria', cambio: '+4%', significancia: 'leve' },
    { aspecto: 'Estrés Laboral', tendencia: 'mejoria', cambio: '-16%', significancia: 'moderado' },
    { aspecto: 'Ansiedad', tendencia: 'mejoria', cambio: '-16%', significancia: 'moderado' },
    { aspecto: 'Síntomas Depresivos', tendencia: 'mejoria', cambio: '-27%', significancia: 'significativo' },
    { aspecto: 'Autoestima', tendencia: 'mejoria', cambio: '+8%', significancia: 'leve' }
];

const intervencionesPsicologicasData = [
    { año: 2021, intervencion: 'Técnicas de relajación y mindfulness', resultado: 'Reducción leve del estrés' },
    { año: 2022, intervencion: 'Terapia cognitivo-conductual grupal', resultado: 'Mejora en estrategias de afrontamiento' },
    { año: 2023, intervencion: 'Programa de prevención burnout', resultado: 'Estabilización del bienestar' },
    { año: 2024, intervencion: 'Coaching para equilibrio trabajo-vida', resultado: 'Mejora significativa en múltiples áreas' }
];

const eventosSignificativosData = [
    { año: 2021, evento: 'Cambio de supervisor directo', impacto: 'Aumento temporal de ansiedad' },
    { año: 2022, evento: 'Incremento carga laboral por proyecto especial', impacto: 'Pico de estrés y síntomas depresivos' },
    { año: 2023, evento: 'Participación programa bienestar empresarial', impacto: 'Inicio de estabilización emocional' },
    { año: 2024, evento: 'Promoción a puesto de mayor responsabilidad', impacto: 'Mejora autoestima y motivación' }
];

export default function EvolucionPsicologicaTemporal() {
    const años = evolucionPsicologicaData.map(item => item.año);
    const bienestar = evolucionPsicologicaData.map(item => item.bienestar);
    const estres = evolucionPsicologicaData.map(item => item.estres);
    const ansiedad = evolucionPsicologicaData.map(item => item.ansiedad);
    const depresion = evolucionPsicologicaData.map(item => item.depresion);

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
            case 'significativo': return 'info';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evolución Psicológica Temporal
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencias Psicológicas 2020-2024
                        </Typography>
                        <Box sx={{ height: 240 }}>
                            <LineChart
                                width={480}
                                height={240}
                                series={[
                                    {
                                        data: bienestar,
                                        label: 'Bienestar General',
                                        color: '#4caf50',
                                        curve: 'linear'
                                    },
                                    {
                                        data: estres,
                                        label: 'Estrés Laboral',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                    {
                                        data: ansiedad,
                                        label: 'Ansiedad',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: depresion,
                                        label: 'Síntomas Depresivos',
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
                            {tendenciasPsicologicasData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            {item.aspecto}
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
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'success.main' }}>
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
                            Intervenciones Psicológicas Realizadas
                        </Typography>
                        {intervencionesPsicologicasData.map((item, index) => (
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
                            Eventos Significativos
                        </Typography>
                        {eventosSignificativosData.map((evento, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'warning.light', borderRadius: 1, border: '1px solid', borderColor: 'warning.main' }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5, color: 'warning.contrastText' }}>
                                    {evento.año}: {evento.evento}
                                </Typography>
                                <Typography variant="caption" color="warning.contrastText">
                                    Impacto: {evento.impacto}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        📈 Tendencia general de mejora tras intervenciones | Recuperación significativa en bienestar psicológico
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
