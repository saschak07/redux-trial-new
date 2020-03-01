import React from 'react'
import './Navbar.css'
const navbar = () =>{
    
        return (<div className="w3-bar w3-light-grey navbarContainer">
            <a href="/" className="w3-bar-item w3-button">Home</a>
            <a href="/" className="w3-bar-item w3-button">Top 10 by year</a>
            <a href="/" className="w3-bar-item w3-button">List by Country</a>
            
            <input type="text" className="w3-bar-item w3-input" placeholder="Search.."/>
            <a href="/" className="w3-bar-item w3-button w3-green">Go</a> 
         </div>)
}

export default navbar