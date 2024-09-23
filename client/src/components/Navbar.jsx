import { IoIosAirplane } from "react-icons/io";
import { FaHome, FaPlane, FaTag } from "react-icons/fa";
import { RiEarthFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { removeBookFlight } from "../redux/bookFlightSlice";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);

  console.log("user", user);
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-slate-100">
      <div className="flex-1 flex  gap-2">
        <span
          className="bg-[#4b0097] w-8 h-8 rounded-full flex justify-center
        items-center"
        >
          <IoIosAirplane className="text-white" size={18} />{" "}
        </span>
        <p className="text-xl font-semibold">Plane Scape</p>
      </div>

      {user &&
        user.response?.status !== 404 &&
        user.response?.status !== 400 && (
          <div className="flex z-20 gap-4">
            <div className="flex items-center justify-center"></div>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return ` ${
                  isActive ? "text-[#4b0097] " : "text-slate-600"
                }  font-semibold hidden md:flex items-center justify-center group`;
              }}
            >
              <FaHome className="text-[#4b0097]" />
              <span className="pl-2 group-hover:text-[#4b0097]">Home</span>
            </NavLink>
            <NavLink
              to="/myFlight"
              className={({ isActive }) => {
                return ` ${
                  isActive ? "text-[#4b0097] " : "text-slate-600"
                }  font-semibold hidden md:flex items-center justify-center group`;
              }}
            >
              <FaPlane className="text-[#4b0097]" />
              <span className="pl-2 group-hover:text-[#4b0097]">My Flight</span>
            </NavLink>

            <div className=" hidden md:flex  items-center justify-center ">
              <FaTag className="text-[#4b0097]" />{" "}
              <span className="pl-2 text-slate-600 font-semibold ">Deals</span>
            </div>
            <div className=" hidden md:flex  items-center justify-center ">
              <RiEarthFill className="text-[#4b0097]" />{" "}
              <span className="pl-2 text-slate-600 font-semibold">
                Discover
              </span>
            </div>

            <div className="flex items-center">
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
                >
                  <li className="flex md:hidden hover:bg-slate-200 duration-200 ease-in rounded-md">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="flex md:hidden hover:bg-slate-200 duration-200 ease-in rounded-md">
                    <Link to="myFlight">My Flight</Link>
                  </li>

                  <li className="flex md:hidden hover:bg-slate-200 duration-200 ease-in rounded-md">
                    <a>Deals</a>
                  </li>
                  <li className="flex md:hidden hover:bg-slate-200 duration-200 ease-in rounded-md ">
                    <a>Discover</a>
                  </li>
                  <li className="hover:bg-slate-200 duration-200 ease-in rounded-md">
                    <a className="justify-between">Profile</a>
                  </li>
                  <li className="hover:bg-slate-200 duration-200 ease-in rounded-md">
                    <button
                      className=""
                      onClick={() => {
                        dispatch(logout()), dispatch(removeBookFlight());
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <p className="text-slate-600 font-semibold text-sm hidden md:flex">
                {user.firstName} {user.lastName}
              </p>
            </div>
          </div>
        )}
    </div>
  );
};

export default Navbar;
