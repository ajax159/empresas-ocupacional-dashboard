import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Stack,
  Paper,
  Alert,
  useTheme
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import {
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import type { DatosOftalmologicos, Diagnostico } from '../../../../mock/oftalmologia.mock';

interface HallazgosOcularesProps {
  datos: DatosOftalmologicos;
}

export default function HallazgosOculares({ datos }: HallazgosOcularesProps) {
  const theme = useTheme();

  const estadoActual = datos.años[datos.años.length - 1]?.evaluacionOftalmologica;

  const getSeveridadDiagnostico = (codigo: string) => {
    if (codigo.startsWith('H40') || codigo.startsWith('E10') || codigo.startsWith('E11')) {
      return { severity: 'alta', color: 'error' as const, icon: <ErrorIcon sx={{ fontSize: 16 }} /> };
    }
    if (codigo.startsWith('H52') || codigo.startsWith('H11')) {
      return { severity: 'media', color: 'warning' as const, icon: <WarningIcon sx={{ fontSize: 16 }} /> };
    }
    return { severity: 'baja', color: 'info' as const, icon: <InfoIcon sx={{ fontSize: 16 }} /> };
  };

  const diagnosticosCompletos = datos.años.flatMap((año, index) =>
    año.evaluacionOftalmologica.diagnosticos.map((diagnostico: Diagnostico) => ({
      id: `${año.año}-${diagnostico.codigo}`,
      año: año.año,
      codigo: diagnostico.codigo,
      descripcion: diagnostico.descripcion,
      severidad: getSeveridadDiagnostico(diagnostico.codigo).severity,
      estado: index === datos.años.length - 1 ? 'Actual' : 'Histórico'
    }))
  );

  const estadisticasDiagnosticos = {
    total: diagnosticosCompletos.length,
    actuales: estadoActual?.diagnosticos.length || 0,
    severidadAlta: diagnosticosCompletos.filter(d => d.severidad === 'alta').length,
    severidadMedia: diagnosticosCompletos.filter(d => d.severidad === 'media').length,
    severidadBaja: diagnosticosCompletos.filter(d => d.severidad === 'baja').length
  };

  const columns: GridColDef[] = [
    {
      field: 'año',
      headerName: 'Año',
      width: 80,
      type: 'number',
    },
    {
      field: 'codigo',
      headerName: 'Código CIE-10',
      width: 120,
      renderCell: (params) => (
        <Typography variant="body2" fontFamily="monospace" fontWeight={600}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'descripcion',
      headerName: 'Diagnóstico',
      width: 300,
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ lineHeight: 1.2 }}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'severidad',
      headerName: 'Severidad',
      width: 120,
      renderCell: (params) => {
        const config = getSeveridadDiagnostico(params.row.codigo);
        return (
          <Chip
            label={params.value.toUpperCase()}
            color={config.color}
            size="small"
            icon={config.icon}
            variant="outlined"
          />
        );
      },
    },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Actual' ? 'primary' : 'default'}
          size="small"
          variant={params.value === 'Actual' ? 'filled' : 'outlined'}
        />
      ),
    },
  ];

  const hallazgosComunes = [
    {
      nombre: 'Pterigion',
      presente: estadoActual?.antecedentesOculares.pterigion,
      descripcion: 'Crecimiento fibrovascular sobre la córnea',
      riesgo: 'medio'
    },
    {
      nombre: 'Ametropía',
      presente: estadoActual?.antecedentesOculares.ametropia,
      descripcion: 'Defectos refractivos del ojo',
      riesgo: 'bajo'
    },
    {
      nombre: 'Cataratas',
      presente: estadoActual?.antecedentesOculares.cataratas,
      descripcion: 'Opacificación del cristalino',
      riesgo: 'alto'
    },
    {
      nombre: 'Glaucoma',
      presente: estadoActual?.antecedentesOculares.glaucoma,
      descripcion: 'Neuropatía óptica por presión intraocular',
      riesgo: 'alto'
    }
  ];

  const getRiesgoColor = (riesgo: string) => {
    switch (riesgo) {
      case 'alto': return 'error';
      case 'medio': return 'warning';
      case 'bajo': return 'success';
      default: return 'default';
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Hallazgos Oculares y Diagnósticos
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Hallazgos Principales ({datos.años[datos.años.length - 1]?.año})
            </Typography>
            
            <Stack spacing={2}>
              {hallazgosComunes.map((hallazgo) => (
                <Paper
                  key={hallazgo.nombre}
                  elevation={1}
                  sx={{
                    p: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: hallazgo.presente ? 'warning.light' : 'success.light',
                    opacity: hallazgo.presente ? 1 : 0.7
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1" fontWeight={600}>
                      {hallazgo.nombre}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {hallazgo.presente ? <WarningIcon color="warning" /> : <CheckIcon color="success" />}
                      <Chip
                        label={hallazgo.presente ? 'Presente' : 'Ausente'}
                        color={hallazgo.presente ? 'warning' : 'success'}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {hallazgo.descripcion}
                  </Typography>
                  <Chip
                    label={`Riesgo ${hallazgo.riesgo}`}
                    color={getRiesgoColor(hallazgo.riesgo)}
                    size="small"
                    variant="outlined"
                  />
                </Paper>
              ))}
            </Stack>

            {estadoActual?.observaciones && (
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Observaciones Clínicas
                </Typography>
                <Typography variant="body2">
                  {estadoActual.observaciones}
                </Typography>
              </Alert>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Estadísticas de Diagnósticos
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid size={{ xs: 6 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light' }}>
                  <Typography variant="h4" fontWeight={700} color="primary.contrastText">
                    {estadisticasDiagnosticos.total}
                  </Typography>
                  <Typography variant="caption" color="primary.contrastText">
                    Total Diagnósticos
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid size={{ xs: 6 }}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: 'warning.light' }}>
                  <Typography variant="h4" fontWeight={700} color="warning.contrastText">
                    {estadisticasDiagnosticos.actuales}
                  </Typography>
                  <Typography variant="caption" color="warning.contrastText">
                    Diagnósticos Actuales
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 4 }}>
                <Paper elevation={1} sx={{ p: 1, textAlign: 'center', bgcolor: 'error.light' }}>
                  <Typography variant="h6" fontWeight={700} color="error.contrastText">
                    {estadisticasDiagnosticos.severidadAlta}
                  </Typography>
                  <Typography variant="caption" color="error.contrastText">
                    Alta
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 4 }}>
                <Paper elevation={1} sx={{ p: 1, textAlign: 'center', bgcolor: 'warning.light' }}>
                  <Typography variant="h6" fontWeight={700} color="warning.contrastText">
                    {estadisticasDiagnosticos.severidadMedia}
                  </Typography>
                  <Typography variant="caption" color="warning.contrastText">
                    Media
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 4 }}>
                <Paper elevation={1} sx={{ p: 1, textAlign: 'center', bgcolor: 'info.light' }}>
                  <Typography variant="h6" fontWeight={700} color="info.contrastText">
                    {estadisticasDiagnosticos.severidadBaja}
                  </Typography>
                  <Typography variant="caption" color="info.contrastText">
                    Baja
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              Distribución por severidad según códigos CIE-10
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
              Historial Completo de Diagnósticos
            </Typography>
            <Box sx={{ height: 300 }}>
              <DataGrid
                rows={diagnosticosCompletos}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                  sorting: {
                    sortModel: [{ field: 'año', sort: 'desc' }],
                  },
                }}
                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick
                getRowHeight={() => 'auto'}
                sx={{
                  '& .MuiDataGrid-cell': {
                    padding: '8px',
                    lineHeight: 1.2,
                  },
                  '& .MuiDataGrid-row': {
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
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
