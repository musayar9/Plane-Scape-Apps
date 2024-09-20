import axios from "axios";
import moment from "moment";
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
        console.log(data)
        setBookFlightList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookFlight()
  }, []);
console.log("book flight" , bookFlightList)
  return (
    <div className="mt-4 mr-3">
      {bookFlightList.length > 0 ? (
        <>
          {" "}
          {bookFlightList.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl gap-4  flex items-center justify-between"
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
                      <p className="text-slate-700 text-md font-semibold">
                        {" "}
                        {moment
                          .parseZone(item.scheduleDateTime)
                          .format("HH:mm A")}
                      </p>
                    </div>
                    <div className="flex space-x-14">
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
                        <p className="text-xs text-slate-500">{item.flightName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="border rounded-md w-12 h-12 flex items-center  justify-center font-semibold border-slate-300 text-[#4b0097]">
                  ${item.price}
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
