import CarRentals from "../assets/images/car-rentals.png";
import Hotels from "../assets/images/hotels.avif";
import TravelPackages from "../assets/images/travel.jpg";
import { FaCarAlt, FaHotel, FaUmbrellaBeach } from "react-icons/fa";

const TravelServices = () => {
  const travel = [
    {
      id: 1,
      image: CarRentals,
      title: "Car Rentals",
      icon: <FaCarAlt size={24} />,
    },
    {
      id: 2,
      image: Hotels,
      title: "Hotels",
      icon: <FaHotel size={24} />,
    },
    {
      id: 3,
      image: TravelPackages,
      title: "Travel Packages",
      icon: <FaUmbrellaBeach size={24} />,
    },
  ];

  return (
    <div className=" flex  flex-1 flex-row md:flex-col  gap-4 md:my-4">
      {travel.map((item) => (
        <div key={item.id} >
          <div className="flip-card-inner relative">
            {" "}
            <div className="group relative flip-card-front   shadow">
              <img
                className="max-w-full md:w-full min-h-24 md:h-48   rounded-xl   group-hover:scale-110  group-hover:opacity-85 duration-500 ease-linear"
                src={item?.image}
                alt={item.title}
              />
              <div className="absolute left-4 bottom-4 text-white ">
                <p className="">{item.icon}</p>
                <p className="uppercase font-semibold translate-y-0 duration-300 ease-in opacity-0 group-hover:opacity-80 group-hover:translate-y-2">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelServices;
