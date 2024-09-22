import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Airline = ({ airline }) => {
const [airlineInfo, setAirlineInfo] = useState([])

  useEffect(() => {
    if (airline) {
      const getAirline = async () => {
        const res = await axios.get(`/api/airlines/${airline}`, {
          headers: {
            Accept: "application/json",
            app_id: import.meta.env.VITE_APP_ID,
            app_key: import.meta.env.VITE_APP_KEY,
            ResourceVersion: "v4",
          },
        });
    
        const data = res.data;
        setAirlineInfo(data)
      };
      
      
      getAirline()
    }
  }, [airline]);


  return (
    <p className="text-xs sm:text-sm text-emerald-500 font-semibold">
      {" "}
      {airlineInfo.publicName}
    </p>
  );
};

export default Airline;

Airline.propTypes = {
  airline: PropTypes.string,
};
