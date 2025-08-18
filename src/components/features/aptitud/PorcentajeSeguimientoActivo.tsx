import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Chip } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

interface SeguimientoData {
    departamento: string;
    totalTrabajadores: number;
    conSeguimiento: number;
    sinSeguimiento: number;
    pendientes: number;
}

const PorcentajeSeguimientoActivo: React.FC = () => {
    const dataSeguimiento: SeguimientoData[] = [
        { departamento: 'Producción', totalTrabajadores: 120, conSeguimiento: 98, sinSeguimiento: 15, pendientes: 7 },
        { departamento: 'Mantenimiento', totalTrabajadores: 45, conSeguimiento: 41, sinSeguimiento: 3, pendientes: 1 },
        { departamento: 'Logística', totalTrabajadores: 65, conSeguimiento: 58, sinSeguimiento: 5, pendientes: 2 },
        { departamento: 'Administración', totalTrabajadores: 35, conSeguimiento: 33, sinSeguimiento: 2, pendientes: 0 },
        { departamento: 'Ventas', totalTrabajadores: 28, conSeguimiento: 25, sinSeguimiento: 2, pendientes: 1 },
        { departamento: 'Calidad', totalTrabajadores: 22, conSeguimiento: 21, sinSeguimiento: 1, pendientes: 0 },
        { departamento: 'RRHH', totalTrabajadores: 15, conSeguimiento: 15, sinSeguimiento: 0, pendientes: 0 },
    ];

    const totalTrabajadores = dataSeguimiento.reduce((sum, item) => sum + item.totalTrabajadores, 0);
    const totalConSeguimiento = dataSeguimiento.reduce((sum, item) => sum + item.conSeguimiento, 0);
    const totalSinSeguimiento = dataSeguimiento.reduce((sum, item) => sum + item.sinSeguimiento, 0);
    const totalPendientes = dataSeguimiento.reduce((sum, item) => sum + item.pendientes, 0);

    const porcentajeSeguimiento = (totalConSeguimiento / totalTrabajadores) * 100;

    const getSemaforoColor = (porcentaje: number) => {
        if (porcentaje >= 85) return { color: '#4caf50', icon: CheckCircleIcon, label: 'Óptimo' };
        if (porcentaje >= 70) return { color: '#ff9800', icon: WarningIcon, label: 'Aceptable' };
        return { color: '#f44336', icon: ErrorIcon, label: 'Crítico' };
    };

    const semaforoGeneral = getSemaforoColor(porcentajeSeguimiento);

    const dataConPorcentajes = dataSeguimiento.map(item => ({
        ...item,
        porcentaje: (item.conSeguimiento / item.totalTrabajadores) * 100,
        semaforo: getSemaforoColor((item.conSeguimiento / item.totalTrabajadores) * 100)
    }));

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Porcentaje con Seguimiento Activo
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ textAlign: 'center', py: 4 }}>
                            <Typography variant="h5" gutterBottom>
                                Seguimiento General
                            </Typography>

                            <Gauge
                                value={porcentajeSeguimiento}
                                valueMin={0}
                                valueMax={100}
                                startAngle={-90}
                                endAngle={90}
                                height={200}
                                text={({ value }) => `${(value || 0).toFixed(1)}%`}
                                sx={{
                                    '& .MuiGauge-valueText': {
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        fill: semaforoGeneral.color,
                                    },
                                    '& .MuiGauge-valueArc': {
                                        fill: semaforoGeneral.color,
                                    },
                                }}
                            />

                            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <semaforoGeneral.icon sx={{ color: semaforoGeneral.color, mr: 1 }} />
                                <Chip
                                    label={semaforoGeneral.label}
                                    sx={{
                                        backgroundColor: semaforoGeneral.color,
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                />
                            </Box>

                            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                                {totalConSeguimiento} de {totalTrabajadores} trabajadores
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={2} sx={{ height: '100%' }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Con Seguimiento
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                                        {totalConSeguimiento}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Casos activos
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Sin Seguimiento
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                                        {totalSinSeguimiento}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Requieren atención
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Pendientes
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#ff9800', fontWeight: 'bold' }}>
                                        {totalPendientes}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        En proceso
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Departamentos
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                                        {dataSeguimiento.length}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Monitoreados
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Seguimiento por Departamento
                            </Typography>
                            <Grid container spacing={2}>
                                {dataConPorcentajes.map((item, index) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                                    <Typography variant="subtitle2" fontWeight="bold">
                                                        {item.departamento}
                                                    </Typography>
                                                    <item.semaforo.icon sx={{ color: item.semaforo.color }} />
                                                </Box>

                                                <Typography variant="h5" sx={{ color: item.semaforo.color, fontWeight: 'bold' }}>
                                                    {item.porcentaje.toFixed(1)}%
                                                </Typography>

                                                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                                                    {item.conSeguimiento}/{item.totalTrabajadores} trabajadores
                                                </Typography>

                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    {item.sinSeguimiento > 0 && (
                                                        <Chip
                                                            label={`${item.sinSeguimiento} sin seg.`}
                                                            size="small"
                                                            color="error"
                                                            variant="outlined"
                                                        />
                                                    )}
                                                    {item.pendientes > 0 && (
                                                        <Chip
                                                            label={`${item.pendientes} pend.`}
                                                            size="small"
                                                            color="warning"
                                                            variant="outlined"
                                                        />
                                                    )}
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Criterios de Semáforo
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <CheckCircleIcon sx={{ color: '#4caf50', mr: 1 }} />
                                        <Typography variant="body2">
                                            <strong>Óptimo (≥85%):</strong> Seguimiento adecuado
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <WarningIcon sx={{ color: '#ff9800', mr: 1 }} />
                                        <Typography variant="body2">
                                            <strong>Aceptable (70-84%):</strong> Requiere atención
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <ErrorIcon sx={{ color: '#f44336', mr: 1 }} />
                                        <Typography variant="body2">
                                            <strong>Crítico (&lt;70%):</strong> Acción inmediata
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Acciones Recomendadas
                            </Typography>
                            <Typography variant="body2" paragraph>
                                • <strong>Seguimiento activo:</strong> Contacto mensual con trabajadores en riesgo<br />
                                • <strong>Casos sin seguimiento:</strong> Programar evaluación inmediata<br />
                                • <strong>Casos pendientes:</strong> Acelerar proceso de asignación<br />
                                • <strong>Departamentos críticos:</strong> Implementar plan de mejora
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PorcentajeSeguimientoActivo;
