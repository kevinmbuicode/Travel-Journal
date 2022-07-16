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
      title = {destination.title}
      location = {destination.location}
      google_map_link = {destination.google_map_link}
      start_date = {destination.start_date}
      end_date = {destination.end_date}
      description = {destination.description}
      image = {destination.image_url}
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
