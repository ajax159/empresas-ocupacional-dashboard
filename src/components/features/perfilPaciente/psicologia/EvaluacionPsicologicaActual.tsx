import { Card, CardContent, Typography, Box, Grid, Chip, LinearProgress, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    observacionConductasData,
    discursoData,
    orientacionData,
    funcionesCognitivasData,
    aspectosBiopsicosocialesData,
    evaluacionPersonalidadData
} from '../../../../mock/psicologia.mock';
import { getDataSource } from '../../../../mock/config';

export default function EvaluacionPsicologicaActual() {

    const observacionData = getDataSource(observacionConductasData);
    const discursoInfoData = getDataSource(discursoData);
    const orientacionInfoData = getDataSource(orientacionData);
    const funcionesData = getDataSource(funcionesCognitivasData);
    const aspectosData = getDataSource(aspectosBiopsicosocialesData);
    const personalidadData = getDataSource(evaluacionPersonalidadData);

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Evaluación Psicológica Actual
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Observación de Conductas
                        </Typography>
                        {Object.entries(observacionData).map(([key, data]) => {
                            const mainItem = data.items.reduce((prev, current) =>
                                (prev.porcentaje > current.porcentaje) ? prev : current
                            );

                            return (
                                <Accordion key={key} sx={{ mb: 1, boxShadow: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', pr: 2 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label={mainItem.valor}
                                                    size="small"
                                                />
                                                <Chip
                                                    label={`${mainItem.porcentaje}%`}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            Historial completo:
                                        </Typography>
                                        {data.items.map((detailItem, detailIndex) => (
                                            <Box key={detailIndex} sx={{ mb: 1.5, p: 1, borderRadius: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                        {detailItem.valor}
                                                    </Typography>
                                                    <Chip
                                                        label={`${detailItem.porcentaje}%`}
                                                        size="small"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Períodos: {detailItem.periodos}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}

                        <Typography variant="subtitle2" gutterBottom>
                            Discurso
                        </Typography>
                        {Object.entries(discursoInfoData).map(([key, data]) => {
                            const mainItem = data.items.reduce((prev, current) =>
                                (prev.porcentaje > current.porcentaje) ? prev : current
                            );

                            return (
                                <Accordion key={key} sx={{ mb: 1, boxShadow: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', pr: 2 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label={mainItem.valor}
                                                    size="small"
                                                />
                                                <Chip
                                                    label={`${mainItem.porcentaje}%`}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            Historial completo:
                                        </Typography>
                                        {data.items.map((detailItem, detailIndex) => (
                                            <Box key={detailIndex} sx={{ mb: 1.5, p: 1, borderRadius: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                        {detailItem.valor}
                                                    </Typography>
                                                    <Chip
                                                        label={`${detailItem.porcentaje}%`}
                                                        size="small"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Períodos: {detailItem.periodos}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Orientación
                        </Typography>
                        {Object.entries(orientacionInfoData).map(([key, data]) => {
                            const mainItem = data.items.reduce((prev, current) =>
                                (prev.porcentaje > current.porcentaje) ? prev : current
                            );

                            return (
                                <Accordion key={key} sx={{ mb: 1, boxShadow: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', pr: 2 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                {key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label={mainItem.valor}
                                                    size="small"
                                                />
                                                <Chip
                                                    label={`${mainItem.porcentaje}%`}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            Historial completo:
                                        </Typography>
                                        {data.items.map((detailItem, detailIndex) => (
                                            <Box key={detailIndex} sx={{ mb: 1.5, p: 1, borderRadius: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                        {detailItem.valor}
                                                    </Typography>
                                                    <Chip
                                                        label={`${detailItem.porcentaje}%`}
                                                        size="small"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Períodos: {detailItem.periodos}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Funciones Cognitivas Detalle
                        </Typography>
                        {funcionesData.map((item, index) => {
                            const mainItem = item.items.reduce((prev, current) =>
                                (prev.puntuacion > current.puntuacion) ? prev : current
                            );

                            return (
                                <Accordion key={index} sx={{ mb: 1, boxShadow: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', pr: 2 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                {item.funcion}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label={mainItem.evaluacion}
                                                    size="small"
                                                />
                                                <Chip
                                                    label={`${mainItem.puntuacion}%`}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            Historial completo:
                                        </Typography>
                                        {item.items.map((detailItem, detailIndex) => (
                                            <Box key={detailIndex} sx={{ mb: 1.5, p: 1, borderRadius: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                        {detailItem.evaluacion}
                                                    </Typography>
                                                    <Chip
                                                        label={`${detailItem.puntuacion}%`}
                                                        size="small"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Períodos: {detailItem.periodos}
                                                </Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={detailItem.puntuacion}
                                                    sx={{ height: 6, borderRadius: 3, mt: 1 }}
                                                />
                                            </Box>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Aspectos Biopsicosociales
                        </Typography>
                        {aspectosData.map((item, index) => {
                            const mainItem = item.items.reduce((prev, current) =>
                                (prev.porcentaje > current.porcentaje) ? prev : current
                            );

                            return (
                                <Accordion key={index} sx={{ mb: 1, boxShadow: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', pr: 2 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                {item.aspecto}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label={mainItem.estado}
                                                    size="small"
                                                />
                                                <Chip
                                                    label={`${mainItem.porcentaje}%`}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            Historial completo:
                                        </Typography>
                                        {item.items.map((detailItem, detailIndex) => (
                                            <Box key={detailIndex} sx={{ mb: 1.5, p: 1, borderRadius: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                        {detailItem.estado}
                                                    </Typography>
                                                    <Chip
                                                        label={`${detailItem.porcentaje}%`}
                                                        size="small"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    Períodos: {detailItem.periodos}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="subtitle2" gutterBottom>
                            Personalidad
                        </Typography>
                        {personalidadData.map((item, index) => (
                            <Box key={index} sx={{ mb: 1.5, p: 1.5, borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                        {item.funcion}
                                    </Typography>
                                    <Chip
                                        label={item.periodo}
                                        size="small"
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
