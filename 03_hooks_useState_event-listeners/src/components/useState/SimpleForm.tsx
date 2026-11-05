import { useState } from "react";

/*
Requirements:
- Create inputs for:
  - Name
  - Email
- Store values using state (controlled inputs)
- On submit:
  - Prevent page reload
  - Display submitted values or conditional success message
- Clear form after submission
*/

type SubmitInfo = {
  name: string;
  email: string;
};

export default function ContactForm() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState<SubmitInfo | null>(null);

  function handleSubmitButton(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted({ name: nameInput, email: emailInput });
    setNameInput("");
    setEmailInput("");
  }

  return (
    <form onSubmit={handleSubmitButton}>
      <input
        type="text"
        value={nameInput}
        onChange={(name) => setNameInput(name.target.value)}
        placeholder="Enter Name"
      ></input>
      <input
        type="email"
        value={emailInput}
        onChange={(email) => setEmailInput(email.target.value)}
        placeholder="Enter Email"
      ></input>
      <button type="submit">Submit</button>
      {submitted && (
        <p>
          Name Submitted: {submitted.name} | Email Submitted: {submitted.email}
        </p>
      )}
    </form>
  );
}
