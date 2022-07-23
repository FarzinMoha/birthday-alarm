import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <div className='header'>
        <NavLink   to='/today'>Today Birthdays</NavLink>
        <NavLink  to='/list'>List Of Freinds</NavLink>
        <NavLink  to='/'>Enter Birth Days</NavLink>
    </div>
  )
}

export default Header