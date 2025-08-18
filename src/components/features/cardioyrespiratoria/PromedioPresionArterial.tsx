import { Card, CardContent, Typography, Box, Grid, Stack, Chip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function PromedioPresionArterial() {
    const meses = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    const presionSistolica = [134, 132, 135, 138, 136, 133, 131, 134, 137, 135, 132, 130];
    const presionDiastolica = [84, 82, 86, 88, 85, 83, 81, 84, 87, 85, 82, 80];

    const sistolicaLimite = 140;
    const diastolicaLimite = 90;

    const promedioSistolica = presionSistolica.reduce((sum, val) => sum + val, 0) / presionSistolica.length;
    const promedioDiastolica = presionDiastolica.reduce((sum, val) => sum + val, 0) / presionDiastolica.length;

    const tendenciaSistolica = (presionSistolica.slice(-3).reduce((a, b) => a + b, 0) / 3) -
        (presionSistolica.slice(0, 3).reduce((a, b) => a + b, 0) / 3);
    const tendenciaDiastolica = (presionDiastolica.slice(-3).reduce((a, b) => a + b, 0) / 3) -
        (presionDiastolica.slice(0, 3).reduce((a, b) => a + b, 0) / 3);

    const clasificacion = {
        normal: 45,      // <120/<80
        elevada: 38,     // 120-129/<80
        etapa1: 52,      // 130-139/80-89
        etapa2: 28       // ≥140/≥90
    };

    const totalPacientes = Object.values(clasificacion).reduce((sum, val) => sum + val, 0);

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Promedio de Presión Arterial - Evolución Mensual
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.main', borderRadius: 1, color: 'white' }}>
                            <BloodtypeIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h6" fontWeight="bold">
                                {promedioSistolica.toFixed(0)}/{promedioDiastolica.toFixed(0)}
                            </Typography>
                            <Typography variant="caption">
                                Promedio (mmHg)
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{
                            textAlign: 'center',
                            p: 2,
                            bgcolor: tendenciaSistolica < 0 ? 'success.main' : 'warning.main',
                            borderRadius: 1,
                            color: 'white'
                        }}>
                            {tendenciaSistolica < 0 ?
                                <TrendingDownIcon sx={{ fontSize: 35, mb: 1 }} /> :
                                <TrendingUpIcon sx={{ fontSize: 35, mb: 1 }} />
                            }
                            <Typography variant="h6" fontWeight="bold">
                                {tendenciaSistolica > 0 ? '+' : ''}{tendenciaSistolica.toFixed(1)}
                            </Typography>
                            <Typography variant="caption">
                                Tendencia Sistólica
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{
                            textAlign: 'center',
                            p: 2,
                            bgcolor: tendenciaDiastolica < 0 ? 'success.main' : 'warning.main',
                            borderRadius: 1,
                            color: 'white'
                        }}>
                            {tendenciaDiastolica < 0 ?
                                <TrendingDownIcon sx={{ fontSize: 35, mb: 1 }} /> :
                                <TrendingUpIcon sx={{ fontSize: 35, mb: 1 }} />
                            }
                            <Typography variant="h6" fontWeight="bold">
                                {tendenciaDiastolica > 0 ? '+' : ''}{tendenciaDiastolica.toFixed(1)}
                            </Typography>
                            <Typography variant="caption">
                                Tendencia Diastólica
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'info.main', borderRadius: 1, color: 'white' }}>
                            <Typography variant="h6" fontWeight="bold">
                                {((clasificacion.normal / totalPacientes) * 100).toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                Presión Normal
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <LineChart
                        xAxis={[{
                            scaleType: 'point',
                            data: meses
                        }]}
                        yAxis={[{
                            min: 70,
                            max: 150
                        }]}
                        series={[
                            {
                                label: 'Presión Sistólica',
                                data: presionSistolica,
                                color: '#f44336',
                                curve: 'linear'
                            },
                            {
                                label: 'Presión Diastólica',
                                data: presionDiastolica,
                                color: '#2196f3',
                                curve: 'linear'
                            },
                            {
                                label: 'Límite Sistólico Normal (140)',
                                data: Array(12).fill(sistolicaLimite),
                                color: '#ff9800',
                                curve: 'linear'
                            },
                            {
                                label: 'Límite Diastólico Normal (90)',
                                data: Array(12).fill(diastolicaLimite),
                                color: '#ff9800',
                                curve: 'linear'
                            }
                        ]}
                        height={350}
                        margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                        slotProps={{
                            legend: {
                                position: { vertical: 'bottom', horizontal: 'center' },
                            },
                        }}
                    />
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Rangos de Referencia (mmHg):
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label="Normal: <120/<80"
                            size="small"
                            sx={{ bgcolor: '#4caf50', color: 'white' }}
                        />
                        <Chip
                            label="Elevada: 120-129/<80"
                            size="small"
                            sx={{ bgcolor: '#fbc02d', color: 'white' }}
                        />
                        <Chip
                            label="Etapa 1: 130-139/80-89"
                            size="small"
                            sx={{ bgcolor: '#ff9800', color: 'white' }}
                        />
                        <Chip
                            label="Etapa 2: ≥140/≥90"
                            size="small"
                            sx={{ bgcolor: '#f44336', color: 'white' }}
                        />
                    </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Distribución de Pacientes por Clasificación:
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Box sx={{ textAlign: 'center', p: 1.5, bgcolor: '#4caf50', borderRadius: 1, color: 'white' }}>
                                <Typography variant="h6" fontWeight="bold">
                                    {clasificacion.normal}
                                </Typography>
                                <Typography variant="caption">
                                    Normal
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block' }}>
                                    {((clasificacion.normal / totalPacientes) * 100).toFixed(1)}%
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Box sx={{ textAlign: 'center', p: 1.5, bgcolor: '#fbc02d', borderRadius: 1, color: 'white' }}>
                                <Typography variant="h6" fontWeight="bold">
                                    {clasificacion.elevada}
                                </Typography>
                                <Typography variant="caption">
                                    Elevada
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block' }}>
                                    {((clasificacion.elevada / totalPacientes) * 100).toFixed(1)}%
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Box sx={{ textAlign: 'center', p: 1.5, bgcolor: '#ff9800', borderRadius: 1, color: 'white' }}>
                                <Typography variant="h6" fontWeight="bold">
                                    {clasificacion.etapa1}
                                </Typography>
                                <Typography variant="caption">
                                    Etapa 1
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block' }}>
                                    {((clasificacion.etapa1 / totalPacientes) * 100).toFixed(1)}%
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Box sx={{ textAlign: 'center', p: 1.5, bgcolor: '#f44336', borderRadius: 1, color: 'white' }}>
                                <Typography variant="h6" fontWeight="bold">
                                    {clasificacion.etapa2}
                                </Typography>
                                <Typography variant="caption">
                                    Etapa 2
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block' }}>
                                    {((clasificacion.etapa2 / totalPacientes) * 100).toFixed(1)}%
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Observaciones del período:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label={`Tendencia sistólica: ${tendenciaSistolica < 0 ? 'Mejorando' : 'Requiere atención'}`}
                            size="small"
                            color={tendenciaSistolica < 0 ? 'success' : 'warning'}
                            variant="outlined"
                        />
                        <Chip
                            label={`${((1 - (clasificacion.normal / totalPacientes)) * 100).toFixed(1)}% necesita seguimiento`}
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                        <Chip
                            label="Meta: 70% en rango normal"
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Promedio general: {promedioSistolica.toFixed(0)}/{promedioDiastolica.toFixed(0)} mmHg - Monitoreo continuo recomendado
                </Typography>
            </CardContent>
        </Card>
    );
}
