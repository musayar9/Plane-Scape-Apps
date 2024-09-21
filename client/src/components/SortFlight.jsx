const SortFlight = () => {
  return (
    <div className="my-4 mr-3 space-y-2">
      <label
        htmlFor="sort"
        className="text-xs font-semibold text-slate-600 my-3 ml-2"
      >
        Sort by:
      </label>
      <select
        name="sort"
        className="bg-white rounded-xl p-2 w-full outline-none text-slate-600 text-xs font-semibold"
      >
        <option>Pick one</option>
        <option>LowestPrice</option>
        <option>HighestPrice</option>
      </select>
    </div>
  );
};

export default SortFlight;
