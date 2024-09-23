const BookFlight = require("../models/BookFlightModel");
const mongoose = require("mongoose");
const createBookFlight = async (req, res, next) => {
  /** client tarafından alınan uçuş rezervasyon bilgilerini alıyoruz*/
  const bookFlight = new BookFlight({ ...req.body });

  try {
  /**client tarafından gelen rezervasyon bilgilerini database kayıt ediyorux */
    await bookFlight.save();
    res
      .status(201)
      .json({ message: "Your flight reservation has been made", bookFlight });
  } catch (error) {
    /** Hata durumunda bir sonraki middleware'e hatayı iletiriz */
    next(error);
  }
};

const getBookFlight = async (req, res, next) => {
/**oluşturulan tüm  rezervasyon bilgilerini databaseden çağırıp, oluşturma tarihine göre sıralıyoruz */
  const bookFlight = await BookFlight.find({}).sort({ createdAt: -1 });
  try {
    res.status(200).json(bookFlight);
  } catch (error) {
    next(error);
  }
};

const getBookFlightUserId = async (req, res, next) => {
/**Client tarafından gelen kulllanıcı id'sine göre rezervasyonları alıyoruz */
  try {
    const bookFlight = await BookFlight.find({
      userId: req.params.userId,
    }).sort({
      createdAt: -1,
    });

    if (!bookFlight) {
      return res
        .status(404)
        .json({ message: "No booking found for this user." });
    }

    res.status(200).json(bookFlight);
  } catch (error) {
    next(error);
  }
};

const deleteBookFlight = async (req, res, next) => {
/**client tarafından gönderilen rezervasyon id'sine göre rezervasyonu iptal ediyoruz */
  const { id } = req.params;

  try {
  /**gönderilen id'ye göre herhangir bir rezervasyon kayıtlımı diye kontrol ediyoruz. */
    const isBookFlight = await BookFlight.findById({ _id: id });
    
    /**Id'ye rezervayon yok ise bir hata mesajı döndürüyoruz */
    if (!isBookFlight) {
      return res
        .status(404)
        .json({ message: "No flight regsitered found to delete" });
    }
    /**Gönderilen id'ye göre rezervasyon var ise bu rezervasyonu database'den siliyoruz */
    await BookFlight.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "Flight cancelled" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBookFlight,
  getBookFlight,
  deleteBookFlight,
  getBookFlightUserId,
};
 //  Fonksiyonları dışa aktarıyoruz, diğer dosyalarda kullanılabilir hale getirmek için