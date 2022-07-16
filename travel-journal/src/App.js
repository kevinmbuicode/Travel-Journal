import React from 'react';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Destinations from './components/Data/MockData'

function App() {
  const data = Destinations.map(destination => {
    console.log(destination)
    return(
      <Cards
      id = {destination.id}
      {...destination}
      />
    )
  })
  return (
    <div className="App">
      <NavBar/>
      {data}
    </div>
  );
}

export default App;
