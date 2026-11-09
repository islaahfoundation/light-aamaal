import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [profileName, setProfileName] = useState("there");

  // Demo dashboard values until connected to the Aamaal data system.
  const [progress] = useState({
    percentage: 67,
    completedGoals: 2,
    totalGoals: 3,
    dhikr: 33,
    sessions: 1,
    reminders: 1,
  });

  useEffect(() => {
    try {
      const profile = JSON.parse(
        localStorage.getItem("aamaal-profile") || "{}"
      );

      const activeId = localStorage.getItem("aamaal-active-profile");
      const family = JSON.parse(
        localStorage.getItem("aamaal-family") || "[]"
      );

      const activeMember = family.find(
        (member) => member.id === activeId
      );

      const name = activeMember?.name || profile.name;

      if (name) {
        setProfileName(name.split(" ")[0]);
      }
    } catch {
      setProfileName("there");
    }
  }, []);

  const quickActions = [
    {
      title: "Tasbih",
      icon: "tasbih",
      route: "/tasbih",
    },
    {
      title: "Duas",
      icon: "dua",
      route: "/duas",
    },
    {
      title: "Stories",
      icon: "book",
      route: "/stories",
    },
    {
      title: "Saved",
      icon: "saved",
      route: "/saved",
    },
  ];

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  const Icon = ({ name, size = 26 }) => {
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
            <circle cx="16" cy="16" r="10.5" strokeDasharray="2.5 2.5" />
            <circle cx="16" cy="5.5" r="2" fill="currentColor" />
            <path d="M16 26.5v2.5l3 1" />
          </svg>
        );

      case "dua":
        return (
          <svg {...common}>
            <path d="M16 27s-10-6-10-14a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 8-10 14-10 14Z" />
            <path d="M16 8v15M12 13l4-5 4 5" />
          </svg>
        );

      case "book":
        return (
          <svg {...common}>
            <path d="M16 8c-3-3-8-3-12-2v20c4-1 9-1 12 2" />
            <path d="M16 8c3-3 8-3 12-2v20c-4-1-9-1-12 2" />
            <path d="M16 8v20" />
          </svg>
        );

      case "saved":
        return (
          <svg {...common}>
            <path d="M8 5h16v23l-8-6-8 6V5Z" />
          </svg>
        );

      case "bell":
        return (
          <svg {...common}>
            <path d="M7 22h18l-2-3v-7a7 7 0 0 0-14 0v7l-2 3Z" />
            <path d="M13 26a3 3 0 0 0 6 0" />
          </svg>
        );

      case "settings":
        return (
          <svg {...common}>
            <circle cx="16" cy="16" r="4" />
            <path d="m13 3 1-2h4l1 2 3 2 2-1 3 3-1 2 1 4 2 1v4l-2 1-1 4 1 2-3 3-2-1-3 2-1 2h-4l-1-2-3-2-2 1-3-3 1-2-1-4-2-1v-4l2-1 1-4-1-2 3-3 2 1 3-2Z" />
          </svg>
        );

      case "search":
        return (
          <svg {...common}>
            <circle cx="13.5" cy="13.5" r="8" />
            <path d="m20 20 7 7" />
          </svg>
        );

      case "arrow":
        return (
          <svg {...common}>
            <path d="m12 7 9 9-9 9" />
          </svg>
        );

      case "home":
        return (
          <svg {...common}>
            <path d="m3 14 13-11 13 11v15H19v-9h-6v9H3V14Z" />
          </svg>
        );

      case "more":
        return (
          <svg {...common}>
            <rect x="3" y="6" width="26" height="20" rx="5" />
            <circle cx="10" cy="16" r="1" fill="currentColor" />
            <circle cx="16" cy="16" r="1" fill="currentColor" />
            <circle cx="22" cy="16" r="1" fill="currentColor" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="home-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .home-page {
          min-height: 100vh;
          background: #fbf8ed;
          color: #17372a;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          padding-bottom: 100px;
          overflow-x: hidden;
        }

        .home-container {
          width: 100%;
          max-width: 520px;
          margin: auto;
        }

        /* Hero */

        .home-hero {
          position: relative;
          min-height: 510px;
          padding: 45px 25px 35px;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              rgba(255, 251, 236, 0.05) 0%,
              rgba(255, 249, 226, 0.15) 48%,
              #fbf8ed 100%
            ),
            url("https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200")
            center center / cover no-repeat;
        }

        .home-topbar {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .home-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .home-brand-mark {
          width: 90px;
          height: 80px;
          color: #075b43;
        }

        .home-brand-name {
          font-family: Georgia, serif;
          font-size: 39px;
          line-height: 1;
          font-weight: 700;
          color: #07513c;
          margin: 0;
        }

        .home-brand-tagline {
          font-family: Georgia, serif;
          font-size: 15px;
          font-weight: 600;
          margin-top: 7px;
          color: #315c47;
        }

        .home-header-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .home-icon-button {
          border: none;
          background: transparent;
          color: #143e2d;
          padding: 4px;
          cursor: pointer;
        }

        .home-greeting {
          position: relative;
          z-index: 1;
          margin-top: 57px;
          max-width: 340px;
        }

        .home-greeting-small {
          font-size: 19px;
          font-weight: 600;
          margin: 0 0 12px;
          color: #17412f;
        }

        .home-greeting h1 {
          font-family: Georgia, serif;
          font-size: 43px;
          line-height: 1.12;
          font-weight: 700;
          margin: 0;
          color: #064a35;
        }

        .home-greeting-subtitle {
          font-family: Georgia, serif;
          font-size: 18px;
          font-weight: 700;
          margin: 15px 0 0;
          color: #214a36;
        }

        /* Search */

        .home-search {
          position: absolute;
          z-index: 3;
          bottom: 5px;
          left: 22px;
          right: 22px;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 20px;
          background: #fffdf6;
          border: 1px solid #e6e0cc;
          border-radius: 45px;
          box-shadow: 0 5px 15px #344c321c;
        }

        .home-search-icon {
          color: #174a36;
          display: flex;
        }

        .home-search input {
          flex: 1;
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 15px;
          color: #243b30;
          min-width: 0;
        }

        .home-search input::placeholder {
          color: #777c73;
        }

        /* Main content */

        .home-content {
          padding: 25px 20px 20px;
        }

        /* Progress */

        .home-progress-card {
          position: relative;
          overflow: hidden;
          padding: 20px 20px 17px;
          color: white;
          border-radius: 27px;
          background: linear-gradient(145deg, #075b40, #003e2b);
          box-shadow: 0 7px 17px #003f2c24;
        }

        .home-progress-card::after {
          content: "❧";
          position: absolute;
          left: -3px;
          bottom: -22px;
          font-size: 74px;
          color: #8bbd6d;
          opacity: 0.32;
          transform: rotate(-30deg);
          pointer-events: none;
        }

        .home-progress-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .home-progress-heading h2 {
          font-family: Georgia, serif;
          font-size: 23px;
          font-weight: 600;
          margin: 0;
        }

        .home-view-details {
          display: flex;
          align-items: center;
          gap: 3px;
          border: none;
          background: transparent;
          color: white;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
        }

        .home-progress-main {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 15px 7px 19px;
        }

        .home-progress-ring {
          width: 125px;
          height: 125px;
          flex-shrink: 0;
          border-radius: 50%;
          background: conic-gradient(
            #a6d83d 0% 67%,
            #d9e98a 67% 72%,
            #367f5c 72% 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-3deg);
        }

        .home-progress-ring-inner {
          width: 101px;
          height: 101px;
          border-radius: 50%;
          background: #075039;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(3deg);
          font-family: Georgia, serif;
          font-size: 31px;
          font-weight: 700;
        }

        .home-progress-summary {
          font-family: Georgia, serif;
          font-size: 20px;
          line-height: 1.5;
          max-width: 150px;
        }

        .home-progress-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding-top: 5px;
        }

        .home-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          text-align: center;
          color: #f7f5e8;
          position: relative;
        }

        .home-stat + .home-stat::before {
          content: "";
          position: absolute;
          left: 0;
          top: 15px;
          bottom: 8px;
          width: 1px;
          background: #9bb6a3;
          opacity: 0.55;
        }

        .home-stat-icon {
          color: #e7d58b;
          height: 35px;
          display: flex;
          align-items: center;
        }

        .home-stat-label {
          font-size: 14px;
        }

        .home-stat strong {
          font-family: Georgia, serif;
          font-size: 23px;
        }

        /* Quick actions */

        .home-section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 28px 0 16px;
        }

        .home-section-heading h2 {
          font-size: 21px;
          font-weight: 700;
          margin: 0;
          color: #163c2c;
        }

        .home-see-all {
          display: flex;
          align-items: center;
          gap: 3px;
          border: none;
          background: transparent;
          color: #174a35;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .home-quick-actions {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .home-quick-action {
          min-width: 0;
          min-height: 100px;
          border: 1px solid #e7ebd6;
          border-radius: 20px;
          background: #eff1d9;
          color: #164c37;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 3px 9px #33452b0d;
        }

        .home-quick-action span {
          font-size: 13px;
          font-weight: 600;
        }

        /* Featured Dua */

        .home-featured-card {
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: 175px;
          overflow: hidden;
          border-radius: 22px;
          margin-top: 27px;
          background: #f6e8c7;
          border: 1px solid #e6d6b6;
          box-shadow: 0 4px 12px #6b4d2518;
        }

        .home-featured-image {
          min-height: 175px;
          background:
            url("https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=700")
            center / cover no-repeat;
        }

        .home-featured-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 15px 14px;
          background: linear-gradient(135deg, #fff3d8, #f5e2b9);
        }

        .home-featured-label {
          align-self: flex-start;
          border-radius: 20px;
          padding: 5px 10px;
          background: #dfe9bd;
          color: #274a31;
          font-size: 10px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .home-featured-content h3 {
          font-family: Georgia, serif;
          font-size: 20px;
          line-height: 1.2;
          color: #253e2b;
          margin: 0 0 12px;
        }

        .home-featured-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          align-self: flex-start;
          border: none;
          border-radius: 25px;
          padding: 9px 15px;
          background: #08704e;
          color: white;
          font-family: Georgia, serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Bottom navigation */

        .home-bottom-nav {
          position: fixed;
          z-index: 10;
          bottom: 0;
          left: 0;
          right: 0;
          background: #fffdf6;
          border-top: 1px solid #e9e5d8;
          box-shadow: 0 -4px 14px #273d3010;
          padding: 9px 12px max(9px, env(safe-area-inset-bottom));
        }

        .home-bottom-nav-inner {
          max-width: 520px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .home-nav-item {
          border: none;
          background: transparent;
          color: #747b73;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 4px;
          cursor: pointer;
        }

        .home-nav-item.active {
          color: #08704e;
        }

        .home-nav-item span {
          font-size: 12px;
          font-weight: 600;
        }

        .home-nav-item.active::after {
          content: "";
          height: 3px;
          width: 48px;
          border-radius: 5px;
          background: #08704e;
          margin-top: 2px;
        }

        @media (min-width: 600px) {
          .home-page {
            padding-bottom: 110px;
          }

          .home-hero {
            min-height: 540px;
            border-radius: 0 0 28px 28px;
          }

          .home-content {
            padding-left: 25px;
            padding-right: 25px;
          }
        }

        @media (max-width: 380px) {
          .home-hero {
            min-height: 465px;
            padding-left: 19px;
            padding-right: 19px;
          }

          .home-brand-mark {
            width: 65px;
            height: 65px;
          }

          .home-brand-name {
            font-size: 31px;
          }

          .home-brand-tagline {
            font-size: 12px;
          }

          .home-header-actions {
            gap: 8px;
          }

          .home-greeting {
            margin-top: 48px;
          }

          .home-greeting h1 {
            font-size: 36px;
          }

          .home-progress-card {
            padding: 17px 14px;
          }

          .home-progress-heading h2 {
            font-size: 20px;
          }

          .home-progress-ring {
            width: 105px;
            height: 105px;
          }

          .home-progress-ring-inner {
            width: 85px;
            height: 85px;
            font-size: 27px;
          }

          .home-progress-main {
            gap: 15px;
          }

          .home-progress-summary {
            font-size: 17px;
          }

          .home-quick-actions {
            gap: 7px;
          }

          .home-quick-action {
            min-height: 88px;
          }

          .home-quick-action span {
            font-size: 11px;
          }

          .home-featured-content h3 {
            font-size: 17px;
          }
        }
      `}</style>

      <div className="home-container">
        {/* HERO HEADER */}

        <section className="home-hero">
          <header className="home-topbar">
            <div className="home-brand">
              <svg
                className="home-brand-mark"
                viewBox="0 0 100 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
                aria-label="Aamaal mosque logo"
              >
                <path d="M7 80V39L50 5l43 34v41" />
                <path d="M25 80V54a25 25 0 0 1 50 0v26" />
                <path d="M35 80V51a15 15 0 0 1 30 0v29" />
                <path d="M50 25V17" />
                <path d="M46 17h8" />
                <path d="M3 80h94" />
                <path d="M13 80V59l-5-6-5 6v21" />
                <path d="M97 80V59l-5-6-5 6v21" />
              </svg>

              <div>
                <p className="home-brand-name">Aamaal</p>
                <div className="home-brand-tagline">
                  Live with Purpose
                </div>
              </div>
            </div>

            <div className="home-header-actions">
              <button
                className="home-icon-button"
                onClick={() => navigate("/notifications")}
                aria-label="Notifications"
              >
                <Icon name="bell" size={27} />
              </button>

              <button
                className="home-icon-button"
                onClick={() => navigate("/settings")}
                aria-label="Settings"
              >
                <Icon name="settings" size={27} />
              </button>
            </div>
          </header>

          <div className="home-greeting">
            <p className="home-greeting-small">
              Assalamu Alaikum, {profileName}
            </p>

            <h1>
              Your spiritual
              <br />
              journey
            </h1>

            <p className="home-greeting-subtitle">
              Take a step closer to Allah
            </p>
          </div>

          <form className="home-search" onSubmit={handleSearch}>
            <div className="home-search-icon">
              <Icon name="search" size={27} />
            </div>

            <input
              type="search"
              placeholder="Search duas, reflections..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search Aamaal"
            />
          </form>
        </section>

        <main className="home-content">
          {/* TODAY'S PROGRESS */}

          <section className="home-progress-card">
            <div className="home-progress-heading">
              <h2>Today's Progress</h2>

              <button
                className="home-view-details"
                onClick={() => navigate("/progress")}
              >
                View details
                <Icon name="arrow" size={17} />
              </button>
            </div>

            <div className="home-progress-main">
              <div className="home-progress-ring">
                <div className="home-progress-ring-inner">
                  {progress.percentage}%
                </div>
              </div>

              <div className="home-progress-summary">
                {progress.completedGoals} of {progress.totalGoals} Goals
                <br />
                completed
              </div>
            </div>

            <div className="home-progress-stats">
              <div className="home-stat">
                <div className="home-stat-icon">
                  <Icon name="tasbih" size={34} />
                </div>
                <span className="home-stat-label">Dhikr</span>
                <strong>{progress.dhikr}</strong>
              </div>

              <div className="home-stat">
                <div className="home-stat-icon">
                  <Icon name="book" size={34} />
                </div>
                <span className="home-stat-label">Sessions</span>
                <strong>{progress.sessions}</strong>
              </div>

              <div className="home-stat">
                <div className="home-stat-icon">
                  <Icon name="bell" size={34} />
                </div>
                <span className="home-stat-label">Reminders</span>
                <strong>{progress.reminders}</strong>
              </div>
            </div>
          </section>

          {/* QUICK ACTIONS */}

          <section>
            <div className="home-section-heading">
              <h2>Quick Actions</h2>

              <button
                className="home-see-all"
                onClick={() => navigate("/more")}
              >
                See all
                <Icon name="arrow" size={16} />
              </button>
            </div>

            <div className="home-quick-actions">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  className="home-quick-action"
                  onClick={() => navigate(action.route)}
                >
                  <Icon name={action.icon} size={33} />
                  <span>{action.title}</span>
                </button>
              ))}
            </div>
          </section>

          {/* FEATURED DUA */}

          <section className="home-featured-card">
            <div className="home-featured-image" />

            <div className="home-featured-content">
              <span className="home-featured-label">
                DAILY FEATURED DUA
              </span>

              <h3>Dua for ease in affairs</h3>

              <button
                className="home-featured-button"
                onClick={() => navigate("/duas/featured")}
              >
                Read dua
                <Icon name="arrow" size={16} />
              </button>
            </div>
          </section>
        </main>
      </div>

      {/* BOTTOM NAVIGATION */}

      <nav className="home-bottom-nav">
        <div className="home-bottom-nav-inner">
          <button className="home-nav-item active">
            <Icon name="home" size={27} />
            <span>Home</span>
          </button>

          <button
            className="home-nav-item"
            onClick={() => navigate("/tasbih")}
          >
            <Icon name="tasbih" size={27} />
            <span>Tasbih</span>
          </button>

          <button
            className="home-nav-item"
            onClick={() => navigate("/duas")}
          >
            <Icon name="book" size={27} />
            <span>Duas</span>
          </button>

          <button
            className="home-nav-item"
            onClick={() => navigate("/more")}
          >
            <Icon name="more" size={27} />
            <span>More</span>
          </button>
        </div>
      </nav>
    </div>
  );
}