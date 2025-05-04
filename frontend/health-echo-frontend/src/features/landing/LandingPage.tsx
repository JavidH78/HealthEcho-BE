// src/features/landing/LandingPage.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Button, Box, useTheme,Icon } from '@mui/material';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { keyframes } from '@mui/system';
// Define keyframes for subtle animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


function LandingPage() {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: { xs: 6, md: 10 },
        }}
      >
        <Box sx={{ animation: `${fadeIn} 0.5s ease-out forwards`, opacity: 0 }}>
          <MonitorHeartIcon fontSize="large" color="primary"/>
          <Typography
            component="h1"
            variant= "h2"
            gutterBottom
            sx={{ fontWeight: 'bold', letterSpacing: '-1px' }}
          >
            Tune In To Your Health with{' '}
            <span style={{ color: theme.palette.primary.main }}> 
              HealthEcho
            </span>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, maxWidth: '700px', margin: 'auto' }}
          >
            Your intelligent health companion. Track vitals, monitor progress, and gain insights effortlessly. Take control of your well-being today.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/register"
              sx={{ px: 4, py: 1.5, animation: `${fadeIn} 0.7s ease-out forwards`, opacity: 0 }}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/login"
              sx={{ px: 4, py: 1.5, animation: `${fadeIn} 0.7s ease-out forwards`, opacity: 0 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>

      <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, animation: `${fadeIn} 0.8s ease-out forwards`, opacity: 0 }}>
            Why Choose HealthEcho?
            </Typography>
            <ul>
              <li>
                  Track Progress: Monitor key health metrics over time with intuitive charts and summaries.
              </li>
              <li>
                Vital Monitoring: Easily log and visualize vital signs like heart rate, blood pressure, and more.
                </li>
                <li>
                    Community Support: Connect with others (optional feature) or share progress securely with healthcare providers.
                </li>
                <li>
                    Secure & Private: Your health data is encrypted and stored securely, respecting your privacy.
                </li>
            </ul>

        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' HealthEcho. All rights reserved.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage;

