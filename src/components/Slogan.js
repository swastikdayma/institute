// src/components/SloganSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import bgImage from '../media/bg.jpeg';

const Slogan = () => {
  return (
    <Box
      sx={{
      
        height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' }, // Adjust height for responsiveness
        backgroundImage: `url(${bgImage})`, // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        padding: { xs: '20px', sm: '40px', md: '60px' }, // Adjust padding for responsiveness
        overflow: 'hidden',
        marginBottom:0,
        
        // Overlay for transparency effect
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the transparency here
          zIndex: 1, // Place the overlay behind the text
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' }, // Responsive font size
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Optional text shadow for better readability
          lineHeight: 1.3, // Line height for better spacing
          maxWidth: '90%', // Make the text width responsive
          position: 'relative',
          zIndex: 2, // Ensures text is above overlay
        }}
      >
        Shaping Tomorrow’s Tech Leaders, Today!
      </Typography>
    </Box>
  );
};

export default Slogan;
