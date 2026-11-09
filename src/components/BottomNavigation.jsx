import { NavLink } from "react-router-dom";
import "./BottomNavigation.css";

const navigationItems = [
  { label: "Home", path: "/home", icon: "⌂" },
  { label: "Tasbih", path: "/tasbih", icon: "📿" },
  { label: "Duas", path: "/duas", icon: "🤲" },
  { label: "More", path: "/more", icon: "☰" },
];

function BottomNavigation() {
  return (
    <nav className="bottom-navigation">
      {navigationItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `bottom-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="bottom-nav-icon">{item.icon}</span>
          <span className="bottom-nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNavigation;
