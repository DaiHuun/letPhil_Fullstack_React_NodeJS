import { useState, useEffect } from "react";
import "./App.css";
import { AllTodosPage } from "./pages/AllTodosPage";

const api_url = "https://rickandmortyapi.com/api/";

/**
 * api endpoints
 * 1. character
 * 2. episodes
 * 3. locations
 */

function App() {
  const [characters, setCharacters] = useState([]); // undefined => [] = [{rick and morty characters}]
  const [endpoint, setEndpoint] = useState("character");
  /**
   * api requests
   * asyncronous vs synchronous
   * javascript is synchronous by default
   */
  async function getAPIData() {
    try {
      console.log("This runs first");
      const { results } = await fetch(api_url + endpoint).then((response) =>
        response.json(),
      ); // waits for response from api then continues to next line
      console.log(results);
      setCharacters(results);
    } catch (err) {
      throw new Error("Error trying to fetch characters" + err);
    }
  }

  /**
   * Parameters
   * 1. callback function
   * 2. array
   *
   * 1. empty | on component mount, call the function, runs on start
   * 2. variable/value for the useEffect to listen for, to run the function
   */

  useEffect(() => {
    getAPIData();
  }, [endpoint]);

  return (
    <div className="app">
      <button onClick={() => setEndpoint("character")}>Character</button>
      <button onClick={() => setEndpoint("episode")}>Episode</button>
      <button onClick={() => setEndpoint("location")}>Location</button>

      {/* Conditional Rendering */}
      {/* characters ? "render here" : "render this" */}
      {characters.map((character: any) => (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} />
        </div>
      ))}
      <AllTodosPage />
    </div>
  );
}

export default App;

/**
 * 1. the component loads in
 * 2. api_url || undefined
 * 3. api_url = "https:"
 * 4. defining the function
 */
