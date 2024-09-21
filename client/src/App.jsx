import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyFlight from "./pages/MyFlight";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myFlight" element={<MyFlight />} />
      </Routes>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
    </>
  );
}

export default App;
