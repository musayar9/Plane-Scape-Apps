import AirlineFilter from "./AirlineFilter";
import ArrivalFlightTime from "./ArrivalFlightTime";
import SortFlight from "./SortFlight";
import StopsFlight from "./StopsFlight";

const FilterFlight = () => {
  return (
    <div>
      <SortFlight />
      <ArrivalFlightTime />
      <StopsFlight />
      <AirlineFilter />
    </div>
  );
};

export default FilterFlight;
