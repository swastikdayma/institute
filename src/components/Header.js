import React, { useState } from 'react';
import Logo from '../media/s-removebg-preview.png';
import { AppBar, Toolbar, Typography, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';


const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar
      sx={{
        
        position: 'fixed',
        background: 'rgba(255, 255, 255, 0.4)',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
        color: 'black',
        padding: 0,
        margin:0
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ paddingX: { xs: 1, sm: 2 } }}>
         
          <Box display="flex" alignItems="center" flexGrow={1}>
            <img src={Logo} alt="Institute Logo" height="80" style={{ marginRight: '10px' }} />
            <Box>
              <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold' }}>
                Swastik
              </Typography>
              <Typography variant="body1" component="div" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                IT Solutions & Training Institute
              </Typography>
            </Box>
          </Box>
          

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={toggleDrawer}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
            <List>
              {['About Us', 'Our Courses', 'What We Offer', 'Contact Us'].map((section, index) => (
                <ListItem button component={Link} to={section} smooth={true} duration={500} onClick={toggleDrawer} key={index}>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        {section.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: '25px' }}>
              {['About Us', 'Our Courses', 'What We Offer', 'Contact Us'].map((text, index) => (
                <Link
                  key={index}
                  to={text}
                  smooth={true}
                  duration={500}
                  style={{
                    padding: '10px',
                    color: 'black',
                    textDecoration: 'none',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
