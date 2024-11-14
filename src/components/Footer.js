// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:  'rgba(255, 255, 255, 0.1)', // Transparent orange color
        color: '#000',
        py: 2,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Swastik IT Solutions. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
