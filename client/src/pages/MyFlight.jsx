import { useEffect, useState } from "react";

import BookFlightList from "../components/MyFlight/BookFlightList";
import TravelServices from "../components/TravelServices";

import Loading from "../components/Loding";
import Error from "../components/Error";

import axios from "axios";
import BookFlightHeader from "../components/MyFlight/BookFlightHeader";

const MyFlight = () => {
  const [bookFlightList, setBookFlightList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getBookFlight = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/v1/bookFlight");
        const data = await res.data;
        console.log(data);
        setBookFlightList(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("Request Failed");
        }
      }
    };
    getBookFlight();
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <div className="max-w-7xl mx-auto">
      <BookFlightHeader />
      <div className="grid grid-cols-10 ">
        <div className="grid col-span-8">
          <BookFlightList
            bookFlightList={bookFlightList}
            setBookFlightList={setBookFlightList}
          />
        </div>
        <div className="grid col-span-2">
          <TravelServices />
        </div>
      </div>
    </div>
  );
};

export default MyFlight;
