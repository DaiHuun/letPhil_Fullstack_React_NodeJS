/**
 * Made a simple index.css in components for some styling
 */
import "./index.css";

/**
 * Creating a simple banner based on tcg player
 */

/**
 * Component:
 * Can be written as a function, or variable with arrow function
 * With "export", can import
 */
export const Banner = () => {
  const location = "United States";

  return (
    <div className="banner-container">
      <h3>TCG Player</h3>
      <p>Shipping to {location}</p>

      {/* Input Bar */}
      <section className="search-bar">
        <select>
          <option>Yu-Gi-Oh</option>
          <option>Pokemon</option>
          <option>Magic: The Gathering</option>
        </select>
        <input type="text" placeholder="..." />
        <div>Search Icon</div>
      </section>
      <button className="">Sign In</button>
      <button className="">User ICON</button>
      <button className="">Shopping Cart</button>
    </div>
  );
};
