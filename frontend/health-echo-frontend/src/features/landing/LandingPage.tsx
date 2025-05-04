// src/features/landing/LandingPage.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'; // Keep specific icon imports
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Keep specific icon imports
import GroupIcon from '@mui/icons-material/Group'; // Keep specific icon imports
import SecurityIcon from '@mui/icons-material/Security';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Specific import for Grid

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

  const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 8px 16px ${theme.palette.primary.dark || theme.palette.primary.main}33`,
        },
        animation: `${fadeIn} 0.8s ease-out forwards`,
        opacity: 0,
        '& .MuiSvgIcon-root': {
          animation: `${iconPulse} 2s infinite ease-in-out 1s`,
        }
      }}
    >
      <Box sx={{ color: theme.palette.primary.main, mb: 2, '& svg': { fontSize: 50 } }}>
        {icon}
      </Box>
      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Toolbar>
          <MonitorHeartIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            HealthEcho
          </Typography>
          <Button color="inherit" component={RouterLink} to="/login" sx={{ mr: 1 }}>
            Login
          </Button>
          <Button variant="outlined" color="primary" component={RouterLink} to="/register">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

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
          <MonitorHeartIcon sx={{ fontSize: 80, color: theme.palette.primary.main, mb: 2, animation: `${iconPulse} 2.5s infinite ease-in-out` }} />
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
          <Grid container spacing={4} justifyContent="center">
            {/* --- Fixed Grid Structure --- */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ animationDelay: '0.2s' }}>
                <FeatureCard
                  icon={<TrendingUpIcon />}
                  title="Track Progress"
                  description="Monitor key health metrics over time with intuitive charts and summaries."
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ animationDelay: '0.4s' }}>
                <FeatureCard
                  icon={<MonitorHeartIcon />}
                  title="Vital Monitoring"
                  description="Easily log and visualize vital signs like heart rate, blood pressure, and more."
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ animationDelay: '0.6s' }}>
                <FeatureCard
                  icon={<GroupIcon />}
                  title="Community Support"
                  description="Connect with others (optional feature) or share progress securely with healthcare providers."
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ animationDelay: '0.8s' }}>
                <FeatureCard
                  icon={<SecurityIcon />}
                  title="Secure & Private"
                  description="Your health data is encrypted and stored securely, respecting your privacy."
                />
              </Box>
            </Grid>
          </Grid>
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
