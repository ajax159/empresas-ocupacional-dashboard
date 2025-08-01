import axios from 'axios';

const api = axios.create({
  baseURL: 'api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Servicios de API
export const authAPI = {
  checkUser: (dni) => api.get(`/auth/exists/${dni}`),
  login: (credentials) => api.post('/auth/login', credentials),
  sendEmail: (dni) => api.post(`/auth/send-email/${dni}`),
  resetPassword: (token, clave) => api.post(`/auth/update-password/${token}`, { clave }),
  updatePassword: (credentials) => api.post(`/auth/reset-password`, credentials)
};

export const resultsAPI = {
  getResults: (fechaInicio, fechaFin, page, size, type) => {
    let url = '';
    const params = {
      fechaInicio,
      fechaFin,
      page,
      size
    };
    switch (type) {
      case 0:
        url = '/resultados/buscar/laboratorio';
        break;
      case 1:
        url = '/resultados/buscar/citologia';
        break;
      case 2:
        url = '/resultados/buscar/patologia';
        break;
      case 3:
        url = '/resultados/buscar/vacuna';
        break;
      default:
        throw new Error('Tipo de resultados no soportado');
    }
    return api.get(url, { params });
  }
};

export const impressionAPI = {
  getImpression: (type, code) => {
    let url = '';
    //   "user": {
    //     "idUsuario": 35211,
    //     "usuEmail": "soporte@mercelab.com",
    //     "names": "TEST TEST MERCELB"
    // }
    const user = localStorage.getItem('user');
    let idUsuario = user ? JSON.parse(user).idUsuario : 0;
    switch (type) {
      case 'clinical':
        url = 'IMPRESION-API';
        break;
      default:
        throw new Error('Tipo de impresión no soportado');
    }
    return axios.get(url, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};

export default api;