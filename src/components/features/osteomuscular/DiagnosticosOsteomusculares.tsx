import { Card, CardContent, Typography, Box, Stack, Chip, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';

export default function DiagnosticosOsteomusculares() {
    const diagnosticosData = [
        { diagnostico: 'Lumbalgia', casos: 127, porcentaje: 32.5, color: '#f44336' },
        { diagnostico: 'Cervicalgia', casos: 98, porcentaje: 25.1, color: '#ff9800' },
        { diagnostico: 'Síndrome del túnel carpiano', casos: 76, porcentaje: 19.4, color: '#2196f3' },
        { diagnostico: 'Tendinitis hombro', casos: 54, porcentaje: 13.8, color: '#9c27b0' },
        { diagnostico: 'Epicondilitis', casos: 36, porcentaje: 9.2, color: '#4caf50' },
    ];

    const totalCasos = diagnosticosData.reduce((sum, item) => sum + item.casos, 0);
    const totalTrabajadores = 450;
    const prevalenciaGeneral = (totalCasos / totalTrabajadores) * 100;

    const lumbalgiaPorDepartamento = [
        { departamento: 'Carga/Descarga', casos: 35 },
        { departamento: 'Soldadura', casos: 28 },
        { departamento: 'Mantenimiento', casos: 24 },
        { departamento: 'Producción', casos: 21 },
        { departamento: 'Almacén', casos: 19 },
    ];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Top 5 Diagnósticos Osteomusculares
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, sm: 4 }} >
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.light', borderRadius: 1, color: 'white' }}>
                            <MedicalServicesIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {totalCasos}
                            </Typography>
                            <Typography variant="caption">
                                Total Casos
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'warning.main', borderRadius: 1, color: 'white' }}>
                            <TrendingUpIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {prevalenciaGeneral.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                Prevalencia General
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'error.main', borderRadius: 1, color: 'white' }}>
                            <PersonIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {diagnosticosData[0].casos}
                            </Typography>
                            <Typography variant="caption">
                                Lumbalgia (Más común)
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <BarChart
                        colors={diagnosticosData.map(item => item.color)}
                        xAxis={[{
                            scaleType: 'band',
                            data: diagnosticosData.map(item => item.diagnostico)
                        }]}
                        series={[
                            {
                                label: 'Casos diagnosticados',
                                data: diagnosticosData.map(item => item.casos),
                            }
                        ]}
                        height={350}
                        margin={{ left: 60, right: 20, top: 20, bottom: 100 }}
                        slotProps={{
                            legend: {
                                direction: 'horizontal',
                                position: { vertical: 'bottom' },
                            },
                        }}
                    />
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Distribución por diagnóstico:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        {diagnosticosData.map((item, index) => (
                            <Chip
                                key={index}
                                label={`${item.diagnostico}: ${item.porcentaje}%`}
                                size="small"
                                sx={{
                                    bgcolor: item.color,
                                    color: 'white',
                                    '&:hover': { bgcolor: item.color }
                                }}
                                variant="filled"
                            />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Lumbalgia por departamento (casos):
                    </Typography>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                        {lumbalgiaPorDepartamento.map((dept, index) => (
                            <Grid size={{ xs: 6, sm: 4 }} key={index}>
                                <Box sx={{
                                    p: 1,
                                    bgcolor: 'grey.100',
                                    borderRadius: 1,
                                    textAlign: 'center',
                                    borderLeft: 4,
                                    borderLeftColor: 'error.main'
                                }}>
                                    <Typography variant="caption" color="text.secondary">
                                        {dept.departamento}
                                    </Typography>
                                    <Typography variant="h6" color="error.main" fontWeight="bold">
                                        {dept.casos}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Factores de riesgo principales:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label="Trabajo manual pesado"
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                        <Chip
                            label="Posturas prolongadas"
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                        <Chip
                            label="Movimientos repetitivos"
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Lumbalgia representa el 32.5% de todos los diagnósticos osteomusculares registrados
                </Typography>
            </CardContent>
        </Card>
    );
}
