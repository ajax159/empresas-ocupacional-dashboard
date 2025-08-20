import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const perfilOcupacionalData = [
    { categoria: 'Metales Pesados', normal: 75, alterado: 25 },
    { categoria: 'Solventes', normal: 82, alterado: 18 },
    { categoria: 'Pesticidas', normal: 90, alterado: 10 },
    { categoria: 'Polvos', normal: 68, alterado: 32 },
];

const exposicionesData = [
    { riesgo: 'Químico', nivel: 85, limite: 100, unidad: 'TLV' },
    { riesgo: 'Biológico', nivel: 45, limite: 100, unidad: 'UFC' },
    { riesgo: 'Radiológico', nivel: 15, limite: 50, unidad: 'mSv' },
    { riesgo: 'Ergonómico', nivel: 70, limite: 100, unidad: 'Score' },
];

const indicadoresData = [
    { indicador: 'Colinesterasa Sérica', valor: 85, estado: 'normal', meta: 90 },
    { indicador: 'Función Hepática', valor: 92, estado: 'normal', meta: 95 },
    { indicador: 'Función Renal', valor: 88, estado: 'normal', meta: 90 },
    { indicador: 'Perfil Tiroideo', valor: 78, estado: 'atencion', meta: 85 },
];

export default function PerfilOcupacional() {
    const categorias = perfilOcupacionalData.map(item => item.categoria);
    const normales = perfilOcupacionalData.map(item => item.normal);
    const alterados = perfilOcupacionalData.map(item => item.alterado);

    const getNivelRiesgo = (nivel: number, limite: number) => {
        const porcentaje = (nivel / limite) * 100;
        if (porcentaje < 50) return 'bajo';
        if (porcentaje < 80) return 'medio';
        return 'alto';
    };

    const getRiesgoColor = (nivel: string) => {
        switch (nivel) {
            case 'bajo': return 'success';
            case 'medio': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'normal': return 'success';
            case 'atencion': return 'warning';
            case 'alterado': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Perfil Ocupacional
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Resultados por Categoría de Riesgo
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={300}
                                height={200}
                                series={[
                                    { data: normales, label: 'Normal (%)', color: '#4caf50' },
                                    { data: alterados, label: 'Alterado (%)', color: '#f44336' },
                                ]}
                                xAxis={[{ data: categorias, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Exposiciones Ocupacionales
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {exposicionesData.map((item, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">
                                            {item.riesgo}
                                        </Typography>
                                        <Chip
                                            label={getNivelRiesgo(item.nivel, item.limite).toUpperCase()}
                                            color={getRiesgoColor(getNivelRiesgo(item.nivel, item.limite))}
                                            size="small"
                                        />
                                    </Box>
                                    <Typography variant="caption" color="text.secondary">
                                        {item.nivel}/{item.limite} {item.unidad}
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={(item.nivel / item.limite) * 100}
                                        color={getNivelRiesgo(item.nivel, item.limite) === 'alto' ? 'error' :
                                            getNivelRiesgo(item.nivel, item.limite) === 'medio' ? 'warning' : 'success'}
                                        sx={{ height: 8, borderRadius: 1, mt: 0.5 }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Indicadores de Salud Ocupacional
                    </Typography>
                    <Grid container spacing={2}>
                        {indicadoresData.map((item, index) => (
                            <Grid key={index} size={3}>
                                <Box sx={{
                                    p: 1.5,
                                    bgcolor: 'grey.50',
                                    borderRadius: 1,
                                    textAlign: 'center',
                                    border: item.estado !== 'normal' ? '1px solid' : 'none',
                                    borderColor: item.estado !== 'normal' ? 'warning.main' : 'transparent'
                                }}>
                                    <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
                                        {item.indicador}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                                        {item.valor}%
                                    </Typography>
                                    <Chip
                                        label={item.estado.toUpperCase()}
                                        color={getEstadoColor(item.estado)}
                                        size="small"
                                        sx={{ mb: 0.5 }}
                                    />
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.valor}
                                        color={item.estado === 'normal' ? 'success' :
                                            item.estado === 'atencion' ? 'warning' : 'error'}
                                        sx={{ height: 4, borderRadius: 1 }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
