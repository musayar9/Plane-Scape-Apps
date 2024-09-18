

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MyFlight from './pages/MyFlight';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myFlight" element={<MyFlight />} />
      </Routes>
    </>
  );
}

export default App
