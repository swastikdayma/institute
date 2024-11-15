import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundImage from '../media/4669613.jpg'; // Import your background image

const AboutUs = () => {
  // Detect iOS device
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

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
          color: 'black',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          position: 'relative',
          paddingTop: '80px',
          transition: 'all 0.5s ease',
          marginTop: 0,
          marginBottom: 0,

          // Background settings
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover', // Default for desktop
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isIOS ? 'scroll' : 'fixed', // Fallback for iOS

          // Fix for smaller devices
          '@media (max-width: 768px)': {
            backgroundSize: 'contain', // Adjust for smaller devices
            backgroundAttachment: 'scroll', // Avoid issues on iOS
          },
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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: '#2D2B7F',
              textTransform: 'uppercase',
              transition: 'font-size 0.5s ease-in-out',
            }}
          >
            About Us
          </Typography>
        </motion.div>

        {/* About Us Description with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              transition: 'font-size 0.5s ease-in-out',
              maxWidth: '800px',
              margin: '20px auto',
            }}
          >
            Swastik IT Solutions is dedicated to providing high-quality, hands-on IT training that prepares
            students for the rapidly evolving tech industry. With a focus on practical knowledge, real-world
            applications, and 100% placement assistance, our institute ensures that students are job-ready and
            equipped for success. We pride ourselves on creating a learning environment that fosters creativity,
            problem-solving, and innovation.
          </Typography>
        </motion.div>

        {/* Responsive Grid for Cards */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'stretch',
          }}
        >
          {/* Column 1: Our Mission */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
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
                    backgroundColor: '#fff2cc',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  maxWidth: '100%',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#FF7043' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#5F6368' }}>
                  Our mission is to empower individuals with the practical skills, hands-on experience, and
                  knowledge they need to thrive in the ever-evolving tech industry. We aim to bridge the gap
                  between education and employment through high-quality training and 100% placement assistance.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Column 2: Our Instructors */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
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
                    backgroundColor: '#fff2cc',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  maxWidth: '100%',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#FF7043' }}>
                  Our Instructors
                </Typography>
                <Typography variant="body1" sx={{ color: '#5F6368' }}>
                  Our instructors are industry experts with years of experience in fields like web
                  development, data science, AI, and cybersecurity. They are passionate about teaching and
                  committed to helping students succeed in their careers.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Column 3: Our Vision */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
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
                    backgroundColor: '#fff2cc',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  maxWidth: '100%',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#FF7043' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: '#5F6368' }}>
                  Our vision is to be a leading provider of IT training that equips students with cutting-edge
                  skills for the tech industry, fostering innovation, and success. We strive to create a
                  lasting impact on the lives of our students and the industry as a whole.
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
