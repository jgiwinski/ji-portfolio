// import React from 'react';
import './App.scss';
// import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from '../Navbar/Navbar';
import { Header } from '../Header/Header'; 
import { Projects } from '../Projects/Projects'; 
import { WorkExp } from '../WorkExp/WorkExp';
import { Education } from '../Education/Education';
import { HobbiesMisc } from '../HobbiesMisc/HobbiesMisc';
import { Contact } from '../Contact/Contact';

export const App = () => {
  return (
    <Router>
      <Navbar />
        <main>
          <Header />
          <Projects />
          <WorkExp  />
          <Education />
          <HobbiesMisc />
          <Contact />
        </main>
    </Router>
  );
}

export default App;
