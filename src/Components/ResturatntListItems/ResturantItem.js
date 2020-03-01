import React from 'react'
import './ResturantItem.css'
const resturantItem = (props) =>{
    return(
        <div className="w3-bar w3-yellow barComponent">
        <div className="w3-bar-item" style={{fontWeight:"bold",
    color:"brown"}}>{props.Brand}</div>
        <div className="w3-bar-item">of : {props.Country}</div>
        <div className="w3-bar-item">{props.Top_Ten}</div>
      </div> 
    )
}

export default resturantItem