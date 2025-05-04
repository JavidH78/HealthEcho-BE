// src/features/landing/LandingPage.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,Box,
  useTheme,
    useMediaQuery,
} from '@mui/material';
import MonitorHeart from '@mui/icons-material/MonitorHeart';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Group from '@mui/icons-material/Group';
import Security from '@mui/icons-material/Security';
import { keyframes } from '@mui/system';
import Grid from '@mui/material/Grid';
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

const iconPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

function LandingPage() {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



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
          <MonitorHeart sx={{ fontSize: 80, color: theme.palette.primary.main, mb: 2, animation: `${iconPulse} 2.5s infinite ease-in-out` }} />
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
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
              sx={{ px: 4, py: 1.5, animation: `${fadeIn} 0.7s ease-out 0.2s forwards`, opacity: 0 }}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/login"
              sx={{ px: 4, py: 1.5, animation: `${fadeIn} 0.7s ease-out 0.4s forwards`, opacity: 0 }}
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

