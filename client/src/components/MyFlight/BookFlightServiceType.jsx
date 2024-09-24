import PropTypes from "prop-types";

const BookFlightServiceType = ({ serviceType }) => {

/**service type göre kontrol işlemi */
  const checkServiceType = (type) => {
    let serviceType;

    switch (type) {
      case "J":
        serviceType = "Passenger Line";
        break;
      case "C":
        serviceType = "Passenger Charter";
        break;
      case "F":
        serviceType = "Freight Line";
        break;
      case "H":
        serviceType = "Freight Charter";
        break;
      default:
        serviceType = "Unknown Service Type"; // Default değer
    }

    return serviceType;
  };
  return (
    <div className="md:pt-1">
      <p className="text-slate-700 text-[11px] sm:text-sm">Service Type:</p>
      <p className="text-[10px] sm:text-xs text-slate-500">
        {checkServiceType(serviceType)}
      </p>
    </div>
  );
};

export default BookFlightServiceType;

BookFlightServiceType.propTypes = {
  serviceType: PropTypes.string,
};
