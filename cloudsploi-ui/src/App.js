import logo from './logo.svg';
// import './App.css';
// import NavigationBar from './modules/nav.js';
//import Home from './modules/home.js';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Signup from './modules/Signup';
import OurServicesPage from './modules/OurServices.js';
// import Careers  from './modules/Careers.js';
import Cloud from './modules/cloud.js';
import Login from './modules/login';


function App() {
  return (
    <div className='maonAppContainer'>
    {/* <NavigationBar/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cloud/>}/>
          <Route path='signup' element={<Signup/>}/> 
          <Route path='ourservices' element={<OurServicesPage/>}/>
          <Route path='login' element={<Login/>}/>
          {/* <Route path='careers' element={<Careers/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
