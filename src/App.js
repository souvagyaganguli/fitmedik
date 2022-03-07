import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Reason from './components/Reasons/Reason';
import VideoJS from './components/VideoJS/VideoJS';
import Diseases from './components/Diseases_tracking/Diseases';
import Benefits from './components/Benefits/Benefits';
import Hospital from './components/Hospital';
import Dashboard from './components/Benefits/Dashboard';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact_Form/Contact';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright.js';
import Appscreens from './components/App_Screen/Appscreens';
import DigitalTwin from './components/DigitalTwin/DigitalTwin';
import Asset from './components/Asset';

function App() {
  return (
    <>
      <Navbar />
      <DigitalTwin />
      <Asset/>
      <Hospital/>
      <Dashboard/>
      <Appscreens/>
      <Benefits />
      <VideoJS />
      <Reason />
      {/* <Partners/> */}
      <Contact/>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
