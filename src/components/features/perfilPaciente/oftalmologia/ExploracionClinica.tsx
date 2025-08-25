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
        </Grid>
      </CardContent>
    </Card>
  );
}
