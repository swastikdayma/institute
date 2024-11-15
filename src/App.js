// src/App.js
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
import { Box } from '@mui/material';

function App() {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent); // Check if the device is iOS

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${Logo})`,
          backgroundAttachment: isIOS ? 'scroll' : 'fixed', // Use scroll for iOS to avoid background scaling issues
          backgroundSize: isIOS ? 'contain' : 'cover', // Use "contain" for better scaling on iOS
          backgroundRepeat: 'no-repeat', // Prevent tiling of the background
          backgroundPosition: 'center',
          minHeight: '100vh',
          overflowX: 'hidden',
          '-webkit-background-size': isIOS ? 'contain' : 'cover', // WebKit fix for Safari/iOS
          '@media (max-width: 600px)': {
            backgroundAttachment: 'scroll', // Fallback for small screens
            backgroundSize: 'contain', // Ensure proper scaling on smaller screens
          },
        }}
      >
        <Header />
        <Slogan />
        <AboutUs />
        <Courses />
        <Offer />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
