import { useState } from "react";

/*
Requirements:
- Create a textarea input
- Show character count
- Limit to 20 characters
- If limit exceeded:
  - Show warning or change style "You're over the character limit"
  - Disable submit button
*/

export default function CharacterCounter() {
  const limit = 20;
  const [textInput, setTextInput] = useState("");

  const charCount = textInput.length;
  const overLimit = charCount > limit;

  return (
    <div>
      <p>
        Character Counter: {charCount} / {limit}
      </p>
      <textarea
        value={textInput}
        onChange={(text) => setTextInput(text.target.value)}
      ></textarea>
      <p>{overLimit ? "You're over the character limit" : ""}</p>
      <button disabled={overLimit}>Submit</button>
    </div>
  );
}
