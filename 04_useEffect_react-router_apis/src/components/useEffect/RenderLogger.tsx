import { useState, useEffect } from "react";

/*
Requirements:
- Create a counter
- Log to console when component renders
- Try:
  - No dependency array
  - Empty array []
  - [count] dependency
- Observe differences
*/

export default function RenderLogger() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // rerenders on every click
  console.log(`render | count:${count}| other:${other}`);

  // runs after EVERY render (+ Count or + Other)
  useEffect(() => {
    console.log("effect (no dependency)");
  });

  // runs once, after the first render only
  useEffect(() => {
    console.log("effect (empty array[])");
  }, []);

  // runs after first render, then only when count changed
  useEffect(() => {
    console.log("effect (count dependency)", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <button onClick={() => setCount((count) => count + 1)}>+ Count</button>
      <button onClick={() => setOther((other) => other + 1)}>+ Other</button>
    </div>
  );
}
