import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarSub() {
  return (
    <div className='subnavbar container'>
      <Link className='site__btn_outline' to='/pastaemwork'>Site Reference</Link>
      <Link className='site__btn_outline' to='/components'>Components</Link>
    </div>
  )
}
