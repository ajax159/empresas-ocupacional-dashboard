import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Chip from '@mui/material/Chip';

interface Procedimiento {
    examen: string;
    estado: React.ReactNode;
}

function createData(
    dni: number,
    nombres: string,
    apellidos: string,
    puesto: string,
    horainicio: string,
    horafin: string,
    estado: React.ReactNode
) {
    return {
        dni,
        nombres,
        apellidos,
        puesto,
        horainicio,
        horafin,
        estado,
        procedimiento: [
            {
                examen: 'Evaluacion Medica',
                estado: <Chip label="En Proceso" color="warning" size="small" />,
            },
            {
                examen: 'Glucosa',
                estado: <Chip label="Completado" color="success" size="small" />,
            },
        ] as Procedimiento[],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.dni}
                </TableCell>
                <TableCell align="right">{row.nombres}</TableCell>
                <TableCell align="right">{row.apellidos}</TableCell>
                <TableCell align="right">{row.puesto}</TableCell>
                <TableCell align="right">{row.horainicio}</TableCell>
                <TableCell align="right">{row.horafin}</TableCell>
                <TableCell align="right">{row.estado}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Procedimientos
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Examen</TableCell>
                                        <TableCell>Estado</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.procedimiento.map((procedimientoRow) => (
                                        <TableRow key={procedimientoRow.examen}>
                                            <TableCell component="th" scope="row">
                                                {procedimientoRow.examen}
                                            </TableCell>
                                            <TableCell>{procedimientoRow.estado}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
const rows = [
    createData(12345678, 'Juan', 'Pérez', 'Médico', '08:00', '10:00', <Chip label="En Proceso" color="warning" size="small" />),
    createData(23456789, 'Ana', 'Gómez', 'Enfermera', '09:00', '11:00', <Chip label="Completado" color="success" size="small" />),
    createData(34567890, 'Luis', 'Martínez', 'Técnico', '10:30', '12:30', <Chip label="En Espera" color="info" size="small" />),
    createData(45678901, 'María', 'López', 'Auxiliar', '11:00', '13:00', <Chip label="Cancelado" color="error" size="small" />),
    createData(56789012, 'Carlos', 'Hernández', 'Psicólogo', '12:00', '14:00', <Chip label="En Proceso" color="warning" size="small" />),
];

export default function AtencionesTiempoReal() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 2,
                }}
            >
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontSize: { xs: '0.95rem', sm: '1.125rem' },
                        fontWeight: 600
                    }}
                >
                    Estado Actual de Atenciones
                </Typography>
                <img
                    src="src\assets\live-streaming.gif"
                    alt="En vivo"
                    style={{
                        width: '28px',
                        height: '28px',
                        objectFit: 'contain'
                    }}
                />
            </Box>
            <Box sx={{
                width: "100%",
                display: "table",
                tableLayout: "fixed",
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>DNI</TableCell>
                                <TableCell align="right">Nombres</TableCell>
                                <TableCell align="right">Apellidos</TableCell>
                                <TableCell align="right">Puesto</TableCell>
                                <TableCell align="right">H. Inicio</TableCell>
                                <TableCell align="right">H. Fin</TableCell>
                                <TableCell align="right">Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedRows.map((row) => (
                                <Row key={row.dni} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        labelRowsPerPage="Filas por página:"
                        labelDisplayedRows={({ from, to, count }) =>
                            `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}`
                        }
                    />
                </TableContainer>
            </Box>
        </Box>
    );
}