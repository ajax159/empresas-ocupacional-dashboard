import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Chart from "react-apexcharts";
import { useState } from 'react';

const atencionesData = [
  { tiempo: "02:30", pacientes: 24, dia: "2025-10-01" },
  { tiempo: "03:15", pacientes: 32, dia: "2025-10-02" },
  { tiempo: "02:45", pacientes: 28, dia: "2025-10-03" },
  { tiempo: "04:20", pacientes: 18, dia: "2025-10-04" },
  { tiempo: "03:30", pacientes: 34, dia: "2025-10-05" },
  { tiempo: "02:15", pacientes: 42, dia: "2025-10-06" },
  { tiempo: "03:45", pacientes: 26, dia: "2025-10-07" },
  { tiempo: "02:50", pacientes: 38, dia: "2025-10-08" },
  { tiempo: "04:10", pacientes: 22, dia: "2025-10-09" },
  { tiempo: "03:20", pacientes: 30, dia: "2025-10-10" },
  { tiempo: "02:35", pacientes: 36, dia: "2025-10-11" },
  { tiempo: "03:55", pacientes: 25, dia: "2025-10-12" },
  { tiempo: "02:20", pacientes: 40, dia: "2025-10-13" },
  { tiempo: "04:30", pacientes: 16, dia: "2025-10-14" },
  { tiempo: "03:10", pacientes: 33, dia: "2025-10-15" },
  { tiempo: "02:40", pacientes: 35, dia: "2025-10-16" },
  { tiempo: "03:25", pacientes: 29, dia: "2025-10-17" },
  { tiempo: "02:55", pacientes: 37, dia: "2025-10-18" },
  { tiempo: "04:05", pacientes: 20, dia: "2025-10-19" },
  { tiempo: "03:40", pacientes: 27, dia: "2025-10-20" },
  { tiempo: "02:25", pacientes: 39, dia: "2025-10-21" },
  { tiempo: "03:50", pacientes: 24, dia: "2025-10-22" },
  { tiempo: "02:30", pacientes: 41, dia: "2025-10-23" },
  { tiempo: "04:15", pacientes: 19, dia: "2025-10-24" },
  { tiempo: "03:35", pacientes: 31, dia: "2025-10-25" },
  { tiempo: "02:45", pacientes: 34, dia: "2025-10-26" },
  { tiempo: "03:20", pacientes: 28, dia: "2025-10-27" },
  { tiempo: "02:50", pacientes: 36, dia: "2025-10-28" },
  { tiempo: "04:00", pacientes: 23, dia: "2025-10-29" },
  { tiempo: "03:15", pacientes: 32, dia: "2025-10-30" },
];

function tiempoAMinutos(tiempo: string): number {
  const [horas, minutos] = tiempo.split(':').map(Number);
  return horas * 60 + minutos;
}

function minutosAHora(minutos: number): string {
  const horas = Math.floor(minutos / 60);
  const mins = minutos % 60;
  return `${horas.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

const data = atencionesData.map(item => tiempoAMinutos(item.tiempo));

const currentYear = dayjs();


export default function TiempoAtencionChart() {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => minutosAHora(val)
      },
      xaxis: {
        categories: atencionesData.map(item => dayjs(item.dia).format('DD/MM')),
      },
      yaxis: {
        labels: {
          formatter: (val: number) => minutosAHora(val)
        }
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex }: {
          series: number[][];
          seriesIndex: number;
          dataPointIndex: number;
        }) {
          const minutos = series[seriesIndex][dataPointIndex];
          const tiempoFormateado = minutosAHora(minutos);
          const pacientes = atencionesData[dataPointIndex].pacientes;

          return `
          <div style="padding: 8px;">
            <strong>Tiempo de atención:</strong> ${tiempoFormateado}<br/>
            <strong>Pacientes:</strong> ${pacientes}
          </div>
        `;
        }
      }
    },
    series: [
      {
        name: "Tiempo de atención",
        data: data
      }
    ]
  });



  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Atenciones
        </Typography>
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Stack sx={{ justifyContent: 'space-between', minWidth: 120 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Tiempo de atención promedio
            </Typography>
          </Stack>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Seleccionar período"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              maxDate={currentYear}
              openTo="month"
              views={['year', 'month']}
              yearsOrder="desc"
              format="MMMM YYYY"
              slotProps={{
                textField: {
                  size: 'small',
                  sx: {
                    minWidth: 200,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'background.paper',
                      height: '45px',
                      '& .MuiOutlinedInput-input': {
                        padding: '8.5px 14px',
                      },
                    },
                  }
                },
                openPickerButton: {
                  sx: {
                    padding: '4px',
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.25rem',
                    },
                  }
                },
                inputAdornment: {
                  sx: {
                    marginRight: '8px',
                  }
                }
              }}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={350}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
