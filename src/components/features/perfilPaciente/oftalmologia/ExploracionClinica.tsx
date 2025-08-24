import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
  Chip,
  Stack,
  LinearProgress,
  useTheme
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import {
  ColorLens as ColorIcon,
  ThreeDRotation as DepthIcon,
  Visibility as CampIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon
} from '@mui/icons-material';
import type { DatosOftalmologicos, EvaluacionOftalmologicaAnual } from '../../../../mock/oftalmologia.mock';

interface ExploracionClinicaProps {
  datos: DatosOftalmologicos;
}

export default function ExploracionClinica({ datos }: ExploracionClinicaProps) {
  const theme = useTheme();

  const estadoActual = datos.años[datos.años.length - 1]?.evaluacionOftalmologica;
  const años = datos.años.map((año: EvaluacionOftalmologicaAnual) => año.año.toString());

  const getEstadoPrueba = (resultado: string) => {
    if (resultado === "NORMAL") {
      return { color: 'success' as const, icon: <CheckIcon sx={{ fontSize: 16 }} /> };
    }
    return { color: 'warning' as const, icon: <WarningIcon sx={{ fontSize: 16 }} /> };
  };

  const getValorProfundidad = (valor: number) => {
    if (valor >= 40) return { color: 'success' as const, label: 'Excelente' };
    if (valor >= 25) return { color: 'warning' as const, label: 'Buena' };
    if (valor >= 15) return { color: 'error' as const, label: 'Regular' };
    return { color: 'default' as const, label: 'Deficiente' };
  };

  const seriesProfundidad = [
    {
      data: datos.años.map(año => año.evaluacionOftalmologica.pruebasComplementarias.testProfundidad),
      label: 'Test de Profundidad',
      color: theme.palette.primary.main,
    }
  ];

  const pruebasActuales = [
    {
      nombre: 'Test de Colores',
      resultado: estadoActual?.pruebasComplementarias.testColores || '',
      icon: <ColorIcon />,
      descripcion: 'Evaluación de discromatopsias'
    },
    {
      nombre: 'Campimetría',
      resultado: estadoActual?.pruebasComplementarias.campimetria || '',
      icon: <CampIcon />,
      descripcion: 'Campo visual periférico'
    }
  ];

  const estadisticasPruebas = {
    testColoresNormal: datos.años.filter(año => año.evaluacionOftalmologica.pruebasComplementarias.testColores === "NORMAL").length,
    campimetriaNormal: datos.años.filter(año => año.evaluacionOftalmologica.pruebasComplementarias.campimetria === "NORMAL").length,
    promedioProfundidad: datos.años.reduce((acc, año) => acc + año.evaluacionOftalmologica.pruebasComplementarias.testProfundidad, 0) / datos.años.length
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Exploración Clínica y Pruebas Complementarias
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Pruebas Complementarias Actuales ({datos.años[datos.años.length - 1]?.año})
            </Typography>
            
            <Stack spacing={2}>
              {pruebasActuales.map((prueba) => {
                const estado = getEstadoPrueba(prueba.resultado);
                return (
                  <Paper
                    key={prueba.nombre}
                    elevation={1}
                    sx={{
                      p: 2,
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {prueba.icon}
                        <Typography variant="body1" fontWeight={600}>
                          {prueba.nombre}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {estado.icon}
                        <Chip
                          label={prueba.resultado}
                          color={estado.color}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {prueba.descripcion}
                    </Typography>
                  </Paper>
                );
              })}

              <Paper elevation={1} sx={{ p: 2, border: `1px solid ${theme.palette.divider}` }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <DepthIcon />
                    <Typography variant="body1" fontWeight={600}>
                      Test de Profundidad
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary">
                    {estadoActual?.pruebasComplementarias.testProfundidad}"
                  </Typography>
                </Box>
                <Box sx={{ mb: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(100, (estadoActual?.pruebasComplementarias.testProfundidad || 0) * 2)}
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: getValorProfundidad(estadoActual?.pruebasComplementarias.testProfundidad || 0).color === 'success' 
                          ? 'success.main' 
                          : getValorProfundidad(estadoActual?.pruebasComplementarias.testProfundidad || 0).color === 'warning'
                          ? 'warning.main'
                          : 'error.main'
                      }
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    Estereopsis (segundos de arco)
                  </Typography>
                  <Chip
                    label={getValorProfundidad(estadoActual?.pruebasComplementarias.testProfundidad || 0).label}
                    color={getValorProfundidad(estadoActual?.pruebasComplementarias.testProfundidad || 0).color}
                    size="small"
                  />
                </Box>
              </Paper>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evolución Test de Profundidad
            </Typography>
            <Box sx={{ height: 250 }}>
              <BarChart
                xAxis={[{ 
                  scaleType: 'band', 
                  data: años,
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{ 
                  tickLabelStyle: { fontSize: 12 },
                  min: 0,
                  max: 50
                }]}
                series={seriesProfundidad}
                height={250}
                margin={{ left: 60, right: 20, top: 20, bottom: 40 }}
                slotProps={{
                  legend: {
                    position: { vertical: 'bottom', horizontal: 'center' },
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Resumen Estadístico de Pruebas
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light' }}>
                  <Typography variant="h4" fontWeight={700} color="success.contrastText">
                    {estadisticasPruebas.testColoresNormal}
                  </Typography>
                  <Typography variant="caption" color="success.contrastText">
                    Test Colores Normal
                  </Typography>
                  <Typography variant="body2" color="success.contrastText">
                    de {datos.años.length} evaluaciones
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: 'info.light' }}>
                  <Typography variant="h4" fontWeight={700} color="info.contrastText">
                    {estadisticasPruebas.campimetriaNormal}
                  </Typography>
                  <Typography variant="caption" color="info.contrastText">
                    Campimetría Normal
                  </Typography>
                  <Typography variant="body2" color="info.contrastText">
                    de {datos.años.length} evaluaciones
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light' }}>
                  <Typography variant="h4" fontWeight={700} color="primary.contrastText">
                    {estadisticasPruebas.promedioProfundidad.toFixed(1)}"
                  </Typography>
                  <Typography variant="caption" color="primary.contrastText">
                    Promedio Profundidad
                  </Typography>
                  <Typography variant="body2" color="primary.contrastText">
                    últimos {datos.años.length} años
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.light' }}>
                  <Typography variant="h4" fontWeight={700} color="secondary.contrastText">
                    {Math.round((estadisticasPruebas.testColoresNormal + estadisticasPruebas.campimetriaNormal) / (datos.años.length * 2) * 100)}%
                  </Typography>
                  <Typography variant="caption" color="secondary.contrastText">
                    Pruebas Normales
                  </Typography>
                  <Typography variant="body2" color="secondary.contrastText">
                    índice general
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
              <Typography variant="subtitle2" gutterBottom>
                Interpretación Clínica
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="body2">
                    <strong>Visión Cromática:</strong> {estadoActual?.pruebasComplementarias.testColores === "NORMAL" ? "Sin alteraciones en la percepción de colores" : "Requiere evaluación adicional"}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="body2">
                    <strong>Campo Visual:</strong> {estadoActual?.pruebasComplementarias.campimetria === "NORMAL" ? "Campo visual completo sin defectos" : "Presencia de defectos campimétricos"}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="body2">
                    <strong>Estereopsis:</strong> {getValorProfundidad(estadoActual?.pruebasComplementarias.testProfundidad || 0).label.toLowerCase()} percepción de profundidad
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
