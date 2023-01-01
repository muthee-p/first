import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import OurCompany from "./components/OurCompany";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  // wite js here
  const [sideMenu,setNav] = useState(false);
  const toggleNav = () =>{

    setNav((prevState)=> !prevState)
  }
  
  return (
    <Router>
    <div className="App">
    <Nav sideMenu ={sideMenu} showNav={toggleNav} />
    <div className="content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/whatwedo">
        <WhatWeDo />
      </Route>
      <Route  path="/about">
        <AboutUs />
      </Route>
      <Route  path="/ourcompany">
        <OurCompany />
      </Route>
      <Route  path="/faq">
        <Faq />
      </Route>
      <Route  path="/footer">
        <Footer />
      </Route>
    </Switch>
    </div>
    {/*<Tweets me={name} tweet={tweet} />*/}
    </div>
    </Router>
    
  );
}

export default App;


//change the imports