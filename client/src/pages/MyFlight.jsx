import { useEffect, useState } from "react";

import BookFlightList from "../components/MyFlight/BookFlightList";
import TravelServices from "../components/TravelServices";

import Loading from "../components/Loding";
import Error from "../components/Error";

import BookFlightHeader from "../components/MyFlight/BookFlightHeader";
import { useDispatch, useSelector } from "react-redux";
import { getBookFlight } from "../redux/bookFlightSlice";

const MyFlight = () => {
  const { bookFlight, loading, error } = useSelector(
    (state) => state.bookFlight
  );
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [bookFlightList, setBookFlightList] = useState(bookFlight);

  useEffect(() => {
    dispatch(getBookFlight({userId:user._id}));
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  console.log(bookFlightList,);
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
