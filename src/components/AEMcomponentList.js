import React from 'react';
import Image1 from '../assets/img/comp_button.svg';
import Image2 from '../assets/img/comp_divider.svg';
import Image3 from '../assets/img/comp_container.svg';
import Image4 from '../assets/img/comp_teaser.svg';
import Image5 from '../assets/img/comp_image.svg';
import Image6 from '../assets/img/comp_text.svg';
import Image7 from '../assets/img/comp_embed.svg';
import Image8 from '../assets/img/comp_accordion.svg';
import Image9 from '../assets/img/comp_carousel.svg';
import Image10 from '../assets/img/comp_XF.svg';
import Image11 from '../assets/img/comp_Formbutton.svg';
import Image12 from '../assets/img/comp_formContainer.svg';
import Image13 from '../assets/img/comp_form_options.svg';
import Image14 from '../assets/img/comp_hidden.svg';

import '../AppDesignV1.css';
import '../assets/style/ProjectsGrid.css'

export default function AEMcomponentList() {
    return (<div className='componentList section-wrapper '>
        <div className='card-wrapper'>
            <div className='side-by-side'><div className='alignleft para'>Below is the list of core compoents I worked on</div></div>
            <div className='componentList-grid'>
                <div className='t-icon'><img src={Image1} alt="Display a button or anchor button" /><div className='sec_title'><h3>Button</h3> Display a button or anchor button</div></div>
                <div className='t-icon'><img src={Image2} alt="Separator" /><div className='sec_title'><h3>Separator</h3>Display a section divider</div></div>
                <div className='t-icon'><img src={Image3} alt="Container" /><div className='sec_title'><h3>Container</h3>Group and layout components</div></div>
                <div className='t-icon'><img src={Image4} alt="Teaser" /><div className='sec_title'><h3>Teaser</h3>Link and image and text</div></div>
                <div className='t-icon'><img src={Image5} alt="comp" /><div className='sec_title'><h3>Image</h3>Display an image asset</div></div>
                <div className='t-icon'><img src={Image6} alt="Text" /><div className='sec_title'><h3>Text</h3>Display rich text paragaraph</div></div>
                <div className='t-icon'><img src={Image7} alt="Embed" /><div className='sec_title'><h3>Embed</h3>Embed third-part widget</div></div>
                <div className='t-icon'><img src={Image8} alt="Accordion" /><div className='sec_title'><h3>Accordion</h3>Toggle panels of related content</div></div>
                <div className='t-icon'><img src={Image9} alt="Carousel" /><div className='sec_title'><h3>Carousel</h3>Display product carousel</div></div>
                <div className='t-icon'><img src={Image10} alt="Experience Fragment" /><div className='sec_title'><h3>Experience Fragment</h3>Display an experience fragment</div></div>

            </div>
            <div className='componentList-grid'>
                <div className='t-icon'><img src={Image11} alt="Form Button" /><div className='sec_title' ><h3>Form Button</h3>Display form button</div></div>
                <div className='t-icon'><img src={Image12} alt="Form Container" /><div className='sec_title'><h3>Form Container</h3>Display form elements</div></div>
                <div className='t-icon'><img src={Image13} alt="From Onptions" /><div className='sec_title'><h3>From Onptions</h3>Display radio and checkbox</div></div>
                <div className='t-icon'><img src={Image14} alt="Form Hidden Field" /><div className='sec_title'><h3>Form Hidden Field</h3>Hold hidden data</div></div>

            </div>
        </div>

    </div >
    )
}
