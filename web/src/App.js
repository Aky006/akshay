//import React from 'react';

import React, { Component } from 'react'; 
import Build from './Build';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './home'; 
import Products from './products'; 
import Brands from './brands'; 
import About from './about'; 
import Contact from './contact'; 
import Closets from './closets'; 

/*import Home from './home'; 
import About from './about'; 
import Contact from './contact'; */

 
import './App.css';



class App extends Component { 
  render() { 
    return ( 
       <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              

             
            
         <img src= "logo192.png"  alt="Error 404" />
         <p>Agrawal Sanitation</p>
         <p> 
                <Link to="/"><button type="button">HOME</button></Link> 

                <Link to="/about"><button type="button">ABOUT US</button></Link> 

                <Link to="/brands"><button type="button">BRANDS WE DEAL</button></Link>

                <Link to="/products"><button type="button">PRODUCTS WE DEAL</button></Link>
               
                <Link to="/about"><button type="button">AWARDS & CERTIFICATES</button></Link> 
               
                <Link to="/contact"><button type="button">CONTACT</button></Link> 
              </p> 
 
 
              <Switch>
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/brands' component={Brands}></Route> 
              <Route exact path='/products' component={Products}></Route> 
              <Route exact path='/contact' component={Contact}></Route> 
              </Switch>
             
 
 
 
 
 
 
        
 <p className="App-white"> <Build/> </p>
       
       <p
           className="App-red">
           Products We Deal
         </p>
         <p><Link to="/"> <img src= "Water Closets.jpg"  alt="Water Closets"  /></Link> &nbsp;  
         <Route exact path='/closets' component={Closets}></Route>
         <Link to="/"><img src= "Pedestal_Basin.jpg"  alt="Pedestal_Basin" /></Link> &nbsp;
         <Link to="/"><img src= "Bathroom Accessories.jpg"  alt="Bathroom Accessories" /></Link>&nbsp;  
         <Link to="/"><img src= "Faucets.jpg"  alt="Faucets" /></Link> &nbsp; 
         <Link to="/"><img src= "showers.jpg"  alt="showers" /></Link> &nbsp;
         <Link to="/"><img src= "cistern.jpg"  alt="cistern" /></Link> &nbsp; 
         <Link to="/"><img src= "Urinals.jpg"  alt="Urinals" /></Link></p>

         <p> <Link to="/"><img src= "UPVC Pipes and fittings.png"  alt="UPVC Pipes and fittings" /></Link> &nbsp;
         <Link to="/"><img src= "CPVC Pipes and fittings.png"  alt="CPVC Pipes and fittings" /></Link>  &nbsp;
         <Link to="/"><img src= "SWR Pipes and fittings.png"  alt="SWR Pipes and fittings" /></Link> &nbsp; 
         <Link to="/"><img src= "UDS Pipes and fittings.png"  alt="UDS Pipes and fittings" /></Link>  &nbsp; 
         <Link to="/"><img src= "water tanks.jpg"  alt="water tanks" /></Link>  &nbsp; 
         <Link to="/"><img src= "Adhesives.jpg"  alt="Adhesives" /></Link> &nbsp;
         <Link to="/"><img src= "Kitchen sink.jpg"  alt="Kitchen sink" /></Link>  &nbsp;
         <Link to="/"><img src= "Sanitary spares.jpg"  alt="Sanitary spares" /></Link>  </p>
       
         
       
       
       
       
       <p
           className="App-red">
           Brands We Deal
         </p>
       <a
           className="App-link"
           href= "https://www.hindwarehomes.com/"
           target="_blank"
           rel="noopener noreferrer"
         >
            <img src= "Hindware.jpg"  alt="Hindware" />
         </a>
       <a
           className="App-link"
           href= "https://ajaypipes.com/"
           target="_blank"
           rel="noopener noreferrer"
         >
            <img src= "Ajay.jpg"  alt="Ajay Pipes" />
         </a>
         <a
           className="App-link"
           href= "https://utkarshindia.in/"
           target="_blank"
           rel="noopener noreferrer"
         >
            <img src= "Utkarsh.jpg"  alt="Utkarsh Pipes" />
         </a>
         <a
           className="App-link"
           href= "http://roff.in/"
           target="_blank"
           rel="noopener noreferrer"
         >
            <img src= "Pidilite.jpg"  alt="Pidilite Pipes" />
         </a>
         <a
           className="App-link"
           href= "http://www.gangabathfittings.com/"
           target="_blank"
           rel="noopener noreferrer"
         >
            <img src= "Ganga.png"  alt="Ganga" />
         </a>
         <a
           className="App-link"
           href= "https://www.amoghapolymers.com/"
           target="_blank"
           rel="noopener noreferrer"
         >
            <img src= "Amogha.png"  alt="Amogha" />
         </a>
         <p
           className="App-red">
           Submit Your Query:
           </p>
           
         <p className="App-div"> 
         Name:  <br/><input type="text" id="fname" name="fname"></input> <br/>
         Email:<br/><input type="text" id="fname" name="fname"></input><br/>
         Phone:<br/><input type="text" id="fname" name="fname"></input><br/>
         Enter your message: <input type="text" id="fname" name="fname"></input>
         <br></br><button type="button">Send</button></p>
       
      
            </ul> 
            
          </div> 
       </Router> 
       //<div className="App">
       
   ); 
  } 
} 
  







     
  


export default App;