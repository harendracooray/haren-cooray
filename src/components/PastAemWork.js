import React from 'react';
import '../assets/style/ProjectsGrid.css'
import Image1 from '../assets/img/specrum-hero.png';
import Image2 from '../assets/img/specrum-cardv3.png';
import Image3 from '../assets/img/specrum-card4.png';
import Image4 from '../assets/img/specrum-package.png';
import Image5 from '../assets/img/specrum-accordion.png';
import Image6 from '../assets/img/leadForm.png';
import Image7 from '../assets/img/pesdef.png';
import Image8 from '../assets/img/pfcard.png';
import Image9 from '../assets/img/pfcard2.png';
import Image10 from '../assets/img/pfcreditcard.png';
import Image11 from '../assets/img/pfautocal.png';
import Image12 from '../assets/img/pfmortgage1.png';
import Image13 from '../assets/img/pfrefinance.png';
import Image14 from '../assets/img/pfrefinance2.png';
import Image15 from '../assets/img/pfaffordable.png';
import Image16 from '../assets/img/pfsite1.png';
import Image17 from '../assets/img/pfsite2.png';
import Image18 from '../assets/img/pfsite3.png';
import Image19 from '../assets/img/allsite1.png';
import Image21 from '../assets/img/allysite3.png';
import Image22 from '../assets/img/allysite4.png';
import Image23 from '../assets/img/allysite5.png';
import Image24 from '../assets/img/allysite6.png';
import Image25 from '../assets/img/allysite7.png';
import Image26 from '../assets/img/mr-site2.png';
import Image27 from '../assets/img/mr-site3.png';
import Image28 from '../assets/img/mr-site4.png';
import Image29 from '../assets/img/mr-site5.png';
import Image30 from '../assets/img/mr-site1.png';
import Image31 from '../assets/img/wl-site.png';
import Image32 from '../assets/img/wl-site1.png';
import Image33 from '../assets/img/wl-site2.png';
import Image34 from '../assets/img/wl-site3.png';
import Image35 from '../assets/img/wl-site5.png';
import Image36 from '../assets/img/wl-site6.png';
import Image37 from '../assets/img/wl-site7.png';
import Image38 from '../assets/img/wl-site8.png';
import Image39 from '../assets/img/wl-site9.png';






