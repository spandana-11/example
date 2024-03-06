import React from 'react'
import { NavLink } from 'react-router-dom'
function Navpage() {
  return (
    <div>
        <nav>
       
        
        <NavLink to="/">Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
        <NavLink to='users'>Users</NavLink>
        <NavLink to='signup'>Sign Up</NavLink>
        <NavLink to="login">Login</NavLink>

        </nav>
    </div>
  )
}

export default Navpage