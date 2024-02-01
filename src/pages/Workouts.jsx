import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Title from './components/Head';
import React from 'react';
import styles from '../styles/Workouts.module.css';
import { BodyWorkouts } from './components/BodyWorkouts';

const Workouts = () => {
  return (

   <>
      <Title />
     
      <Sidebar />
      <BodyWorkouts/>
    
      <Navbar />
   </>
      
   
   
      
  );
};

export default Workouts;
