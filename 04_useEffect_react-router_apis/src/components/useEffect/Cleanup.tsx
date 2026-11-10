import { useState, useEffect, useRef } from "react";

/*
Requirements:
- Create a timer that increments every second
- Display the count
- Add a button to stop the timer
- Use cleanup to clear interval
*/

export default function Timer() {
  const [count, setCount] = useState(0);
  const timerId = useRef(0);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  function handleStop() {
    clearInterval(timerId.current);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
