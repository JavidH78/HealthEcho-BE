import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { loginUser, registerUser } from './authAPI';
import type { AuthState } from './types';
import type { AuthResponse, LoginCredentials, RegisterData } from './authAPI';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout
} = authSlice.actions;

export default authSlice.reducer;

// Thunk actions
export const login = (credentials: LoginCredentials): AppThunk => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await loginUser(credentials);
    dispatch(loginSuccess(response.data));
    localStorage.setItem('token', response.data.token);
  } catch (err: any) {
    dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
  }
};

export const register = (userData: RegisterData): AppThunk => async (dispatch) => {
  try {
    dispatch(registerStart());
    const response = await registerUser(userData);
    dispatch(registerSuccess(response.data));
    localStorage.setItem('token', response.data.token);
  } catch (err: any) {
    dispatch(registerFailure(err.response?.data?.message || 'Registration failed'));
  }
};

export const logoutUser = (): AppThunk => dispatch => {
  localStorage.removeItem('token');
  dispatch(logout());
};
