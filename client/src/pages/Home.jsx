import { useEffect, useState } from "react";
import axios from "axios";
import FlightList from "../components/Home/FlightList";
import TravelServices from "../components/TravelServices";
import BookYourFlight from "../components/Home/BookYourFlight";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loding";
import Error from "../components/Error";
import FilterFlight from "../components/Home/FlightFilterArea/FilterFlight";
import { useSelector } from "react-redux";
const Home = () => {
  /**useState hook'unu kullanarak değişkenlerimiz tanımlıyoruz */

  const { user } = useSelector((state) => state.user); // reduxdan user state'ini alıyoruz
  const [flight, setFlight] = useState([]); // uçuş verilerini bu değişkende tutuyoruz
  const [filter, setFilter] = useState({
    scheduleDate: "", // uçuş tarih filtresi
    flightDirection: "", // uçuş yönü filtresi
  });
  const [loading, setLoading] = useState(false); // verilerin yüklenme durumunu göstermek için bir loading tanımlıyourz
  const [error, setError] = useState(""); // gelen hata mesajlarını ekranda göstermek için bir error değişkeni tanımlıyoruz

  const location = useLocation(); // Mevcut URL konumunu alıyoruz (react-router'dan)

  useEffect(() => {
    // URL parametrelerini almak için URLSearchParams API'sini kullanıyoruz
    const urlParams = new URLSearchParams(location.search);
    // URL parametrelerinden 'scheduleDate' ve 'flightDirection' değerlerini alıyoruz
    const scheduleDateUrl = urlParams.get("scheduleDate");
    const flightDirectionUrl = urlParams.get("flightDirection");
    // Eğer URL'de bu parametreler varsa, filtreleme değerlerini güncelliyoruz
    if (scheduleDateUrl || flightDirectionUrl) {
      setFilter({
        ...filter, // Mevcut filtreyi kopyalıyoruz
        scheduleDate: scheduleDateUrl, // Tarih filtresi URL'den gelen değere ayarlanıyor
        flightDirection: flightDirectionUrl, // Uçuş yönü filtresi URL'den gelen değere ayarlanıyor
      });
    }
    // API çağrısı için URL parametrelerini hazırlıyoruz
    const searchQuery = urlParams.toString();
    // API'den uçuş verilerini almak için asenkron bir fonksiyon tanımlıyoruz
    const getFlight = async () => {
      try {
        setLoading(true); // Yüklenme durumu true yapılıyor
        const res = await axios.get(
          `/api/flights?${searchQuery}&includedelays=false&page=0&sort=%2BscheduleTime`,
          {
            headers: {
              Accept: "application/json",
              app_id: import.meta.env.VITE_APP_ID,
              app_key: import.meta.env.VITE_APP_KEY,
              ResourceVersion: "v4",
            },
          }
        );
        // API'den dönen uçuş verilerini alıyoruz
        const data = await res.data.flights;
        setFlight(data); // Uçuş verilerini state'e atıyoruz
        setLoading(false); // Yüklenme durumu false yapılıyor
      } catch (error) {
        setLoading(false); // Hata durumunda da yüklenme durumu false yapılıyor
        setError(error.response.data); // Hata mesajını state'e atıyoruz
      }
    };

    /**burada user var ise veriyi getiritoruz */
    if (user) {
      getFlight(); // API çağrısını yapıyoruz
    }
  }, [location.search]); // location.search değiştiğinde useEffect tekrar çalışacak

  // Eğer veri yükleniyorsa, Loading bileşenini gösteriyoruz
  if (loading) return <Loading />;
  // Eğer hata oluştuysa, Error bileşenini hata mesajıyla birlikte gösteriyoruz
  if (error) return <Error message={error} />;
  // Eğer veri yüklenmemişse ve hata yoksa, normal içerik döndürülür (eklenebilir)
  return (
    <div className="max-w-7xl mx-auto p-5 md:p-3 lg:p-0">
      <div className="grid   md:grid-cols-10">
        <div className="grid md:col-span-8 order-2 md:order-1">
          {/* tarih ve uçuş yönüne göre filtrlemelerin kontrolünü bu
        component içinde yapıyoruz. Bu component içinde filter
        ve setFilter değerlerini props olarak geçiyoruz*/}
          <BookYourFlight filter={filter} setFilter={setFilter} />
          <div className="grid md:grid-cols-8 ">
            <div className="grid md:col-span-6 ">
              {/* bütün uçuşlarımızı bu component içinde gösteriyoruz. flight değerini props olarak geçiyoruz */}
              <FlightList flight={flight} />
            </div>
            <div className="hidden lg:grid col-span-2 ">
              {/* bu component içinde uçuş saati, havalimanlarına göre ve fiyat durumuların göre filteleme secenekleri bulunuyor
            tasarım için eklenen alan*/}
              <FilterFlight />
            </div>
          </div>
        </div>
        <div className="hidden md:grid  md:col-span-2  order-1 md:order-2">
          {/* tasarım için oluşturulan component. bu component  */}
          <TravelServices />
        </div>
      </div>
    </div>
  );
};

export default Home;
