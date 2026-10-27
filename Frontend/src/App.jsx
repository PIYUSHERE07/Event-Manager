import { useState } from 'react'
import './App.css'
import User from './pages/User'
import Host from './pages/Host'

function App() {
  const type = "user";//host

  return (
    <>
      { type=="user" ? <User /> : <Host/>}
    </>
  )
}

export default App
