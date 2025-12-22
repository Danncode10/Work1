import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    query: '',
    category: '',
    sortBy: 'name',
    sortOrder: 'asc',
    additionalFilters: {},
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setAdditionalFilters: (state, action) => {
      state.additionalFilters = { ...state.additionalFilters, ...action.payload };
    },
    clearFilters: (state) => {
      state.query = '';
      state.category = '';
      state.sortBy = 'name';
      state.sortOrder = 'asc';
      state.additionalFilters = {};
    },
    clearQuery: (state) => {
      state.query = '';
    },
  },
});

export const {
  setQuery,
  setCategory,
  setSortBy,
  setSortOrder,
  setAdditionalFilters,
  clearFilters,
  clearQuery,
} = filtersSlice.actions;

export default filtersSlice.reducer;
