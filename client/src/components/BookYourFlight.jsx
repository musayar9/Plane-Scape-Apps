import { IoIosAirplane } from "react-icons/io";
import PropTypes from "prop-types";
const BookYourFlight = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setFilter({ ...filter, [name]: value });
  };
  const handleSubmit = (e)=>{
  e.preventDefault()
  
  }
  return (
    <div className="bg-white rounded-xl m-4">
      <div className="flex justify-between items-center">
        <p className="flex items-center p-2 gap-1 text-slate-700 font-semibold">
          {" "}
          <IoIosAirplane /> Book Your Flight
        </p>

        <div className="rounded-full  p-3 flex items-center">
          <span className="bg-[#4b0097] rounded-l-full text-gray-100 p-2 text-xs">
            Round Trip
          </span>
          <span className="bg-slate-200 rounded-r-full text-[#4b0097] p-2 text-xs">
            One Way
          </span>
        </div>
      </div>

      <form className="flex flex-col gap-2 flex-1 my-4 px-5">
        <div className="flex items-center gap-1">
          <div className="relative">
            <input
              type="date"
              className="peer w-full md:w-56 block px-3.5 pb-2.5 pt-2 text-sm  font-semibold text-[#4b0097] bg-transparent rounded-l-full border border-[#4b0097] appearance-none  "
              placeholder=" "
              value={filter.scheduleData || ""}
              onChange={handleChange}
            />

            <label
              htmlFor="email"
              className="flex  absolute text-sm text-[#4b0097] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Schedule Date
            </label>
          </div>

          <div className="relative">
            <select
              name="flightDirection"
              className="peer w-full md:w-56 block px-3.5 pb-2.5 pt-2.5 text-sm font-semibold  text-[#4b0097] bg-transparent rounded-r-full border border-[#4b0097] appearance-none focus:outline-none "
              onChange={handleChange}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="A">Arrival</option>
              <option value="D">Departure</option>
            </select>
            <label
              htmlFor="email"
              className="flex  absolute text-sm text-[#4b0097] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Flight Direction
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs bg-[#4b0097] text-white hover:bg-[#4b00979d] duration-200 transition-colors ease-linear"
          >
            Show Flights
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs rounded-lg bg-red-600 hover:bg-red-500 duration-200 transition-colors ease-linear text-white"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookYourFlight;

BookYourFlight.propTypes = {
  filter: PropTypes.object,
  setFilter: PropTypes.func,
};
