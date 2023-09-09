import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
};

export default App;