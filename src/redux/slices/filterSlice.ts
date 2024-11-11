import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";


interface SearchSliceState {
  searchValue: string,
}

const initialState: SearchSliceState = {
  searchValue:  '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    }
  }
})

export const { setSearchValue } = filterSlice.actions;

export const selectFilterSearch = (state: RootState) => state.filterSlice;

export default filterSlice.reducer;