import { Grid, Box } from '@mui/material';
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
