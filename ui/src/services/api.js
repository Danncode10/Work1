import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // Network error
      return Promise.reject({ detail: 'Network error. Please check your internet connection and try again.' });
    }
    const status = error.response.status;
    let message = error.response.data?.detail || error.response.data?.message || 'An error occurred';
    if (status === 400) {
      message = 'Bad request. Please check your input.';
    } else if (status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
      message = 'Unauthorized. Please log in again.';
    } else if (status === 404) {
      message = 'Resource not found.';
    } else if (status === 500) {
      message = 'Server error. Please try again later.';
    }
    return Promise.reject({ detail: message });
  }
);

// Ingredients API functions
export const ingredientsApi = {
  // Get all ingredients with optional pagination
  getIngredients: (params = {}) => {
    return api.get('/ingredients', { params });
  },

  // Get single ingredient by ID
  getIngredient: (id) => {
    return api.get(`/ingredients/${id}`);
  },

  // Search ingredients
  searchIngredients: (query) => {
    return api.post('/ingredients/search', { query });
  },
};

// Auth API functions
export const authApi = {
  // Login user
  login: (credentials) => {
    return api.post('/auth/login', credentials);
  },

  // Register user
  register: (userData) => {
    return api.post('/auth/register', userData);
  },

  // Verify token
  verifyToken: () => {
    return api.get('/auth/verify');
  },
};

export default api;
