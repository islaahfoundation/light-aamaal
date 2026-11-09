import { useNavigate } from "react-router-dom";
import { useState } from "react";

const languages = [
  {
    id: "en",
    name: "English",
    native: "English",
    description: "Continue in English",
    sample: "Welcome to Aamaal",
    flag: "🇬🇧",
  },
  {
    id: "ur",
    name: "Urdu",
    native: "اردو",
    description: "اردو میں جاری رکھیں",
    sample: "آمال میں خوش آمدید",
    flag: "🇵🇰",
  },
  {
    id: "hi",
    name: "Hindi",
    native: "हिन्दी",
    description: "हिन्दी में जारी रखें",
    sample: "आमाल में आपका स्वागत है",
    flag: "🇮🇳",
  },
  {
    id: "roman-ur",
    name: "Roman Urdu",
    native: "Roman Urdu",
    description: "Roman Urdu mein jari rakhein",
    sample: "Aamaal mein khush aamdeed",
    flag: "🌙",
  },
];

export default function LanguageSelection() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(
    () => localStorage.getItem("aamaal-language") || "en"
  );

  const handleContinue = () => {
    localStorage.setItem("aamaal-language", selected);
    navigate("/onboarding/preferences");
  };

  return (
    <main className="language-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        .language-screen {
          min-height:100svh;
          display:flex;
          flex-direction:column;
          padding:max(24px,env(safe-area-inset-top)) 24px
            max(24px,env(safe-area-inset-bottom));
          background:linear-gradient(180deg,#e7eee4,#fff7e8 60%,#e5d5b2);
          color:#123c2d;
          font-family:'DM Sans',sans-serif;
          box-sizing:border-box;
        }

        .language-screen * {
          box-sizing:border-box;
        }

        .language-status {
          display:flex;
          justify-content:space-between;
          font-size:14px;
          font-weight:700;
          color:#18352c;
        }

        .language-content {
          width:100%;
          max-width:450px;
          margin:clamp(45px,9vh,85px) auto 0;
        }

        .language-eyebrow {
          text-align:center;
          color:#a17b3e;
          font-size:12px;
          font-weight:700;
          letter-spacing:3px;
          text-transform:uppercase;
        }

        .language-title {
          text-align:center;
          font-family:'Playfair Display',serif;
          font-size:clamp(36px,9vw,47px);
          line-height:1.2;
          margin:12px 0;
          color:#06452f;
        }

        .language-description {
          text-align:center;
          color:#586759;
          font-size:15px;
          line-height:1.6;
          max-width:350px;
          margin:0 auto 30px;
        }

        .language-list {
          display:flex;
          flex-direction:column;
          gap:13px;
        }

        .language-option {
          display:flex;
          align-items:center;
          gap:15px;
          width:100%;
          min-height:88px;
          padding:15px;
          border:1.5px solid rgba(100,120,90,.2);
          border-radius:17px;
          background:rgba(255,253,246,.85);
          text-align:left;
          cursor:pointer;
          transition:all .2s ease;
        }

        .language-option.selected {
          border:2px solid #08724f;
          background:#edf5e9;
          box-shadow:0 4px 14px rgba(0,76,49,.1);
        }

        .language-flag {
          width:48px;
          height:48px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:14px;
          background:#f1e7d0;
          font-size:25px;
          flex-shrink:0;
        }

        .language-info {
          flex:1;
          min-width:0;
        }

        .language-name {
          margin:0;
          color:#183e2d;
          font-size:16px;
          font-weight:700;
        }

        .language-native {
          margin:3px 0 0;
          color:#647064;
          font-size:13px;
        }

        .language-radio {
          width:22px;
          height:22px;
          border:2px solid #a5ad9c;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        }

        .language-option.selected .language-radio {
          border-color:#08724f;
        }

        .language-option.selected .language-radio::after {
          content:"";
          width:11px;
          height:11px;
          border-radius:50%;
          background:#08724f;
        }

        .language-preview {
          margin-top:22px;
          padding:19px;
          border-radius:16px;
          background:#e4eadb;
          text-align:center;
        }

        .language-preview-label {
          color:#71806d;
          font-size:10px;
          font-weight:700;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        .language-preview-text {
          margin:10px 0 0;
          color:#164631;
          font-family:'Playfair Display',serif;
          font-size:21px;
          font-weight:600;
        }

        .language-spacer {
          flex:1;
          min-height:35px;
        }

        .language-next {
          width:100%;
          min-height:65px;
          border:2px solid white;
          border-radius:50px;
          background:linear-gradient(135deg,#08724f,#00452e);
          color:white;
          font-family:'Playfair Display',serif;
          font-size:23px;
          font-weight:600;
          cursor:pointer;
          box-shadow:0 6px 18px #002b2038;
        }

        .language-next:active {
          transform:scale(.985);
        }

        .language-note {
          text-align:center;
          color:#6d7868;
          font-size:11px;
          margin:12px 0 0;
        }

        @media(max-height:720px) {
          .language-content { margin-top:4vh; }
          .language-description { margin-bottom:18px; }
          .language-list { gap:8px; }
          .language-option { min-height:70px; padding:10px 13px; }
          .language-preview { margin-top:13px; padding:12px; }
        }

        @media(prefers-reduced-motion:reduce) {
          .language-option { transition:none; }
        }
      `}</style>

      <div className="language-status">
        <span>9:41</span>
        <span>◖ ▰ ▣</span>
      </div>

      <section className="language-content">

        <div className="language-eyebrow">
          Make Aamaal yours
        </div>

        <h1 className="language-title">
          Choose Your
          <br />
          Language
        </h1>

        <p className="language-description">
          Choose the language you're most
          comfortable with. You can change
          it anytime in Settings.
        </p>

        <div className="language-list">
          {languages.map((language) => (
            <button
              key={language.id}
              type="button"
              className={`language-option ${
                selected === language.id ? "selected" : ""
              }`}
              onClick={() => setSelected(language.id)}
              aria-pressed={selected === language.id}
            >
              <div className="language-flag">
                {language.flag}
              </div>

              <div className="language-info">
                <p className="language-name">
                  {language.name}
                </p>

                <p className="language-native">
                  {language.native}
                </p>
              </div>

              <div className="language-radio" />
            </button>
          ))}
        </div>

        <div className="language-preview">
          <div className="language-preview-label">
            Language preview
          </div>

          <p className="language-preview-text">
            {languages.find((l) => l.id === selected)?.sample}
          </p>
        </div>

      </section>

      <div className="language-spacer" />

      <footer>
        <button
          className="language-next"
          onClick={handleContinue}
        >
          Continue →
        </button>

        <p className="language-note">
          You can always change your language later.
        </p>
      </footer>
    </main>
  );
}