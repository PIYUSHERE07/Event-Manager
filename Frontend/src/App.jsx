import './App.css'
import User from './pages/User'
import Club from './pages/Club'
import LoginPage from './pages/LoginPage';

function App() {
  const type = "user";//host
  const isLoggedIn = false;

  return (
    <>
      {
        isLoggedIn? (type=="user" ? <User /> : <Club/>) : <LoginPage/>
      }
    </>
  )
}

export default App
