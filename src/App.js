// import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import CovidStats from "./CovidStats";
import {
  incrementAction,
  decrementAction,
  decrementAction5,
} from "./actions/counterAction";
const App = ({
  count,
  tou,
  incrementAction,
  decrementAction,
  decrementAction5,
}) => {
  // const [counter, setCounter] = useState(0);
  // const increment = (val = 1) => setCounter(counter + val);
  // const decrement = (val = 1) => setCounter(counter - val);

  return (
    <div className="App">
      <CovidStats />
      <h1>Counter : {count}</h1>
      <h2>{tou}</h2>
      <div style={{ display: "block" }}>
        <button onClick={() => incrementAction()}>Increment +1</button>
        <button onClick={() => incrementAction(5)}>Increment +5</button>
        <button onClick={() => decrementAction()}>Decrement -1</button>
        <button onClick={() => decrementAction5()}>Decrement -5</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
  tou: state.counter.touhihul,
});

export default connect(mapStateToProps, {
  incrementAction,
  decrementAction,
  decrementAction5,
})(App);
