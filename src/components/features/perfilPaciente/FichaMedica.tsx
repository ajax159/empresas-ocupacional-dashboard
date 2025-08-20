import { Box, Typography, Grid, Paper } from '@mui/material';
import {
    TriajeEvolucion,
    DiagnosticosPorCategoria,
    ConsultasMedicasAnuales,
    IndicadoresFichaMedica,
    HistorialMedicoReciente
} from './fichaMedica/index';

export default function FichaMedica() {
    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Ficha Médica Ocupacional
            </Typography>

            <Box sx={{ mb: 3 }}>
                <IndicadoresFichaMedica />
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <TriajeEvolucion />
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <DiagnosticosPorCategoria />
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <ConsultasMedicasAnuales />
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Paper sx={{ p: 0, height: 400 }}>
                        <HistorialMedicoReciente />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}