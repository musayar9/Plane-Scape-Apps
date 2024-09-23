const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res, next) => {
  const user = await User.find({}).select("-password");

  try {
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  /** Client tarafından gönderilen kullanıcı bilgilerini alıyoruz */

  const { firstName, lastName, email, password } = req.body;

  /** Gönderilen bilgilerin eksik olup olmadığını kontrol ediyoruz */
  if (!firstName || !lastName || !email || !password) {
    return res.status(401).json({ message: "Please fill full form!" });
  }
  /** E-posta formatını doğrulayan bir regex tanımlıyoruz */
  const emailRegex = /^[\w-]+(\.[\w-]+)*@\w+(\.[\w-]+)+$/;
  /** Şifre için geçerli kuralları sağlayan bir regex tanımlıyoruz */
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[a-zA-Z\d@$!%*?&.]{8,12}$/;

  try {
    /** E-posta formatının geçerliliğini kontrol ediyoruz */
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email is not valid" });
    }
    /** Şifrenin kurallara uygun olup olmadığını kontrol ediyoruz */
    if (!regexPassword.test(password)) {
      return res.status(400).json({
        message:
          "Your password must be at least 8 and at most 12 characters long, and it must contain at least one uppercase letter, one lowercase letter, one special character, and one number",
      });
    }

    /**kullanıcı database kaydediyoruz*/
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    await newUser.save();
    return res.status(201).json({ message: "Success! User Created" });
  } catch (error) {
    /** Hata durumunda bir sonraki middleware'e hatayı iletiriz */
    next(error);
  }
};

const login = async (req, res, next) => {
  /** Client tarafından gönderilen email ve password bilgilerini alıyoruz */
  console.log(req.body);
  const { email, password } = req.body;

  try {
    /** Email adresiyle kullanıcıyı veritabanında arıyoruz */
    if (email === "" || password === "") {
      return res
        .status(400)
        .json({ message: "Please Provide Email and Password" });
    }

    const isUser = await User.findOne({ email });

    if (!isUser) {
      /** Eğer kullanıcı bulunmazsa hata mesajı döndürüyoruz */
      return res
        .status(404)
        .json({ message: "Registered email address not found" });
    }
    /** Şifrenin doğru olup olmadığını kontrol ediyoruz */
    const validPassword = await bcrypt.compare(password, isUser.password);
    if (!validPassword) {
      /** Şifre yanlışsa hata mesajı döndürüyoruz */
      return res.status(400).json({ message: "Invalid Password" });
    }
    /** Şifre bilgisini kullanıcı verisinden ayırarak geri döndürüyoruz */
    const { password: pass, ...rest } = isUser._doc;
    
    return res
      .status(200)
  
      .json(rest);
  } catch (error) {
    /** Hata durumunda bir sonraki middleware'e hatayı iletiriz */
    next(error);
  }
};

module.exports = { register, getUsers, login };
