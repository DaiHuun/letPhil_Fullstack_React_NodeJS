import "./App.css";
import CharacterCounter from "./components/useState/CharacterCountInput";
import SmartCounter from "./components/useState/Counter";
import NamePreview from "./components/useState/LiveNamePreview";
import ContactForm from "./components/useState/SimpleForm";
import ThemeToggle from "./components/useState/ThemeToggle";

function App() {
  return (
    <>
      {/* <CharacterCounter />
      <SmartCounter />
      <NamePreview />
      <ContactForm /> */}
      <ThemeToggle />
    </>
  );
}
export default App;
