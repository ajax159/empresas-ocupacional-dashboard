import { Grid, Typography, Box } from '@mui/material';
import { AptitudOdontologicaLimitaciones, CalidadVidaOral, EstadoOralActual, EvolucionOralTemporal, RiesgosOcupacionalesOrales } from './odontologia/index';

export default function Odontologia() {

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
                    <AptitudOdontologicaLimitaciones />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <CalidadVidaOral />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <EstadoOralActual />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionOralTemporal />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <RiesgosOcupacionalesOrales />
                </Grid>
            </Grid>
        </Box>
    )
}