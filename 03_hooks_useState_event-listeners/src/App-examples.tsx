import { useState } from "react";
import "./App.css";

/**
 * camelCase - Hook
 * 1. they all start with 'use'
 * 2. you have to call hooks at the top level of your component (CANT CALL IN A CONDITIONAL)
 * [useState, useState, useEffect, useRef, useState] // Calls in order
 *
 * PascualCase - UpperCase | components always uppercase
 */

// useState || state => a piece of memory that belongs to this one component

function App() {
  //variable: car, setterFunction: setCar
  // setterFunction update the state value, => rerenders your browser | updates it
  const [car, setCar] = useState({
    color: "red",
    engine: "v6",
    make: "hyundai",
  }); //undefined

  // const car = {color: "red", engine: "v6"}

  /**
   * Rendering - painting/displaying stuff in the browser
   * Rerendering - browser repaints itself. updating the ui
   *
   * 2 main ways to trigger rerendering in React
   *
   * 1. through state updates/changes
   * 2. props - changing
   */

  /**
   * javascript operator
   * unpacking something
   * spread operator | ...
   */

  // const car2 = { ...car };

  function handleButtonClick() {
    alert("Clicking the button");
    setCar({ ...car, color: "blue" });
  }

  return (
    <div>
      <p>{car.color}</p>
      <p>{car.engine}</p>
      <p>{car.make}</p>
      <button onClick={handleButtonClick}>Update Car</button>
    </div>
  );
}

// export default App;
