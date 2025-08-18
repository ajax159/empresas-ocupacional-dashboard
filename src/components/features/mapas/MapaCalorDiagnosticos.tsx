import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    type SelectChangeEvent
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { alpha } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

interface DiagnosticoZonaData {
    zona: string;
    area: string;
    totalCasos: number;
    osteomuscular: number;
    respiratorio: number;
    cardiovascular: number;
    dermatologico: number;
    visual: number;
    auditivo: number;
    otros: number;
    nivelRiesgo: 'Bajo' | 'Medio' | 'Alto' | 'Crítico';
    [key: string]: string | number;
}

const MapaCalorDiagnosticos: React.FC = () => {
    const [filtroArea, setFiltroArea] = useState<string>('Todas');

    const dataDiagnosticos: DiagnosticoZonaData[] = [
        {
            zona: 'Línea de Producción A',
            area: 'Producción',
            totalCasos: 45,
            osteomuscular: 18,
            respiratorio: 8,
            cardiovascular: 6,
            dermatologico: 5,
            visual: 4,
            auditivo: 3,
            otros: 1,
            nivelRiesgo: 'Alto'
        },
        {
            zona: 'Línea de Producción B',
            area: 'Producción',
            totalCasos: 38,
            osteomuscular: 15,
            respiratorio: 9,
            cardiovascular: 5,
            dermatologico: 4,
            visual: 3,
            auditivo: 2,
            otros: 0,
            nivelRiesgo: 'Alto'
        },
        {
            zona: 'Almacén Principal',
            area: 'Logística',
            totalCasos: 32,
            osteomuscular: 20,
            respiratorio: 3,
            cardiovascular: 4,
            dermatologico: 2,
            visual: 2,
            auditivo: 1,
            otros: 0,
            nivelRiesgo: 'Medio'
        },
        {
            zona: 'Taller de Mantenimiento',
            area: 'Mantenimiento',
            totalCasos: 28,
            osteomuscular: 12,
            respiratorio: 5,
            cardiovascular: 3,
            dermatologico: 4,
            visual: 2,
            auditivo: 2,
            otros: 0,
            nivelRiesgo: 'Medio'
        },
        {
            zona: 'Área de Soldadura',
            area: 'Producción',
            totalCasos: 25,
            osteomuscular: 8,
            respiratorio: 10,
            cardiovascular: 2,
            dermatologico: 3,
            visual: 2,
            auditivo: 0,
            otros: 0,
            nivelRiesgo: 'Crítico'
        },
        {
            zona: 'Oficinas Administrativas',
            area: 'Administración',
            totalCasos: 15,
            osteomuscular: 8,
            respiratorio: 1,
            cardiovascular: 3,
            dermatologico: 1,
            visual: 2,
            auditivo: 0,
            otros: 0,
            nivelRiesgo: 'Bajo'
        },
        {
            zona: 'Laboratorio de Calidad',
            area: 'Calidad',
            totalCasos: 12,
            osteomuscular: 3,
            respiratorio: 2,
            cardiovascular: 2,
            dermatologico: 2,
            visual: 3,
            auditivo: 0,
            otros: 0,
            nivelRiesgo: 'Bajo'
        },
        {
            zona: 'Área de Carga y Descarga',
            area: 'Logística',
            totalCasos: 22,
            osteomuscular: 16,
            respiratorio: 2,
            cardiovascular: 2,
            dermatologico: 1,
            visual: 1,
            auditivo: 0,
            otros: 0,
            nivelRiesgo: 'Medio'
        }
    ];

    const getColorPorRiesgo = (riesgo: string) => {
        switch (riesgo) {
            case 'Crítico': return '#d32f2f';
            case 'Alto': return '#f57c00';
            case 'Medio': return '#fbc02d';
            case 'Bajo': return '#388e3c';
            default: return '#757575';
        }
    };

    const getIconoPorRiesgo = (riesgo: string) => {
        switch (riesgo) {
            case 'Crítico':
            case 'Alto':
                return <ErrorIcon sx={{ fontSize: 16 }} />;
            case 'Medio':
                return <WarningIcon sx={{ fontSize: 16 }} />;
            case 'Bajo':
                return <LocationOnIcon sx={{ fontSize: 16 }} />;
            default:
                return <LocationOnIcon sx={{ fontSize: 16 }} />;
        }
    };

    const datosFiltrados = filtroArea === 'Todas'
        ? dataDiagnosticos
        : dataDiagnosticos.filter(item => item.area === filtroArea);

    const areasUnicas = ['Todas', ...Array.from(new Set(dataDiagnosticos.map(item => item.area)))];

    const topZonas = datosFiltrados
        .sort((a, b) => b.totalCasos - a.totalCasos)
        .slice(0, 6);

    const totalCasos = datosFiltrados.reduce((sum, item) => sum + item.totalCasos, 0);
    const zonasCriticas = datosFiltrados.filter(item => item.nivelRiesgo === 'Crítico').length;
    const zonasAltas = datosFiltrados.filter(item => item.nivelRiesgo === 'Alto').length;

    const handleFiltroChange = (event: SelectChangeEvent) => {
        setFiltroArea(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Mapa de Calor de Diagnósticos por Zona de Trabajo
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Filtrar por Área</InputLabel>
                                <Select
                                    value={filtroArea}
                                    label="Filtrar por Área"
                                    onChange={handleFiltroChange}
                                >
                                    {areasUnicas.map((area) => (
                                        <MenuItem key={area} value={area}>
                                            {area}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card>
                                <CardContent sx={{ py: 1 }}>
                                    <Typography variant="h6" color="primary">
                                        {totalCasos}
                                    </Typography>
                                    <Typography variant="caption">
                                        Total Casos
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card>
                                <CardContent sx={{ py: 1 }}>
                                    <Typography variant="h6" color="error">
                                        {zonasCriticas}
                                    </Typography>
                                    <Typography variant="caption">
                                        Zonas Críticas
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card>
                                <CardContent sx={{ py: 1 }}>
                                    <Typography variant="h6" color="warning.main">
                                        {zonasAltas}
                                    </Typography>
                                    <Typography variant="caption">
                                        Zonas Alto Riesgo
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Zonas con Mayor Número de Casos
                            </Typography>
                            <BarChart
                                dataset={topZonas}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'zona',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                series={[
                                    {
                                        dataKey: 'osteomuscular',
                                        label: 'Osteomuscular',
                                        color: '#e57373',
                                        stack: 'diagnosticos',
                                    },
                                    {
                                        dataKey: 'respiratorio',
                                        label: 'Respiratorio',
                                        color: '#64b5f6',
                                        stack: 'diagnosticos',
                                    },
                                    {
                                        dataKey: 'cardiovascular',
                                        label: 'Cardiovascular',
                                        color: '#81c784',
                                        stack: 'diagnosticos',
                                    },
                                    {
                                        dataKey: 'dermatologico',
                                        label: 'Dermatológico',
                                        color: '#ffb74d',
                                        stack: 'diagnosticos',
                                    },
                                    {
                                        dataKey: 'visual',
                                        label: 'Visual',
                                        color: '#ba68c8',
                                        stack: 'diagnosticos',
                                    },
                                    {
                                        dataKey: 'auditivo',
                                        label: 'Auditivo',
                                        color: '#4db6ac',
                                        stack: 'diagnosticos',
                                    },
                                ]}
                                height={400}
                                margin={{ left: 60, right: 20, top: 20, bottom: 120 }}
                                slotProps={{
                                    legend: {
                                        position: { vertical: 'top', horizontal: 'center' },
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
                                Mapa de Calor Visual
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                {datosFiltrados
                                    .sort((a, b) => b.totalCasos - a.totalCasos)
                                    .map((zona, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                p: 2,
                                                borderRadius: 1,
                                                backgroundColor: alpha(getColorPorRiesgo(zona.nivelRiesgo), 0.1),
                                                border: `2px solid ${getColorPorRiesgo(zona.nivelRiesgo)}`,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="body2" fontWeight="bold">
                                                    {zona.zona}
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    {zona.area}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="h6" fontWeight="bold">
                                                    {zona.totalCasos}
                                                </Typography>
                                                <Chip
                                                    icon={getIconoPorRiesgo(zona.nivelRiesgo)}
                                                    label={zona.nivelRiesgo}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: getColorPorRiesgo(zona.nivelRiesgo),
                                                        color: 'white',
                                                        '& .MuiChip-icon': { color: 'white' }
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Detalle de Diagnósticos por Zona de Trabajo
                            </Typography>
                            <TableContainer component={Paper} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><strong>Zona de Trabajo</strong></TableCell>
                                            <TableCell><strong>Área</strong></TableCell>
                                            <TableCell align="center"><strong>Total</strong></TableCell>
                                            <TableCell align="center"><strong>Osteom.</strong></TableCell>
                                            <TableCell align="center"><strong>Respir.</strong></TableCell>
                                            <TableCell align="center"><strong>Cardio.</strong></TableCell>
                                            <TableCell align="center"><strong>Dermat.</strong></TableCell>
                                            <TableCell align="center"><strong>Visual</strong></TableCell>
                                            <TableCell align="center"><strong>Audit.</strong></TableCell>
                                            <TableCell align="center"><strong>Nivel Riesgo</strong></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {datosFiltrados
                                            .sort((a, b) => b.totalCasos - a.totalCasos)
                                            .map((zona, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{zona.zona}</TableCell>
                                                    <TableCell>{zona.area}</TableCell>
                                                    <TableCell align="center">
                                                        <Typography fontWeight="bold">
                                                            {zona.totalCasos}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="center">{zona.osteomuscular}</TableCell>
                                                    <TableCell align="center">{zona.respiratorio}</TableCell>
                                                    <TableCell align="center">{zona.cardiovascular}</TableCell>
                                                    <TableCell align="center">{zona.dermatologico}</TableCell>
                                                    <TableCell align="center">{zona.visual}</TableCell>
                                                    <TableCell align="center">{zona.auditivo}</TableCell>
                                                    <TableCell align="center">
                                                        <Chip
                                                            label={zona.nivelRiesgo}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: getColorPorRiesgo(zona.nivelRiesgo),
                                                                color: 'white',
                                                                fontWeight: 'bold'
                                                            }}
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Recomendaciones por Nivel de Riesgo
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle2" color="error.main" gutterBottom>
                                        Zonas Críticas y Alto Riesgo:
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        • <strong>Área de Soldadura:</strong> Implementar ventilación forzada, EPP respiratorio obligatorio<br />
                                        • <strong>Líneas de Producción:</strong> Rotación de personal, pausas activas cada 2 horas<br />
                                        • <strong>Evaluación médica</strong> cada 6 meses para trabajadores expuestos<br />
                                        • <strong>Capacitación</strong> en ergonomía y uso correcto de EPP
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle2" color="warning.main" gutterBottom>
                                        Zonas de Riesgo Medio:
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        • <strong>Almacén Principal:</strong> Técnicas de levantamiento seguro<br />
                                        • <strong>Taller de Mantenimiento:</strong> Protección auditiva y visual<br />
                                        • <strong>Evaluación médica</strong> anual<br />
                                        • <strong>Monitoreo</strong> continuo de condiciones ambientales
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

export default MapaCalorDiagnosticos;
