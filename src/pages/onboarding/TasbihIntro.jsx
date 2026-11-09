import { useNavigate } from "react-router-dom";

export default function TasbihIntro() {
  const navigate = useNavigate();

  return (
    <main className="tasbih-intro">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        .tasbih-intro {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          padding: max(24px,env(safe-area-inset-top)) 25px
            max(24px,env(safe-area-inset-bottom));
          overflow: hidden;
          position: relative;
          isolation: isolate;
          background: linear-gradient(
            180deg,#063d30 0%,#0c6347 48%,#e7d8b6 100%
          );
          font-family: 'DM Sans',sans-serif;
          color: white;
          box-sizing: border-box;
        }

        .tasbih-intro * { box-sizing: border-box; }

        .tasbih-status {
          display:flex;
          justify-content:space-between;
          font-size:14px;
          font-weight:700;
        }

        .tasbih-content {
          text-align:center;
          margin:clamp(45px,8vh,75px) auto 0;
          width:100%;
          max-width:450px;
        }

        .tasbih-label {
          color:#e4c989;
          font-size:12px;
          font-weight:700;
          letter-spacing:3px;
          text-transform:uppercase;
        }

        .tasbih-title {
          font-family:'Playfair Display',serif;
          font-size:clamp(37px,10vw,51px);
          line-height:1.15;
          margin:12px 0;
          color:#fff8e8;
        }

        .tasbih-description {
          max-width:370px;
          margin:15px auto;
          color:#e8eee5;
          font-size:17px;
          line-height:1.65;
        }

        .tasbih-visual {
          position:relative;
          width:min(78vw,310px);
          aspect-ratio:1;
          margin:35px auto 25px;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .tasbih-ring {
          position:absolute;
          width:90%;
          height:90%;
          border:1px solid rgba(235,208,142,.5);
          border-radius:50%;
          box-shadow:0 0 35px rgba(226,190,103,.12);
        }

        .tasbih-bead {
          position:absolute;
          width:clamp(35px,10vw,48px);
          height:clamp(35px,10vw,48px);
          border-radius:50%;
          background:radial-gradient(
            circle at 30% 25%,#70d4b0,#087052 55%,#03422f
          );
          border:2px solid #d5b66f;
          box-shadow:inset -4px -5px 8px #002c22,
            inset 3px 3px 6px #b0f0d3,
            0 4px 8px #001e16;
        }

        .tasbih-bead.active {
          background:radial-gradient(
            circle at 30% 25%,#fff0a9,#d8a83e 55%,#8a5b13
          );
          box-shadow:0 0 24px #e6bd64,inset -3px -4px 7px #9b671a;
        }

        .tasbih-count {
          position:relative;
          z-index:2;
          color:#fff6dc;
          text-align:center;
          font-family:'Playfair Display',serif;
        }

        .tasbih-count strong {
          display:block;
          font-size:57px;
          line-height:1;
        }

        .tasbih-count span {
          color:#e4d3a8;
          font-size:15px;
        }

        .tasbih-dhikr {
          font-family:'Playfair Display',serif;
          color:#f3d99a;
          font-size:25px;
          font-style:italic;
          margin-top:15px;
        }

        .tasbih-benefits {
          display:flex;
          justify-content:center;
          gap:12px;
          margin:25px auto;
          max-width:380px;
        }

        .tasbih-benefit {
          flex:1;
          padding:13px 5px;
          border:1px solid rgba(255,255,255,.22);
          background:rgba(255,255,255,.09);
          border-radius:15px;
          font-size:12px;
          color:#fff8e8;
        }

        .tasbih-benefit span {
          display:block;
          font-size:22px;
          margin-bottom:7px;
        }

        .tasbih-spacer { flex:1; min-height:25px; }

        .tasbih-pagination {
          display:flex;
          justify-content:center;
          gap:13px;
          margin-bottom:28px;
        }

        .tasbih-dot {
          width:13px;
          height:13px;
          border:2px solid white;
          border-radius:50%;
        }

        .tasbih-dot.active {
          background:white;
          width:15px;
          height:15px;
        }

        .tasbih-next {
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
        }

        .tasbih-skip {
          display:block;
          margin:12px auto 0;
          border:0;
          background:transparent;
          color:white;
          font-size:13px;
          padding:8px 16px;
          cursor:pointer;
        }

        @media(max-height:700px) {
          .tasbih-content { margin-top:3vh; }
          .tasbih-visual { width:min(58vw,230px); margin:15px auto; }
          .tasbih-description { font-size:15px; }
          .tasbih-benefits { margin:12px auto; }
        }

        @media(prefers-reduced-motion:reduce) {
          .tasbih-intro * { scroll-behavior:auto; }
        }
      `}</style>

      <div className="tasbih-status">
        <span>9:41</span>
        <span>◖ ▰ ▣</span>
      </div>

      <section className="tasbih-content">

        <div className="tasbih-label">
          Your daily remembrance
        </div>

        <h1 className="tasbih-title">
          Dhikr Made
          <br />
          Beautiful
        </h1>

        <p className="tasbih-description">
          Keep your heart connected with Allah.
          Experience a peaceful, interactive Tasbih
          designed to make remembrance part of
          your everyday life.
        </p>

        <div className="tasbih-visual">
          <div className="tasbih-ring" />

          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 - 90) * Math.PI / 180;

            return (
              <div
                key={i}
                className={`tasbih-bead ${i === 0 ? "active" : ""}`}
                style={{
                  left: `calc(50% + ${Math.cos(angle) * 43}% - 19px)`,
                  top: `calc(50% + ${Math.sin(angle) * 43}% - 19px)`,
                }}
              />
            );
          })}

          <div className="tasbih-count">
            <strong>33</strong>
            <span>/ 100</span>
          </div>
        </div>

        <div className="tasbih-dhikr">
          SubhanAllah
        </div>

        <div className="tasbih-benefits">
          <div className="tasbih-benefit">
            <span>📿</span>
            Beautiful Tasbih
          </div>

          <div className="tasbih-benefit">
            <span>🎯</span>
            Personal Goals
          </div>

          <div className="tasbih-benefit">
            <span>📊</span>
            Track Progress
          </div>
        </div>

      </section>

      <div className="tasbih-spacer" />

      <footer>
        <div className="tasbih-pagination">
          <span className="tasbih-dot" />
          <span className="tasbih-dot" />
          <span className="tasbih-dot active" />
          <span className="tasbih-dot" />
        </div>

        <button
          className="tasbih-next"
          onClick={() => navigate("/onboarding/duas")}
        >
          Next →
        </button>

        <button
          className="tasbih-skip"
          onClick={() => navigate("/login")}
        >
          Skip
        </button>
      </footer>
    </main>
  );
}