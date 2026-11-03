import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AddEvent from './pages/AddEvent';
import AddCouncil from './pages/AddCouncil';
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
      <Routes>
        <Route path='/' element={
          <>
            <MainNav />
            <div>
              <SideBar />
              <Home />
            </div>
          </>
        } />
      <Route path='/allEvent' element={
          <>
            <MainNav />
            <div>
              <SideBar />
              <AllEvent />
            </div>
          </>
        } />
        <Route path='/addCouncil' element={
          <>
            <MainNav />
            <div>
              <SideBar />
              <AddCouncil />
            </div>
          </>
        } />
        <Route path='/allEvent' element={
          <>
            <MainNav />
            <div>
              <SideBar />
              <AllEvent />
            </div>
          </>
        } />
        <Route path='/allEvent' element={
          <>
            <div>
              <MainNav />
            </div>
            <div>
              <SideBar />
              <AllEvent />
            </div>
          </>
        } />
        <Route path='/allEvent' element={
          <>
            <MainNav />
            <div>
              <SideBar />
              <AllEvent />
            </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
