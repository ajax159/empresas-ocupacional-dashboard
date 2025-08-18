import { Card, CardContent, Typography, Box, Grid, Stack, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import WarningIcon from '@mui/icons-material/Warning';

export default function PrevalenciaHipertension() {
    const hipertensionData = [
        { departamento: 'Administración', controlada: 18, noControlada: 7, total: 25 },
        { departamento: 'Producción', controlada: 22, noControlada: 15, total: 37 },
        { departamento: 'Mantenimiento', controlada: 16, noControlada: 12, total: 28 },
        { departamento: 'Soldadura', controlada: 12, noControlada: 9, total: 21 },
        { departamento: 'Carga/Descarga', controlada: 14, noControlada: 11, total: 25 },
        { departamento: 'Almacén', controlada: 19, noControlada: 8, total: 27 },
    ];

    const departamentos = hipertensionData.map(item => item.departamento);
    const totalCasos = hipertensionData.reduce((sum, item) => sum + item.total, 0);
    const totalControlada = hipertensionData.reduce((sum, item) => sum + item.controlada, 0);
    const totalNoControlada = hipertensionData.reduce((sum, item) => sum + item.noControlada, 0);

    const porcentajeControlada = (totalControlada / totalCasos) * 100;
    const porcentajeNoControlada = (totalNoControlada / totalCasos) * 100;
    const totalTrabajadores = 450;
    const prevalenciaGeneral = (totalCasos / totalTrabajadores) * 100;

    const hipertensionPorEdad = [
        { rango: '20-30 años', casos: 8, prevalencia: 6.4 },
        { rango: '31-40 años', casos: 25, prevalencia: 18.2 },
        { rango: '41-50 años', casos: 52, prevalencia: 35.6 },
        { rango: '51-60 años', casos: 68, prevalencia: 48.9 },
        { rango: '60+ años', casos: 10, prevalencia: 71.4 },
    ];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Prevalencia de Hipertensión Arterial por Control
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.main', borderRadius: 1, color: 'white' }}>
                            <FavoriteIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {totalCasos}
                            </Typography>
                            <Typography variant="caption">
                                Total Casos
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'success.main', borderRadius: 1, color: 'white' }}>
                            <MonitorHeartIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {porcentajeControlada.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                Controlada
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'error.main', borderRadius: 1, color: 'white' }}>
                            <WarningIcon sx={{ fontSize: 35, mb: 1 }} />
                            <Typography variant="h5" fontWeight="bold">
                                {porcentajeNoControlada.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                No Controlada
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'warning.main', borderRadius: 1, color: 'white' }}>
                            <Typography variant="h5" fontWeight="bold">
                                {prevalenciaGeneral.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                Prevalencia General
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <BarChart
                        xAxis={[{
                            scaleType: 'band',
                            data: departamentos
                        }]}
                        series={[
                            {
                                label: 'Controlada (<140/90 mmHg)',
                                data: hipertensionData.map(item => item.controlada),
                                color: '#4caf50'
                            },
                            {
                                label: 'No Controlada (≥140/90 mmHg)',
                                data: hipertensionData.map(item => item.noControlada),
                                color: '#f44336'
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
                        Control por departamento:
                    </Typography>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                        {hipertensionData.map((dept, index) => {
                            const porcentajeControl = (dept.controlada / dept.total) * 100;
                            const colorControl = porcentajeControl >= 70 ? 'success' :
                                porcentajeControl >= 50 ? 'warning' : 'error';
                            return (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <Box sx={{
                                        p: 1.5,
                                        bgcolor: `${colorControl}.light`,
                                        borderRadius: 1,
                                        textAlign: 'center',
                                        color: 'white'
                                    }}>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {dept.departamento}
                                        </Typography>
                                        <Typography variant="h6" fontWeight="bold">
                                            {dept.controlada}/{dept.total}
                                        </Typography>
                                        <Typography variant="caption">
                                            {porcentajeControl.toFixed(1)}% control
                                        </Typography>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Prevalencia por grupo etario:
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 1 }}>
                        {hipertensionPorEdad.map((grupo, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 1,
                                bgcolor: 'grey.100',
                                borderRadius: 1
                            }}>
                                <Typography variant="body2" fontWeight="medium">
                                    {grupo.rango}
                                </Typography>
                                <Box sx={{ textAlign: 'right' }}>
                                    <Typography variant="body2" color="primary" fontWeight="bold">
                                        {grupo.casos} casos
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {grupo.prevalencia}% prevalencia
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Estado del control de hipertensión:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label={`Controlada: ${totalControlada} casos (${porcentajeControlada.toFixed(1)}%)`}
                            size="small"
                            color="success"
                            variant="outlined"
                        />
                        <Chip
                            label={`No controlada: ${totalNoControlada} casos (${porcentajeNoControlada.toFixed(1)}%)`}
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                        <Chip
                            label="Meta: >80% controlados"
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    {porcentajeControlada.toFixed(1)}% de casos con hipertensión mantienen control adecuado de presión arterial
                </Typography>
            </CardContent>
        </Card>
    );
}
