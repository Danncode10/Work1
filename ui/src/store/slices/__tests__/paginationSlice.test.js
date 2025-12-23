// Unit tests for paginationSlice
import { describe, it, expect, beforeEach } from 'vitest';
import paginationReducer, {
  setCurrentPage,
  setItemsPerPage,
  setTotalItems,
  nextPage,
  previousPage,
  resetPagination,
} from '../paginationSlice';

describe('paginationSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 1,
    };
  });

  describe('reducers', () => {
    it('should handle setCurrentPage', () => {
      const action = setCurrentPage(3);
      const result = paginationReducer(initialState, action);
      expect(result.currentPage).toBe(3);
    });

    it('should handle setItemsPerPage', () => {
      const action = setItemsPerPage(20);
      const result = paginationReducer(initialState, action);
      expect(result.itemsPerPage).toBe(20);
      expect(result.currentPage).toBe(1); // Reset to first page
    });

    it('should handle setTotalItems', () => {
      const action = setTotalItems(55);
      const result = paginationReducer(initialState, action);
      expect(result.totalItems).toBe(55);
      expect(result.totalPages).toBe(6); // ceil(55/10)
    });

    it('should handle nextPage', () => {
      const state = { ...initialState, currentPage: 2, totalPages: 5 };
      const action = nextPage();
      const result = paginationReducer(state, action);
      expect(result.currentPage).toBe(3);
    });

    it('should not go beyond totalPages in nextPage', () => {
      const state = { ...initialState, currentPage: 5, totalPages: 5 };
      const action = nextPage();
      const result = paginationReducer(state, action);
      expect(result.currentPage).toBe(5);
    });

    it('should handle previousPage', () => {
      const state = { ...initialState, currentPage: 3 };
      const action = previousPage();
      const result = paginationReducer(state, action);
      expect(result.currentPage).toBe(2);
    });

    it('should not go below 1 in previousPage', () => {
      const action = previousPage();
      const result = paginationReducer(initialState, action);
      expect(result.currentPage).toBe(1);
    });

    it('should handle resetPagination', () => {
      const state = {
        currentPage: 5,
        itemsPerPage: 20,
        totalItems: 100,
        totalPages: 5,
      };
      const action = resetPagination();
      const result = paginationReducer(state, action);
      expect(result).toEqual(initialState);
    });
  });
});
