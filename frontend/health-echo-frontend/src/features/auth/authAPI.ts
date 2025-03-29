import axios, { AxiosResponse } from 'axios';

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

const API_URL = 'http://localhost:8080/api';

export const loginUser = async (credentials: LoginCredentials): Promise<AxiosResponse<AuthResponse>> => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response;
};

export const registerUser = async (userData: RegisterData): Promise<AxiosResponse<AuthResponse>> => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response;
};
