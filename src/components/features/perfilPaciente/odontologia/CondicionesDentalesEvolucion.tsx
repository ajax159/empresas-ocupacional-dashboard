import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Stack,
  useTheme
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon
} from '@mui/icons-material';
import type { DatosOdontologicos, DatosAnuales } from '../../../../mock/odontologia.mock';

interface CondicionesDentalesEvolucionProps {
  datos: DatosOdontologicos;
}

export default function CondicionesDentalesEvolucion({ datos }: CondicionesDentalesEvolucionProps) {
  const theme = useTheme();

  const años = datos.años.map((año: DatosAnuales) => año.año);
  
  const seriesData = [
    {
      id: 'caries',
      label: 'Número de Caries',
      data: datos.años.map((año: DatosAnuales) => año.condicionesDentales.nCaries),
      color: theme.palette.error.main,
    },
    {
      id: 'ausentes',
      label: 'Piezas Ausentes',
      data: datos.años.map((año: DatosAnuales) => año.condicionesDentales.piezasAusentes.cantidad),
      color: theme.palette.warning.main,
    },
    {
      id: 'remanentes',
      label: 'Remanentes Radiculares',
      data: datos.años.map((año: DatosAnuales) => año.condicionesDentales.remanenteRadicular),
      color: theme.palette.info.main,
    },
    {
      id: 'necrosis',
      label: 'Necrosis Pulpar',
      data: datos.años.map((año: DatosAnuales) => año.condicionesDentales.necrosisPulpar),
      color: theme.palette.secondary.main,
    }
  ];

  const estadoActual = datos.años[datos.años.length - 1]?.condicionesDentales;
  const estadoAnterior = datos.años[datos.años.length - 2]?.condicionesDentales;

  const getTrendIcon = (actual: number, anterior: number) => {
    if (actual > anterior) {
      return { icon: <TrendingUpIcon />, color: 'error', text: 'Incremento' };
    } else if (actual < anterior) {
      return { icon: <TrendingDownIcon />, color: 'success', text: 'Reducción' };
    } else {
      return { icon: <TrendingFlatIcon />, color: 'info', text: 'Estable' };
    }
  };

  const condicionesActuales = [
    {
      label: 'Caries Activas',
      valor: estadoActual?.nCaries || 0,
      anterior: estadoAnterior?.nCaries || 0,
      detalle: estadoActual?.detalleCaries || [],
      tipo: 'caries'
    },
    {
      label: 'Piezas Ausentes',
      valor: estadoActual?.piezasAusentes.cantidad || 0,
      anterior: estadoAnterior?.piezasAusentes.cantidad || 0,
      detalle: estadoActual?.piezasAusentes.detalle || [],
      tipo: 'ausentes'
    },
    {
      label: 'Remanentes Radiculares',
      valor: estadoActual?.remanenteRadicular || 0,
      anterior: estadoAnterior?.remanenteRadicular || 0,
      detalle: [],
      tipo: 'remanentes'
    },
    {
      label: 'Necrosis Pulpar',
      valor: estadoActual?.necrosisPulpar || 0,
      anterior: estadoAnterior?.necrosisPulpar || 0,
      detalle: [],
      tipo: 'necrosis'
    }
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Condiciones Dentales Cuantificables
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Estado Actual ({datos.años[datos.años.length - 1]?.año})
            </Typography>
            <Stack spacing={2}>
              {condicionesActuales.map((condicion) => {
                const trend = getTrendIcon(condicion.valor, condicion.anterior);
                return (
                  <Box
                    key={condicion.tipo}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.default',
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" fontWeight={600}>
                        {condicion.label}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" color={trend.color}>
                          {condicion.valor}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: `${trend.color}.main` }}>
                          {trend.icon}
                        </Box>
                      </Box>
                    </Box>
                    
                    {estadoAnterior && (
                      <Typography variant="caption" color="text.secondary">
                        {trend.text}: {Math.abs(condicion.valor - condicion.anterior)} desde el año anterior
                      </Typography>
                    )}
                    
                    {condicion.detalle.length > 0 && (
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="caption" color="text.secondary" display="block">
                          Piezas afectadas:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                          {condicion.detalle.slice(0, 6).map((pieza, index) => (
                            <Chip
                              key={index}
                              label={pieza}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem', height: 20 }}
                            />
                          ))}
                          {condicion.detalle.length > 6 && (
                            <Chip
                              label={`+${condicion.detalle.length - 6}`}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem', height: 20 }}
                            />
                          )}
                        </Box>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evolución Temporal
            </Typography>
            <Box sx={{ height: 350 }}>
              <LineChart
                xAxis={[{
                  scaleType: 'point',
                  data: años,
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{
                  tickLabelStyle: { fontSize: 12 },
                  min: 0
                }]}
                series={seriesData}
                height={350}
                margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                slotProps={{
                  legend: {
                    position: { vertical: 'bottom', horizontal: 'center' },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            Análisis de Tendencias
          </Typography>
          <Grid container spacing={2}>
            {(() => {
              const primerAño = datos.años[0]?.condicionesDentales;
              const ultimoAño = datos.años[datos.años.length - 1]?.condicionesDentales;
              
              if (!primerAño || !ultimoAño) return null;

              const cambios = [
                {
                  condicion: 'Caries',
                  inicial: primerAño.nCaries,
                  final: ultimoAño.nCaries,
                  tipo: 'negativo'
                },
                {
                  condicion: 'Piezas Ausentes',
                  inicial: primerAño.piezasAusentes.cantidad,
                  final: ultimoAño.piezasAusentes.cantidad,
                  tipo: 'negativo'
                },
                {
                  condicion: 'Remanentes Radiculares',
                  inicial: primerAño.remanenteRadicular,
                  final: ultimoAño.remanenteRadicular,
                  tipo: 'negativo'
                },
                {
                  condicion: 'Necrosis Pulpar',
                  inicial: primerAño.necrosisPulpar,
                  final: ultimoAño.necrosisPulpar,
                  tipo: 'negativo'
                }
              ];

              return cambios.map((cambio, index) => {
                const diferencia = cambio.final - cambio.inicial;
                const mejora = diferencia < 0;
                const empeora = diferencia > 0;
                
                return (
                  <Grid size={{ xs: 6, sm: 3 }} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="caption" color="text.secondary">
                        {cambio.condicion}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                        {mejora ? (
                          <TrendingDownIcon color="success" fontSize="small" />
                        ) : empeora ? (
                          <TrendingUpIcon color="error" fontSize="small" />
                        ) : (
                          <TrendingFlatIcon color="info" fontSize="small" />
                        )}
                        <Typography 
                          variant="body2" 
                          color={mejora ? 'success.main' : empeora ? 'error.main' : 'info.main'}
                          fontWeight={600}
                        >
                          {diferencia > 0 ? '+' : ''}{diferencia}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              });
            })()}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
