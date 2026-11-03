import './App.css'

import LoginPage from './pages/LoginPage'; 

// import Calendar from './pages/Calender';
import FirstPage from './pages/FirstPage';
function App() {
  // const type = "user";//host
  // const isLoggedIn = false;
  // function loginFormHandler(event){
  //   console.log(event)
  // }

  return (
    <>
      <FirstPage/>
      
      {/* <Calendar />
      {
        type=="Club" ? <Club /> : (type=="host"?<Host /> : <User/>)
      } */}
    </>
  )
}

export default App
