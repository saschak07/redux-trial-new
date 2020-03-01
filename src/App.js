import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import RestaurantList from './Containers/RestaurantList'
function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <RestaurantList/>

    </div>
  );
}

export default App;
