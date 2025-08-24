import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
  Chip,
  useTheme
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  RemoveRedEye as EyeIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';
import type { DatosOftalmologicos, EvaluacionOftalmologicaAnual } from '../../../../mock/oftalmologia.mock';

interface AgudezaVisualLentesProps {
  datos: DatosOftalmologicos;
}

const convertirAgudeza = (agudeza: string): number => {
  if (agudeza === "Seleccionar" || agudeza === "") return 0;
  const partes = agudeza.split('/');
  if (partes.length === 2) {
    const numerador = parseInt(partes[0]);
    const denominador = parseInt(partes[1]);
    return numerador / denominador;
  }
  return 0;
};

const getColorAgudeza = (valor: number) => {
  if (valor >= 1.0) return '#4caf50';
  if (valor >= 0.8) return '#ff9800';
  if (valor >= 0.5) return '#f44336';
  return '#9e9e9e';
};

const getEstadoAgudeza = (valor: number) => {
  if (valor >= 1.0) return { label: 'Excelente', color: 'success' as const };
  if (valor >= 0.8) return { label: 'Buena', color: 'warning' as const };
  if (valor >= 0.5) return { label: 'Regular', color: 'error' as const };
  return { label: 'Deficiente', color: 'default' as const };
};

export default function AgudezaVisualLentes({ datos }: AgudezaVisualLentesProps) {
  const theme = useTheme();

  const estadoActual = datos.años[datos.años.length - 1]?.evaluacionOftalmologica;
  const años = datos.años.map((año: EvaluacionOftalmologicaAnual) => año.año.toString());

  const seriesAgudezaLejos = [
    {
      id: 'od-lejos-sin',
      label: 'OD Lejos S/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.lejos.sinCorreccion.OD)),
      color: theme.palette.primary.main,
    },
    {
      id: 'oi-lejos-sin',
      label: 'OI Lejos S/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.lejos.sinCorreccion.OI)),
      color: theme.palette.secondary.main,
    },
    {
      id: 'od-lejos-con',
      label: 'OD Lejos C/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.lejos.conCorreccion.OD)),
      color: theme.palette.success.main,
    },
    {
      id: 'oi-lejos-con',
      label: 'OI Lejos C/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.lejos.conCorreccion.OI)),
      color: theme.palette.info.main,
    }
  ];

  const seriesAgudezaCerca = [
    {
      id: 'od-cerca-sin',
      label: 'OD Cerca S/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.cerca.sinCorreccion.OD)),
      color: theme.palette.primary.main,
    },
    {
      id: 'oi-cerca-sin',
      label: 'OI Cerca S/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.cerca.sinCorreccion.OI)),
      color: theme.palette.secondary.main,
    },
    {
      id: 'od-cerca-con',
      label: 'OD Cerca C/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.cerca.conCorreccion.OD)),
      color: theme.palette.success.main,
    },
    {
      id: 'oi-cerca-con',
      label: 'OI Cerca C/C',
      data: datos.años.map(año => convertirAgudeza(año.evaluacionOftalmologica.agudezaVisual.cerca.conCorreccion.OI)),
      color: theme.palette.info.main,
    }
  ];

  const agudezaActual = {
    lejosOD: convertirAgudeza(estadoActual?.agudezaVisual.lejos.sinCorreccion.OD || ""),
    lejosOI: convertirAgudeza(estadoActual?.agudezaVisual.lejos.sinCorreccion.OI || ""),
    cercaOD: convertirAgudeza(estadoActual?.agudezaVisual.cerca.sinCorreccion.OD || ""),
    cercaOI: convertirAgudeza(estadoActual?.agudezaVisual.cerca.sinCorreccion.OI || ""),
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Agudeza Visual y Uso de Lentes
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Estado Actual de Agudeza Visual ({datos.años[datos.años.length - 1]?.año})
            </Typography>
            
            <Grid container spacing={2}>
              <Grid size={{ xs: 6 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                    <EyeIcon color="primary" />
                    <Typography variant="body2" fontWeight={600}>OD Lejos</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: getColorAgudeza(agudezaActual.lejosOD) }}>
                    {estadoActual?.agudezaVisual.lejos.sinCorreccion.OD}
                  </Typography>
                  <Chip
                    label={getEstadoAgudeza(agudezaActual.lejosOD).label}
                    color={getEstadoAgudeza(agudezaActual.lejosOD).color}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Paper>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                    <EyeIcon color="secondary" />
                    <Typography variant="body2" fontWeight={600}>OI Lejos</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: getColorAgudeza(agudezaActual.lejosOI) }}>
                    {estadoActual?.agudezaVisual.lejos.sinCorreccion.OI}
                  </Typography>
                  <Chip
                    label={getEstadoAgudeza(agudezaActual.lejosOI).label}
                    color={getEstadoAgudeza(agudezaActual.lejosOI).color}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Paper>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                    <VisibilityIcon color="primary" />
                    <Typography variant="body2" fontWeight={600}>OD Cerca</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: getColorAgudeza(agudezaActual.cercaOD) }}>
                    {estadoActual?.agudezaVisual.cerca.sinCorreccion.OD}
                  </Typography>
                  <Chip
                    label={getEstadoAgudeza(agudezaActual.cercaOD).label}
                    color={getEstadoAgudeza(agudezaActual.cercaOD).color}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Paper>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                    <VisibilityIcon color="secondary" />
                    <Typography variant="body2" fontWeight={600}>OI Cerca</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: getColorAgudeza(agudezaActual.cercaOI) }}>
                    {estadoActual?.agudezaVisual.cerca.sinCorreccion.OI}
                  </Typography>
                  <Chip
                    label={getEstadoAgudeza(agudezaActual.cercaOI).label}
                    color={getEstadoAgudeza(agudezaActual.cercaOI).color}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
              <Typography variant="subtitle2" gutterBottom color="info.contrastText">
                Visión Binocular
              </Typography>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Typography variant="body2" color="info.contrastText">
                    <strong>Lejos:</strong> {estadoActual?.visionBinocular.lejos}
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography variant="body2" color="info.contrastText">
                    <strong>Cerca:</strong> {estadoActual?.visionBinocular.cerca}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evolución Agudeza Visual - Lejos
            </Typography>
            <Box sx={{ height: 200 }}>
              <LineChart
                xAxis={[{
                  scaleType: 'point',
                  data: años,
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{
                  tickLabelStyle: { fontSize: 12 },
                  min: 0,
                  max: 1.2
                }]}
                series={seriesAgudezaLejos}
                height={200}
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
              Evolución Agudeza Visual - Cerca
            </Typography>
            <Box sx={{ height: 250 }}>
              <LineChart
                xAxis={[{
                  scaleType: 'point',
                  data: años,
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{
                  tickLabelStyle: { fontSize: 12 },
                  min: 0,
                  max: 1.2
                }]}
                series={seriesAgudezaCerca}
                height={250}
                margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
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
              <Paper elevation={1} sx={{ p: 2, flex: 1, minWidth: 150 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  {estadoActual?.usaLentes ? <VisibilityIcon color="warning" /> : <VisibilityOffIcon color="success" />}
                  <Typography variant="subtitle2">Uso de Lentes</Typography>
                </Box>
                <Chip
                  label={estadoActual?.usaLentes ? 'Requiere Corrección' : 'Sin Corrección'}
                  color={estadoActual?.usaLentes ? 'warning' : 'success'}
                  size="small"
                />
              </Paper>

              <Paper elevation={1} sx={{ p: 2, flex: 1, minWidth: 150 }}>
                <Typography variant="subtitle2" gutterBottom>Corrección con Lentes</Typography>
                <Typography variant="body2">
                  <strong>Lejos:</strong> {estadoActual?.agudezaVisual.lejos.conCorreccion.OD} / {estadoActual?.agudezaVisual.lejos.conCorreccion.OI}
                </Typography>
                <Typography variant="body2">
                  <strong>Cerca:</strong> {estadoActual?.agudezaVisual.cerca.conCorreccion.OD} / {estadoActual?.agudezaVisual.cerca.conCorreccion.OI}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
