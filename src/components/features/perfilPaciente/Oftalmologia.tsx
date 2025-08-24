import { Grid, Typography, Box } from '@mui/material';
import AntecedentesOftalmologicos from './oftalmologia/AntecedentesOftalmologicos';
import AgudezaVisualLentes from './oftalmologia/AgudezaVisualLentes';
import ExploracionClinica from './oftalmologia/ExploracionClinica';
import HallazgosOculares from './oftalmologia/HallazgosOculares';
import ConclusionesObservaciones from './oftalmologia/ConclusionesObservaciones';
import { mockDatosOftalmologicos } from '../../../mock/oftalmologia.mock';

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
                    <AntecedentesOftalmologicos datos={mockDatosOftalmologicos} />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <AgudezaVisualLentes datos={mockDatosOftalmologicos} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <ExploracionClinica datos={mockDatosOftalmologicos} />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <HallazgosOculares datos={mockDatosOftalmologicos} />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <ConclusionesObservaciones datos={mockDatosOftalmologicos} />
                </Grid>
            </Grid>
        </Box>
    );
}
