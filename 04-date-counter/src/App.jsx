import { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("february 09 2024");
  date.setDate(date.getDate() + count);

  function handleStepDecrease() {
    setStep((sCount) => sCount - 1);
  }
  function handleStepIncrease() {
    setStep((sCount) => sCount + 1);
  }
  function handleCountDecrease() {
    setCount((sCount) => sCount - step);
  }
  function handleCountIncrease() {
    setCount((sCount) => sCount + step);
  }

  return (
    <div className="center">
      <div className="row">
        <button onClick={handleStepDecrease}>-</button>
        <h1>step: {step}</h1>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div className="row">
        <button onClick={handleCountDecrease}>-</button>
        <h1>count: {count}</h1>
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <span>
        <h1>
          <span>{count === 0 ? 'Today is ' : null}</span>
          <span>{count < 0 ? `${-count} days ago was ` : null}</span>
          <span>{count > 0 ? `${count} days from today is ` : null}</span>
          <span>{date.toDateString()}</span>
        </h1>
      </span>
    </div>
  );
}

export default App;
