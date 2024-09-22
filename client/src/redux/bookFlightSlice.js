import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookFlight = createAsyncThunk("bookFlight/getBookFlight" , async()=>{
    
    try {
        const res = await axios.get("http://localhost:5000/api/v1/bookFlight");
        const data = await res.data;
        return data
    } catch (error) {
        throw new Error(error)
    }
    
})

const initialState = {
    bookFlight:[],
    loading:false,
    error:""
}


const bookFlightSlice = createSlice({
name:"bookFlight",
initialState,
reducers:{},
extraReducers:(builder)=>{
    builder
        .addCase(getBookFlight.pending, (state)=>{
            state.loading=true
        })
        .addCase(getBookFlight.fulfilled, (state, action)=>{
            state.loading=false,
            state.bookFlight=action.payload,
            state.error=""
        })
        .addCase(getBookFlight.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message
        })
}
})




 export default bookFlightSlice.reducer