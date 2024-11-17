import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface userSliceState { 
  email: string,
  token: string, 
  id: string,
  name: string,
}

const initialState: userSliceState = {
  email: '',
  token: '', 
  id: '',
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<userSliceState>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    setNameProfile(state, action) {
      console.log(action.payload.name);
      
      state.name = action.payload.name
    },
    removeUser(state) {
      state.email = '';
      state.token = '';
      state.id = '';
    }
  }
})

export const { setUser, removeUser, setNameProfile } = userSlice.actions;

export const selectUserSlice = (state: RootState) => state.userSlice;

export default userSlice.reducer;