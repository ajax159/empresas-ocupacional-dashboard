import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  useTheme
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { DatosOdontologicos, Diagnostico, DatosAnuales } from '../../../../mock/odontologia.mock';

interface DiagnosticosTablaProps {
  datos: DatosOdontologicos;
}

export default function DiagnosticosTabla({ datos }: DiagnosticosTablaProps) {
  const theme = useTheme();

  const diagnosticosCompletos = datos.años.flatMap((año: DatosAnuales) =>
    año.diagnosticos.map((diagnostico: Diagnostico, index: number) => ({
      id: `${año.año}-${index}`,
      año: año.año,
      codigo: diagnostico.codigo,
      descripcion: diagnostico.descripcion,
      recomendacion: diagnostico.recomendacion,
      prioridad: getPrioridad(diagnostico.codigo),
    }))
  );

  function getPrioridad(codigo: string): 'alta' | 'media' | 'baja' {
    if (codigo.includes('Z87') || codigo.includes('K02') || codigo.includes('K04')) {
      return 'alta';
    } else if (codigo.includes('K05') || codigo.includes('K08')) {
      return 'media';
    }
    return 'baja';
  }

  const estadisticasDiagnosticos = {
    total: diagnosticosCompletos.length,
    porAño: datos.años.map(año => ({
      año: año.año,
      cantidad: año.diagnosticos.length
    })),
    porPrioridad: {
      alta: diagnosticosCompletos.filter(d => d.prioridad === 'alta').length,
      media: diagnosticosCompletos.filter(d => d.prioridad === 'media').length,
      baja: diagnosticosCompletos.filter(d => d.prioridad === 'baja').length,
    },
    codigosMasFrecuentes: getCodigosMasFrecuentes(diagnosticosCompletos)
  };

  function getCodigosMasFrecuentes(diagnosticos: typeof diagnosticosCompletos) {
    const conteo: { [codigo: string]: number } = {};
    diagnosticos.forEach(d => {
      conteo[d.codigo] = (conteo[d.codigo] || 0) + 1;
    });
    
    return Object.entries(conteo)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([codigo, cantidad]) => ({ codigo, cantidad }));
  }

  const columns: GridColDef[] = [
    {
      field: 'año',
      headerName: 'Año',
      width: 80,
      type: 'number',
    },
    {
      field: 'codigo',
      headerName: 'Código',
      width: 100,
      renderCell: (params) => (
        <Typography variant="body2" fontFamily="monospace" fontWeight={600}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'descripcion',
      headerName: 'Descripción',
      width: 300,
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ lineHeight: 1.2 }}>
          {params.value}
        </Typography>
      ),
    },

    {
      field: 'recomendacion',
      headerName: 'Recomendación',
      width: 350,
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ lineHeight: 1.2 }}>
          {params.value}
        </Typography>
      ),
    },
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Historial de Diagnósticos
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.light', borderRadius: 1 }}>
                  <Typography variant="h4" fontWeight={700} color="primary.contrastText">
                    {estadisticasDiagnosticos.total}
                  </Typography>
                  <Typography variant="caption" color="primary.contrastText">
                    Total Diagnósticos
                  </Typography>
                </Box>
              </Grid>
              
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'error.light', borderRadius: 1 }}>
                  <Typography variant="h4" fontWeight={700} color="error.contrastText">
                    {estadisticasDiagnosticos.porPrioridad.alta}
                  </Typography>
                  <Typography variant="caption" color="error.contrastText">
                    Prioridad Alta
                  </Typography>
                </Box>
              </Grid>
              
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
                  <Typography variant="h4" fontWeight={700} color="warning.contrastText">
                    {estadisticasDiagnosticos.porPrioridad.media}
                  </Typography>
                  <Typography variant="caption" color="warning.contrastText">
                    Prioridad Media
                  </Typography>
                </Box>
              </Grid>
              
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
                  <Typography variant="h4" fontWeight={700} color="success.contrastText">
                    {estadisticasDiagnosticos.porPrioridad.baja}
                  </Typography>
                  <Typography variant="caption" color="success.contrastText">
                    Prioridad Baja
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2" gutterBottom>
              Códigos Más Frecuentes
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {estadisticasDiagnosticos.codigosMasFrecuentes.map((item) => (
                <Box
                  key={item.codigo}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1.5,
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography variant="body2" fontFamily="monospace" fontWeight={600}>
                    {item.codigo}
                  </Typography>
                  <Chip
                    label={`${item.cantidad}x`}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="subtitle2" gutterBottom>
              Distribución por Año
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {estadisticasDiagnosticos.porAño.map((item) => (
                <Box
                  key={item.año}
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`,
                    minWidth: 80,
                  }}
                >
                  <Typography variant="h5" fontWeight={700} color="primary">
                    {item.cantidad}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.año}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
              Detalle Completo de Diagnósticos
            </Typography>
            <Box sx={{ height: 400 }}>
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
                pageSizeOptions={[5, 10, 25]}
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
