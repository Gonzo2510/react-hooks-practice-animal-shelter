import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets }) {
  return (
    <div className="ui cards">
    {pets.map((pet) => <Pet pet={pet} key={pet.id} />)}
    </div>);
}

export default PetBrowser;