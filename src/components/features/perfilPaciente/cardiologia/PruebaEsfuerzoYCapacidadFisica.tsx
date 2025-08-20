import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

const pruebaEsfuerzoData = {
    capacidadFuncional: { mets: 12.5, categoria: 'Excelente', percentil: 90 },
    frecuenciaMaxima: { alcanzada: 175, teorica: 185, porcentaje: 95 },
    presionEsfuerzo: { sistolica: 180, diastolica: 85, recuperacion: 'Normal' },
    sintomas: { angina: false, disnea: 'Leve', fatiga: 'Normal', mareos: false },
    protocolo: 'Bruce Modificado',
    tiempoTotal: '12:30',
    razonTermino: 'Fatiga'
};

const clasificacionFisicaData = {
    edad: 45,
    genero: 'Masculino',
    imc: 24.5,
    aptitudLaboral: 'Apto para trabajos físicos exigentes'
};

export default function PruebaEsfuerzoYCapacidadFisica() {
    const getCapacidadColor = (categoria: string) => {
        switch (categoria.toLowerCase()) {
            case 'excelente': return 'success';
            case 'buena': return 'info';
            case 'regular': return 'warning';
            case 'deficiente': return 'error';
            default: return 'default';
        }
    };

    const getSintomaColor = (sintoma: boolean | string) => {
        if (typeof sintoma === 'boolean') {
            return sintoma ? 'error' : 'success';
        }
        switch (sintoma.toLowerCase()) {
            case 'normal': return 'success';
            case 'leve': return 'warning';
            case 'moderado': return 'error';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getMETSPercentage = (mets: number) => (mets / 15) * 100;
    const getFCPercentage = (porcentaje: number) => porcentaje;

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Prueba de Esfuerzo y Capacidad Física
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Capacidad Funcional
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Gauge
                                width={160}
                                height={160}
                                value={getMETSPercentage(pruebaEsfuerzoData.capacidadFuncional.mets)}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .MuiGauge-valueText`]: {
                                        fontSize: 16,
                                        transform: 'translate(0px, 0px)',
                                    },
                                }}
                                text={`${pruebaEsfuerzoData.capacidadFuncional.mets} METs`}
                            />
                            <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
                                Percentil {pruebaEsfuerzoData.capacidadFuncional.percentil}
                            </Typography>
                            <Chip
                                label={pruebaEsfuerzoData.capacidadFuncional.categoria}
                                color={getCapacidadColor(pruebaEsfuerzoData.capacidadFuncional.categoria)}
                                size="small"
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Frecuencia Cardíaca Máxima
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Gauge
                                width={160}
                                height={160}
                                value={getFCPercentage(pruebaEsfuerzoData.frecuenciaMaxima.porcentaje)}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .MuiGauge-valueText`]: {
                                        fontSize: 16,
                                        transform: 'translate(0px, 0px)',
                                    },
                                }}
                                text={`${pruebaEsfuerzoData.frecuenciaMaxima.porcentaje}%`}
                            />
                            <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
                                {pruebaEsfuerzoData.frecuenciaMaxima.alcanzada}/{pruebaEsfuerzoData.frecuenciaMaxima.teorica} lpm
                            </Typography>
                            <Chip
                                label="ADECUADA"
                                color="success"
                                size="small"
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Datos de la Prueba
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ mb: 1.5, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="caption" color="text.secondary">
                                    Protocolo
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                    {pruebaEsfuerzoData.protocolo}
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 1.5, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="caption" color="text.secondary">
                                    Tiempo Total
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                    {pruebaEsfuerzoData.tiempoTotal} min
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 1.5, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="caption" color="text.secondary">
                                    Razón de Término
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                    {pruebaEsfuerzoData.razonTermino}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Síntomas Durante la Prueba
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <Box sx={{ textAlign: 'center', p: 1 }}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Angina</Typography>
                                <Chip
                                    label={pruebaEsfuerzoData.sintomas.angina ? 'SÍ' : 'NO'}
                                    color={getSintomaColor(pruebaEsfuerzoData.sintomas.angina)}
                                    size="small"
                                />
                            </Box>
                        </Grid>
                        <Grid size={3}>
                            <Box sx={{ textAlign: 'center', p: 1 }}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Disnea</Typography>
                                <Chip
                                    label={pruebaEsfuerzoData.sintomas.disnea}
                                    color={getSintomaColor(pruebaEsfuerzoData.sintomas.disnea)}
                                    size="small"
                                />
                            </Box>
                        </Grid>
                        <Grid size={3}>
                            <Box sx={{ textAlign: 'center', p: 1 }}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Fatiga</Typography>
                                <Chip
                                    label={pruebaEsfuerzoData.sintomas.fatiga}
                                    color={getSintomaColor(pruebaEsfuerzoData.sintomas.fatiga)}
                                    size="small"
                                />
                            </Box>
                        </Grid>
                        <Grid size={3}>
                            <Box sx={{ textAlign: 'center', p: 1 }}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Mareos</Typography>
                                <Chip
                                    label={pruebaEsfuerzoData.sintomas.mareos ? 'SÍ' : 'NO'}
                                    color={getSintomaColor(pruebaEsfuerzoData.sintomas.mareos)}
                                    size="small"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ {clasificacionFisicaData.aptitudLaboral} | Capacidad funcional excelente
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
