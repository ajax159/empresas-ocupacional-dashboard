import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

interface AptitudData {
    categoria: string;
    valor: number;
    color: string;
}

const AptitudTrabajosAltura: React.FC = () => {
    const dataAptitud: AptitudData[] = [
        { categoria: 'Apto', valor: 142, color: '#4caf50' },
        { categoria: 'No Apto Temporal', valor: 28, color: '#ff9800' },
        { categoria: 'No Apto Definitivo', valor: 15, color: '#f44336' },
        { categoria: 'Apto con Restricciones', valor: 22, color: '#2196f3' },
    ];

    const totalTrabajadores = dataAptitud.reduce((sum, item) => sum + item.valor, 0);
    const porcentajeApto = ((dataAptitud[0].valor / totalTrabajadores) * 100).toFixed(1);

    const dataPie = dataAptitud.map((item, index) => ({
        id: index,
        value: item.valor,
        label: item.categoria,
        color: item.color,
    }));

    const estadisticas = [
        {
            titulo: 'Total Evaluados',
            valor: totalTrabajadores.toLocaleString(),
            subtitulo: 'Trabajadores evaluados',
            color: '#1976d2',
        },
        {
            titulo: 'Porcentaje Apto',
            valor: `${porcentajeApto}%`,
            subtitulo: 'Aptos para altura',
            color: '#4caf50',
        },
        {
            titulo: 'Restricciones',
            valor: dataAptitud[3].valor.toString(),
            subtitulo: 'Con restricciones',
            color: '#2196f3',
        },
        {
            titulo: 'No Aptos',
            valor: (dataAptitud[1].valor + dataAptitud[2].valor).toString(),
            subtitulo: 'Temporales + Definitivos',
            color: '#f44336',
        },
    ];

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Aptitud para Trabajos en Altura
            </Typography>

            <Grid container spacing={3}>

                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        {estadisticas.map((stat, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Card>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom variant="body2">
                                            {stat.titulo}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            component="div"
                                            sx={{ color: stat.color, fontWeight: 'bold' }}
                                        >
                                            {stat.valor}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {stat.subtitulo}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Distribución de Aptitud para Trabajos en Altura
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: dataPie,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                        innerRadius: 30,
                                        outerRadius: 100,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                    },
                                ]}
                                height={400}
                                slotProps={{
                                    legend: {
                                        position: { vertical: 'bottom', horizontal: 'center' },
                                    },
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Detalle por Categoría
                            </Typography>
                            {dataAptitud.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        py: 1,
                                        borderBottom: index < dataAptitud.length - 1 ? '1px solid #e0e0e0' : 'none',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                bgcolor: item.color,
                                                borderRadius: '50%',
                                                mr: 2,
                                            }}
                                        />
                                        <Typography variant="body2">
                                            {item.categoria}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant="body2" fontWeight="bold">
                                            {item.valor}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {((item.valor / totalTrabajadores) * 100).toFixed(1)}%
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Criterios de Evaluación para Trabajos en Altura
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle2" color="success.main" gutterBottom>
                                        ✓ Apto:
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        • Sin vértigo ni acrofobia<br />
                                        • Agudeza visual adecuada<br />
                                        • Equilibrio normal<br />
                                        • Sin cardiopatías limitantes<br />
                                        • Sin epilepsia o convulsiones
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle2" color="error.main" gutterBottom>
                                        ✗ No Apto:
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        • Vértigo o acrofobia severa<br />
                                        • Deficiencias visuales graves<br />
                                        • Trastornos del equilibrio<br />
                                        • Cardiopatías descompensadas<br />
                                        • Epilepsia no controlada
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AptitudTrabajosAltura;
