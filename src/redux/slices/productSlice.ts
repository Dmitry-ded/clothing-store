import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type ProductItem = {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  imageUrlHover: string,
  size: [],
  category: string,
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface ItemsSliceState {
  products: ProductItem[];
  status: Status;
}

const initialState: ItemsSliceState = {
  products: [],
  status: Status.LOADING,
}

export const fetchProducts = createAsyncThunk<ProductItem[]>(
  `product/fetchProductsStatus`,
  async () => {
    // https://66e9e82987e41760944b0db3.mockapi.io/items?page=1&limit=4
    const { data } = await axios.get<ProductItem[]>(`https://66e9e82987e41760944b0db3.mockapi.io/items`);
    return data
  },
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductItem[]>) {
      state.products = action.payload;
    }
  },

  extraReducers: (bilder) => {
    bilder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.products = [];
    })
    bilder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.products = action.payload
    })
    bilder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.products = [];
    })
  }
})

export const selectProductData = (state: RootState) => state.productSlice;

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;