import React from 'react'
import '../../public/FirstPage.css';
import { Link } from "react-router-dom";
import HomeCards from '../components/HomeCards';
const FirstPage = () => {

  

  return (
    <> 
    <div className="intro">
        <div className="navbar">
       <div className="icon">
        <h2>CampusConnect</h2>
       </div>
      <div className="navButtons">
        
          <h3 className="navbutton">Home</h3>
          <h3 className="navbutton"> Events</h3>
          <h3 className="navbutton"> Calender</h3>
          <h3 className="navbutton"> About</h3>
          
          <Link to="./pages/LoginPage"><h3 className="navbutton"> Log in</h3></Link>
      </div>

      
        </div>
      <div className="intro-line">
        <h1><b>One calender for</b></h1>
        <h1><b>every club on</b></h1>
        <h1><b>Campus.</b></h1>
      </div>
      <div className="sub-intro-line">
      <h4>CampusConnect stops two socities from claiming the same </h4>
      <h4>hour. Students discover what is happening, coordinators</h4>
      <h4>propose dates, the council approves only conflict-free plans</h4>
     </div>
     <div className="event-nav">
       <button>Browse Events</button>
       <button> Open the Calender</button>
     </div>
    
  
  
 
    </div>
    <div>
      <h1><b>Upcoming Events</b></h1>
        <HomeCards/>
    </div>
   <div>Event Categories</div>
    </>
  )
}

export default FirstPage;