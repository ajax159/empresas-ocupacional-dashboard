import { Card, CardContent, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Edades() {
    const edadesData = [
        { rango: '18-25', cantidad: 45 },
        { rango: '26-35', cantidad: 78 },
        { rango: '36-45', cantidad: 62 },
        { rango: '46-55', cantidad: 34 },
        { rango: '56-65', cantidad: 28 },
        { rango: '65+', cantidad: 15 }
    ];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Distribución por edad
                </Typography>
                <BarChart
                    xAxis={[{
                        scaleType: 'band',
                        data: edadesData.map(item => item.rango)
                    }]}
                    series={[{
                        data: edadesData.map(item => item.cantidad),
                        label: 'Cantidad de pacientes'
                    }]}
                    height={300}
                    margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
                />
            </CardContent>
        </Card>

    )
}