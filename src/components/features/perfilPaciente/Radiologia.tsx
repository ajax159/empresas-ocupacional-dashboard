import { Grid, Typography, Box } from '@mui/material';
import { AptitudRadiologicaLimitaciones, EstadiosRadiologicosActuales, InterpretacionHallazgosRadiologicos, EvolucionRadiologicaTemporal, ExposicionRadiacionOcupacional } from './radiologia/index';

export default function Radiologia() {

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
                    <AptitudRadiologicaLimitaciones />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EstadiosRadiologicosActuales />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <InterpretacionHallazgosRadiologicos />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionRadiologicaTemporal />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <ExposicionRadiacionOcupacional />
                </Grid>
            </Grid>
        </Box>
    )
}