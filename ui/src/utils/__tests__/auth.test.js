// Unit tests for auth utility functions
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { isAuthenticated } from '../auth';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('auth utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('isAuthenticated', () => {
    it('should return true when access token exists', () => {
      localStorageMock.getItem.mockReturnValue('some-token');
      const result = isAuthenticated();
      expect(result).toBe(true);
      expect(localStorageMock.getItem).toHaveBeenCalledWith('access_token');
    });

    it('should return false when access token does not exist', () => {
      localStorageMock.getItem.mockReturnValue(null);
      const result = isAuthenticated();
      expect(result).toBe(false);
      expect(localStorageMock.getItem).toHaveBeenCalledWith('access_token');
    });

    it('should return false when access token is empty string', () => {
      localStorageMock.getItem.mockReturnValue('');
      const result = isAuthenticated();
      expect(result).toBe(false);
    });
  });
});
