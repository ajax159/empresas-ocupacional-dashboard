import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    type SelectChangeEvent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar
} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface SedeData {
    id: string;
    nombre: string;
    ciudad: string;
    region: string;
    coordenadas: { lat: number; lng: number };
    trabajadores: number;
    casosMedicos: number;
    casosOsteomusculares: number;
    casosRespiratorios: number;
    casosCardiovasculares: number;
    casosVisualAuditivos: number;
    casosDermatologicos: number;
    nivelRiesgo: 'Bajo' | 'Medio' | 'Alto' | 'Crítico';
    tendencia: 'Subiendo' | 'Estable' | 'Bajando';
    porcentajeIncidencia: number;
}

const MapaGeograficoSedes: React.FC = () => {
    const [filtroRegion, setFiltroRegion] = useState<string>('Todas');
    const [tipoVisualizacion, setTipoVisualizacion] = useState<string>('casos');

    const dataSedes: SedeData[] = [
        {
            id: 'sede-001',
            nombre: 'Planta Principal Bogotá',
            ciudad: 'Bogotá',
            region: 'Cundinamarca',
            coordenadas: { lat: 4.6097, lng: -74.0817 },
            trabajadores: 350,
            casosMedicos: 89,
            casosOsteomusculares: 35,
            casosRespiratorios: 18,
            casosCardiovasculares: 15,
            casosVisualAuditivos: 12,
            casosDermatologicos: 9,
            nivelRiesgo: 'Alto',
            tendencia: 'Estable',
            porcentajeIncidencia: 25.4
        },
        {
            id: 'sede-002',
            nombre: 'Sucursal Medellín',
            ciudad: 'Medellín',
            region: 'Antioquia',
            coordenadas: { lat: 6.2442, lng: -75.5812 },
            trabajadores: 180,
            casosMedicos: 45,
            casosOsteomusculares: 20,
            casosRespiratorios: 8,
            casosCardiovasculares: 7,
            casosVisualAuditivos: 6,
            casosDermatologicos: 4,
            nivelRiesgo: 'Medio',
            tendencia: 'Bajando',
            porcentajeIncidencia: 25.0
        },
        {
            id: 'sede-003',
            nombre: 'Centro Distribución Cali',
            ciudad: 'Cali',
            region: 'Valle del Cauca',
            coordenadas: { lat: 3.4516, lng: -76.5320 },
            trabajadores: 120,
            casosMedicos: 38,
            casosOsteomusculares: 22,
            casosRespiratorios: 5,
            casosCardiovasculares: 4,
            casosVisualAuditivos: 4,
            casosDermatologicos: 3,
            nivelRiesgo: 'Alto',
            tendencia: 'Subiendo',
            porcentajeIncidencia: 31.7
        },
        {
            id: 'sede-004',
            nombre: 'Oficina Regional Barranquilla',
            ciudad: 'Barranquilla',
            region: 'Atlántico',
            coordenadas: { lat: 10.9685, lng: -74.7813 },
            trabajadores: 65,
            casosMedicos: 12,
            casosOsteomusculares: 5,
            casosRespiratorios: 2,
            casosCardiovasculares: 2,
            casosVisualAuditivos: 2,
            casosDermatologicos: 1,
            nivelRiesgo: 'Bajo',
            tendencia: 'Estable',
            porcentajeIncidencia: 18.5
        },
        {
            id: 'sede-005',
            nombre: 'Planta Bucaramanga',
            ciudad: 'Bucaramanga',
            region: 'Santander',
            coordenadas: { lat: 7.1193, lng: -73.1227 },
            trabajadores: 95,
            casosMedicos: 28,
            casosOsteomusculares: 15,
            casosRespiratorios: 6,
            casosCardiovasculares: 3,
            casosVisualAuditivos: 3,
            casosDermatologicos: 1,
            nivelRiesgo: 'Medio',
            tendencia: 'Bajando',
            porcentajeIncidencia: 29.5
        },
        {
            id: 'sede-006',
            nombre: 'Sucursal Cartagena',
            ciudad: 'Cartagena',
            region: 'Bolívar',
            coordenadas: { lat: 10.3910, lng: -75.4794 },
            trabajadores: 45,
            casosMedicos: 15,
            casosOsteomusculares: 6,
            casosRespiratorios: 3,
            casosCardiovasculares: 2,
            casosVisualAuditivos: 2,
            casosDermatologicos: 2,
            nivelRiesgo: 'Crítico',
            tendencia: 'Subiendo',
            porcentajeIncidencia: 33.3
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

    const getTamanoMarcador = (casos: number) => {
        if (casos >= 50) return 60;
        if (casos >= 30) return 45;
        if (casos >= 15) return 35;
        return 25;
    };

    const datosFiltrados = filtroRegion === 'Todas'
        ? dataSedes
        : dataSedes.filter(sede => sede.region === filtroRegion);

    const regionesUnicas = ['Todas', ...Array.from(new Set(dataSedes.map(sede => sede.region)))];

    const totalTrabajadores = datosFiltrados.reduce((sum, sede) => sum + sede.trabajadores, 0);
    const totalCasos = datosFiltrados.reduce((sum, sede) => sum + sede.casosMedicos, 0);
    const promedioIncidencia = datosFiltrados.reduce((sum, sede) => sum + sede.porcentajeIncidencia, 0) / datosFiltrados.length;
    const sedesCriticas = datosFiltrados.filter(sede => sede.nivelRiesgo === 'Crítico').length;

    const dataPorTipo = [
        {
            id: 0,
            value: datosFiltrados.reduce((sum, sede) => sum + sede.casosOsteomusculares, 0),
            label: 'Osteomuscular',
            color: '#e57373'
        },
        {
            id: 1,
            value: datosFiltrados.reduce((sum, sede) => sum + sede.casosRespiratorios, 0),
            label: 'Respiratorio',
            color: '#64b5f6'
        },
        {
            id: 2,
            value: datosFiltrados.reduce((sum, sede) => sum + sede.casosCardiovasculares, 0),
            label: 'Cardiovascular',
            color: '#81c784'
        },
        {
            id: 3,
            value: datosFiltrados.reduce((sum, sede) => sum + sede.casosVisualAuditivos, 0),
            label: 'Visual/Auditivo',
            color: '#ba68c8'
        },
        {
            id: 4,
            value: datosFiltrados.reduce((sum, sede) => sum + sede.casosDermatologicos, 0),
            label: 'Dermatológico',
            color: '#ffb74d'
        }
    ];

    const handleFiltroRegionChange = (event: SelectChangeEvent) => {
        setFiltroRegion(event.target.value);
    };

    const handleTipoVisualizacionChange = (event: SelectChangeEvent) => {
        setTipoVisualizacion(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Mapa Geográfico de Sedes - Casos Médicos Ocupacionales
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Filtrar por Región</InputLabel>
                                <Select
                                    value={filtroRegion}
                                    label="Filtrar por Región"
                                    onChange={handleFiltroRegionChange}
                                >
                                    {regionesUnicas.map((region) => (
                                        <MenuItem key={region} value={region}>
                                            {region}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Visualizar</InputLabel>
                                <Select
                                    value={tipoVisualizacion}
                                    label="Visualizar"
                                    onChange={handleTipoVisualizacionChange}
                                >
                                    <MenuItem value="casos">Casos Médicos</MenuItem>
                                    <MenuItem value="trabajadores">Trabajadores</MenuItem>
                                    <MenuItem value="incidencia">% Incidencia</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                            <Card>
                                <CardContent sx={{ py: 1 }}>
                                    <Typography variant="h6" color="primary">
                                        {datosFiltrados.length}
                                    </Typography>
                                    <Typography variant="caption">
                                        Sedes Activas
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                            <Card>
                                <CardContent sx={{ py: 1 }}>
                                    <Typography variant="h6" color="error">
                                        {sedesCriticas}
                                    </Typography>
                                    <Typography variant="caption">
                                        Sedes Críticas
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                            <Card>
                                <CardContent sx={{ py: 1 }}>
                                    <Typography variant="h6" color="warning.main">
                                        {promedioIncidencia.toFixed(1)}%
                                    </Typography>
                                    <Typography variant="caption">
                                        Incidencia Prom.
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
                                Distribución Geográfica de Sedes
                            </Typography>
                            <Box sx={{
                                position: 'relative',
                                height: 400,
                                backgroundColor: '#f5f5f5',
                                borderRadius: 2,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box sx={{
                                    width: '90%',
                                    height: '90%',
                                    background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 50%, #a5d6a7 100%)',
                                    borderRadius: 2,
                                    position: 'relative',
                                    border: '2px solid #66bb6a'
                                }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 20,
                                            color: '#2e7d32',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Colombia - Sedes Empresariales
                                    </Typography>

                                    {datosFiltrados.map((sede) => {
                                        const valor = tipoVisualizacion === 'casos' ? sede.casosMedicos :
                                            tipoVisualizacion === 'trabajadores' ? sede.trabajadores :
                                                sede.porcentajeIncidencia;

                                        return (
                                            <Box
                                                key={sede.id}
                                                sx={{
                                                    position: 'absolute',
                                                    top: sede.ciudad === 'Barranquilla' ? '15%' :
                                                        sede.ciudad === 'Cartagena' ? '20%' :
                                                            sede.ciudad === 'Medellín' ? '45%' :
                                                                sede.ciudad === 'Bucaramanga' ? '35%' :
                                                                    sede.ciudad === 'Bogotá' ? '60%' :
                                                                        sede.ciudad === 'Cali' ? '75%' : '50%',
                                                    left: sede.ciudad === 'Barranquilla' ? '25%' :
                                                        sede.ciudad === 'Cartagena' ? '20%' :
                                                            sede.ciudad === 'Medellín' ? '35%' :
                                                                sede.ciudad === 'Bucaramanga' ? '55%' :
                                                                    sede.ciudad === 'Bogotá' ? '45%' :
                                                                        sede.ciudad === 'Cali' ? '30%' : '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: getTamanoMarcador(sede.casosMedicos),
                                                        height: getTamanoMarcador(sede.casosMedicos),
                                                        borderRadius: '50%',
                                                        backgroundColor: getColorPorRiesgo(sede.nivelRiesgo),
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: '12px',
                                                        boxShadow: 3,
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            transform: 'scale(1.1)',
                                                            transition: 'transform 0.2s'
                                                        }
                                                    }}
                                                    title={`${sede.nombre} - ${valor} ${tipoVisualizacion}`}
                                                >
                                                    {tipoVisualizacion === 'incidencia' ?
                                                        `${valor.toFixed(0)}%` :
                                                        Math.round(valor as number)
                                                    }
                                                </Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        display: 'block',
                                                        textAlign: 'center',
                                                        mt: 0.5,
                                                        fontWeight: 'bold',
                                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                                        padding: '2px 4px',
                                                        borderRadius: 1
                                                    }}
                                                >
                                                    {sede.ciudad}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>

                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 10,
                                    right: 10,
                                    backgroundColor: 'rgba(255,255,255,0.95)',
                                    p: 1,
                                    borderRadius: 1,
                                    boxShadow: 2
                                }}>
                                    <Typography variant="caption" fontWeight="bold" display="block">
                                        Nivel de Riesgo:
                                    </Typography>
                                    {['Bajo', 'Medio', 'Alto', 'Crítico'].map((nivel) => (
                                        <Box key={nivel} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Box sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: '50%',
                                                backgroundColor: getColorPorRiesgo(nivel)
                                            }} />
                                            <Typography variant="caption">{nivel}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Distribución de Casos por Tipo
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: dataPorTipo,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                        innerRadius: 30,
                                        outerRadius: 80,
                                    },
                                ]}
                                height={300}
                                slotProps={{
                                    legend: {
                                        position: { vertical: 'bottom', horizontal: 'center' },
                                    },
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Ranking de Sedes por Casos Médicos
                            </Typography>
                            <BarChart
                                dataset={datosFiltrados
                                    .sort((a, b) => b.casosMedicos - a.casosMedicos)
                                    .map(sede => ({
                                        ciudad: sede.ciudad,
                                        casosMedicos: sede.casosMedicos
                                    }))
                                }
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'ciudad',
                                }]}
                                series={[
                                    {
                                        dataKey: 'casosMedicos',
                                        label: 'Casos Médicos',
                                        color: '#1976d2',
                                    }
                                ]}
                                height={300}
                                margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Detalle de Sedes
                            </Typography>
                            <List dense>
                                {datosFiltrados
                                    .sort((a, b) => b.casosMedicos - a.casosMedicos)
                                    .map((sede, index) => (
                                        <React.Fragment key={sede.id}>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <Avatar
                                                        sx={{
                                                            backgroundColor: getColorPorRiesgo(sede.nivelRiesgo),
                                                            width: 32,
                                                            height: 32
                                                        }}
                                                    >
                                                        <LocationOnIcon fontSize="small" />
                                                    </Avatar>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <Typography variant="body2" fontWeight="bold">
                                                                {sede.nombre}
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                {sede.tendencia === 'Subiendo' && <TrendingUpIcon color="error" fontSize="small" />}
                                                                {sede.tendencia === 'Bajando' && <TrendingDownIcon color="success" fontSize="small" />}
                                                                <Chip
                                                                    label={`${sede.casosMedicos} casos`}
                                                                    size="small"
                                                                    color="primary"
                                                                />
                                                            </Box>
                                                        </Box>
                                                    }
                                                    secondary={
                                                        <Box>
                                                            <Typography variant="caption" color="textSecondary">
                                                                {sede.ciudad}, {sede.region} • {sede.trabajadores} trabajadores
                                                            </Typography>
                                                            <br />
                                                            <Typography variant="caption">
                                                                Incidencia: {sede.porcentajeIncidencia.toFixed(1)}% •
                                                                Riesgo: <strong>{sede.nivelRiesgo}</strong>
                                                            </Typography>
                                                        </Box>
                                                    }
                                                />
                                            </ListItem>
                                            {index < datosFiltrados.length - 1 && <Divider />}
                                        </React.Fragment>
                                    ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Resumen Consolidado
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Box sx={{ textAlign: 'center', p: 2 }}>
                                        <PeopleIcon sx={{ fontSize: 40, color: '#1976d2', mb: 1 }} />
                                        <Typography variant="h5" fontWeight="bold">
                                            {totalTrabajadores.toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Total Trabajadores
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Box sx={{ textAlign: 'center', p: 2 }}>
                                        <LocalHospitalIcon sx={{ fontSize: 40, color: '#f44336', mb: 1 }} />
                                        <Typography variant="h5" fontWeight="bold">
                                            {totalCasos}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Total Casos Médicos
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Box sx={{ textAlign: 'center', p: 2 }}>
                                        <BusinessIcon sx={{ fontSize: 40, color: '#ff9800', mb: 1 }} />
                                        <Typography variant="h5" fontWeight="bold">
                                            {datosFiltrados.length}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Sedes Operativas
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Box sx={{ textAlign: 'center', p: 2 }}>
                                        <TrendingUpIcon sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
                                        <Typography variant="h5" fontWeight="bold">
                                            {((totalCasos / totalTrabajadores) * 100).toFixed(1)}%
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Incidencia General
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MapaGeograficoSedes;
