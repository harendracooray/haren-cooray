import { Accordion } from "react-bootstrap";
import React from 'react';
import '../assets/style/bootstrapOverride.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header";
import About from "./About";
import { Herobanner } from "./Herobanner";
import Skills from "./Skills";
import TabbedModule from '../components/TabbedModule'
import Resume from "./Resume";



const AccordionModule = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><div className="accordiontitle">PROFILE</div><Header /> <div className='accordion-btn'>
          <i class="chevron-down"></i>
        </div></Accordion.Header>
        <Accordion.Body>
          <About />
        </Accordion.Body>
      </Accordion.Item>
      {/*   <Accordion.Item eventKey="1">
        <Accordion.Header><div className="accordiontitle">MY QUOTE</div><div className='accordion-btn'>
          <i class="chevron-down"></i>
        </div></Accordion.Header>
        <Accordion.Body>
          <Herobanner />
        </Accordion.Body>
      </Accordion.Item> */}
      <Accordion.Item eventKey="2">
        <Accordion.Header><div className="accordiontitle">TECHNOLOGIES</div><div className='accordion-btn'>
          <i class="chevron-down"></i>
        </div></Accordion.Header>
        <Accordion.Body>
          <Skills />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="accordiontitle">PORTFOLIO</div><div className='accordion-btn'>
          <i class="chevron-down"></i>
        </div></Accordion.Header>
        <Accordion.Body>
          <TabbedModule />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><div className="accordiontitle">RESUME</div><div className='accordion-btn'>
          <i class="chevron-down"></i>
        </div></Accordion.Header>
        <Accordion.Body>
          <Resume />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionModule
