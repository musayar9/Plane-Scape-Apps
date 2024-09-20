import axios from "axios";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import Airline from "./Airline";
import { IoIosArrowDown } from "react-icons/io";
import Destinations from "./Destinations";

const BookFlightList = () => {
  const [bookFlightList, setBookFlightList] = useState([]);

  useEffect(() => {
    const getBookFlight = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/bookFlight");
        const data = await res.data;
        console.log(data);
        setBookFlightList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookFlight();
  }, []);

  const checkServiceType = (type) => {
    let serviceType;

    switch (type) {
      case "J":
        serviceType = "Passenger Line";
        break;
      case "C":
        serviceType = "Passenger Charter";
        break;
      case "F":
        serviceType = "Freight Line";
        break;
      case "H":
        serviceType = "Freight Charter";
        break;
      default:
        serviceType = "Unknown Service Type"; // Default değer
    }

    return serviceType;
  };

  console.log("book flight", bookFlightList);
  return (
    <div className="mt-4 mr-3">
      {bookFlightList.length > 0 ? (
        <>
          {" "}
          {bookFlightList.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl gap-4 my-2  flex items-center justify-between"
            >
              <div className="flex items-center ">
                <div className="flex  gap-2 p-6">
                  <div>
                    {item.flightDirection === "A" ? (
                      <FaPlaneArrival
                        className="text-white bg-[#4b0097] w-10 h-10 p-1 rounded-full"
                        size={18}
                      />
                    ) : (
                      <FaPlaneDeparture
                        className="text-white bg-[#4b0097] w-10 h-10 p-1 rounded-full"
                        size={18}
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">
                      {item.flightDirection === "A" ? "Arrival" : "Departure"}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className="text-slate-700 text-lg font-semibold">
                        {" "}
                        {/* {moment
                          .parseZone(item.scheduleDateTime)
                          .locale("en")
                          .format("HH:mm A")} */}
                        {moment
                          .tz(item.scheduleDateTime, "Europe/Turkey")
                          .format("HH:mm A")}
                      </p>
                    </div>
                    <div className="flex space-x-8">
                      <div>
                        <p className="text-slate-600 font-semibold">
                          {moment(item.scheduleDate)
                            .locale("en")
                            .format("D MMM YYYY")}
                        </p>
                        <p className="text-xs text-slate-500">
                          Airline Code: {item.airlineCode}
                        </p>
                      </div>

                      <div>
                        <Airline airline={item.prefixIATA} />
                        <p className="text-blue-400 text-xs flex items-center">
                          Flight Search <IoIosArrowDown />
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500 pt-1">
                          {item?.route.destinations.length > 1
                            ? "Connecting Flight"
                            : "Nonstop"}
                        </p>
                        <p className="text-xs text-gray-500 ">
                          Route:{" "}
                          {item?.route.destinations.length > 1
                            ? item?.route.destinations.map((d) => (
                                <p className="pl-1" key={d}>
                                  <span>{d},</span>
                                </p>
                              ))
                            : item?.route.destinations[0]}{" "}
                        </p>
                      </div>
                      <div className="pt-1">
                        <p className="text-slate-700 text-sm">Service Type:</p>
                        <p className="text-xs text-slate-500">
                          {checkServiceType(item.serviceType)}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <Destinations destination={item?.prefixICAO} />{" "}
                          {item.prefixICAO !== "" && (
                            <span className="px-1 text-xs text-slate-500">
                              to
                            </span>
                          )}
                          <Destinations
                            destination={item?.route.destinations[0]}
                          />
                        </div>
                        <p className="text-xs text-slate-500">
                          {item.flightName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex items-center gap-2 text-xs">
                <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
                  ${item.price.economyClass}
                  <span className="text-[10px] text-wrap text-slate-500">
                    Economy
                  </span>
                </p>
                <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
                  ${item.price.comfortClass}
                  <span className="text-[10px] text-wrap text-slate-500">
                    Comfort
                  </span>
                </p>
                <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
                  ${item.price.mainClass}
                  <span className="text-[10px] text-wrap text-slate-500">
                    Main
                  </span>
                </p>
                <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
                  ${item.price.business}
                  <span className="text-[10px] text-wrap text-slate-500">
                    Business
                  </span>
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>You do not have a flight reservation yet</p>
      )}
    </div>
  );
};

export default BookFlightList;
