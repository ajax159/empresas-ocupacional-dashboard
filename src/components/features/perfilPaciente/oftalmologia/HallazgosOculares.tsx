import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import {
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import type { DatosOftalmologicos, Diagnostico } from '../../../../mock/oftalmologia.mock';

interface HallazgosOcularesProps {
  datos: DatosOftalmologicos;
}

export default function HallazgosOculares({ datos }: HallazgosOcularesProps) {
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


  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3}>

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
