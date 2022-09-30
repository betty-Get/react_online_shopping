import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="header-section">
      <div className='header-text'> 
        <span className='header-title'>Eccomerce</span>
        <span className='header-subtitle'>Listing</span>
      </div>
     <img className="header-img" src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
  )
}

export default Header
