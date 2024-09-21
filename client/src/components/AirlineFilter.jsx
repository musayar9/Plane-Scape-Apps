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
        } catch (error) {
            console.log(error)
        }
    }
    getAirlines()
}, [])

  return (
    <div>AirlineFilter</div>
  )
}

export default AirlineFilter