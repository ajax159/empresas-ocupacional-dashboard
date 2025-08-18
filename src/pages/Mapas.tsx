import Grid from '@mui/material/Grid';
import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    Paper
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Dayjs } from 'dayjs';
import { MapaCalorDiagnosticos, MapaGeograficoSedes } from '../components/features/mapas';

export default function Mapas() {

    const [fechaInicio, setFechaInicio] = useState<Dayjs | undefined>(undefined);
    const [fechaFin, setFechaFin] = useState<Dayjs | undefined>(undefined);

    const handleFechaDesdeChange = (newValue: Dayjs | null) => {
        setFechaInicio(newValue || undefined);
    };

    const handleFechaFinChange = (newValue: Dayjs | null) => {
        setFechaFin(newValue || undefined);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Salud Auditiva
            </Typography>
            <Paper sx={{ p: { xs: 1, sm: 2 }, mb: 2 }}>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <FilterListIcon color="primary" />
                        <Typography variant="h6" component="h2" sx={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}>
                            Periodo
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        spacing={2}
                        alignItems={{ xs: 'stretch', md: 'flex-end' }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Fecha Inicio"
                                value={fechaInicio}
                                onChange={handleFechaDesdeChange}
                                format="DD/MM/YYYY"
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        sx: {
                                            flex: { xs: 1, md: 1 },
                                            minWidth: { xs: '100%', md: 150 }
                                        }
                                    }
                                }}
                            />
                        </LocalizationProvider>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Fecha Fin"
                                value={fechaFin}
                                onChange={handleFechaFinChange}
                                format="DD/MM/YYYY"
                                minDate={fechaInicio}
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        sx: {
                                            flex: { xs: 1, md: 1 },
                                            minWidth: { xs: '100%', md: 150 }
                                        }
                                    }
                                }}
                            />
                        </LocalizationProvider>
                    </Stack>
                </Stack>
            </Paper>
            <Grid container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, md: 12 }}>
                    <MapaCalorDiagnosticos />
                </Grid>
            </Grid>
            <Grid container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, md: 12 }}>
                    <MapaGeograficoSedes />
                </Grid>
            </Grid>
            <Grid container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, md: 12 }}>

                </Grid>
            </Grid>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Salud Visual
            </Typography>
            <Grid container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, md: 12 }}>

                </Grid>
            </Grid>
            <Grid container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, md: 12 }}>

                </Grid>
            </Grid>
        </Box >
    )
}