import React from 'react';
import { Herobanner } from './Herobanner';
import About from './About';
import Skills from './Skills';




export default function Home() {


  return (
    <div className='body__container'>
      <Herobanner />
      <About />
      <Skills />
    </div>
  )
}