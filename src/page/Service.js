import React, { Component } from 'react';
import '../css/ServicePage.css'
import AOS from 'aos';
import { motion } from "framer-motion";
import 'aos/dist/aos.css'

class Service extends Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render() {
        return (
            <>
                <div class='servicePage bg-light' id="serviceContent">
                    <div class='row py-5 px-5 serviceRow'>
                        <div class='col-lg-3'>
                        <div class="card service_card" data-aos='flip-left'>
                        <i class="fad fa-atom-alt"></i>
                        <div class="card-body ">
                            <h5 class="card-title">Web development</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>

                        <div class='col-lg-3'>
                        <div class="card" data-aos='flip-left'>
                        <i class="fal fa-layer-group"></i>
                        <div class="card-body ">
                            <h5 class="card-title">Ethical Hacking</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>

                        <div class='col-lg-3'>
                        <div class="card" data-aos='flip-left'>
                        <i class="fad fa-chart-network"></i>
                        <div class="card-body ">
                            <h5 class="card-title">Computer Networking</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>

                        <div class='col-lg-3'>
                        <div class="card" data-aos='flip-left'>
                        <i class="fal fa-disease"></i>
                        <div class="card-body ">
                            <h5 class="card-title">Graphic Design</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>
                    </div>


                    <div class='row py-5 px-5'>
                        <div class='col-lg-3'>
                        <div class="card" data-aos='flip-left'>
                        <i class="fab fa-android"></i>
                        <div class="card-body ">
                            <h5 class="card-title">Apps development</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>

                        <div class='col-lg-3'>
                        <div class="card" data-aos='flip-left'>
                        <i class="fas fa-bug"></i>
                        <div class="card-body ">
                            <h5 class="card-title">Software Dev</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>

                        <div class='col-lg-3'>
                        <div class="card" data-aos='flip-left'>
                        <i class="fas fa-burn"></i>
                        <div class="card-body ">
                            <h5 class="card-title">Framer Motion</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>

                        <div class='col-lg-3'>
                        <div class="card" data-aos='flip-left'>
                        <i class="fab fa-apple"></i>
                        <div class="card-body ">
                            <h5 class="card-title">iOS Development</h5>
                            <p class="card-text pt-2">
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Service;