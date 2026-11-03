import React from 'react'
import '../../public/FirstPage.css';
import { Link } from "react-router-dom";
import HomeCards from '../components/HomeCards';
const FirstPage = () => {

  

  return (
    <> 
       <div className="navbar">
        <h1><b>Event-Manager</b></h1>
        <div className='navbar-buttons'>
          <div>Home</div>
          {/* <div>Clubs</div> */}
          <div>Events</div>
          <div>Calender</div>
          {/* <div>About</div> */}
        </div>
        <div className='sign-in-button'><button>Sign In</button></div>
       </div>
       <div className='banner'>
          <div className="banner-content">
            <h3 className='banner-hero'>IITDMJ EVENTS PLATFORM</h3>
            <h1 className='banner-main'><b>Discover, Organize and</b></h1>
            <h1><b>Experience </b><i>Campus Life.</i></h1>
            <h5>Event-Manager brings all college events, clubs and fests to one place-</h5>
            <h5>explore what's happening, never miss on events and be part of the campus community.</h5>
            <div className='event-shower'>
              <button className='all-event-button'>Explore event</button>
              <button className='calender-button'>View Calender</button>
            </div>
          </div>
          <div className="banner-image">
            <img src="" alt="" />
          </div>
       </div>
       <div className="explore-clubs">

       </div>
    </>
  )
}

export default FirstPage;