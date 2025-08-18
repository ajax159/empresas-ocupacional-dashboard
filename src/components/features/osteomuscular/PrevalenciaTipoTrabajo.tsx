import { Card, CardContent, Typography, Box, Grid, Stack, Chip } from '@mui/material';
import WavesIcon from '@mui/icons-material/Waves';
import TerrainIcon from '@mui/icons-material/Terrain';
import FactoryIcon from '@mui/icons-material/Factory';

export default function PrevalenciaTipoTrabajo() {
    const tiposTrabajo = ['Marítimo', 'Subsuelo', 'Planta'];
    const diagnosticos = ['Lumbalgia', 'Cervicalgia', 'Túnel Carpiano', 'Tendinitis', 'Epicondilitis'];

    const prevalenciaMatriz = [
        // Marítimo
        [45.2, 32.1, 15.8, 28.4, 12.3],
        // Subsuelo  
        [52.8, 28.9, 18.2, 31.7, 16.4],
        // Planta
        [38.6, 41.3, 35.2, 22.1, 18.9]
    ];

    const heatmapData = [];
    prevalenciaMatriz.forEach((fila, tipoIndex) => {
        fila.forEach((valor, diagIndex) => {
            heatmapData.push({
                x: tipoIndex,
                y: diagIndex,
                valor: valor,
                tipo: tiposTrabajo[tipoIndex],
                diagnostico: diagnosticos[diagIndex]
            });
        });
    });

    const trabajadoresPorTipo: { [key: string]: number } = {
        'Marítimo': 120,
        'Subsuelo': 95,
        'Planta': 235
    };

    const prevalenciaPromedio = tiposTrabajo.map((tipo, index) => {
        const promedio = prevalenciaMatriz[index].reduce((sum, val) => sum + val, 0) / prevalenciaMatriz[index].length;
        return { tipo, promedio };
    });

    const factoresRiesgo: { [key: string]: string[] } = {
        'Marítimo': ['Vibración continua', 'Posturas inestables', 'Carga/descarga', 'Clima adverso'],
        'Subsuelo': ['Espacios confinados', 'Trabajo pesado', 'Vibraciones', 'Posturas forzadas'],
        'Planta': ['Movimientos repetitivos', 'Trabajo en altura', 'Manipulación manual', 'Ruido constante']
    };

    const getColorByValue = (valor: number) => {
        if (valor >= 40) return '#d32f2f';
        if (valor >= 30) return '#f57c00';
        if (valor >= 20) return '#fbc02d';
        if (valor >= 10) return '#689f38';
        return '#388e3c';
    };

    const getIconByTipo = (tipo: string) => {
        switch (tipo) {
            case 'Marítimo': return <WavesIcon />;
            case 'Subsuelo': return <TerrainIcon />;
            case 'Planta': return <FactoryIcon />;
            default: return <FactoryIcon />;
        }
    };

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Prevalencia Osteomuscular por Tipo de Trabajo
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                    {prevalenciaPromedio.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={index}>
                            <Box sx={{
                                textAlign: 'center',
                                p: 2,
                                bgcolor: getColorByValue(item.promedio),
                                borderRadius: 1,
                                color: 'white'
                            }}>
                                {getIconByTipo(item.tipo)}
                                <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
                                    {item.promedio.toFixed(1)}%
                                </Typography>
                                <Typography variant="caption">
                                    {item.tipo}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block' }}>
                                    ({trabajadoresPorTipo[item.tipo]} trabajadores)
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 3, mb: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Matriz de Prevalencia (%) por Diagnóstico y Tipo de Trabajo:
                    </Typography>

                    <Box sx={{ mt: 2, overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{
                                        padding: '12px 8px',
                                        backgroundColor: '#f5f5f5',
                                        border: '1px solid #ddd',
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold'
                                    }}>
                                        Diagnóstico / Tipo
                                    </th>
                                    {tiposTrabajo.map((tipo, index) => (
                                        <th key={index} style={{
                                            padding: '12px 8px',
                                            backgroundColor: '#f5f5f5',
                                            border: '1px solid #ddd',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}>
                                            {tipo}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {diagnosticos.map((diagnostico, diagIndex) => (
                                    <tr key={diagIndex}>
                                        <td style={{
                                            padding: '12px 8px',
                                            border: '1px solid #ddd',
                                            fontWeight: 'medium',
                                            fontSize: '0.875rem'
                                        }}>
                                            {diagnostico}
                                        </td>
                                        {tiposTrabajo.map((_, tipoIndex) => {
                                            const valor = prevalenciaMatriz[tipoIndex][diagIndex];
                                            return (
                                                <td key={tipoIndex} style={{
                                                    padding: '12px 8px',
                                                    border: '1px solid #ddd',
                                                    backgroundColor: getColorByValue(valor),
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.875rem'
                                                }}>
                                                    {valor.toFixed(1)}%
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
                </Box>

                <Box sx={{ mt: 2, mb: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Escala de prevalencia:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label="≥40% Muy Alta"
                            size="small"
                            sx={{ bgcolor: '#d32f2f', color: 'white' }}
                        />
                        <Chip
                            label="30-39% Alta"
                            size="small"
                            sx={{ bgcolor: '#f57c00', color: 'white' }}
                        />
                        <Chip
                            label="20-29% Media"
                            size="small"
                            sx={{ bgcolor: '#fbc02d', color: 'white' }}
                        />
                        <Chip
                            label="10-19% Baja"
                            size="small"
                            sx={{ bgcolor: '#689f38', color: 'white' }}
                        />
                        <Chip
                            label="<10% Muy Baja"
                            size="small"
                            sx={{ bgcolor: '#388e3c', color: 'white' }}
                        />
                    </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Principales Factores de Riesgo por Tipo de Trabajo:
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        {Object.entries(factoresRiesgo).map(([tipo, factores], index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="primary" gutterBottom>
                                        {tipo}
                                    </Typography>
                                    <Stack spacing={0.5}>
                                        {factores.map((factor, fIndex) => (
                                            <Typography key={fIndex} variant="caption" color="text.secondary">
                                                • {factor}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" fontWeight="medium" gutterBottom>
                        Hallazgos principales:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label="Subsuelo: Mayor riesgo lumbalgia (52.8%)"
                            size="small"
                            color="error"
                            variant="outlined"
                        />
                        <Chip
                            label="Planta: Cervicalgia predominante (41.3%)"
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                        <Chip
                            label="Túnel carpiano: Crítico en planta (35.2%)"
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                    </Stack>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Trabajo en subsuelo presenta mayor riesgo general osteomuscular (promedio 29.6%)
                </Typography>
            </CardContent>
        </Card>
    );
}
