import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

// Destinations componenti, destination prop'una göre ilgili destination bilgisini API'den çeker ve ekranda gösterir
const Destinations = ({ destination }) => {
  // console.log("dest", destination)
  const [destinationInfo, setDestinationInfo] = useState([]); // destionation bilgilerini saklamak için state tanımlıyoruz

  useEffect(() => {
    // destination değeri varsa ve boş değilse işlem yapıyoruz
    if (destination && destination.length > 0) {
      const getDestination = async () => {
        try {
          // destination parametresi ile API'ye istek yapıyoruz
          const res = await axios.get(`/api/destinations/${destination}`, {
            headers: {
              Accept: "application/json",
              app_id: import.meta.env.VITE_APP_ID,
              app_key: import.meta.env.VITE_APP_KEY,
              ResourceVersion: "v4",
            },
          });

          const data = res.data; // API'den dönen veriyi alıyoruz
          setDestinationInfo(data); // Veriyi state'e kaydediyoruz
        } catch (error) {
          console.error("Error fetching destination:", error.message);
        }
      };
      // Eğer destination "KLM" değilse API isteğini gerçekleştiriyoruz
      if (destination !== "KLM") {
        getDestination();
      }
    }
  }, [destination]); // destination her değiştiğinde useEffect yeniden çalışacak

  return (
    <p className="text-md text-slate-600 font-semibold">
      {/* Eğer destinatoon "KLM" ise sabit olarak "Amstelveen" yazdırıyoruz, değilse API'den dönen city ya da country bilgisini gösteriyoruz */}
      {destination === "KLM"
        ? "Amstelveen"
        : destinationInfo.city
        ? destinationInfo.city
        : destinationInfo.country}
      {}
    </p>
  );
};

export default Destinations;

Destinations.propTypes = {
  destination: PropTypes.string,
};
