import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Stack,
  Chip,
  useTheme,
  Paper
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  MedicalServices as ToothIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon
} from '@mui/icons-material';
import type { DatosOdontologicos, DatosAnuales } from '../../../../mock/odontologia.mock';

interface EvolucionPiezaDentalProps {
  datos: DatosOdontologicos;
}

export default function EvolucionPiezaDental({ datos }: EvolucionPiezaDentalProps) {
  const theme = useTheme();

  const años = datos.años.map((año: DatosAnuales) => año.año);
  
  const indicesDentales = datos.años.map((año: DatosAnuales) => {
    const totalPiezas = 32;
    const piezasSanas = totalPiezas - año.condicionesDentales.nCaries - año.condicionesDentales.piezasAusentes.cantidad;
    const indiceCPOD = año.condicionesDentales.nCaries + año.condicionesDentales.piezasAusentes.cantidad + 
                       (año.tratamientos.curaciones || 0);
    
    return {
      año: año.año,
      piezasSanas,
      indiceCPOD,
      porcentajeSalud: (piezasSanas / totalPiezas) * 100,
      caries: año.condicionesDentales.nCaries,
      ausentes: año.condicionesDentales.piezasAusentes.cantidad,
      tratadas: año.tratamientos.curaciones || 0
    };
  });

  const seriesData = [
    {
      id: 'piezasSanas',
      label: 'Piezas Sanas',
      data: indicesDentales.map(d => d.piezasSanas),
      color: theme.palette.success.main,
    },
    {
      id: 'caries',
      label: 'Caries Activas',
      data: indicesDentales.map(d => d.caries),
      color: theme.palette.error.main,
    },
    {
      id: 'ausentes',
      label: 'Piezas Ausentes',
      data: indicesDentales.map(d => d.ausentes),
      color: theme.palette.warning.main,
    },
    {
      id: 'tratadas',
      label: 'Piezas Tratadas',
      data: indicesDentales.map(d => d.tratadas),
      color: theme.palette.info.main,
    }
  ];

  const estadoActual = indicesDentales[indicesDentales.length - 1];
  const estadoAnterior = indicesDentales[indicesDentales.length - 2];

  const getTendencia = (actual: number, anterior: number) => {
    if (!anterior) return { icon: <TrendingFlatIcon />, color: 'info', texto: 'Sin datos previos' };
    
    const diferencia = actual - anterior;
    if (Math.abs(diferencia) < 0.5) {
      return { icon: <TrendingFlatIcon />, color: 'info', texto: 'Estable' };
    } else if (diferencia > 0) {
      return { icon: <TrendingUpIcon />, color: 'success', texto: 'Mejorando' };
    } else {
      return { icon: <TrendingDownIcon />, color: 'error', texto: 'Deteriorando' };
    }
  };

  const tendenciaSalud = getTendencia(estadoActual?.porcentajeSalud || 0, estadoAnterior?.porcentajeSalud || 0);
  const tendenciaCPOD = getTendencia(estadoAnterior?.indiceCPOD || 0, estadoActual?.indiceCPOD || 0); // Invertido porque menor CPOD es mejor

  const getRiesgoSaludBucal = (porcentajeSalud: number, indiceCPOD: number) => {
    if (porcentajeSalud >= 80 && indiceCPOD <= 5) {
      return { nivel: 'Bajo', color: 'success' as const, descripcion: 'Excelente salud bucal' };
    } else if (porcentajeSalud >= 60 && indiceCPOD <= 10) {
      return { nivel: 'Moderado', color: 'warning' as const, descripcion: 'Salud bucal aceptable' };
    } else {
      return { nivel: 'Alto', color: 'error' as const, descripcion: 'Requiere atención inmediata' };
    }
  };

  const riesgoActual = getRiesgoSaludBucal(estadoActual?.porcentajeSalud || 0, estadoActual?.indiceCPOD || 0);

  const piezasAfectadas = datos.años[datos.años.length - 1]?.condicionesDentales.detalleCaries.concat(
    datos.años[datos.años.length - 1]?.condicionesDentales.piezasAusentes.detalle || []
  ) || [];

  const frecuenciaPiezas = piezasAfectadas.reduce((acc: { [key: string]: number }, pieza: string) => {
    acc[pieza] = (acc[pieza] || 0) + 1;
    return acc;
  }, {});

  const piezasMasAfectadas = Object.entries(frecuenciaPiezas)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 6)
    .map(([pieza, frecuencia]) => ({ pieza, frecuencia }));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Evolución Estado de Piezas Dentales
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Indicadores Actuales ({estadoActual?.año})
            </Typography>
            
            <Stack spacing={2}>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" fontWeight={600}>
                    Salud Bucal General
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" color={tendenciaSalud.color}>
                      {estadoActual?.porcentajeSalud.toFixed(1)}%
                    </Typography>
                    <Box sx={{ color: `${tendenciaSalud.color}.main` }}>
                      {tendenciaSalud.icon}
                    </Box>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {tendenciaSalud.texto} desde el año anterior
                </Typography>
              </Paper>

              <Paper elevation={1} sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" fontWeight={600}>
                    Índice CPOD
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" color={tendenciaCPOD.color}>
                      {estadoActual?.indiceCPOD}
                    </Typography>
                    <Box sx={{ color: `${tendenciaCPOD.color}.main` }}>
                      {tendenciaCPOD.icon}
                    </Box>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Cariados + Perdidos + Obturados
                </Typography>
              </Paper>

              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" fontWeight={600} gutterBottom>
                  Nivel de Riesgo
                </Typography>
                <Chip
                  label={`Riesgo ${riesgoActual.nivel}`}
                  color={riesgoActual.color}
                  icon={<ToothIcon />}
                  sx={{ mb: 1, width: '100%' }}
                />
                <Typography variant="caption" color="text.secondary">
                  {riesgoActual.descripcion}
                </Typography>
              </Paper>

              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" fontWeight={600} gutterBottom>
                  Distribución Actual
                </Typography>
                <Grid container spacing={1}>
                  <Grid size={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="success.main">{estadoActual?.piezasSanas}</Typography>
                      <Typography variant="caption">Sanas</Typography>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="error.main">{estadoActual?.caries}</Typography>
                      <Typography variant="caption">Caries</Typography>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="warning.main">{estadoActual?.ausentes}</Typography>
                      <Typography variant="caption">Ausentes</Typography>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="info.main">{estadoActual?.tratadas}</Typography>
                      <Typography variant="caption">Tratadas</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evolución Temporal del Estado Dental
            </Typography>
            <Box sx={{ height: 400 }}>
              <LineChart
                xAxis={[{
                  scaleType: 'point',
                  data: años,
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{
                  tickLabelStyle: { fontSize: 12 },
                  min: 0,
                  max: 32
                }]}
                series={seriesData}
                height={400}
                margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                slotProps={{
                  legend: {
                    position: { vertical: 'bottom', horizontal: 'center' },
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom>
              Piezas Dentales Más Afectadas
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {piezasMasAfectadas.map(({ pieza, frecuencia }) => (
                <Chip
                  key={pieza}
                  icon={<ToothIcon />}
                  label={`${pieza} (${frecuencia}x)`}
                  variant="outlined"
                  color="warning"
                  size="small"
                />
              ))}
              {piezasMasAfectadas.length === 0 && (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  No hay piezas específicamente afectadas registradas
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom>
              Progreso de Indicadores
            </Typography>
            <Stack spacing={1}>
              {indicesDentales.slice(-3).map((dato) => (
                <Box
                  key={dato.año}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                    bgcolor: 'background.default',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" fontWeight={600}>
                    {dato.año}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography variant="caption" color="success.main">
                      {dato.porcentajeSalud.toFixed(1)}% salud
                    </Typography>
                    <Typography variant="caption" color="error.main">
                      CPOD: {dato.indiceCPOD}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
