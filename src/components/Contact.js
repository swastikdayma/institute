// src/components/ContactUs.js
import React from 'react';
import { Box, Grid, TextField, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Icons for Location, Email, and Phone

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        id="Contact Us"
        my={4}
        p={3}
        textAlign="center"
        sx={{
          backgroundColor:'rgba(244, 248, 251, 0.7)', // Soft orange background for the whole section
          borderRadius: '8px',
          marginTop:0,
          marginBottom:0 
        }}
      >
         <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#2D2B7F', // Dark blue color for the heading
          marginBottom: '40px',
          textTransform: 'uppercase',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
        }}
      >
        Reach Us
      </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {/* Left Column: Contact Info */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: '10px',
                height: '100%', // Set to 100% to match the height of the map
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" sx={{ color: '#FF7043', fontWeight: 'bold' }}>
                Our Contact Info
              </Typography>

              {/* Location */}
              <TextField
                fullWidth
                label="Location"
                variant="outlined"
                margin="normal"
                value="Plot No. 1C, Second Floor, 
Sumer Nagar, near Hotel MB
Gangaur Mangyawas Rd,
Geetanjali Colony, Mansarovar,
Jaipur, Rajasthan 302020, India"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <FaMapMarkerAlt style={{ marginRight: '10px', color: '#FF7043' }} />
                  ),
                }}
                sx={{ wordWrap: 'break-word', whiteSpace: 'pre-line' }} // To handle long text
              />

              {/* Email */}
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value="info@swastikit.com"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <FaEnvelope style={{ marginRight: '10px', color: '#FF7043' }} />
                  ),
                }}
              />

              {/* Phone */}
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                value="+91 8769705544"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <FaPhoneAlt style={{ marginRight: '10px', color: '#FF7043' }} />
                  ),
                }}
              />
            </Paper>
          </Grid>

          {/* Right Column: Map */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: '10px', height: '100%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d390.51485968279644!2d75.73896754239867!3d26.863653922855317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1731597184970!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default ContactUs;
