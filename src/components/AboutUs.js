// src/components/AboutUs.js
import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box
        id="About Us" // Added ID for anchor linking
        my={4}
        p={3}
        textAlign="center"
        sx={{
          color: 'black', // Text color
          backgroundColor: 'rgba(244, 248, 251, 0.7)', // Light blue-gray background with transparency
          position: 'relative',
          paddingTop: '80px', // For spacing the section below sticky header
          transition: 'all 0.5s ease', // Smooth transition for all properties
          marginTop:0,
          marginBottom:0 
        }}
      >
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
              fontWeight: 'bold',
              color: '#2D2B7F', // Dark purple color for heading to add energy
              textTransform: 'uppercase',
              transition: 'font-size 0.5s ease-in-out', // Smooth font size transition
            }}
          >
            About Us
          </Typography>
        </motion.div>

        <Typography
          variant="body1"
          paragraph
          sx={{
            color: 'black',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            transition: 'font-size 0.5s ease-in-out', // Smooth font size transition
            maxWidth: '800px',
            margin: '20px auto', // Center the text
          }}
        >
          Swastik IT Solutions is dedicated to providing high-quality, hands-on IT training that prepares
          students for the rapidly evolving tech industry. With a focus on practical knowledge, real-world
          applications, and 100% placement assistance, our institute ensures that students are job-ready and
          equipped for success.
        </Typography>

        {/* Responsive Grid for Cards */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile and horizontally on larger screens
            alignItems: 'stretch', // Ensure all cards stretch to the same height
          }}
        >
          {/* Column 1: Our Mission */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Starting position: off-screen left
              whileInView={{ opacity: 1, x: 0 }} // Slide to original position on view
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }} // Smooth slide-in effect
            >
              <Paper
                elevation={3}
                sx={{
                  padding: '20px',
                  backgroundColor: '#fff',
                  color: 'black',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#FFEA00', // Yellow background on hover for fun and pop
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%', // Ensure card stretches to fill the available space
                  maxWidth: '100%', // Ensure full width for responsiveness
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#FF7043' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#5F6368' }}>
                  Our mission is to empower individuals with the practical skills, hands-on experience, and knowledge they need to thrive in the ever-evolving tech industry. We believe in fostering a learning environment that balances theoretical foundations with real-world application, ensuring students leave our programs ready to excel in competitive job markets.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Column 2: Our Instructors */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Starting position: off-screen right
              whileInView={{ opacity: 1, x: 0 }} // Slide to original position on view
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }} // Smooth slide-in effect
            >
              <Paper
                elevation={3}
                sx={{
                  padding: '20px',
                  backgroundColor: '#fff',
                  color: 'black',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#FFEA00', // Yellow background on hover for fun and pop
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%', // Ensure card stretches to fill the available space
                  maxWidth: '100%', // Ensure full width for responsiveness
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#FF7043' }}>
                  Our Instructors
                </Typography>
                <Typography variant="body1" sx={{ color: '#5F6368' }}>
                  Our instructors are industry experts with years of experience in fields like web development, data science, AI, and cybersecurity. They are passionate about sharing their knowledge and providing mentorship to ensure that students not only learn the theory but gain hands-on experience with real-world applications.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Column 3: Why Choose Us */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Starting position: off-screen left
              whileInView={{ opacity: 1, x: 0 }} // Slide to original position on view
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }} // Smooth slide-in effect
            >
              <Paper
                elevation={3}
                sx={{
                  padding: '20px',
                  backgroundColor: '#fff',
                  color: 'black',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#FFEA20', // Yellow background on hover for fun and pop
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%', // Ensure card stretches to fill the available space
                  maxWidth: '100%', // Ensure full width for responsiveness
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#FF7043' }}>
                  Why Choose Us
                </Typography>
                <Typography variant="body1" sx={{ color: '#5F6368' }}>
                  Choosing Swastik IT Solutions means choosing a career-focused education. We prioritize practical knowledge, 100% placement assistance, live projects, and lifetime access to course content. Our flexible learning model, offering both online and offline classes, combined with 24/7 support, ensures that every student gets the resources they need to succeed.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default AboutUs;
