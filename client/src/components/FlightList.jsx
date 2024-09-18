import PropTypes from "prop-types";
import moment from "moment";
import { FaPlaneArrival } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import Destinations from "./Destinations";
import Airline from "./Airline";
import { FaPlane } from "react-icons/fa6";
import { FlightTime } from "../utils/Functiıon";
const FlightList = ({ flight }) => {
  return (
    <div >
      {flight.map((item) => (
        <div
          key={item.id}
          className={`${
            moment(item.actualLandingTime).isSameOrBefore(
              moment(item.scheduleDateTime)
            )
              ? "hidden"
              : "block"
          } bg-white rounded-xl gap-4 m-4`}
        >
          <div>
            <div className=" flex items-center justify-between py-2 px-3 ">
              <div className="flex">
                {" "}
                {item.flightDirection === "A" ? (
                  <p className="flex items-center gap-2">
                    <span className="text-sm text-blue-600 font-semibold tracking-wide">
                      Arrival Flight
                    </span>
                    <FaPlaneArrival className="text-blue-700" size={18} />
                  </p>
                ) : (
                  <p className="flex items-center gap-2">
                    <span className="text-sm text-blue-600 font-semibold tracking-wide">
                      Departure Flight
                    </span>
                    <FaPlaneDeparture className="text-blue-700" size={18} />
                  </p>
                )}{" "}
              </div>

              <p className="font-semibold text-slate-600">
                {moment(item.scheduleDate).locale("en").format("DD MMMM YYYY")}
              </p>
            </div>

            <div className="flex items-center pl-4">
              <Destinations destination={item?.prefixICAO} /> -
              <Destinations destination={item?.route.destinations[0]} />
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              {/* Kalkış Bilgileri */}

              <div className="flex items-start flex-col">
                <p className="flex items-center">
                  <FaPlaneDeparture className="text-gray-600" />{" "}
                  <span className="text-sm text-gray-500 font-semibold pl-3">
                    Departure
                  </span>
                </p>
                <p className="text-gray-800 text-lg font-bold">
                  {moment(item.scheduleDateTime).format("HH:mm A")}
                </p>
                <p className="text-xs text-gray-500 tracking-wide">
                  Airline : {item?.prefixICAO}
                </p>
              </div>

              <hr className="border border-[#4b0097] w-24" />

              {/* Uçuş Bilgileri (Hava yolu ve uçuş mesafesi) */}
              <div className="flex items-center flex-col gap-2">
              <div  className="flex items-center justify-center font-bold gap-2">
                <Airline airline={item.prefixIATA} />
               <hr className="text-[#4b0097] w-4"/> <span className="text-emerald-500 text-xs">{item.flightName}</span>
              </div>
                <FaPlane className="text-[#4b0097]" size={18} />

                <p className="text-sm text-slate-500">
                  <span>
                    {" "}
                    {FlightTime({
                      scheduleTime: item.scheduleDateTime,
                      landingTime: item.actualLandingTime,
                    })}{" "}
                  </span>
                  <span>
                    (
                    {item?.route.destinations.length > 1
                      ? "Connecting Flight"
                      : "NonStop"}
                    )
                  </span>
                </p>
              </div>

              <hr className="border border-[#4b0097] w-24" />

              {/* Varış Bilgileri */}
              <div className="flex items-start flex-col">
                <p className="flex items-center">
                  <FaPlaneArrival className="text-gray-600" />{" "}
                  <span className="text-sm text-gray-500 font-semibold pl-3">
                    Arrival
                  </span>
                </p>
                <p className="text-gray-800 text-lg font-bold">
                  {moment(item.actualLandingTime).format("HH:mm A")}
                </p>
                <p className="text-xs text-gray-500 tracking-wide">
                  Airline : {item?.route.destinations[0]}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="px-4 py-3 ">
                <p className="text-[#4b0097] text-lg font-bold ">
                  {" "}
                  Price: $500
                </p>
                <p className="text-xs text-slate-500">Round Trip</p>
              </div>
              <button className="bg-[#4b0097] text-sm font-semibold p-4 text-white rounded-tl-lg rounded-br-lg hover:opacity-85 duration-200 ease-linear">
                Book Flight
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
FlightList.propTypes = {
  flight: PropTypes.array.isRequired, // flight'ın bir array olduğunu belirtiyoruz
};
