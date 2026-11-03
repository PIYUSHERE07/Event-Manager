import React from 'react';
import {Link} from 'react-router-dom'
import '../../public/SideBar.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allEvent'>All Activities</Link></li>
        <li><Link to='/event-calander'>Calender</Link></li>
        <li><Link to='/add-event'>Add Event</Link></li>
        <li><Link to='/'>My Activities</Link></li>
        <li><Link to='/add-council'>Add Council</Link></li>
      </ul>
    </aside>
  );
}

export default SideBar;
