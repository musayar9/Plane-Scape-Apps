import { useEffect } from "react";

import BookFlightList from "../components/MyFlight/BookFlightList";
import TravelServices from "../components/TravelServices";

import Loading from "../components/Loding";
import Error from "../components/Error";

import BookFlightHeader from "../components/MyFlight/BookFlightHeader";
import { useDispatch, useSelector } from "react-redux";
import { getBookFlight } from "../redux/bookFlightSlice";

const MyFlight = () => {
  // Redux'dan bookFlight, loading ve error durumlarını alıyoruz
  const { bookFlight, loading, error } = useSelector(
    (state) => state.bookFlight
  );

  // Kullanıcı bilgilerini Redux store'dan alıyoruz
  const { user } = useSelector((state) => state.user);
  // Redux'tan dispatch fonksiyonunu kullanmak için hook'u tanımlıyoruz
  const dispatch = useDispatch();


  // Component ilk yüklendiğinde kullanıcı ID'sine göre uçuşları çekmek için useEffect kullanıyoruz
  useEffect(() => {
    // Eğer kullanıcı varsa uçuş verilerini çekmek için Redux aksiyonunu dispatch ediyoruz
    dispatch(getBookFlight({ userId: user._id }));
  }, []); // useEffect sadece component ilk render edildiğinde çalışacak

  // Yüklenme durumu varsa Loading componentini gösteriyoruz
  if (loading) return <Loading />;

  // Eğer bir hata varsa Error componentine hata mesajını iletip gösteriyoruz
  if (error) return <Error message={error} />;

 
  return (
    <div className="max-w-7xl mx-auto p-5 md:p-3 lg:p-0">
      <BookFlightHeader />
      <div className="grid md:grid-cols-10 ">
        <div className="grid md:col-span-8 order-2 md:order-1">
          {/* Rezervasyon bilgilerini gösteren BookFlightList componentini render ediyoruz */}
          {/* bookFlightList ve setBookFlightList prop'larını BookFlightList componentine iletiyoruz */}
          <BookFlightList
            bookFlightList={bookFlight}
          
          />
        </div>
        <div className="grid order-1 md:order-2  md:col-span-2">
          <TravelServices />
        </div>
      </div>
    </div>
  );
};

export default MyFlight;
