import { configureStore } from '@reduxjs/toolkit'
import CustomHourReducer from "./CustomHourSlice"


export const store = configureStore({
  reducer: {
    customHour: CustomHourReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch