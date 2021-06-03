import React, { Component } from 'react';
import '../css/contactUs.css'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class ContactUs extends Component {
    render() {
        return (
            <>
            <div class='contactUs bg-light py-5'>
                <div class='text-center' style={{padding: '8rem'}}>
                    <h5 class='font-weight-bold text-muted'>Home<span> <i class='fa fa-angle-right'></i></span> Contact</h5>
                    <h1>Contact Us</h1>
                </div>
                <div class='container bg-white'>
                <div class='row  '>
                    <div class='col-lg-6'>
                   <h1> Contact us</h1>
                   <p class='text-muted'>
                        We're open for any suggestion or just to have a chat
                   </p>
                    <table class='table table-responsive'>
                        <tr>
                        <th>ADDRESS:</th>
                        <th>EMAIL:</th>
                        <th>PHONE:</th>

                        </tr>
                        <tr class=''>
                            <td><p class='text-muted'>198 West 21th Street, Suite 721 New York NY 10016</p></td>
                            <td>prottaybadhon54@gmail.com</td>
                            <td>+ 1235 2355 98</td>
                        </tr>
                    </table>
                    <div class=''>
                        <form class='contactForm'>
                            <div class='form-group'>
                                <input class='' placeholder='Enter Name' type='text'></input>
                            </div>
                            <div class='form-group'>
                                <input class='' placeholder='Email' type='email'></input>
                            </div>
                            <div class='form-group'>
                                <input class='' placeholder='Subject' type='text'></input>
                            </div>
                            <div class='form-group'>
                            <textarea class="" id="exampleFormControlTextarea1" rows="3" placeholder='send message'></textarea>
                            </div>
                            <div class='form-group'>
                                <button>SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                    </div> 
                    <div class='col-lg-6 px-0'>
                    <div class='map_row px-0'>
                        <Map google={this.props.google} zoom={14}>
                        
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            
                        </InfoWindow>
                        </Map>
                    </div>
                    </div>    
                </div>    
                </div>     
            </div>   
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC_FQ8P_A4OBlEQoxNaWxY7rD8Zt7WeTJw')
  })(ContactUs)