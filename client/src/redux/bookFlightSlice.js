import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookFlight = createAsyncThunk("bookFlight/getBookFlight" , async({userId})=>{
    
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/bookFlight/${userId}`);
     console.log(res.data,"clkdsvmfjv")
        return res.data
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
reducers:{
removeBookFlight:(state)=>{
   state.loading=false;
   
   state.bookFlight=[];
   state.error=""
   
}

},
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



export const  {removeBookFlight} = bookFlightSlice.actions
 export default bookFlightSlice.reducer