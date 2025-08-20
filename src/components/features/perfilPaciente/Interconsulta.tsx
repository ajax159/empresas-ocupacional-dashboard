import { Box, Grid, Paper } from '@mui/material';
import {
    InterconsultasPorEspecialidad,
    TendenciaInterconsultas,
    EstadoInterconsultas,
    HistorialInterconsultas,
    KPIsInterconsultas
} from './interconsulta/index'; export default function Interconsulta() {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ mb: 3 }}>
                <KPIsInterconsultas />
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <InterconsultasPorEspecialidad />
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <TendenciaInterconsultas />
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <EstadoInterconsultas />
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <HistorialInterconsultas />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}