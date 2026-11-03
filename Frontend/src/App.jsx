import './App.css';
import FirstPage from './pages/FirstPage';
import AddEvent from './components/AddEvent'
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
        <Route path="/" element={<FirstPage />} />
        <Route path="/add-event" element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
