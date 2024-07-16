import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import TrackingScreen from'./Components/TrackingScreen';

import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
    <div className="App">
    {/* <Home/> */}
     {/* <Login/> */}
     {/* <Fetch/> */}
     {/* <TrackingScreen/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home2' element={<Home2/>}/>
    <Route path='/home3' element={<Home3/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/trackingscreen' element={<TrackingScreen/>}/>
   </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
