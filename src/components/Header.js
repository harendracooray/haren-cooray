import React from 'react'
import { NavBar } from './NavBar';
import '../Header.css';
import '../assets/style/cssIcons.css'
import Image1 from '../assets/img/IMG_AnslemCooray.jpg';

export default function Header() {
  return (
    <div className='header'>
      <div className='header_wrapper'>
        <div className='profile'>
          <div className='my-name'>
            <img className='my-pic' src={Image1} alt='pic' />
            <div>
              <h2 className='heading'>HARENDRA COORAY</h2>
              <div class='my-role'>
                Adobe AEM/Frontend Web Developer
              </div>
            </div>
          </div>
          {/* <i class="gg-chevron-right"></i> */}
          {/* <div class="dropdown">
            <button class="dropbtn">Roles Played</button>
            <div class="dropdown-content">
              <div>UX/UI designer</div>
              <div>Prototype Developer</div>
              <div>Web Developer</div>
              <div>UI Front End Developer</div>
              <div>AEM Compenent Developer</div>
            </div>
          </div>
          <i class="gg-chevron-right"></i> */}
        </div>
        <div className='header_right-column' >


          <div className='my-data' >
            <div>
              <div><span className='label'>Name:</span> <span>Anslem Harendra Cooray</span></div>
              <div><span className='label'>Addesss:</span> <span>702 Homestead Ln Chadds<br />Ford PA 19317</span></div>
              <div><span className='label'>Email:</span> <span>Harendra.cooray@gmail.com</span></div>
              <div><span className='label'>Phone:</span> <span>415 341 4597</span></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
