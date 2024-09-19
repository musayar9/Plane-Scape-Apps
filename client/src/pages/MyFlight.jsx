import StarRating from "../components/StarRating";


const MyFlight = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
        <ul className="flex items-center gap-4 text-gray-800">
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
        </ul>

        <div className="flex items-center gap-2">
          <StarRating rating={2} />
          <StarRating rating={3} />
          <StarRating rating={4} />
          <StarRating rating={5} />
          <StarRating rating={6} />
         
        </div>
      </div>
    </div>
  );
}

export default MyFlight