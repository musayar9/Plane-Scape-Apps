import BookFlightHeader from "../components/BookFlightHeader";
import BookFlightList from "../components/BookFlightList";
import TravelServices from "../components/TravelServices";

const MyFlight = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <BookFlightHeader />
      <div className="grid grid-cols-10 ">
        <div className="grid col-span-8">
          <BookFlightList />
        </div>
        <div className="grid col-span-2">
          <TravelServices />
        </div>
      </div>
    </div>
  );
};

export default MyFlight;
