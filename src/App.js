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
import { Box } from '@mui/material'; // Add Box component from MUI

function App() {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent); // Check if the device is iOS

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${Logo})`,
          backgroundAttachment: isIOS ? 'scroll' : 'fixed', // Fallback for iOS devices
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          overflowX: 'hidden',
          // WebKit fix for Safari/iOS
          '-webkit-background-size': 'cover',
          backgroundSize: 'cover',
          '@media (max-width: 600px)': {
            // backgroundImage: 'none', // Remove background image on small screens
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
