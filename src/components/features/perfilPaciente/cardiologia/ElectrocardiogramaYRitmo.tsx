import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const electrocardiogramaData = [
    { año: 2020, ritmo: 'Sinusal', fc: 72, intervaloPR: 160, qrs: 90, qtc: 420 },
    { año: 2021, ritmo: 'Sinusal', fc: 75, intervaloPR: 165, qrs: 88, qtc: 425 },
    { año: 2022, ritmo: 'Sinusal', fc: 68, intervaloPR: 158, qrs: 92, qtc: 415 },
    { año: 2023, ritmo: 'Sinusal', fc: 70, intervaloPR: 162, qrs: 89, qtc: 418 },
    { año: 2024, ritmo: 'Sinusal', fc: 69, intervaloPR: 160, qrs: 90, qtc: 420 }
];

const hallazgosECGData = [
    { hallazgo: 'Normal', frecuencia: 75, significancia: 'normal' },
    { hallazgo: 'Bradicardia Sinusal', frecuencia: 15, significancia: 'leve' },
    { hallazgo: 'Taquicardia Sinusal', frecuencia: 8, significancia: 'leve' },
    { hallazgo: 'Arritmias', frecuencia: 2, significancia: 'moderado' }
];

const parametrosActualesData = {
    frecuenciaCardiaca: { valor: 69, rango: '60-100', estado: 'normal' },
    intervaloPR: { valor: 160, rango: '120-200', estado: 'normal' },
    complejoQRS: { valor: 90, rango: '70-110', estado: 'normal' },
    intervaloQTc: { valor: 420, rango: '<440', estado: 'normal' }
};

export default function ElectrocardiogramaYRitmo() {
    const años = electrocardiogramaData.map(item => item.año);
    const frecuencias = electrocardiogramaData.map(item => item.fc);
    const intervalosQTc = electrocardiogramaData.map(item => item.qtc);

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'leve': return 'warning';
            case 'moderado': return 'error';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Electrocardiograma y Ritmo Cardíaco
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tendencia FC y QTc (2020-2024)
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={300}
                                height={200}
                                series={[
                                    { data: frecuencias, label: 'FC (lpm)', color: '#2196f3' },
                                    { data: intervalosQTc.map(q => q / 5), label: 'QTc/5 (ms)', color: '#ff9800' },
                                ]}
                                xAxis={[{ data: años, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Parámetros ECG Actuales
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {Object.entries(parametrosActualesData).map(([key, data]) => (
                                <Box key={key} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">
                                            {key === 'frecuenciaCardiaca' ? 'FC' :
                                                key === 'intervaloPR' ? 'PR' :
                                                    key === 'complejoQRS' ? 'QRS' : 'QTc'}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                            {data.valor} {key === 'frecuenciaCardiaca' ? 'lpm' : 'ms'}
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 0.5 }}>
                                        Normal: {data.rango} {key === 'frecuenciaCardiaca' ? 'lpm' : 'ms'}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={75}
                                            color={data.estado === 'normal' ? 'success' : 'warning'}
                                            sx={{ height: 6, borderRadius: 1, flexGrow: 1 }}
                                        />
                                        <Chip
                                            label={data.estado.toUpperCase()}
                                            color={getEstadoColor(data.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Hallazgos Electrocardiográficos
                    </Typography>
                    <Grid container spacing={2}>
                        {hallazgosECGData.map((item, index) => (
                            <Grid key={index} size={3}>
                                <Box sx={{
                                    p: 1.5,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1,
                                    textAlign: 'center'
                                }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                                        {item.hallazgo}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                                        {item.frecuencia}%
                                    </Typography>
                                    <Chip
                                        label={item.significancia.toUpperCase()}
                                        color={getEstadoColor(item.significancia)}
                                        size="small"
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="info.contrastText">
                        📊 ECG de reposo normal | Ritmo sinusal regular | Sin alteraciones significativas
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
