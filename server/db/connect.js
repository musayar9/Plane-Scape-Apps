const mongoose = require("mongoose");

/** 
 * MongoDB ile bağlantı kurmak için bir fonksiyon oluşturuyoruz 
 * Bu fonksiyon, MONGO_URI ile belirlenen veritabanına bağlanmaya çalışır
 * Başarılı olursa "Connected MongoDB" mesajını konsola yazdırır
 * Eğer hata oluşursa hatayı konsola yazdırır
 */
const connectMongoDB = () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected MongoDD"))
    .catch((err) => console.log(err));
};

module.exports = connectMongoDB;
 // Fonksiyonu dışa aktarıyoruz, diğer dosyalardan kullanılabilir