import React, { Component } from 'react';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';


const PLACES = [ { name: "Palo Alto", zip: "94303" }, { name: "San Jose", zip: "94088" }, { name: "Santa Cruz", zip: "95062" }, { name: "Honolulu", zip: "96803" } ];


class App extends Component { 
  constructor() { 
    super(); 
    this.state = { 
      activePlace: 0
     }; 
     this.handleClickToButtom = this.handleClickToButtom.bind(this);
  } 

  handleClickToButtom = (index) => {
    console.log(index);
    this.setState({ activePlace: index })
  }

  render() {
   const activePlace = this.state.activePlace;
   return (
      <div className="App"> {
        PLACES.map((place, index) => ( 
            <button key={index} 
                    onClick={() => this.handleClickToButtom(index)}
            >
              {place.name} 
           </button> )
  )
  } 
  <WeatherDisplay zip={PLACES[activePlace].zip} /> </div> );
  } 
}


export default App;
