import React from 'react';
import { Box, Card, CardContent, Typography, Grid, LinearProgress, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ScheduleIcon from '@mui/icons-material/Schedule';

interface ExamenPeriodicoData {
    periodo: string;
    realizados: number;
    pendientes: number;
    vencidos: number;
    total: number;
    [key: string]: string | number;
}

interface DepartamentoExamenData {
    departamento: string;
    realizados: number;
    pendientes: number;
    porcentajeCumplimiento: number;
}

const CumplimientoExamenesPeriodicos: React.FC = () => {
    const dataExamenes: ExamenPeriodicoData[] = [
        { periodo: 'Ene 2024', realizados: 145, pendientes: 25, vencidos: 8, total: 178 },
        { periodo: 'Feb 2024', realizados: 132, pendientes: 32, vencidos: 12, total: 176 },
        { periodo: 'Mar 2024', realizados: 158, pendientes: 18, vencidos: 6, total: 182 },
        { periodo: 'Abr 2024', realizados: 142, pendientes: 28, vencidos: 15, total: 185 },
        { periodo: 'May 2024', realizados: 167, pendientes: 22, vencidos: 9, total: 198 },
        { periodo: 'Jun 2024', realizados: 175, pendientes: 15, vencidos: 5, total: 195 },
        { periodo: 'Jul 2024', realizados: 183, pendientes: 12, vencidos: 3, total: 198 },
        { periodo: 'Ago 2024', realizados: 156, pendientes: 35, vencidos: 18, total: 209 },
    ];

    const dataDepartamentos: DepartamentoExamenData[] = [
        { departamento: 'Producción', realizados: 98, pendientes: 22, porcentajeCumplimiento: 81.7 },
        { departamento: 'Mantenimiento', realizados: 38, pendientes: 7, porcentajeCumplimiento: 84.4 },
        { departamento: 'Logística', realizados: 55, pendientes: 10, porcentajeCumplimiento: 84.6 },
        { departamento: 'Administración', realizados: 32, pendientes: 3, porcentajeCumplimiento: 91.4 },
        { departamento: 'Ventas', realizados: 24, pendientes: 4, porcentajeCumplimiento: 85.7 },
        { departamento: 'Calidad', realizados: 20, pendientes: 2, porcentajeCumplimiento: 90.9 },
        { departamento: 'RRHH', realizados: 15, pendientes: 0, porcentajeCumplimiento: 100.0 },
    ];

    const periodoActual = dataExamenes[dataExamenes.length - 1];
    const periodoAnterior = dataExamenes[dataExamenes.length - 2];

    const porcentajeCumplimientoActual = (periodoActual.realizados / periodoActual.total) * 100;
    const porcentajeCumplimientoAnterior = (periodoAnterior.realizados / periodoAnterior.total) * 100;
    const tendencia = porcentajeCumplimientoActual - porcentajeCumplimientoAnterior;

    const totalRealizados = dataDepartamentos.reduce((sum, item) => sum + item.realizados, 0);
    const totalPendientes = dataDepartamentos.reduce((sum, item) => sum + item.pendientes, 0);
    const totalGeneral = totalRealizados + totalPendientes;
    const porcentajeGeneralCumplimiento = (totalRealizados / totalGeneral) * 100;

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Cumplimiento de Exámenes Periódicos
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Cumplimiento Actual
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                                        {porcentajeGeneralCumplimiento.toFixed(1)}%
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        {tendencia >= 0 ? (
                                            <TrendingUpIcon sx={{ color: '#4caf50', mr: 0.5 }} />
                                        ) : (
                                            <TrendingDownIcon sx={{ color: '#f44336', mr: 0.5 }} />
                                        )}
                                        <Typography
                                            variant="body2"
                                            sx={{ color: tendencia >= 0 ? '#4caf50' : '#f44336' }}
                                        >
                                            {tendencia >= 0 ? '+' : ''}{tendencia.toFixed(1)}% vs mes anterior
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Realizados
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                                        {totalRealizados}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Exámenes completados
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Pendientes
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#ff9800', fontWeight: 'bold' }}>
                                        {totalPendientes}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Por realizar
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Vencidos
                                    </Typography>
                                    <Typography variant="h4" component="div" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                                        {periodoActual.vencidos}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Fuera de plazo
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
                                Evolución Mensual de Exámenes Periódicos
                            </Typography>
                            <BarChart
                                dataset={dataExamenes}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'periodo',
                                }]}
                                series={[
                                    {
                                        dataKey: 'realizados',
                                        label: 'Realizados',
                                        color: '#4caf50',
                                        stack: 'total',
                                    },
                                    {
                                        dataKey: 'pendientes',
                                        label: 'Pendientes',
                                        color: '#ff9800',
                                        stack: 'total',
                                    },
                                    {
                                        dataKey: 'vencidos',
                                        label: 'Vencidos',
                                        color: '#f44336',
                                        stack: 'total',
                                    },
                                ]}
                                height={400}
                                margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
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
                                Estadísticas del Período Actual
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    Progreso de Cumplimiento
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={porcentajeCumplimientoActual}
                                    sx={{ height: 8, borderRadius: 4, mb: 1 }}
                                />
                                <Typography variant="h6" color="primary">
                                    {porcentajeCumplimientoActual.toFixed(1)}%
                                </Typography>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 12 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                                        <Typography variant="body2">Meta mensual:</Typography>
                                        <Chip label="85%" color="success" size="small" />
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                                        <Typography variant="body2">Promedio 6 meses:</Typography>
                                        <Typography variant="body2" fontWeight="bold">
                                            {(dataExamenes.slice(-6).reduce((sum, item) => sum + (item.realizados / item.total * 100), 0) / 6).toFixed(1)}%
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                                        <Typography variant="body2">Mejor mes:</Typography>
                                        <Typography variant="body2" color="success.main" fontWeight="bold">
                                            Jul 2024 (92.4%)
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Cumplimiento por Departamento
                            </Typography>
                            <Grid container spacing={2}>
                                {dataDepartamentos.map((item, index) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                    <Typography variant="subtitle2" fontWeight="bold">
                                                        {item.departamento}
                                                    </Typography>
                                                    <ScheduleIcon
                                                        sx={{
                                                            color: item.porcentajeCumplimiento >= 85 ? '#4caf50' :
                                                                item.porcentajeCumplimiento >= 70 ? '#ff9800' : '#f44336'
                                                        }}
                                                    />
                                                </Box>

                                                <LinearProgress
                                                    variant="determinate"
                                                    value={item.porcentajeCumplimiento}
                                                    sx={{
                                                        height: 8,
                                                        borderRadius: 4,
                                                        mb: 1,
                                                        '& .MuiLinearProgress-bar': {
                                                            backgroundColor: item.porcentajeCumplimiento >= 85 ? '#4caf50' :
                                                                item.porcentajeCumplimiento >= 70 ? '#ff9800' : '#f44336'
                                                        }
                                                    }}
                                                />

                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: item.porcentajeCumplimiento >= 85 ? '#4caf50' :
                                                            item.porcentajeCumplimiento >= 70 ? '#ff9800' : '#f44336',
                                                        fontWeight: 'bold',
                                                        mb: 1
                                                    }}
                                                >
                                                    {item.porcentajeCumplimiento.toFixed(1)}%
                                                </Typography>

                                                <Typography variant="body2" color="textSecondary">
                                                    {item.realizados} realizados, {item.pendientes} pendientes
                                                </Typography>
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
                                Próximos Vencimientos (30 días)
                            </Typography>
                            {[
                                { fecha: '25 Ago 2024', trabajadores: 12, tipo: 'Examen Médico Anual' },
                                { fecha: '30 Ago 2024', trabajadores: 8, tipo: 'Audiometría' },
                                { fecha: '05 Sep 2024', trabajadores: 15, tipo: 'Examen Visual' },
                                { fecha: '10 Sep 2024', trabajadores: 6, tipo: 'Espirometría' },
                                { fecha: '15 Sep 2024', trabajadores: 9, tipo: 'Radiografía Tórax' },
                            ].map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        py: 1.5,
                                        borderBottom: index < 4 ? '1px solid #e0e0e0' : 'none',
                                    }}
                                >
                                    <Box>
                                        <Typography variant="body2" fontWeight="bold">
                                            {item.fecha}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {item.tipo}
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={`${item.trabajadores} trabajadores`}
                                        size="small"
                                        color="warning"
                                        variant="outlined"
                                    />
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Alertas y Recomendaciones
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <Chip
                                    label="18 exámenes vencidos"
                                    color="error"
                                    size="small"
                                    sx={{ mr: 1, mb: 1 }}
                                />
                                <Chip
                                    label="35 pendientes este mes"
                                    color="warning"
                                    size="small"
                                    sx={{ mr: 1, mb: 1 }}
                                />
                            </Box>
                            <Typography variant="body2" paragraph>
                                <strong>Acciones prioritarias:</strong>
                            </Typography>
                            <Typography variant="body2" paragraph>
                                • Contactar trabajadores con exámenes vencidos<br />
                                • Programar citas para los 35 casos pendientes<br />
                                • Revisar disponibilidad de citas en Producción<br />
                                • Implementar recordatorios automáticos
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CumplimientoExamenesPeriodicos;
