import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

const agudezaVisualData = {
    ojoIzquierdo: {
        sinCorreccion: 0.8,
        conCorreccion: 1.0,
        estado: 'normal',
        distancia: '20/25'
    },
    ojoDerecho: {
        sinCorreccion: 0.9,
        conCorreccion: 1.0,
        estado: 'normal',
        distancia: '20/20'
    }
};

const visionCercanaData = {
    ojoIzquierdo: { valor: 0.9, jaeger: 'J2', estado: 'normal' },
    ojoDerecho: { valor: 1.0, jaeger: 'J1', estado: 'normal' }
};

const visionColoresData = {
    ishihara: { resultado: 'Normal', placas: '15/15', estado: 'normal' },
    farnsworth: { resultado: 'Sin defecto', error: 0, estado: 'normal' }
};

export default function AgudezaVisualYVisionCercana() {
    const getStatusColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'leve': return 'warning';
            case 'moderado': return 'error';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getGaugeValue = (valor: number) => valor * 100;

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Agudeza Visual y Visión Cercana
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Agudeza Visual de Lejos
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={6}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                                        Ojo Izquierdo
                                    </Typography>
                                    <Gauge
                                        width={140}
                                        height={140}
                                        value={getGaugeValue(agudezaVisualData.ojoIzquierdo.conCorreccion)}
                                        startAngle={-110}
                                        endAngle={110}
                                        sx={{
                                            [`& .MuiGauge-valueText`]: {
                                                fontSize: 14,
                                                transform: 'translate(0px, 0px)',
                                            },
                                        }}
                                        text={`${agudezaVisualData.ojoIzquierdo.conCorreccion}`}
                                    />
                                    <Typography variant="caption" display="block">
                                        {agudezaVisualData.ojoIzquierdo.distancia}
                                    </Typography>
                                    <Chip
                                        label={agudezaVisualData.ojoIzquierdo.estado.toUpperCase()}
                                        color={getStatusColor(agudezaVisualData.ojoIzquierdo.estado)}
                                        size="small"
                                    />
                                </Box>
                            </Grid>
                            <Grid size={6}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                                        Ojo Derecho
                                    </Typography>
                                    <Gauge
                                        width={140}
                                        height={140}
                                        value={getGaugeValue(agudezaVisualData.ojoDerecho.conCorreccion)}
                                        startAngle={-110}
                                        endAngle={110}
                                        sx={{
                                            [`& .MuiGauge-valueText`]: {
                                                fontSize: 14,
                                                transform: 'translate(0px, 0px)',
                                            },
                                        }}
                                        text={`${agudezaVisualData.ojoDerecho.conCorreccion}`}
                                    />
                                    <Typography variant="caption" display="block">
                                        {agudezaVisualData.ojoDerecho.distancia}
                                    </Typography>
                                    <Chip
                                        label={agudezaVisualData.ojoDerecho.estado.toUpperCase()}
                                        color={getStatusColor(agudezaVisualData.ojoDerecho.estado)}
                                        size="small"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Visión Cercana y Colores
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid size={6}>
                                    <Box sx={{ p: 1.5, bgcolor: 'grey.50', borderRadius: 1, textAlign: 'center' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                            Visión Cercana OI
                                        </Typography>
                                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                                            {visionCercanaData.ojoIzquierdo.jaeger}
                                        </Typography>
                                        <Chip
                                            label={visionCercanaData.ojoIzquierdo.estado.toUpperCase()}
                                            color={getStatusColor(visionCercanaData.ojoIzquierdo.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Grid>
                                <Grid size={6}>
                                    <Box sx={{ p: 1.5, bgcolor: 'grey.50', borderRadius: 1, textAlign: 'center' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                            Visión Cercana OD
                                        </Typography>
                                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                                            {visionCercanaData.ojoDerecho.jaeger}
                                        </Typography>
                                        <Chip
                                            label={visionCercanaData.ojoDerecho.estado.toUpperCase()}
                                            color={getStatusColor(visionCercanaData.ojoDerecho.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Grid>
                                <Grid size={6}>
                                    <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1, textAlign: 'center' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                            Test Ishihara
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                                            {visionColoresData.ishihara.placas}
                                        </Typography>
                                        <Chip
                                            label={visionColoresData.ishihara.estado.toUpperCase()}
                                            color={getStatusColor(visionColoresData.ishihara.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Grid>
                                <Grid size={6}>
                                    <Box sx={{ p: 1.5, bgcolor: 'success.light', borderRadius: 1, textAlign: 'center' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                            Farnsworth
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                                            Error: {visionColoresData.farnsworth.error}
                                        </Typography>
                                        <Chip
                                            label={visionColoresData.farnsworth.estado.toUpperCase()}
                                            color={getStatusColor(visionColoresData.farnsworth.estado)}
                                            size="small"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                        👁️ Evaluación oftalmológica completa | Agudeza visual con corrección óptica
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
