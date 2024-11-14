// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E88E5', // Customize this primary color (blue as an example)
    },
    secondary: {
      main: '#D32F2F', // Customize this secondary color (red as an example)
    },
    background: {
      default: '#F5F5F5', // Background color for the app
    },
    text: {
      primary: '#333333', // Text color
      secondary: '#666666', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
