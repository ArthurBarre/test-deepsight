import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/style.css";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <section className="app">
      <Forecast data={DATA} />
    </section>
  )
}
export default App;
const DATA = [
  { id: 0, location: 'Restaurant Paris', shortDate: "05 oct", longDate: "Samedi 5 Octobre " },
  { id: 1, location: 'Restaurant Auxerre', shortDate: "13 sep", longDate: "Jeudi 13 Septembre ", longDate: "lundi 13 septembre" },
  { id: 2, location: 'Restaurant Marseille', shortDate: "01 jan", longDate: "mardi 1 janvier" }
]
ReactDOM.render(<App />, document.getElementById('root'));
