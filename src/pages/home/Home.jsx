import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [profileName, setProfileName] = useState("there");

  const [progress] = useState({
    percentage: 0,
    completedGoals: 0,
    totalGoals: 3,
    dhikr: 0,
    sessions: 0,
    reminders: 1,
  });

  useEffect(() => {
    try {
      const profile = JSON.parse(localStorage.getItem("aamaal-profile") || "{}");
      const activeId = localStorage.getItem("aamaal-active-profile");
      const family = JSON.parse(localStorage.getItem("aamaal-family") || "[]");
      const activeMember = family.find((member) => member.id === activeId);
      const name = activeMember?.name || profile.name;
      if (name) setProfileName(name.split(" ")[0]);
    } catch {
      setProfileName("there");
    }
  }, []);

  const quickActions = [
    { title: "Tasbih", icon: "tasbih", route: "/tasbih" },
    { title: "Duas", icon: "dua", route: "/duas" },
    { title: "Stories", icon: "book", route: "/stories" },
    { title: "Saved", icon: "saved", route: "/saved" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim()) navigate(`/search?q=${encodeURIComponent(search.trim())}`);
  };

  const Icon = ({ name, size = 24 }) => {
    const common = {
      width: size,
      height: size,
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    switch (name) {
      case "tasbih":
        return (
          <svg {...common}>
            {/* Beaded circle */}
            <circle cx="16" cy="4.5" r="1.6" />
            <circle cx="21" cy="5.8" r="1.6" />
            <circle cx="24.5" cy="9.5" r="1.6" />
            <circle cx="25.5" cy="14.5" r="1.6" />
            <circle cx="23.8" cy="19.5" r="1.6" />
            <circle cx="19.8" cy="22.8" r="1.6" />
            <circle cx="12.2" cy="22.8" r="1.6" />
            <circle cx="8.2" cy="19.5" r="1.6" />
            <circle cx="6.5" cy="14.5" r="1.6" />
            <circle cx="7.5" cy="9.5" r="1.6" />
            <circle cx="11" cy="5.8" r="1.6" />
            {/* Bottom connector & tassel */}
            <circle cx="16" cy="24" r="1.8" />
            <path d="M16 25.8v2.2m0 0-2 2.5m2-2.5 2 2.5" />
          </svg>
        );
      case "dua":
        return (
          <svg {...common}>
            {/* Cupped praying hands */}
            <path d="M15 24H9.5A2.5 2.5 0 0 1 7 21.5v-5.2c0-1.8.8-3.5 2.2-4.6L12.5 9a1.6 1.6 0 0 1 2.5 1.3V24Z" />
            <path d="M17 24h5.5a2.5 2.5 0 0 0 2.5-2.5v-5.2c0-1.8-.8-3.5-2.2-4.6L19.5 9a1.6 1.6 0 0 0-2.5 1.3V24Z" />
            <path d="M11 16.5l1.8-1.5M21 16.5l-1.8-1.5" />
            <path d="M6.5 24h19" />
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
            <path d="M7.5 22.5h17l-2-2.8v-6.2a6.5 6.5 0 0 0-13 0v6.2l-2 2.8Z" />
            <path d="M13.5 25.5a2.5 2.5 0 0 0 5 0" />
            <path d="M16 5v2" />
          </svg>
        );
      case "settings":
        return (
          <svg {...common}>
            <circle cx="16" cy="16" r="4" />
            <path d="M16 5v2.5m0 17V27M8.2 8.2 10 10m12 12 1.8 1.8M5 16h2.5m17 0H27M8.2 23.8 10 22m12-12 1.8-1.8" />
            <circle cx="16" cy="16" r="8.5" strokeDasharray="3.5 3" />
          </svg>
        );
      case "search":
        return (
          <svg {...common}>
            <circle cx="14.5" cy="14.5" r="7.5" />
            <path d="m20 20 6 6" />
          </svg>
        );
      case "arrow":
        return (
          <svg {...common} strokeWidth={2.2}>
            <path d="m12 7 9 9-9 9" />
          </svg>
        );
      case "home":
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
            <path
              d="M4.5 14.5 16 5l11.5 9.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 12.5 16 5.5l8.5 7V26a1 1 0 0 1-1 1h-5v-6.5a2.5 2.5 0 0 0-5 0V27h-5a1 1 0 0 1-1-1V12.5Z"
              fill="currentColor"
            />
          </svg>
        );
      case "more":
        return (
          <svg {...common}>
            <rect x="4" y="7" width="24" height="18" rx="4.5" />
            <circle cx="10.5" cy="16" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="21.5" cy="16" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        
        .home-page {
          min-height: 100vh;
          background: #f6f4ec;
          color: #123e2b;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          padding-bottom: 96px;
          overflow-x: hidden;
        }

        .home-container {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          background: #f6f4ec;
        }

        /* Hero Section */
        .home-hero {
          position: relative;
          padding: 22px 20px 26px;
          overflow: hidden;
          background: linear-gradient(135deg, #f7f5ee 0%, #ede9dc 45%, #d8e5ea 100%);
        }

        /* Mosque Background Image + Seamless Blending Overlays */
        .home-hero-bg {
          position: absolute;
          top: 0;
          right: -15%;
          width: 90%;
          height: 100%;
          background: url("https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1000&q=80") right center / cover no-repeat;
          opacity: 0.9;
          z-index: 0;
          mask-image: linear-gradient(to right, transparent 2%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 65%);
          -webkit-mask-image: linear-gradient(to right, transparent 2%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 65%);
        }

        .home-hero-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(246, 244, 236, 0.15) 0%, rgba(246, 244, 236, 0.25) 68%, #f6f4ec 100%);
          z-index: 1;
        }

        /* Top Bar */
        .home-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 3;
        }

        .home-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .home-brand-mark {
          width: 58px;
          height: 52px;
          color: #0d4a33;
          flex-shrink: 0;
        }

        .home-brand-text h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 31px;
          font-weight: 700;
          line-height: 1;
          color: #0b4630;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .home-brand-text p {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #3b5a4b;
          margin: 5px 0 0;
        }

        .home-header-actions {
          display: flex;
          gap: 10px;
        }

        .home-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(252, 250, 243, 0.88);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(220, 214, 198, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #16402d;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }

        /* Greeting */
        .home-greeting {
          margin-top: 28px;
          position: relative;
          z-index: 3;
          max-width: 68%;
        }

        .home-greeting p {
          font-size: 16.5px;
          font-weight: 500;
          color: #365c49;
          margin: 0 0 6px;
        }

        .home-greeting h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 38px;
          line-height: 1.08;
          font-weight: 700;
          color: #09422c;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .home-greeting-sub {
          font-size: 14px;
          font-weight: 600;
          color: #1c3d2e;
          display: block;
          margin-top: 12px;
        }

        .home-swoosh {
          width: 120px;
          height: 10px;
          margin-top: 2px;
          margin-left: 10px;
          display: block;
        }

        /* Search Pill */
        .home-search-wrap {
          margin-top: 18px;
          position: relative;
          z-index: 3;
        }

        .home-search {
          display: flex;
          align-items: center;
          background: rgba(251, 249, 243, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid #e5dfd0;
          border-radius: 999px;
          padding: 11px 18px;
          box-shadow: 0 8px 22px rgba(18, 55, 40, 0.08);
        }

        .home-search-icon {
          color: #35473e;
          display: flex;
          align-items: center;
        }

        .home-search input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14.5px;
          font-weight: 500;
          margin-left: 10px;
          color: #243b30;
          font-family: inherit;
        }

        .home-search input::placeholder {
          color: #6c7770;
          font-weight: 400;
        }

        .home-search button {
          background: transparent;
          border: none;
          color: #2c4237;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0;
        }

        /* Main Content */
        .home-content {
          padding: 0 20px 20px;
          margin-top: -6px;
          position: relative;
          z-index: 4;
        }

        /* Today's Progress Card */
        .home-progress-card {
          background: linear-gradient(135deg, #0b4932 0%, #14593e 55%, #0c432d 100%);
          border-radius: 22px;
          padding: 18px 18px 16px;
          color: #ffffff;
          box-shadow: 0 12px 26px rgba(9, 62, 42, 0.22);
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        /* Subtle Mosque Silhouette Watermark inside Progress Card */
        .home-progress-watermark {
          position: absolute;
          right: -10px;
          bottom: -15px;
          width: 175px;
          height: 155px;
          opacity: 0.08;
          pointer-events: none;
          color: #79cfa6;
        }

        .home-progress-left {
          padding-right: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-progress-ring {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: 7px solid #45936c;
          background: rgba(8, 53, 35, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 2px 6px rgba(0,0,0,0.2);
        }

        .home-progress-ring span {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .home-progress-v-divider {
          width: 1px;
          align-self: stretch;
          background: rgba(255, 255, 255, 0.15);
          margin: 4px 0;
        }

        .home-progress-right {
          flex: 1;
          padding-left: 16px;
          position: relative;
          z-index: 1;
        }

        .home-progress-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .home-progress-info h3 {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 3px;
          color: #ffffff;
        }

        .home-progress-info p {
          font-size: 12.5px;
          color: #b7d1c4;
          margin: 0;
          font-weight: 400;
        }

        .home-progress-view {
          background: transparent;
          border: none;
          color: #b7d1c4;
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 3px;
          cursor: pointer;
          padding: 0;
          white-space: nowrap;
        }

        .home-progress-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .home-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0 4px;
        }

        .home-stat:first-child {
          padding-left: 0;
        }

        .home-stat:last-child {
          border-right: none;
          padding-right: 0;
        }

        .home-stat-icon {
          color: #dfbe7f;
          margin-bottom: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-stat:nth-child(2) .home-stat-icon,
        .home-stat:nth-child(3) .home-stat-icon {
          color: #a9d9c1;
        }

        .home-stat-label {
          font-size: 11px;
          color: #cfe2d8;
          margin-bottom: 2px;
        }

        .home-stat-val {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
        }

        /* Section Header */
        .home-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .home-section-header h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 23px;
          font-weight: 700;
          color: #113c2a;
          margin: 0;
        }

        .home-section-header button {
          background: transparent;
          border: none;
          color: #264939;
          font-size: 13.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          padding: 0;
        }

        /* Quick Actions */
        .home-quick-actions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 11px;
          margin-bottom: 24px;
        }

        .home-action-btn {
          background: #f8f5ec;
          border: 1px solid #e8e2d2;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 15px 6px 13px;
          color: #125137;
          cursor: pointer;
          box-shadow: 0 5px 14px rgba(20, 50, 35, 0.05);
          transition: transform 0.15s ease;
        }

        .home-action-btn:active {
          transform: scale(0.97);
        }

        .home-action-btn span {
          font-size: 12.5px;
          font-weight: 600;
          color: #1d3c2e;
          margin-top: 8px;
        }

        /* Featured Cards */
        .home-card {
          background: #f8f5ec;
          border: 1px solid #e9e3d4;
          border-radius: 22px;
          display: flex;
          overflow: hidden;
          margin-bottom: 16px;
          box-shadow: 0 6px 18px rgba(20, 50, 35, 0.06);
          cursor: pointer;
          position: relative;
        }

        .home-card-img-wrap {
          width: 39%;
          position: relative;
          flex-shrink: 0;
        }

        .home-card-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .home-card-img-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 65%, #f8f5ec 100%);
        }

        .home-card-content {
          padding: 18px 18px 18px 12px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .home-card-arabesque {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 110px;
          height: 110px;
          opacity: 0.05;
          pointer-events: none;
          color: #124d35;
        }

        .home-tag {
          display: inline-block;
          background: #d8e5d7;
          color: #1d5239;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 8px;
          align-self: flex-start;
          text-transform: uppercase;
        }

        .home-card h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #103b29;
          margin: 0 0 5px;
          line-height: 1.2;
        }

        .home-card p {
          font-size: 12.5px;
          color: #55665c;
          margin: 0 0 12px;
          font-weight: 500;
        }

        .home-read-btn {
          background: #105238;
          color: #ffffff;
          border: none;
          border-radius: 999px;
          padding: 7px 15px;
          font-size: 12.5px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          align-self: flex-start;
          cursor: pointer;
          box-shadow: 0 3px 8px rgba(16, 82, 56, 0.25);
        }

        /* Continue Reading Card Specifics */
        .home-card-compact {
          min-height: 118px;
        }

        .home-card-compact .home-card-content {
          padding-right: 48px;
        }

        .home-card-compact h3 {
          font-size: 17.5px;
          margin-bottom: 4px;
        }

        .home-card-compact p {
          font-size: 11.5px;
          margin-bottom: 11px;
        }

        .home-progress-bar {
          width: 100%;
          height: 5px;
          background: #e3dfd3;
          border-radius: 999px;
          overflow: hidden;
        }

        .home-progress-fill {
          height: 100%;
          background: #13533a;
          width: 38%;
          border-radius: 999px;
        }

        .home-card-arrow-circle {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e4ece4;
          color: #164f37;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Bottom Navigation */
        .home-bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #f9f7f0;
          border-top: 1px solid #e7e2d3;
          padding: 8px 12px max(10px, env(safe-area-inset-bottom));
          z-index: 20;
          box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.03);
        }

        .home-bottom-nav-inner {
          max-width: 480px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .home-nav-item {
          background: transparent;
          border: none;
          color: #54635b;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          cursor: pointer;
          padding: 4px 0;
          position: relative;
        }

        .home-nav-item.active {
          color: #0e5a3e;
        }

        .home-nav-item span {
          font-size: 11.5px;
          font-weight: 500;
        }

        .home-nav-item.active span {
          font-weight: 700;
        }

        .home-nav-item.active::after {
          content: "";
          height: 3px;
          width: 34px;
          background: #0e5a3e;
          border-radius: 3px;
          margin-top: 3px;
        }
      `}</style>

      <div className="home-container">
        <section className="home-hero">
          <div className="home-hero-bg" />
          <div className="home-hero-fade" />

          <header className="home-topbar">
            <div className="home-brand">
              {/* Custom Mosque Frame Logo */}
              <svg className="home-brand-mark" viewBox="0 0 100 88" fill="none">
                {/* Outer Arch Frame */}
                <path
                  d="M14 78V36L50 9l36 27v42"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 78h84"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Left & Right Minarets */}
                <path
                  d="M23 78V52l3-6 3 6v26M71 78V52l3-6 3 6v26"
                  fill="currentColor"
                />
                {/* Center Mosque Dome */}
                <path
                  d="M33 78V60c0-11 7.5-19 17-23 9.5 4 17 12 17 23v18H33Z"
                  fill="currentColor"
                />
                {/* Spire & Crescent */}
                <path
                  d="M50 37V28"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M47 25.5a3.5 3.5 0 1 0 6 0 4 4 0 1 1-6 0Z"
                  fill="currentColor"
                />
              </svg>
              <div className="home-brand-text">
                <h1>Aamaal</h1>
                <p>Live with Purpose</p>
              </div>
            </div>

            <div className="home-header-actions">
              <button className="home-icon-circle" aria-label="Search">
                <Icon name="search" size={20} />
              </button>
              <button
                className="home-icon-circle"
                onClick={() => navigate("/settings")}
                aria-label="Settings"
              >
                <Icon name="settings" size={21} />
              </button>
            </div>
          </header>

          <div className="home-greeting">
            <p>Assalamu Alaikum</p>
            <h2>
              Your spiritual
              <br />
              journey
            </h2>
            <span className="home-greeting-sub">Take a step closer to Allah</span>
            {/* Golden Swoosh Accent */}
            <svg className="home-swoosh" viewBox="0 0 140 12" fill="none">
              <path
                d="M2 9.5C38 2.5 92 1.5 138 7"
                stroke="#d5b26e"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="home-search-wrap">
            <form className="home-search" onSubmit={handleSearch}>
              <span className="home-search-icon">
                <Icon name="search" size={20} />
              </span>
              <input
                type="search"
                placeholder="Search duas and reflections..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" aria-label="Go">
                <Icon name="arrow" size={18} />
              </button>
            </form>
          </div>
        </section>

        <main className="home-content">
          {/* Today's Progress Card */}
          <section className="home-progress-card">
            {/* Subtle Background Mosque Watermark */}
            <svg className="home-progress-watermark" viewBox="0 0 120 100" fill="currentColor">
              <path d="M60 15c-18 8-30 22-30 42v43h60V57c0-20-12-34-30-42ZM15 45l5-10 5 10v55H15V45Zm80 0 5-10 5 10v55H95V45Z" />
            </svg>

            <div className="home-progress-left">
              <div className="home-progress-ring">
                <span>{progress.percentage}%</span>
              </div>
            </div>

            <div className="home-progress-v-divider" />

            <div className="home-progress-right">
              <div className="home-progress-header">
                <div className="home-progress-info">
                  <h3>Today's Progress</h3>
                  <p>
                    {progress.completedGoals} of {progress.totalGoals} goals completed
                  </p>
                </div>
                <button
                  className="home-progress-view"
                  onClick={() => navigate("/progress")}
                >
                  View details <Icon name="arrow" size={12} />
                </button>
              </div>

              <div className="home-progress-stats">
                <div className="home-stat">
                  <div className="home-stat-icon">
                    <Icon name="tasbih" size={22} />
                  </div>
                  <span className="home-stat-label">Dhikr</span>
                  <span className="home-stat-val">{progress.dhikr}</span>
                </div>

                <div className="home-stat">
                  <div className="home-stat-icon">
                    <Icon name="book" size={22} />
                  </div>
                  <span className="home-stat-label">Sessions</span>
                  <span className="home-stat-val">{progress.sessions}</span>
                </div>

                <div className="home-stat">
                  <div className="home-stat-icon">
                    <Icon name="bell" size={22} />
                  </div>
                  <span className="home-stat-label">Reminders</span>
                  <span className="home-stat-val">{progress.reminders}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <div className="home-section-header">
              <h2>Quick Actions</h2>
              <button onClick={() => navigate("/more")}>
                See all <Icon name="arrow" size={14} />
              </button>
            </div>
            <div className="home-quick-actions">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  className="home-action-btn"
                  onClick={() => navigate(action.route)}
                >
                  <Icon name={action.icon} size={30} />
                  <span>{action.title}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Daily Featured Dua Card */}
          <section className="home-card" onClick={() => navigate("/duas/featured")}>
            <div className="home-card-img-wrap">
              <div
                className="home-card-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=700")',
                }}
              />
              <div className="home-card-img-fade" />
            </div>
            <div className="home-card-content">
              <svg className="home-card-arabesque" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="38" />
                <rect x="23" y="23" width="54" height="54" transform="rotate(45 50 50)" />
                <rect x="23" y="23" width="54" height="54" />
              </svg>
              <span className="home-tag">DAILY FEATURED DUA</span>
              <h3>
                Dua for ease in
                <br />
                affairs
              </h3>
              <p>Recite when facing difficulties.</p>
              <button className="home-read-btn">
                Read dua <Icon name="arrow" size={12} />
              </button>
            </div>
          </section>

          {/* Continue Reading Card */}
          <section
            className="home-card home-card-compact"
            onClick={() => navigate("/stories")}
          >
            <div className="home-card-img-wrap">
              <div
                className="home-card-img"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1548013146-72479768bada?w=700")',
                }}
              />
              <div className="home-card-img-fade" />
            </div>
            <div className="home-card-content">
              <span className="home-tag">CONTINUE READING</span>
              <h3>The Valley of Makkah</h3>
              <p>Lesson 2 of 6 · Character Over Power</p>
              <div className="home-progress-bar">
                <div className="home-progress-fill" />
              </div>
              <span className="home-card-arrow-circle">
                <Icon name="arrow" size={14} />
              </span>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Navigation */}
      <nav className="home-bottom-nav">
        <div className="home-bottom-nav-inner">
          <button className="home-nav-item active">
            <Icon name="home" size={25} />
            <span>Home</span>
          </button>
          <button className="home-nav-item" onClick={() => navigate("/tasbih")}>
            <Icon name="tasbih" size={25} />
            <span>Tasbih</span>
          </button>
          <button className="home-nav-item" onClick={() => navigate("/duas")}>
            <Icon name="book" size={25} />
            <span>Duas</span>
          </button>
          <button className="home-nav-item" onClick={() => navigate("/more")}>
            <Icon name="more" size={25} />
            <span>More</span>
          </button>
        </div>
      </nav>
    </div>
  );
}