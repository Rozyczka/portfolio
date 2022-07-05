import React from 'react';
import './App.css';
import { createTheme, colors, ThemeProvider, ThemeOptions } from '@mui/material';
import Header from './components/Header';
import Mainpage from './pages/Mainpage/Mainpage';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Searchpage from './pages/Searchpage/Searchpage';
import Topicpage from './pages/Topicpage/Topicpage';

const theme = createTheme({
  palette: {
    
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#F3F4F6',
    },
    secondary: {
      main: '#9c60ff',
    },
    background: {
      default: '#F3F4F6',
      paper: '#ffffff',
    },
    text: {
      primary: '#727272',
      secondary: '#000000',
      disabled: 'rgba(193,193,193,0.5)',
  
    },
    error: {
      main: '#ee6352',
    },
    info: {
      main: '#2956ff',
    },
  },
  typography: {
    fontFamily: '"Montserrat"',
    fontWeightLight: 200,
    fontWeightMedium: 600,
    fontWeightBold: 900,
  },
});

const HeaderURL ="/"


function App() {
  return (
  
<ThemeProvider theme={theme}>
<Box
sx={{
  height: '100%',
  width: '100vw',
  bgcolor: 'background.default'}}
>
  <Header/>
<BrowserRouter>
<Routes>
  <Route path={HeaderURL} element={<Mainpage/>}/>
  <Route path="/search" element={<Searchpage/>}/>
  <Route path="/topic" element={<Topicpage/>}/>
</Routes>
</BrowserRouter>
</Box>

{/* <BrowserRouter>
<Routes>
  <Route path="/glowna" element={<Mainpage />} />
</Routes>
</BrowserRouter> */}
</ThemeProvider>


    
  //   <ThemeProvider theme={theme}>

  //     <>
  //       <GlobalStyles />

  //       <Header />

  //       <ContainerStyl>
  //       <BrowserRouter>
  //   <Routes>
  //     <Route path={HeaderURL} element={<PageBody />} />
  //     <Route path="/artykuly" element={<Artykuly />} />
  //     <Route path="/banka" element={<Banka />} />
  //     <Route path="/temat" element={<Temat />} />
  //     <Route path="/panel" element={<Panel />} />
    
  //     <Route path="/profil" element={<Profil />} />

  //   </Routes>
  // </BrowserRouter>

         


  //       </ContainerStyl>
  //     </>

  //   </ThemeProvider>
    




  );
}

export default App;
