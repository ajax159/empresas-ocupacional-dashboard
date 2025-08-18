import React from 'react';
import { Typography, Card, CardContent, Container } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

interface PlaceholderPageProps {
    title: string;
    description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Card>
                <CardContent sx={{ textAlign: 'center', py: 6 }}>
                    <ConstructionIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h4" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        {description || `La página ${title} está en construcción.`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Esta funcionalidad estará disponible próximamente.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PlaceholderPage;
