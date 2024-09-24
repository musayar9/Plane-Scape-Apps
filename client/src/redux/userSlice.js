import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Kullanıcının giriş yapması için asenkron bir createAsyncThunk eylemi oluşturuyoruz
export const login = createAsyncThunk("login/user", async (formData) => {
  try {
    const res = await axios.post(
    // post ile api'ye istek atıyoruz
      "http://localhost:5000/api/v1/auth/login",
      formData,
 
    );
    const data = res.data; // dönen veriyi data değişken için atıyoruz

    return data; // data'yıda dönderiyoruz
  } catch (error) {
    return error; // İstek başarısız olursa hatayı döndür
  }
});

//  state değerleri tanımlıyoruz
const initialState = {
  user: null, // Kullanıcı bilgilerini tutar
  loading: false,  // Asenkron işlemler sırasında yüklenme durumunu göstermek için
  error: "", // hata mesaklarını tutar
};

const userSlice = createSlice({
  name: "user", // slice'ın adı
  initialState, // tanımlnan başlangıç durmu
  reducers: {
    // Kullanıcı çıkışını işleyen bir reducer
    logout: (state) => {
      state.loading = false;
      state.user = null;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
  // thunk ile gelen verinin pending, fulfilled, ve rejected durumlarını yönetiyoruz
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {logout} = userSlice.actions
export default userSlice.reducer;
