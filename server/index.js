const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectMongoDB = require("./db/connect");
const path = require("path");
// route
const userRoutes = require("./routes/userRoute");
const bookFlightRoutes = require("./routes/bookFlightRoute");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();

path.resolve();  // Proje kök dizinini çöz

/** */
app.use("/api/v1/auth", userRoutes); // Kullanıcı ile ilgili route'ları içe aktarma
app.use("/api/v1/bookFlight", bookFlightRoutes); // Uçuş rezervasyonları ile ilgili route'ları içe aktarma

// Client tarafındaki statik dosyaları sun
app.use(express.static(path.join(path.resolve(), "/client/dist")));

// Tüm diğer istekler için index.html dosyasını gönder
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "client", "dist", "index.html"));
});

// Sunucunun dinleyeceği port
const port = process.env.PORT || 5000; // Portu .env dosyasından al veya 5000 kullan
connectMongoDB();  // MongoDB bağlantısını başlat
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
