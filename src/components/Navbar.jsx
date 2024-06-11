import React from 'react';




const Sidebar = ({ activeSection, scrollToSection, getIcon }) => (

 <div className="sidebar">

   <h1>David Lindström</h1>

   <nav>

     <ul>

       <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>

         <img src={getIcon('home')} alt="Home" className="icon" />

         Home

       </li>

       <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>

         <img src={getIcon('about')} alt="About me" className="icon" />

         About me

       </li>

       <li className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>

         <img src={getIcon('services')} alt="Services" className="icon" />

         Services

       </li>

       <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => scrollToSection('portfolio')}>

         <img src={getIcon('portfolio')} alt="Portfolio" className="icon" />

         Portfolio

       </li>

       <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>

         <img src={getIcon('contact')} alt="Contact me" className="icon" />

         Contact me

       </li>

     </ul>

   </nav>

 </div>

);




export default Sidebar;
