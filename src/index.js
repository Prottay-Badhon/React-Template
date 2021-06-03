import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Navbar></Navbar>
   </BrowserRouter>,
  <Footer></Footer>,
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
