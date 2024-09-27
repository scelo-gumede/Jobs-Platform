import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice";
import userIdSlice from "./slices/userIdSlice";

export const store = configureStore({
    reducer:{
        token:tokenSlice,
        userId:userIdSlice
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

