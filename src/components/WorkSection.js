import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../css/workSection.css";
import webPic1 from "../image/webPic1.jpeg"
import webPic2 from "../image/webPic2.jpeg"
import webPic3 from "../image/webPic3.jpg"
import webPic4 from "../image/webPic4.jpeg"
import webPic5 from "../image/webPic5.jpg"
import Slider from "react-slick"
import face1 from "../image/face1.jpeg"
import face2 from "../image/face2.jpeg"
import face3 from "../image/face3.jpeg"

class WorkSection extends Component {
    componentDidMount(){
        AOS.init({
          duration : 3000
        })
      }
    state={
        mouseOver:false
    }
    MouseOverController=()=>{
        this.setState({
            mouseOver: !this.state.mouseOver
        })
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true,
        }
        return (
            <>
                <div class="container work_section">
                    <div class="row">
                        <div class="col-lg-4 work_div" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                            <img class="img-fluid" src={webPic1}></img>     
                        </div>
                        <div class="col-lg-4 work_div" data-aos="flip-up">
                        <img class="img-fluid" src={webPic4}></img>                            
                        </div>
                        <div class="col-lg-4 work_div" data-aos="flip-right">
                        <img class="img-fluid" src={webPic5}></img>                            
                        </div>
                    </div>






                    <div class="black_div mt-5 container">
                        <div class="row py-5 align-items-center justify-content-center">
                            <div class="col-lg-6 pl-5">
                                <img class="img-fluid" src={webPic2}></img>
                            </div>
                            <div class="col-lg-6 pl-5">
                            <div class="row ">
                                <div class="col-lg-6">
                                <div>
                                     <h4><i class="fas fa-umbrella-beach"></i> Badhon</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                    <a href="">Read More</a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                <div>
                                <h4><i class="fas fa-toolbox"></i> Business</h4>
                                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                    <a href="">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-5">
                                <div class="col-lg-6">
                                <div>
                                <h4><i class="fas fa-hammer"></i> Project</h4>
                                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                    <a href="">Read More</a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                <div>
                                   <h4><i class="fas fa-wrench"></i> Setting</h4>

                                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                    <a href="">Read More</a>
                                    </div>
                                </div>
                            </div>

                            </div>

                           
                            
                        </div>
                    </div>


                <div class="testimonial container text-center mt-5">
                    <h2>Testimonial</h2>
                    <Slider {...settings}>
                   <div class="row">
                   <div class="WerkSlider">
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt
                   
                   
                        .</p>
                    <div class="sliderImg">
                       <img src={face3} class="rounded-circle"></img> 
                    </div>
                    </div>
                   </div>
                   <div class="row">
                   <div class="WerkSlider">
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                    <div class="sliderImg ">
                       <img src={face2} class="rounded-circle"></img> 
                    </div>
                    </div>
                   </div>
                   <div class="row">
                   <div class="WerkSlider">
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                    <div class="sliderImg ">
                       <img src={face1} class="rounded-circle"></img> 
                    </div>
                    </div>
                   </div>
                    
                    </Slider>
                </div>

                </div>
            </>
        );
    }
}

export default WorkSection;