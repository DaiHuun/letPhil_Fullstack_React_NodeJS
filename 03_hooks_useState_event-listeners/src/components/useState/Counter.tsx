import { useState } from "react";

/*
Requirements:
- Display a count starting at 0
- Add buttons for:
  - Increment (+1)
  - Decrement (-1)
  - Reset to 0
- Prevent count from going below 0
- Show a message when count is 0 (e.g., "You reached the limit")
*/

//const [variable_name, setVariableName] = useState();

export default function SmartCounter() {
  const [counter, setCounter] = useState(0);

  function handleIncrementClick() {
    setCounter(counter + 1);
  }

  function handleDecrementClick() {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  }

  function handleResetClick() {
    setCounter(0);
  }

  return (
    <div>
      {/* CODE HERE*/}
      <p>Counter: {counter}</p>
      <button onClick={handleIncrementClick}>Increment +1</button>
      <button onClick={handleDecrementClick}>Decrement -1</button>
      <button onClick={handleResetClick}>Reset to 0</button>
      <div>{counter === 0 ? "You reached the limit" : ""}</div>
    </div>
  );
}
