import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <NavLink className="navbar-brand" to='/' >Macao slot club </NavLink>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Igra</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/statistika' className='nav-link'>Statistika</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
