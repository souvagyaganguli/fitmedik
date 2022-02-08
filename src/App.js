import './App.css';
import Navbar from './components/Navbar/Navbar';
import Phone from './components/Phone';
import Reason from './components/Reasons/Reason';
import VideoJS from './components/VideoJS/VideoJS';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <>
    <Navbar/>
    <Statistics/>
    <Phone/>
    <Reason/>
    <VideoJS/>
    </>
  );
}

export default App;
