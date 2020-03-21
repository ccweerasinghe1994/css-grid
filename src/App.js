import React from "react";

import "./App.scss";
import { Card } from "./components/card.component";

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="App">
      {cards.map(data => (
        <Card number={data} />
      ))}
    </div>
  );
}

export default App;
