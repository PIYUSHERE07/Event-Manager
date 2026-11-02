import './App.css'
<<<<<<< HEAD
// import User from './pages/User'
import LoginPage from './pages/LoginPage'; 
// import Club from './pages/Club'
// import Calendar from './pages/Calender';
=======
import User from './pages/User'
import Club from './pages/Club'
import Calendar from './pages/Calender';
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';
>>>>>>> 0718a37 (validation is done for admin login and login backend of councils is done)

function App() {
  // const type = "user";//host
  // const isLoggedIn = false;
  // function loginFormHandler(event){
  //   console.log(event)
  // }

  return (
    <>
<<<<<<< HEAD
      <LoginPage/>
      {/* <Calendar />
=======
    <Admin />
    <LoginPage />
      <Calendar />
>>>>>>> 0718a37 (validation is done for admin login and login backend of councils is done)
      {
        type=="Club" ? <Club /> : (type=="host"?<Host /> : <User/>)
      } */}
    </>
  )
}

export default App
