import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import up_down from '../../assets/up-down.svg'
import { Link } from 'react-router-dom';


function Navbar() {
 

  return (
    <div className='navbar'>
      <div className="navbar-con">
      <div className="logo"><Link to={"/sp-advertising-demo4/"}><img src={logo} alt="" /></Link></div>
      <div className="menu">
        <ul className='navbar-menu'>

        <Link to={"/sp-advertising-demo4/"} >Home</Link>
        <Link to={"about"}>About</Link>

        <div className="services">
        <div className="up-down">
        <p >Services</p>
        <img src={up_down} alt="" />
        </div>
        <ul>
          <Link to={"Outdoor-Advertising"}><li>Outdoor Advertising</li></Link>
          <Link to={"Digital-Marketing"}><li>Digital Marketing</li></Link>
          <Link to={"Designing-Services"}><li>Designing Services</li></Link>
          <Link to={"Print-Media"}><li>Print Media</li></Link>
          <Link to={"Branding-Strategy"}><li>Branding & Strategy</li></Link>
          <Link to={"Event-Promotion"}><li>Event Promotion</li></Link>
        </ul>
        </div>
        <Link to={"Welcome-page"}  >Clients</Link>
        <Link to={"Blog"}>Blog</Link>
            
        </ul>
      </div>
      <div className="cart">
         <Link to={"Contact"}><button>Get in Touch</button></Link>
      </div>
      </div>
      
      <div className="menu-btn">
      
      </div>
    
    </div>
  )
}

export default Navbar
