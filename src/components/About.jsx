import React, { useState } from 'react';

//import './App.css';




const About = () => {

 const [journeyVisible, setJourneyVisible] = useState(false);

 const [skillsVisible, setSkillsVisible] = useState(false);

 const [goalsVisible, setGoalsVisible] = useState(false);




 return (

   <section id="about" className="about-section">

     <h2 className="about-header">About Me</h2>

     <p className="about-intro">Hello! I'm David Lindström, a passionate and dedicated application developer. I recently completed a two-year Application Development program at IT-Högskolan in Stockholm, where I learned the fundamentals of creating efficient
and innovative software solutions.</p>




     <div className="collapsible-section">

       <div className="section-header-container">

         <h3 className="section-header">My Journey</h3>

         <button1 onClick={() => setJourneyVisible(!journeyVisible)}>{journeyVisible ? ' Show Less ' : ' Learn more '}</button1>

       </div>

       {journeyVisible && (

         <p className="collapsible-content">During my time at IT-Högskolan, I gained a comprehensive understanding of both front-end and back-end development. The curriculum covered a wide range of topics, including software design, coding principles, and development
methodologies. My hands-on projects allowed me to apply these principles in real-world scenarios, honing my problem-solving skills and technical expertise.</p>

       )}

     </div>




     <div className="collapsible-section">

       <div className="section-header-container">

         <h3 className="section-header">Skills and Expertise</h3>

         <button2 onClick={() => setSkillsVisible(!skillsVisible)}>{skillsVisible ? ' Show Less ' : ' Learn more '}</button2>

       </div>

       {skillsVisible && (

         <ul className="collapsible-content">

           <li>Front-End Development: Proficient in HTML, CSS, JavaScript and frameworks like React.</li>

           <li>Back-End Development: Experienced with Node.js and database systems like Firebase.</li>

           <li>Mobile App Development: Experienced with Kotlin, Swift, and frameworks like Jetpack Compose and SwiftUI.</li>

           <li>Version Control: Skilled in using Git and GitHub for version control and collaboration, I'm also familiar with Azure Devops.</li>

           <li>Agile Methodologies: Knowledgeable in agile practices, including Scrum and Kanban.</li>

         </ul>

       )}

     </div>




     <div className="collapsible-section">

       <div className="section-header-container">

         <h3 className="section-header">Professional Goals</h3>

         <button3 onClick={() => setGoalsVisible(!goalsVisible)}>{goalsVisible ? ' Show Less ' : ' Learn more '}</button3>

       </div>

       {goalsVisible && (

         <p className="collapsible-content">My goal is to leverage my skills and knowledge to develop applications that provide exceptional user experiences and meet the evolving needs of businesses and users. I am eager to continue learning and growing in
the field, and I look forward to contributing to innovative and impactful projects.</p>

       )}

     </div>

   </section>

 );

};




export default About;
