import PropTypes from "prop-types";
import moment from "moment";
import { FaPlaneArrival } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
const FlightList = ({ flight }) => {
  return (
    <div>
      {flight.map((item) => (
        <div key={item.id} className="bg-gray-100 rounded-md p-4 m-4 gap-4">
          <div>
            <p> Flight Direction
              {item.flightDirection === "A" ? (
                <>
                  <FaPlaneArrival /> (Arrival Flight)
                </> 
              ) : (
                <>
                  <FaPlaneDeparture />  (Departure Flight)
                </>
              )}{" "}
            </p>
            <p>
              {moment(item.scheduleDate).locale("en").format("DD MMMM YYYY")}
            </p>
            <p>
              Departure Time {moment(item.scheduleDateTime).format("HH:mm")}
            </p>
            <p>{item.flightName}</p>
            <p>Landing Hour {moment(item.actualLandingTime).format("HH:mm")}</p>
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
