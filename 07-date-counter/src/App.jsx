import { useState } from "react";
import "./styles.css";

function App() {
  const [range, setRange] = useState(1);
  const [counter, setCounter] = useState(0);

  const date = new Date("10 February 2024");
  date.setDate(date.getDate() + counter);
  console.log(date);

  function handleRangeChange(e) {
    setRange(() => Number(e.target.value));
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function handleIncrease() {
    setCounter((e) => Number(e) + Number(range));
  }
  function handleDecrease() {
    setCounter((e) => Number(e) - Number(range));
  }
  function handleCounter(e) {
    setCounter(() => Number(e.target.value));
  }
  function handleReset() {
    setCounter(0);
    setRange(1);
  }

  return (
    <form className="form" onSubmit={handleForm}>
      <input type="range" onChange={handleRangeChange} value={range} />{" "}
      <span>{range}</span>
      <div className="gap">
        <button onClick={handleDecrease}>-</button>
        <input onChange={handleCounter} value={counter} type="text" />
        <button onClick={handleIncrease}>+</button>
      </div>
      <span>{counter}</span>
      <h1>{date.toDateString()}</h1>
      <button onClick={handleReset}>reset</button>
    </form>
  );
}

export default App;
