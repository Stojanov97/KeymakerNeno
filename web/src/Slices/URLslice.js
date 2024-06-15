import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "/",
};

export const URLslice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setURL: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setURL } = URLslice.actions;
export default URLslice.reducer;