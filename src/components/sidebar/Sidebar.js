import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="sidebar-section">
        <span className="sidebar-title">ABOUT ME</span>
        <img className="sidebar-img" src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <div className="sidebar-subsection">
            <span className="sidebar-title"> Catagories</span>
            <ul className="sidebar-catagories">
                <li className="sidebar-catagory">Buy</li>
                <li className="sidebar-catagory">Sell</li>
                <li className="sidebar-catagory">Rent</li>
            </ul>
        </div>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>follow us on:</span>
          <div className="sidebar-icons">
          <i className="sidebar-icon fa-brands fa-instagram"></i>
        <i className="sidebar-icon fa-brands fa-facebook"></i>
        <i className="sidebar-icon fa-brands fa-linkedin"></i>
        <i className="sidebar-icon fa-brands fa-twitter"></i>
            </div>  
        
      
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
