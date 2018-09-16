import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'react-popper';
import {Route,Link} from  'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Hvac from './Components/HVAC/Hvac';
import Electrical from './Components/Electrical/Electrical';
import Firefighting from './Components/Firefighting/Firefighting';
import Interiors from './Components/Interiors/Interiors';
import BMS from './Components/BMS/BMS';
import PHE from './Components/PHE/PHE';
import Projects from './Components/Projects/Projects';
class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Route path = "/" exact = {true} component = {Home} />
        <Route path = "/Hvac" exact = {true} component = {Hvac} />
        <Route path = "/Electrical" exact = {true} component = {Electrical} />
        <Route path = "/Firefighting" exact = {true} component = {Firefighting} />
        <Route path = "/Interiors" exact = {true} component = {Interiors} />
        <Route path = "/BMS" exact = {true} component = {BMS} />
        <Route path = "/PHE" exact = {true} component = {PHE} />
        <Route path = "/Projects" exact = {true} component = {Projects} />
      <Footer />
      </div>
    );
  }
}

export default App;
