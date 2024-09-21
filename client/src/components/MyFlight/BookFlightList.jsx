import moment from "moment-timezone";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import Airline from "../Airline";
import { IoIosArrowDown } from "react-icons/io";
import Destinations from "../Destinations";
import BookFlightPriceInfo from "./BookFlightPriceInfo";
import BookFlightServiceType from "./BookFlightServiceType";
import DeleteButton from "./DeleteButton";

import PropTypes from "prop-types";

const BookFlightList = ({ bookFlightList, setBookFlightList }) => {
  return (
    <div className="mt-4 mr-3">
      {bookFlightList?.length > 0 ? (
        <>
          {" "}
          {bookFlightList?.map((item) => (
            <div key={item._id} className="bg-white rounded-xl gap-4 my-2  ">
              <div className="flex items-center justify-between">
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
                          {moment
                            .tz(item.scheduleDateTime, "Europe/Istanbul")
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
                        <BookFlightServiceType serviceType={item.serviceType} />
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

                <BookFlightPriceInfo price={item.price} />
              </div>

              <DeleteButton
                item={item}
                bookFlightList={bookFlightList}
                setBookFlightList={setBookFlightList}
              />
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
BookFlightList.propTypes = {
  bookFlightList: PropTypes.array,
  setBookFlightList: PropTypes.func,
};
