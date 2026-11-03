import './App.css';
import FirstPage from './pages/FirstPage';
import LoginPage from './pages/LoginPage';
import AddEvent from './components/AddEvent';
import Admin from './pages/Admin'
import {Route,useNavigate,Routes,BrowserRouter} from 'react-router-dom' 

function App() {
  const type = "user";//host
  const isLoggedIn = false;
  function loginFormHandler(event){
    console.log(event)
  }
  const BACKEND_URL = import.meta.env.BACKEND_URL;

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <LoginPage />
          <FirstPage />
          <Admin />
          </>
          } />
        <Route path="/add-event" element={<AddEvent type="addEvent" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
