import { useEffect, useState } from "react";

import BookFlightList from "../components/MyFlight/BookFlightList";
import TravelServices from "../components/TravelServices";

import Loading from "../components/Loding";
import Error from "../components/Error";

import axios from "axios";
import BookFlightHeader from "../components/MyFlight/BookFlightHeader";
import { useDispatch, useSelector } from "react-redux";
import { getBookFlight } from "../redux/bookFlightSlice";

//   const getLocalStorage = () => {
//   try {
//     const storedData = localStorage.getItem("bookFlight");
//     return storedData ? JSON.parse(storedData) : [];
//   } catch (error) {
//     console.error("Error parsing JSON from localStorage", error);
//     return []; // Hata varsa boş dizi döner
//   }
// };
const MyFlight = () => {
  const { bookFlight, loading, error } = useSelector(
    (state) => state.bookFlight
  );
  const dispatch = useDispatch();
  const [bookFlightList, setBookFlightList] = useState(bookFlight);

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  useEffect(() => {
    // const getBookFlight = async () => {
    //   try {
    //     setLoading(true);
    //     const res = await axios.get("http://localhost:5000/api/v1/bookFlight");
    //     const data = await res.data;
    //     setBookFlightList(data);
    //     setLoading(false);
    //   } catch (error) {
    //     setLoading(false);
    //     if (axios.isAxiosError(error)) {
    //       setError(error.message);
    //     } else {
    //       setError("Request Failed");
    //     }
    //   }
    // };
    // getBookFlight();
    dispatch(getBookFlight());
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  console.log(bookFlightList);
  return (
    <div className="max-w-7xl mx-auto p-5 md:p-3 lg:p-0">
      <BookFlightHeader />
      <div className="grid md:grid-cols-10 ">
        <div className="grid md:col-span-8 order-2 md:order-1">
          <BookFlightList
            bookFlightList={bookFlight}
            setBookFlightList={setBookFlightList}
          />
        </div>
        <div className="grid order-1 md:order-2  md:col-span-2">
          <TravelServices />
        </div>
      </div>
    </div>
  );
};

export default MyFlight;
