import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuth } = AuthSlice.actions;
export default AuthSlice.reducer;