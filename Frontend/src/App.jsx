import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AddEvent from './pages/AddEvent';
import MainNav from './components/MainNav';
import SideBar from './components/SideBar';
import Admin from './pages/Admin'
import AllEvent from './pages/AllEvent'
import {Route,useNavigate,Routes,BrowserRouter} from 'react-router-dom' 
import { useState } from 'react';

function App() {
  const userType = useState("user");
  const isLoggedIn = false;
  function loginFormHandler(event){
    console.log(event)
  }
  const BACKEND_URL = import.meta.env.BACKEND_URL;

  return (
    <>
    <BrowserRouter>
      <MainNav /> 
      <div className="app-layout-wrapper">
        
        <SideBar /> 
        
        <main className="page-content-area">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allEvent' element={<AllEvent />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
