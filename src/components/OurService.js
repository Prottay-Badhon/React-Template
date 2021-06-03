import React, { Component } from 'react';
import {motion} from "framer-motion"
import "../css/OurService.css"
class OurService extends Component {
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
      }
    render() {
        const pathVariant = {
            hidden: {
               pathLength: 0,
                fill:'turquoise'
            },           
            visible:{
                fill:'none',

                pathLength: 1,
             transition:{
                 duration: 3,
                 ease: 'easeInOut'
             }
            }
        }
        return (
            <>
                <div class="ourservice mt-5 py-4 container">
                    <div class="row align-items-center justify-content-center">
                        <div class="font-italic">
                        <h2>Our Services</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center py-5 px-5">
                        <div class="col-lg-4">
                        <div class="media ">
                        <motion.svg  class="fa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <motion.path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                        variants={pathVariant}
                        initial='hidden'
                        animate={this.state.scroll ? 'visible': 'hidden'}
                        fill='none'
                        stroke='turquoise'
                        strokeWidth='20'

                        />
                        </motion.svg>
                            <div class="media-body px-4">
                                <h5 class="mt-0">Web Design</h5>
                                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                  <p><a href="#">Read More</a></p>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                        <div class="media ">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fa">
                        <motion.path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                         variants={pathVariant}
                         initial='hidden'
                         animate={this.state.scroll ? 'visible': 'hidden'}
                         fill='none'
                         stroke='turquoise'
                         strokeWidth='30'
                        />
                        </motion.svg>
                            <div class="media-body px-4">
                                <h5 class="mt-0">Ecommerce</h5>
                                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                  <p><a href="#">Read More</a></p>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                        <div class="media ">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" class="fa" viewBox="0 0 512 512">
                        <motion.path d="M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"
                         variants={pathVariant}
                         initial='hidden'
                         animate={this.state.scroll ? 'visible': 'hidden'}
                         fill='none'
                         stroke='turquoise'
                         strokeWidth='20'
                        />
                        </motion.svg>
                            <div class="media-body px-4">
                                <h5 class="mt-0">Web APP</h5>
                                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                  <p><a href="#">Read More</a></p>
                            </div>
                            </div>

                            
                        </div>


                        
                    </div>

                    <div class="row justify-content-center py-5 px-5">
                        <div class="col-lg-4">
                        <div class="media ">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" class="fa" viewBox="0 0 384 512">
                        <motion.path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                         variants={pathVariant}
                         initial='hidden'
                         animate={this.state.scroll ? 'visible': 'hidden'}
                         fill='none'
                         stroke='turquoise'
                         strokeWidth='20'
                        />
                        </motion.svg>
                            <div class="media-body px-4">
                                <h5 class="mt-0">Mobile APP</h5>
                                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                  <p><a href="#">Read More</a></p>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                        <div class="media ">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" class="fa" viewBox="0 0 512 512">
                        <motion.path d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"
                        variants={pathVariant}
                        initial='hidden'
                        animate={this.state.scroll ? 'visible': 'hidden'}  
                        stroke='turquoise'
                        strokeWidth='20'
                        />
                        </motion.svg>
                            <div class="media-body px-4">
                                <h5 class="mt-0">Music Media</h5>
                                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                  <p><a href="#">Read More</a></p>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                        <div class="media ">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" class="fa" viewBox="0 0 512 512">
                        <motion.path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                            variants={pathVariant}
                            initial='hidden'
                            animate={this.state.scroll ? 'visible': 'hidden'}   
                            fill='none'
                            stroke='turquoise'
                            strokeWidth='30'
                        />
                        </motion.svg>
                            <div class="media-body px-4">
                                <h5 class="mt-0">Developer Mind</h5>
                                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                  <p><a href="#">Read More</a></p>
                            </div>
                            </div>

                            
                        </div>


                        
                    </div>


                </div>
                <hr></hr>
            </>
        );
    }
}

export default OurService;