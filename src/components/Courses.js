// src/components/OurCourses.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaCloud, FaLock, FaCogs, FaDatabase, FaPython } from 'react-icons/fa';

const courses = [
  {
    name: 'Fullstack Web Development (MERN)',
    description: 'Learn how to build dynamic, data-driven websites using the MERN stack. Master MongoDB, Express, React, and Node.js to develop end-to-end web applications.',
    icon: <FaLaptopCode size={70} color="#FF7043" />,
  },
  {
    name: 'Data Analytics',
    description: 'Become proficient in data analytics by learning to work with tools like Excel, Power BI, and Tableau. Understand data visualization techniques, and data manipulation.',
    icon: <FaChartLine size={70} color="#FF7043" />,
  },
  {
    name: 'Data Science & Machine Learning',
    description: 'Learn data science and machine learning with Python and libraries like TensorFlow and Scikit-learn. Cover everything from data preprocessing to model evaluation.',
    icon: <FaDatabase size={70} color="#FF7043" />,
  },
  {
    name: 'SEO',
    description: 'Master SEO to optimize websites for search engines. Learn on-page and off-page SEO, keyword research, SEO tools, and strategies to drive organic traffic.',
    icon: <FaLaptopCode size={70} color="#FF7043" />,
  },
  {
    name: 'Cybersecurity',
    description: 'Understand how to protect networks and systems from cyber threats. Learn encryption, firewalls, ethical hacking, penetration testing, and securing applications.',
    icon: <FaLock size={70} color="#FF7043" />,
  },
  {
    name: 'Python Programming',
    description: 'Learn Python, one of the most versatile programming languages. Explore from basic syntax to advanced topics like object-oriented programming.',
    icon: <FaPython size={70} color="#FF7043" />,
  },
  {
    name: 'Fullstack with Python',
    description: 'Learn full-stack development using Python frameworks like Django and Flask. Build server-side apps and manage databases with Python.',
    icon: <FaLaptopCode size={70} color="#FF7043" />,
  },
  {
    name: 'Cloud Computing',
    description: 'Understand cloud infrastructure, services, and deployment strategies using AWS, Azure, and Google Cloud to manage scalable applications.',
    icon: <FaCloud size={70} color="#FF7043" />,
  },
  {
    name: 'Data Structures & Algorithms (DSA)',
    description: 'Master the concepts of DSA, optimizing coding solutions, understanding time complexity, and preparing for coding interviews.',
    icon: <FaCogs size={70} color="#FF7043" />,
  },
];

const Courses = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Box
        id="Our Courses"
        my={4}
        p={3}
        sx={{
          position: 'relative',
          borderRadius: '10px',
          padding: "50px",
          paddingBottom: '50px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Set background color to transparent
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          marginTop:0,
          marginBottom:0,
          marginRight:'50px' 
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: '#2D2B7F',
              textTransform: 'uppercase',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
              textAlign: 'center',
            }}
          >
            Our Courses
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            px: { xs: 1, sm: 2 },
            display: 'flex',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {courses.map((course, index) => (
            <Grid
              item
              xs={12} sm={6} md={4}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card
                  elevation={3}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: 400, md: 400 },
                    height: { xs: 'auto', sm: 450 },
                    padding: '20px',
                    backgroundColor: '#fff',
                    color: '#333',
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
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CardContent sx={{ height: '100%' }}>
                    <Box sx={{ marginBottom: '16px' }}>{course.icon}</Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: '#FF7043',
                      }}
                    >
                      {course.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5F6368', marginBottom: '16px' }}>
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Courses;
