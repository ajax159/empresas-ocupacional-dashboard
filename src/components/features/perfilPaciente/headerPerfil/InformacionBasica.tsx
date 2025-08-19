import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Divider,
} from '@mui/material';
import {
    Badge,
    Person,
    Phone,
    LocationOn,
    Email,
    Business,
} from '@mui/icons-material';

interface TrabajadorInfo {
    hc: string;
    dni: string;
    nombres: string;
    apellidos: string;
    telefono: string;
    direccion: string;
    email: string;
    puesto?: string;
    empresa?: string;
    estado?: 'Activo' | 'Inactivo' | 'Suspendido';
}

interface InformacionBasicaProps {
    trabajador: TrabajadorInfo;
    editable?: boolean;
    onEdit?: () => void;
}

const InfoItem = ({
    icon,
    label,
    value,
    color = 'inherit'
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    color?: string;
}) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <Box sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}>
            {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                {label}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 500,
                    color,
                    wordBreak: 'break-word'
                }}
            >
                {value || 'No especificado'}
            </Typography>
        </Box>
    </Box>
);


export default function InformacionBasica({
    trabajador
}: InformacionBasicaProps) {
    const nombreCompleto = `${trabajador.nombres} ${trabajador.apellidos}`.trim();

    return (
        <Paper
            elevation={1}
            sx={{
                p: 3,
                borderRadius: 2,
                position: 'relative',
                height: 'fit-content',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            lineHeight: 1.2,
                            mb: 0.5
                        }}
                    >
                        {nombreCompleto}
                    </Typography>
                    {trabajador.puesto && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Business fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {trabajador.puesto}
                            </Typography>
                        </Box>
                    )}
                </Box>

            </Box>

            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <InfoItem
                        icon={<Badge fontSize="small" />}
                        label="Historia Clínica"
                        value={trabajador.hc}
                    />
                    <InfoItem
                        icon={<Person fontSize="small" />}
                        label="DNI"
                        value={trabajador.dni}
                    />
                    <InfoItem
                        icon={<Phone fontSize="small" />}
                        label="Teléfono"
                        value={trabajador.telefono}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <InfoItem
                        icon={<LocationOn fontSize="small" />}
                        label="Dirección"
                        value={trabajador.direccion}
                    />
                    <InfoItem
                        icon={<Email fontSize="small" />}
                        label="Correo Electrónico"
                        value={trabajador.email}
                    />
                    {trabajador.empresa && (
                        <InfoItem
                            icon={<Business fontSize="small" />}
                            label="Empresa"
                            value={trabajador.empresa}
                        />
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
}
