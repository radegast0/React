import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer (state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1};
    case ACTIONS.DECREMENT:
      return {count: state.count - 1};
    default: 
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count : 0})

  function increament() {
    dispatch( {type: ACTIONS.INCREMENT})
  }

  function decreament() {
    dispatch( {type: ACTIONS.DECREMENT})
  }


  return (
    <div>
      <button onClick={decreament}>-</button>
      <span>{state.count}</span>
      <button onClick={increament}>+</button>
    </div>
  );
}

export default App;
