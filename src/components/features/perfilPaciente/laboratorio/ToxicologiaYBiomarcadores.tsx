import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const toxicologiaData = [
    { sustancia: 'Plomo', valor: 8, limite: 25, unidad: 'μg/dL' },
    { sustancia: 'Mercury', valor: 3, limite: 10, unidad: 'μg/L' },
    { sustancia: 'Cadmio', valor: 1.2, limite: 5, unidad: 'μg/L' },
    { sustancia: 'Arsénico', valor: 15, limite: 50, unidad: 'μg/L' },
];

const biomarcadoresData = [
    { marcador: 'Colinesterasa', valor: 85, referencia: '>70', estado: 'normal' },
    { marcador: 'Ácido Hipúrico', valor: 1.2, referencia: '<1.6', estado: 'normal' },
    { marcador: 'Fenol en Orina', valor: 18, referencia: '<20', estado: 'normal' },
    { marcador: 'Metahemoglobina', valor: 0.8, referencia: '<1.5', estado: 'normal' },
];

export default function ToxicologiaYBiomarcadores() {
    const sustancias = toxicologiaData.map(item => item.sustancia);
    const valores = toxicologiaData.map(item => item.valor);
    const limites = toxicologiaData.map(item => item.limite);

    const getStatusColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'elevado': return 'warning';
            case 'critico': return 'error';
            default: return 'default';
        }
    };

    const getRiskLevel = (valor: number, limite: number) => {
        const porcentaje = (valor / limite) * 100;
        if (porcentaje < 50) return 'bajo';
        if (porcentaje < 80) return 'medio';
        return 'alto';
    };

    const getRiskColor = (level: string) => {
        switch (level) {
            case 'bajo': return 'success';
            case 'medio': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Toxicología y Biomarcadores
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={7}>
                        <Typography variant="subtitle2" gutterBottom>
                            Metales Pesados y Tóxicos
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    { data: valores, label: 'Valor Actual', color: '#2196f3' },
                                    { data: limites, label: 'Límite Permitido', color: '#f44336' },
                                ]}
                                xAxis={[{ data: sustancias, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={5}>
                        <Typography variant="subtitle2" gutterBottom>
                            Biomarcadores de Exposición
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {biomarcadoresData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                            {item.marcador}
                                        </Typography>
                                        <Chip
                                            label={item.estado.toUpperCase()}
                                            color={getStatusColor(item.estado)}
                                            size="small"
                                        />
                                    </Box>
                                    <Typography variant="caption" color="text.secondary">
                                        Valor: {item.valor} | Ref: {item.referencia}
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={75}
                                        color={item.estado === 'normal' ? 'success' : 'warning'}
                                        sx={{ height: 6, borderRadius: 1, mt: 0.5 }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Nivel de Riesgo por Sustancia
                    </Typography>
                    <Grid container spacing={1}>
                        {toxicologiaData.map((item, index) => (
                            <Grid key={index} size={3}>
                                <Chip
                                    label={`${item.sustancia}: ${getRiskLevel(item.valor, item.limite).toUpperCase()}`}
                                    color={getRiskColor(getRiskLevel(item.valor, item.limite))}
                                    size="small"
                                    sx={{
                                        width: '100%',
                                        '& .MuiChip-label': { fontSize: '0.7rem' }
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
