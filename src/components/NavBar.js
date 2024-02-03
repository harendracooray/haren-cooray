import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link className='site-header-btn' to='/pastReactWork'>React Work</Link>
      <Link className='site-header-btn' to='/pastAemWork'>AEM Work</Link>
      <Link className='site-header-btn' to='/'>Home</Link>
    </nav>
  )
}
