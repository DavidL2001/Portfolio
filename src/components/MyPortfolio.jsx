import React from 'react';

import iosImage from '../icons/ios.png';

import androidImage from '../icons/android.png';

import webImage from '../icons/dator.png';




const Portfolio = () => (

 <section id="portfolio" className="portfolio-section">

   <h2 className="portfolio-header">Portfolio</h2>

   <p>These are some projects I have been a part of during my time in the Application Development program.</p>




   <div className="portfolio-images">

     <div className="portfolio-item">

       <img src={iosImage} alt="Gym chatting app for iOS" className="portfolio-icon" />

       <h3>Gym chatting app for iOS</h3>

     </div>

     <div className="portfolio-item">

       <img src={androidImage} alt="Image support app for Android" className="portfolio-icon" />

       <h3>Image support app for Android</h3>

     </div>

     <div className="portfolio-item">

       <img src={webImage} alt="Movie rental shop page for web" className="portfolio-icon-web" />

       <h3>Movie rental shop page for web</h3>

     </div>

   </div>




   <h3 className="projects-header">Projects</h3>




   <div className="project">

     <img src={iosImage} alt="Gym chatting app for iOS" className="project-image" />

     <div className="project-details">

       <h4>Gym chatting app for iOS</h4>

       <p>This is a SwiftUI iOS application that I developed entirely on my own while studying at IT-Högskolan. The app, called Gym-Chatting, is designed specifically for gym environments. Its primary purpose is to facilitate communication between members and
staff at local gyms. With Gym-Chatting, users can easily connect with fellow gym-goers and staff members, fostering good communication and the potential to build friendships. Find your gym partner and enhance your gym experience with better connections!</p>

       <p>Check it out here on <a href="https://github.com/DavidL2001/GymChattingApp" target="_blank" rel="noopener noreferrer">GitHub!</a></p>

     </div>

   </div>




   <div className="project1">

     <img src={androidImage} alt="Image support app for Android" className="project-image" />

     <div className="project-details">

       <h4>Image support app for Android</h4>

       <p>This is a Kotlin Jetpack Compose Android application that I developed in collaboration with the start-up company “Junico” during my seven-month internship period offered by IT-Högskolan. The app, called BildSchema, is a Swedish image support application
designed to help users create custom schedules with the assistance of images. This application is specifically aimed at individuals with neuropsychiatric disabilities, providing a valuable tool to enhance their daily organization and independence. This internship
period was very valuable as I gained extensive knowledge in agile methodologies, including Scrum and Kanban.</p>

       <p>This project is still in development but will be released on Google Play soon.</p>

     </div>

   </div>




   <div className="project1">

     <img src={webImage} alt="Movie rental shop page for web" className="project-image-web" />

     <div className="project-details">

       <h4>Movie rental webshop</h4>

       <p>This is a JavaScript React web application that I developed in collaboration with a group of fellow app developer students as a group project. The core purpose of this project was to understand and develop an application using APIs. The web app allows
users to search through a large library of movies and select one or more to rent. This project provided valuable experience in API integration and team collaboration.

(This was just a school project and not a real product) Check it out <a href="https://aksellofstedtnielsen.github.io/WebbAppProject/#/" target='_blank' rel='noopener noreferrer'>here!</a></p>

     </div>

   </div>

 </section>

);




export default Portfolio;
