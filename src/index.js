import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



ReactDOM.render(
  <BrowserRouter>
  <Navbar></Navbar>
   </BrowserRouter>,
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
  <Footer></Footer>

);

reportWebVitals();
