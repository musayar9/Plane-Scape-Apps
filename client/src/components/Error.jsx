import PropTypes from "prop-types";
import NotFound from "../assets/images/error.svg";

const Error = ({ message }) => {
  return (
    <div className="max-w-md mx-auto flex items-center justify-center flex-col my-12">
      <img className="w-96" src={NotFound} alt="not found" />
      <p className="mt-5 text-2xl font-semibold text-slate-600">
        {message}
      </p>{" "}
    </div>
  );
};

export default Error;
Error.propTypes = {
  message: PropTypes.string,
};
