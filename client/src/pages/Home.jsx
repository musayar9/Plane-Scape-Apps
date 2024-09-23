import { useEffect, useState } from "react";
import axios from "axios";
import FlightList from "../components/Home/FlightList";
import TravelServices from "../components/TravelServices";
import BookYourFlight from "../components/Home/BookYourFlight";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loding";
import Error from "../components/Error";
import FilterFlight from "../components/Home/FlightFilterArea/FilterFlight";
const Home = () => {


  const [flight, setFlight] = useState([]);
  const [filter, setFilter] = useState({
    scheduleDate: "",
    flightDirection: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const scheduleDateUrl = urlParams.get("scheduleDate");
    const flightDirectionUrl = urlParams.get("flightDirection");

    if (scheduleDateUrl || flightDirectionUrl) {
      setFilter({
        ...filter,
        scheduleDate: scheduleDateUrl,
        flightDirection: flightDirectionUrl,
      });
    }

    const searchQuery = urlParams.toString();
    console.log(searchQuery);

    const getFlight = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `/api/flights?${searchQuery}&includedelays=false&page=0&sort=%2BscheduleTime`,
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
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data);
      }
    };
    getFlight();
  }, [location.search]);
  console.log(flight);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-3 lg:p-0">
      <div className="grid   md:grid-cols-10">
        <div className="grid md:col-span-8 order-2 md:order-1">
          <BookYourFlight filter={filter} setFilter={setFilter} />
          <div className="grid md:grid-cols-8 ">
            <div className="grid md:col-span-6 ">
              <FlightList flight={flight} />
            </div>
            <div className="hidden lg:grid col-span-2 ">
              <FilterFlight />
            </div>
          </div>
        </div>
        <div className="hidden md:grid  md:col-span-2  order-1 md:order-2">
          <TravelServices />
        </div>
      </div>
    </div>
  );
};

export default Home;
