import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Note: In Vite, you can import assets directly like this. 
// If your logo is named something else, just change the filename here!
import headerBg from "../../assets/backgrounds/header.png"; 

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [progress] = useState({
    percentage: 0,
    completedGoals: 0,
    totalGoals: 3,
    dhikr: 0,
    sessions: 0,
    reminders: 1,
  });

  const quickActions = [
    { title: "Tasbih", icon: "tasbih", route: "/tasbih" },
    { title: "Duas", icon: "dua", route: "/duas" },
    { title: "Stories", icon: "book", route: "/stories" },
    { title: "Saved", icon: "saved", route: "/saved" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    } else {
      navigate("/search");
    }
  };

  const Icon = ({ name, size = 24 }) => {
    const common = {
      width: size,
      height: size,
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.9,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    switch (name) {
      case "tasbih":
        return (
          <svg {...common}>
            <circle cx="16" cy="14.5" r="8.5" strokeDasharray="1.5 3.2" strokeWidth="2.4" />
            <path d="M16 23v4.5M14 27.5h4" strokeWidth="2" />
            <circle cx="16" cy="6" r="1.8" fill="currentColor" />
          </svg>
        );
      case "dua":
        return (
          <svg {...common}>
            <path d="M9 18.5V12a2 2 0 0 1 4 0v5" />
            <path d="M13 14v-3.5a2 2 0 0 1 4 0V17" />
            <path d="M9 17.5c-1.5 1-2.5 2.8-2.5 4.8 0 3.2 2.6 5.2 6.5 5.2h1.5c2 0 3.5-1.2 3.5-3v-7" />
            <path d="M23 18.5V12a2 2 0 0 0-4 0v5" />
            <path d="M23 17.5c1.5 1 2.5 2.8 2.5 4.8 0 3.2-2.6 5.2-6.5 5.2h-1.5" />
          </svg>
        );
      case "book":
        return (
          <svg {...common}>
            <path d="M16 8.5c-3-2.2-7.5-2.5-11-1.5v17c3.5-1 8-.7 11 1.5" />
            <path d="M16 8.5c3-2.2 7.5-2.5 11-1.5v17c-3.5-1-8-.7-11 1.5" />
            <path d="M16 8.5v17" />
          </svg>
        );
      case "saved":
        return (
          <svg {...common}>
            <path d="M9 5.5h14a1 1 0 0 1 1 1v20l-8-5.5-8 5.5v-20a1 1 0 0 1 1-1Z" />
          </svg>
        );
      case "bell":
        return (
          <svg {...common}>
            <path d="M8 22h16l-1.8-2.8V13a6.2 6.2 0 0 0-12.4 0v6.2L8 22Z" />
            <path d="M13.5 25a2.5 2.5 0 0 0 5 0" />
          </svg>
        );
      case "settings":
        return (
          <svg {...common}>
            <circle cx="16" cy="16" r="3.8" />
            <path d="M19.4 12.6a1.8 1.8 0 0 0 .36-1.98l-.07-.12a2.18 2.18 0 0 1 2.98-2.98l.12.07a1.8 1.8 0 0 0 1.98-.36l.09-.09a2.18 2.18 0 0 1 3.08 3.08l-.09.09a1.8 1.8 0 0 0-.36 1.98v.14a1.8 1.8 0 0 0 1.48 1.09h.14a2.18 2.18 0 0 1 0 4.36h-.14a1.8 1.8 0 0 0-1.48 1.09v.14a1.8 1.8 0 0 0 .36 1.98l.09.09a2.18 2.18 0 0 1-3.08 3.08l-.09-.09a1.8 1.8 0 0 0-1.98-.36l-.12.07a2.18 2.18 0 0 1-2.98-2.98l.07-.12a1.8 1.8 0 0 0-.36-1.98l-.1-.1a1.8 1.8 0 0 0-1.98-.36h-.14a1.8 1.8 0 0 0-1.09 1.48v.14a2.18 2.18 0 0 1-4.36 0v-.14a1.8 1.8 0 0 0-1.09-1.48h-.14a1.8 1.8 0 0 0-1.98.36l-.09.09a2.18 2.18 0 0 1-3.08-3.08l.09-.09a1.8 1.8 0 0 0 .36-1.98v-.14A1.8 1.8 0 0 0 5.62 18H5.5a2.18 2.18 0 0 1 0-4.36h.14a1.8 1.8 0 0 0 1.48-1.09v-.14a1.8 1.8 0 0 0-.36-1.98l-.09-.09a2.18 2.18 0 0 1 3.08-3.08l.09.09a1.8 1.8 0 0 0 1.98.36l.12-.07a2.18 2.18 0 0 1 2.98 2.98l-.07.12a1.8 1.8 0 0 0 .36 1.98l.1.1Z" />
          </svg>
        );
      case "search":
        return (
          <svg {...common}>
            <circle cx="14" cy="14" r="7.5" />
            <path d="m19.5 19.5 6 6" />
          </svg>
        );
      case "arrow":
        return (
          <svg {...common}>
            <path d="m12 8 8 8-8 8" strokeWidth="2.2" />
          </svg>
        );
      case "home-filled":
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
            <path d="M15.1 4.2a1.4 1.4 0 0 1 1.8 0l11 9.5c.65.56.25 1.63-.6 1.63H25v11.2c0 .83-.67 1.5-1.5 1.5h-5.2v-7.5h-4.6V28H8.5A1.5 1.5 0 0 1 7 26.5V15.3H4.7c-.85 0-1.25-1.07-.6-1.63l11-9.5Z" />
          </svg>
        );
      case "more":
        return (
          <svg {...common}>
            <rect x="4" y="7" width="24" height="18" rx="4.5" />
            <circle cx="11" cy="16" r="1.2" fill="currentColor" />
            <circle cx="16" cy="16" r="1.2" fill="currentColor" />
            <circle cx="21" cy="16" r="1.2" fill="currentColor" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-page">
      <style>{`
        .home-page {
          height: 100vh;
          max-height: 100vh;
          overflow: hidden; /* Stops all scrolling */
          background: #f4f2ea;
          color: #123b2a;
          font-family: "DM Sans", Inter, -apple-system, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .home-container {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* HERO SECTION (Dynamically sizes to fit screen) */
        .home-hero {
          position: relative;
          padding: max(22px, env(safe-area-inset-top)) 20px 20px;
          flex-shrink: 0;
          height: 38vh; /* Adjusts automatically to screen size */
          min-height: 250px;
          background:
            linear-gradient(
              180deg,
              rgba(246, 244, 236, 0.25) 0%,
              rgba(246, 244, 236, 0.1) 55%,
              #f4f2ea 100%
            ),
            url(${headerBg}) center top / cover no-repeat;
        }

        .home-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .home-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .home-brand-logo {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          object-fit: contain;
        }

        .home-brand-name {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
          color: #0b4a35;
          margin: 0;
        }

        .home-brand-tagline {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.2px;
          color: #2c5845;
          margin-top: 3px;
        }

        .home-top-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* FIXED SETTINGS BUTTON */
        .home-circle-btn {
          width: 38px;
          height: 38px;
          min-width: 38px;
          min-height: 38px;
          flex-shrink: 0;           /* Prevents stretching */
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(6px);
          color: #143f2d;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(20, 50, 35, 0.08);
          padding: 0;
          box-sizing: border-box;   /* Ensures padding doesn't affect size */
        }

        .home-greeting {
          margin-top: 3vh;
        }

        .home-greeting-salutation {
          font-size: 14px;
          font-weight: 500;
          color: #2c5945;
          margin: 0 0 4px;
        }

        .home-greeting h1 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(28px, 7vh, 34px);
          line-height: 1.1;
          font-weight: 700;
          color: #0b4631;
          margin: 0;
        }

        .home-greeting-sub {
          font-size: 13px;
          font-weight: 600;
          color: #1f3e30;
          margin: 6px 0 0;
        }

        /* SEARCH BAR */
        .home-search {
          position: absolute;
          bottom: 2px; /* Changed from -15px to pull it closer to the text */
          left: 20px;
          right: 20px;
          height: 48px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid #e6e2d6;
          border-radius: 999px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          gap: 11px;
          box-shadow: 0 6px 18px rgba(24, 52, 38, 0.07);
          z-index: 10;
        }

        .home-search-left { color: #2b4c3b; display: flex; }
        .home-search input {
          flex: 1; border: none; outline: none; background: transparent;
          font-size: 14px; color: #243b30; min-height: unset; padding: 0;
        }
        .home-search input::placeholder { color: #6e766f; }
        .home-search-go {
          background: transparent; border: none; color: #4f5d54;
          display: flex; align-items: center; padding: 4px; cursor: pointer;
        }

        /* MAIN BODY (Flexes to fill remaining space) */
        .home-main {
          flex: 1;
          padding: 10px 20px 20px; /* Reduced top padding from 35px to 10px */
          display: flex;
          flex-direction: column;
          justify-content: space-evenly; 
          margin-bottom: 76px; 
        }

        /* TODAY'S PROGRESS */
        .home-progress-card {
          border-radius: 20px;
          padding: 16px;
          background: linear-gradient(135deg, #0d4833 0%, #073524 100%);
          color: #ffffff;
          box-shadow: 0 10px 24px rgba(9, 56, 39, 0.18);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .home-progress-left {
          padding-right: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .home-progress-ring {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: conic-gradient(#42b883 0% 25%, rgba(255, 255, 255, 0.16) 25% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-progress-ring-inner {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: #0b412d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
        }

        .home-progress-vdivider {
          width: 1px;
          align-self: stretch;
          background: rgba(255, 255, 255, 0.16);
          margin: 4px 0;
        }

        .home-progress-right {
          flex: 1;
          padding-left: 14px;
          min-width: 0;
        }

        .home-progress-toprow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .home-progress-title {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .home-progress-sub {
          font-size: 11px;
          color: #b7cec2;
          margin: 2px 0 0;
        }

        .home-progress-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 10px;
        }

        .home-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .home-stat + .home-stat::before {
          content: ""; position: absolute; left: 0; top: 4px; bottom: 2px;
          width: 1px; background: rgba(255, 255, 255, 0.16);
        }

        .home-stat-icon {
          color: #d6b265;
          margin-bottom: 2px;
          display: flex;
        }

        .home-stat:nth-child(2) .home-stat-icon,
        .home-stat:nth-child(3) .home-stat-icon { color: #7cc9a5; }

        .home-stat-label { font-size: 10px; color: #c5d9cf; }
        .home-stat-value {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 16px; font-weight: 700; color: #ffffff; margin-top: 1px;
        }

        /* QUICK ACTIONS */
        .home-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px; /* Reduced from 10px */
        }

        .home-section-head h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 20px; font-weight: 700; color: #133929; margin: 0;
        }

        .home-see-all {
          background: transparent; border: none; color: #29493a;
          font-size: 12px; font-weight: 600; display: inline-flex;
          align-items: center; gap: 3px; cursor: pointer; padding: 0;
        }

        .home-quick-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          flex-shrink: 0;
        }

        .home-quick-btn {
          height: 78px; /* Compact height */
          border-radius: 16px;
          background: #f8f6ef;
          border: 1px solid #e8e4d8;
          box-shadow: 0 4px 12px rgba(30, 50, 38, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #124d36;
          cursor: pointer;
        }

        .home-quick-btn span {
          font-size: 11.5px;
          font-weight: 600;
          color: #1e3a2d;
        }

        /* BOTTOM NAVIGATION */
        .home-bottom-nav {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 20;
          background: #f8f6ef; border-top: 1px solid #e6e2d5;
          padding: 8px 12px max(10px, env(safe-area-inset-bottom));
        }

        .home-bottom-nav-inner {
          max-width: 480px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr);
        }

        .home-nav-item {
          border: none; background: transparent; color: #616e66;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 3px; padding: 2px 0; cursor: pointer;
        }

        .home-nav-item.active { color: #0b4a35; }
        .home-nav-item span { font-size: 11.5px; font-weight: 500; }
        .home-nav-item.active span { font-weight: 700; }
      `}</style>

      <div className="home-container">
        {/* HERO */}
        <section className="home-hero">
          <header className="home-topbar">
            <div className="home-brand">
              {/* Using a standard img tag for your custom logo asset */}
              <img 
                src="/src/assets/logo.png" 
                alt="Aamaal Logo" 
                className="home-brand-logo"
                onError={(e) => {
                   // Fallback circle if image path is incorrect
                   e.target.style.display = 'none';
                }}
              />

              <div>
                <h2 className="home-brand-name">Aamaal</h2>
                <div className="home-brand-tagline">Live with Purpose</div>
              </div>
            </div>

            <div className="home-top-actions">
              <button className="home-circle-btn" onClick={() => navigate("/search")}>
                <Icon name="search" size={20} />
              </button>
              <button className="home-circle-btn" onClick={() => navigate("/settings")}>
                <Icon name="settings" size={20} />
              </button>
            </div>
          </header>

          <div className="home-greeting">
            <p className="home-greeting-salutation">Assalamu Alaikum</p>
            <h1>Your spiritual<br />journey</h1>
            <p className="home-greeting-sub">Take a step closer to Allah</p>
          </div>

          <form className="home-search" onSubmit={handleSearch}>
            <span className="home-search-left">
              <Icon name="search" size={20} />
            </span>
            <input
              type="search"
              placeholder="Search duas and reflections..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="home-search-go">
              <Icon name="arrow" size={18} />
            </button>
          </form>
        </section>

        {/* MAIN CONTENT (Dynamically spaced) */}
        <main className="home-main">
          
          <section className="home-progress-card">
            <div className="home-progress-left">
              <div className="home-progress-ring">
                <div className="home-progress-ring-inner">
                  {progress.percentage}%
                </div>
              </div>
            </div>
            <div className="home-progress-vdivider" />
            <div className="home-progress-right">
              <div className="home-progress-toprow">
                <div>
                  <h2 className="home-progress-title">Today's Progress</h2>
                  <p className="home-progress-sub">
                    {progress.completedGoals} of {progress.totalGoals} goals completed
                  </p>
                </div>
              </div>
              <div className="home-progress-stats">
                <div className="home-stat">
                  <span className="home-stat-icon"><Icon name="tasbih" size={18} /></span>
                  <span className="home-stat-label">Dhikr</span>
                  <strong className="home-stat-value">{progress.dhikr}</strong>
                </div>
                <div className="home-stat">
                  <span className="home-stat-icon"><Icon name="book" size={18} /></span>
                  <span className="home-stat-label">Sessions</span>
                  <strong className="home-stat-value">{progress.sessions}</strong>
                </div>
                <div className="home-stat">
                  <span className="home-stat-icon"><Icon name="bell" size={18} /></span>
                  <span className="home-stat-label">Reminders</span>
                  <strong className="home-stat-value">{progress.reminders}</strong>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="home-section-head">
              <h2>Quick Actions</h2>
              <button className="home-see-all" onClick={() => navigate("/more")}>
                See all <Icon name="arrow" size={14} />
              </button>
            </div>
            <div className="home-quick-grid">
              {quickActions.map((item) => (
                <button key={item.title} className="home-quick-btn" onClick={() => navigate(item.route)}>
                  <Icon name={item.icon} size={26} />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="home-bottom-nav">
        <div className="home-bottom-nav-inner">
          <button className="home-nav-item active">
            <Icon name="home-filled" size={24} />
            <span>Home</span>
          </button>
          <button className="home-nav-item" onClick={() => navigate("/tasbih")}>
            <Icon name="tasbih" size={24} />
            <span>Tasbih</span>
          </button>
          <button className="home-nav-item" onClick={() => navigate("/duas")}>
            <Icon name="book" size={24} />
            <span>Duas</span>
          </button>
          <button className="home-nav-item" onClick={() => navigate("/more")}>
            <Icon name="more" size={24} />
            <span>More</span>
          </button>
        </div>
      </nav>
    </div>
  );
}