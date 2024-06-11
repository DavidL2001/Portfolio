import React from 'react';

import phoneIcon from '../icons/phone.png';

import emailIcon from '../icons/mail.png';

import linkedinIcon from '../icons/linkedin.png';




const Contact = () => (

 <section id="contact" className="contact-section">

   <h2 className="contact-header">Contact me</h2>

   <p className="contact-subheader">Have any questions?</p>

   <p className="contact-text">Contact me here!</p>




   <div className="contact-container">

     <div className="contact-item">

       <img src={phoneIcon} alt="Phone" className="contact-icon" />

       <p>073-597 20 32</p>

     </div>

     <div className="contact-item">

       <img src={emailIcon} alt="Email" className="contact-icon" />

       <p>David01Lindstrom@gmail.com</p>

     </div>

     <div className="contact-item">

       <img src={linkedinIcon} alt="LinkedIn" className="contact-icon1" />

       <a href="https://www.linkedin.com/in/david-lindstr%C3%B6m-860389286/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>

     </div>

   </div>

 </section>

);




export default Contact;
