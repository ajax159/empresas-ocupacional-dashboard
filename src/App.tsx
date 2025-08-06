import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import { DashboardPage, LoginPage, Atenciones, AtencionesdelDia } from "./pages";
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
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      mt: { xs: 8, md: 0 },
                      width: '100%',
                      maxWidth: { sm: '100%', md: '1700px' },
                    }}
                  >
                    <Header />
                  </Stack>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      px: 3,
                    }}
                  >
                    <Routes>
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/atenciones" element={<Atenciones />} />
                      <Route path="/atenciones-del-dia" element={<AtencionesdelDia />} />
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
