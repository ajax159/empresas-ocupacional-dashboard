import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Aquí iría la lógica de login real
    login('Usuario Demo');
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="h2" component="h1">
        Iniciar Sesión
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Dashboard de Empresas Ocupacional
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={handleLogin}
        sx={{ px: 4 }}
      >
        Entrar al Dashboard
      </Button>
    </Box>
  );
};

export default LoginPage;
