// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';
import HomePage from './features/home/HomePage';
import LandingPage from './features/landing/LandingPage'; // Import the new LandingPage
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Refined Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Main background
      paper: '#1E1E1E',   // Background for elements like Card, Paper, AppBar
    },
    primary: {
      main: '#64b5f6', // Lighter blue for primary actions
      // contrastText: '#000', // Ensure text on primary buttons is readable if needed
    },
    secondary: {
      main: '#f48fb1', // Pinkish secondary color
    },
    text: {
      primary: '#e0e0e0', // Slightly off-white for primary text
      secondary: '#b0bec5', // Greyer secondary text
    },
    divider: 'rgba(255, 255, 255, 0.12)', // Divider color for dark mode
  },
  typography: {
    fontFamily: [
      'Roboto Condensed', // Keep your chosen font
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 700 }, // Make headings bolder
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    button: {
        textTransform: 'none', // Use normal case buttons
        fontWeight: 600,
    }
  },
  components: { // Define default props for components
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 8, // Slightly more rounded buttons
            }
        }
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                 borderRadius: 12, // Rounded corners for Paper elements
            }
        }
    },
    MuiCard: {
         styleOverrides: {
            root: {
                 borderRadius: 12, // Rounded corners for Card elements
            }
        }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Ensures consistent baseline styles & background color */}
      <Provider store={store}>
        <Router>
          <Routes>
            {/* --- Public Routes --- */}
            {/* Root path now shows the public LandingPage */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* --- Protected Routes --- */}
            {/* Main application HomePage moved to /dashboard */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />

            {/* Add other protected routes here as needed */}
            {/* Example: <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} /> */}

            {/* Optional: Add a 404 Not Found Route */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}

          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
