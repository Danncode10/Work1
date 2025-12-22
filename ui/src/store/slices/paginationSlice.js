import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1; // Reset to first page when changing items per page
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
      state.totalPages = Math.ceil(action.payload / state.itemsPerPage);
    },
    nextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    previousPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    resetPagination: (state) => {
      state.currentPage = 1;
      state.totalItems = 0;
      state.totalPages = 1;
    },
  },
});

export const {
  setCurrentPage,
  setItemsPerPage,
  setTotalItems,
  nextPage,
  previousPage,
  resetPagination,
} = paginationSlice.actions;

export default paginationSlice.reducer;
