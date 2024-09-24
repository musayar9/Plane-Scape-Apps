import AirlineFilter from "./AirlineFilter";
import ArrivalFlightTime from "./ArrivalFlightTime";
import SortFlight from "./SortFlight";
import StopsFlight from "./StopsFlight";

const FilterFlight = () => {

  return (
    <div>
    {/* fiyat durumuna göre uçuşları filtreleme */}
      <SortFlight />
      {/* uçuş saat aralığına göre uçuşları filtreleme */}
      <ArrivalFlightTime />
      {/* aktarma durumuna göre uçuşları filtreleme */}
      <StopsFlight />
      {/* havalimanlarına göre uçuşları filtreleme */}
      <AirlineFilter />
    </div>
  );
};

export default FilterFlight;
