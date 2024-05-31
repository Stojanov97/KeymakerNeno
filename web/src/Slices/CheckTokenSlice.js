import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const CheckTokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    checkToken: (state) => {
      state.value = !state.value;
    },
  },
});

export const { checkToken } = CheckTokenSlice.actions;
export default CheckTokenSlice.reducer;