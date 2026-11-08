import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({
  title = "Aamaal",
  subtitle = "",
  showBack = false,
  showNotifications = true,
  showSettings = false,
  rightContent = null,
}) {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="app-header-left">
        {showBack && (
          <button
            type="button"
            className="app-header-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            ←
          </button>
        )}

        <div className="app-header-brand">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <div className="app-header-actions">
        {rightContent}

        {showNotifications && (
          <button
            type="button"
            className="app-header-action"
            onClick={() => navigate("/notifications")}
            aria-label="Notifications"
          >
            ♧
          </button>
        )}

        {showSettings && (
          <button
            type="button"
            className="app-header-action"
            onClick={() => navigate("/settings")}
            aria-label="Settings"
          >
            ⚙
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
