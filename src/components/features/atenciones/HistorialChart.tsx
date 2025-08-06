import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { useState } from 'react';

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
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

export default function HistorialChart() {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const data = getDaysInMonth(4, 2024);

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

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
            <Stack
              direction="row"
              sx={{
                alignContent: { xs: 'center', sm: 'flex-start' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography variant="h4" component="p" sx={{ fontWeight: 600 }}>
                13,277
              </Typography>
              <Chip size="small" color="success" label="+35%" />
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Total de atenciones
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

        {/* Leyenda personalizada */}
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box 
                sx={{ 
                  width: 12, 
                  height: 12, 
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: '2px'
                }} 
              />
              <Typography variant="body2" color="text.secondary">
                Pre Ocupacional
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box 
                sx={{ 
                  width: 12, 
                  height: 12, 
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '2px'
                }} 
              />
              <Typography variant="body2" color="text.secondary">
                Periódico
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box 
                sx={{ 
                  width: 12, 
                  height: 12, 
                  backgroundColor: theme.palette.primary.dark,
                  borderRadius: '2px'
                }} 
              />
              <Typography variant="body2" color="text.secondary">
                Retiro
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <LineChart
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'point',
              data,
              tickInterval: (_, i) => (i + 1) % 5 === 0,
              height: 24,
            },
          ]}
          yAxis={[{ width: 50 }]}
          series={[
            {
              id: 'direct',
              label: 'Pre Ocupacional',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              area: true,
              stackOrder: 'ascending',
              data: [
                300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 1800, 3300,
                3600, 3900, 4200, 4500, 3900, 4800, 5100, 5400, 4800, 5700, 6000,
                6300, 6600, 6900, 7200, 7500, 7800, 8100,
              ],
            },
            {
              id: 'referral',
              label: 'Periodico',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              area: true,
              stackOrder: 'ascending',
              data: [
                500, 900, 700, 1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200,
                3500, 3800, 4100, 4400, 2900, 4700, 5000, 5300, 5600, 5900, 6200,
                6500, 5600, 6800, 7100, 7400, 7700, 8000,
              ],
            },
            {
              id: 'organic',
              label: 'Retiro',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              stackOrder: 'ascending',
              data: [
                1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500,
                3000, 3400, 3700, 3200, 3900, 4100, 3500, 4300, 4500, 4000, 4700,
                5000, 5200, 4800, 5400, 5600, 5900, 6100, 6300,
              ],
              area: true,
            },
          ]}
          height={280}
          margin={{ left: 0, right: 20, top: 20, bottom: 20 }}
          grid={{ horizontal: true, vertical: false }}
          sx={{
            '& .MuiAreaElement-series-organic': {
              fill: "url('#organic')",
            },
            '& .MuiAreaElement-series-referral': {
              fill: "url('#referral')",
            },
            '& .MuiAreaElement-series-direct': {
              fill: "url('#direct')",
            },
            '& .MuiChartsAxis-tick': {
              fontSize: '0.75rem',
            },
            '& .MuiChartsAxis-label': {
              fontSize: '0.75rem',
            },
          }}
          hideLegend
        >
          <AreaGradient color={theme.palette.primary.dark} id="organic" />
          <AreaGradient color={theme.palette.primary.main} id="referral" />
          <AreaGradient color={theme.palette.primary.light} id="direct" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
