import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Experience from './components/Experience';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import About from './components/About';
import "./components/mainContent.css";
import Aviation from './components/Aviation';

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
        <div className='App'>
          <CssBaseline/>
          <Navbar/>
          <Sidebar/>
          <div className="mainContent">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/experience" element={<Experience />}/>
              <Route path="/aviation" element={<Aviation />}/>
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
