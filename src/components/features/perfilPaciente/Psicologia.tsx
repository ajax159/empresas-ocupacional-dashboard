import { Grid, Box } from '@mui/material';
import { CapacidadMentalRendimientoLaboral, EvaluacionPsicologicaActual } from './psicologia/index';

export default function Psicologia() {

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    <CapacidadMentalRendimientoLaboral />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <EvaluacionPsicologicaActual />
                </Grid>
            </Grid>
        </Box>
    )
}