import React from 'react';
import { Typography, Box, Grid, Paper, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle, Work, Code, AccessAlarm, Help, School } from '@mui/icons-material'; // Example icons
import teachingImg from '../media/6101073.jpg'; // Import the background image

// Offering data with icons
const offerings = [
  {
    title: "100% Placement Assistance",
    description: "Guaranteed support for job placements.",
    icon: <CheckCircle sx={{ fontSize: 50, color: '#FF7043' }} />,
  },
  {
    title: "Industrial Internship",
    description: "Hands-on experience with real projects.",
    icon: <Work sx={{ fontSize: 50, color: '#FF7043' }} />,
  },
  {
    title: "Live Project",
    description: "Work on live projects to build real-world skills.",
    icon: <Code sx={{ fontSize: 50, color: '#FF7043' }} />,
  },
  {
    title: "Lifetime Access to Classes",
    description: "Access anytime for continuous learning.",
    icon: <AccessAlarm sx={{ fontSize: 50, color: '#FF7043' }} />,
  },
  {
    title: "24/7 Support",
    description: "Get help anytime you need.",
    icon: <Help sx={{ fontSize: 50, color: '#FF7043' }} />,
  },
  {
    title: "Both Online and Offline Classes",
    description: "Learn at your convenience.",
    icon: <School sx={{ fontSize: 50, color: '#FF7043' }} />,
  },
];

const Offer = () => (
  <Box
    id="What We Offer"
    sx={{
      backgroundImage: `url(${teachingImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: { xs: 'scroll', sm: 'fixed' }, // Fixed for larger devices, scroll for mobile
      padding: '50px',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
      marginTop: 0,
      marginBottom: 0,
    }}
  >
    {/* Section Title with animation */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#2D2B7F', // Dark blue color for heading
          marginBottom: '40px',
          textTransform: 'uppercase',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
        }}
      >
        What We Offer
      </Typography>
    </motion.div>

    {/* Offerings Grid */}
    <Grid container spacing={4} justifyContent="center">
      {offerings.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={5}
              sx={{
                padding: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '20px', // Rounded corners
                textAlign: 'center',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              {/* Animated Section for Each Offering */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <Box sx={{ marginBottom: '20px' }}>
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#FF7043', // Accent color
                    marginBottom: '20px',
                    fontSize: { xs: '1.1rem', sm: '1.2rem' },
                    textTransform: 'uppercase',
                  }}
                >
                  {item.title}
                </Typography>
                <ListItemText
                  primary={item.description}
                  sx={{
                    color: '#5F6368',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: '1.6',
                  }}
                />
              </motion.div>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Offer;
