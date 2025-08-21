import { Grid, Typography, Box } from '@mui/material';
import { AptitudAuditivaLimitaciones, CalidadAuditivaImpacto, EstadoAuditivoActual, EvolucionAuditivaTemporal, ExposicionRuidoOcupacional } from './audiometria/index';

export default function Audiometria() {

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
                    <AptitudAuditivaLimitaciones />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <CalidadAuditivaImpacto />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <EstadoAuditivoActual />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionAuditivaTemporal />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <ExposicionRuidoOcupacional />
                </Grid>
            </Grid>
        </Box>
    )
}