import { useEffect, useState } from "react";
import axios from "axios";
import FlightList from "../components/FlightList";
import TravelServices from "../components/TravelServices";
import BookYourFlight from "../components/BookYourFlight";
import {useLocation} from "react-router-dom"
const Home = () => {
  const [flight, setFlight] = useState([]);
  const [filter, setFilter] = useState({
  scheduleDate:"",
  flightDirection:""
  
  })
  
  const location = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    
    const scheduleDateUrl = urlParams.get("scheduleDate")
    const flightDirectionUrl = urlParams.get("flightDirection");
  
      if(scheduleDateUrl || flightDirectionUrl){
        setFilter({
        ...filter,
        scheduleDate:scheduleDateUrl,
        flightDirection:flightDirectionUrl
        })
      }
      
      const searchQuery = urlParams.toString()
  
    const getFlight = async () => {
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
    };
    getFlight();
  }, []);
  console.log(flight);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-10">
        <div className="grid col-span-8">
          <BookYourFlight  filter={filter} setFilter={setFilter}/>
          <div className="grid grid-cols-8">
            <div className="grid col-span-6 ">
            
             <FlightList flight={flight} />
            </div>
            <div className="grid col-span-2">
            <div className="w-5">Denem</div>
            </div>
          </div>
        </div>
        <div className="grid col-span-2">
          <TravelServices />
        </div>
      </div>
    </div>
  );
};

export default Home;
