import { Grid, Typography, Box } from '@mui/material';
import {
    HemogramaYBioquimica,
    ToxicologiaYBiomarcadores,
    EvolucionLaboratorio,
    AlertasYSeguimiento,
    PerfilOcupacional
} from './laboratorio/index';

export default function Laboratorio() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Exámenes de Laboratorio Ocupacional
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Monitoreo continuo de biomarcadores y parámetros de salud ocupacional
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <HemogramaYBioquimica />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <ToxicologiaYBiomarcadores />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionLaboratorio />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <AlertasYSeguimiento />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <PerfilOcupacional />
                </Grid>
            </Grid>
        </Box>
    );
}