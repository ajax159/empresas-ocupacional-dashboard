
import { Box, Container } from '@mui/material';
import Foto from './headerPerfil/Foto';
import InformacionBasica from './headerPerfil/InformacionBasica';

const trabajadorEjemplo = {
    hc: 'HC-2024-001234',
    dni: '12345678',
    nombres: 'Juan Carlos',
    apellidos: 'Pérez González',
    telefono: '+51 987 654 321',
    direccion: 'Av. Lima 123, San Isidro, Lima',
    email: 'juan.perez@empresa.com',
    puesto: 'Ingeniero de Sistemas',
    empresa: 'TechCorp S.A.C.',
    estado: 'Activo' as const,
};

export default function HeaderPerfil() {
    const handlePhotoChange = (file: File) => {
        console.log('Nueva foto seleccionada:', file.name);
    };

    const handleEdit = () => {
        console.log('Editar información del trabajador');
    };

    return (
        <Container maxWidth="lg" sx={{ py: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    gap: 3,
                    alignItems: 'flex-start',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Foto
                        src="" 
                        alt={`Foto de ${trabajadorEjemplo.nombres} ${trabajadorEjemplo.apellidos}`}
                        size="large"
                        editable={true}
                        onPhotoChange={handlePhotoChange}
                    />
                </Box>

                <Box sx={{ flex: 1, width: '100%' }}>
                    <InformacionBasica
                        trabajador={trabajadorEjemplo}
                        editable={true}
                        onEdit={handleEdit}
                    />
                </Box>
            </Box>
        </Container>
    );
}