import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import Box from '@mui/material/Box';
import { useState } from 'react';

// Datos de ejemplo con tiempo de atención promedio y cantidad de pacientes por día
const atencionesData = [
  { tiempo: "02:30", pacientes: 24 },
  { tiempo: "03:15", pacientes: 32 },
  { tiempo: "02:45", pacientes: 28 },
  { tiempo: "04:20", pacientes: 18 },
  { tiempo: "03:30", pacientes: 34 },
  { tiempo: "02:15", pacientes: 42 },
  { tiempo: "03:45", pacientes: 26 },
  { tiempo: "02:50", pacientes: 38 },
  { tiempo: "04:10", pacientes: 22 },
  { tiempo: "03:20", pacientes: 30 },
  { tiempo: "02:35", pacientes: 36 },
  { tiempo: "03:55", pacientes: 25 },
  { tiempo: "02:20", pacientes: 40 },
  { tiempo: "04:30", pacientes: 16 },
  { tiempo: "03:10", pacientes: 33 },
  { tiempo: "02:40", pacientes: 35 },
  { tiempo: "03:25", pacientes: 29 },
  { tiempo: "02:55", pacientes: 37 },
  { tiempo: "04:05", pacientes: 20 },
  { tiempo: "03:40", pacientes: 27 },
  { tiempo: "02:25", pacientes: 39 },
  { tiempo: "03:50", pacientes: 24 },
  { tiempo: "02:30", pacientes: 41 },
  { tiempo: "04:15", pacientes: 19 },
  { tiempo: "03:35", pacientes: 31 },
  { tiempo: "02:45", pacientes: 34 },
  { tiempo: "03:20", pacientes: 28 },
  { tiempo: "02:50", pacientes: 36 },
  { tiempo: "04:00", pacientes: 23 },
  { tiempo: "03:15", pacientes: 32 },
];

// Función para convertir tiempo (HH:MM) a minutos para el gráfico
function tiempoAMinutos(tiempo: string): number {
  const [horas, minutos] = tiempo.split(':').map(Number);
  return horas * 60 + minutos;
}

const currentYear = dayjs();

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth && i <= atencionesData.length) {
    days.push(`${i}`);
    i += 1;
  }
  return days;
}

// Componente para mostrar etiquetas sobre cada punto
function CustomDataLabels({ data }: { data: string[] }) {
  return (
    <g>
      {atencionesData.slice(0, data.length).map((item, index) => {
        // Calcular posiciones basadas en el layout del gráfico
        const chartWidth = 800; // ancho aproximado del área del gráfico
        const chartHeight = 220; // altura aproximada del área del gráfico
        const marginLeft = 70;
        const marginTop = 50;

        const xPos = marginLeft + (index / Math.max(data.length - 1, 1)) * chartWidth;
        const yValue = tiempoAMinutos(item.tiempo);
        const minY = 135; // 02:15 en minutos
        const maxY = 270; // 04:30 en minutos
        const yPos = marginTop + chartHeight - ((yValue - minY) / (maxY - minY)) * chartHeight;

        return (
          <g key={index}>
            {/* Fondo de la etiqueta */}
            <rect
              x={xPos - 22}
              y={yPos - 40}
              width={44}
              height={32}
              fill="rgba(255, 255, 255, 0.9)"
              stroke="#e0e0e0"
              strokeWidth={1}
              rx={4}
              ry={4}
            />
            {/* Texto del tiempo */}
            <text
              x={xPos}
              y={yPos - 26}
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="#333"
            >
              {item.tiempo}
            </text>
            {/* Texto de pacientes */}
            <text
              x={xPos}
              y={yPos - 14}
              textAnchor="middle"
              fontSize="9"
              fill="#666"
            >
              {item.pacientes} pac.
            </text>
          </g>
        );
      })}
    </g>
  );
}

export default function TiempoAtencionChart() {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const data = getDaysInMonth(4, 2024);

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  const formatearTiempo = (value: number | null): string => {
    if (value === null) return '00:00';
    const horas = Math.floor(value / 60);
    const minutos = value % 60;
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
  };

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
          <LineChart
            colors={colorPalette}
            xAxis={[
              {
                scaleType: 'point',
                data,
                height: 24,
              },
            ]}
            yAxis={[
              {
                width: 60,
                valueFormatter: formatearTiempo,
              }
            ]}
            series={[
              {
                id: 'direct',
                curve: 'linear',
                area: true,
                data: atencionesData.slice(0, data.length).map(item => tiempoAMinutos(item.tiempo)),
                valueFormatter: formatearTiempo,
              },
            ]}
            height={320}
            margin={{ left: 70, right: 20, top: 50, bottom: 20 }}
            grid={{ horizontal: true, vertical: false }}
            sx={{
              '& .MuiAreaElement-series-direct': {
                fill: "url('#direct')",
              },
              '& .MuiChartsAxis-tick': {
                fontSize: '0.75rem',
              },
              '& .MuiChartsAxis-label': {
                fontSize: '0.75rem',
              },
              '& .MuiLineElement-root': {
                strokeWidth: 2,
              },
              '& .MuiMarkElement-root': {
                fill: theme.palette.primary.main,
                stroke: '#fff',
                strokeWidth: 2,
                r: 4,
              },
            }}
            hideLegend
          >
            <AreaGradient color={theme.palette.primary.light} id="direct" />
            <ChartsTooltip />
            <CustomDataLabels data={data} />
          </LineChart>
        </Box>
      </CardContent>
    </Card>
  );
}
