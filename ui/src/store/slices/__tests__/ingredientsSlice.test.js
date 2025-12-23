// Unit tests for ingredientsSlice
import { describe, it, expect, beforeEach, vi } from 'vitest';
import ingredientsReducer, {
  fetchIngredients,
  fetchIngredientById,
  searchIngredients,
  clearError,
  clearSelectedIngredient,
  setCurrentPage,
} from '../ingredientsSlice';

// Mock ingredientsApi
vi.mock('../../../services/api', () => ({
  ingredientsApi: {
    getIngredients: vi.fn(),
    getIngredient: vi.fn(),
    searchIngredients: vi.fn(),
  },
}));

import { ingredientsApi } from '../../../services/api';

describe('ingredientsSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      list: [],
      selectedIngredient: null,
      searchResults: [],
      initialLoading: false,
      searchLoading: false,
      error: null,
      totalCount: 0,
      currentPage: 1,
      totalPages: 1,
    };
    vi.clearAllMocks();
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const state = { ...initialState, error: 'Some error' };
      const action = clearError();
      const result = ingredientsReducer(state, action);
      expect(result.error).toBe(null);
    });

    it('should handle clearSelectedIngredient', () => {
      const state = { ...initialState, selectedIngredient: { id: 1, name: 'Test' } };
      const action = clearSelectedIngredient();
      const result = ingredientsReducer(state, action);
      expect(result.selectedIngredient).toBe(null);
    });

    it('should handle setCurrentPage', () => {
      const action = setCurrentPage(5);
      const result = ingredientsReducer(initialState, action);
      expect(result.currentPage).toBe(5);
    });
  });

  describe('async thunks', () => {
    describe('fetchIngredients', () => {
      it('should handle fetch success', async () => {
        const mockResponse = {
          data: {
            ingredients: [{ id: 1, name: 'Ginger' }],
            total: 50,
            totalPages: 5,
          },
        };
        ingredientsApi.getIngredients.mockResolvedValue(mockResponse);

        const dispatch = vi.fn();
        const thunk = fetchIngredients({ page: 1 });

        await thunk(dispatch, () => ({}), undefined);

        expect(ingredientsApi.getIngredients).toHaveBeenCalledWith({ page: 1 });
      });

      it('should handle fetch failure', async () => {
        const error = { response: { data: 'Server error' } };
        ingredientsApi.getIngredients.mockRejectedValue(error);

        const dispatch = vi.fn();
        const thunk = fetchIngredients();

        await thunk(dispatch, () => ({}), undefined);

        expect(ingredientsApi.getIngredients).toHaveBeenCalled();
      });
    });

    describe('fetchIngredientById', () => {
      it('should handle fetch by id success', async () => {
        const mockResponse = { data: { id: 1, name: 'Ginger', benefits: ['Anti-inflammatory'] } };
        ingredientsApi.getIngredient.mockResolvedValue(mockResponse);

        const dispatch = vi.fn();
        const thunk = fetchIngredientById(1);

        await thunk(dispatch, () => ({}), undefined);

        expect(ingredientsApi.getIngredient).toHaveBeenCalledWith(1);
      });
    });

    describe('searchIngredients', () => {
      it('should handle search success', async () => {
        const mockResponse = { data: { ingredients: [{ id: 1, name: 'Ginger' }] } };
        ingredientsApi.searchIngredients.mockResolvedValue(mockResponse);

        const dispatch = vi.fn();
        const thunk = searchIngredients('ginger');

        await thunk(dispatch, () => ({}), undefined);

        expect(ingredientsApi.searchIngredients).toHaveBeenCalledWith('ginger');
      });
    });
  });
});
