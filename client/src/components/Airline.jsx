import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// Airline componenti, airline prop'u ile havayolu bilgilerini getirir

const Airline = ({ airline }) => {
  const [airlineInfo, setAirlineInfo] = useState([]); // Havayolu bilgilerini tutmak için bir state tanımlıyoruz

  useEffect(() => {
    if (airline) {
      // Eğer airline prop'u mevcutsa API isteğini gerçekleştiriyoruz
      const getAirline = async () => {
        // API'den havayolu bilgilerini almak için bir GET isteği yapıyoruz
        const res = await axios.get(`/api/airlines/${airline}`, {
          headers: {
            Accept: "application/json",
            app_id: import.meta.env.VITE_APP_ID,
            app_key: import.meta.env.VITE_APP_KEY,
            ResourceVersion: "v4",
          },
        });

        const data = res.data; // API yanıtındaki veriyi alıyoruz
        setAirlineInfo(data); // Havayolu bilgisini state'e kaydediyoruz
      };

      getAirline(); // Havayolu verilerini almak için fonksiyonu çağırıyoruz
    }
  }, [airline]); // airline prop'u her değiştiğinde useEffect yeniden çalışacak

  return (
    // Havayolu ismini gösteriyoruz
    <p className="text-xs sm:text-sm text-emerald-500 font-semibold">
      {" "}
      {airlineInfo.publicName}
    </p>
  );
};

export default Airline;

Airline.propTypes = {
  airline: PropTypes.string,
};
