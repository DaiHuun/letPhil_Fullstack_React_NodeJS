import { useState, useEffect } from "react";
import "./App.css";
// import { AllTodosPage } from "./pages/AllTodosPage";
// import { RickandMortyAPI } from "./components/RickandMortyAPI";
import Timer from "./components/useEffect/Cleanup";
import RandomUser from "./components/useEffect/FetchData";
import FetchWithStates from "./components/useEffect/ImprovedFetch";
import RenderLogger from "./components/useEffect/RenderLogger";
import TitleUpdater from "./components/useEffect/SyncState";

function App() {
  return (
    <div>
      {/* <RickandMortyAPI />
      <AllTodosPage /> */}

      {/* <Timer /> */}
      {/* <RandomUser /> */}
      {/* <FetchWithStates /> */}
      {/* <RenderLogger /> */}
      <TitleUpdater />
    </div>
  );
}

export default App;
