import React from 'react';
import '../assets/style/ProjectsGrid.css'
import MovieComp from '../reactSamples/movieComp';
import Subnavbar from './NavBarSub'
import Image1 from '../assets/img/specrum-hero.png'
import Image2 from '../assets/img/specrum-cardv3.png'
import Image3 from '../assets/img/specrum-card4.png'
import Image4 from '../assets/img/specrum-package.png'
import Image5 from '../assets/img/specrum-accordion.png'
import Image6 from '../assets/img/leadForm.png'


export default function PastAemWork() {
  return (
    <>

      <div className='body__container aem-work'>
        <div className='heading'><h1>Adobe AEM Projects </h1><div className='alignleft para'>I was part this dev team I activly involved in develping following components listed below</div></div>
        {/* Start card 1 */}
        <Subnavbar />
        <div className='projects project_1'>
          <div className='column1 project_name'><h2>Spectrum</h2><div><a href='www.spectrum.com' target='blank'>www.spectrum.com</a></div></div>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem1'>Hero Module</h2>
            <div className='row pgriditem2'>

              <div className='project_screenshot'>
                <img src={Image1} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem3'>
              <p className='component_description'> Hero component is a flexible but advanced component that can combine images, colours, text, links and calls to action. Used for splashy home page banners, the hero can be used to separate sections on landing pages, or for temporary or promotional content. </p>
              <p className='component_description'> Look and feel and layout/orientaion of content can be changed by configuring via Daialog and vis STYLE system </p>


            </div>
            <div className='pgriditem4'>
              <h3>Authorig Rules</h3>
              <ul>
                <li>Ensure you select the correct heading level for the title (H1 or H2)</li>
                <li>Chose photos that have a strong point of focus. </li>
                <li>Always check the mobile display of your hero. This can be done by shrinking your browser window.</li>
                <li>If the text is hard to read, either change to a less busy image, add text contrast or add an overlay. </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start card 2 */}
        <div className='projects project_1'>
          <div className='column1 project_name'></div>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem1'>Card Module</h2>
            <div className='row pgriditem2'>

              <div className='project_screenshot '>
                <img src={Image2} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem3'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start card 3 */}
        <div className='projects project_1'>
          <div className='column1 project_name'></div>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem1'>Card Module version 2</h2>
            <div className='row pgriditem2'>

              <div className='project_screenshot '>
                <img src={Image3} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem3'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start card 4*/}
        <div className='projects project_1'>
          <div className='column1 project_name'></div>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem1'>Card Module</h2>
            <div className='row pgriditem2'>

              <div className='project_screenshot '>
                <img src={Image4} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem3'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Start card 5*/}
        <div className='projects project_1'>
          <div className='column1 project_name'></div>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem1'>Card Module</h2>
            <div className='row pgriditem2'>

              <div className='project_screenshot '>
                <img src={Image5} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem3'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start card 6*/}
        <div className='projects project_1'>
          <div className='column1 project_name'></div>
          <div className='column2 Project_details pgrid-container'>
            <h2 className='titleV1 pgriditem1'>Card Module</h2>
            <div className='row pgriditem2'>

              <div className='project_screenshot '>
                <img src={Image6} alt="hero Banner" />
              </div>
            </div>
            <div className='row pgriditem3'>
              <p className='component_description'> A card is used as a call to action (CTA) to drive traffic to different web pages. Though each card represents a single idea, we typically use cards in groups of at least two. the cards within a card deck should all link to the same type of pages (e.g., news stories). </p>
              <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


            </div>
            <div className='pgriditem4'>
              <h3>Authoring Guidelines</h3>
              <ul>
                <li>The cards within a card deck are equal in rank.</li>
                <li>A card must contain a hyperlink. If linking to an external web site or a PDF, check link target to open in a new tab.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Keep the text brief. The point of a card is to entice the user to click through to more information on a topic.</li>
                <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
