import React from 'react'

const details = (props) => {
    return (
        
        <div className="w3-card-4">

        <header className="w3-container w3-blue">
          <h1>{props.Brand}</h1>
        </header>
        
        <div className="w3-container">
          <p>Speciality{props.Variety}</p>
        </div>
        <div className="w3-container">
          <p>provides Food in : {props.Style}</p>
        </div>

        <div className="w3-container">
          <p>Situated at: {props.Country}</p>
        </div>

        <div className="w3-container">
          <p>Rating : {props.Stars}</p>
        </div>

        <div className="w3-container">
          <p>Featured : {props.Top_Ten}</p>
        </div>
        
        <footer className="w3-container w3-blue">
          <h5>Bon appetite</h5>
        </footer>
        
        </div> 
    )
}

export default details;