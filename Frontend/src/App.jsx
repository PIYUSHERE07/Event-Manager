import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AddEvent from './pages/AddEvent';
import AddCouncil from './pages/AddCouncil';
import Calender from './pages/Calender';
import MainNav from './components/MainNav';
import SideBar from './components/SideBar';
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
            <Route path='/add-council' element={<AddCouncil />} />
            <Route path='/add-event' element={<AddEvent />} />
            <Route path='/event-calander' element={<Calender />} />
            <Route path='/myActivities' element={<Home />} />
            <Route path='/login-page' element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
