import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 6; // Toplam 6 yıldız

  return (
    <div className="flex flex-wrap w-10 ">
      {Array.from({ length: totalStars }, (_, index) => (
        <FaStar
          key={index}
          className={`w-3 h-3 ${
            index < rating ? "text-[#4b0097]" : "text-gray-400"
          }`}
        ></FaStar>
      ))}
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number,
};
