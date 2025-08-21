import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

const evolucionSaludOralData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    indiceSaludGeneral: [65, 70, 75, 80, 83, 85],
    higieneBucal: [60, 68, 75, 82, 85, 88],
    estadoPeriodontal: [70, 72, 78, 82, 85, 87],
    ausenciaDolor: [75, 80, 85, 88, 90, 92]
};

const indicadoresSaludOralData = [
    { indicador: 'Ausencia de Dolor', actual: 92, objetivo: 95, mejora: '+17 puntos desde 2019' },
    { indicador: 'Función Masticatoria', actual: 88, objetivo: 90, mejora: '+13 puntos desde 2019' },
    { indicador: 'Estética Dental', actual: 85, objetivo: 85, mejora: '+15 puntos desde 2019' },
    { indicador: 'Comunicación Oral', actual: 95, objetivo: 95, mejora: '+5 puntos desde 2019' },
    { indicador: 'Bienestar General', actual: 87, objetivo: 90, mejora: '+20 puntos desde 2019' }
];

const factoresCalidadVidaData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    satisfaccionApariencia: [60, 65, 72, 78, 82, 85],
    confianzaSonrisa: [55, 62, 70, 76, 80, 83],
    comodidadAlimentacion: [70, 75, 80, 85, 88, 90],
    relacionesSociales: [65, 70, 75, 80, 83, 86]
};

const impactoFuncionalData = [
    { funcion: 'Masticación', limitacion: 'Mínima', impacto: 10, adaptaciones: ['Evitar alimentos muy duros'], mejora: 'Significativa' },
    { funcion: 'Fonación', limitacion: 'Ninguna', impacto: 0, adaptaciones: [], mejora: 'Completa' },
    { funcion: 'Deglución', limitacion: 'Ninguna', impacto: 5, adaptaciones: [], mejora: 'Completa' },
    { funcion: 'Respiración', limitacion: 'Mínima', impacto: 8, adaptaciones: ['Higiene nasal'], mejora: 'Buena' },
    { funcion: 'Expresión Facial', limitacion: 'Ninguna', impacto: 2, adaptaciones: [], mejora: 'Excelente' }
];

const comparacionCalidadVidaData = [
    { aspecto: 'Dolor Orofacial', antes: 4, actual: 1, mejora: 75 },
    { aspecto: 'Limitaciones Alimentarias', antes: 5, actual: 2, mejora: 60 },
    { aspecto: 'Problemas Sueño', antes: 3, actual: 1, mejora: 67 },
    { aspecto: 'Estrés por Apariencia', antes: 6, actual: 2, mejora: 67 },
    { aspecto: 'Dificultades Sociales', antes: 4, actual: 1, mejora: 75 }
];

const objetivosCalidadVidaData = [
    { objetivo: 'Eliminar Dolor Residual', plazo: '6 meses', progreso: 80, acciones: ['Ajuste oclusal', 'Terapia ATM'] },
    { objetivo: 'Mejorar Estética Anterior', plazo: '12 meses', progreso: 60, acciones: ['Blanqueamiento', 'Carillas'] },
    { objetivo: 'Optimizar Función Masticatoria', plazo: '9 meses', progreso: 90, acciones: ['Rehabilitación posterior'] },
    { objetivo: 'Mantener Salud Periodontal', plazo: 'Continuo', progreso: 95, acciones: ['Controles regulares', 'Higiene'] }
];

const satisfaccionTratamientoData = {
    fechas: ['2019', '2020', '2021', '2022', '2023', '2024'],
    satisfaccionGeneral: [70, 75, 82, 87, 90, 93],
    expectativasCumplidas: [65, 72, 80, 85, 88, 91],
    recomendaria: [75, 80, 85, 90, 92, 95],
    calidadAtencion: [80, 82, 85, 88, 90, 92]
};

