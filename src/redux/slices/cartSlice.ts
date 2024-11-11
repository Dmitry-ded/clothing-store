import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";

export type CartProducts = {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  count: number,
  size: string[],
}

interface CartSliceState {
  totalPrice: number,
  products: CartProducts[],
}

interface CartItemPayload {
  id: string;
  size: string[];
}

const { products, totalPrice } = getCartFromLocalStorage();

const initialState: CartSliceState = {
  totalPrice,
  products
};

const cartSlice = createSlice({
  name: "cart",
  initialState, 
  reducers: {
    addProducts(state, action: PayloadAction<CartProducts>) {
      const { id, size } = action.payload;

      size.forEach((productSize) => {
        const findItem = state.products.find(
          (obj) => obj.id === id && obj.size.includes(productSize)
        );
    
        if (findItem) {
          findItem.count++;
        } else {
          state.products.push({
            ...action.payload,
            size: [productSize],
            count: 1,
          });
        }
      });

      state.totalPrice = calcTotalPrice(state.products);
    },
    plusItem(state, action: PayloadAction<CartProducts>) {
      
      const { id, size } = action.payload;

      const findItem = state.products.find(
        (obj) => obj.id === id && size.some(s => obj.size.includes(s))
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = calcTotalPrice(state.products);
    },
    minusItem(state, action: PayloadAction<CartItemPayload>) {
      const { id, size } = action.payload;

      const findItem = state.products.find(
        (obj) => obj.id === id && size.some(s => obj.size.includes(s))
      );

      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }

    },
    removeItem(state, action: PayloadAction<CartItemPayload>) {
      const { id, size } = action.payload;

      state.products = state.products.filter(
        (obj) => obj.id !== id || !size.some(s => obj.size.includes(s))
      );

      state.totalPrice = calcTotalPrice(state.products);
      
    },
    clearProduct(state) {
      state.products = [];
      state.totalPrice = 0;
    }

  }
});


// когда подключу ts
export const selectCart = (state: RootState) => state.cartSlice;

export const selectCartItemsById = (id: string) => (state: RootState) => state.cartSlice.products.find((obj) => obj.id === id);

export const { addProducts, removeItem, minusItem, clearProduct, plusItem } = cartSlice.actions;

export default cartSlice.reducer;