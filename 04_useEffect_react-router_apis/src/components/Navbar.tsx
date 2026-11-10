import { NavLink } from "react-router";
import { useTodoContext } from "../context/TodoContext";

const links = [
  { to: "/", label: "All", end: true },
  { to: "/active-page", label: "Active", end: false },
  { to: "/completed-page", label: "Completed", end: false },
];

export function Navbar() {
  const { todos } = useTodoContext();
  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <header className="navbar">
      <span className="navbar__brand">Todo</span>
      <nav className="navbar__links">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `navbar__link${isActive ? " is-active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <span className="navbar__count">{activeCount} left</span>
    </header>
  );
}

/**
 * active-page i click isActive=false => isActive=>true | navbar_link is-active
 */
