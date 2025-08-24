import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Stack,
  Paper,
  Alert,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Assignment as AssignmentIcon,
  Timeline as TimelineIcon,
  Visibility as VisibilityIcon,
  Warning as WarningIcon,
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  LocalHospital as HospitalIcon
} from '@mui/icons-material';
import type { DatosOftalmologicos, EvaluacionOftalmologica } from '../../../../mock/oftalmologia.mock';

interface ConclusionesObservacionesProps {
  datos: DatosOftalmologicos;
}

export default function ConclusionesObservaciones({ datos }: ConclusionesObservacionesProps) {
  const theme = useTheme();

  const evaluacionActual = datos.años[datos.años.length - 1]?.evaluacionOftalmologica;
  const evaluacionAnterior = datos.años[datos.años.length - 2]?.evaluacionOftalmologica;

  const getEvolucionPuntaje = (actual: EvaluacionOftalmologica, anterior?: EvaluacionOftalmologica) => {
    if (!anterior) return { evolucion: 'nuevo', color: 'info' as const, porcentaje: 0 };
    
    const parseAgudeza = (valor: string): number => {
      if (valor.includes('/')) {
        const [numerador, denominador] = valor.split('/').map(Number);
        return numerador / denominador;
      }
      return parseFloat(valor) || 0;
    };

    const puntajeActual = (
      (parseAgudeza(actual.agudezaVisual.lejos.conCorreccion.OD) + parseAgudeza(actual.agudezaVisual.lejos.conCorreccion.OI)) / 2 +
      (parseAgudeza(actual.agudezaVisual.cerca.conCorreccion.OD) + parseAgudeza(actual.agudezaVisual.cerca.conCorreccion.OI)) / 2
    ) / 2;
    
    const puntajeAnterior = (
      (parseAgudeza(anterior.agudezaVisual.lejos.conCorreccion.OD) + parseAgudeza(anterior.agudezaVisual.lejos.conCorreccion.OI)) / 2 +
      (parseAgudeza(anterior.agudezaVisual.cerca.conCorreccion.OD) + parseAgudeza(anterior.agudezaVisual.cerca.conCorreccion.OI)) / 2
    ) / 2;

    const diferencia = puntajeActual - puntajeAnterior;
    const porcentajeCambio = Math.abs((diferencia / puntajeAnterior) * 100);

    if (diferencia > 0.1) {
      return { evolucion: 'mejoria', color: 'success' as const, porcentaje: porcentajeCambio };
    } else if (diferencia < -0.1) {
      return { evolucion: 'deterioro', color: 'error' as const, porcentaje: porcentajeCambio };
    } else {
      return { evolucion: 'estable', color: 'info' as const, porcentaje: porcentajeCambio };
    }
  };

  const evolucionVisual = getEvolucionPuntaje(evaluacionActual!, evaluacionAnterior);

  const evaluarRiesgoOcupacional = (evaluacion: EvaluacionOftalmologica) => {
    let riesgoTotal = 0;
    const factores = [];

    if (evaluacion.antecedentesOculares.glaucoma) {
      riesgoTotal += 40;
      factores.push('Glaucoma presente');
    }
    if (evaluacion.antecedentesOculares.cataratas) {
      riesgoTotal += 30;
      factores.push('Cataratas diagnosticadas');
    }
    if (evaluacion.antecedentesOculares.pterigion) {
      riesgoTotal += 20;
      factores.push('Pterigion presente');
    }
    
    const necesitaCorreccion = evaluacion.agudezaVisual.lejos.sinCorreccion.OD !== evaluacion.agudezaVisual.lejos.conCorreccion.OD ||
                               evaluacion.agudezaVisual.lejos.sinCorreccion.OI !== evaluacion.agudezaVisual.lejos.conCorreccion.OI;
    
    if (necesitaCorreccion) {
      riesgoTotal += 15;
      factores.push('Requiere corrección visual');
    }
    if (evaluacion.pruebasComplementarias.testProfundidad < 7) {
      riesgoTotal += 20;
      factores.push('Percepción de profundidad limitada');
    }

    return {
      porcentaje: Math.min(riesgoTotal, 100),
      nivel: riesgoTotal < 30 ? 'bajo' : riesgoTotal < 60 ? 'medio' : 'alto',
      factores
    };
  };

  const riesgoOcupacional = evaluarRiesgoOcupacional(evaluacionActual!);

  const recomendaciones = [
    {
      categoria: 'Prevención',
      items: [
        'Uso obligatorio de EPP específico para exposición a radiación UV',
        'Implementar pausas visuales cada 20 minutos en trabajo con pantallas',
        'Mantenimiento regular de iluminación en área de trabajo'
      ]
    },
    {
      categoria: 'Seguimiento',
      items: [
        'Próximo examen programado en 12 meses',
        'Control especializado si presenta síntomas de fatiga visual',
        'Evaluación anual de agudeza visual y campos visuales'
      ]
    },
    {
      categoria: 'Restricciones Laborales',
      items: evaluacionActual?.recomendaciones?.length ? evaluacionActual.recomendaciones : [
        'Sin restricciones específicas identificadas',
        'Apto para tareas que requieren agudeza visual normal',
        'Seguimiento regular por medicina ocupacional'
      ]
    }
  ];

  const aptitudLaboral = {
    estado: riesgoOcupacional.nivel === 'bajo' ? 'apto' : riesgoOcupacional.nivel === 'medio' ? 'apto-restricciones' : 'no-apto',
    observacion: riesgoOcupacional.nivel === 'bajo' 
      ? 'Apto para actividades laborales con requerimientos visuales normales'
      : riesgoOcupacional.nivel === 'medio'
      ? 'Apto con restricciones y seguimiento especializado'
      : 'Requiere evaluación especializada antes de aptitud laboral'
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Conclusiones Médicas y Observaciones
        </Typography>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Evaluación de Aptitud Laboral
            </Typography>
            
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                mb: 3,
                bgcolor: aptitudLaboral.estado === 'apto' ? 'success.light' : 
                         aptitudLaboral.estado === 'apto-restricciones' ? 'warning.light' : 'error.light',
                border: `2px solid ${
                  aptitudLaboral.estado === 'apto' ? theme.palette.success.main : 
                  aptitudLaboral.estado === 'apto-restricciones' ? theme.palette.warning.main : 
                  theme.palette.error.main
                }`
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                {aptitudLaboral.estado === 'apto' ? (
                  <CheckIcon sx={{ fontSize: 32, color: 'success.main' }} />
                ) : aptitudLaboral.estado === 'apto-restricciones' ? (
                  <WarningIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                ) : (
                  <HospitalIcon sx={{ fontSize: 32, color: 'error.main' }} />
                )}
                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    {aptitudLaboral.estado === 'apto' ? 'APTO PARA EL TRABAJO' :
                     aptitudLaboral.estado === 'apto-restricciones' ? 'APTO CON RESTRICCIONES' :
                     'REQUIERE EVALUACIÓN ESPECIALIZADA'}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Examen oftalmológico ocupacional {datos.años[datos.años.length - 1]?.año}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1">
                {aptitudLaboral.observacion}
              </Typography>
            </Paper>

            <Typography variant="subtitle2" gutterBottom>
              Evolución Visual
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">
                  Comparación con examen anterior
                </Typography>
                <Chip
                  label={evolucionVisual.evolucion.toUpperCase()}
                  color={evolucionVisual.color}
                  size="small"
                  icon={evolucionVisual.evolucion === 'mejoria' ? <CheckIcon /> : 
                        evolucionVisual.evolucion === 'deterioro' ? <WarningIcon /> : <TimelineIcon />}
                />
              </Box>
              <LinearProgress
                variant="determinate"
                value={evolucionVisual.porcentaje}
                color={evolucionVisual.color}
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                {evolucionVisual.porcentaje.toFixed(1)}% de cambio respecto al año anterior
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Análisis de Riesgo Ocupacional
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body1" fontWeight={600}>
                  Nivel de Riesgo Visual
                </Typography>
                <Chip
                  label={`${riesgoOcupacional.nivel.toUpperCase()} (${riesgoOcupacional.porcentaje}%)`}
                  color={riesgoOcupacional.nivel === 'bajo' ? 'success' : 
                         riesgoOcupacional.nivel === 'medio' ? 'warning' : 'error'}
                  variant="filled"
                  size="medium"
                />
              </Box>
              
              <LinearProgress
                variant="determinate"
                value={riesgoOcupacional.porcentaje}
                color={riesgoOcupacional.nivel === 'bajo' ? 'success' : 
                       riesgoOcupacional.nivel === 'medio' ? 'warning' : 'error'}
                sx={{ height: 12, borderRadius: 6, mb: 2 }}
              />

              <Typography variant="subtitle2" gutterBottom>
                Factores de Riesgo Identificados:
              </Typography>
              <Stack spacing={1}>
                {riesgoOcupacional.factores.map((factor, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WarningIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                    <Typography variant="body2">{factor}</Typography>
                  </Box>
                ))}
                {riesgoOcupacional.factores.length === 0 && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} />
                    <Typography variant="body2">No se identificaron factores de riesgo significativos</Typography>
                  </Box>
                )}
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
              Recomendaciones y Seguimiento
            </Typography>
            
            <Stack spacing={2}>
              {recomendaciones.map((seccion, index) => (
                <Accordion key={index} defaultExpanded={index === 0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      {seccion.categoria === 'Prevención' && <VisibilityIcon color="primary" />}
                      {seccion.categoria === 'Seguimiento' && <ScheduleIcon color="secondary" />}
                      {seccion.categoria === 'Restricciones Laborales' && <AssignmentIcon color="warning" />}
                      <Typography variant="subtitle1" fontWeight={600}>
                        {seccion.categoria}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {seccion.items.map((item: string, itemIndex: number) => (
                        <ListItem key={itemIndex}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                bgcolor: 'primary.main',
                                borderRadius: '50%'
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Grid>

          {evaluacionActual?.observaciones && (
            <Grid size={{ xs: 12 }}>
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Observaciones Adicionales del Examen
                </Typography>
                <Typography variant="body2">
                  {evaluacionActual.observaciones}
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', mt: 1, fontStyle: 'italic' }}>
                  Fecha del examen: {datos.años[datos.años.length - 1]?.año} - 
                  Próxima evaluación recomendada: 12 meses
                </Typography>
              </Alert>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
