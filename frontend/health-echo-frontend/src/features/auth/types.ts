export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    username: string;
    email: string;
  };
  token: string;
}

export interface AuthState {
  user: null | { username: string; email: string };
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
