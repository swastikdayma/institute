import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Offer from './components/Offer';
import Contact from './components/Contact';
import theme from './theme';
import Footer from './components/Footer';
import Slogan from './components/Slogan';
import Logo from './media/Untitled-removebg-preview.png';
import { styled } from '@mui/system';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${Logo})`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: 'none', // Disable background image on small screens
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header />
        <Slogan />
        <AboutUs />
        <Courses />
        <Offer />
        <Contact />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
