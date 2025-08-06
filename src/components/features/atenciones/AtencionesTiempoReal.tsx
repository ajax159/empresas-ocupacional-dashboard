import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'DNI', 
    flex: 0.7, 
  },
  { 
    field: 'nombres', 
    headerName: 'Nombres', 
    flex: 1.1, 
    minWidth: 100 
  },
  { 
    field: 'apellidos', 
    headerName: 'Apellidos', 
    flex: 1.1, 
  },
  { 
    field: 'puesto', 
    headerName: 'Puesto', 
    flex: 1.2, 
  },
  { 
    field: 'horainicio', 
    headerName: 'H. Inicio', 
    flex: 0.8, 
  },
  { 
    field: 'horafin', 
    headerName: 'H. Fin', 
    flex: 0.8, 
  },
  { 
    field: 'estado', 
    headerName: 'Estado', 
    flex: 0.9, 
    renderCell: (params) => (
      <Chip 
        label={params.row.estado} 
        color={params.row.estado === 'Finalizado' ? 'success' : 'warning'} 
        size="small"
      />
    ) 
  },
  {
    field: 'acciones',
    headerName: 'Acciones',
    flex: 0.6,
    minWidth: 80,
    maxWidth: 100,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
        <IconButton 
          onClick={() => alert(`Atención ID: ${params.row.id}`)}
          size="small"
        >
            <RemoveRedEyeIcon fontSize="small" />
        </IconButton>
    ),
  },
];

const rows = [
    { id: '12345678', nombres: 'Juan', apellidos: 'Pérez', puesto: 'Gerente', horainicio: '08:00', horafin: '17:00', estado: 'En Proceso' },
    { id: '87654321', nombres: 'Ana', apellidos: 'Gómez', puesto: 'Asistente', horainicio: '09:00', horafin: '18:00', estado: 'Finalizado' },
    { id: '11223344', nombres: 'Luis', apellidos: 'Martínez', puesto: 'Supervisor', horainicio: '07:30', horafin: '16:30', estado: 'Pendiente' },
];


export default function AtencionesTiempoReal() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0
            }}
        >
                    <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                            mb: 2,
                            fontSize: { xs: '0.95rem', sm: '1.125rem' },
                            fontWeight: 600
                        }}
                    >
                        Estado Actual de Atenciones
                    </Typography>
                    
                    <Box         sx={{
                              width: "100%",
                              display:"table",
                              tableLayout:"fixed",
                            }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            getRowClassName={(params) =>
                                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                            }
                            initialState={{
                                pagination: { paginationModel: { pageSize: 10 } },
                            }}
                            pageSizeOptions={[5, 10, 20]}
                            density="comfortable"
                            disableColumnMenu
                            sx={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                '& .MuiDataGrid-columnHeaders': {
                                    backgroundColor: 'background.paper',
                                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
                                    fontWeight: 600,
                                    minHeight: { xs: 36, sm: 44, md: 48 },
                                },
                                '& .MuiDataGrid-cell': {
                                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
                                    padding: { xs: '2px 4px', sm: '4px 8px', md: '8px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                },
                                '& .MuiDataGrid-row': {
                                    minHeight: { xs: 36, sm: 44, md: 48 },
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                    },
                                },
                                '& .MuiDataGrid-footerContainer': {
                                    minHeight: { xs: 36, sm: 44, md: 48 },
                                    '& .MuiTablePagination-displayedRows': {
                                        fontSize: { xs: '0.7rem', sm: '0.8rem' }
                                    },
                                    '& .MuiTablePagination-selectLabel': {
                                        fontSize: { xs: '0.7rem', sm: '0.8rem' }
                                    }
                                },
                                // Scroll horizontal en móviles
                                overflowX: { xs: 'auto', md: 'hidden' },
                            }}
                            slotProps={{
                                filterPanel: {
                                    filterFormProps: {
                                        logicOperatorInputProps: {
                                            variant: 'outlined',
                                            size: 'small',
                                        },
                                        columnInputProps: {
                                            variant: 'outlined',
                                            size: 'small',
                                            sx: { mt: 'auto' },
                                        },
                                        operatorInputProps: {
                                            variant: 'outlined',
                                            size: 'small',
                                            sx: { mt: 'auto' },
                                        },
                                        valueInputProps: {
                                            InputComponentProps: {
                                                variant: 'outlined',
                                                size: 'small',
                                            },
                                        },
                                    },
                                },
                            }}
                        />
                    </Box>
        </Box>
    );
}