import { useEffect, useState } from "react";
import { IoIosAirplane, IoIosWarning } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import FormInput from "../components/FormInput";

// Kullanıcı giriş işlemleri kontrolü
const Login = () => {
  //kullanıcının e-mail addressini ve password bilgisini formData state içinde tutuyoruz
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState(""); // dönen hata mesajını tutuyoruz
  const [showPassword, setShowPassword] = useState(false); // Şifrenin gösterilip gösterilmeyeceğini kontrol ediyoruz
  const { user, loading } = useSelector((state) => state.user); // Redux  kullanıcı ve yüklenme durumunu alır

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Input değişikliklerini işleyen fonksiyonumuz
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // formData'yı güncelliyoruz
  };

  // form gönderim işlemini handleSubmit fonksiyonu ile gerçekleştiriyoruz
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData)); // Giriş işlemini başlatır
  };
  // Kullanıcı durumu değiştiğinde çalışan useEffect
  useEffect(() => {
    if (user) {
      // Kullanıcı verisi varsa
      if (user.response?.status !== 404 && user.response?.status !== 400) {
        // Eğer yanıt durumu 404 veya 400 değilse
        if (user !== null) {
          navigate("/"); // Ana sayfaya yönlendiriyoruz
        }
      } else {
        // Hata durumunda hata mesajını ayarlıyoruz
        setErrMsg(user?.response?.data?.message);
        // Hata mesajını 3 saniye sonra temizle
        setTimeout(() => {
          setErrMsg("");
        }, 3000);
      }
    }
  }, [user]); // user değiştiğinde useEffect çalışacak

  return (
    <div className="mx-auto max-w-sm p-4 my-8 rounded-xl bg-white">
      <div className="flex items-center justify-center flex-col m-5">
        <span
          className="bg-[#4b0097] w-12 h-12 rounded-full flex justify-center
        items-center"
        >
          <IoIosAirplane className="text-white" size={18} />{" "}
        </span>
        <h1 className="text-3xl font-semibold  text-slate-600">Login</h1>
      </div>

      <form className="flex flex-col gap-4 p-4  " onSubmit={handleSubmit}>
        {/* email ve password değerleri için input oluşturuyoruz. Input için gerekli olan değerleri 
      FormInput componentine props olarak iletiyoruz. 
      */}
        <div className="relative">
          <FormInput
            type="email"
            id="email"
            styles="custom-input peer  w-full rounded-md"
            placeholder=" "
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="E-mail"
          />
        </div>

        <div className="relative">
          {" "}
          <FormInput
            type={showPassword ? "text" : "password"}
            id="password"
            styles="custom-input peer  w-full rounded-md"
            placeholder=" "
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
          />
        </div>

        <div className="text-sm  flex items-center pl-2 gap-2">
          {/* / Şifrenin gösterilip gösterilmeyeceğini kontrol ediyoruz */}
          <input
            className="border border-slate-500 outline-none text-emerald-600 rounded-sm focus:border-emerald-500"
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          <span className="text-slate-600">Show Password</span>
        </div>

        {/* herhangi bir hata durumunda ekranda hatayı gösteriyoruz */}
        {errMsg && (
          <div className="flex items-center gap-2  bg-red-500 text-white p-2 rounded-lg">
            <IoIosWarning />
            <p className="text-[11px] ">{errMsg}</p>
          </div>
        )}

        {/* loading durumuna göre ekranda bir animasyon gösterilir */}
        <button
          type="submit"
          className="bg-[#4b0097] text-white p-2 hover:translate-y-1 duration-200 ease-in rounded-md shadow-md"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="loading loading-infinity loading-xs"></span>
              <span>Redirecting</span>
            </div>
          ) : (
            <span>Login</span>
          )}
        </button>
      </form>

      <div className="flex justify-between ">
        <p
          
          className=" text-[11px] text-[#4b0097] pl-3 underline hover:text-blue-700 "
        >
          Forget Password?
        </p>
        {/* register sayfasına yönlendirme */}
        <p className="text-xs text-slate-500">
          Do You Have An Account?{" "}
          <Link to="/register" className="text-[#4b0097] underline pr-5">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
