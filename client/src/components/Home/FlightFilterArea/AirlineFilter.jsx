import axios from "axios";
import { useEffect, useState } from "react"


const AirlineFilter = () => {

const [airlinesList, setAirlinesList] = useState([]);

useEffect(()=>{
    const getAirlines = async()=>{
        try {
            const res = await axios.get(`/api/airlines?page=0&sort=%2Biata`, {
              headers: {
                Accept: "application/json",
                app_id: import.meta.env.VITE_APP_ID,
                app_key: import.meta.env.VITE_APP_KEY,
                ResourceVersion: "v4",
              },
            });
            const data = res.data;
            console.log(data," airlines")
            setAirlinesList(data.airlines)
        } catch (error) {
            console.log(error)
        }
    }
    getAirlines()
}, [])

  return (
    <div>
      <p className="text-xs font-semibold text-slate-600 my-3 ml-2 ">
        {" "}
        Airlines Included
      </p>
      {airlinesList.slice(0, 6).map((airline, index) => (
        <div key={airline.nvls} className="flex items-center mb-4 ml-4 ">
          <input
            id={`airline-${index}`}
            type="radio"
            value=""
            name="airline"
            className="w-4 h-4 text-[#4b0097] bg-gray-100 border-gray-300 focus:ring-[#4b0097]  focus:ring-2 "
          />
          <label
            htmlFor={`airline-${index}`}
            className="ml-2 text-[10px] font-semibold text-wrap text-slate-600 flex items-center justify-between  w-48"
          >
            <span>{airline.publicName}</span>
            <span>$ 230</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default AirlineFilter