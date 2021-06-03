import React, { Component } from 'react';
import "../css/Footer.css"
class Footer extends Component {
    scorllToTop=()=>{
		window.scrollTo(0,0)
	}
    render() {
        return (
            <>
                <div class="footer">
                   <div class='up_button' onClick={this.scorllToTop}>
                     <i class='fa fa-angle-up'></i>
                   </div>
                <div class="px-5 py-5">
                <div class="row">
                <div class="footerContent1 col-lg-12 d-flex justify-content-center align-items-center">
                    <div class="text-center">
                    <h4>Join the Avenger newsLetter to receive our best vacation deal</h4>
                    <p>You can subscribe at Any time</p>
                    <form class="form">
                    <div class="input-group">
                    <input class="form-control" placeholder="Your Email"></input>
                    <button class="btn btn-danger btn-subscribe">Subscribe</button>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
                <div class="footerContent2 row">
                <div class="col-lg-3 col-sm-6">
                    <ul>
                    <h3>About Us</h3>
                        <li>How i t works </li>
                        <li>Testmonial</li>
                        <li>Carrer</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div class="col-lg-3 col-sm-6">
                    <ul>
                         <h3>Our Services</h3>
                        <li>Web development</li>
                        <li>App development</li>
                        <li>Graphics design</li>
                        <li>Animation</li>
                    </ul>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <ul>
                        <h3>Contact Us</h3>
                        <li>How i t works </li>
                        <li>Testmonial</li>
                        <li>Carrer</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <ul>
                       <h3>Blog</h3>
                        <li>How i t works </li>
                        <li>Testmonial</li>
                        <li>Carrer</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
                <div class="row align-items-center justify-content-center mt-4">
                    <div class="footer_social_icon">
                    <ul>
                        <li><a href=""><i class="fa fa-facebook"></i></a></li>
                        <li><a href=""><i class="fa fa-youtube"></i></a></li>
                        <li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href=""><i class="fa fa-instagram"></i></a></li>
                        

                    </ul>
                    </div>
                </div>
                </div>
                
            </div>  
            </>
        );
    }
}

export default Footer;