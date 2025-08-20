import { Grid, Typography, Box } from '@mui/material';
import {
    SegurosYHorarios,
    VacunasYAgentes,
    HabitosYPatologias,
    HistoriaClinicaYRiesgos,
    AntecedentesReproductivosYFamiliares
} from './antecedentes/index';

export default function Antecedentes() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Antecedentes del Trabajador
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Información declarada por el trabajador en exámenes médicos ocupacionales anuales
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <SegurosYHorarios />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <VacunasYAgentes />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <HabitosYPatologias />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <HistoriaClinicaYRiesgos />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <AntecedentesReproductivosYFamiliares />
                </Grid>
            </Grid>
        </Box>
    );
}