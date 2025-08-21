import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
const limitacionesPsicologicasData = [
    { adaptacion: 'Ritmo', severidad: 'adecuado', porcentaje: 100 },
    { adaptacion: 'Tono', severidad: 'inadecuado', porcentaje: 50 },
    { adaptacion: 'Articulación', severidad: 'inadecuado', porcentaje: 50 },
];

const observacionDeConducta1 = [
    { adaptacion: 'Presentación', severidad: 'adecuado', porcentaje: 100 },
    { adaptacion: 'Postura', severidad: 'inadecuado', porcentaje: 50 },
];

const orientacionData = [
    { adaptacion: 'Tiempo', severidad: 'orientado', porcentaje: 100 },
    { adaptacion: 'Espacio', severidad: 'desorientado', porcentaje: 50 },
    { adaptacion: 'Persona', severidad: 'orientado', porcentaje: 100 },
];



export default function AptitudPsicologicaLimitaciones() {

    const getSeveridadColor = (severidad: string) => {
        switch (severidad) {
            case 'leve': return 'success';
            case 'sin dificultad': return 'info';
            case 'fluido': return 'success';
            case 'adecuado': return 'success';
            case 'orientado': return 'success';
            case 'moderado': return 'warning';
            case 'desorientado': return 'warning';
            case 'inadecuado': return 'warning';
            case 'severa': return 'error';
            default: return 'default';
        }
    };
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Aptitud Psicológica y Limitaciones
                </Typography>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        {observacionDeConducta1.map((observacionConducta, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {observacionConducta.adaptacion}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={observacionConducta.severidad.toUpperCase()}
                                            color={getSeveridadColor(observacionConducta.severidad)}
                                            size="small"
                                        />
                                        {observacionConducta.severidad && (
                                            <Chip
                                                label={`${observacionConducta.porcentaje}%`}
                                                color="info"
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                        <Typography variant="subtitle2" gutterBottom>
                            Discurso
                        </Typography>
                        {limitacionesPsicologicasData.map((limitacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {limitacion.adaptacion}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={limitacion.severidad.toUpperCase()}
                                            color={getSeveridadColor(limitacion.severidad)}
                                            size="small"
                                        />
                                        {limitacion.severidad && (
                                            <Chip
                                                label={`${limitacion.porcentaje}%`}
                                                color="info"
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Orientación
                        </Typography>
                        {orientacionData.map((limitacion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {limitacion.adaptacion}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={limitacion.severidad.toUpperCase()}
                                            color={getSeveridadColor(limitacion.severidad)}
                                            size="small"
                                        />
                                        {limitacion.severidad && (
                                            <Chip
                                                label={`${limitacion.porcentaje}%`}
                                                color="info"
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
