import React from 'react'
import './Topbar.css'
import {NavLink} from 'react-router-dom'

function TopBar() {
  return (
    <div className='topbar'>
      <div className='left'>
        <i className="topbar-icon fa-brands fa-instagram"></i>
        <i className="topbar-icon fa-brands fa-facebook"></i>
        <i className="topbar-icon fa-brands fa-linkedin"></i>
        <i className="topbar-icon fa-brands fa-twitter"></i>
      </div>
      <div className='center'>
        <ul className='topbar-list'>
            <li className='list-items'>
              <NavLink to="/">HOME</NavLink></li>
            <li className='list-items'>
            <NavLink to="/"></NavLink>ABOUT</li>
            <li className='list-items'>
            <NavLink to="/"></NavLink>CONTACT</li>
            <li className='list-items'>
            <NavLink to="/create">CREATE LISTING</NavLink></li>
            <li className='list-items'>
            <NavLink to="/"></NavLink>LOGOUT</li>
        </ul>
      </div>
      <div className='right'>
        <img className="topbar-profie" src='https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        
        <i className="topbar-search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar

