import "./App.css";

// Importing {variable/function} from file path
// import { Banner } from "./components/Banner.tsx";
// import { NavBar } from "./components/NavBar";
import { UserProfileCard } from "./components/UserProfileCard.tsx";

function App() {
  return (
    <>
      {/* <Banner />
      <NavBar /> */}
      <UserProfileCard
        username="David"
        bio="Learning React"
        age={31}
        email="david@email.com"
      />
    </>
  );
}

export default App;
