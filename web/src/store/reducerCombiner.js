import { combineReducers } from "@reduxjs/toolkit";
import theme from "../Slices/ThemeSlice";
import auth from "../Slices/AuthSlice";
import checkToken from "../Slices/CheckTokenSlice";
import lang from "../Slices/LangSlice";
import url from "../Slices/URLslice";

const rootReducer = combineReducers({
  theme,
  auth,
  checkToken,
  lang,
  url
});

export default rootReducer;