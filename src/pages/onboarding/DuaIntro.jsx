import { useNavigate } from "react-router-dom";

export default function DuaIntro() {
  const navigate = useNavigate();

  const duas = [
    {
      title: "Dua for Ease",
      arabic: "رَبِّ يَسِّرْ وَلَا تُعَسِّرْ",
      translation: "My Lord, make it easy and do not make it difficult.",
      icon: "☀️",
    },
    {
      title: "Dua for Forgiveness",
      arabic: "رَبِّ اغْفِرْ لِي",
      translation: "My Lord, forgive me.",
      icon: "🤲",
    },
    {
      title: "Dua for Guidance",
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path.",
      icon: "🌙",
    },
  ];

  return (
    <main className="dua-intro">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Amiri:wght@400;700&display=swap');

        .dua-intro {
          min-height:100svh;
          display:flex;
          flex-direction:column;
          position:relative;
          overflow:hidden;
          isolation:isolate;
          padding:max(24px,env(safe-area-inset-top)) 22px
            max(24px,env(safe-area-inset-bottom));
          background:linear-gradient(
            180deg,#e6eee2 0%,#fff5df 45%,#d9c69c 100%
          );
          color:#12432f;
          font-family:'DM Sans',sans-serif;
          box-sizing:border-box;
        }

        .dua-intro * { box-sizing:border-box; }

        .dua-status {
          display:flex;
          justify-content:space-between;
          color:#18352c;
          font-size:14px;
          font-weight:700;
        }

        .dua-content {
          width:100%;
          max-width:450px;
          margin:clamp(35px,7vh,65px) auto 0;
          text-align:center;
        }

        .dua-eyebrow {
          color:#a47a35;
          font-size:12px;
          font-weight:700;
          letter-spacing:3px;
          text-transform:uppercase;
        }

        .dua-title {
          font-family:'Playfair Display',serif;
          font-size:clamp(38px,10vw,51px);
          line-height:1.16;
          margin:12px 0;
          color:#06452f;
        }

        .dua-divider {
          width:140px;
          height:2px;
          margin:18px auto;
          background:linear-gradient(
            90deg,transparent,#bb974f,transparent
          );
        }

        .dua-description {
          max-width:370px;
          margin:0 auto;
          font-family:'Playfair Display',serif;
          font-size:18px;
          line-height:1.6;
          color:#405346;
        }

        .dua-cards {
          display:flex;
          flex-direction:column;
          gap:12px;
          margin-top:28px;
          text-align:left;
        }

        .dua-card {
          display:flex;
          align-items:center;
          gap:13px;
          padding:13px;
          border:1px solid rgba(143,119,70,.19);
          border-radius:17px;
          background:rgba(255,252,242,.88);
          box-shadow:0 4px 12px rgba(55,55,30,.07);
        }

        .dua-icon {
          width:54px;
          height:60px;
          flex-shrink:0;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:12px;
          background:linear-gradient(145deg,#e9d9ae,#fff3d9);
          font-size:27px;
        }

        .dua-card-content {
          flex:1;
          min-width:0;
        }

        .dua-card-title {
          margin:0 0 5px;
          color:#234333;
          font-size:14px;
          font-weight:700;
        }

        .dua-arabic {
          margin:0;
          color:#07543b;
          font-family:'Amiri',serif;
          font-size:23px;
          line-height:1.6;
          direction:rtl;
          text-align:right;
        }

        .dua-translation {
          margin:3px 0 0;
          color:#777568;
          font-size:10px;
          line-height:1.5;
        }

        .dua-arrow {
          color:#55725c;
          font-size:22px;
        }

        .dua-library-note {
          margin:20px auto 0;
          color:#52644f;
          font-size:13px;
          font-weight:500;
        }

        .dua-spacer {
          flex:1;
          min-height:25px;
        }

        .dua-pagination {
          display:flex;
          justify-content:center;
          gap:13px;
          margin-bottom:26px;
        }

        .dua-dot {
          width:13px;
          height:13px;
          border:2px solid #fff;
          border-radius:50%;
          background:transparent;
          box-shadow:0 1px 4px #0002;
        }

        .dua-dot.active {
          width:15px;
          height:15px;
          background:#fff;
        }

        .dua-next {
          width:100%;
          min-height:65px;
          border:2px solid white;
          border-radius:50px;
          background:linear-gradient(135deg,#08724f,#00452e);
          color:white;
          font-family:'Playfair Display',serif;
          font-size:24px;
          font-weight:600;
          cursor:pointer;
          box-shadow:0 6px 18px #002b2038;
        }

        .dua-next:active {
          transform:scale(.985);
        }

        .dua-skip {
          display:block;
          margin:12px auto 0;
          border:0;
          background:transparent;
          color:#fff;
          font-size:13px;
          font-weight:600;
          padding:8px 16px;
          cursor:pointer;
          text-shadow:0 1px 5px #002c20;
        }

        @media(max-height:740px) {
          .dua-content { margin-top:3vh; }
          .dua-cards { gap:8px; margin-top:17px; }
          .dua-card { padding:9px; }
          .dua-icon { height:48px; }
          .dua-description { font-size:16px; }
        }

        @media(prefers-reduced-motion:reduce) {
          .dua-intro * { scroll-behavior:auto; }
        }
      `}</style>

      <div className="dua-status">
        <span>9:41</span>
        <span>◖ ▰ ▣</span>
      </div>

      <section className="dua-content">

        <div className="dua-eyebrow">
          Words of remembrance
        </div>

        <h1 className="dua-title">
          A Dua for
          <br />
          Every Moment
        </h1>

        <div className="dua-divider" />

        <p className="dua-description">
          Find the right Dua for every occasion.
          Explore authentic supplications,
          understand their meanings and keep
          your heart connected with Allah.
        </p>

        <div className="dua-cards">
          {duas.map((dua, index) => (
            <div className="dua-card" key={index}>
              <div className="dua-icon">
                {dua.icon}
              </div>

              <div className="dua-card-content">
                <h3 className="dua-card-title">
                  {dua.title}
                </h3>

                <p className="dua-arabic">
                  {dua.arabic}
                </p>

                <p className="dua-translation">
                  {dua.translation}
                </p>
              </div>

              <span className="dua-arrow">›</span>
            </div>
          ))}
        </div>

        <p className="dua-library-note">
          Arabic · Transliteration · Translation · References
        </p>

      </section>

      <div className="dua-spacer" />

      <footer>
        <div className="dua-pagination">
          <span className="dua-dot" />
          <span className="dua-dot" />
          <span className="dua-dot" />
          <span className="dua-dot active" />
        </div>

        <button
          className="dua-next"
          onClick={() => navigate("/onboarding/stories")}
        >
          Next →
        </button>

        <button
          className="dua-skip"
          onClick={() => navigate("/login")}
        >
          Skip
        </button>
      </footer>
    </main>
  );
}