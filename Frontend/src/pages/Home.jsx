import React from 'react';
import '../../public/Home.css';
import bannerimg from '../assets/banner-image.png';
// import { Link } from "react-router-dom";
// import HomeCards from '../components/HomeCards';
import '../../public/Home.css';
const Home = () => {

  

  return (
    <> 
      <div className="banner">
        <div className="banner-content">
           
           
           <h1><b>Event-Manager for IIITDMJ.</b></h1>
           <h3>An event-manager on which you can find</h3>
           <h3> and schedule upcoming events.</h3>

        </div>
        <div className="banner-image">
            <img src={bannerimg} alt="banner-img"/>
        </div>
      </div>
      <div className='clubs'>
          <div className='club-cards'>
                  <h2><b>Sports</b></h2>
                  <h4>Energetic and </h4>
                  <h4>vibrant energy</h4>
          </div>
          <div className='club-cards'>
                  <h2><b>Technical</b></h2>
                  <h4>Sharp, awake and </h4>
                  <h4>full of confusion</h4>
          </div>
          <div className='club-cards'>
                  <h2><b>Cultural</b></h2>
                  <h4>I dont know </h4>
                  <h4>vibes unknown</h4>
          </div>

      </div>
    </>
  )
}

export default Home;