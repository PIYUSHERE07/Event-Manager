import './App.css'
// import User from './pages/User'
import LoginPage from './pages/LoginPage';
import User from './pages/User'
import Club from './pages/Club'
import Calendar from './pages/Calender';
import Admin from './pages/Admin';

import FirstPage from './pages/FirstPage';
function App() {
  const type = "user";//host
  const isLoggedIn = false;
  function loginFormHandler(event){
    console.log(event)
  }

  return (
    <>
      <LoginPage/>
      {/* <Calendar />
    <Admin />
    <LoginPage />
      <Calendar />
      {
        type=="Club" ? <Club /> : (type=="host"?<Host /> : <User/>)
      } */}
    </>
  )
}

export default App
