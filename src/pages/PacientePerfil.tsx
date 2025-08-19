import { Box, Paper, Typography, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { HeaderPerfil } from '../components/features/perfilPaciente';

export default function PacientePerfil() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Perfil del trabajador
            </Typography>
            <Paper sx={{ p: { xs: 1, sm: 2 }, mb: 2 }}>
                <HeaderPerfil />
            </Paper>
            <Paper sx={{ p: { xs: 1, sm: 2 }, mb: 2 }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="Dashboard" />
                    <Tab label="Interconsulta" />
                    <Tab label="Ficha Medica" />
                    <Tab label="Historia Ocupacional" />
                    <Tab label="Laboratorio" />
                    <Tab label="Oftalmologia" />
                    <Tab label="Cardiologia" />
                    <Tab label="Espirometria" />
                    <Tab label="Osteomuscular" />
                    <Tab label="Radiologia" />
                    <Tab label="Audiometria" />
                    <Tab label="Psicologia" />
                    <Tab label="Odontologia" />
                </Tabs>
            </Paper>
        </Box>
    )
}