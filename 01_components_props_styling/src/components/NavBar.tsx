/**
 * Creating a simple navbar based on tcg player
 */

import { NavBarDropDown } from "./NavBarDropDown";

export const NavBar = () => {
  return (
    <div>
      <NavBarDropDown
        name="Yu-Gi-Oh"
        options={[
          "Magnificent Maestros",
          "Beyond the Brave",
          "Magnificent Monsters",
        ]}
      />
      <NavBarDropDown
        name="Pokemon"
        options={["Delta Reign", "30th Celebration", "Pitch Black"]}
      />
      <NavBarDropDown
        name="Magic: The Gathering"
        options={["Reality Fracture", "Secrets of Strixhaven", "TMNT"]}
      />
    </div>
  );
};
