import { useState } from "react";
import { IoIosAirplane, IoIosWarning, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import FormInput from "../components/FormInput";
const Register = () => {
  /**kullanıcının firstName, lastName, email, password bilgilerini formData değişkeni içinde tutuyoruz */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // verilerin yüklenme durumunu göstermek için bir loading tanımlıyourz
  const [error, setError] = useState(""); // gelen hata mesajlarını ekranda göstermek için bir error değişkeni tanımlıyoruz
  const [showPassword, setShowPassword] = useState(false); // Şifrenin gösterilip gösterilmeyeceğini kontrol ediyoruz
  const navigate = useNavigate(); // sayfa yönlendirmesi için navigate fonksiyonunu kullanıyoruz
  const handleChange = (e) => {
    //input alanlarındaki değişiklikler yakalamak için bir handleChange fonksiyonu oluşturduk
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // formData state'ini güncelliyoruz
  };
  // Form gönderimi için handleSubmit fonksiyonu oluşturduk
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // yüklenme durumunu kontrol ediyoruz
    try {
      const res = await axios.post(
        // API'ye POST isteği gönderiyoruz
        `http://localhost:5000/api/v1/auth/register`,
        formData
      );
      const data = res.data; // API'den dönen veriyi alıyoruz
      setLoading(false);
      navigate("/login"); // Başarılı kayıt sonrası giriş sayfasına yönlendiriyoruz
      return data; // API'den dönen veriyi geri döndürüyoruz
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response.data.message); // Hata mesajını alıyoruz ve durumu ayarlıyoruz
      } else {
        setError("Request failed"); // Diğer hata durumları için genel bir hata mesajı ayarlıyoruz
      }

      if (error) {
        // Eğer bir hata varsa
        setTimeout(() => {
          setError(""); // Hata mesajını 3 saniye sonra temizliyoruz
        }, 3000);
      }
    }
  };
  console.log(error);
  return (
    <div className="mx-auto max-w-sm p-4  my-8 rounded-xl bg-white">
      <div className="flex items-center justify-center flex-col m-5">
        <span
          className="bg-[#4b0097] w-12 h-12 rounded-full flex justify-center
        items-center"
        >
          <IoIosAirplane className="text-white" size={18} />{" "}
        </span>
        <h1 className="text-3xl font-semibold  text-slate-600">Register</h1>
      </div>

      <form className="flex flex-col gap-4 p-4 " onSubmit={handleSubmit}>
        {/*firstName, lastName, email ve password değerleri için input oluşturuyoruz. Input için gerekli olan değerleri 
      FormInput componentine props olarak iletiyoruz. 
      */}
        <div className="flex  justify-between flex-col md:flex-row gap-2  ">
          <div className="relative">
            <FormInput
              type="text"
              id="firstName"
              placeholder=" "
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              styles="custom-input peer rounded-md w-full md:w-38"
              label={"First Name"}
            />
          </div>
          <div className="relative">
            <FormInput
              type="text"
              id="lastName"
              placeholder=" "
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              styles="custom-input peer rounded-md w-full md:w-38"
              label={"Last Name"}
            />
          </div>
        </div>
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

        <div className="relative ">
          {/* / Şifrenin gösterilip gösterilmeyeceğini kontrol ediyoruz */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-4 end-1 flex items-center pr-3.5 pointer-events-auto"
          >
            {showPassword ? (
              <FaEye className="w-5 h-5 text-gray-800 dark:text-gray-400" />
            ) : (
              <IoMdEyeOff className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>

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
        {/* password bilgisi için istenilen formatı kullanıcıya gösteriyoruz */}
        <p className="text-[9px] text-slate-600   -mt-2">
          The password must be <b>8 to 12 characters long</b>, and it must
          contain at least <b>one uppercase letter</b>,{" "}
          <b>one lowercase letter</b>, <b>one special character</b>, and{" "}
          <b>one number</b>.
        </p>
        {/* hata durumunda kullanıcıya hata mesajını gösteriyoruz */}
        {error && (
          <div className="flex items-center gap-2  bg-red-500 text-white p-2 rounded-lg">
            <IoIosWarning />
            <p className="text-[11px] ">{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="bg-[#4b0097] text-white p-2 hover:translate-y-1 duration-200 ease-in rounded-md shadow-md"
        >
          {/* loading durumuna göre ekranda bir animasyon gösterilir */}
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="loading loading-infinity loading-xs"></span>
              <span>Registering</span>
            </div>
          ) : (
            <span>Register</span>
          )}
        </button>
      </form>

      <div className="flex justify-end ">
        <p className="text-xs text-slate-500">
          Already Have An Account?{" "}
          <Link to="/login" className="text-[#4b0097] underline pr-5">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
