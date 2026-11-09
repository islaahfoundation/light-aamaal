import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Aamaal — Splash Screen
 *
 * Place at: src/pages/onboarding/Splash.jsx
 *
 * By default, the splash screen moves to /welcome after the entrance
 * animation. You can override this with:
 * <Splash nextPath="/onboarding/purpose" />
 *
 * Or provide your own completion handler:
 * <Splash onComplete={() => yourNavigationFunction()} />
 */
export default function Splash({
  nextPath = "/welcome",
  onComplete,
  duration = 2800,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (onComplete) {
        onComplete();
      } else {
        navigate(nextPath, { replace: true });
      }
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [duration, navigate, nextPath, onComplete]);

  return (
    <main className="aamaal-splash" aria-label="Aamaal app loading">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        .aamaal-splash {
          --splash-green: #0d4b35;
          --splash-deep: #073b2b;
          --splash-sage: #8ba78b;
          --splash-gold: #c6a45d;
          --splash-ivory: #fbf6e9;
          position: relative;
          isolation: isolate;
          display: grid;
          min-height: 100svh;
          width: 100%;
          overflow: hidden;
          place-items: center;
          padding: 32px 24px;
          box-sizing: border-box;
          color: var(--splash-green);
          background:
            radial-gradient(ellipse at 50% 38%, rgba(255,255,255,.92) 0%, rgba(255,255,255,.34) 37%, transparent 68%),
            linear-gradient(180deg, #fffaf0 0%, var(--splash-ivory) 58%, #eee8d5 100%);
          font-family: 'DM Sans', sans-serif;
        }

        .aamaal-splash *,
        .aamaal-splash *::before,
        .aamaal-splash *::after {
          box-sizing: border-box;
        }

        .splash-glow {
          position: absolute;
          z-index: -1;
          width: min(82vw, 430px);
          aspect-ratio: 1;
          top: 20%;
          left: 50%;
          border-radius: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(221, 195, 128, .25), rgba(221,195,128,0) 69%);
          filter: blur(8px);
          animation: splash-glow 4s ease-in-out infinite alternate;
        }

        .splash-content {
          display: flex;
          width: 100%;
          max-width: 440px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transform: translateY(-2vh);
          animation: splash-arrive 1.05s cubic-bezier(.2,.75,.25,1) both;
        }

        .splash-mark-wrap {
          position: relative;
          display: grid;
          width: clamp(112px, 31vw, 148px);
          aspect-ratio: 1;
          place-items: center;
          margin-bottom: 18px;
        }

        .splash-mark-halo {
          position: absolute;
          inset: 2px;
          border: 1px solid rgba(198,164,93,.42);
          border-radius: 50%;
          animation: splash-halo 3.8s ease-out infinite;
        }

        .splash-mark-halo::after {
          position: absolute;
          content: "";
          inset: 10px;
          border: 1px solid rgba(13,75,53,.10);
          border-radius: 50%;
        }

        .splash-logo {
          width: 83%;
          height: 83%;
          filter: drop-shadow(0 8px 12px rgba(7,59,43,.12));
          animation: splash-logo-in 1.1s .15s cubic-bezier(.2,.8,.2,1) both;
        }

        .splash-wordmark {
          margin: 0;
          color: var(--splash-green);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(43px, 11vw, 58px);
          font-weight: 600;
          letter-spacing: -.055em;
          line-height: 1.05;
        }

        .splash-tagline {
          margin: 8px 0 0;
          color: #55715e;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .105em;
        }

        .splash-divider {
          display: flex;
          width: 150px;
          align-items: center;
          gap: 12px;
          margin: 28px 0 18px;
          opacity: 0;
          animation: splash-fade-up .8s .65s ease forwards;
        }

        .splash-divider::before,
        .splash-divider::after {
          height: 1px;
          flex: 1;
          content: "";
          background: linear-gradient(90deg, transparent, var(--splash-gold));
        }

        .splash-divider::after {
          transform: rotate(180deg);
        }

        .splash-star {
          color: var(--splash-gold);
          font-size: 13px;
        }

        .splash-purpose {
          margin: 0;
          color: #526c59;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(17px, 4.5vw, 20px);
          font-style: italic;
          letter-spacing: .005em;
          opacity: 0;
          animation: splash-fade-up .8s .8s ease forwards;
        }

        .splash-bottom {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: min(35vh, 260px);
          min-height: 165px;
          pointer-events: none;
          opacity: 0;
          animation: splash-landscape 1.5s .25s ease forwards;
        }

        .splash-landscape {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .splash-leaf {
          position: absolute;
          bottom: 4%;
          width: 90px;
          height: 150px;
          opacity: .5;
          transform-origin: bottom center;
          animation: splash-sway 5s ease-in-out infinite alternate;
        }

        .splash-leaf.left {
          left: -14px;
        }

        .splash-leaf.right {
          right: -14px;
          transform: scaleX(-1);
          animation-delay: -2s;
        }

        .splash-loading {
          position: absolute;
          z-index: 2;
          bottom: max(28px, env(safe-area-inset-bottom));
          left: 50%;
          display: flex;
          align-items: center;
          gap: 9px;
          transform: translateX(-50%);
          color: #718272;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .19em;
          text-transform: uppercase;
          white-space: nowrap;
          opacity: 0;
          animation: splash-fade-up .7s 1.1s ease forwards;
        }

        .splash-loading-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--splash-gold);
          box-shadow: 0 0 0 4px rgba(198,164,93,.13);
          animation: splash-pulse 1.1s ease-in-out infinite;
        }

        @keyframes splash-arrive {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(-2vh); }
        }

        @keyframes splash-logo-in {
          from { opacity: 0; transform: scale(.82) rotate(-5deg); }
          to { opacity: 1; transform: scale(1) rotate(0); }
        }

        @keyframes splash-fade-up {
          from { opacity: 0; transform: translateY(9px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes splash-glow {
          from { opacity: .55; transform: translateX(-50%) scale(.92); }
          to { opacity: 1; transform: translateX(-50%) scale(1.08); }
        }

        @keyframes splash-halo {
          0% { transform: scale(.88); opacity: .65; }
          75%, 100% { transform: scale(1.12); opacity: 0; }
        }

        @keyframes splash-landscape {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes splash-sway {
          from { rotate: -3deg; }
          to { rotate: 3deg; }
        }

        @keyframes splash-pulse {
          0%, 100% { opacity: .45; transform: scale(.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @media (max-height: 620px) {
          .splash-content { transform: translateY(-4vh) scale(.82); }
          .splash-bottom { height: 24vh; min-height: 110px; }
          .splash-divider { margin: 17px 0 12px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .aamaal-splash *,
          .aamaal-splash *::before,
          .aamaal-splash *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="splash-glow" aria-hidden="true" />

      <section className="splash-content">
        <div className="splash-mark-wrap" aria-hidden="true">
          <div className="splash-mark-halo" />
          <svg
            className="splash-logo"
            viewBox="0 0 180 180"
            role="img"
            aria-label="Aamaal mosque emblem"
          >
            <defs>
              <linearGradient id="aamaalMarkGreen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1c6849" />
                <stop offset="100%" stopColor="#073b2b" />
              </linearGradient>
            </defs>
            <path
              d="M25 145V78c0-4 2-7 6-9l54-36c3-2 7-2 10 0l54 36c4 2 6 5 6 9v67"
              fill="none"
              stroke="url(#aamaalMarkGreen)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M48 145V91c0-24 18-44 42-44s42 20 42 44v54"
              fill="none"
              stroke="url(#aamaalMarkGreen)"
              strokeWidth="5"
            />
            <path
              d="M61 145v-31c0-16 13-29 29-29s29 13 29 29v31"
              fill="url(#aamaalMarkGreen)"
            />
            <path d="M80 145v-19a10 10 0 0 1 20 0v19" fill="#fbf6e9" />
            <path
              d="M90 19c-5 8-5 13 0 17 5-4 5-9 0-17Z"
              fill="#c6a45d"
            />
            <path
              d="M19 145h142"
              stroke="#c6a45d"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M32 91V69l-8 8v14M148 91V69l8 8v14"
              fill="none"
              stroke="#1c6849"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="90" cy="68" r="3" fill="#c6a45d" />
          </svg>
        </div>

        <h1 className="splash-wordmark">Aamaal</h1>
        <p className="splash-tagline">LIVE WITH PURPOSE</p>

        <div className="splash-divider" aria-hidden="true">
          <span className="splash-star">✦</span>
        </div>

        <p className="splash-purpose">
          A spiritual companion<br />
          for a more meaningful life
        </p>
      </section>

      <div className="splash-bottom" aria-hidden="true">
        <svg
          className="splash-landscape"
          viewBox="0 0 430 230"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="aamaalSkyline" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d5d8b8" stopOpacity="0" />
              <stop offset="100%" stopColor="#9aaf8c" stopOpacity=".48" />
            </linearGradient>
          </defs>
          <path
            d="M0 170h430v60H0Z"
            fill="url(#aamaalSkyline)"
          />
          <g fill="#9aaf8c" opacity=".38">
            <path d="M0 190v-47h18v47h-4v-60h3l-8-16-8 16h3v60Z" />
            <path d="M24 190v-67h8v67Z" />
            <path d="M48 190v-43h12v43Z" />
            <path d="M78 190v-75c0-23 18-41 40-41s40 18 40 41v75Z" />
            <path d="M92 190v-75c0-15 12-27 26-27s26 12 26 27v75Z" fill="#fbf6e9" opacity=".55" />
            <path d="M110 190v-40a8 8 0 0 1 16 0v40Z" />
            <path d="M170 190v-53h13v53Z" />
            <path d="M180 137v-44h4v44l-2-8Z" />
            <path d="M184 93l-5 9h10Z" />
            <path d="M205 190v-63c0-16 13-29 29-29s29 13 29 29v63Z" />
            <path d="M215 190v-63c0-10 8-19 19-19s19 9 19 19v63Z" fill="#fbf6e9" opacity=".55" />
            <path d="M228 190v-34a6 6 0 0 1 12 0v34Z" />
            <path d="M275 190v-48h12v48Z" />
            <path d="M280 142v-38h3v38l-1.5-7Z" />
            <path d="M283 104l-5 9h10Z" />
            <path d="M300 190v-72h7v72Z" />
            <path d="M307 190v-49h13v49Z" />
            <path d="M330 190v-63c0-20 15-36 35-36s35 16 35 36v63Z" />
            <path d="M343 190v-63c0-12 10-22 22-22s22 10 22 22v63Z" fill="#fbf6e9" opacity=".55" />
            <path d="M357 190v-35a8 8 0 0 1 16 0v35Z" />
            <path d="M405 190v-54h12v54Z" />
            <path d="M410 136V94h3v42l-1.5-7Z" />
            <path d="M413 94l-5 9h10Z" />
          </g>
        </svg>

        <svg className="splash-leaf left" viewBox="0 0 100 160">
          <g fill="none" stroke="#668b62" strokeWidth="2">
            <path d="M10 158C20 110 35 65 75 8" />
            <path d="M20 126C4 119 2 105 5 91c15 5 22 16 15 35Z" fill="#8ba78b" opacity=".55" />
            <path d="M31 99C18 82 22 67 33 54c12 13 13 28-2 45Z" fill="#8ba78b" opacity=".55" />
            <path d="M48 69C42 49 50 35 65 27c7 17 1 32-17 42Z" fill="#8ba78b" opacity=".55" />
            <path d="M15 143C2 139-4 127-2 114c14 3 22 14 17 29Z" fill="#8ba78b" opacity=".55" />
          </g>
        </svg>

        <svg className="splash-leaf right" viewBox="0 0 100 160">
          <g fill="none" stroke="#668b62" strokeWidth="2">
            <path d="M10 158C20 110 35 65 75 8" />
            <path d="M20 126C4 119 2 105 5 91c15 5 22 16 15 35Z" fill="#8ba78b" opacity=".55" />
            <path d="M31 99C18 82 22 67 33 54c12 13 13 28-2 45Z" fill="#8ba78b" opacity=".55" />
            <path d="M48 69C42 49 50 35 65 27c7 17 1 32-17 42Z" fill="#8ba78b" opacity=".55" />
            <path d="M15 143C2 139-4 127-2 114c14 3 22 14 17 29Z" fill="#8ba78b" opacity=".55" />
          </g>
        </svg>
      </div>

      <div className="splash-loading" aria-hidden="true">
        <span className="splash-loading-dot" />
        <span>Preparing your journey</span>
      </div>
    </main>
  );
}