export default function PastAemWork() {
  return (
    <>

      <div className='aem-work'>
        {/* <div className='side-by-side'><div className='alignleft para'>I was part this dev team I activly involved in develping following components listed below</div></div> */}
        {/* Start card 1 */}
        <div className='projects project_1'>
          <div className='column2 Project_details pgrid-container'>
            <div className='pgriditem1 project-title'><h2>SPECTRUM.COM</h2><a href='https://www.spectrum.com' target='blank'>www.spectrum.com</a></div>
            <h2 className='titleV1 pgriditem2'>Hero Module</h2>
            <div className='row pgriditem3'>
              <div className='project_screenshot'>
                <img src={Image1} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem4'>
              <p className='component_description'> Hero component is a flexible but advanced component that can combine images, colours, text, links and calls to action. Used for splashy home page banners, the hero can be used to separate sections on landing pages, or for temporary or promotional content. </p>
              <p className='component_description'> Look and feel and layout/orientaion of content can be changed by configuring via Daialog and vis STYLE system </p>


            </div>
            {/* <div className='pgriditem4'>
              <h3>Authorig Rules</h3>
              <ul>
                <li>Ensure you select the correct heading level for the title (H1 or H2)</li>
                <li>Chose photos that have a strong point of focus. </li>
                <li>Always check the mobile display of your hero. This can be done by shrinking your browser window.</li>
                <li>If the text is hard to read, either change to a less busy image, add text contrast or add an overlay. </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* Start card 2 */}
        <div className='projects project_1'>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem2'>Card Module</h2>
            <div className='row pgriditem3'>

              <div className='project_screenshot '>
                <img src={Image2} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem4'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            {/* <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* Start card 3 */}
        <div className='projects project_1'>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem2'>Card Module - Price Card</h2>
            <div className='row pgriditem3'>

              <div className='project_screenshot '>
                <img src={Image3} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem4'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            {/* <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* Start card 4*/}
        <div className='projects project_1'>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem2'>Package Bundle Deal Setector</h2>
            <div className='row pgriditem3'>

              <div className='project_screenshot '>
                <img src={Image4} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem4'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            {/* <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Start card 5*/}
        <div className='projects project_1'>

          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem2'>FAQ Accordion</h2>
            <div className='row pgriditem3'>

              <div className='project_screenshot '>
                <img src={Image5} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem4'>
              <p className='component_description'> The accordion component should support a hierarchy with headers and corresponding content sections.
                Headers must be clickable, triggering the expansion or collapse of their related content.
                The accordion should have a default style but should also be customizable to fit various website themes.
                Animated transitions for expanding and collapsing sections would enhance the user experience.
                Responsive behavior is essential; the accordion should adapt seamlessly to various screen sizes, including mobile, tablet, and desktop.
                It should be lightweight, ensuring that it doesn’t significantly affect page load times.</p>
            </div>
            {/* <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* Start card 6*/}
        <div className='projects project_1'>

          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem2'>Web Lead Forms</h2>
            <div className='row pgriditem3'>

              <div className='project_screenshot '>
                <img src={Image6} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem4'>
              <p className='component_description'>AEM Forms - These Web lead  form are been implemented to capture client date to take various markeing decision.these forms authored as experience fragments so thats it can be consume in multiple pages </p>

            </div>
            {/* <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className='projects project_1'>
          <div className='column2 Project_details '>
            <div className='project-title'><h2>PENFED CREDIT UNION</h2><a href='https://www.penfed.org' target='blank'>www.penfed.org</a></div>
            <h2 className='titleV1 pgriditem2'>Compenents</h2>
            <div className='project-view-grid'>
              <div><img src={Image7} alt="hero Banner" /></div>
              <div><img src={Image8} alt="hero Banner" /></div>
              <div><img src={Image9} alt="hero Banner" /></div>
              <div><img src={Image10} alt="hero Banner" /></div>
              <div><img src={Image13} alt="hero Banner" /></div>
              <div><img src={Image16} alt="hero Banner" /></div>
              <div><img src={Image17} alt="hero Banner" /></div>
              <div><img src={Image18} alt="hero Banner" /></div>

            </div>
            <h2 className='titleV1 pgriditem2'>Calculators</h2>
            <div className='project-view-grid'>
              <div><img src={Image11} alt="hero Banner" /></div>
              <div><img src={Image12} alt="hero Banner" /></div>
              <div><img src={Image14} alt="hero Banner" /></div>
              <div><img src={Image15} alt="hero Banner" /></div>
            </div>

          </div>
        </div>
        <div className='projects project_1'>
          <div className='column2 Project_details '>
            <div className='project-title'><h2>ALLY BANK</h2><a href='https://www.ally.com' target='blank'>www.ally.com</a></div>
            <h2 className='titleV1 pgriditem2'>Compenents</h2>
            <div className='project-view-grid'>

              <div><img src={Image19} alt="hero Banner" /></div>

              <div><img src={Image21} alt="hero Banner" /></div>
              <div><img src={Image22} alt="hero Banner" /></div>
              <div><img src={Image23} alt="hero Banner" /></div>
              <div><img src={Image24} alt="hero Banner" /></div>
              <div><img src={Image25} alt="hero Banner" /></div>

            </div>

          </div>
        </div>

        <div className='projects project_1'>
          <div className='column2 Project_details '>
            <div className='project-title'><h2>Meraki</h2><a href='https://www.meraki.com' target='blank'>www.meraki.com</a></div>
            <h2 className='titleV1 pgriditem2'>Compenents</h2>
            <div className='project-view-grid'>
              <div><img src={Image26} alt="hero Banner" /></div>
              <div><img src={Image27} alt="hero Banner" /></div>
              <div><img src={Image28} alt="hero Banner" /></div>
              <div><img src={Image29} alt="hero Banner" /></div>
              <div><img src={Image30} alt="hero Banner" /></div>


            </div>

          </div>
        </div>

        <div className='projects project_1'>
          <div className='column2 Project_details '>
            <div className='project-title'><h2>Wiley</h2><a href='https://www.wiley.com' target='blank'>www.wiley.com</a></div>
            <h2 className='titleV1 pgriditem2'></h2>
            <div className='project-view-grid'>
              <div><img src={Image32} alt="hero Banner" /></div>
              <div><img src={Image33} alt="hero Banner" /></div>
              <div><img src={Image34} alt="hero Banner" /></div>
              <div><img src={Image35} alt="hero Banner" /></div>
              <div><img src={Image36} alt="hero Banner" /></div>
              <div><img src={Image37} alt="hero Banner" /></div>
              <div><img src={Image38} alt="hero Banner" /></div>
              <div><img src={Image39} alt="hero Banner" /></div>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}
