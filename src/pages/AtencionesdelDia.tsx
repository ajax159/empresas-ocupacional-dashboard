import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AtencionesTiempoReal from '../components/features/atenciones/AtencionesTiempoReal';
import TiempoAtencionChart from '../components/features/atenciones/TiempoAtencionChart';

export default function AtencionesdelDia() {

    return (
        <Box sx={{ width: '100%' }}>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Atenciones del Día
            </Typography>
            <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    <AtencionesTiempoReal />
                </Grid>
            </Grid>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Tiempo de recorrido
            </Typography>
            <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12 }}>
                    <TiempoAtencionChart />
                </Grid>
            </Grid>
        </Box>
    )
}