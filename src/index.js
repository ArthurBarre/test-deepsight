import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/style.css";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <section className="app">
      <Forecast />
    </section>
  )
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
