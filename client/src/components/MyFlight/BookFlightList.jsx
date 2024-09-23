import moment from "moment-timezone";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import Airline from "../Airline";
import { IoIosAirplane, IoIosArrowDown } from "react-icons/io";
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
              <div className="flex flex-col md:flex-row items-start md:items-center  md:justify-between">
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
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-slate-700 text-md md:text-lg font-semibold">
                          {moment
                            .tz(item.scheduleDateTime, "Europe/Istanbul")
                            .format("HH:mm A")}
                        </p>
                        <div className="flex items-center  text-sm md:text-lg">
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
                      </div>

                      <div className="flex items-center flex-col md:flex-row gap-2 mt-2 md:mt-0 md:space-x-12">
                        <div className="flex gap-4 space-x-14">
                          <div>
                            <p className="text-slate-600  text-[11px] sm:text-sm  font-semibold">
                              {moment(item.scheduleDate)
                                .locale("en")
                                .format("D MMM YYYY")}
                            </p>
                            <p className="text-[11px] sm:text-sm text-slate-500">
                              {item.airlineCode} - {item.flightName}
                            </p>
                          </div>

                          <div>
                            <Airline airline={item.prefixIATA} />
                            <p className="text-blue-400 text-[11px] sm:text-sm flex items-center">
                              Flight Search <IoIosArrowDown />
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4 space-x-14">
                          <div>
                            <p className="text-[11px] sm:text-sm text-slate-500 md:pt-1">
                              {item?.route.destinations.length > 1
                                ? "Connecting Flight"
                                : "Nonstop"}
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500 ">
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
                          <BookFlightServiceType
                            serviceType={item.serviceType}
                          />
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
        <div className="flex flex-col items-center justify-center  bg-white rounded-xl p-8 space-y-4">
          <IoIosAirplane
            className="w-20 h-20 p-2 rounded-full text-white bg-[#4b0097]"
            size={48}
          />
          

          <p className="text-2xl text-slate-500 font-semibold">
            You do not have a flight reservation yet
          </p>
        </div>
      )}
    </div>
  );
};

export default BookFlightList;
BookFlightList.propTypes = {
  bookFlightList: PropTypes.array,
  setBookFlightList: PropTypes.func,
};
