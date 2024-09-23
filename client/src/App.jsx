import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyFlight from "./pages/MyFlight";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/myFlight" element={<MyFlight />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
    </>
  );
}

export default App;
