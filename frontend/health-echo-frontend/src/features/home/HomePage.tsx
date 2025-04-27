import React from 'react';
import { Box, Typography, Container, AppBar, Toolbar } from '@mui/material';

const HomePage: React.FC = () => {
  // Placeholder for user data - will fetch from Redux later
  const userName = 'User'; // Replace with actual user name

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HealthEcho Dashboard
          </Typography>
          {/* Add Logout button or other nav items here later */}
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {userName}!
        </Typography>
        <Typography variant="body1">
          This is your health dashboard. Features for health logs and reminders will be added here.
        </Typography>
        {/* Placeholder sections for Health Logs and Reminders */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2">Health Logs Overview</Typography>
          {/* HealthLogSummary component will go here */}
          <Typography variant="body2" color="text.secondary">
            (Recent logs will be displayed here)
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2">Upcoming Reminders</Typography>
          {/* ReminderList component will go here */}
          <Typography variant="body2" color="text.secondary">
            (Upcoming reminders will be displayed here)
          </Typography>
        </Box>
      </Container>
      {/* Optional Footer */}
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[800] }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' HealthEcho'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
