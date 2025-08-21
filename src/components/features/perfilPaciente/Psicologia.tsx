import { Grid, Box } from '@mui/material';
import { AptitudPsicologicaLimitaciones, CapacidadMentalRendimientoLaboral, EvaluacionPsicologicaActual, EvolucionPsicologicaTemporal, FactoresPsicosocialesEstres } from './psicologia/index';

export default function Psicologia() {

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    <AptitudPsicologicaLimitaciones />
                </Grid>

                <Grid size={{ xs: 12, lg: 12 }}>
                    <CapacidadMentalRendimientoLaboral />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <EvaluacionPsicologicaActual />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionPsicologicaTemporal />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <FactoresPsicosocialesEstres />
                </Grid>
            </Grid>
        </Box>
    )
}