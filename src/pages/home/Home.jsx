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
      width: size, height: size, viewBox: "0 0 32 32", fill: "none",
      stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round",
    };
    switch (name) {
      case "tasbih": return <svg {...common}><circle cx="16" cy="16" r="10.5" strokeDasharray="2.5 2.5" /><circle cx="16" cy="5.5" r="2" fill="currentColor" /><path d="M16 26.5v2.5l3 1" /></svg>;
      case "dua": return <svg {...common}><path d="M16 27s-10-6-10-14a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 8-10 14-10 14Z" /><path d="M16 8v15M12 13l4-5 4 5" /></svg>;
      case "book": return <svg {...common}><path d="M16 8c-3-3-8-3-12-2v20c4-1 9-1 12 2" /><path d="M16 8c3-3 8-3 12-2v20c-4-1-9-1-12 2" /><path d="M16 8v20" /></svg>;
      case "saved": return <svg {...common}><path d="M8 5h16v23l-8-6-8 6V5Z" /></svg>;
      case "bell": return <svg {...common}><path d="M7 22h18l-2-3v-7a7 7 0 0 0-14 0v7l-2 3Z" /><path d="M13 26a3 3 0 0 0 6 0" /></svg>;
      case "settings": return <svg {...common}><circle cx="16" cy="16" r="5" /><path d="M16 4v3m0 18v3m8.5-17.5-2.1 2.1m-12.8 12.8-2.1 2.1M28 16h-3M7 16H4m17.5 8.5-2.1-2.1M8.4 8.4l2.1 2.1" /></svg>;
      case "search": return <svg {...common}><circle cx="14" cy="14" r="8" /><path d="m20 20 7 7" /></svg>;
      case "arrow": return <svg {...common}><path d="m12 7 9 9-9 9" /></svg>;
      case "home": return <svg {...common}><path d="m3 14 13-11 13 11v15H19v-9h-6v9H3V14Z" /></svg>;
      case "more": return <svg {...common}><rect x="3" y="6" width="26" height="20" rx="5" /><circle cx="10" cy="16" r="1" fill="currentColor" /><circle cx="16" cy="16" r="1" fill="currentColor" /><circle cx="22" cy="16" r="1" fill="currentColor" /></svg>;
      default: return null;
    }
  };

  return (
    <div className="home-page">
      <style>{`
        * { box-sizing: border-box; }
        .home-page {
          min-height: 100vh; background: #faf9f5; color: #17372a;
          font-family: Inter, -apple-system, sans-serif;
          padding-bottom: 100px; overflow-x: hidden;
        }
        .home-container { width: 100%; max-width: 520px; margin: auto; }

        /* Hero */
        .home-hero {
          position: relative; padding: 45px 20px 25px;
          background: linear-gradient(180deg, rgba(255, 251, 236, 0.05) 0%, rgba(255, 249, 226, 0.25) 48%, #faf9f5 100%),
            url("https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200") center top / cover no-repeat;
        }
        .home-topbar { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 2; }
        .home-brand { display: flex; align-items: center; gap: 10px; }
        .home-brand-mark { width: 45px; height: 45px; color: #075b43; }
        .home-brand-text h1 { font-family: Georgia, serif; font-size: 26px; line-height: 1; color: #07513c; margin: 0; }
        .home-brand-text p { font-size: 10px; font-weight: 600; letter-spacing: 1px; color: #315c47; margin: 4px 0 0; text-transform: uppercase; }
        
        .home-header-actions { display: flex; gap: 10px; }
        .home-icon-circle {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.9); border: 1px solid #e2ddcf;
          display: flex; align-items: center; justify-content: center;
          color: #143e2d; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .home-greeting { margin-top: 35px; position: relative; z-index: 1; }
        .home-greeting p { font-size: 16px; font-weight: 500; color: #345c4b; margin: 0 0 5px; }
        .home-greeting h2 { font-family: Georgia, serif; font-size: 40px; line-height: 1.1; font-weight: 600; color: #064a35; margin: 0; }
        .home-greeting span { font-size: 14px; font-weight: 600; color: #214a36; display: block; margin-top: 10px; }
        
        /* Search Pill */
        .home-search-wrap {
          margin-top: 25px; position: relative; z-index: 3;
        }
        .home-search {
          display: flex; align-items: center; background: #ffffff;
          border: 1px solid #e6e0cc; border-radius: 30px;
          padding: 12px 20px; box-shadow: 0 8px 20px rgba(23, 74, 54, 0.06);
        }
        .home-search input { flex: 1; border: none; outline: none; background: transparent; font-size: 15px; margin-left: 12px; color: #243b30; }
        .home-search button { background: transparent; border: none; color: #243b30; cursor: pointer; display: flex; align-items: center; }

        .home-content { padding: 0 20px 20px; margin-top: -15px; position: relative; z-index: 4; }

        /* Progress Card */
        .home-progress-card {
          background: #084c33; border-radius: 24px; padding: 20px; color: white;
          box-shadow: 0 10px 25px rgba(8, 76, 51, 0.15); margin-bottom: 30px; position: relative; overflow: hidden;
        }
        .home-progress-top { display: flex; align-items: center; gap: 18px; margin-bottom: 20px; }
        .home-progress-ring {
          width: 80px; height: 80px; border-radius: 50%;
          background: conic-gradient(#56c483 0%, #1e694b 0%);
          display: flex; align-items: center; justify-content: center;
        }
        .home-progress-ring-inner {
          width: 64px; height: 64px; background: #084c33; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: Georgia, serif; font-size: 24px; font-weight: 700;
        }
        .home-progress-info h3 { font-size: 16px; font-weight: 500; margin: 0 0 4px; }
        .home-progress-info p { font-size: 13px; color: #9bbcae; margin: 0; }
        .home-progress-view { position: absolute; top: 20px; right: 20px; background: transparent; border: none; color: #9bbcae; font-size: 12px; display: flex; align-items: center; gap: 4px; cursor: pointer; }
        .home-progress-divider { height: 1px; background: rgba(255,255,255,0.15); margin: 0 -20px 15px; }
        
        .home-progress-stats { display: flex; justify-content: space-between; }
        .home-stat { flex: 1; text-align: center; display: flex; flex-direction: column; align-items: center; border-right: 1px solid rgba(255,255,255,0.15); }
        .home-stat:last-child { border-right: none; }
        .home-stat-icon { color: #d3ad62; margin-bottom: 6px; }
        .home-stat-label { font-size: 12px; color: #9bbcae; margin-bottom: 4px; }
        .home-stat-val { font-family: Georgia, serif; font-size: 20px; font-weight: 700; }

        /* Section Headers */
        .home-section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 15px; }
        .home-section-header h2 { font-family: Georgia, serif; font-size: 22px; color: #163c2c; margin: 0; }
        .home-section-header button { background: transparent; border: none; color: #163c2c; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 4px; cursor: pointer; }

        /* Quick Actions */
        .home-quick-actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 30px; }
        .home-action-btn {
          background: #fcfbf6; border: 1px solid #eae5d4; border-radius: 18px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 18px 5px; color: #164c37; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }
        .home-action-btn span { font-size: 12px; font-weight: 600; margin-top: 8px; }

        /* Cards */
        .home-card {
          background: #fbf6ec; border: 1px solid #efe8d6; border-radius: 22px;
          display: flex; overflow: hidden; margin-bottom: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          cursor: pointer;
        }
        .home-card-img { width: 38%; min-height: 140px; background-size: cover; background-position: center; }
        .home-card-content { padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: center; position: relative; }
        .home-tag { display: inline-block; background: #dce5ce; color: #274a31; font-size: 10px; font-weight: 700; padding: 4px 8px; border-radius: 12px; margin-bottom: 10px; align-self: flex-start; }
        .home-card h3 { font-family: Georgia, serif; font-size: 18px; color: #163c2c; margin: 0 0 6px; line-height: 1.2; }
        .home-card p { font-size: 12px; color: #5a6b61; margin: 0 0 12px; }
        
        .home-read-btn { background: #084c33; color: white; border: none; border-radius: 20px; padding: 6px 14px; font-size: 12px; display: inline-flex; align-items: center; gap: 4px; align-self: flex-start; }
        .home-card-arrow { position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: #084c33; }
        .home-progress-bar { width: 100%; height: 4px; background: #e2dfd3; border-radius: 2px; overflow: hidden; }
        .home-progress-fill { height: 100%; background: #084c33; width: 33%; }
        
        /* Bottom Nav */
        .home-bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: #ffffff; border-top: 1px solid #e9e5d8; padding: 10px 12px max(10px, env(safe-area-inset-bottom)); z-index: 10; }
        .home-bottom-nav-inner { max-width: 520px; margin: auto; display: grid; grid-template-columns: repeat(4, 1fr); }
        .home-nav-item { background: transparent; border: none; color: #747b73; display: flex; flex-direction: column; align-items: center; gap: 4px; cursor: pointer; }
        .home-nav-item.active { color: #08704e; }
        .home-nav-item span { font-size: 11px; font-weight: 600; }
        .home-nav-item.active::after { content: ""; height: 3px; width: 30px; background: #08704e; border-radius: 3px; margin-top: 2px; }
      `}</style>

      <div className="home-container">
        <section className="home-hero">
          <header className="home-topbar">
            <div className="home-brand">
              <svg className="home-brand-mark" viewBox="0 0 100 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
                <path d="M7 80V39L50 5l43 34v41" />
                <path d="M25 80V54a25 25 0 0 1 50 0v26" />
                <path d="M35 80V51a15 15 0 0 1 30 0v29" />
                <path d="M50 25V17" /><path d="M46 17h8" /><path d="M3 80h94" />
                <path d="M13 80V59l-5-6-5 6v21" /><path d="M97 80V59l-5-6-5 6v21" />
              </svg>
              <div className="home-brand-text">
                <h1>Aamaal</h1>
                <p>Live with Purpose</p>
              </div>
            </div>
            <div className="home-header-actions">
              <button className="home-icon-circle"><Icon name="search" size={20} /></button>
              <button className="home-icon-circle" onClick={() => navigate("/settings")}><Icon name="settings" size={20} /></button>
            </div>
          </header>

          <div className="home-greeting">
            <p>Assalamu Alaikum</p>
            <h2>Your spiritual<br />journey</h2>
            <span>Take a step closer to Allah</span>
          </div>

          <div className="home-search-wrap">
            <form className="home-search" onSubmit={handleSearch}>
              <Icon name="search" size={20} color="#777c73" />
              <input type="search" placeholder="Search duas and reflections..." value={search} onChange={(e) => setSearch(e.target.value)} />
              <button type="submit"><Icon name="arrow" size={20} /></button>
            </form>
          </div>
        </section>

        <main className="home-content">
          <section className="home-progress-card">
            <button className="home-progress-view" onClick={() => navigate("/progress")}>View details <Icon name="arrow" size={12} /></button>
            <div className="home-progress-top">
              <div className="home-progress-ring">
                <div className="home-progress-ring-inner">0%</div>
              </div>
              <div className="home-progress-info">
                <h3>Today's Progress</h3>
                <p>0 of 3 goals completed</p>
              </div>
            </div>
            <div className="home-progress-divider" />
            <div className="home-progress-stats">
              <div className="home-stat">
                <div className="home-stat-icon"><Icon name="tasbih" size={24} /></div>
                <span className="home-stat-label">Dhikr</span>
                <span className="home-stat-val">0</span>
              </div>
              <div className="home-stat">
                <div className="home-stat-icon"><Icon name="book" size={24} /></div>
                <span className="home-stat-label">Sessions</span>
                <span className="home-stat-val">0</span>
              </div>
              <div className="home-stat">
                <div className="home-stat-icon"><Icon name="bell" size={24} /></div>
                <span className="home-stat-label">Reminders</span>
                <span className="home-stat-val">1</span>
              </div>
            </div>
          </section>

          <section>
            <div className="home-section-header">
              <h2>Quick Actions</h2>
              <button onClick={() => navigate("/more")}>See all <Icon name="arrow" size={14} /></button>
            </div>
            <div className="home-quick-actions">
              {quickActions.map((action) => (
                <button key={action.title} className="home-action-btn" onClick={() => navigate(action.route)}>
                  <Icon name={action.icon} size={28} />
                  <span>{action.title}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="home-card" onClick={() => navigate("/duas/featured")}>
            <div className="home-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=700")' }} />
            <div className="home-card-content">
              <span className="home-tag">DAILY FEATURED DUA</span>
              <h3>Dua for ease in affairs</h3>
              <p>Recite when facing difficulties.</p>
              <button className="home-read-btn">Read dua <Icon name="arrow" size={12} /></button>
            </div>
          </section>

          <section className="home-card" onClick={() => navigate("/stories")}>
            <div className="home-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549221545-22d7a5b3a4a9?w=700")' }} />
            <div className="home-card-content">
              <span className="home-tag" style={{ background: '#d8e4df' }}>CONTINUE READING</span>
              <h3>The Valley of Makkah</h3>
              <p>Lesson 2 of 6 · Character Over Power</p>
              <div className="home-progress-bar"><div className="home-progress-fill" /></div>
              <span className="home-card-arrow"><Icon name="arrow" size={18} /></span>
            </div>
          </section>
        </main>
      </div>

      <nav className="home-bottom-nav">
        <div className="home-bottom-nav-inner">
          <button className="home-nav-item active"><Icon name="home" size={24} /><span>Home</span></button>
          <button className="home-nav-item" onClick={() => navigate("/tasbih")}><Icon name="tasbih" size={24} /><span>Tasbih</span></button>
          <button className="home-nav-item" onClick={() => navigate("/duas")}><Icon name="book" size={24} /><span>Duas</span></button>
          <button className="home-nav-item" onClick={() => navigate("/more")}><Icon name="more" size={24} /><span>More</span></button>
        </div>
      </nav>
    </div>
  );
}