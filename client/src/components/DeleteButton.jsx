import axios from "axios";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast"
const DeleteButton = ({ item, bookFlightList, setBookFlightList }) => {
  const handleDelete = async () => {
    console.log("item._id", item._id);
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/v1/bookFlight/${item._id}`
      );
      const data = res.data;
      const deleteBookFlight = bookFlightList.filter((d)=> d._id !== item._id);
      setBookFlightList(deleteBookFlight)
      toast.success(data.message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-end ">
      <button
        onClick={handleDelete}
        className="bg-red-500  text-xs p-2 rounded-tl-lg rounded-br-lg text-white capitalize flex items-center justify-center group"
      >
        <span className="group-hover:translate-x-4 group-hover:opacity-0 duration-300 ease-in pl-3 group-hover:pl-0">
          cancel flight
        </span>
        <FaTrash className=" opacity-0 group-hover:-translate-x-8 group-hover:opacity-100 duration-300 ease-in " />
      </button>
    </div>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  item: PropTypes.object,
  bookFlightList: PropTypes.array,
  setBookFlightList: PropTypes.func,
};
