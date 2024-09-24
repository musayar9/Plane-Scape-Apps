import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// createAsyncThunk kullanarak kullanıcı ıd'si ile uçuş rezervasyon bilgilerine istek atıyoruz
export const getBookFlight = createAsyncThunk("bookFlight/getBookFlight" , async({userId})=>{
    
    try {
    // kullanıcı id'sine göre bir GET isteği atıyoruz
        const res = await axios.get(`http://localhost:5000/api/v1/bookFlight/${userId}`);
    
        return res.data // dönen veriyi döndürüyoruz
    } catch (error) {
        throw new Error(error) // hata olması durumunda bir hata mesajı fırlatıyoruz
    }
    
})


// state değerleri tanımlıyoruz
const initialState = {
  bookFlight: [], // rezervasyon bilgilerini tutar
  loading: false, // Asenkron işlemler sırasında yüklenme durumunu göstermek için
  error: "", // hata mesaklarını tutar
};


const bookFlightSlice = createSlice({
name:"bookFlight", //slice'ın adı
initialState, // tanımlanan başlabgıç durumu
reducers:{
// kullanıcı sistemden çıkış yaptığında değerleri sıfırlıyoruz
removeBookFlight:(state)=>{
   state.loading=false
   state.bookFlight=[];
   state.error=""
   
}

},
extraReducers:(builder)=>{
  // thunk ile gelen verinin pending, fulfilled, ve rejected durumlarını yönetiyoruz
  builder
    .addCase(getBookFlight.pending, (state) => {
      state.loading = true;
    })
    .addCase(getBookFlight.fulfilled, (state, action) => {
      (state.loading = false),
        (state.bookFlight = action.payload),
        (state.error = "");
    })
    .addCase(getBookFlight.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
}
})



export const  {removeBookFlight} = bookFlightSlice.actions
 export default bookFlightSlice.reducer