// Este es un archivo de configuración central para cambiar entre datos mock y datos reales
export const DATA_SOURCE = 'mock'; // Cambia a 'api' cuando uses datos reales

// Configuración de endpoints para datos reales (cuando se implemente)
export const API_ENDPOINTS = {
    psicologia: '/api/psicologia',
    radiologia: '/api/radiologia',
    cardiologia: '/api/cardiologia',
    espirometria: '/api/espirometria',
    // ... otros endpoints
};

// Función helper para obtener datos
export const getDataSource = <T>(mockData: T): T => {
    if (DATA_SOURCE === 'mock') {
        return mockData;
    }
    
    return mockData;
};
