import { configureStore } from '@reduxjs/toolkit'
import ingredientsReducer from './slices/ingredientsSlice'
import authReducer from './slices/authSlice'
import filtersReducer from './slices/filtersSlice'
import paginationReducer from './slices/paginationSlice'

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    auth: authReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
  },
})

export default store
