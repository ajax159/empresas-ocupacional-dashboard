import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Atenciones() {

    return (
        <Box sx={{ width: '100%' }}>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Atenciones
            </Typography>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}
            >
                <Grid size={{ xs: 12, md: 6 }}>

                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>

                </Grid>
            </Grid>
        </Box>
    )
}