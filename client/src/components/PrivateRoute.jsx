import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// PrivateRoute bileşeni, sadece oturum açmış kullanıcıların erişebileceği özel bir rota sağlar.
const PrivateRoute = () => {
  // Redux state'inden kullanıcı bilgilerini alıyoruz
  const { user } = useSelector((state) => state.user);
  // Kullanıcı oturum açmışsa, içindeki bileşenleri (Outlet) gösteriyoruz
  // Aksi takdirde, kullanıcıyı giriş sayfasına yönlendiriyoruz
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
