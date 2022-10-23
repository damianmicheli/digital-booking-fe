import React from "react";
import { Cards } from "./components/Cards";

import ALOJAMIENTOS_DATA from './data/alojamientos.json';

function App() {

  return (
    <div className="App">
      <Cards items={ALOJAMIENTOS_DATA}/>
    </div>
  );
}

export default App;
