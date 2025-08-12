import { Card, CardContent, Typography, Box, Grid, Stack, Chip, LinearProgress } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ExposicionRuido() {
    const totalTrabajadores = 450;
    const exposicion85dB = 187;
    const exposicion90dB = 92;
    const porcentajeExposicion = (exposicion85dB / totalTrabajadores) * 100;
    const porcentajeAltoRiesgo = (exposicion90dB / totalTrabajadores) * 100;

    const departamentosRuido = [
        { departamento: 'Soldadura', trabajadores: 45, expuestos: 43, promedioDB: 94 },
        { departamento: 'Producción', trabajadores: 120, expuestos: 95, promedioDB: 88 },
        { departamento: 'Mantenimiento', trabajadores: 80, expuestos: 49, promedioDB: 86 },
        { departamento: 'Carpintería', trabajadores: 35, expuestos: 0, promedioDB: 78 },
        { departamento: 'Administración', trabajadores: 95, expuestos: 0, promedioDB: 65 },
        { departamento: 'Almacén', trabajadores: 75, expuestos: 0, promedioDB: 72 },
    ];

    const pieData = [
        { label: 'Sin exposición (<85 dB)', value: totalTrabajadores - exposicion85dB, color: '#4caf50' },
        { label: 'Exposición moderada (85-90 dB)', value: exposicion85dB - exposicion90dB, color: '#ff9800' },
        { label: 'Alto riesgo (>90 dB)', value: exposicion90dB, color: '#f44336' },
    ];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Exposición al Ruido Ocupacional
                </Typography>

                <Grid container spacing={3} sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
                    <Grid sx={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'error.light', borderRadius: 1, color: 'white' }}>
                            <VolumeUpIcon sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" fontWeight="bold">
                                {exposicion85dB}
                            </Typography>
                            <Typography variant="caption">
                                Expuestos a &gt;85 dB
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid sx={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'warning.main', borderRadius: 1, color: 'white' }}>
                            <WarningIcon sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" fontWeight="bold">
                                {porcentajeExposicion.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                % Exposición &gt;85 dB
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid sx={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'success.main', borderRadius: 1, color: 'white' }}>
                            <CheckCircleIcon sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" fontWeight="bold">
                                {(100 - porcentajeExposicion).toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                En niveles seguros
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
                    <Grid sx={{ xs: 12, sm: 6 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                Riesgo Alto (&gt;90 dB)
                            </Typography>
                            <Gauge
                                value={porcentajeAltoRiesgo}
                                startAngle={-110}
                                endAngle={110}
                                height={150}
                                text={({ value }) => `${(value ?? 0).toFixed(1)}%`}
                            />
                        </Box>
                    </Grid>

                    <Grid sx={{ xs: 12, sm: 6 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                Distribución General
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: pieData,
                                        highlightScope: { highlight: 'item' },
                                    },
                                ]}
                                height={200}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Exposición por Departamento
                    </Typography>
                    <Stack spacing={2}>
                        {departamentosRuido.map((dept, index) => {
                            const porcentajeDept = (dept.expuestos / dept.trabajadores) * 100;
                            const colorProgress = dept.promedioDB > 90 ? 'error' :
                                dept.promedioDB > 85 ? 'warning' : 'success';

                            return (
                                <Box key={index}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" fontWeight="medium">
                                            {dept.departamento}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {dept.expuestos}/{dept.trabajadores} ({porcentajeDept.toFixed(0)}%) - {dept.promedioDB} dB
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={porcentajeDept}
                                        color={colorProgress}
                                        sx={{ height: 8, borderRadius: 4 }}
                                    />
                                </Box>
                            );
                        })}
                    </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Clasificación de riesgo:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label={`Bajo riesgo (<85 dB): ${totalTrabajadores - exposicion85dB} trabajadores`}
                            size="small"
                            color="success"
                            variant="outlined"
                        />
                        <Chip
                            label={`Riesgo moderado (85-90 dB): ${exposicion85dB - exposicion90dB} trabajadores`}
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                        <Chip
                            label={`Alto riesgo (>90 dB): ${exposicion90dB} trabajadores`}
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
}
