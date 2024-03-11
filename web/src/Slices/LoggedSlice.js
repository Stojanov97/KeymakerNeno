import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
};

export const loggedSlice = createSlice({
    name: "logged",
    initialState,
    reducers:{
        setLogged:(state, action)=>{ state.isLogged = action.payload;}
    }
})

export const { setLogged } = loggedSlice.actions;

export default loggedSlice.reducer;