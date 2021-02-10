import { useState } from "react";
import "./App.css";
import CovidStats from "./CovidStats";
const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = (val = 1) => setCounter(counter + val);
  const decrement = (val = 1) => setCounter(counter - val);

  return (
    <div className="App">
      <CovidStats />
      <h1>Counter : {counter}</h1>
      <div style={{ display: "block" }}>
        <button onClick={() => increment()}>Increment +1</button>
        <button onClick={() => increment(5)}>Increment +5</button>
        <button onClick={() => decrement()}>Decrement -1</button>
        <button onClick={() => decrement(5)}>Decrement -5</button>
      </div>
    </div>
  );
};

export default App;
