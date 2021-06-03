import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import "../css/Navbar.css";
import "../css/Section1.css";
import AboutUsPage from "../page/AboutUs";
import ContactUsPage from "../page/ContactUs"
import Service from '../page/Service'

import BlogPage from "../page/Blog"

import universe from "../image/universe.jpg"
import { BrowserRouter, Route, Link, NavLink, Switch} from "react-router-dom"; 
import Home from '../page/Home';


class Navbar extends Component {
    state={
        click:false,
        dropdown:false,
        dropdownService:false
    }
    clickHandeler=(x)=>{
    
        this.setState({
            click:x
        })
    }
    dropdownToggle=()=>{
        if(!this.state.dropdownService){
            this.setState({
                dropdown:!this.state.dropdown
            })
        }
       
    }
    dropdownService=()=>{
        if(!this.state.dropdown){
            this.setState({
                dropdownService:!this.state.dropdownService
            })
        }   
    }
    render() {
        return (
            <>
               <nav className="NavbarItems">
                   <h1 className="navbarIcon">React <i className="fab fa-react"></i></h1>
                   <div class="menu-icon" onClick={this.clickHandeler.bind(this,!this.state.click)}>
                    <i className={this.state.click ? "fas fa-times": "fas fa-bars" }></i>
                   </div>
                   <ul className={this.state.click? "activeStyle":"my-nav-menu"}>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/aboutUs" activeStyle={{fontWeight: "bold",color: "red"}}>About Us</NavLink></li>

                    <li><NavLink to="/contactUs"  activeStyle={{fontWeight: "bold",color: "red"}}>Contact</NavLink></li>
                    <li><NavLink to="/service"  activeStyle={{fontWeight: "bold",color: "red"}}>Services </NavLink></li>
                    
                   <li><NavLink to="/blog" activeStyle={{fontWeight: "bold",color: "red"}}>
                        Blog <i className={this.state.dropdown ? "": ""} onClick={this.dropdownToggle}></i>
                        </NavLink>
                    </li>

                   </ul>
                   </nav> 
                   {/* 
                   <div className={ this.state.dropdown? "dropdownShow": "dropdown"}  class="bg-dark">
                    <ul class="dropmenu">
                        <li class="dropList">Badhon</li>
                        <li class="dropList">Rafik</li>
                        <li class="dropList">Uzzal Vai</li>
                        <li class="dropList">Ripon Sarkar</li>
                        
                    </ul>
                   </div>

                   <div className={this.state.dropdownService? "serviceDropdownShow": "serviceDropdown"}>
                    <ul class="serviceDropMenu">
                        <li class="">Web development</li>
                        <li class="">App development</li>
                        <li class="">UI/UX Design</li>
                        <li class="">Freelancing</li>
                        
                    </ul>
                   </div>
                   */}
                   <Switch>
                        <Route exact path='/home' component={Home}></Route>
                        <Route exact path='/aboutUs' component={AboutUsPage}></Route>
                        <Route exact path='/contactUs' component={ContactUsPage}></Route>
                        <Route exact path='/blog' component={BlogPage}></Route>
                        <Route exact path='/service' component={Service}></Route>

                     </Switch>

                    {/*

                       <div className={ this.state.dropdown || this.state.dropdownService? "sectionshow": "section1"}>
                        <div class="section1Content align-items-center d-flex justify-content-center">
                        <img src={universe}></img>
                        <div class="contentDiv">
                            <h1>Avenger Await</h1>
                            <p></p>
                            <button class="GET_STARTED">GET STARTED</button>
                            <button class="WATCH_TRAILER">WATCH TRAILER  <span><i class="fas fa-play-circle"></i></span></button>

                        </div>
                        </div>
                       </div>
                   */}

            </>
        );
    }
}

export default Navbar;