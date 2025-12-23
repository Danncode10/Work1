// Unit tests for authSlice
import { describe, it, expect, beforeEach, vi } from 'vitest';
import authReducer, {
  loginUser,
  registerUser,
  verifyToken,
  logout,
  clearAuthError,
  setAuthFromStorage,
} from '../authSlice';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock authApi
vi.mock('../../../services/api', () => ({
  authApi: {
    login: vi.fn(),
    register: vi.fn(),
    verifyToken: vi.fn(),
  },
}));

import { authApi } from '../../../services/api';

describe('authSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
      error: null,
    };
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  describe('reducers', () => {
    it('should handle logout', () => {
      const state = { ...initialState, isAuthenticated: true, token: 'token123' };
      const action = logout();
      const result = authReducer(state, action);
      expect(result.isAuthenticated).toBe(false);
      expect(result.token).toBe(null);
      expect(localStorageMock.removeItem).toHaveBeenCalledWith('authToken');
    });

    it('should handle clearAuthError', () => {
      const state = { ...initialState, error: 'Some error' };
      const action = clearAuthError();
      const result = authReducer(state, action);
      expect(result.error).toBe(null);
    });

    it('should handle setAuthFromStorage when token exists', () => {
      localStorageMock.getItem.mockReturnValue('token123');
      const action = setAuthFromStorage();
      const result = authReducer(initialState, action);
      expect(result.token).toBe('token123');
      expect(result.isAuthenticated).toBe(true);
    });

    it('should handle setAuthFromStorage when no token', () => {
      localStorageMock.getItem.mockReturnValue(null);
      const action = setAuthFromStorage();
      const result = authReducer(initialState, action);
      expect(result.token).toBe(null);
      expect(result.isAuthenticated).toBe(false);
    });
  });

  describe('async thunks', () => {
    describe('loginUser', () => {
      it('should handle login success', async () => {
        const mockResponse = { data: { access_token: 'token123', id_token: 'id123' } };
        authApi.login.mockResolvedValue(mockResponse);

        const dispatch = vi.fn();
        const thunk = loginUser({ email: 'test@example.com', password: 'pass' });

        await thunk(dispatch, () => ({}), undefined);

        expect(authApi.login).toHaveBeenCalledWith({ email: 'test@example.com', password: 'pass' });
        expect(localStorageMock.setItem).toHaveBeenCalledWith('authToken', 'token123');
      });

      it('should handle login failure', async () => {
        const error = { response: { data: 'Invalid credentials' } };
        authApi.login.mockRejectedValue(error);

        const dispatch = vi.fn();
        const thunk = loginUser({ email: 'test@example.com', password: 'wrong' });

        await thunk(dispatch, () => ({}), undefined);

        expect(authApi.login).toHaveBeenCalled();
      });
    });

    describe('registerUser', () => {
      it('should handle register success', async () => {
        const mockResponse = { data: {} };
        authApi.register.mockResolvedValue(mockResponse);

        const dispatch = vi.fn();
        const thunk = registerUser({ email: 'new@example.com', password: 'pass' });

        await thunk(dispatch, () => ({}), undefined);

        expect(authApi.register).toHaveBeenCalledWith({ email: 'new@example.com', password: 'pass' });
      });
    });

    describe('verifyToken', () => {
      it('should handle verify success', async () => {
        const mockResponse = { data: { user: { id: 1, email: 'test@example.com' } } };
        authApi.verifyToken.mockResolvedValue(mockResponse);

        const dispatch = vi.fn();
        const thunk = verifyToken();

        await thunk(dispatch, () => ({}), undefined);

        expect(authApi.verifyToken).toHaveBeenCalled();
      });

      it('should handle verify failure and remove token', async () => {
        authApi.verifyToken.mockRejectedValue(new Error('Invalid token'));

        const dispatch = vi.fn();
        const thunk = verifyToken();

        await thunk(dispatch, () => ({}), undefined);

        expect(localStorageMock.removeItem).toHaveBeenCalledWith('authToken');
      });
    });
  });
});
