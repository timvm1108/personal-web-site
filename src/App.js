import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Experience from './components/Experience';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, Toolbar, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import About from './components/About';
import Aviation from './components/Aviation';

const drawerWidth = 172

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let theme = React.useMemo(
    () =>
      responsiveFontSizes(createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      })),
    [prefersDarkMode],
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{display: "flex"}}>
          <CssBaseline/>
          <Navbar drawerWidth={drawerWidth}/>
          <Sidebar drawerWidth={drawerWidth}/>
          <Box component="main" sx={{flexGrow: 1, width: {sm: `calc(100% - ${drawerWidth}px)`, ml: {sm: `${drawerWidth}px`}}}}>
            <Toolbar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/experience" element={<Experience />}/>
              <Route path="/aviation" element={<Aviation />}/>
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
