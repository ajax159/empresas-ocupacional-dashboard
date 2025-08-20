import { Grid, Typography, Box } from '@mui/material';
import {
    PresionArterialYRiesgoCardiovascular,
    ElectrocardiogramaYRitmo,
    PruebaEsfuerzoYCapacidadFisica,
    EvolucionCardiovascular,
    AptitudLaboralYRestricciones
} from './cardiologia/index';

export default function Cardiologia() {
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
                    <PresionArterialYRiesgoCardiovascular />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <ElectrocardiogramaYRitmo />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <PruebaEsfuerzoYCapacidadFisica />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionCardiovascular />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <AptitudLaboralYRestricciones />
                </Grid>
            </Grid>
        </Box>
    );
}
