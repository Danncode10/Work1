import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ingredientsApi } from '../../services/api';

// Async thunks for API calls
export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await ingredientsApi.getIngredients(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch ingredients');
    }
  }
);

export const fetchIngredientById = createAsyncThunk(
  'ingredients/fetchIngredientById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await ingredientsApi.getIngredient(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch ingredient');
    }
  }
);

export const searchIngredients = createAsyncThunk(
  'ingredients/searchIngredients',
  async (query, { rejectWithValue }) => {
    try {
      const response = await ingredientsApi.searchIngredients(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to search ingredients');
    }
  }
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    list: [],
    selectedIngredient: null,
    searchResults: [],
    loading: false,
    error: null,
    totalCount: 0,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedIngredient: (state) => {
      state.selectedIngredient = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch ingredients
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.ingredients || action.payload;
        state.totalCount = action.payload.total || action.payload.length;
        state.totalPages = action.payload.totalPages || 1;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch ingredient by ID
      .addCase(fetchIngredientById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredientById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedIngredient = action.payload;
      })
      .addCase(fetchIngredientById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Search ingredients
      .addCase(searchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.ingredients || action.payload;
      })
      .addCase(searchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSelectedIngredient, setCurrentPage } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
