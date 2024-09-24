import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookFlightReducer from "./bookFlightSlice"; // Uçuş rezervasyonları için slice içe aktar
import userReducer from "./userSlice";// Kullanıcı için slice içe aktar
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


// tüm slice'ları birleştiren bir kök slice oluşturuyoruz
const rootReducer = combineReducers({
  bookFlight: bookFlightReducer, // uçuş rezervasyonları slice
  user: userReducer, // kullanıcı slice
});
// Persist yapılandırması
const persistConfig = {
  key: "root", // Persist edilen verinin anahtarı
  version: 1, // Persist yapılandırmasının versiyonu
  storage, // Kullanılacak depolama alanı (tarayıcı depolama)
};
// Persist edilmiş slice oluşturuyoruz
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux store yapılandırıyoruz
export const store = configureStore({
  reducer: persistedReducer, // Persist edilmiş slice kullanıyoruz
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Varsayılan middleware'leri al ve serileştirme kontrolünü devre dışı bırak
});
// Persistor oluştur (Persist verileri yöneten nesne)
export const persistor = persistStore(store);
