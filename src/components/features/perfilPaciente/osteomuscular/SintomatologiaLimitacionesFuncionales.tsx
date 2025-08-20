import { Card, CardContent, Typography, Box, Grid, Chip, Alert } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const sintomasMusculoesqueleticosData = [
    { año: 2020, lumbar: 1, cervical: 0, dorsal: 0, extremidades: 0, intensidad: 2 },
    { año: 2021, lumbar: 2, cervical: 1, dorsal: 0, extremidades: 1, intensidad: 3 },
    { año: 2022, lumbar: 3, cervical: 2, dorsal: 1, extremidades: 2, intensidad: 4 },
    { año: 2023, lumbar: 4, cervical: 3, dorsal: 2, extremidades: 2, intensidad: 5 },
    { año: 2024, lumbar: 4, cervical: 3, dorsal: 2, extremidades: 3, intensidad: 6 }
];

const limitacionesFuncionalesData = [
    { actividad: 'Flexión Lumbar', limitacion: 60, normal: 90, impacto: 'moderado' },
    { actividad: 'Rotación Cervical', limitacion: 70, normal: 80, impacto: 'leve' },
    { actividad: 'Elevación Brazos', limitacion: 150, normal: 180, impacto: 'leve' },
    { actividad: 'Marcha Prolongada', limitacion: 30, normal: 60, impacto: 'severo' },
    { actividad: 'Levantamiento Peso', limitacion: 15, normal: 25, impacto: 'moderado' }
];

const incapacidadLaboralData = [
    { año: 2020, dias: 0, causa: 'Ninguna' },
    { año: 2021, dias: 3, causa: 'Lumbalgia aguda' },
    { año: 2022, dias: 7, causa: 'Cervicalgia tensional' },
    { año: 2023, dias: 12, causa: 'Lumbalgia crónica reagudizada' },
    { año: 2024, dias: 18, causa: 'Síndrome dolor miofascial' }
];

const tratamientosData = [
    { tipo: 'Fisioterapia', sesiones: 24, efectividad: 70, estado: 'completado' },
    { tipo: 'Medicación Analgésica', dosis: 'PRN', efectividad: 60, estado: 'activo' },
    { tipo: 'Ejercicios Terapéuticos', frecuencia: 'Diaria', efectividad: 65, estado: 'activo' },
    { tipo: 'Ergoterapia', sesiones: 8, efectividad: 55, estado: 'completado' },
    { tipo: 'Infiltraciones', aplicaciones: 2, efectividad: 40, estado: 'suspendido' }
];

const impactoCalidadVidaData = [
    { dominio: 'Función Física', puntaje: 65, referencia: 85 },
    { dominio: 'Dolor Corporal', puntaje: 45, referencia: 80 },
    { dominio: 'Rol Físico', puntaje: 55, referencia: 85 },
    { dominio: 'Vitalidad', puntaje: 60, referencia: 75 },
    { dominio: 'Función Social', puntaje: 70, referencia: 85 }
];

const pronosticoData = {
    riesgoIncapacidad: 'alto',
    probabilidadCronificacion: 75,
    factoresAgravantes: ['Edad', 'Años exposición', 'Factores psicosociales'],
    recomendaciones: ['Cambio de puesto', 'Tratamiento integral', 'Seguimiento especializado']
};

