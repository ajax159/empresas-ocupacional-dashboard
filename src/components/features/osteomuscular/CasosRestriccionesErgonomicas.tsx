import { Card, CardContent, Typography, Box, Grid, Stack, Chip, LinearProgress } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';

export default function CasosRestriccionesErgonomicas() {
    const totalTrabajadores = 450;
    const casosConRestriccion = 89;
    const porcentajeRestriccion = (casosConRestriccion / totalTrabajadores) * 100;

    const tiposRestriccion = [
        { tipo: 'Sin levantamiento >10kg', casos: 35, color: '#f44336' },
        { tipo: 'Trabajo en alturas restringido', casos: 22, color: '#ff9800' },
        { tipo: 'Sin movimientos repetitivos', casos: 18, color: '#2196f3' },
        { tipo: 'Pausas ergonómicas frecuentes', casos: 14, color: '#9c27b0' },
    ];

    const restriccionesPorDepartamento = [
        { departamento: 'Carga/Descarga', total: 45, conRestriccion: 18, porcentaje: 40.0 },
        { departamento: 'Soldadura', total: 38, conRestriccion: 15, porcentaje: 39.5 },
        { departamento: 'Mantenimiento', total: 65, conRestriccion: 21, porcentaje: 32.3 },
        { departamento: 'Producción', total: 120, conRestriccion: 25, porcentaje: 20.8 },
        { departamento: 'Administración', total: 95, conRestriccion: 6, porcentaje: 6.3 },
        { departamento: 'Almacén', total: 87, conRestriccion: 4, porcentaje: 4.6 },
    ];

    const ausentismoReducido = 15.8;
    const productividadMejorada = 12.3;
    const cumplimientoRestriccion = 94.4;

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Casos con Restricciones Ergonómicas
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, sm: 3 }} >
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'warning.main', borderRadius: 1, color: 'white' }}>
                            <AccessibleIcon sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" fontWeight="bold">
                                {casosConRestriccion}
                            </Typography>
                            <Typography variant="caption">
                                Con Restricciones
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'error.main', borderRadius: 1, color: 'white' }}>
                            <WarningIcon sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" fontWeight="bold">
                                {porcentajeRestriccion.toFixed(1)}%
                            </Typography>
                            <Typography variant="caption">
                                % del Total
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'success.main', borderRadius: 1, color: 'white' }}>
                            <AssignmentIcon sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" fontWeight="bold">
                                {cumplimientoRestriccion}%
                            </Typography>
                            <Typography variant="caption">
                                Cumplimiento
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'info.main', borderRadius: 1, color: 'white' }}>
                            <TrendingUpIcon sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" fontWeight="bold">
                                -{ausentismoReducido}%
                            </Typography>
                            <Typography variant="caption">
                                Ausentismo
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                Cumplimiento de Restricciones
                            </Typography>
                            <Gauge
                                value={cumplimientoRestriccion}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 24,
                                        transform: 'translate(0px, 0px)',
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: '#4caf50',
                                    },
                                }}
                                height={180}
                                text={({ value }) => value !== null ? `${value.toFixed(1)}%` : '0.0%'}
                            />
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                Mejora en Productividad
                            </Typography>
                            <Gauge
                                value={productividadMejorada}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 24,
                                        transform: 'translate(0px, 0px)',
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: '#2196f3',
                                    },
                                }}
                                height={180}
                                text={({ value }) => value !== null ? `${value.toFixed(1)}%` : '0.0%'}
                                valueMax={25}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Tipos de Restricciones Más Comunes:
                    </Typography>
                    <Stack spacing={2} sx={{ mt: 2 }}>
                        {tiposRestriccion.map((restriccion, index) => {
                            const porcentaje = (restriccion.casos / casosConRestriccion) * 100;
                            return (
                                <Box key={index}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" fontWeight="medium">
                                            {restriccion.tipo}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {restriccion.casos} casos ({porcentaje.toFixed(1)}%)
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
                                                bgcolor: restriccion.color
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
                        Distribución por Departamento:
                    </Typography>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                        {restriccionesPorDepartamento.map((dept, index) => {
                            const colorRiesgo = dept.porcentaje > 30 ? 'error' :
                                dept.porcentaje > 15 ? 'warning' : 'success';
                            return (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <Box sx={{
                                        p: 2,
                                        bgcolor: `${colorRiesgo}.light`,
                                        borderRadius: 1,
                                        textAlign: 'center',
                                        color: 'white'
                                    }}>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {dept.departamento}
                                        </Typography>
                                        <Typography variant="h6" fontWeight="bold">
                                            {dept.conRestriccion}/{dept.total}
                                        </Typography>
                                        <Typography variant="caption">
                                            {dept.porcentaje.toFixed(1)}%
                                        </Typography>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Beneficios de las restricciones ergonómicas:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label={`Reducción ausentismo: ${ausentismoReducido}%`}
                            size="small"
                            color="success"
                            variant="outlined"
                        />
                        <Chip
                            label={`Mejora productividad: +${productividadMejorada}%`}
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                        <Chip
                            label="Menor riesgo de recaídas"
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                        <Chip
                            label="Mayor satisfacción laboral"
                            size="small"
                            color="secondary"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    19.8% de trabajadores tienen restricciones ergonómicas activas con 94.4% de cumplimiento
                </Typography>
            </CardContent>
        </Card>
    );
}
