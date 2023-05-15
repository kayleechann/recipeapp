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
         <Link className='link' to="/?cat=appetizers">
          <h6>APPETIZERS</h6>
        </Link>
        <Link className="link" to="/?cat=maincourses">
            <h6>MAIN COURSES</h6>
          </Link>
          <Link className="link" to="/?cat=desserts">
            <h6>DESSERTS</h6>
          </Link>
          <span>kaylee</span>
          <span>Logout</span>
          <span className='write'>
            <Link className="link" to="/writerecipe">Add Recipe</Link>
          </span>
         
        </div>
      </div>
    </div>
  )
}

export default Navbar