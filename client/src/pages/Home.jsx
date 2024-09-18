import { useEffect, useState } from "react";
import axios from "axios";
import FlightList from "../components/FlightList";
import TravelServices from "../components/TravelServices";

const Home = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    const getFlight = async () => {
      const res = await axios.get(
        `/api/flights?includedelays=false&page=0&sort=%2BscheduleTime`,
        {
          headers: {
            Accept: "application/json",
            app_id: import.meta.env.VITE_APP_ID,
            app_key: import.meta.env.VITE_APP_KEY,
            ResourceVersion: "v4",
          },
        }
      );

      const data = await res.data.flights;
      console.log(res);
      setFlight(data);
    };
    getFlight();
  }, []);
  console.log(flight);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-10">
        <div className="grid col-span-8">
          <FlightList flight={flight} />
        </div>
        <div className="grid col-span-2">
        <TravelServices/>
        </div>
      </div>
    </div>
  );
};

export default Home;
