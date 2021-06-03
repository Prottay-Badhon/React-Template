import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Webdevelopment from "./components/Webdevelopment.js"
import SliderSection from "./components/SliderSection"
import WorkSection from "./components/WorkSection"
import OurService from "./components/OurService"
import AboutUs from "./components/AboutUs"
import Features from "./components/Features"
import SubService from "./components/SubService"
import Home from './page/Home'
import AboutUsPage from './page/AboutUs'

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>
      </BrowserRouter>
    
    

     <Footer></Footer>
    </div>
  );
}

export default App;
