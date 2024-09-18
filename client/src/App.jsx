
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MyFlight from './pages/MyFlight';

function App() {
 

  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/myFlight" element={<MyFlight/>}/>
    </Routes>
  );
}

export default App
