import { IoIosArrowDown } from "react-icons/io";
import StarRating from "./StarRating";


const BookFlightHeader = () => {
  return (
    <div className="w-max-fit bg-white rounded-lg p-4 flex items-center justify-between">
      <ul className="flex flex-wrap items-center gap-4 text-gray-800 ">
        <li className="border border-slate-300 rounded-lg px-4 py-1 text-sm">
          Times
        </li>
        <li className="border border-slate-300 rounded-lg px-4 py-1 text-sm">
          Stops
        </li>
        <li className="border border-slate-300 rounded-lg px-4 py-1 text-sm">
          Airlines
        </li>
        <li className="border border-slate-300 rounded-lg px-4 py-1 text-sm">
          Airports
        </li>
        <li className="border border-slate-300 rounded-lg px-4 py-1 text-sm">
          Amenities
        </li>
        <li className="text-blue-400 gap-1 text-sm flex items-center">
          Edit Search <IoIosArrowDown />

        </li>
      </ul>

      <div className="hidden md:flex items-center gap-4 ">
        <StarRating rating={2} />
        <StarRating rating={3} />
        <StarRating rating={4} />
        <StarRating rating={5} />
        <StarRating rating={6} />
      </div>
    </div>
  );
}

export default BookFlightHeader