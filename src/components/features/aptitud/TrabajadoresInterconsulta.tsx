import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

interface InterconsultaData {
    especialidad: string;
    casos: number;
    urgente: number;
    programada: number;
    [key: string]: string | number;
}

const TrabajadoresInterconsulta: React.FC = () => {
    const dataInterconsulta: InterconsultaData[] = [
        { especialidad: 'Cardiología', casos: 45, urgente: 12, programada: 33 },
        { especialidad: 'Oftalmología', casos: 38, urgente: 8, programada: 30 },
        { especialidad: 'Otorrinolaringología', casos: 32, urgente: 5, programada: 27 },
        { especialidad: 'Traumatología', casos: 28, urgente: 15, programada: 13 },
        { especialidad: 'Dermatología', casos: 25, urgente: 3, programada: 22 },
        { especialidad: 'Neumología', casos: 22, urgente: 7, programada: 15 },
        { especialidad: 'Neurología', casos: 18, urgente: 9, programada: 9 },
        { especialidad: 'Psiquiatría', casos: 15, urgente: 2, programada: 13 },
        { especialidad: 'Endocrinología', casos: 12, urgente: 1, programada: 11 },
        { especialidad: 'Urología', casos: 8, urgente: 1, programada: 7 },
    ];

    const totalCasos = dataInterconsulta.reduce((sum, item) => sum + item.casos, 0);
    const totalUrgentes = dataInterconsulta.reduce((sum, item) => sum + item.urgente, 0);
    const totalProgramadas = dataInterconsulta.reduce((sum, item) => sum + item.programada, 0);

    const estadisticas = [
        {
            titulo: 'Total Interconsultas',
            valor: totalCasos.toString(),
            subtitulo: 'Casos derivados',
            color: '#1976d2',
        },
        {
            titulo: 'Urgentes',
            valor: totalUrgentes.toString(),
            subtitulo: 'Atención prioritaria',
            color: '#f44336',
        },
        {
            titulo: 'Programadas',
            valor: totalProgramadas.toString(),
            subtitulo: 'Atención electiva',
            color: '#4caf50',
        },
        {
            titulo: 'Especialidades',
            valor: dataInterconsulta.length.toString(),
            subtitulo: 'Diferentes áreas',
            color: '#9c27b0',
        },
    ];

    const top5Especialidades = dataInterconsulta.slice(0, 5);

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Trabajadores que Requieren Interconsulta
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
                                Interconsultas por Especialidad Médica
                            </Typography>
                            <BarChart
                                dataset={dataInterconsulta}
                                xAxis={[{
                                    scaleType: 'band',
                                    dataKey: 'especialidad',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                series={[
                                    {
                                        dataKey: 'urgente',
                                        label: 'Urgente',
                                        color: '#f44336',
                                        stack: 'total',
                                    },
                                    {
                                        dataKey: 'programada',
                                        label: 'Programada',
                                        color: '#4caf50',
                                        stack: 'total',
                                    },
                                ]}
                                height={400}
                                margin={{ left: 60, right: 20, top: 20, bottom: 100 }}
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
                                Top 5 Especialidades
                            </Typography>
                            {top5Especialidades.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        py: 2,
                                        borderBottom: index < top5Especialidades.length - 1 ? '1px solid #e0e0e0' : 'none',
                                    }}
                                >
                                    <Box>
                                        <Typography variant="body2" fontWeight="bold">
                                            {index + 1}. {item.especialidad}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {item.urgente} urgentes, {item.programada} programadas
                                        </Typography>
                                    </Box>
                                    <Typography variant="h6" color="primary">
                                        {item.casos}
                                    </Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Motivos Frecuentes de Interconsulta
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>
                                        Cardiología:
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        • Hipertensión arterial no controlada<br />
                                        • Arritmias detectadas en ECG<br />
                                        • Dolor torácico atípico<br />
                                        • Soplos cardíacos
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>
                                        Oftalmología:
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        • Disminución de agudeza visual<br />
                                        • Alteraciones en fondo de ojo<br />
                                        • Glaucoma sospechoso<br />
                                        • Cataratas incipientes
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Tiempos de Espera Promedio
                            </Typography>
                            <Grid container spacing={2}>
                                {[
                                    { especialidad: 'Cardiología', dias: 12, tipo: 'urgente' },
                                    { especialidad: 'Oftalmología', dias: 8, tipo: 'normal' },
                                    { especialidad: 'Traumatología', dias: 5, tipo: 'urgente' },
                                    { especialidad: 'Dermatología', dias: 15, tipo: 'normal' },
                                    { especialidad: 'Neurología', dias: 20, tipo: 'normal' },
                                ].map((item, index) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                        <Box
                                            sx={{
                                                p: 2,
                                                border: '1px solid #e0e0e0',
                                                borderRadius: 1,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Typography variant="body2" fontWeight="bold">
                                                {item.especialidad}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color={item.tipo === 'urgente' ? 'error.main' : 'primary.main'}
                                            >
                                                {item.dias} días
                                            </Typography>
                                            <Typography variant="caption" color="textSecondary">
                                                promedio
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TrabajadoresInterconsulta;
