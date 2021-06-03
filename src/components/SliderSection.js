import React, { Component } from 'react';
import Slider from "react-slick"
import  "../css/Slider.css";
import webPic1 from "../image/webPic1.jpeg"
import webPic2 from "../image/webPic2.jpeg"
import webPic3 from "../image/webPic3.jpg"
import webPic4 from "../image/webPic4.jpeg"
import webPic5 from "../image/webPic5.jpg"
class SliderSection extends Component {
  
    state = {
        display: true,
      };
      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div class="sliderContent text-center py-4">
                <h2> Resizable Collapsible </h2>
            
           
           
            <div class="slider_Content_wrapper py-4">
              <Slider {...settings}>
              <div class="slider">
                   <img src={webPic1} class="img-fluid"></img>
                </div>
                <div class="slider">
                <img src={webPic2} class="img-fluid"></img>
                </div>
                <div class="slider">
                <img src={webPic3} class="img-fluid"></img>
                </div>
                 <div class="slider">
                <img src={webPic3} class="img-fluid"></img>
                </div>
               
              </Slider>
            </div>
          </div>
        );
            }


           
}

export default SliderSection;