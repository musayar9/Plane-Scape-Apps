import { IoIosAirplane } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import { RiEarthFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="navbar  bg-slate-100">
      <div className="flex-1 gap-2">
        <span
          className="bg-[#4b0097] w-8 h-8 rounded-full flex justify-center
        items-center"
        >
          <IoIosAirplane className="text-white" size={18} />{" "}
        </span>
        <p className="text-xl font-semibold">Plane Scape</p>
      </div>

      <div className="flex z-20 gap-4">
        <div className="flex  items-center justify-center ">
          <FaTag className="text-[#4b0097]" />{" "}
          <span className="pl-2 text-slate-600 font-semibold">Deals</span>
        </div>
        <div className="flex  items-center justify-center ">
          <RiEarthFill className="text-[#4b0097]" />{" "}
          <span className="pl-2 text-slate-600 font-semibold">Discover</span>
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
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <p className="text-slate-600 font-semibold text-sm">Christina Bella</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
