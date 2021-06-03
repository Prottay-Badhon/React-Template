import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import AOS from 'aos';
import './css/AboutUs.css'
import { motion } from "framer-motion";
import 'aos/dist/aos.css'
import CountUp from 'react-countup';
import { Redirect } from 'react-router';
import Slider from "react-slick";
import face1 from '../image/face1.jpeg'
import face2 from '../image/face2.jpeg'
import face3 from '../image/face3.jpeg'

class AboutUs extends Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render() {
        const constVariant={
            hidden:{
                width:'0%'
            },
            visible:{
            
            }
        }
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return (
            <>
               <div class="aboutUsPage py-5 bg-light">
                   <div class="container">
                   <h1 className='text-center py-5 font-italic'>About Us</h1>

                       <div class='row justify-content-center align-items-center mt-5 counting_row'>
                           <div  class='col-lg-6 col-md-12'>
                                <div className="row">
                                    <div class='col-lg-6 happy_div'>
                                       <div class='card' data-aos='fade-up'>
                                     <h1>
                                         <CountUp prefix='' end='6000' duration={3} />
                                     </h1>
                                        <p>Happy Clients</p>
                                       </div>
                                    </div>
                                    <div class='col-lg-6'>
                                    <div class='card' data-aos='fade-up'>
                                    <h1>
                                    <CountUp prefix='' end='500' duration={3} />
                                    </h1> 
                                        <p>Project Done</p>
                                       </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div class='col-lg-6'>
                                       <div class='card' data-aos='fade-up'>
                                       <h1>   
                                         <CountUp prefix='' end='1000' duration={3} />
                                       </h1>
                                        <p>Cups of coffee</p>
                                       </div>
                                    </div>
                                    <div class='col-lg-6'>
                                    <div class='card' data-aos='fade-up'>
                                    <h1>
                                     <CountUp prefix='' end='8000' duration={3} />
                                    </h1> 
                                        <p>Working Hours</p>
                                       </div>
                                    </div>
                                </div>

                           </div>
                           <div class='col-lg-6 col-md-12 px-5' >
                              
                          <div class='row mt-5 py-5'>
                          <div data-aos='fade-up'>
                              <h5 class='mt-4'>ABOUT ME</h5>
                               <h1 class='font-italic'>A Frontend React Js & Backend Laravel Developer Based in Bangladesh</h1>
                               <p class="text-muted mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                              </div>
                              <div class='col-lg-6'>
                                    <table>
                                    <tr>
                                    <td>Name:</td>
                                    <td class='colorTd'>Badhon</td>
                                    </tr>
                                    <tr>
                                    <td>Date of Birth:</td>
                                    <td class='colorTd'>8th November, 1998</td>
                                    </tr>

                                    <tr>
                                    <td>Address:</td>
                                    <td class='colorTd'>
                                        Zero Point,Chittagong University 
                                    </td>
                                    </tr>

                                    
                                </table>
                             <button class='btn'>DOWNLOAD CV</button>
                              </div>

                              <div class='col-lg-6'>
                                    <table>
                                    <tr>
                                    <td>Zip Code:</td>
                                    <td class='colorTd'>1000</td>
                                    </tr>
                                    <tr>
                                    <td>Email:</td>
                                    <td class='colorTd'>ProttayBadhon54@gmail.com</td>
                                    </tr>

                                    <tr>
                                    <td>Phone:</td>
                                    <td class='colorTd'>
                                       01703512032
                                    </td>
                                    </tr>

                                    
                                </table>
                              </div>

                          </div>
                           </div>
                       </div>
                   </div>
                   <div class='container  mt-5'>
                     <div class=''>
                     <span style={{color: '#b59213',fontWeight: 'bold'}}>SKILLS</span>
                     <h1 className='font-weight-bold py-1'>My Skills</h1>
                     
                    <div class='row'>
                        <div class='col-lg-4'>
                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>Html</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='90' duration={10} /></span>
                                </div>

                                <div class='progress-bar'>
                                    <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '90%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>

                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>CSS</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='80' duration={10} /></span>

                                   
                                </div>
                                <div class='progress-bar' >
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '80%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>

                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>Laravel</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='70' duration={10} /></span>
                                </div>
                                <div class='progress-bar'>
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '70%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>
                        </div>
                        <div class='col-lg-4'>
                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>Javascript</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='65' duration={10} /></span>

                                </div>
                                <div class='progress-bar'>
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '65%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>

                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>React js</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='90' duration={10} /></span>

                                </div>
                                <div class='progress-bar'>
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '90%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>

                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>My SQL</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='85' duration={10} /></span>

                                </div>
                                <div class='progress-bar'>
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '85%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>

                        </div>
                        <div class='col-lg-4' >
                              <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title' >
                                    <span>Wordpress</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='50' duration={10} /></span>

                                </div>
                                <div class='progress-bar'>
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '50%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>

                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>SEO</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='40' duration={10} /></span>

                                </div>
                                <div class='progress-bar'>
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '40%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>

                                <div class='skill-item' data-aos='fade-up'>
                                <div class='skill-title'>
                                    <span>PHP</span>
                                    <span class='skill-percent'><CountUp suffix='%' start='0' end='80' duration={10} /></span>

                                </div>
                                <div class='progress-bar'>
                                <motion.span className='progress-percent' variants={constVariant} initial='hidden' animate={{ 
                                         width: '80%',
                                         transition:{
                                            duration: 10,
                                        }
                                    }}>

                                    </motion.span>
                                </div>
                                </div>
                        </div>
                    </div>
                   
                     </div>

                   </div>
                
                 <div>
                    <div class='customer_slider mt-5 py-5'>
                     <div class='container'> 

                    <Slider {...settings}>  
                        <div class='slider_div'>
                            <div class='card customer_card'>
                                <div class='card-title'>
                                    <img class='rounded-circle' src={face1}></img>
                                    <div class='title_content'>
                                        <h2>Badhon</h2>
                                        <p class=''>MARKETING MANAGER</p>
                                    </div>
                                </div>
                            <div class='card-body'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            </div>
                        </div>

                        <div class='slider_div'>
                            <div class='card customer_card'>
                                <div class='card-title'>
                                    <img class='rounded-circle' src={face2}></img>
                                    <div class='title_content'>
                                        <h2>Badhon</h2>
                                        <p class=''>MARKETING MANAGER</p>
                                    </div>
                                </div>
                            <div class='card-body'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            </div>
                        </div>

                        <div class='slider_div'>
                            <div class='card customer_card'>
                                <div class='card-title'>
                                    <img class='rounded-circle' src={face3}></img>
                                    <div class='title_content'>
                                        <h2>Badhon</h2>
                                        <p class=''>MARKETING MANAGER</p>
                                    </div>
                                </div>
                            <div class='card-body'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            </div>
                        </div>

                        <div class='slider_div'>
                            <div class='card customer_card'>
                                <div class='card-title'>
                                    <img class='rounded-circle' src={face2}></img>
                                    <div class='title_content'>
                                        <h2>Badhon</h2>
                                        <p class=''>MARKETING MANAGER</p>
                                    </div>
                                </div>
                            <div class='card-body'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            </div>
                        </div>

                        

                       

                        

                        
                    </Slider>
                    </div>
                    </div> 
                </div>

               
                </div> 
            </>
        );
    }
}
export default AboutUs