import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Stack,
  Paper,
  useTheme
} from '@mui/material';
import {
  Visibility as EyeIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  Warning as WarningIcon,
  LocalHospital as MedicalIcon
} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import type { DatosOftalmologicos, EvaluacionOftalmologicaAnual } from '../../../../mock/oftalmologia.mock';

interface AntecedentesOftalmologicosProps {
  datos: DatosOftalmologicos;
}

export default function AntecedentesOftalmologicos({ datos }: AntecedentesOftalmologicosProps) {
  const theme = useTheme();

  const estadoActual = datos.años[datos.años.length - 1]?.evaluacionOftalmologica;

  const getIconAndColor = (condition: boolean) => {
    if (condition) {
      return {
        icon: <CancelIcon sx={{ fontSize: 20 }} />,
        color: 'error' as const,
        status: 'Presente'
      };
    }
    return {
      icon: <CheckIcon sx={{ fontSize: 20 }} />,
      color: 'success' as const,
      status: 'Ausente'
    };
  };

  const antecedentesOculares = [
    { key: 'glaucoma', label: 'Glaucoma', value: estadoActual?.antecedentesOculares.glaucoma },
    { key: 'retinopatiaDiabetica', label: 'Retinopatía Diabética', value: estadoActual?.antecedentesOculares.retinopatiaDiabetica },
    { key: 'ametropia', label: 'Ametropía', value: estadoActual?.antecedentesOculares.ametropia },
    { key: 'cataratas', label: 'Cataratas', value: estadoActual?.antecedentesOculares.cataratas },
    { key: 'pterigion', label: 'Pterigion', value: estadoActual?.antecedentesOculares.pterigion }
  ];

  const antecedentesSistemicos = [
    { key: 'hipertensionArterial', label: 'Hipertensión Arterial', value: estadoActual?.antecedentesSistemicos.hipertensionArterial },
    { key: 'enfermedadTiroidea', label: 'Enfermedad Tiroidea', value: estadoActual?.antecedentesSistemicos.enfermedadTiroidea },
    { key: 'dislipidemias', label: 'Dislipidemias', value: estadoActual?.antecedentesSistemicos.dislipidemias },
    { key: 'diabetesMellitus', label: 'Diabetes Mellitus', value: estadoActual?.antecedentesSistemicos.diabetesMellitus }
  ];

  const años = datos.años.map((año: EvaluacionOftalmologicaAnual) => año.año.toString());

  const seriesOculares = [
    {
      data: datos.años.map(año => año.evaluacionOftalmologica.antecedentesOculares.glaucoma ? 1 : 0),
      label: 'Glaucoma',
      color: theme.palette.error.main,
    },
    {
      data: datos.años.map(año => año.evaluacionOftalmologica.antecedentesOculares.ametropia ? 1 : 0),
      label: 'Ametropía',
      color: theme.palette.warning.main,
    },
    {
      data: datos.años.map(año => año.evaluacionOftalmologica.antecedentesOculares.pterigion ? 1 : 0),
      label: 'Pterigion',
      color: theme.palette.info.main,
    }
  ];

  const seriesSistemicas = [
    {
      data: datos.años.map(año => año.evaluacionOftalmologica.antecedentesSistemicos.hipertensionArterial ? 1 : 0),
      label: 'Hipertensión',
      color: theme.palette.error.main,
    },
    {
      data: datos.años.map(año => año.evaluacionOftalmologica.antecedentesSistemicos.diabetesMellitus ? 1 : 0),
      label: 'Diabetes',
      color: theme.palette.secondary.main,
    },
    {
      data: datos.años.map(año => año.evaluacionOftalmologica.antecedentesSistemicos.dislipidemias ? 1 : 0),
      label: 'Dislipidemias',
      color: theme.palette.warning.main,
    }
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Antecedentes Oftalmológicos
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Antecedentes Oculares ({datos.años[datos.años.length - 1]?.año})
            </Typography>
            <Stack spacing={1.5}>
              {antecedentesOculares.map((antecedente) => {
                const { icon, color, status } = getIconAndColor(antecedente.value || false);
                return (
                  <Box
                    key={antecedente.key}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 1.5,
                      borderRadius: 1,
                      bgcolor: 'background.default',
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <EyeIcon sx={{ color: theme.palette.primary.main }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {antecedente.label}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {icon}
                      <Chip
                        label={status}
                        color={color}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Antecedentes Sistémicos ({datos.años[datos.años.length - 1]?.año})
            </Typography>
            <Stack spacing={1.5}>
              {antecedentesSistemicos.map((antecedente) => {
                const { icon, color, status } = getIconAndColor(antecedente.value || false);
                return (
                  <Box
                    key={antecedente.key}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 1.5,
                      borderRadius: 1,
                      bgcolor: 'background.default',
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <MedicalIcon sx={{ color: theme.palette.secondary.main }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {antecedente.label}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {icon}
                      <Chip
                        label={status}
                        color={color}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evolución Antecedentes Oculares
            </Typography>
            <Box sx={{ height: 200 }}>
              <BarChart
                xAxis={[{
                  scaleType: 'band',
                  data: años,
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{
                  max: 1,
                  tickLabelStyle: { fontSize: 12 },
                  valueFormatter: (value: number) => value === 1 ? 'Presente' : 'Ausente'
                }]}
                series={seriesOculares}
                height={200}
                margin={{ left: 80, right: 20, top: 20, bottom: 40 }}
                slotProps={{
                  legend: {
                    position: { vertical: 'bottom', horizontal: 'center' },
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evolución Antecedentes Sistémicos
            </Typography>
            <Box sx={{ height: 200 }}>
              <BarChart
                xAxis={[{
                  scaleType: 'band',
                  data: años,
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{
                  max: 1,
                  tickLabelStyle: { fontSize: 12 },
                  valueFormatter: (value: number) => value === 1 ? 'Presente' : 'Ausente'
                }]}
                series={seriesSistemicas}
                height={200}
                margin={{ left: 80, right: 20, top: 20, bottom: 40 }}
                slotProps={{
                  legend: {
                    position: { vertical: 'bottom', horizontal: 'center' },
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Paper elevation={1} sx={{ p: 2, flex: 1, minWidth: 200 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <EyeIcon color="primary" />
                  <Typography variant="subtitle2">Conduce Vehículos</Typography>
                </Box>
                <Chip
                  label={estadoActual?.conduceVehiculos ? 'Sí' : 'No'}
                  color={estadoActual?.conduceVehiculos ? 'success' : 'default'}
                  size="small"
                />
              </Paper>

              <Paper elevation={1} sx={{ p: 2, flex: 1, minWidth: 200 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <WarningIcon color="warning" />
                  <Typography variant="subtitle2">Usa Lentes</Typography>
                </Box>
                <Chip
                  label={estadoActual?.usaLentes ? 'Sí' : 'No'}
                  color={estadoActual?.usaLentes ? 'warning' : 'default'}
                  size="small"
                />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
