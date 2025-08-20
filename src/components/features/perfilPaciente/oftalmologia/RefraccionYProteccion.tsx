import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const refraccionData = {
    ojoIzquierdo: {
        esfera: -1.25,
        cilindro: -0.50,
        eje: 180,
        tipo: 'Miopía leve'
    },
    ojoDerecho: {
        esfera: -0.75,
        cilindro: -0.25,
        eje: 90,
        tipo: 'Miopía leve'
    }
};

const defectosRefractivosData = [
    { label: 'Sin defecto', value: 35, color: '#4caf50' },
    { label: 'Miopía', value: 40, color: '#2196f3' },
    { label: 'Hipermetropía', value: 15, color: '#ff9800' },
    { label: 'Astigmatismo', value: 10, color: '#f44336' }
];

const proteccionOcularData = [
    { equipo: 'Gafas de Seguridad', uso: 85, obligatorio: true },
    { equipo: 'Pantalla Facial', uso: 70, obligatorio: true },
    { equipo: 'Gafas UV', uso: 60, obligatorio: false },
    { equipo: 'Goggles Químicos', uso: 90, obligatorio: true }
];

export default function RefraccionYProteccion() {
    const getTipoColor = (tipo: string) => {
        if (tipo.includes('leve')) return 'success';
        if (tipo.includes('moderada')) return 'warning';
        if (tipo.includes('severa')) return 'error';
        return 'info';
    };

    const getUsoColor = (uso: number, obligatorio: boolean) => {
        if (!obligatorio) return 'info';
        if (uso >= 90) return 'success';
        if (uso >= 70) return 'warning';
        return 'error';
    };

    const formatRefraction = (esfera: number, cilindro: number, eje: number) => {
        return `${esfera > 0 ? '+' : ''}${esfera} ${cilindro > 0 ? '+' : ''}${cilindro} x ${eje}°`;
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Refracción y Protección Ocular
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Datos de Refracción
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                    Ojo Derecho
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 0.5, fontFamily: 'monospace' }}>
                                    {formatRefraction(
                                        refraccionData.ojoDerecho.esfera,
                                        refraccionData.ojoDerecho.cilindro,
                                        refraccionData.ojoDerecho.eje
                                    )}
                                </Typography>
                                <Chip
                                    label={refraccionData.ojoDerecho.tipo}
                                    color={getTipoColor(refraccionData.ojoDerecho.tipo)}
                                    size="small"
                                />
                            </Box>
                            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                    Ojo Izquierdo
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 0.5, fontFamily: 'monospace' }}>
                                    {formatRefraction(
                                        refraccionData.ojoIzquierdo.esfera,
                                        refraccionData.ojoIzquierdo.cilindro,
                                        refraccionData.ojoIzquierdo.eje
                                    )}
                                </Typography>
                                <Chip
                                    label={refraccionData.ojoIzquierdo.tipo}
                                    color={getTipoColor(refraccionData.ojoIzquierdo.tipo)}
                                    size="small"
                                />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Distribución Defectos Refractivos
                        </Typography>
                        <Box sx={{ height: 200, display: 'flex', justifyContent: 'center' }}>
                            <PieChart
                                series={[{
                                    data: defectosRefractivosData,
                                    innerRadius: 30,
                                    outerRadius: 80,
                                    paddingAngle: 2,
                                    cornerRadius: 3,
                                }]}
                                width={200}
                                height={200}
                                margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Uso de Protección Ocular
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {proteccionOcularData.map((item, index) => (
                                <Box key={index} sx={{ mb: 1.5 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                            {item.equipo}
                                        </Typography>
                                        <Chip
                                            label={`${item.uso}%`}
                                            color={getUsoColor(item.uso, item.obligatorio)}
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{
                                        width: '100%',
                                        height: 6,
                                        bgcolor: 'grey.200',
                                        borderRadius: 1,
                                        overflow: 'hidden'
                                    }}>
                                        <Box sx={{
                                            width: `${item.uso}%`,
                                            height: '100%',
                                            bgcolor: getUsoColor(item.uso, item.obligatorio) === 'success' ? 'success.main' :
                                                getUsoColor(item.uso, item.obligatorio) === 'warning' ? 'warning.main' :
                                                    getUsoColor(item.uso, item.obligatorio) === 'error' ? 'error.main' : 'info.main',
                                            borderRadius: 1,
                                        }} />
                                    </Box>
                                    {item.obligatorio && (
                                        <Typography variant="caption" color="text.secondary">
                                            Obligatorio
                                        </Typography>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="warning.contrastText">
                        ⚠️ Uso obligatorio de protección ocular en áreas de riesgo | Evaluación semestral de agudeza visual
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
