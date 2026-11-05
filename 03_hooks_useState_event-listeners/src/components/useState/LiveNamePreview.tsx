import { useState } from "react";

/*
Requirements:
- Create an input field for a name
- Display: "Hello, [name]!"
- If input is empty, show: "Please enter your name"
- Limit input to 20 characters
- event listener: onChange
*/

export default function NamePreview() {
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      {/* CODE HERE */}
      <input
        type="text"
        value={textInput}
        onChange={(text) => setTextInput(text.target.value)}
        placeholder="Please enter your name"
        maxLength={20}
      ></input>
      <p>
        {textInput === "" ? "Please enter your name" : `Hello ${textInput}`}
      </p>
    </div>
  );
}
