import { Grid, Box } from '@mui/material';
import {
    EvolucionAudiogram,
    ExposicionRuidoTemporal,
    SintomasEvolucionTemporal,
    HistorialDiagnosticos,
    AntecedentesFactoresRiesgo
} from './audiometria/index';

export default function Audiometria() {

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    <EvolucionAudiogram />
                </Grid>

                <Grid size={{ xs: 12, lg: 12 }}>
                    <ExposicionRuidoTemporal />
                </Grid>

                <Grid size={{ xs: 12, lg: 12 }}>
                    <SintomasEvolucionTemporal />
                </Grid>

                <Grid size={{ xs: 12, lg: 12 }}>
                    <HistorialDiagnosticos />
                </Grid>

                <Grid size={{ xs: 12, lg: 12 }}>
                    <AntecedentesFactoresRiesgo />
                </Grid>
            </Grid>
        </Box>
    )
}