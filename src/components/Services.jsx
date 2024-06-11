import React from 'react';

import mobileImage from '../icons/mobile.png';

import webImage from '../icons/web.png';

import artImage from '../icons/art.png';






const Services = () => (

 <section id="services" className="services-section">

   <h2 className="services-header">Services</h2>

   <p>As a dedicated application developer, I offer a range of services to help bring your ideas to life with efficient and innovative software solutions.</p>




   <h3 className="offer-header">What I Offer</h3>




   <div className="services-container">

     <div className="service-box">

       <img src={mobileImage} alt="Mobile App Development" className="service-icon1" />

       <h4>Mobile App Development</h4>

       <h5>I design and develop mobile applications for both iOS and Android platforms.</h5>

       <ul>

         <p>iOS App Development: Building high-performance and user-friendly apps using SwiftUI.</p>

         <p>Android App Development: Creating quality android applications using kotlin with experience in jetpack compose and XML.</p>

       </ul>

     </div>




     <div className="service-box">

       <img src={webImage} alt="Web Development" className="service-icon" />

       <h4>Web Development</h4>

       <h5>I create responsive and user-friendly websites tailored to your needs.</h5>

       <ul>

         <p>Front-End Development: Using HTML, CSS, JavaScript to build interactive and visually appealing interfaces.</p>

         <p>Back-End Development: Some experience with relational and non-relational databases, with strong familiarity in using Firebase for real-time data storage and synchronization..</p>

       </ul>

     </div>




     <div className="service-box">

       <img src={artImage} alt="UX/UI Design" className="service-icon" />

       <h4>UX/UI Design</h4>

       <h5>Designing intuitive and engaging user experiences, using the latest design standards and principles.</h5>

       <ul>

         <p>Figma App Design: Highly familiar with designing applications using Figma, with experience in both school and business projects.</p>

         <p>User Experience Optimization: Extensive knowledge in designing user-friendly applications.</p>

       </ul>

     </div>

   </div>

 </section>

);




export default Services;
