import { Grid, Typography, Box } from '@mui/material';
import {
    AptitudLaboralRestricciones,
    EvolucionEspirometricaTemporal,
    ExposicionesLaboralesRespiratorias,
    IndicadoresSaludRespiratoria,
    ParametrosEspirometricosActuales
} from './espirometria/index';

export default function Espirometria() {

    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Evaluación Cardiológica Ocupacional
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Evaluación cardiovascular integral para determinar aptitud laboral y riesgos ocupacionales
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <AptitudLaboralRestricciones />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionEspirometricaTemporal />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <ExposicionesLaboralesRespiratorias />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <IndicadoresSaludRespiratoria />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <ParametrosEspirometricosActuales />
                </Grid>
            </Grid>
        </Box>
    )
}