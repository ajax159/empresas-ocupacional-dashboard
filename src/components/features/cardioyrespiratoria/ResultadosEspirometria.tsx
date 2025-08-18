import { Card, CardContent, Typography, Box, Grid, Stack, Chip, LinearProgress } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';
import AirIcon from '@mui/icons-material/Air';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function ResultadosEspirometria() {
    const totalEspirometrias = 285;
    const normales = 198;
    const alteradas = 87;

    const tiposAlteracion = [
        { tipo: 'Patrón Obstructivo', casos: 42, color: '#f44336', descripcion: 'FEV1/FVC <70%' },
        { tipo: 'Patrón Restrictivo', casos: 28, color: '#ff9800', descripcion: 'CVF <80% predicho' },
        { tipo: 'Patrón Mixto', casos: 17, color: '#9c27b0', descripcion: 'Ambos patrones' }
    ];

    const espirometriasPorDepartamento = [
        { departamento: 'Soldadura', normales: 18, alteradas: 15, total: 33 },
        { departamento: 'Producción', normales: 45, alteradas: 23, total: 68 },
        { departamento: 'Mantenimiento', normales: 32, alteradas: 18, total: 50 },
        { departamento: 'Carga/Descarga', normales: 28, alteradas: 14, total: 42 },
        { departamento: 'Administración', normales: 48, alteradas: 8, total: 56 },
        { departamento: 'Almacén', normales: 27, alteradas: 9, total: 36 },
    ];

    const departamentos = espirometriasPorDepartamento.map(item => item.departamento);

    const severidadAlteraciones = [
        { grado: 'Leve (70-80% predicho)', casos: 52, color: '#fbc02d' },
        { grado: 'Moderada (50-69% predicho)', casos: 28, color: '#ff9800' },
        { grado: 'Severa (<50% predicho)', casos: 7, color: '#f44336' }
    ];

    const dataPie = [
        { id: 0, value: normales, label: 'Normal', color: '#4caf50' },
        { id: 1, value: alteradas, label: 'Alterada', color: '#f44336' }
    ];

    const porcentajeNormal = (normales / totalEspirometrias) * 100;
    const porcentajeAlterada = (alteradas / totalEspirometrias) * 100;

    const factoresRiesgo: { [key: string]: string[] } = {
        'Soldadura': ['Humos metálicos', 'Gases tóxicos', 'Partículas finas'],
        'Producción': ['Polvo industrial', 'Vapores químicos', 'Ruido constante'],
        'Mantenimiento': ['Asbesto residual', 'Solventes', 'Polvo de construcción'],
        'Carga/Descarga': ['Polvo de materiales', 'Esfuerzo físico', 'Exposición externa']
    };

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Resultados de Espirometría - Función Pulmonar
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.main', borderRadius: 1, color: 'white' }}>
                            <AirIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {totalEspirometrias}
                            </Typography>
                            <Typography variant="caption">
                                Total Espirometrías
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'success.main', borderRadius: 1, color: 'white' }}>
                            <CheckCircleIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {normales}
                            </Typography>
                            <Typography variant="caption">
                                Normales
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'error.main', borderRadius: 1, color: 'white' }}>
                            <WarningIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {alteradas}
                            </Typography>
                            <Typography variant="caption">
                                Alteradas
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'info.main', borderRadius: 1, color: 'white' }}>
                            <LocalHospitalIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {porcentajeNormal.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                Función Normal
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Resultados por Departamento:
                        </Typography>
                        <BarChart
                            xAxis={[{
                                scaleType: 'band',
                                data: departamentos
                            }]}
                            series={[
                                {
                                    label: 'Normal',
                                    data: espirometriasPorDepartamento.map(item => item.normales),
                                    color: '#4caf50'
                                },
                                {
                                    label: 'Alterada',
                                    data: espirometriasPorDepartamento.map(item => item.alteradas),
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

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Tipos de Alteraciones Detectadas:
                    </Typography>
                    <Stack spacing={2} sx={{ mt: 2 }}>
                        {tiposAlteracion.map((tipo, index) => {
                            const porcentaje = (tipo.casos / alteradas) * 100;
                            return (
                                <Box key={index}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" fontWeight="medium">
                                            {tipo.tipo}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {tipo.casos} casos ({porcentaje.toFixed(1)}%) - {tipo.descripcion}
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={porcentaje}
                                        sx={{
                                            height: 8,
                                            borderRadius: 4,
                                            bgcolor: 'grey.200',
                                            '& .MuiLinearProgress-bar': {
                                                bgcolor: tipo.color
                                            }
                                        }}
                                    />
                                </Box>
                            );
                        })}
                    </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Severidad de las Alteraciones:
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        {severidadAlteraciones.map((severidad, index) => (
                            <Grid size={{ xs: 12, sm: 4 }} key={index}>
                                <Box sx={{
                                    textAlign: 'center',
                                    p: 2,
                                    bgcolor: severidad.color,
                                    borderRadius: 1,
                                    color: 'white'
                                }}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {severidad.casos}
                                    </Typography>
                                    <Typography variant="caption">
                                        {severidad.grado}
                                    </Typography>
                                    <Typography variant="caption" sx={{ display: 'block' }}>
                                        {((severidad.casos / alteradas) * 100).toFixed(1)}% del total alterado
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Departamentos con Mayor Riesgo Respiratorio:
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        {espirometriasPorDepartamento
                            .sort((a, b) => (b.alteradas / b.total) - (a.alteradas / a.total))
                            .slice(0, 4)
                            .map((dept, index) => {
                                const porcentajeAlterado = (dept.alteradas / dept.total) * 100;
                                const riesgos = factoresRiesgo[dept.departamento] || ['Factores varios'];

                                return (
                                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                                        <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                                <Typography variant="subtitle2" fontWeight="bold" color="primary">
                                                    {dept.departamento}
                                                </Typography>
                                                <Typography variant="h6" color="error.main" fontWeight="bold">
                                                    {porcentajeAlterado.toFixed(1)}%
                                                </Typography>
                                            </Box>
                                            <Typography variant="caption" color="text.secondary">
                                                {dept.alteradas}/{dept.total} espirometrías alteradas
                                            </Typography>
                                            <Stack spacing={0.5} sx={{ mt: 1 }}>
                                                <Typography variant="caption" fontWeight="medium">
                                                    Factores de riesgo:
                                                </Typography>
                                                {riesgos.map((factor, fIndex) => (
                                                    <Typography key={fIndex} variant="caption" color="text.secondary">
                                                        • {factor}
                                                    </Typography>
                                                ))}
                                            </Stack>
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
                            label={`${porcentajeAlterada.toFixed(1)}% función pulmonar alterada`}
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                        <Chip
                            label={`${tiposAlteracion[0].casos} casos obstructivos`}
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                        <Chip
                            label={`${severidadAlteraciones[2].casos} casos severos`}
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                        <Chip
                            label="Soldadura: Mayor riesgo"
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    {porcentajeAlterada.toFixed(1)}% de trabajadores presentan alteraciones en función pulmonar - Seguimiento neumológico requerido
                </Typography>
            </CardContent>
        </Card>
    );
}
