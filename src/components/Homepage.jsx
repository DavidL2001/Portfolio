import React from 'react';

import profileImage from '../icons/profile-image.png';

import styles from './Home.module.css';




const Home = () => (

 <section id="home" className={styles.homeSection}>

   <div className={styles.intro}>

     <div className={styles.info}>

       <h2>Hello, my name is <span className={styles.nameHighlight}>David Lindström</span></h2>

       <h3>I'm an <span className={styles.titleHighlight}>Application Developer</span></h3>

       <p>

         I'm a newly graduated application developer with a passion for creating innovative and efficient software solutions.

         With a solid foundation and hands-on experience in both front-end and back-end development, I am excited to embark on my professional journey and contribute to cutting-edge projects.

       </p>

     </div>

     <div className={styles.profilePicture}>

       <img src={profileImage} alt="Profile" />

     </div>

   </div>

 </section>

);




export default Home;
