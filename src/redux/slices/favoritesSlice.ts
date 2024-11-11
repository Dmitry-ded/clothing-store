import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { getFavoritesFromLocalStorage } from "../../utils/getFavoritesFromLocalStorage";


export type ProductsFavorite =  {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  imageUrlHover: string,
  size: string[],
}

interface FavoriteSliceState {
  totalCount: number;
  productsFavorite: ProductsFavorite[];
}

const { productsFavorite, totalCount } = getFavoritesFromLocalStorage();

const initialState: FavoriteSliceState = {
  productsFavorite,
  totalCount,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addProductsFavorites(state, action: PayloadAction<ProductsFavorite>) {
      state.productsFavorite.push(action.payload);
      state.totalCount++;
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      const findItem = state.productsFavorite.find((obj) => obj.id === action.payload);

      if (findItem) {
        state.productsFavorite = state.productsFavorite.filter((obj) => obj.id !== action.payload)
        state.totalCount--;
      }
    }
  }
})

export const { addProductsFavorites, removeFromFavorites } = favoritesSlice.actions;


export const selectProductFavorite = (state: RootState) => state.favoritesSlice;
export const selectFavoritesItemsById = (id: string) => (state: RootState) => state.favoritesSlice.productsFavorite.find((obj) => obj.id === id);
export const selectFavoritesTotalCount = (state: RootState) => state.favoritesSlice.totalCount;

export default favoritesSlice.reducer;