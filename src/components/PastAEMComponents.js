import React from 'react'
import '../assets/style/ProjectsGrid.css'
import Image1 from '../assets/img/responsive-column1.png'
import Image2 from '../assets/img/accodion.png'
import Image3 from '../assets/img/cardcopm.png'
import Image4 from '../assets/img/button.jpg'
import Image5 from '../assets/img/heading.png'
import Image6 from '../assets/img/leadForm.png'
import Subnavbar from './NavBarSub'
import AEMcomponentList from './AEMcomponentList'

export default function PastAEMComponents() {
  return (
    <div className='body__container aem-work'>
      <div className='heading'><h1>Components </h1><div className='alignleft para'>I was part this dev team I activly involved in development/maintainance/re-skining components listed below</div></div>
      {/* Start card 1 */}
      <Subnavbar />
      <div className='projects project_1'>
        <div className='column1 project_name'><h2>PenFed</h2><div><a href='www.spectrum.com' target='blank'>www.penfed.org</a></div></div>
        <div className='column2 Project_details'><AEMcomponentList /></div>
      </div>
      <div className='projects project_1'>
        <div className='column1 project_name'><h2>PenFed</h2><div><a href='www.spectrum.com' target='blank'>www.penfed.org</a></div></div>
        <div className='column2 Project_details pgrid-container'>
          <h2 className='titleV1 pgriditem1'>Column Control Component</h2>
          <div className='row pgriditem2'>

            <div className='project_screenshot'>
              <img src={Image1} alt="hero Banner" />
            </div>
          </div>
          <div className='row pgriditem3'>
            <p className='component_description'> The Column Control component is used to lay out content side-by-side in columns.  It allows you to choose from a selection of multiple column layouts and defaults to a single column.</p>



          </div>
          <div className='pgriditem4'>
            <h3>Authoring Guideliness</h3>
            <ul>
              <li>No gutter: remove the white space between columns</li>
              <li>Margin: increase the white space between columns (only supported with certain configurations; see the component for details)</li>
              <li>Equal height: make components inside columns the same height</li>
              <li>Responsive settings: set the number of columns to ‘stack‘ vertically when the page is viewed on a tablet or mobile phone. This depends on the number of columns since tablets can typically accommodate more content on a wider screen vs. a phone. If in doubt, leave the settings at the default values </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start card 2 */}
      <div className='projects project_1'>
        <div className='column1 project_name'></div>
        <div className='column2 Project_details pgrid-container'>
          <h2 className='titleV1 pgriditem1'>Accordion Panel component</h2>
          <div className='row pgriditem2'>

            <div className='project_screenshot '>
              <img src={Image2} alt="hero Banner" />
            </div>
          </div>
          <div className='row pgriditem3'>
            <p className='component_description'> The Accordion Panel component is used to hold content within a panel that can be expanded or collapsed. This is ideal for content that does not need to be exposed all at once and is useful for saving space on a page.</p>
            <p className='component_description'> Basically these cars use css <b>Grid layout</b> you can configure to have more than 3 cards also configure the arrengment of cards via configuratin dialog.</p>


          </div>
          <div className='pgriditem4'>
            <h3>Authoring Guidelines</h3>
            <ul>
              <li>Header: This is the text that will show in the accordion panel's header</li>
              <li>Header style: Select an option from the drop-down list</li>
              <li>An accordion panel is a container that can hold a collection of components so it can display different types of content such as text, images, tables, media, buttons, etc.</li>
              <li>Components are added into the drop zone which appears as a dashed rectangle inside the accordion panel</li>
              <li>Accordions should be used for content of “equal weight” that's not required to be seen all at once, for example FAQ, steps in a process or audience-specific informatio</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start card 3 */}
      <div className='projects project_1'>
        <div className='column1 project_name'></div>
        <div className='column2 Project_details pgrid-container'>
          <h2 className='titleV1 pgriditem1'>Card Module</h2>
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
              <li>Equal height adjusts all cards in a group so they appear with the same height regardless of image size and the amount of text.</li>
              <li>Displays cards according to their natural heights. Use masonry when cards have images of different sizes, such as artwork or book covers.</li>
              <li>You can specify how many columns appear on desktop, tablet and mobile</li>
              <li>Don't include a button if you want the entire card to be clickable. In the Call to action section of the Text tab, ensure the Button text is blank.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start card 4*/}
      <div className='projects project_1'>
        <div className='column1 project_name'></div>
        <div className='column2 Project_details pgrid-container'>
          <h2 className='titleV1 pgriditem1'>Button</h2>
          <div className='row pgriditem2'>

            <div className='project_screenshot '>
              <img src={Image4} alt="hero Banner" />
            </div>
          </div>
          <div className='row pgriditem3'>
            <p className='component_description'> The Button component is a stand-alone hyperlink. It can be formatted a number of ways and is used as a call-action (CTA), i.e. drive web visitors to other pages. </p>
          </div>
          <div className='pgriditem4'>
            <h3>Authoring Guidelines</h3>
            <ul>
              <li>Only use the Button block when placing buttons side by side using a column control or tiles.</li>
              <li>Check equal height in the column control when placing buttons side-by-side</li>
              <li>In desktop button gets the width of the content and mobile its 100%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Start card 5*/}
      <div className='projects project_1'>
        <div className='column1 project_name'></div>
        <div className='column2 Project_details pgrid-container'>
          <h2 className='titleV1 pgriditem1'>Title component</h2>
          <div className='row pgriditem2'>

            <div className='project_screenshot '>
              <img src={Image5} alt="hero Banner" />
            </div>
          </div>
          <div className='row pgriditem3'>
            <p className='component_description'> The Title component allows you to insert the title of the page as a header. You may also edit the text within the Title component if you wish.  However, once you have made changes to the Title component text, it will no longer inherit future changes to the actual page title. The Title component includes six preformatted header sizes.</p>

          </div>
          <div className='pgriditem4'>
            <h3>Authoring Guidelines</h3>
            <ul>
              <li>The sizes range from H1 to H6 and follow a large-to-small hierarchy, i.e., H1, H2, H3, H4, *H5, and *H6 — where the most important (and largest) heading is an H1 and the least important (and smallest) one is H6</li>
              <li>Each header size looks different and has a specific purpose on a web page.</li>
              <li>A subtitle can be H2 to H4 depnds upon context</li>
              <li>A way to break up large sections of body text into subsections and those section title can be H3 - H4</li>

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
  )
}
