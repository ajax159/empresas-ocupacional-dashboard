import { Card, CardContent, Typography, Box, Grid, Stack, Chip } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CasosBradicardiaeTaquicardia() {
    const totalEKG = 320;
    const bradicardia = 28;
    const taquicardia = 45;
    const normal = totalEKG - bradicardia - taquicardia;

    const arritmiasPorDepartamento = [
        { departamento: 'Administración', bradicardia: 6, taquicardia: 8, normal: 38, total: 52 },
        { departamento: 'Producción', bradicardia: 8, taquicardia: 12, normal: 45, total: 65 },
        { departamento: 'Mantenimiento', bradicardia: 5, taquicardia: 9, normal: 34, total: 48 },
        { departamento: 'Soldadura', bradicardia: 4, taquicardia: 7, normal: 28, total: 39 },
        { departamento: 'Carga/Descarga', bradicardia: 3, taquicardia: 6, normal: 31, total: 40 },
        { departamento: 'Almacén', bradicardia: 2, taquicardia: 3, normal: 71, total: 76 },
    ];

    const departamentos = arritmiasPorDepartamento.map(item => item.departamento);

    const severidadBradicardia = [
        { tipo: 'Leve (50-59 bpm)', casos: 18, color: '#fbc02d' },
        { tipo: 'Moderada (40-49 bpm)', casos: 8, color: '#ff9800' },
        { tipo: 'Severa (<40 bpm)', casos: 2, color: '#f44336' }
    ];

    const severidadTaquicardia = [
        { tipo: 'Leve (100-120 bpm)', casos: 28, color: '#fbc02d' },
        { tipo: 'Moderada (120-150 bpm)', casos: 14, color: '#ff9800' },
        { tipo: 'Severa (>150 bpm)', casos: 3, color: '#f44336' }
    ];

    const dataPie = [
        { id: 0, value: normal, label: 'Normal (60-100 bpm)', color: '#4caf50' },
        { id: 1, value: bradicardia, label: 'Bradicardia (<60 bpm)', color: '#2196f3' },
        { id: 2, value: taquicardia, label: 'Taquicardia (>100 bpm)', color: '#f44336' }
    ];

    const porcentajeNormal = (normal / totalEKG) * 100;
    const porcentajeBradicardia = (bradicardia / totalEKG) * 100;
    const porcentajeTaquicardia = (taquicardia / totalEKG) * 100;

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Casos de Bradicardia y Taquicardia Detectados en EKG
                </Typography>

                {/* KPIs principales */}
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.main', borderRadius: 1, color: 'white' }}>
                            <MonitorHeartIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {totalEKG}
                            </Typography>
                            <Typography variant="caption">
                                Total EKG
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'info.main', borderRadius: 1, color: 'white' }}>
                            <HeartBrokenIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {bradicardia}
                            </Typography>
                            <Typography variant="caption">
                                Bradicardia
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'error.main', borderRadius: 1, color: 'white' }}>
                            <SpeedIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {taquicardia}
                            </Typography>
                            <Typography variant="caption">
                                Taquicardia
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'success.main', borderRadius: 1, color: 'white' }}>
                            <CheckCircleIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {porcentajeNormal.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                Normales
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución por Departamento:
                        </Typography>
                        <BarChart
                            xAxis={[{
                                scaleType: 'band',
                                data: departamentos
                            }]}
                            series={[
                                {
                                    label: 'Normal',
                                    data: arritmiasPorDepartamento.map(item => item.normal),
                                    color: '#4caf50'
                                },
                                {
                                    label: 'Bradicardia',
                                    data: arritmiasPorDepartamento.map(item => item.bradicardia),
                                    color: '#2196f3'
                                },
                                {
                                    label: 'Taquicardia',
                                    data: arritmiasPorDepartamento.map(item => item.taquicardia),
                                    color: '#f44336'
                                }
                            ]}
                            height={300}
                            margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                            slotProps={{
                                legend: {
                                    position: { vertical: 'bottom', horizontal: 'center' },
                                },
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución General:
                        </Typography>
                        <PieChart
                            series={[
                                {
                                    data: dataPie,
                                },
                            ]}
                            height={250}
                            slotProps={{
                                legend: {
                                    position: { vertical: 'bottom', horizontal: 'center' },
                                },
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Severidad de Bradicardia:
                        </Typography>
                        <Stack spacing={1}>
                            {severidadBradicardia.map((item, index) => (
                                <Box key={index} sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    p: 1.5,
                                    bgcolor: item.color,
                                    borderRadius: 1,
                                    color: 'white'
                                }}>
                                    <Typography variant="body2" fontWeight="medium">
                                        {item.tipo}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.casos}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Severidad de Taquicardia:
                        </Typography>
                        <Stack spacing={1}>
                            {severidadTaquicardia.map((item, index) => (
                                <Box key={index} sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    p: 1.5,
                                    bgcolor: item.color,
                                    borderRadius: 1,
                                    color: 'white'
                                }}>
                                    <Typography variant="body2" fontWeight="medium">
                                        {item.tipo}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.casos}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Departamentos con mayor incidencia de arritmias:
                    </Typography>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                        {arritmiasPorDepartamento
                            .sort((a, b) => ((b.bradicardia + b.taquicardia) / b.total) - ((a.bradicardia + a.taquicardia) / a.total))
                            .slice(0, 3)
                            .map((dept, index) => {
                                const porcentajeArritmias = ((dept.bradicardia + dept.taquicardia) / dept.total) * 100;
                                return (
                                    <Grid size={{ xs: 12, sm: 4 }} key={index}>
                                        <Box sx={{
                                            p: 2,
                                            bgcolor: porcentajeArritmias > 25 ? 'error.light' : 'warning.light',
                                            borderRadius: 1,
                                            textAlign: 'center',
                                            color: 'white'
                                        }}>
                                            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                                {dept.departamento}
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold">
                                                {dept.bradicardia + dept.taquicardia}/{dept.total}
                                            </Typography>
                                            <Typography variant="caption">
                                                {porcentajeArritmias.toFixed(1)}% arritmias
                                            </Typography>
                                        </Box>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Hallazgos principales:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label={`Bradicardia: ${porcentajeBradicardia.toFixed(1)}% de EKGs`}
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                        <Chip
                            label={`Taquicardia: ${porcentajeTaquicardia.toFixed(1)}% de EKGs`}
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                        <Chip
                            label={`${severidadBradicardia[2].casos + severidadTaquicardia[2].casos} casos severos`}
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                        <Chip
                            label="Seguimiento cardiológico requerido"
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    {((bradicardia + taquicardia) / totalEKG * 100).toFixed(1)}% de EKGs muestran arritmias que requieren seguimiento médico
                </Typography>
            </CardContent>
        </Card>
    );
}