export default function SintomatologiaLimitacionesFuncionales() {
    const años = sintomasMusculoesqueleticosData.map(item => item.año);
    const lumbar = sintomasMusculoesqueleticosData.map(item => item.lumbar);
    const cervical = sintomasMusculoesqueleticosData.map(item => item.cervical);
    const extremidades = sintomasMusculoesqueleticosData.map(item => item.extremidades);
    const intensidad = sintomasMusculoesqueleticosData.map(item => item.intensidad);

    const diasIncapacidad = incapacidadLaboralData.map(item => item.dias);

    const getImpactoColor = (impacto: string) => {
        switch (impacto) {
            case 'leve': return 'success';
            case 'moderado': return 'warning';
            case 'severo': return 'error';
            default: return 'default';
        }
    };

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'activo': return 'info';
            case 'completado': return 'success';
            case 'suspendido': return 'error';
            default: return 'default';
        }
    };

    const getEfectividadColor = (efectividad: number) => {
        if (efectividad >= 70) return 'success';
        if (efectividad >= 50) return 'warning';
        return 'error';
    };

    const getRiesgoColor = (riesgo: string) => {
        switch (riesgo) {
            case 'bajo': return 'success';
            case 'moderado': return 'warning';
            case 'alto': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Sintomatología y Limitaciones Funcionales
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución Sintomatología por Región
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={480}
                                height={200}
                                series={[
                                    {
                                        data: lumbar,
                                        label: 'Lumbar',
                                        color: '#f44336',
                                        curve: 'linear'
                                    },
                                    {
                                        data: cervical,
                                        label: 'Cervical',
                                        color: '#ff9800',
                                        curve: 'linear'
                                    },
                                    {
                                        data: extremidades,
                                        label: 'Extremidades',
                                        color: '#2196f3',
                                        curve: 'linear'
                                    },
                                    {
                                        data: intensidad,
                                        label: 'Intensidad (EVA)',
                                        color: '#9c27b0',
                                        curve: 'linear'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'point' }]}
                                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            Incapacidad Laboral por Año
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={250}
                                height={200}
                                series={[
                                    {
                                        data: diasIncapacidad,
                                        label: 'Días',
                                        color: '#f44336'
                                    }
                                ]}
                                xAxis={[{ data: años, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Limitaciones Funcionales Actuales
                        </Typography>
                        {limitacionesFuncionalesData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.actividad}
                                    </Typography>
                                    <Chip
                                        label={item.impacto.toUpperCase()}
                                        color={getImpactoColor(item.impacto)}
                                        size="small"
                                    />
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Capacidad actual: {item.limitacion}° / Normal: {item.normal}°
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    height: 8,
                                    bgcolor: 'grey.300',
                                    borderRadius: 1,
                                    position: 'relative'
                                }}>
                                    <Box sx={{
                                        width: `${(item.limitacion / item.normal) * 100}%`,
                                        height: '100%',
                                        bgcolor: getImpactoColor(item.impacto) === 'success' ? 'success.main' :
                                            getImpactoColor(item.impacto) === 'warning' ? 'warning.main' : 'error.main',
                                        borderRadius: 1
                                    }} />
                                </Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Tratamientos y Efectividad
                        </Typography>
                        {tratamientosData.map((tratamiento, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {tratamiento.tipo}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={tratamiento.estado.toUpperCase()}
                                            color={getEstadoColor(tratamiento.estado)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${tratamiento.efectividad}%`}
                                            color={getEfectividadColor(tratamiento.efectividad)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {tratamiento.sesiones && `Sesiones: ${tratamiento.sesiones}`}
                                    {tratamiento.dosis && `Dosis: ${tratamiento.dosis}`}
                                    {tratamiento.frecuencia && `Frecuencia: ${tratamiento.frecuencia}`}
                                    {tratamiento.aplicaciones && `Aplicaciones: ${tratamiento.aplicaciones}`}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Impacto en Calidad de Vida
                        </Typography>
                        {impactoCalidadVidaData.map((dominio, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {dominio.dominio}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {dominio.puntaje}/100
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: '100%',
                                    height: 6,
                                    bgcolor: 'grey.300',
                                    borderRadius: 1,
                                    position: 'relative'
                                }}>
                                    <Box sx={{
                                        width: `${dominio.puntaje}%`,
                                        height: '100%',
                                        bgcolor: dominio.puntaje >= 70 ? 'success.main' :
                                            dominio.puntaje >= 50 ? 'warning.main' : 'error.main',
                                        borderRadius: 1
                                    }} />
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Referencia poblacional: {dominio.referencia}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Pronóstico y Recomendaciones
                        </Typography>
                        <Box sx={{ mb: 2, p: 1.5, bgcolor: 'error.light', borderRadius: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'error.contrastText' }}>
                                Riesgo de Incapacidad
                            </Typography>
                            <Chip
                                label={pronosticoData.riesgoIncapacidad.toUpperCase()}
                                color={getRiesgoColor(pronosticoData.riesgoIncapacidad)}
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="caption" sx={{ display: 'block', color: 'error.contrastText' }}>
                                Probabilidad cronificación: {pronosticoData.probabilidadCronificacion}%
                            </Typography>
                        </Box>

                        <Typography variant="subtitle2" gutterBottom>
                            Factores Agravantes
                        </Typography>
                        {pronosticoData.factoresAgravantes.map((factor, index) => (
                            <Chip
                                key={index}
                                label={factor}
                                color="warning"
                                size="small"
                                sx={{ mr: 0.5, mb: 0.5 }}
                            />
                        ))}

                        <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                            Recomendaciones Prioritarias
                        </Typography>
                        <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1 }}>
                            {pronosticoData.recomendaciones.map((recomendacion, index) => (
                                <Typography key={index} variant="caption" sx={{ display: 'block', mb: 0.5, color: 'info.contrastText' }}>
                                    • {recomendacion}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Alert severity="error" sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                        Estado de Alerta Médica
                    </Typography>
                    <Typography variant="caption">
                        Deterioro funcional progresivo con alto riesgo de incapacidad permanente | Intervención multidisciplinaria urgente | Consideración de reubicación laboral
                    </Typography>
                </Alert>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'error.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="error.contrastText">
                        🚨 Síndrome doloroso crónico establecido | Seguimiento especializado y medidas laborales inmediatas
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