export default function CalidadVidaOral() {
    const getImpactoColor = (impacto: number) => {
        if (impacto <= 5) return 'success';
        if (impacto <= 15) return 'warning';
        return 'error';
    };

    const getLimitacionColor = (limitacion: string) => {
        switch (limitacion.toLowerCase()) {
            case 'ninguna': return 'success';
            case 'mínima': return 'warning';
            case 'moderada': case 'significativa': return 'error';
            default: return 'default';
        }
    };

    const getProgresoColor = (progreso: number) => {
        if (progreso >= 90) return 'success';
        if (progreso >= 70) return 'warning';
        return 'error';
    };

    const getMejoraColor = (mejora: string) => {
        switch (mejora.toLowerCase()) {
            case 'excelente': case 'completa': return 'success';
            case 'significativa': case 'buena': return 'warning';
            case 'mínima': case 'limitada': return 'error';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Calidad de Vida Oral
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Evolución de Indicadores de Salud Oral
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: evolucionSaludOralData.indiceSaludGeneral,
                                        label: 'Salud General',
                                        color: '#4caf50'
                                    },
                                    {
                                        data: evolucionSaludOralData.higieneBucal,
                                        label: 'Higiene Bucal',
                                        color: '#2196f3'
                                    },
                                    {
                                        data: evolucionSaludOralData.estadoPeriodontal,
                                        label: 'Estado Periodontal',
                                        color: '#ff9800'
                                    },
                                    {
                                        data: evolucionSaludOralData.ausenciaDolor,
                                        label: 'Ausencia Dolor',
                                        color: '#9c27b0'
                                    }
                                ]}
                                xAxis={[{
                                    data: evolucionSaludOralData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                                yAxis={[{ min: 50, max: 100 }]}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Satisfacción con Tratamiento Odontológico
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: satisfaccionTratamientoData.satisfaccionGeneral,
                                        label: 'Satisfacción General',
                                        color: '#4caf50'
                                    },
                                    {
                                        data: satisfaccionTratamientoData.expectativasCumplidas,
                                        label: 'Expectativas Cumplidas',
                                        color: '#2196f3'
                                    },
                                    {
                                        data: satisfaccionTratamientoData.recomendaria,
                                        label: 'Recomendaría',
                                        color: '#ff5722'
                                    }
                                ]}
                                xAxis={[{
                                    data: satisfaccionTratamientoData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                                yAxis={[{ min: 60, max: 100 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Indicadores Actuales de Calidad de Vida
                        </Typography>
                        {indicadoresSaludOralData.map((indicador, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {indicador.indicador}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                            {indicador.actual}%
                                        </Typography>
                                        <Chip
                                            label={indicador.actual >= indicador.objetivo ? 'OBJETIVO' : 'PROGRESO'}
                                            color={indicador.actual >= indicador.objetivo ? 'success' : 'warning'}
                                            size="small"
                                        />
                                    </Box>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={indicador.actual}
                                    color={indicador.actual >= indicador.objetivo ? 'success' : 'warning'}
                                    sx={{ height: 6, borderRadius: 3, mb: 0.5 }}
                                />
                                <Typography variant="caption" color="success.main" sx={{ fontWeight: 'medium' }}>
                                    {indicador.mejora}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Impacto Funcional por Área
                        </Typography>
                        {impactoFuncionalData.map((funcion, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {funcion.funcion}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Chip
                                            label={funcion.limitacion}
                                            color={getLimitacionColor(funcion.limitacion)}
                                            size="small"
                                        />
                                        <Chip
                                            label={`${funcion.impacto}%`}
                                            color={getImpactoColor(funcion.impacto)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                    Adaptaciones: {funcion.adaptaciones.length > 0 ? funcion.adaptaciones.join(', ') : 'No requeridas'}
                                </Typography>
                                <Chip
                                    label={`Mejora ${funcion.mejora}`}
                                    color={getMejoraColor(funcion.mejora)}
                                    size="small"
                                    variant="outlined"
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Comparación Antes vs Después (Escala 0-10)
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <BarChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: comparacionCalidadVidaData.map(item => item.antes),
                                        label: 'Antes',
                                        color: '#f44336'
                                    },
                                    {
                                        data: comparacionCalidadVidaData.map(item => item.actual),
                                        label: 'Actual',
                                        color: '#4caf50'
                                    }
                                ]}
                                xAxis={[{
                                    data: comparacionCalidadVidaData.map(item => item.aspecto),
                                    scaleType: 'band',
                                    tickLabelStyle: { angle: 45, textAnchor: 'start' }
                                }]}
                                margin={{ top: 10, bottom: 80, left: 30, right: 10 }}
                                yAxis={[{ min: 0, max: 10 }]}
                            />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Factores de Calidad de Vida Oral
                        </Typography>
                        <Box sx={{ height: 200 }}>
                            <LineChart
                                width={350}
                                height={200}
                                series={[
                                    {
                                        data: factoresCalidadVidaData.satisfaccionApariencia,
                                        label: 'Satisfacción Apariencia',
                                        color: '#e91e63'
                                    },
                                    {
                                        data: factoresCalidadVidaData.confianzaSonrisa,
                                        label: 'Confianza Sonrisa',
                                        color: '#3f51b5'
                                    },
                                    {
                                        data: factoresCalidadVidaData.comodidadAlimentacion,
                                        label: 'Comodidad Alimentación',
                                        color: '#00bcd4'
                                    }
                                ]}
                                xAxis={[{
                                    data: factoresCalidadVidaData.fechas,
                                    scaleType: 'point'
                                }]}
                                margin={{ top: 10, bottom: 20, left: 40, right: 10 }}
                                yAxis={[{ min: 50, max: 100 }]}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            Objetivos de Calidad de Vida
                        </Typography>
                        <Grid container spacing={1}>
                            {objetivosCalidadVidaData.map((objetivo, index) => (
                                <Grid key={index} size={3}>
                                    <Box sx={{ p: 1.5, bgcolor: 'info.light', borderRadius: 1, height: '100%' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1, color: 'info.contrastText' }}>
                                            {objetivo.objetivo}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="caption" sx={{ color: 'info.contrastText' }}>
                                                Plazo: {objetivo.plazo}
                                            </Typography>
                                            <Chip
                                                label={`${objetivo.progreso}%`}
                                                color={getProgresoColor(objetivo.progreso)}
                                                size="small"
                                            />
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={objetivo.progreso}
                                            sx={{ height: 6, borderRadius: 3, mb: 1, bgcolor: 'rgba(255,255,255,0.3)' }}
                                        />
                                        <Typography variant="caption" sx={{ display: 'block', color: 'info.contrastText' }}>
                                            Acciones: {objetivo.acciones.join(', ')}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="caption" color="success.contrastText">
                        🎯 Mejora significativa en calidad de vida oral | Objetivos de bienestar en progreso satisfactorio | Satisfacción alta con tratamiento
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
