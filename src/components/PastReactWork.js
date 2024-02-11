import React from 'react'
import '../assets/style/ProjectsGrid.css'
import MovieComp from '../reactSamples/movieComp'
import Image1 from '../assets/img/beatr-club1.png'
import Image2 from '../assets/img/beatr-club2.png'
import Image3 from '../assets/img/bcsite1.png'
import Image4 from '../assets/img/bcsite2.png'
import Image5 from '../assets/img/bcsite3.png'


export default function PastReactWork() {
  return (
    <div className='aem-work'>
      <div className='projects project_1'>
        <div className='column2 Project_details '>
          <div className='project-title'><h2>BEATCLUB.COM</h2><a href='https://www.beatclub.com' target='_blank'>www.beatclub.com</a></div>
          <div className='project-view-grid'>

            <div><img src={Image1} alt="hero Banner" /></div>

            <div><img src={Image2} alt="hero Banner" /></div>
            <div><img src={Image3} alt="hero Banner" /></div>
            <div><img src={Image4} alt="hero Banner" /></div>
            <div><img src={Image5} alt="hero Banner" /></div>


          </div>

        </div>
      </div>
      <div className='projects project_1'>
        <div className='column2 Project_details '>
          <div className='project-title'><h2>React Components</h2></div>
          <MovieComp></MovieComp>

        </div>
      </div>
    </div>
  )
}
