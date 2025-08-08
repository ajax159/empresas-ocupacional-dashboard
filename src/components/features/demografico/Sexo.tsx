import { Card, CardContent, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function Sexo() {
    const sexoData = [
        { id: 0, label: 'MASCULINO', value: 65, color: '#1976d2' },
        { id: 1, label: 'FEMENINO', value: 35, color: '#e91e63' }
    ];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Distribución por sexo
                </Typography>
                <PieChart
                    series={[
                        {
                            data: sexoData,
                            arcLabel: (item) => `${item.value}%`,
                            arcLabelMinAngle: 35,
                            arcLabelRadius: '60%',
                        },
                    ]}
                    height={300}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            fill: 'white',
                        },
                    }}
                />
            </CardContent>
        </Card>

    )
}