import { Card, CardContent, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function AntiguedadPromedio () {
    const chartSetting = {
    xAxis: [
        {
        label: 'Antiguedad promedio (años)',
        },
    ],
    height: 400,
    margin: { left: 0 },
    };


    const dataSet = [
        { puesto: 'FINANZAS', antiguedad: '0-1', cantidad: 30 },
        { puesto: 'FLOTA', antiguedad: '2-3', cantidad: 50 },
        { puesto: 'RRHH', antiguedad: '4-5', cantidad: 40 },
        { puesto: 'TI', antiguedad: '6-7', cantidad: 20 },
        { puesto: 'ENFERMERIA', antiguedad: '8+', cantidad: 10 }
    ];

    return (
<Card variant="outlined" sx={{ width: '100%' }}>
    <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Antigüedad promedio en la empresa
                </Typography>
                    <BarChart
                    dataset={dataSet}
                    yAxis={[{ scaleType: 'band', dataKey: 'antiguedad' }]}
                    series={[{ dataKey: 'cantidad', label: 'Cantidad de empleados' }]}
                    layout="horizontal"
                    {...chartSetting}
                    />
                </CardContent>
</Card>
    )
}