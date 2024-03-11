import { configureStore } from '@reduxjs/toolkit'
import LoggedSlice from '../Slices/LoggedSlice'

export const store = configureStore({
  reducer: {
    isLogged: LoggedSlice,
  },
})