import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import favoritesSlice from './slices/favoritesSlice'
import productSlice from './slices/productSlice'
import filterSlice from './slices/filterSlice'
import userSlice from './slices/userSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    cartSlice,
    favoritesSlice,
    productSlice,
    filterSlice,
    userSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();