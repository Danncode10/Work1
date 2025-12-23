// Unit tests for filtersSlice
import { describe, it, expect, beforeEach } from 'vitest';
import filtersReducer, {
  setQuery,
  setCategory,
  setSortBy,
  setSortOrder,
  setAdditionalFilters,
  clearFilters,
  clearQuery,
} from '../filtersSlice';

describe('filtersSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      query: '',
      category: '',
      sortBy: 'name',
      sortOrder: 'asc',
      additionalFilters: {},
    };
  });

  describe('reducers', () => {
    it('should handle setQuery', () => {
      const action = setQuery('ginger');
      const result = filtersReducer(initialState, action);
      expect(result.query).toBe('ginger');
    });

    it('should handle setCategory', () => {
      const action = setCategory('herb');
      const result = filtersReducer(initialState, action);
      expect(result.category).toBe('herb');
    });

    it('should handle setSortBy', () => {
      const action = setSortBy('popularity');
      const result = filtersReducer(initialState, action);
      expect(result.sortBy).toBe('popularity');
    });

    it('should handle setSortOrder', () => {
      const action = setSortOrder('desc');
      const result = filtersReducer(initialState, action);
      expect(result.sortOrder).toBe('desc');
    });

    it('should handle setAdditionalFilters', () => {
      const action = setAdditionalFilters({ organic: true });
      const result = filtersReducer(initialState, action);
      expect(result.additionalFilters.organic).toBe(true);
    });

    it('should handle clearFilters', () => {
      const state = {
        query: 'test',
        category: 'herb',
        sortBy: 'popularity',
        sortOrder: 'desc',
        additionalFilters: { organic: true },
      };
      const action = clearFilters();
      const result = filtersReducer(state, action);
      expect(result).toEqual(initialState);
    });

    it('should handle clearQuery', () => {
      const state = { ...initialState, query: 'test' };
      const action = clearQuery();
      const result = filtersReducer(state, action);
      expect(result.query).toBe('');
    });
  });
});
