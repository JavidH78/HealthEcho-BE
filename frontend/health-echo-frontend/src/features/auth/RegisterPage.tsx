import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { 
  TextField, 
  Button, 
  Typography, 
  Link, 
  Container,
  Paper,
  useTheme
} from '@mui/material';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    dispatch(register({ username, email, password }) as any)
      .unwrap()
      .then(() => navigate('/'))
      .catch((err: any) => console.error('Registration failed:', err));
  };

  const theme = useTheme();

  return (
    <Container 
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.primary.main
          }}
        >
          HealthEcho Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.primary.main,
                },
              }
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.primary.main,
                },
              }
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.primary.main,
                },
              }
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ 
              mt: 3,
              py: 1.5,
              fontWeight: 'bold',
              letterSpacing: 1.1
            }}
          >
            Register
          </Button>
        </form>
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 3,
            textAlign: 'center',
            color: theme.palette.text.secondary
          }}
        >
          Already have an account?{' '}
          <Link 
            href="/login" 
            underline="hover"
            sx={{ color: theme.palette.secondary.main }}
          >
            Login here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
