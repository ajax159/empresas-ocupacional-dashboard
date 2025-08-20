import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const vacunasData = [
    { vacuna: 'Hepatitis B', dosis1: 85, dosis2: 78, dosis3: 65, completa: 60 },
    { vacuna: 'Tétano', dosis1: 92, dosis2: 88, dosis3: 0, completa: 88 },
    { vacuna: 'Influenza', dosis1: 75, dosis2: 70, dosis3: 0, completa: 70 },
    { vacuna: 'Fiebre Amarilla', dosis1: 45, dosis2: 0, dosis3: 0, completa: 45 },
    { vacuna: 'Otras', dosis1: 25, dosis2: 20, dosis3: 15, completa: 15 },
];

export default function VacunasYAgentes() {
    const vacunas = vacunasData.map(item => item.vacuna);
    const primerasDosis = vacunasData.map(item => item.dosis1);
    const segundasDosis = vacunasData.map(item => item.dosis2);
    const tercerasDosis = vacunasData.map(item => item.dosis3);
    const esquemaCompleto = vacunasData.map(item => item.completa);

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Estado de Vacunación
                </Typography>

                <Box sx={{ width: '100%', height: 300 }}>
                    <BarChart
                        width={500}
                        height={300}
                        series={[
                            { data: primerasDosis, label: '1ra Dosis', color: '#e3f2fd' },
                            { data: segundasDosis, label: '2da Dosis', color: '#90caf9' },
                            { data: tercerasDosis, label: '3ra Dosis', color: '#42a5f5' },
                            { data: esquemaCompleto, label: 'Completo', color: '#1976d2' },
                        ]}
                        xAxis={[{ data: vacunas, scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 60, left: 40, right: 10 }}
                    />
                </Box>

                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <Typography variant="body2" color="text.secondary">
                        Esquema completo promedio: {Math.round(esquemaCompleto.reduce((a, b) => a + b) / esquemaCompleto.length)}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Primera dosis promedio: {Math.round(primerasDosis.reduce((a, b) => a + b) / primerasDosis.length)}%
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
