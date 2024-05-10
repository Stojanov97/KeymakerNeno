import { combineReducers } from "@reduxjs/toolkit";
import theme from "../Slices/ThemeSlice";


const rootReducer = combineReducers({
  theme
});

export default rootReducer;