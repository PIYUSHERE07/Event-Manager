import React from 'react';
import '../../public/SideBar.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>Home</li>
        <li>All Events</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
}

export default SideBar;
