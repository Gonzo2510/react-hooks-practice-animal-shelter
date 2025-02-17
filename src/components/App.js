import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  function onChangeType(e) {
    setFilters({type: e.target.value})
  }

  function onFindPetsClick() {
    let url = ''
    if (filters.type === 'all') {
      url = `http://localhost:3001/pets`
    } else url = `http://localhost:3001/pets?type=${filters.type}`

    fetch(url)
    .then(r => r.json())
    .then(pets => setPets(pets)) 
  }

  function onAdoptPet(id) {
    console.log('worked', id)
    // fetch(`http://localhost:3001/pets${id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "isAdopted": true
    //   })
    // })
  }




  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;