import './App.css'
// import User from './pages/User'
import LoginPage from './pages/LoginPage'; 
// import Club from './pages/Club'
// import Calendar from './pages/Calender';

function App() {
  // const type = "user";//host
  // const isLoggedIn = false;
  // function loginFormHandler(event){
  //   console.log(event)
  // }

  return (
    <>
      <LoginPage/>
      {/* <Calendar />
      {
        type=="Club" ? <Club /> : (type=="host"?<Host /> : <User/>)
      } */}
    </>
  )
}

export default App
