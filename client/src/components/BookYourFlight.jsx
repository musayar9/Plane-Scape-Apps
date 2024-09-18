import { IoIosAirplane } from "react-icons/io";

const BookYourFlight = () => {
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
    </div>
  );
};

export default BookYourFlight;
