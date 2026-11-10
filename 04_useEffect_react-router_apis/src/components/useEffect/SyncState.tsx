import { useState, useEffect } from "react";

/*
Requirements: When the button is clicked, counter increments +1, 
  - update the document.title to whatever number counter is at  
- Create a counter
- Update the document title to: document.title
  "Count: X"
- Update title whenever count changes
*/

export default function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+ COUNT</button>
    </div>
  );
}
