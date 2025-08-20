import { Card, CardContent, Typography, Box, Grid, Chip, Avatar } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { LocalHospital, Healing, Psychology, FitnessCenter } from '@mui/icons-material';

const historiaClinicaData = [
    { año: 2018, cirugiasGenerales: 2, cirugiasOcupacionales: 0, hospitalizaciones: 1 },
    { año: 2019, cirugiasGenerales: 1, cirugiasOcupacionales: 1, hospitalizaciones: 0 },
    { año: 2020, cirugiasGenerales: 0, cirugiasOcupacionales: 0, hospitalizaciones: 2 },
    { año: 2021, cirugiasGenerales: 3, cirugiasOcupacionales: 1, hospitalizaciones: 1 },
    { año: 2022, cirugiasGenerales: 1, cirugiasOcupacionales: 0, hospitalizaciones: 0 },
    { año: 2023, cirugiasGenerales: 2, cirugiasOcupacionales: 2, hospitalizaciones: 1 },
];

const riesgosLaboralesData = [
    { riesgo: 'Químico', exposicion: 85, severidad: 'alta', icon: '🧪' },
    { riesgo: 'Físico', exposicion: 60, severidad: 'media', icon: '🔊' },
    { riesgo: 'Biológico', exposicion: 25, severidad: 'baja', icon: '🦠' },
    { riesgo: 'Ergonómico', exposicion: 95, severidad: 'alta', icon: '💺' },
];

export default function HistoriaClinicaYRiesgos() {
    const años = historiaClinicaData.map(item => item.año);
    const cirugiasGenerales = historiaClinicaData.map(item => item.cirugiasGenerales);
    const cirugiasOcupacionales = historiaClinicaData.map(item => item.cirugiasOcupacionales);
    const hospitalizaciones = historiaClinicaData.map(item => item.hospitalizaciones);

    const getSeverityColor = (severidad: string) => {
        switch (severidad) {
            case 'alta': return 'error';
            case 'media': return 'warning';
            case 'baja': return 'success';
            default: return 'default';
        }
    };

    const getIconByRisk = (riesgo: string) => {
        switch (riesgo) {
            case 'Químico': return <LocalHospital />;
            case 'Físico': return <FitnessCenter />;
            case 'Biológico': return <Healing />;
            case 'Ergonómico': return <Psychology />;
            default: return <LocalHospital />;
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Historia Clínica y Riesgos Laborales
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Historia Clínica (2018-2023)
                        </Typography>
                        <Box sx={{ height: 220 }}>
                            <LineChart
                                width={400}
                                height={220}
                                series={[
                                    {
                                        data: cirugiasGenerales,
                                        label: 'Cirugías Generales',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: cirugiasOcupacionales,
                                        label: 'Cirugías Ocupacionales',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: hospitalizaciones,
                                        label: 'Hospitalizaciones',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Riesgos Laborales
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {riesgosLaboralesData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Avatar sx={{ width: 24, height: 24, mr: 1, fontSize: '0.8rem' }}>
                                            {getIconByRisk(item.riesgo)}
                                        </Avatar>
                                        <Typography variant="body2" sx={{ flexGrow: 1 }}>
                                            {item.riesgo}
                                        </Typography>
                                        <Chip
                                            label={`${item.exposicion}%`}
                                            color={getSeverityColor(item.severidad)}
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{
                                        width: '100%',
                                        height: 8,
                                        bgcolor: 'grey.200',
                                        borderRadius: 1,
                                        overflow: 'hidden'
                                    }}>
                                        <Box sx={{
                                            width: `${item.exposicion}%`,
                                            height: '100%',
                                            bgcolor: item.severidad === 'alta' ? 'error.main' :
                                                item.severidad === 'media' ? 'warning.main' : 'success.main',
                                            borderRadius: 1,
                                        }} />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                        * Datos basados en declaraciones del trabajador en exámenes médicos anuales
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
