import React, { Component } from 'react';
import Webdevelopment from "../components/Webdevelopment"
import SliderSection from "../components/SliderSection"
import WorkSection from "../components/WorkSection"
import OurService from "../components/OurService"
import AboutUs from "../components/AboutUs"
import Features from "../components/Features"
import SubService from "../components/SubService"
import universe from '../image/universe.jpg'
class Home extends Component {
    render() {
        return (
            <>
            <div>
                        <div class="section1Content align-items-center d-flex justify-content-center">
                        <img src={universe}></img>
                        <div class="contentDiv">
                            <h1>Avenger Await</h1>
                            <p></p>
                            <button class="GET_STARTED">GET STARTED</button>
                            <button class="WATCH_TRAILER">WATCH TRAILER  <span><i class="fas fa-play-circle" ></i></span></button>

                        </div>
                        </div>
                       </div>
         <Webdevelopment></Webdevelopment>
     <SliderSection></SliderSection>
      <WorkSection></WorkSection>
      <OurService></OurService>
      <AboutUs></AboutUs>
      <SubService></SubService>
            </>
        );
    }
}

export default Home;