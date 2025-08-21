import { Grid, Typography, Box } from '@mui/material';
import {
    AptitudLaboralRestriccionesOsteomuscular,
    EvaluacionPosturalActual,
    EvolucionOsteomuscularTemporal,
    FactoresRiesgoErgonomicos,
    SintomatologiaLimitacionesFuncionales,
} from './osteomuscular/index';

export default function Osteomuscular() {

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
                    <AptitudLaboralRestriccionesOsteomuscular />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvaluacionPosturalActual />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <EvolucionOsteomuscularTemporal />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <FactoresRiesgoErgonomicos />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <SintomatologiaLimitacionesFuncionales />
                </Grid>
            </Grid>
        </Box>
    )
}