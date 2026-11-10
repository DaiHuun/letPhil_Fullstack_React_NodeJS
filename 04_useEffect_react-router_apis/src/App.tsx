import { useState, useEffect } from "react";
import "./App.css";
import { AllTodosPage } from "./pages/AllTodosPage";
import { RickandMortyAPI } from "./components/RickandMortyAPI";

function App() {
  return (
    <div>
      <RickandMortyAPI />
      <AllTodosPage />
    </div>
  );
}

export default App;
