import { useNavigate } from "react-router-dom";

export default function AccountDashboard() {
  const navigate = useNavigate();

  // Temporary profile data. Replace with authenticated user data later.
  const user = {
    name: "Welcome to Aamaal",
    email: "user@example.com",
    initials: "U",
    plan: "Personal Account",
  };

  const menuItems = [
    {
      icon: "👤",
      title: "Personal Profile",
      description: "Manage your personal information",
      route: "/account/profile",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Profiles",
      description: "Manage Aamaal for your family members",
      route: "/account/family",
    },
    {
      icon: "📊",
      title: "My Aamaal",
      description: "View your daily activity and progress",
      route: "/aamaal",
    },
    {
      icon: "🔐",
      title: "Security & Privacy",
      description: "Password, privacy and account security",
      route: "/account/security",
    },
    {
      icon: "⚙️",
      title: "Settings",
      description: "Personalise your Aamaal experience",
      route: "/settings",
    },
  ];

  return (
    <div className="account-dashboard">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .account-dashboard {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 25px 20px 40px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .account-container {
          max-width: 480px;
          width: 100%;
          margin: auto;
        }

        .account-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .account-brand {
          color: #426b53;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .account-header-actions {
          display: flex;
          gap: 9px;
        }

        .account-icon-button {
          width: 39px;
          height: 39px;
          border: 1px solid #e5e9e3;
          border-radius: 12px;
          background: #fff;
          font-size: 17px;
          cursor: pointer;
        }

        .account-heading {
          font-family: Georgia, serif;
          font-size: 29px;
          font-weight: 500;
          color: #263d31;
          margin: 0 0 7px;
        }

        .account-subtitle {
          font-size: 13px;
          color: #89928b;
          margin: 0 0 23px;
          line-height: 1.6;
        }

        .account-profile-card {
          background: #426b53;
          border-radius: 19px;
          padding: 22px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 27px;
          position: relative;
          overflow: hidden;
        }

        .account-profile-card::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          right: -45px;
          top: -65px;
        }

        .account-avatar {
          width: 57px;
          height: 57px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #e5eadf;
          color: #426b53;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 600;
        }

        .account-user-info {
          min-width: 0;
          flex: 1;
        }

        .account-user-info h3 {
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 5px;
        }

        .account-user-info p {
          font-size: 11px;
          color: #d6e2d8;
          margin: 0 0 7px;
          overflow-wrap: anywhere;
        }

        .account-plan {
          display: inline-block;
          padding: 5px 9px;
          background: rgba(255,255,255,0.13);
          border-radius: 20px;
          font-size: 10px;
          color: #eef4ed;
        }

        .account-edit {
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 9px;
          background: transparent;
          color: #fff;
          padding: 8px 10px;
          font-size: 11px;
          cursor: pointer;
        }

        .account-section-title {
          font-size: 13px;
          font-weight: 750;
          color: #526257;
          margin: 0 0 13px;
        }

        .account-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .account-menu-item {
          display: flex;
          align-items: center;
          gap: 13px;
          width: 100%;
          padding: 15px;
          border: 1px solid #e8ebe5;
          border-radius: 14px;
          background: #fff;
          text-align: left;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .account-menu-item:active {
          transform: scale(0.99);
        }

        .account-menu-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          border-radius: 12px;
          background: #f0f4ed;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .account-menu-content {
          flex: 1;
          min-width: 0;
        }

        .account-menu-content strong {
          display: block;
          font-size: 13px;
          color: #35483c;
          margin-bottom: 5px;
        }

        .account-menu-content small {
          display: block;
          font-size: 10px;
          line-height: 1.5;
          color: #929b94;
        }

        .account-arrow {
          color: #a5aea5;
          font-size: 19px;
        }

        .account-signout {
          width: 100%;
          margin-top: 24px;
          padding: 14px;
          border: 1px solid #eadfdb;
          border-radius: 12px;
          background: #fff;
          color: #a35d50;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
        }

        .account-version {
          text-align: center;
          color: #a6aea7;
          font-size: 10px;
          margin-top: 25px;
        }
      `}</style>

      <div className="account-container">
        <header className="account-header">
          <div className="account-brand">AAMAAL</div>

          <div className="account-header-actions">
            <button
              className="account-icon-button"
              aria-label="Notifications"
              onClick={() => navigate("/notifications")}
            >
              🔔
            </button>

            <button
              className="account-icon-button"
              aria-label="Settings"
              onClick={() => navigate("/settings")}
            >
              ⚙️
            </button>
          </div>
        </header>

        <h1 className="account-heading">My Account</h1>

        <p className="account-subtitle">
          Manage your profile, family and spiritual journey.
        </p>

        <section className="account-profile-card">
          <div className="account-avatar">{user.initials}</div>

          <div className="account-user-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span className="account-plan">{user.plan}</span>
          </div>

          <button
            className="account-edit"
            onClick={() => navigate("/account/profile")}
          >
            Edit
          </button>
        </section>

        <h2 className="account-section-title">ACCOUNT MANAGEMENT</h2>

        <div className="account-menu">
          {menuItems.map((item) => (
            <button
              key={item.title}
              className="account-menu-item"
              onClick={() => navigate(item.route)}
            >
              <span className="account-menu-icon">{item.icon}</span>

              <span className="account-menu-content">
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>

              <span className="account-arrow">›</span>
            </button>
          ))}
        </div>

        <button
          className="account-signout"
          onClick={() => navigate("/logout")}
        >
          ↪ &nbsp; Sign out
        </button>

        <p className="account-version">
          Aamaal · Live with Purpose
          <br />
          Version 1.0.0
        </p>
      </div>
    </div>
  );
}