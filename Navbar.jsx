import React from 'react'
import '../Navbar/Navbar.css'

export function Navbar() {
  return (
    <nav className='nav'>
        <h3 className='brand'> pixelmatters</h3>
        <ul className='nav_menu'>
            <li className='nav_item'>Work</li>
            <li className='nav_item'>Approach</li>
            <li className='nav_item'>Culture</li>
            <li className='nav_item'>Careers</li>
            <li className='nav_item'>blog</li>
            <button className='nav_item' id='button'>Get in touch</button>
        </ul>
    </nav>
  )
}