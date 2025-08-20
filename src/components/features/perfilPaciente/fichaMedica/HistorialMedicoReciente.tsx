import { Card, CardContent, Typography, List, ListItem, ListItemText, Avatar, Chip, Box } from '@mui/material';
import { CheckCircle, Warning, Error, Schedule } from '@mui/icons-material';

const historial = [
    {
        id: 1,
        fecha: '2024-08-15',
        tipo: 'Consulta General',
        diagnostico: 'Hipertensión Ocupacional',
        estado: 'completado',
        medico: 'Dr. García',
        tratamiento: 'Medicación y seguimiento',
    },
    {
        id: 2,
        fecha: '2024-08-10',
        tipo: 'Examen Periódico',
        diagnostico: 'Exposición a Ruido',
        estado: 'pendiente',
        medico: 'Dra. Martínez',
        tratamiento: 'Audiometría de control',
    },
    {
        id: 3,
        fecha: '2024-08-05',
        tipo: 'Emergencia',
        diagnostico: 'Lesión Lumbar',
        estado: 'critico',
        medico: 'Dr. López',
        tratamiento: 'Reposo y fisioterapia',
    },
    {
        id: 4,
        fecha: '2024-07-28',
        tipo: 'Seguimiento',
        diagnostico: 'Dermatitis de Contacto',
        estado: 'completado',
        medico: 'Dra. Rodríguez',
        tratamiento: 'Cremas tópicas',
    },
    {
        id: 5,
        fecha: '2024-07-20',
        tipo: 'Consulta Especializada',
        diagnostico: 'Fatiga Crónica',
        estado: 'en_proceso',
        medico: 'Dr. Fernández',
        tratamiento: 'Estudios complementarios',
    },
];

const getEstadoIcon = (estado: string) => {
    switch (estado) {
        case 'completado':
            return <CheckCircle color="success" />;
        case 'pendiente':
            return <Schedule color="warning" />;
        case 'critico':
            return <Error color="error" />;
        case 'en_proceso':
            return <Warning color="info" />;
        default:
            return <Schedule />;
    }
};

const getEstadoColor = (estado: string) => {
    switch (estado) {
        case 'completado':
            return 'success';
        case 'pendiente':
            return 'warning';
        case 'critico':
            return 'error';
        case 'en_proceso':
            return 'info';
        default:
            return 'default';
    }
};

export default function HistorialMedicoReciente() {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Historial Médico Reciente
                </Typography>

                <List sx={{ maxHeight: 400, overflow: 'auto' }}>
                    {historial.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                mb: 1,
                                bgcolor: 'background.paper',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', mb: 1 }}>
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    {getEstadoIcon(item.estado)}
                                </Avatar>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle2">{item.tipo}</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {item.fecha} - {item.medico}
                                    </Typography>
                                </Box>
                                <Chip
                                    label={item.estado.replace('_', ' ').charAt(0).toUpperCase() + item.estado.slice(1)}
                                    color={getEstadoColor(item.estado)}
                                    size="small"
                                />
                            </Box>

                            <ListItemText
                                primary={item.diagnostico}
                                secondary={item.tratamiento}
                                sx={{ mt: 0, mb: 0 }}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
