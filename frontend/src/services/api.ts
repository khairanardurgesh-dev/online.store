import axios from 'axios';
import { User, Product, Order, ApiResponse } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    
    if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
      console.error('Connection refused. Is the backend server running?');
      throw new Error('Unable to connect to server. Please check if the backend is running.');
    }
    
    throw error;
  }
);

// Auth API
export const authAPI = {
  login: async (email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  signup: async (name: string, email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> => {
    try {
      const response = await api.post('/auth/signup', { name, email, password });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  getProfile: async (): Promise<ApiResponse<User>> => {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },
};

// Products API
export const productsAPI = {
  getAll: async (): Promise<ApiResponse<Product[]>> => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  getById: async (id: string): Promise<ApiResponse<Product>> => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  create: async (productData: FormData): Promise<ApiResponse<Product>> => {
    try {
      const response = await api.post('/products', productData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  update: async (id: string, productData: FormData): Promise<ApiResponse<Product>> => {
    try {
      const response = await api.put(`/products/${id}`, productData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  delete: async (id: string): Promise<ApiResponse<void>> => {
    try {
      const response = await api.delete(`/products/${id}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },
};

// Orders API
export const ordersAPI = {
  create: async (productId: string): Promise<ApiResponse<Order>> => {
    try {
      const response = await api.post('/orders', { productId });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  verifyPayment: async (orderId: string, paymentId: string, signature: string): Promise<ApiResponse<Order>> => {
    try {
      const response = await api.post('/orders/verify', {
        orderId,
        paymentId,
        signature,
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  getUserOrders: async (): Promise<ApiResponse<Order[]>> => {
    try {
      const response = await api.get('/orders/user');
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  getAllOrders: async (): Promise<ApiResponse<Order[]>> => {
    try {
      const response = await api.get('/orders');
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },

  downloadFile: async (orderId: string): Promise<Blob> => {
    try {
      const response = await api.get(`/orders/download/${orderId}`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },
};

// Razorpay API
export const razorpayAPI = {
  createOrder: async (amount: number, productId: string): Promise<ApiResponse<{ orderId: string; amount: number; currency: string }>> => {
    try {
      const response = await api.post('/razorpay/create-order', {
        amount,
        productId,
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },
};

export default api;
