import axios from "axios";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getBookFlight } from "../../redux/bookFlightSlice";

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user); // Kullanıcı durumunu Redux'tan alır.

  const handleDelete = async () => {
    try {
      // Uçuş rezervasyonunu silmek için DELETE isteği.
      const res = await axios.delete(
        `http://localhost:5000/api/v1/bookFlight/${item._id}`
      );
      const data = res.data; // İstek sonucundaki veriyi alır.
  

      toast.success(data.message); // Başarılı silme işlemi için bildirim gösterir.
      dispatch(getBookFlight({ userId: user._id })); // Güncellenmiş uçuş verilerini almak için eylemi dispatch eder.
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message); // Hata durumunda ilgili hata mesajını gösterir.
      } else {
        toast.error("Request Failed"); // Genel bir hata mesajı gösterir.
      }
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

};
