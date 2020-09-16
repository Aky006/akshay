import React from 'react';

import Build from './Build';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= "logo192.png"  alt="Error 404" />
        <p>Agrawal Sanitation</p>
        
        <p><button type="button">HOME</button><button type="button">ABOUT US</button><button type="button">PRODUCTS WE DEAL</button>
        <button type="button">BRANDS WE DEAL</button><button type="button">AWARDS & CERTIFICATES</button>
        <button type="button">CONTACT</button></p>
        <p className="App-blue">  Welcome to Agrawal Sanitation! </p>
      <p className="App-white"> <Build/> </p>
      <p
          className="App-red">
          Products We Deal
        </p>
        <p> <img src= "Water Closets.jpg"  alt="Water Closets"  /> &nbsp;  <img src= "Pedestal_Basin.jpg"  alt="Pedestal_Basin" /> &nbsp;
        <img src= "Bathroom Accessories.jpg"  alt="Bathroom Accessories" />&nbsp;  <img src= "Faucets.jpg"  alt="Faucets" /> 
        &nbsp; <img src= "showers.jpg"  alt="showers" /> &nbsp; <img src= "cistern.jpg"  alt="cistern" />&nbsp; 
        <img src= "Urinals.jpg"  alt="Urinals" /></p>
        <p> <img src= "UPVC Pipes and fittings.png"  alt="UPVC Pipes and fittings" /> &nbsp; <img src= "CPVC Pipes and fittings.png"  alt="CPVC Pipes and fittings" />  &nbsp;
        <img src= "SWR Pipes and fittings.png"  alt="SWR Pipes and fittings" /> &nbsp; <img src= "UDS Pipes and fittings.png"  alt="UDS Pipes and fittings" />  &nbsp; 
        <img src= "water tanks.jpg"  alt="water tanks" />  &nbsp; <img src= "Adhesives.jpg"  alt="Adhesives" /> &nbsp;
        <img src= "Kitchen sink.jpg"  alt="Kitchen sink" />  &nbsp; <img src= "Sanitary spares.jpg"  alt="Sanitary spares" />  </p>
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

        <p className="App-div"> Name &nbsp;&ensp;&emsp; Email <br></br> Phone <br></br>Enter your message 
        <br></br> <button type="button">Send</button></p>
      
      </header>
    </div>
  );
}

export default App;
