import PropTypes from "prop-types"

// uçuş sınıfına göre bilet fiyatları
const BookFlightPriceInfo = ({price}) => {
  return (
    <div className="ml-4 md:ml-0 p-4 flex items-center gap-2 text-xs">
      <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
        ${price.economyClass}
        <span className="text-[10px] text-wrap text-slate-500">Economy</span>
      </p>
      <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
        ${price.comfortClass}
        <span className="text-[10px] text-wrap text-slate-500">Comfort</span>
      </p>
      <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
        ${price.mainClass}
        <span className="text-[10px] text-wrap text-slate-500">Main</span>
      </p>
      <p className="border rounded-md w-14 h-14 p-1 flex items-center flex-col justify-center font-semibold border-slate-300 text-[#4b0097]">
        ${price.business}
        <span className="text-[10px] text-wrap text-slate-500">Business</span>
      </p>
    </div>
  );
}

export default BookFlightPriceInfo
BookFlightPriceInfo.propTypes = {
price:PropTypes.object
}