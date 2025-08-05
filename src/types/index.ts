// Tipos de usuario
export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  role?: 'admin' | 'user' | 'viewer';
}

// Tipos de autenticación
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Tipos de dashboard
export interface StatCardData {
  title: string;
  value: string;
  interval: string;
  trend: 'up' | 'down' | 'neutral';
  data: number[];
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

// Tipos de datos de grid
export interface GridRowData {
  id: string;
  pageTitle: string;
  status: 'Online' | 'Offline';
  users: number;
  eventCount: number;
  viewsPerUser: number;
  averageTime: string;
  conversions: number[];
}

// Tipos de navegación
export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ComponentType;
  children?: MenuItem[];
}

// Tipos de tema
export interface ThemeConfig {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
}

// Tipos de API response
export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

// Tipos de formularios
export interface FormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
}
