import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Box,
  Stack,
  useTheme
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Warning as WarningIcon
} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import type { DatosOdontologicos, DatosAnuales } from '../../../../mock/odontologia.mock';

interface FactoresRiesgoEvolucionProps {
  datos: DatosOdontologicos;
}

export default function FactoresRiesgoEvolucion({ datos }: FactoresRiesgoEvolucionProps) {
  const theme = useTheme();

  const años = datos.años.map((año: DatosAnuales) => año.año.toString());
  const factoresData = [
    {
      name: 'Sarro Dental',
      data: datos.años.map((año: DatosAnuales) => año.factoresRiesgo.sarroDental ? 1 : 0),
      color: theme.palette.error.main,
    },
    {
      name: 'Placa Bacteriana',
      data: datos.años.map((año: DatosAnuales) => año.factoresRiesgo.placaBacteriana ? 1 : 0),
      color: theme.palette.warning.main,
    },
    {
      name: 'Gingivitis',
      data: datos.años.map((año: DatosAnuales) => año.factoresRiesgo.gingivitis ? 1 : 0),
      color: theme.palette.info.main,
    },
    {
      name: 'Periodontitis',
      data: datos.años.map((año: DatosAnuales) => año.factoresRiesgo.periodontitis ? 1 : 0),
      color: theme.palette.error.dark,
    },
    {
      name: 'Remanentes Radiculares',
      data: datos.años.map((año: DatosAnuales) => año.factoresRiesgo.remanentesRadiculares.tiene ? 1 : 0),
      color: theme.palette.secondary.main,
    }
  ];

  const estadoActual = datos.años[datos.años.length - 1]?.factoresRiesgo;

  const getIconAndColor = (condition: boolean) => {
    if (condition) {
      return {
        icon: <CancelIcon sx={{ fontSize: 20 }} />,
        color: 'error' as const,
        status: 'Presente'
      };
    }
    return {
      icon: <CheckCircleIcon sx={{ fontSize: 20 }} />,
      color: 'success' as const,
      status: 'Ausente'
    };
  };

  const factoresToShow = [
    { key: 'sarroDental', label: 'Sarro Dental', value: estadoActual?.sarroDental },
    { key: 'placaBacteriana', label: 'Placa Bacteriana', value: estadoActual?.placaBacteriana },
    { key: 'gingivitis', label: 'Gingivitis', value: estadoActual?.gingivitis },
    { key: 'periodontitis', label: 'Periodontitis', value: estadoActual?.periodontitis },
    { 
      key: 'remanentesRadiculares', 
      label: 'Remanentes Radiculares', 
      value: estadoActual?.remanentesRadiculares.tiene,
      extra: estadoActual?.remanentesRadiculares.cantidad || 0
    }
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Factores de Riesgo e Higiene Oral
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Estado Actual ({datos.años[datos.años.length - 1]?.año})
            </Typography>
            <Stack spacing={1.5}>
              {factoresToShow.map((factor) => {
                const { icon, color, status } = getIconAndColor(factor.value || false);
                return (
                  <Box
                    key={factor.key}
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
                      {icon}
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {factor.label}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip
                        label={status}
                        color={color}
                        size="small"
                        variant="outlined"
                      />
                      {factor.extra !== undefined && factor.extra > 0 && (
                        <Chip
                          label={`${factor.extra} piezas`}
                          size="small"
                          sx={{ backgroundColor: theme.palette.grey[100] }}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evolución Temporal
            </Typography>
            <Box sx={{ height: 280 }}>
              <BarChart
                xAxis={[{ 
                  scaleType: 'band', 
                  data: años,
                  tickLabelStyle: {
                    fontSize: 12,
                  }
                }]}
                yAxis={[{ 
                  max: 1,
                  tickLabelStyle: {
                    fontSize: 12,
                  },
                  valueFormatter: (value: number) => value === 1 ? 'Presente' : 'Ausente'
                }]}
                series={factoresData.map(factor => ({
                  data: factor.data,
                  label: factor.name,
                  color: factor.color,
                }))}
                height={280}
                margin={{ left: 80, right: 20, top: 20, bottom: 60 }}
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
            Tendencia General
          </Typography>
          {(() => {
            const primerAño = datos.años[0]?.factoresRiesgo;
            const ultimoAño = datos.años[datos.años.length - 1]?.factoresRiesgo;
            
            if (!primerAño || !ultimoAño) return null;

            const factoresPrimer = [
              primerAño.sarroDental,
              primerAño.placaBacteriana,
              primerAño.gingivitis,
              primerAño.periodontitis,
              primerAño.remanentesRadiculares.tiene
            ].filter(Boolean).length;

            const factoresUltimo = [
              ultimoAño.sarroDental,
              ultimoAño.placaBacteriana,
              ultimoAño.gingivitis,
              ultimoAño.periodontitis,
              ultimoAño.remanentesRadiculares.tiene
            ].filter(Boolean).length;

            const mejoria = factoresPrimer > factoresUltimo;
            const estable = factoresPrimer === factoresUltimo;

            return (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {mejoria ? (
                  <>
                    <CheckCircleIcon color="success" />
                    <Typography variant="body2" color="success.main">
                      Mejora significativa: reducción de {factoresPrimer - factoresUltimo} factor(es) de riesgo
                    </Typography>
                  </>
                ) : estable ? (
                  <>
                    <WarningIcon color="warning" />
                    <Typography variant="body2" color="warning.main">
                      Estado estable: {factoresUltimo} factor(es) de riesgo mantienen
                    </Typography>
                  </>
                ) : (
                  <>
                    <CancelIcon color="error" />
                    <Typography variant="body2" color="error.main">
                      Deterioro: incremento de {factoresUltimo - factoresPrimer} factor(es) de riesgo
                    </Typography>
                  </>
                )}
              </Box>
            );
          })()}
        </Box>
      </CardContent>
    </Card>
  );
}
