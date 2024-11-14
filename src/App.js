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
import Logo from './media/s-removebg-preview.png';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset and apply base styles */}
      <div
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundAttachment: 'fixed', // Keeps background fixed
          backgroundSize: 'cover', // Ensures it covers entire viewport
          backgroundPosition: 'center',
          minHeight: '100vh',
          overflowX: 'hidden', // Prevents horizontal scroll
        }}
      >
        {/* Main App Content */}
        <Header />
        <Slogan />
        <AboutUs />
        <Courses />
        <Offer />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
