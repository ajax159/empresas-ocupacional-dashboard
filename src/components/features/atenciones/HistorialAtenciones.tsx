import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Stack, 
  Typography, 
  IconButton, 
  Tooltip,
  Paper,
  InputAdornment
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

interface RowData {
  id: string;
  fecha: string;
  nombre: string;
  apellidos: string;
  puestoTrabajo: string;
}

const PrintButtons = ({ row }: { row: RowData }) => (
  <Stack direction="row" spacing={0.5}>
    <Tooltip title="Imprimir Certificado">
      <IconButton 
        size="small" 
        onClick={() => console.log('Imprimir certificado:', row.id)}
        sx={{ padding: '2px' }}
      >
        <PrintIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Exportar PDF">
      <IconButton 
        size="small" 
        onClick={() => console.log('Exportar PDF:', row.id)}
        sx={{ padding: '2px' }}
      >
        <PictureAsPdfIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Reporte Médico">
      <IconButton 
        size="small" 
        onClick={() => console.log('Reporte médico:', row.id)}
        sx={{ padding: '2px' }}
      >
        <DescriptionIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Comprobante">
      <IconButton 
        size="small" 
        onClick={() => console.log('Comprobante:', row.id)}
        sx={{ padding: '2px' }}
      >
        <ReceiptIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  </Stack>
);

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'DNI', 
    flex: 0.8,
  },
  { 
    field: 'fecha', 
    headerName: 'Fecha', 
    flex: 0.9,
    type: 'date',
    valueGetter: (_, row) => new Date(row.fecha)
  },
  { 
    field: 'nombre', 
    headerName: 'Nombre', 
    flex: 1.2,
  },
  { 
    field: 'apellidos', 
    headerName: 'Apellidos', 
    flex: 1.2,
  },
  { 
    field: 'puestoTrabajo', 
    headerName: 'Puesto', 
    flex: 1.4,
  },
  {
    field: 'acciones',
    headerName: 'Acciones',
    flex: 1,
    minWidth: 130,
    maxWidth: 170,
    sortable: false,
    filterable: false,
    renderCell: (params) => <PrintButtons row={params.row} />,
  },
];

const rows: RowData[] = [
  { id: '12345678', fecha: '2024-01-15', nombre: 'Juan Carlos', apellidos: 'Pérez García', puestoTrabajo: 'Gerente General' },
  { id: '87654321', fecha: '2024-01-16', nombre: 'Ana María', apellidos: 'González López', puestoTrabajo: 'Asistente Administrativa' },
  { id: '11223344', fecha: '2024-01-17', nombre: 'Luis Miguel', apellidos: 'Martínez Rodríguez', puestoTrabajo: 'Supervisor de Producción' },
  { id: '55667788', fecha: '2024-01-18', nombre: 'Carmen Rosa', apellidos: 'Hernández Silva', puestoTrabajo: 'Contador Senior' },
  { id: '99887766', fecha: '2024-01-19', nombre: 'Roberto', apellidos: 'Vargas Mendoza', puestoTrabajo: 'Técnico en Sistemas' },
  { id: '44556677', fecha: '2024-01-20', nombre: 'Patricia', apellidos: 'Jiménez Torres', puestoTrabajo: 'Especialista RRHH' },
  { id: '33445566', fecha: '2024-01-21', nombre: 'Carlos Eduardo', apellidos: 'Ramírez Castillo', puestoTrabajo: 'Operario de Máquinas' },
  { id: '22334455', fecha: '2024-01-22', nombre: 'María Elena', apellidos: 'Morales Vega', puestoTrabajo: 'Secretaria Ejecutiva' },
  { id: '66778899', fecha: '2024-01-23', nombre: 'Fernando', apellidos: 'Castro Ruiz', puestoTrabajo: 'Jefe de Ventas' },
  { id: '77889900', fecha: '2024-01-24', nombre: 'Sandra Lucía', apellidos: 'Díaz Paredes', puestoTrabajo: 'Analista Financiero' },
];

export default function HistorialAtenciones() {
  const [searchText, setSearchText] = useState('');
  const [searchPuesto, setSearchPuesto] = useState('');
  const [fechaInicio, setFechaInicio] = useState<Dayjs | undefined>(undefined);
  const [fechaFin, setFechaFin] = useState<Dayjs | undefined>(undefined);

  const handleFechaDesdeChange = (newValue: Dayjs | null) => {
  setFechaInicio(newValue || undefined);
};

const handleFechaFinChange = (newValue: Dayjs | null) => {
    setFechaFin(newValue || undefined);
    }

  const filteredRows = rows.filter((row) => {
    const matchesSearch = searchText === '' || 
      row.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      row.apellidos.toLowerCase().includes(searchText.toLowerCase());
    
    const matchesPuesto = searchPuesto === '' ||
      row.puestoTrabajo.toLowerCase().includes(searchPuesto.toLowerCase());
    
    const rowDate = dayjs(row.fecha);
    const matchesFechaInicio = !fechaInicio || rowDate.isAfter(fechaInicio.subtract(1, 'day'));
    const matchesFechaFin = !fechaFin || rowDate.isBefore(fechaFin.add(1, 'day'));
    
    return matchesSearch && matchesPuesto && matchesFechaInicio && matchesFechaFin;
  });

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Paper sx={{ p: { xs: 1, sm: 2 }, mb: 2 }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <FilterListIcon color="primary" />
            <Typography variant="h6" component="h2" sx={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}>
              Filtros de Búsqueda
            </Typography>
          </Box>
          
          <Stack 
            direction={{ xs: 'column', sm: 'column', md: 'row' }} 
            spacing={2} 
            alignItems={{ xs: 'stretch', md: 'flex-end' }}
          >
            <TextField
              label="Buscar por Nombre o Apellido"
              variant="outlined"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Ej: Juan García"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                flex: { xs: 1, md: 2 },
                minWidth: { xs: '100%', md: 250 }
              }}
            />

            <TextField
              label="Buscar por Puesto"
              variant="outlined"
              size="small"
              value={searchPuesto}
              onChange={(e) => setSearchPuesto(e.target.value)}
              placeholder="Ej: Gerente"
              sx={{ 
                flex: { xs: 1, md: 1.5 },
                minWidth: { xs: '100%', md: 200 }
              }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha Inicio"
                value={fechaInicio}
                onChange={handleFechaDesdeChange}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: 'small',
                    sx: { 
                      flex: { xs: 1, md: 1 },
                      minWidth: { xs: '100%', md: 150 }
                    }
                  }
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha Fin"
                value={fechaFin}
                onChange={handleFechaFinChange}
                format="DD/MM/YYYY"
                minDate={fechaInicio}
                slotProps={{
                  textField: {
                    size: 'small',
                    sx: { 
                      flex: { xs: 1, md: 1 },
                      minWidth: { xs: '100%', md: 150 }
                    }
                  }
                }}
              />
            </LocalizationProvider>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Mostrando {filteredRows.length} de {rows.length} registros
          </Typography>
        </Stack>
      </Paper>

      <Box 
        sx={{
          width: "100%",
          display:"table",
          tableLayout:"fixed",
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          initialState={{
            pagination: { paginationModel: { pageSize: 20 } },
          }}
          pageSizeOptions={[10, 20, 50]}
          density="comfortable"
          disableColumnMenu
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'background.paper',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: 600,
            },
            '& .MuiDataGrid-cell': {
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              padding: { xs: '4px', sm: '8px' },
            },
            '& .MuiDataGrid-row': {
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            },
            '& .MuiDataGrid-footerContainer': {
              minHeight: { xs: 40, sm: 52 },
            },
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