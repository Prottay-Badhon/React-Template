import React, { Component } from 'react';
import { motion } from "framer-motion";
import "aos/dist/aos.css"
import "../css/AboutUs.css"
import face1 from "../image/face1.jpeg"
import face2 from "../image/face2.jpeg"
import face3 from "../image/face3.jpeg"
import badhon1 from "../image/badhon1.JPG"
import badhon2 from "../image/badhon2.JPG"


import Aos from 'aos';
class AboutUs extends Component {
    state={
        scroll:false
    }
    showAnimation=()=>{
        this.setState({
            scroll:!this.state.scroll
        })
    }
    componentDidMount(){
        window.addEventListener('scroll',this.showAnimation);
        Aos.init({
            duration:3000
        })
      }
    render() {
        
       
      

        const imageVarient={
            hover:{
                scale: 1.10,
                cursor:'pointer',
                transition:{
                    yoyo: Infinity,
                    duration: 1,

                }
            },
            visible:{
                scale: 1.1,
                transition:{
                    duration: 1,
                    yoyo:5
                }
            }
        }
        return (
            <>
           
           
                <div class="container py-5 aboutUs">
                
                
                    <div class="row justify-content-center font-italic">
                       <h2>Our Team</h2>
                    </div>
                    <div class="row py-5">
                        <div class="col-lg-4">
                        <div class="text-center text-muted">
                            <motion.img src={face1} class="rounded-circle"
                            drag
                            variants={imageVarient}
                            whileHover='hover'
                            animate={this.state.scroll ? 'visible': ''}
                            ></motion.img>

                            <div class="my-3">
                            Badhon
                              <p> Co-founder Of ColorLab</p>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur 
                                unde molestiae quidem provident voluptatum deleniti quo iste
                                 error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur. </p>
                            </div>
                            <div class="social_icon">
                                <div class=" rounded-circle"><i class="fa fa-facebook"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-youtube"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-twitter"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-instagram"></i> </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-lg-4">
                        <div class="text-center text-muted">
                            
                            <motion.img src={face3} class="rounded-circle"
                            drag
                            variants={imageVarient}
                            whileHover='hover'
                            animate={this.state.scroll ? 'visible': ''}
                            ></motion.img>

                            <div class="my-3">
                            Badhon
                              <p> Co-founder Of ColorLab</p>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur 
                                unde molestiae quidem provident voluptatum deleniti quo iste
                                 error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur. </p>
                            </div>
                            <div class="social_icon">
                                <div class=" rounded-circle"><i class="fa fa-facebook"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-youtube"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-twitter"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-instagram"></i> </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-lg-4">
                        <div class="text-center text-muted">
                           <motion.img src={face2} class="rounded-circle"
                           drag
                            variants={imageVarient}
                            whileHover='hover'
                            animate={this.state.scroll ? 'visible': ''}
                            ></motion.img>

                            <div class="my-3">
                            Badhon
                              <p> Co-founder Of ColorLab</p>
                            </div>
                            <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur 
                                unde molestiae quidem provident voluptatum deleniti quo iste
                                 error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur. </p>
                            </div>
                            <div class="social_icon">
                                <div class=" rounded-circle"><i class="fa fa-facebook"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-youtube"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-twitter"></i> </div>
                                <div class=" rounded-circle"><i class="fa fa-instagram"></i> </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutUs;