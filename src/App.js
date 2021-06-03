import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>
      </BrowserRouter>
    
    

     <Footer></Footer>
    </div>
  );
}

export default App;
