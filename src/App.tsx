import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha } from '@mui/material/styles';
import {
  DashboardPage,
  LoginPage,
  Atenciones,
  AtencionesdelDia,
  DemograficoGeneral,
  EstadoNutricional,
  VisualYAuditiva,
  Osteomuscular,
  Mapas,
  Aptitud,
  CardioyRespiratorio,
  ReportesPage,
  ConfiguracionPage,
  AboutPage,
  HelpPage,
  PacientePerfil
} from "./pages";
import { Layout, AppNavbar } from "./components";
import Header from "./components/features/dashboard/Header";
import AppTheme from "./theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  treeViewCustomizations,
} from './theme/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...treeViewCustomizations,
};

function App(props: { disableCustomTheme?: boolean }) {
  return (
    <>
      <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <AuthProvider>
          <BrowserRouter>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
              <Layout />
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <AppNavbar />
                <Box
                  component="main"
                  sx={(theme) => ({
                    flexGrow: 1,
                    backgroundColor: theme.vars
                      ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                      : alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  })}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      px: 3,
                    }}
                  >
                    <Header />

                    <Routes>
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/atenciones" element={<Atenciones />} />
                      <Route path="/atenciones-del-dia" element={<AtencionesdelDia />} />
                      <Route path="/demografico" element={<DemograficoGeneral />} />
                      <Route path="/nutricional" element={<EstadoNutricional />} />
                      <Route path="/visual-auditiva" element={<VisualYAuditiva />} />
                      <Route path="/osteomuscular" element={<Osteomuscular />} />
                      <Route path="/cardioyrespiratorio" element={<CardioyRespiratorio />} />
                      <Route path="/mapas" element={<Mapas />} />
                      <Route path="/aptitud" element={<Aptitud />} />
                      <Route path="/paciente" element={<PacientePerfil />} />
                      <Route path="/reportes" element={<ReportesPage />} />
                      <Route path="/configuracion" element={<ConfiguracionPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/help" element={<HelpPage />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </Box>
                </Box>
              </Box>
            </Box>
          </BrowserRouter>
        </AuthProvider>
      </AppTheme>
    </>
  );
}

export default App;
