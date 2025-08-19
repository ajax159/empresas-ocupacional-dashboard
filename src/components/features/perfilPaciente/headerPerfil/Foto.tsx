import { Avatar, Box } from '@mui/material';
import { Person } from '@mui/icons-material';

interface FotoProps {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
    editable?: boolean;
    onPhotoChange?: (file: File) => void;
}

const sizeMap = {
    small: 60,
    medium: 80,
    large: 120,
};

export default function Foto({
    src,
    alt = "Foto del trabajador",
    size = 'large'
}: FotoProps) {
    const avatarSize = sizeMap[size];


    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
            }}
        >
            <Avatar
                src={src}
                alt={alt}
                sx={{
                    width: avatarSize,
                    height: avatarSize,
                    border: 2,
                    borderColor: 'primary.main',
                    boxShadow: 2,
                }}
            >
                {!src && <Person sx={{ fontSize: avatarSize * 0.6 }} />}
            </Avatar>
        </Box>
    );
}
