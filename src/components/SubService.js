import React, { Component } from 'react';
import CountUp from 'react-countup';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/SubService.css'
class SubService extends Component {
    state={
        count: false
    }
    showAnimation=()=>{
        this.setState({count:!this.state.count})
    }

    componentDidMount(){
        window.addEventListener('scroll',this.showAnimation);
    }
    render() {
        return (
            <>
                <div>
                    <div className="subService">
                        <div className="darkOverlay">
                        <div class="row py-5 text-center  text-light justify-content-center align-items-center">
                            <div class="col-lg-3 col-md-6">
                                <div class="card" data-aos='flip-left'>
                                    <div><i class="fab fa-vuejs" style={{fontSize: '100px'}}></i></div>
                                    <div className="card-title">Vue Js</div>
                                    <div  class="card-body">
                                    <button>
                                     <CountUp prefix='$' end={this.state.count? '100':'99'} duration={5} />
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card" data-aos='flip-left'>
                                    <div><i class="fab fa-react" style={{fontSize: '100px'}}></i></div>
                                    <div className="card-title">React Js</div>
                                    <div  class="card-body">
                                    <button>
                                     <CountUp suffix='$'  end={this.state.count? '200':'199'} duration={5} />
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card" data-aos='flip-left'>
                                    <div><i class="fab fa-angular" style={{fontSize: '100px'}}></i></div>
                                    <div className="card-title">Angular</div>
                                    <div  class="card-body">
                                    <button>
                                     <CountUp prefix='$' end={this.state.count? '500':'499'} duration={5} />
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default SubService;