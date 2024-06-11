import React, { useState, useEffect } from 'react';

import './App.css';

import Sidebar from './components/Navbar';

import Home from './components/Homepage';

import About from './components/About';

import Services from './components/Services';

import Portfolio from './components/MyPortfolio';

import Contact from './components/Contact';

import homeIconWhite from './icons/homewhite.png';

import homeIconRed from './icons/homered.png';

import aboutIconWhite from './icons/aboutwhite.png';

import aboutIconRed from './icons/aboutred.png';

import servicesIconWhite from './icons/servicewhite.png';

import servicesIconRed from './icons/servicered.png';

import portfolioIconWhite from './icons/portfoliowhite.png';

import portfolioIconRed from './icons/portfoliored.png';

import contactIconWhite from './icons/contactwhite.png';

import contactIconRed from './icons/contactred.png';




const App = () => {

 const [activeSection, setActiveSection] = useState('home');

 let scrollTimeout = null;




 const scrollToSection = (id) => {

   setActiveSection(id);

   const section = document.getElementById(id);

   if (section) {

     section.scrollIntoView({ behavior: 'smooth' });

   }

 };




 const getIcon = (section) => {

   switch (section) {

     case 'home':

       return activeSection === 'home' ? homeIconRed : homeIconWhite;

     case 'about':

       return activeSection === 'about' ? aboutIconRed : aboutIconWhite;

     case 'services':

       return activeSection === 'services' ? servicesIconRed : servicesIconWhite;

     case 'portfolio':

       return activeSection === 'portfolio' ? portfolioIconRed : portfolioIconWhite;

     case 'contact':

       return activeSection === 'contact' ? contactIconRed : contactIconWhite;

     default:

       return homeIconWhite;

   }

 };




 const handleScroll = () => {

   if (scrollTimeout) {

     clearTimeout(scrollTimeout);

   }




   scrollTimeout = setTimeout(() => {

     const sections = ['home', 'about', 'services', 'portfolio', 'contact'];

     const scrollPosition = window.scrollY + window.innerHeight / 2;




     for (const section of sections) {

       const element = document.getElementById(section);

       if (element) {

         const offsetTop = element.offsetTop;

         const offsetHeight = element.offsetHeight;




         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {

           setActiveSection(section);

           break;

         }

       }

     }

   }, 100);

 };




 useEffect(() => {

   window.addEventListener('scroll', handleScroll);

   return () => {

     window.removeEventListener('scroll', handleScroll);

     if (scrollTimeout) {

       clearTimeout(scrollTimeout);

     }

   };

 }, []);




 return (

   <div className="app-container">

     <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} getIcon={getIcon} />

     <div className="content">

       <section id="home"><Home /></section>

       <section id="about"><About /></section>

       <section id="services"><Services /></section>

       <section id="portfolio"><Portfolio /></section>

       <section id="contact"><Contact /></section>

     </div>

   </div>

 );

};




export default App;
