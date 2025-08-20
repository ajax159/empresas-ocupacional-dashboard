import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [
    { especialidad: 'Cardiología', pendientes: 3, completadas: 12, canceladas: 1 },
    { especialidad: 'Neurología', pendientes: 2, completadas: 8, canceladas: 0 },
    { especialidad: 'Oftalmología', pendientes: 1, completadas: 5, canceladas: 1 },
    { especialidad: 'Dermatología', pendientes: 0, completadas: 3, canceladas: 0 },
];

export default function EstadoInterconsultas() {
    const especialidades = data.map(item => item.especialidad);
    const pendientes = data.map(item => item.pendientes);
    const completadas = data.map(item => item.completadas);
    const canceladas = data.map(item => item.canceladas);

    const totalPendientes = pendientes.reduce((a, b) => a + b, 0);
    const totalCompletadas = completadas.reduce((a, b) => a + b, 0);
    const totalCanceladas = canceladas.reduce((a, b) => a + b, 0);

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Estado de Interconsultas
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip label={`Pendientes: ${totalPendientes}`} color="warning" size="small" />
                    <Chip label={`Completadas: ${totalCompletadas}`} color="success" size="small" />
                    <Chip label={`Canceladas: ${totalCanceladas}`} color="error" size="small" />
                </Box>

                <Box sx={{ width: '100%', height: 300 }}>
                    <BarChart
                        width={500}
                        height={300}
                        series={[
                            { data: pendientes, label: 'Pendientes', color: '#ff9800' },
                            { data: completadas, label: 'Completadas', color: '#4caf50' },
                            { data: canceladas, label: 'Canceladas', color: '#f44336' },
                        ]}
                        xAxis={[{ data: especialidades, scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}
