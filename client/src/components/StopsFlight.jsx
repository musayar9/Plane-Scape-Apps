const StopsFlight = () => {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-600 my-3 ml-2 "> Stops</p>

      <div className="flex items-center mb-4 ml-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-[#4b0097] bg-gray-100 border-gray-300 focus:ring-[#4b0097]  focus:ring-2 "
          checked
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-xs font-semibold text-slate-600"
        >
          Nonstops
        </label>
      </div>
      <div className="flex items-center ml-4 mb-4">
        <input
       
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-[#4b0097] bg-gray-100 border-gray-300 focus:ring-[#4b0097]  focus:ring-2 "
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-xs font-semibold text-slate-600 "
        >
          1 stops
        </label>
      </div>

      <div className="flex items-center ml-4">
        <input
        
          id="default-radio-3"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-[#4b0097] bg-gray-100 border-gray-300 focus:ring-[#4b0097]  focus:ring-2 "
        />
        <label
          htmlFor="default-radio"
          className="ms-2 text-xs font-semibold text-slate-600 "
        >
          2+ stops
        </label>
      </div>
    </div>
  );
};

export default StopsFlight;
