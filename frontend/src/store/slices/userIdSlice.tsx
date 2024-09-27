import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface Props{
    value:string
}

const initialState:Props={
    value:""
}


const userId = createSlice({
    name:"id",
    initialState,
    reducers:{
        setId:(state,action:PayloadAction<string>)=>{
            state.value = action.payload
        }
    }
})

export const{setId}= userId.actions

export default userId.reducer