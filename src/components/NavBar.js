import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const { isLoggedIn, logout } = props
  return (
    <nav className={`navbar navbar-inverse bg-primary`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to="/" className='navbar-brand'>¿Dónde?</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/devices">Devices</Link></li>
          {isLoggedIn ? <li><Link to="/" onClick={() => logout()}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
