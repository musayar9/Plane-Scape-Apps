import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login/user", async (formData) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      formData
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

export default userSlice.reducer;
