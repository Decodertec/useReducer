import React, { useReducer } from 'react';

// Action types
const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case DECREMENT:
      return { count: state.count - action.payload };
    case INCREMENT:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const initialState = { count: 0 };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDecrement = () => {
    const decrementAmount = parseInt(document.getElementById('subtractInput').value);
    dispatch({ type: DECREMENT, payload: decrementAmount });
  };

  const handleIncrement = () => {
    const incrementAmount = parseInt(document.getElementById('addInput').value);
    dispatch({ type: INCREMENT, payload: incrementAmount });
  };

  return (
    <div>
      <p id="count">{state.count}</p>
      <input type="number" id="subtractInput" />
      <button id="subtractBtn" onClick={handleDecrement}>
        Subtract
      </button>
      <input type="number" id="addInput" />
      <button id="addBtn" onClick={handleIncrement}>
        Add
      </button>
    </div>
  );
};

export default App;
