import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Stack,
  LinearProgress,
  useTheme
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import type { DatosOdontologicos, DatosAnuales } from '../../../../mock/odontologia.mock';

interface TratamientosComparativoProps {
  datos: DatosOdontologicos;
}

export default function TratamientosComparativo({ datos }: TratamientosComparativoProps) {
  const theme = useTheme();

  const años = datos.años.map((año: DatosAnuales) => año.año);
  
  const tiposTratamientos = ['curaciones', 'exodoncia', 'protesis', 'profilaxis', 'endodoncia'] as const;

  const tratamientosPorAño = años.map(año => {
    const añoData = datos.años.find((a: DatosAnuales) => a.año === año);
    const conteos: { [key: string]: number } = {};
    
    tiposTratamientos.forEach(tipo => {
      conteos[tipo] = añoData?.tratamientos[tipo] || 0;
    });
    
    return conteos;
  });

  const colores = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    theme.palette.info.main,
    theme.palette.success.main,
    '#9c27b0',
    '#ff9800'
  ];

  const seriesData = tiposTratamientos.map((tipo, index) => ({
    dataKey: tipo,
    label: tipo,
    color: colores[index % colores.length],
  }));

  const chartData = años.map((año, index) => ({
    año,
    ...tratamientosPorAño[index]
  }));

  const añoActual = datos.años[datos.años.length - 1];
  const tratamientosActuales = añoActual?.tratamientos;

  const estadisticasTratamientos = tiposTratamientos.map(tipo => {
    const totalTodos = datos.años.reduce((acc, año) => 
      acc + (año.tratamientos[tipo] || 0), 0
    );
    const actualAño = tratamientosActuales?.[tipo] || 0;
    const promedio = totalTodos / datos.años.length;
    
    return {
      tipo,
      total: totalTodos,
      actual: actualAño,
      promedio: Math.round(promedio * 10) / 10,
      porcentajeDelTotal: totalTodos > 0 ? (actualAño / totalTodos) * 100 : 0
    };
  }).sort((a, b) => b.total - a.total);


  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Tratamientos Comparativo Anual
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Distribución de Tratamientos por Año
            </Typography>
            <Box sx={{ height: 300 }}>
              <BarChart
                dataset={chartData}
                xAxis={[{ 
                  scaleType: 'band', 
                  dataKey: 'año',
                  tickLabelStyle: { fontSize: 12 }
                }]}
                yAxis={[{
                  tickLabelStyle: { fontSize: 12 }
                }]}
                series={seriesData}
                height={300}
                margin={{ left: 60, right: 20, top: 20, bottom: 80 }}
                slotProps={{
                  legend: {
                    position: { vertical: 'bottom', horizontal: 'center' },
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Resumen Estadístico
            </Typography>
            <Stack spacing={2}>
              {estadisticasTratamientos.slice(0, 6).map((stat) => (
                <Box
                  key={stat.tipo}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" fontWeight={600} noWrap>
                      {stat.tipo}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {stat.total}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      Este año: {stat.actual} | Promedio: {stat.promedio}
                    </Typography>
                  </Box>
                  
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(100, (stat.actual / Math.max(stat.promedio * 2, 1)) * 100)}
                    sx={{ 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: stat.actual > stat.promedio ? 'warning.main' : 'success.main'
                      }
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
