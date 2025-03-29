import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ username, password }) as any)
      .unwrap()
      .then(() => navigate('/'))
      .catch((err: any) => console.error('Login failed:', err));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{' '}
        <Link href="/register" underline="hover">
          Register here
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
