import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Chip, Avatar } from '@mui/material';
import { AccessTime, CheckCircle, Cancel, Schedule } from '@mui/icons-material';

const interconsultas = [
    {
        id: 1,
        especialidad: 'Cardiología',
        fecha: '2024-08-20',
        estado: 'pendiente',
        medico: 'Dr. García',
        motivo: 'Evaluación cardiovascular post exposición',
    },
    {
        id: 2,
        especialidad: 'Neurología',
        fecha: '2024-08-18',
        estado: 'completada',
        medico: 'Dra. Martínez',
        motivo: 'Seguimiento por cefaleas ocupacionales',
    },
    {
        id: 3,
        especialidad: 'Oftalmología',
        fecha: '2024-08-15',
        estado: 'completada',
        medico: 'Dr. López',
        motivo: 'Examen visual por exposición química',
    },
    {
        id: 4,
        especialidad: 'Dermatología',
        fecha: '2024-08-10',
        estado: 'cancelada',
        medico: 'Dra. Rodríguez',
        motivo: 'Evaluación dermatitis de contacto',
    },
];

const getEstadoIcon = (estado: string) => {
    switch (estado) {
        case 'pendiente':
            return <Schedule color="warning" />;
        case 'completada':
            return <CheckCircle color="success" />;
        case 'cancelada':
            return <Cancel color="error" />;
        default:
            return <AccessTime />;
    }
};

const getEstadoColor = (estado: string) => {
    switch (estado) {
        case 'pendiente':
            return 'warning';
        case 'completada':
            return 'success';
        case 'cancelada':
            return 'error';
        default:
            return 'default';
    }
};

export default function HistorialInterconsultas() {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Historial de Interconsultas
                </Typography>

                <List sx={{ maxHeight: 400, overflow: 'auto' }}>
                    {interconsultas.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                mb: 1,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Avatar sx={{ mr: 2 }}>
                                {getEstadoIcon(item.estado)}
                            </Avatar>
                            <ListItemText
                                primary={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                        <Typography variant="subtitle2">{item.especialidad}</Typography>
                                        <Chip
                                            label={item.estado.charAt(0).toUpperCase() + item.estado.slice(1)}
                                            color={getEstadoColor(item.estado)}
                                            size="small"
                                        />
                                    </Box>
                                }
                                secondary={
                                    <Box>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.medico} - {item.fecha}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.motivo}
                                        </Typography>
                                    </Box>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
