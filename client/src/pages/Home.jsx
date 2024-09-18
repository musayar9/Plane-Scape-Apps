import { useEffect, useState } from "react";
import axios from "axios";
import FlightList from "../components/FlightList";

const Home = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    const getFlight = async () => {
      const res = await axios.get(
        `/api?includedelays=false&page=0&sort=%2BscheduleTime`,
        {
          headers: {
            Accept: "application/json",
            app_id:  import.meta.env.VITE_APP_ID,
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
    <div>
      <FlightList flight={flight} />
    </div>
  );
};

export default Home;
