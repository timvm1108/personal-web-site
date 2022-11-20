import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MainContent from './components/MainContent';

const drawerWidth = 172

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let theme = React.useMemo(
    () =>
      responsiveFontSizes(createTheme({
        palette: {
          // mode: prefersDarkMode ? 'dark' : 'light',
          mode: 'dark',
        },
      })),
    [prefersDarkMode],
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Navigation drawerWidth={drawerWidth}/>
          <Box sx={{display:"flex", justifyContent: "flex-end"}}>
            <MainContent drawerWidth={drawerWidth}/>
          </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
