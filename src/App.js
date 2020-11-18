//import React from 'react';

import React, { Component } from 'react'; 
import Build from './Build';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './home'; 
import Products from './products'; 
import Brands from './brands'; 
import About from './about'; 
import Contact from './contact'; 
import Covid from './covid'; 
import Awards from './awards';
 

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
              

             
            <br />
            <img src= "logo192.png"  alt="Error 404" />
            <h7>Agrawal Sanitation</h7>
         

         



         <p> 
                <Link to="/"><button type="button">HOME</button></Link> 

                <Link to="/about"><button type="button">ABOUT US</button></Link> 

                <Link to="/products"><button type="button">PRODUCTS WE DEAL</button></Link>

                <Link to="/brands"><button type="button">BRANDS WE DEAL</button></Link>
               
                <Link to="/about"><button type="button">AWARDS & CERTIFICATES</button></Link> 

                <Link to="/contact"><button type="button">CONTACT</button></Link> 

                <Link to="/covid"><button type="button">COVID-19</button></Link>
              </p> 
 
 
              <Switch>
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/brands' component={Brands}></Route> 
              <Route exact path='/products' component={Products}></Route> 
              <Route exact path='/awards' component={Awards}></Route> 
              <Route exact path='/contact' component={Contact}></Route> 
              <Route exact path='/covid' component={Covid}></Route>
              </Switch>
             <p><img src= "ceramics.jpg"  alt="ceramics" /><img src= "Taps.jpg"  alt="Taps" /></p> 
 
 
        
 <p className="App-white"> <Build/> </p>
       
       <p
           className="App-red">
           PRODUCTS WE DEAL
         </p>
     <h5>[click on the pictures to view more products]</h5>
         <p><a href= "closets.jpg"><img src= "Water Closets.jpg"  alt="Water Closets"  /></a>  
         <Link to="/"><img src= "Pedestal_Basin.jpg"  alt="Pedestal_Basin" /></Link> 
         <Link to="/"><img src= "Urinals.jpg"  alt="Urinals" /></Link>  
        <a href= "faucet.jpg"><img src= "Faucets.jpg"  alt="Faucets" /></a> 
         <a href= "shower.jpg"><img src= "showers.jpg"  alt="showers" /></a> 
         <a href= "bathroom.jpg"><img src= "Bathroom Accessories.jpg"  alt="Bathroom Accessories" /></a>  
         <a href= "cisterns.jpg"><img src= "cistern.jpg"  alt="cistern" /></a>
         </p>
         <p>Water Closets • Pedestal Basins • Urinals • Faucets • Showers • Bathroom Accessories • Cistern</p>

         <p> <a href= "upvc.jpg"><img src= "UPVC Pipes and fittings.png"  alt="UPVC Pipes and fittings" /></a> 
         <a href= "cpvc.jpg"><img src= "CPVC Pipes and fittings.png"  alt="CPVC Pipes and fittings" /></a>  
         <a href= "swr.jpg"><img src= "SWR Pipes and fittings.png"  alt="SWR Pipes and fittings" /></a> 
         <a href= "uds.jpg"><img src= "UDS Pipes and fittings.png"  alt="UDS Pipes and fittings" /></a> </p>
         
          
          <p>UPVC Pipes and fittings • CPVC Pipes and fittings • SWR Pipes and fittings • UDS Pipes and fittings  </p>
         <p>
         <a href= "tank.jpg"><img src= "water tanks.jpg"  alt="water tanks" /></a> 
         <a href= "adhesive.jpg"><img src= "Adhesives.jpg"  alt="Adhesives" /></a> 
         <a href= "spares.jpg"><img src= "Sanitary spares.jpg"  alt="Sanitary spares" /></a> 
           <a href= "sink.jpg"><img src= "kitchen sink.jpg"  alt="Kitchen sink" /></a>  &nbsp;
           </p>
           <p>Water tanks [VOLGA] • Adhesives & Sealants • Sanitary spares • Kitchen sink  </p>

         <p><a href= "roff.jpg"><img src= "waterproofing.jpg"  alt="waterproofing"  /></a></p>
         <p> Waterproofing Solutions </p>
         
       
      
       
       
       
       <p
           className="App-red">
           BRANDS WE DEAL
         </p>
         <p>
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
         </a></p>
         <p>
     
      <a
           className="App-link"
           href= "https://www.prayagindia.com/"
           target="_blank"
           rel="noopener noreferrer"
         > 
            <img src= "Prayag.png"  alt="Prayag" /> 
         </a> &nbsp
     
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
           href= "http://m.eauset.com/products/faucets/"
           target="_blank"
           rel="noopener noreferrer"
         > 
            <img src= "Eauset.jpg"  alt="Eauset" /> 
         </a> &nbsp
         <a
           className="App-link"
           href= "https://www.amoghapolymers.com/"
           target="_blank"
           rel="noopener noreferrer"
         >
            <img src= "Amogha.png"  alt="Amogha" />
         </a></p>
         <p
           className="App-red">
           Submit Your Query:
           </p>
           
         <p className="App-div"> 
         Name:  <br/><input type="text" id="fname" name="fname"></input> <br/>
         Email:<br/><input type="text" id="fname" name="fname"></input><br/>
         Phone:<br/><input type="text" id="fname" name="fname"></input><br/>
         Enter your message:<br/> <input type="text" id="fname" name="fname"></input>
         <br></br><button type="button">Send</button></p>
         
         <p>We are leading retailer of Sanitaryware, Bath Fittings, Faucets, CPVC Pipes, UPVC Pipes, SWR Pipes, UDS Pipes, Pipes Fittings, Water Tank, and Adhesives and Sealants etc. We offer 15+ leading brands under one roof and we are proud of our database of 1000+ satisfied customers.</p>
         <Link to="/"><img src= "clips.png"  alt="follow us" /></Link>
       <p>© Agrawal Sanitation 2020 All Rights Reserved design and develop by @kshay</p>
      
            </ul> 
            
          </div> 
       </Router> 
      
       
       
   ); 
  } 
} 
  







     
  


export default App;
