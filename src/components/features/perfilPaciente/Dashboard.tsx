import { Grid, Typography, Box } from '@mui/material';
import { AlertasSeguimientos, CumplimientoProtocolos, IndiceSaludOcupacional, ResumenExamenesMedicos, TendenciasEvolucionSalud } from './dashboard/index';

export default function Dashboard() {

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
                    <AlertasSeguimientos />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <CumplimientoProtocolos />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <IndiceSaludOcupacional />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <ResumenExamenesMedicos />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <TendenciasEvolucionSalud />
                </Grid>
            </Grid>
        </Box>
    )
}