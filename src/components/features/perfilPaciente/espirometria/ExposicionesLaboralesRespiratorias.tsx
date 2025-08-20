import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const exposicionesLaboralesData = [
    { agente: 'Polvo de Sílice', nivel: 0.8, limite: 1.0, riesgo: 'moderado', años: 8 },
    { agente: 'Vapores Químicos', nivel: 0.3, limite: 0.5, riesgo: 'bajo', años: 5 },
    { agente: 'Material Particulado', nivel: 0.9, limite: 1.2, riesgo: 'moderado', años: 10 },
    { agente: 'Fibras Sintéticas', nivel: 0.1, limite: 0.2, riesgo: 'bajo', años: 3 }
];

const vigilanciaEspirometricaData = [
    { año: 2020, frecuencia: 'Anual', resultado: 'normal', cambios: 'no' },
    { año: 2021, frecuencia: 'Anual', resultado: 'normal', cambios: 'no' },
    { año: 2022, frecuencia: 'Semestral', resultado: 'vigilancia', cambios: 'si' },
    { año: 2023, frecuencia: 'Semestral', resultado: 'normal', cambios: 'no' },
    { año: 2024, frecuencia: 'Anual', resultado: 'normal', cambios: 'no' }
];

const riesgosPulmonaresData = [
    { categoria: 'Neumoconiosis', probabilidad: 15, evidencia: 'Exposición a sílice prolongada' },
    { categoria: 'Asma Ocupacional', probabilidad: 8, evidencia: 'Exposición a químicos irritantes' },
    { categoria: 'Bronquitis Crónica', probabilidad: 12, evidencia: 'Material particulado elevado' },
    { categoria: 'Enfermedad Pulmonar', probabilidad: 5, evidencia: 'Fibras sintéticas ocasionales' }
];

const distribucionRiesgoData = [
    { label: 'Bajo Riesgo', value: 60, color: '#4caf50' },
    { label: 'Moderado', value: 30, color: '#ff9800' },
    { label: 'Alto', value: 10, color: '#f44336' }
];

export default function ExposicionesLaboralesRespiratorias() {
    const agentes = exposicionesLaboralesData.map(item => item.agente);
    const niveles = exposicionesLaboralesData.map(item => item.nivel);
    const limites = exposicionesLaboralesData.map(item => item.limite);

    const getRiesgoColor = (riesgo: string) => {
        switch (riesgo) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getVigilanciaColor = (resultado: string) => {
        switch (resultado) {
            case 'normal': return 'success';
            case 'vigilancia': return 'warning';
            case 'patologico': return 'error';
            default: return 'default';
        }
    };

    const getProbabilidadColor = (probabilidad: number) => {
        if (probabilidad <= 5) return 'success';
        if (probabilidad <= 15) return 'warning';
        return 'error';
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Exposiciones Laborales Respiratorias
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Niveles de Exposición vs. Límites Permisibles
                        </Typography>
                        <Box sx={{ height: 220 }}>
                            <BarChart
                                width={300}
                                height={220}
                                series={[
                                    {
                                        data: niveles,
                                        label: 'Nivel Actual',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: limites,
                                        label: 'Límite Permisible',
                                        color: '#f44336'
                                    }
                                ]}
                                xAxis={[{
                                    data: agentes,
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución de Riesgo Pulmonar
                        </Typography>
                        <Box sx={{ height: 220, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <PieChart
                                series={[
                                    {
                                        data: distribucionRiesgoData,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                width={300}
                                height={220}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Detalle de Exposiciones
                        </Typography>
                        {exposicionesLaboralesData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.agente}
                                    </Typography>
                                    <Chip
                                        label={item.riesgo.toUpperCase()}
                                        color={getRiesgoColor(item.riesgo)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Exposición: {item.años} años
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={(item.nivel / item.limite) * 100}
                                    sx={{ height: 6, borderRadius: 3, bgcolor: 'grey.200' }}
                                />
                                <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                                    {item.nivel} / {item.limite} mg/m³
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Riesgos Pulmonares Ocupacionales
                        </Typography>
                        {riesgosPulmonaresData.map((riesgo, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {riesgo.categoria}
                                    </Typography>
                                    <Chip
                                        label={`${riesgo.probabilidad}%`}
                                        color={getProbabilidadColor(riesgo.probabilidad)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {riesgo.evidencia}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={riesgo.probabilidad}
                                    sx={{ mt: 1, height: 4, borderRadius: 2 }}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Vigilancia Espirométrica
                    </Typography>
                    <Grid container spacing={1}>
                        {vigilanciaEspirometricaData.map((item, index) => (
                            <Grid key={index} size={2.4}>
                                <Box sx={{
                                    p: 1,
                                    textAlign: 'center',
                                    bgcolor: getVigilanciaColor(item.resultado) === 'success' ? 'success.light' :
                                        getVigilanciaColor(item.resultado) === 'warning' ? 'warning.light' : 'error.light',
                                    borderRadius: 1,
                                    border: '1px solid',
                                    borderColor: getVigilanciaColor(item.resultado) === 'success' ? 'success.main' :
                                        getVigilanciaColor(item.resultado) === 'warning' ? 'warning.main' : 'error.main'
                                }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block' }}>
                                        {item.año}
                                    </Typography>
                                    <Typography variant="caption" sx={{ display: 'block' }}>
                                        {item.frecuencia}
                                    </Typography>
                                    <Chip
                                        label={item.resultado.toUpperCase()}
                                        color={getVigilanciaColor(item.resultado)}
                                        size="small"
                                        sx={{ mt: 0.5 }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Vigilancia intensificada por exposición a sílice | Seguimiento semestral recomendado
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
