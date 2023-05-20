import React from 'react'
import Logo from "../img/logo.png"
import {Link} from  'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo}></img>
        </div>
        <div className='links'>
          <Link className="link" to="/?cat=desserts">
            <h6>FIND RECIPES</h6>
          </Link>
          <Link to="/register"><span>Register</span></Link>
          <Link to="/register"><span>Login</span></Link>
          <span className='write'>
            <Link className="link" to="/writerecipe">Add Recipe</Link>
          </span>
         
        </div>
      </div>
    </div>
  )
}

export default Navbar