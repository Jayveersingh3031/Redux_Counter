import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count :0,
    total :0
}

export const CountSlice = createSlice({
    name :'count',
    initialState,
    reducers :{
        addCount :(state,action) =>{
            state.count = action.payload;
        },
        removeCount :(state,action) =>{
            state.count = action.payload;
        }
    }
})

export const {addCount,removeCount} = CountSlice.actions;
  
export default CountSlice.reducer;