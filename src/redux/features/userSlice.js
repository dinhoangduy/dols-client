import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: {}, userRegister: {} };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    setUserRegister: (state, action) => {
      state.userRegister = action.payload;
    },
  },
});

export const { setUser, setUserRegister } = userSlice.actions;

export default userSlice.reducer;
