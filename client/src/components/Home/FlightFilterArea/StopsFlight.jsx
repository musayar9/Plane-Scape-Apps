const StopsFlight = () => {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-600 my-3 ml-2 "> Stops</p>

      <div className="flex items-center mb-4 ml-4">
        <input
          id="stops-flight-1"
          type="radio"
          value=""
          name="stops-flight"
          className="w-4 h-4 text-[#4b0097] bg-gray-100 border-gray-300 focus:ring-[#4b0097]  focus:ring-2 "
          defaultChecked
        />
        <label
          htmlFor="stops-flight-1"
          className="ml-2 text-[10px] font-semibold text-wrap text-slate-600 flex items-center justify-between  w-48"
        >
          <span>Nanstops</span>
          <span>$ 230</span>
        </label>
      </div>
      <div className="flex items-center ml-4 mb-4">
        <input
          id="stops-flight-2"
          type="radio"
          value=""
          name="stops-flight"
          className="w-4 h-4 text-[#4b0097] bg-gray-100 border-gray-300 focus:ring-[#4b0097]  focus:ring-2 "
        />
        <label
          htmlFor="stops-flight-2"
          className="ml-2 text-[10px] font-semibold text-wrap text-slate-600 flex items-center justify-between  w-48"
        >
          <span> 1 stops</span>
          <span>$ 230</span>
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
          className="ml-2 text-[10px] font-semibold text-wrap text-slate-600 flex items-center justify-between  w-48"
        >
          <span> 2+ stops</span>
          <span>$ 230</span>
        </label>
      </div>
    </div>
  );
};

export default StopsFlight;
