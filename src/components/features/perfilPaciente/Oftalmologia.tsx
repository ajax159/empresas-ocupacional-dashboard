import { Grid, Typography, Box } from '@mui/material';
import {
    AgudezaVisualYVisionCercana,
    PresionOcularYCampoVisual,
    RefraccionYProteccion,
    EvolucionYHallazgos,
    RiesgosYAptitud
} from './oftalmologia/index';

export default function Oftalmologia() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Evaluación Oftalmológica Ocupacional
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Exámenes especializados de salud visual para trabajadores expuestos a riesgos oculares
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <AgudezaVisualYVisionCercana />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <PresionOcularYCampoVisual />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <RefraccionYProteccion />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <EvolucionYHallazgos />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <RiesgosYAptitud />
                </Grid>
            </Grid>
        </Box>
    );
}
