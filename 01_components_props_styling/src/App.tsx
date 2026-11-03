import "./App.css";

// Importing {variable/function} from file path
import { Banner } from "./components/Banner.tsx";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <Banner />
      <NavBar />
    </>
  );
}

export default App;
