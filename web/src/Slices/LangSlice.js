import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "mk",
};

export const LangSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLang } = LangSlice.actions;
export default LangSlice.reducer;