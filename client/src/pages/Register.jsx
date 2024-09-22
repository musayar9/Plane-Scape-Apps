import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";


const Register = () => {
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

      <form className="flex flex-col gap-4 p-4 ">
        <div className="flex  justify-between flex-col md:flex-row gap-2  ">
          <div className="relative">
            <input
              type="text"
              id="username"
              className="peer w-full md:w-38 block px-3.5 pb-2.5 pt-2.5 text-sm font-semibold  text-slate-500 bg-transparent rounded-md border border-slate-500 appearance-none focus:outline-[#4b0097] "
              placeholder=" "
              name="username"
            />
            <label
              htmlFor="username"
              className="flex  absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:text-[#4b0097]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              First Name
            </label>
          </div>
          <div className="relative ">
            <input
              type="text"
              id="surname"
              className="peer w-full  md:w-38 block px-3.5 pb-2.5 pt-2.5 text-sm font-semibold  text-slate-500 bg-transparent rounded-md border border-slate-500 appearance-none focus:outline-[#4b0097] "
              placeholder=" "
              name="surname"
            />
            <label
              htmlFor="surname"
              className="flex  absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:text-[#4b0097]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="relative ">
          <input
            type="email"
            id="email"
            className="peer w-full block px-3.5 pb-2.5 pt-2.5 text-sm font-semibold  text-slate-500 bg-transparent rounded-md border border-slate-500 appearance-none focus:outline-[#4b0097] "
            placeholder=" "
            name="email"
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
          />
          <label
            htmlFor="password"
            className="flex  absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:text-[#4b0097] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Password
          </label>
        </div>
        <p className="text-[9px] text-slate-600   -mt-2">
          The password must be <b>8 to 12 characters long</b>, and it must
          contain at least <b>one uppercase letter</b>,{" "}
          <b>one lowercase letter</b>, <b>one special character</b>, and{" "}
          <b>one number</b>.
        </p>

        <div className="text-sm  flex items-center pl-2 gap-2">
          <input
            className="border border-slate-500 outline-none text-emerald-600 rounded-sm focus:border-emerald-500"
            type="checkbox"
          />
          Show Password
        </div>

        <button
          type="submit"
          className="bg-[#4b0097] text-white p-2 hover:translate-y-1 duration-200 ease-in rounded-md shadow-md"
        >
          Register
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
}

export default Register