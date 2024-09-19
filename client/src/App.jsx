import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyFlight from "./pages/MyFlight";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myFlight" element={<MyFlight />} />
      </Routes>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
    </>
  );
}

export default App;
