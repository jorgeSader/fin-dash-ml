import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { themeSettings } from './themes';
import NavBar from '@/components/NavBar';
import DashboardPage from './pages/DashboardPage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route
                path="/predictions"
                element={<div>Predictions Page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
