export const observacionConductasData = {
    presentacion: {
        items: [
            { valor: 'Adecuado', porcentaje: 85, periodos: '2023, 2024, 2025' },
            { valor: 'Inadecuado', porcentaje: 15, periodos: '2022' }
        ]
    },
    postura: {
        items: [
            { valor: 'Erguida', porcentaje: 92, periodos: '2022, 2023, 2024, 2025' },
            { valor: 'Encorvada', porcentaje: 8, periodos: '2021' }
        ]
    }
};

export const discursoData = {
    ritmo: {
        items: [
            { valor: 'Fluido', porcentaje: 78, periodos: '2023, 2024, 2025' },
            { valor: 'Lento', porcentaje: 22, periodos: '2022' }
        ]
    },
    tono: {
        items: [
            { valor: 'Moderado', porcentaje: 88, periodos: '2022, 2023, 2024, 2025' },
            { valor: 'Alto', porcentaje: 12, periodos: '2021' }
        ]
    },
    articulacion: {
        items: [
            { valor: 'Sin dificultad', porcentaje: 95, periodos: '2021, 2022, 2023, 2024, 2025' }
        ]
    }
};

export const orientacionData = {
    tiempo: {
        items: [
            { valor: 'Orientado', porcentaje: 98, periodos: '2021, 2022, 2023, 2024, 2025' }
        ]
    },
    espacio: {
        items: [
            { valor: 'Orientado', porcentaje: 98, periodos: '2021, 2022, 2023, 2024, 2025' }
        ]
    },
    persona: {
        items: [
            { valor: 'Orientado', porcentaje: 98, periodos: '2021, 2022, 2023, 2024, 2025' }
        ]
    },
    lucido_atento: {
        items: [
            { valor: 'LÚCIDO', porcentaje: 82, periodos: '2023, 2024, 2025' },
            { valor: 'SOMNOLIENTO', porcentaje: 18, periodos: '2021, 2022' }
        ]
    },
    pensamiento: {
        items: [
            { valor: 'FUNCIONAL', porcentaje: 90, periodos: '2022, 2023, 2024, 2025' },
            { valor: 'ALTERADO', porcentaje: 10, periodos: '2021' }
        ]
    },
    percepcion: {
        items: [
            { valor: 'NORMAL', porcentaje: 87, periodos: '2023, 2024, 2025' },
            { valor: 'ALTERADA', porcentaje: 13, periodos: '2021, 2022' }
        ]
    }
};

export const funcionesCognitivasData = [
    {
        funcion: 'Memoria', items: [
            { evaluacion: 'Corto Plazo', puntuacion: 85, periodos: '2023, 2024, 2025' },
            { evaluacion: 'Largo Plazo', puntuacion: 78, periodos: '2022' },
            { evaluacion: 'Inmediata', puntuacion: 65, periodos: '2021' }
        ]
    },
    {
        funcion: 'Inteligencia', items: [
            { evaluacion: 'PROMEDIO ALTO', puntuacion: 88, periodos: '2024, 2025' },
            { evaluacion: 'PROMEDIO', puntuacion: 75, periodos: '2022, 2023' },
            { evaluacion: 'SUPERIOR', puntuacion: 92, periodos: '2021' }
        ]
    },
    {
        funcion: 'Atención', items: [
            { evaluacion: 'LÚCIDO', puntuacion: 92, periodos: '2021, 2022, 2023, 2024, 2025' }
        ]
    },
    {
        funcion: 'Percepción', items: [
            { evaluacion: 'NORMAL', puntuacion: 90, periodos: '2023, 2024, 2025' },
            { evaluacion: 'ALTERADA', puntuacion: 60, periodos: '2021, 2022' }
        ]
    }
];

export const aspectosBiopsicosocialesData = [
    {
        aspecto: 'Apetito', items: [
            { estado: 'ADECUADO', porcentaje: 50, periodos: '2024, 2025' },
            { estado: 'ALTERADO', porcentaje: 50, periodos: '2023, 2022' }
        ]
    },
    {
        aspecto: 'Sueño', items: [
            { estado: 'SIN DIFICULTAD', porcentaje: 50, periodos: '2024, 2025' },
            { estado: 'CON DIFICULTAD', porcentaje: 25, periodos: '2023' },
            { estado: 'PESADILLAS', porcentaje: 25, periodos: '2022' }
        ]
    },
    {
        aspecto: 'Afectividad', items: [
            { estado: 'EXPRESIVO', porcentaje: 100, periodos: '2022, 2023, 2024, 2025' }
        ]
    },
    {
        aspecto: 'Conducta Sexual', items: [
            { estado: 'NORMAL', porcentaje: 100, periodos: '2022, 2023, 2024, 2025' }
        ]
    }
];

export const evaluacionPersonalidadData = [
    { funcion: 'RASGOS DE PERSONALIDAD QUE LE PERMITEN UN ADECUADO DESEMPEÑO LABORAL', periodo: '2021' },
    { funcion: 'RASGOS DE PERSONALIDAD QUE NO LE PERMITEN UN ADECUADO DESEMPEÑO LABORAL', periodo: '2022' },
    { funcion: 'RASGOS DE PERSONALIDAD', periodo: '2023' },
    { funcion: 'RASGOS DE PERSONALIDAD QUE LE PERMITEN UN ADECUADO DESEMPEÑO LABORAL', estado: 'EXCELENTE', periodo: '2024' },
    { funcion: 'RASGOS DE PERSONALIDAD QUE LE PERMITEN UN ADECUADO DESEMPEÑO LABORAL', periodo: '2025' }
];

export const diagnosticosPorAnoData = [
    {
        año: 2020,
        diagnosticos: ['Sin hallazgos patológicos'],
        cantidades: [1],
        colores: ['#4caf50']
    },
    {
        año: 2021,
        diagnosticos: ['Sin hallazgos patológicos'],
        cantidades: [1],
        colores: ['#4caf50']
    },
    {
        año: 2022,
        diagnosticos: ['Síntomas leves de ansiedad situacional', 'Trastorno adaptativo mixto'],
        cantidades: [1, 1],
        colores: ['#ff9800', '#ff5722']
    },
    {
        año: 2023,
        diagnosticos: ['Episodio depresivo leve adaptativo', 'Trastorno de ansiedad generalizada', 'Síntomas de burnout inicial'],
        cantidades: [1, 1, 1],
        colores: ['#9c27b0', '#f44336', '#ff5722']
    },
    {
        año: 2024,
        diagnosticos: ['Sin hallazgos patológicos significativos'],
        cantidades: [1, 1],
        colores: ['#4caf50', '#2196f3']
    },
    {
        año: 2025,
        diagnosticos: ['Sin hallazgos patológicos'],
        cantidades: [1],
        colores: ['#4caf50']
    }
];

export const resumenDiagnosticosData = [
    { diagnostico: 'Sin hallazgos patológicos', frecuencia: 4, años: ['2020', '2021', '2024', '2025'], severidad: 'Normal' },
    { diagnostico: 'Síntomas de ansiedad situacional', frecuencia: 1, años: ['2022'], severidad: 'Leve' },
    { diagnostico: 'Episodio depresivo leve adaptativo', frecuencia: 1, años: ['2023'], severidad: 'Moderado' },
    { diagnostico: 'Trastorno adaptativo mixto', frecuencia: 1, años: ['2022'], severidad: 'Leve' },
    { diagnostico: 'Trastorno de ansiedad generalizada', frecuencia: 1, años: ['2023'], severidad: 'Moderado' },
    { diagnostico: 'Síntomas de burnout inicial', frecuencia: 1, años: ['2023'], severidad: 'Moderado' }
];
