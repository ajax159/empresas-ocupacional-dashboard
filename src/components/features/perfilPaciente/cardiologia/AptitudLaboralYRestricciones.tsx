import { Card, CardContent, Typography, Box, Grid, Chip, Avatar } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { FitnessCenter, Work, LocalHospital, CheckCircle } from '@mui/icons-material';

const aptitudFisicaData = [
    { categoria: 'Trabajo Ligero', apto: 95, conRestricciones: 3, noApto: 2 },
    { categoria: 'Trabajo Moderado', apto: 88, conRestricciones: 8, noApto: 4 },
    { categoria: 'Trabajo Pesado', apto: 75, conRestricciones: 15, noApto: 10 },
    { categoria: 'Trabajo en Altura', apto: 82, conRestricciones: 12, noApto: 6 }
];

const clasificacionesData = [
    {
        clasificacion: 'Apto Sin Restricciones',
        porcentaje: 85,
        descripcion: 'Todas las actividades laborales',
        icono: <CheckCircle />,
        color: 'success'
    },
    {
        clasificacion: 'Apto Con Restricciones',
        porcentaje: 12,
        descripcion: 'Limitaciones específicas',
        icono: <Work />,
        color: 'warning'
    },
    {
        clasificacion: 'No Apto Temporal',
        porcentaje: 2,
        descripcion: 'Reevaluación en 6 meses',
        icono: <LocalHospital />,
        color: 'error'
    },
    {
        clasificacion: 'No Apto Definitivo',
        porcentaje: 1,
        descripcion: 'Contraindicación absoluta',
        icono: <FitnessCenter />,
        color: 'error'
    }
];

const restriccionesEspecificasData = [
    { restriccion: 'Evitar esfuerzos máximos', frecuencia: 8 },
    { restriccion: 'No trabajos en altura', frecuencia: 5 },
    { restriccion: 'Limitación horaria', frecuencia: 3 },
    { restriccion: 'Control médico frecuente', frecuencia: 6 },
    { restriccion: 'Pausas programadas', frecuencia: 4 }
];

export default function AptitudLaboralYRestricciones() {
    const categorias = aptitudFisicaData.map(item => item.categoria);
    const aptos = aptitudFisicaData.map(item => item.apto);
    const restricciones = aptitudFisicaData.map(item => item.conRestricciones);
    const noAptos = aptitudFisicaData.map(item => item.noApto);

    const getColorByType = (color: string) => {
        switch (color) {
            case 'success': return 'success.main';
            case 'warning': return 'warning.main';
            case 'error': return 'error.main';
            default: return 'info.main';
        }
    };

    const getChipColor = (color: string) => {
        switch (color) {
            case 'success': return 'success';
            case 'warning': return 'warning';
            case 'error': return 'error';
            default: return 'info';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Aptitud Laboral y Restricciones
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={7}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aptitud por Tipo de Trabajo
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    { data: aptos, label: 'Apto (%)', color: '#4caf50' },
                                    { data: restricciones, label: 'Con Restricciones (%)', color: '#ff9800' },
                                    { data: noAptos, label: 'No Apto (%)', color: '#f44336' },
                                ]}
                                xAxis={[{ data: categorias, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={5}>
                        <Typography variant="subtitle2" gutterBottom>
                            Clasificaciones Médicas
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {clasificacionesData.map((item, index) => (
                                <Box key={index} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1.5,
                                    p: 1,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1
                                }}>
                                    <Avatar sx={{
                                        width: 32,
                                        height: 32,
                                        mr: 1.5,
                                        bgcolor: getColorByType(item.color)
                                    }}>
                                        {item.icono}
                                    </Avatar>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', fontSize: '0.85rem' }}>
                                            {item.clasificacion}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.descripcion}
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={`${item.porcentaje}%`}
                                        color={getChipColor(item.color)}
                                        size="small"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Restricciones Específicas Más Frecuentes
                    </Typography>
                    <Grid container spacing={1}>
                        {restriccionesEspecificasData.map((item, index) => (
                            <Grid key={index} size={4}>
                                <Box sx={{
                                    p: 1.5,
                                    bgcolor: 'warning.light',
                                    borderRadius: 1,
                                    textAlign: 'center',
                                    minHeight: 60,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
                                        {item.restriccion}
                                    </Typography>
                                    <Typography variant="h6" color="warning.contrastText">
                                        {item.frecuencia}%
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        ✅ 85% de trabajadores aptos sin restricciones | Evaluación cardiovascular satisfactoria
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
