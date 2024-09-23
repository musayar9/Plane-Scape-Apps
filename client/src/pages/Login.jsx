import { useEffect, useState } from "react";
import { IoIosAirplane, IoIosWarning } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const { user, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

useEffect(() => {
  if (user) {
   
    if (user.response?.status !== 404 && user.response?.status !== 400) {
      if (user !== null) {
        navigate("/");
      }
    } else {
  
      setErrMsg(user?.response?.data?.message);
    }
  }
}, [user]);


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
        <div className="relative ">
          <input
            type="email"
            id="email"
            className="peer w-full block px-3.5 pb-2.5 pt-2.5 text-sm font-semibold  text-slate-500 bg-transparent rounded-md border border-slate-500 appearance-none focus:outline-[#4b0097] "
            placeholder=" "
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="flex  absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:text-[#4b0097]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            E-mail
          </label>
        </div>

        <div className="relative ">
          <input
            type={"text"}
            id="password"
            className="peer w-full block px-3.5 pb-2.5 pt-2.5 text-sm font-semibold  text-slate-500  bg-transparent rounded-md border border-slate-500 appearance-none focus:outline-[#4b0097] "
            placeholder=" "
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="flex  absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:text-[#4b0097] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Password
          </label>
        </div>

        <div className="text-sm  flex items-center pl-2 gap-2">
          <input
            className="border border-slate-500 outline-none text-emerald-600 rounded-sm focus:border-emerald-500"
            type="checkbox"
          />
          <span className="text-slate-600">Show Password</span>
        </div>
        {errMsg && (
          <div className="flex items-center gap-2  bg-red-500 text-white p-2 rounded-lg">
            <IoIosWarning />
            <p className="text-[11px] ">{errMsg}</p>
          </div>
        )}

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
        <Link
          to="/reset-password"
          className=" text-[11px] text-[#4b0097] pl-3 underline hover:text-blue-700 "
        >
          Forget Password?
        </Link>
        <p className="text-xs text-slate-500">
          Do You Have An Account?{" "}
          <Link to="/sign-up" className="text-[#4b0097] underline pr-5">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
