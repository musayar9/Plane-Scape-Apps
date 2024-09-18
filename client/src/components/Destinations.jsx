import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
const Destinations = ({ destination }) => {
  // console.log("dest", destination)
  const [destinationInfo, setDestinationInfo] = useState([]);

  useEffect(() => {
    if (destination && destination.length > 0) {
      // Boş değilse kontrolü

      const getDestination = async () => {
        try {
          const res = await axios.get(`/api/destinations/${destination}`, {
            headers: {
              Accept: "application/json",
              app_id: import.meta.env.VITE_APP_ID,
              app_key: import.meta.env.VITE_APP_KEY,
              ResourceVersion: "v4",
            },
          });
         
          const data = res.data;
          setDestinationInfo(data);
        } catch (error) {
          console.error("Error fetching destination:", error.message);
        }
      };
      if (destination !== "KLM") {
          getDestination();
      }
  
    }
  }, [destination]);

  return (
    <p className="text-md text-slate-700 font-semibold">
      {destination === "KLM"
        ? "Netherlands"
        : destinationInfo.city
        ? destinationInfo.city
        : destinationInfo.country}
      {}
    </p>
  );
};

export default Destinations;

Destinations.propTypes = {
  destination: PropTypes.string,
};
