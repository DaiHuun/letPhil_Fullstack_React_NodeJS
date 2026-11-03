/**
 * NavBarDropDown component
 * Props: {
 *  name: string
 *  options: string[]
 * }
 */

type NavBarDropDownTypes = {
  name: string;
  options: string[];
};

export const NavBarDropDown = (props: NavBarDropDownTypes) => {
  return (
    <>
      <h2>{props.name}</h2>
      <select>
        <option>{props.options[0]}</option>
        <option>{props.options[1]}</option>
        <option>{props.options[2]}</option>
      </select>
    </>
  );
};
