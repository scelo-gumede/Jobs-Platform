import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";


interface TokenInterface{
    value:string
}

const initialState:TokenInterface={
    value:""
}

const tokenState = createSlice({
    name:"token",
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string>)=>{
             state.value =action.payload
        }
    }
})


export const{setToken}=tokenState.actions

export default tokenState.reducer