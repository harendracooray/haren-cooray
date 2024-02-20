import React from 'react';
import Image1 from '../assets/img/html5.png';
import Image2 from '../assets/img/css3.png';
import Image3 from '../assets/img/javascript.png';
import Image4 from '../assets/img/react.png';
import Image5 from '../assets/img/nextjs.png';
import Image6 from '../assets/img/AEM.png';
import Image7 from '../assets/img/crossBrowser.png';
import Image8 from '../assets/img/accssibity.png';
import Image9 from '../assets/img/seo.png';
import Image10 from '../assets/img/boot.png';
import Image11 from '../assets/img/usabilyt.png';
import Image12 from '../assets/img/communi.png';
import Image13 from '../assets/img/mui.png';
import Image14 from '../assets/img/scss.png';
import Image15 from '../assets/img/uxui.png';
import '../AppDesignV1.css';

export default function Skills() {
    return (
        <div className='skills section-wrapper '>
            <div className='card-wrapper container'>
                <div className='parentgrid'>
                    <div className='t-icon'><img src={Image1} alt="Html" /><div>HTML</div></div>
                    <div className='t-icon'><img src={Image2} alt="Css" /><div>CSS</div></div>
                    <div className='t-icon'><img src={Image3} alt="Javascript" /><div>JAVASCRIPT</div></div>
                    <div className='t-icon'><img src={Image4} alt="React" /><div>React</div></div>
                    <div className='t-icon'><img src={Image5} alt="NextJs" /><div>NextJS</div></div>
                    <div className='t-icon'><img src={Image6} alt="Adobe AEM" /><div>Adobe AEM</div></div>
                    <div className='t-icon'><img src={Image7} alt="Cross Browse" /><div>Cross Browser</div></div>
                    <div className='t-icon'><img src={Image8} alt="Accessibility" /><div>Accessibility</div></div>
                    <div className='t-icon'><img src={Image9} alt="Accessibility" /><div>SEO</div></div>
                    <div className='t-icon'><img src={Image10} alt="text" /><div>Bootstrap</div></div>
                    <div className='t-icon'><img src={Image11} alt="text" /><div>Usability</div></div>
                    <div className='t-icon'><img src={Image12} alt="text" /><div>Communication</div></div>
                    <div className='t-icon'><img src={Image13} alt="text" /><div>MUI</div></div>
                    <div className='t-icon'><img src={Image14} alt="text" /><div>Sass</div></div>
                    <div className='t-icon'><img src={Image15} alt="text" /><div>UX?UI</div></div>
                </div>
            </div>

        </div>
    )
}
