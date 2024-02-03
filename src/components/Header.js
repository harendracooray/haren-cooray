import React from 'react'
import { NavBar } from './NavBar';
import '../Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='header_wrapper container'>
        <div className='profile'>
          <div className='my-name'>
            <h2 className='heading'> Harendra Cooray</h2>
            <div class="dropdown-content-myname ">
              <div>EMAIL : Harendra.cooray@gmail.com</div>
              <div>TELE : 415 341 4597</div>
            </div>
          </div>
          <i class="gg-chevron-right"></i>
          <div class="dropdown">
            <button class="dropbtn">Roles Played</button>
            <div class="dropdown-content">
              <div>UX/UI designer</div>
              <div>Prototype Developer</div>
              <div>Web Developer</div>
              <div>UI Front End Developer</div>
              <div>AEM Compenent Developer</div>
            </div>
          </div>
          <i class="gg-chevron-right"></i>
        </div>
        <NavBar className='navbar' />
      </div>
    </div>
  )
}
