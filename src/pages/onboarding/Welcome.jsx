import { useNavigate } from "react-router-dom";

export default function Purpose({
  nextPath = "/onboarding/tasbih",
  skipPath = "/login",
}) {
  const navigate = useNavigate();

  return (
    <main className="purpose-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        .purpose-screen {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding: max(24px, env(safe-area-inset-top)) 25px
            max(24px, env(safe-area-inset-bottom));
          background: linear-gradient(
            180deg,
            #c9dfdf 0%,
            #fff2d8 43%,
            #d7b47c 72%,
            #073e2e 100%
          );
          color: #123c2d;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .purpose-screen * {
          box-sizing: border-box;
        }

        .purpose-status {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 700;
          color: #18352c;
        }

        .purpose-content {
          text-align: center;
          margin: clamp(45px, 9vh, 85px) auto 0;
          width: 100%;
          max-width: 480px;
          animation: purposeFade .8s ease both;
        }

        .purpose-eyebrow {
          font-family: 'Playfair Display', serif;
          font-size: 25px;
          margin: 0 0 8px;
          color: #466052;
        }

        .purpose-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 10vw, 52px);
          line-height: 1.15;
          margin: 0;
          color: #06452f;
          font-weight: 700;
        }

        .purpose-divider {
          width: 150px;
          height: 2px;
          margin: 20px auto;
          background: linear-gradient(
            90deg,
            transparent,
            #b58b43,
            transparent
          );
        }

        .purpose-description {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px, 4.8vw, 23px);
          line-height: 1.55;
          margin: 0 auto;
          color: #263e32;
          max-width: 420px;
        }

        .purpose-illustration {
          width: 100%;
          max-width: 330px;
          margin: 35px auto 0;
          display: block;
          filter: drop-shadow(0 12px 15px rgba(0,0,0,.12));
        }

        .purpose-spacer {
          flex: 1;
          min-height: 35px;
        }

        .purpose-message {
          color: #fff8e8;
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          line-height: 1.5;
          margin: 0 auto 24px;
          max-width: 350px;
          text-shadow: 0 2px 8px #002c20;
        }

        .purpose-pagination {
          display: flex;
          justify-content: center;
          gap: 13px;
          margin-bottom: 28px;
        }

        .purpose-dot {
          width: 13px;
          height: 13px;
          border: 2px solid white;
          border-radius: 50%;
          background: transparent;
        }

        .purpose-dot.active {
          background: white;
          width: 15px;
          height: 15px;
        }

        .purpose-next {
          width: 100%;
          min-height: 65px;
          border: 2px solid white;
          border-radius: 50px;
          background: linear-gradient(135deg, #08724f, #00452e);
          color: white;
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 6px 18px #002b2038;
          transition: transform .2s ease;
        }

        .purpose-next:active {
          transform: scale(.98);
        }

        .purpose-skip {
          display: block;
          margin: 12px auto 0;
          border: none;
          background: transparent;
          color: white;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          cursor: pointer;
        }

        @keyframes purposeFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-height: 700px) {
          .purpose-content { margin-top: 4vh; }
          .purpose-illustration { max-width: 230px; margin-top: 15px; }
          .purpose-message { margin-bottom: 15px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .purpose-content { animation: none; }
          .purpose-next { transition: none; }
        }
      `}</style>

      <div className="purpose-status">
        <span>9:41</span>
        <span>◖ ▰ ▣</span>
      </div>

      <section className="purpose-content">
        <p className="purpose-eyebrow">A life with purpose</p>

        <h1 className="purpose-title">
          Small Deeds,
          <br />
          Greater Rewards
        </h1>

        <div className="purpose-divider" />

        <p className="purpose-description">
          Every good deed brings you closer
          to Allah. Build meaningful habits,
          strengthen your faith and make
          every day count.
        </p>

        <svg
          className="purpose-illustration"
          viewBox="0 0 340 270"
          role="img"
          aria-label="A mosque surrounded by nature at sunset"
        >
          <defs>
            <linearGradient id="purposeMosque" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e4c68a" />
              <stop offset="100%" stopColor="#886a42" />
            </linearGradient>
          </defs>

          <circle cx="170" cy="105" r="66" fill="#fff2c8" opacity=".55" />
          <circle cx="170" cy="105" r="38" fill="#fff9df" />

          <path d="M0 190 Q80 135 150 190 T340 180 V270 H0Z"
            fill="#6b875e" />

          <g fill="url(#purposeMosque)">
            <path d="M95 215 V145 H245 V215Z" />
            <path d="M130 145 Q170 70 210 145Z" />
            <path d="M157 215 V170 Q170 145 183 170 V215Z" />
            <path d="M78 215 V125 H92 V215Z" />
            <path d="M75 125 Q85 95 95 125Z" />
            <path d="M248 215 V125 H262 V215Z" />
            <path d="M245 125 Q255 95 265 125Z" />
            <path d="M168 75 V43 H172 V75Z" />
            <path d="M164 43 L170 31 L176 43Z" />
          </g>

          <path d="M0 220 Q90 190 170 220 T340 215 V270 H0Z"
            fill="#174d35" />

          <g fill="#e3c68e" opacity=".85">
            <circle cx="49" cy="204" r="4" />
            <circle cx="286" cy="202" r="5" />
            <circle cx="70" cy="225" r="3" />
            <circle cx="265" cy="230" r="3" />
          </g>

          <g fill="#174b34">
            <path d="M25 235 Q12 205 35 194 Q55 206 43 235Z" />
            <path d="M295 235 Q283 205 305 190 Q326 207 314 235Z" />
          </g>
        </svg>
      </section>

      <div className="purpose-spacer" />

      <footer>
        <p className="purpose-message">
          "The most beloved deeds to Allah
          are those done consistently,
          even if they are small."
        </p>

        <div className="purpose-pagination">
          <span className="purpose-dot" />
          <span className="purpose-dot active" />
          <span className="purpose-dot" />
          <span className="purpose-dot" />
        </div>

        <button
          className="purpose-next"
          onClick={() => navigate("/onboarding/tasbih")}
        >
          Next&nbsp; →
        </button>

        <button
          className="purpose-skip"
          onClick={() => navigate("/login")}
        >
          Skip
        </button>
      </footer>
    </main>
  );
}