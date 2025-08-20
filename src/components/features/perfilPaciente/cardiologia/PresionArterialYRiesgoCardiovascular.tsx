import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const presionArterialData = [
    { año: 2020, sistolica: 120, diastolica: 80 },
    { año: 2021, sistolica: 125, diastolica: 82 },
    { año: 2022, sistolica: 118, diastolica: 78 },
    { año: 2023, sistolica: 122, diastolica: 81 },
    { año: 2024, sistolica: 119, diastolica: 79 }
];

const frecuenciaCardiacaData = [
    { año: 2020, reposo: 72, ejercicio: 145 },
    { año: 2021, reposo: 75, ejercicio: 148 },
    { año: 2022, reposo: 68, ejercicio: 142 },
    { año: 2023, reposo: 70, ejercicio: 144 },
    { año: 2024, reposo: 69, ejercicio: 143 }
];

const riesgoCardiovascularData = {
    actual: { nivel: 'bajo', porcentaje: 15, recomendaciones: ['Mantener actividad física', 'Dieta balanceada'] },
    framingham: { score: 8, categoria: 'Bajo riesgo' },
    factores: [
        { factor: 'Hipertensión', presente: false },
        { factor: 'Diabetes', presente: false },
        { factor: 'Tabaquismo', presente: false },
        { factor: 'Sedentarismo', presente: true }
    ]
};

export default function PresionArterialYRiesgoCardiovascular() {
    const años = presionArterialData.map(item => item.año);
    const sistolica = presionArterialData.map(item => item.sistolica);
    const diastolica = presionArterialData.map(item => item.diastolica);
    const fcReposo = frecuenciaCardiacaData.map(item => item.reposo);

    const getPresionStatus = (sistolica: number, diastolica: number) => {
        if (sistolica < 120 && diastolica < 80) return 'normal';
        if (sistolica < 130 && diastolica < 85) return 'elevada';
        if (sistolica < 140 && diastolica < 90) return 'hipertension1';
        return 'hipertension2';
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'normal': return 'success';
            case 'elevada': return 'warning';
            case 'hipertension1': return 'error';
            case 'hipertension2': return 'error';
            default: return 'default';
        }
    };

    const getRiesgoColor = (nivel: string) => {
        switch (nivel) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const ultimaPresion = presionArterialData[presionArterialData.length - 1];
    const statusActual = getPresionStatus(ultimaPresion.sistolica, ultimaPresion.diastolica);

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Presión Arterial y Riesgo Cardiovascular
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={7}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Presión Arterial (2020-2024)
                        </Typography>
                        <Box sx={{ height: 220 }}>
                            <LineChart
                                width={350}
                                height={220}
                                series={[
                                    {
                                        data: sistolica,
                                        label: 'Sistólica (mmHg)',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                    {
                                        data: diastolica,
                                        label: 'Diastólica (mmHg)',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: fcReposo,
                                        label: 'FC Reposo (lpm)',
                                        color: '#4caf50',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={5}>
                        <Typography variant="subtitle2" gutterBottom>
                            Estado Cardiovascular Actual
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                    Presión Arterial Actual
                                </Typography>
                                <Typography variant="h5" sx={{ mb: 0.5 }}>
                                    {ultimaPresion.sistolica}/{ultimaPresion.diastolica}
                                </Typography>
                                <Chip
                                    label={statusActual.toUpperCase()}
                                    color={getStatusColor(statusActual)}
                                    size="small"
                                />
                            </Box>

                            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                    Riesgo Cardiovascular
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 0.5 }}>
                                    {riesgoCardiovascularData.actual.porcentaje}%
                                </Typography>
                                <Chip
                                    label={riesgoCardiovascularData.actual.nivel.toUpperCase()}
                                    color={getRiesgoColor(riesgoCardiovascularData.actual.nivel)}
                                    size="small"
                                />
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                    Factores de Riesgo
                                </Typography>
                                {riesgoCardiovascularData.factores.map((factor, index) => (
                                    <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                            {factor.factor}
                                        </Typography>
                                        <Chip
                                            label={factor.presente ? 'SÍ' : 'NO'}
                                            color={factor.presente ? 'error' : 'success'}
                                            size="small"
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        💚 Riesgo cardiovascular bajo | Continuar con estilo de vida saludable
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
