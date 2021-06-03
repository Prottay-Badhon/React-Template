import React, { Component, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import universe from "../image/universe.jpg";
import webPic1 from "../image/webPic1.jpeg"
import webPic2 from "../image/webPic2.jpeg"
import webPic3 from "../image/webPic3.jpg"
import webPic4 from "../image/webPic4.jpeg"
import webPic5 from "../image/webPic5.jpg"

import "../css/Webdev.css"
class Webdevelopment extends Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render() {
       
        return (
            <>
               <div class="container webdev">
                   <div class="text-center  mb-5">
                       <h3>
                       Build Your Skill  Grow Up With Energy ! 
                       </h3>
                   </div>
                   <div class="row px-5">
                    <div class="col-lg-6">
                        <div class="card" data-aos="fade-right">
                        <img src={webPic1} class="img-fluid"></img>
                        <div class="cardTitle"><p>Travel</p></div>
                        <div class="card-body">
                        <p>What is good everyone?</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    <div class="card" data-aos="fade-left">
                    <img src={webPic2} class="img-fluid"></img>
                    <div class="cardTitle"><p>Travel</p></div>
                    <div class="card-body">
                     <p>What is good everyone?</p>
                    </div>
                    </div>
                    </div>

                   </div>
                   <div class="row px-5 mt-5">
                    <div class="col-lg-4">
                        <div class="card" data-aos="fade-right">
                        <img src={webPic3} class="img-fluid"></img>
                        <div class="cardTitle"><p>Travel</p></div>
                        <div class="card-body">
                        <p>What is good everyone?</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="card" data-aos="fade-up">
                    <img src={webPic4} class="img-fluid"></img>
                    <div class="cardTitle"><p>Travel</p></div>
                    <div class="card-body">
                     <p>What is good everyone?</p>
                    </div>
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="card" data-aos="fade-left">
                    <img src={webPic5} class="img-fluid"></img>
                    <div class="cardTitle"><p>Travel</p></div>
                    <div class="card-body">
                     <p>What is good everyone?</p>
                    </div>
                    </div>
                    </div>

                   </div>
                </div> 
            </>
        );
    }
}

export default Webdevelopment;