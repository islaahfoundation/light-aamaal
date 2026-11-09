import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Preferences() {
  const navigate = useNavigate();

  const [interests, setInterests] = useState([
    "Quran",
    "Duas",
    "Dhikr",
  ]);

  const [experience, setExperience] = useState("balanced");

  const interestOptions = [
    { id: "Quran", icon: "📖", title: "Quran", description: "Read, understand and reflect" },
    { id: "Duas", icon: "🤲", title: "Duas", description: "Daily supplications and duas" },
    { id: "Dhikr", icon: "📿", title: "Dhikr & Tasbih", description: "Remember Allah throughout the day" },
    { id: "Seerah", icon: "🕌", title: "Seerah", description: "Learn about the Prophet's life" },
    { id: "Aamaal", icon: "✨", title: "Daily Aamaal", description: "Build consistent good habits" },
    { id: "Learning", icon: "🧠", title: "Islamic Learning", description: "Learn something beneficial every day" },
  ];

  const toggleInterest = (id) => {
    setInterests((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const handleContinue = () => {
    localStorage.setItem("aamaal-interests", JSON.stringify(interests));
    localStorage.setItem("aamaal-experience", experience);
    navigate("/onboarding/notifications");
  };

  return (
    <div className="preferences-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .preferences-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 28px 22px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .preferences-container {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .preferences-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .preferences-brand {
          font-size: 15px;
          font-weight: 750;
          letter-spacing: 1.5px;
          color: #355b48;
        }

        .preferences-step {
          font-size: 12px;
          color: #929b94;
        }

        .preferences-progress {
          height: 4px;
          background: #e7eae5;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 34px;
        }

        .preferences-progress-fill {
          width: 78%;
          height: 100%;
          background: #648c70;
          border-radius: 10px;
        }

        .preferences-heading {
          font-family: Georgia, serif;
          font-size: 31px;
          line-height: 1.2;
          font-weight: 500;
          margin: 0 0 12px;
          color: #263d31;
        }

        .preferences-subtitle {
          color: #7b867e;
          font-size: 14px;
          line-height: 1.7;
          margin: 0 0 27px;
        }

        .preferences-section-title {
          font-size: 14px;
          font-weight: 700;
          margin: 0 0 13px;
          color: #35483c;
        }

        .preferences-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
          margin-bottom: 29px;
        }

        .interest-card {
          border: 1px solid #e5e9e3;
          background: #fff;
          border-radius: 15px;
          padding: 15px 12px;
          text-align: left;
          cursor: pointer;
          min-height: 119px;
          transition: 0.2s ease;
          position: relative;
        }

        .interest-card.selected {
          border: 1.5px solid #648c70;
          background: #f0f5ef;
        }

        .interest-icon {
          font-size: 23px;
          display: block;
          margin-bottom: 10px;
        }

        .interest-title {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #35483c;
          margin-bottom: 5px;
        }

        .interest-description {
          display: block;
          font-size: 10px;
          line-height: 1.5;
          color: #89928b;
        }

        .interest-check {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #648c70;
          color: white;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .experience-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
        }

        .experience-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border: 1px solid #e5e9e3;
          border-radius: 13px;
          background: #fff;
          cursor: pointer;
          text-align: left;
        }

        .experience-card.selected {
          border: 1.5px solid #648c70;
          background: #f0f5ef;
        }

        .experience-radio {
          width: 18px;
          height: 18px;
          border: 1.5px solid #c4cdc5;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .experience-card.selected .experience-radio {
          border-color: #648c70;
        }

        .experience-card.selected .experience-radio::after {
          content: "";
          width: 9px;
          height: 9px;
          background: #648c70;
          border-radius: 50%;
        }

        .experience-text strong {
          display: block;
          font-size: 13px;
          color: #35483c;
          margin-bottom: 4px;
        }

        .experience-text small {
          font-size: 11px;
          color: #89928b;
          line-height: 1.5;
        }

        .preferences-footer {
          margin-top: 25px;
        }

        .preferences-continue {
          width: 100%;
          border: none;
          border-radius: 13px;
          background: #426b53;
          color: white;
          font-size: 15px;
          font-weight: 650;
          padding: 16px;
          cursor: pointer;
        }

        .preferences-continue:active {
          transform: scale(0.99);
        }

        .preferences-note {
          text-align: center;
          font-size: 11px;
          color: #9aa29b;
          margin-top: 14px;
          line-height: 1.5;
        }

        @media (max-width: 360px) {
          .preferences-page {
            padding-left: 16px;
            padding-right: 16px;
          }

          .preferences-heading {
            font-size: 27px;
          }

          .interest-card {
            padding: 12px 10px;
          }
        }
      `}</style>

      <div className="preferences-container">
        <div className="preferences-top">
          <div className="preferences-brand">AAMAAL</div>
          <div className="preferences-step">Step 7 of 9</div>
        </div>

        <div className="preferences-progress">
          <div className="preferences-progress-fill" />
        </div>

        <h1 className="preferences-heading">
          Make Aamaal<br />your own.
        </h1>

        <p className="preferences-subtitle">
          Choose what matters most to you. We'll use your choices to make
          your daily experience more meaningful.
        </p>

        <h3 className="preferences-section-title">
          What would you like to focus on?
        </h3>

        <div className="preferences-grid">
          {interestOptions.map((item) => {
            const selected = interests.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                className={`interest-card ${selected ? "selected" : ""}`}
                onClick={() => toggleInterest(item.id)}
                aria-pressed={selected}
              >
                {selected && <span className="interest-check">✓</span>}
                <span className="interest-icon">{item.icon}</span>
                <span className="interest-title">{item.title}</span>
                <span className="interest-description">
                  {item.description}
                </span>
              </button>
            );
          })}
        </div>

        <h3 className="preferences-section-title">
          Your preferred experience
        </h3>

        <div className="experience-options">
          <button
            type="button"
            className={`experience-card ${experience === "simple" ? "selected" : ""}`}
            onClick={() => setExperience("simple")}
            aria-pressed={experience === "simple"}
          >
            <span className="experience-radio" />
            <span className="experience-text">
              <strong>Simple & peaceful</strong>
              <small>Keep things minimal, with gentle daily guidance.</small>
            </span>
          </button>

          <button
            type="button"
            className={`experience-card ${experience === "balanced" ? "selected" : ""}`}
            onClick={() => setExperience("balanced")}
            aria-pressed={experience === "balanced"}
          >
            <span className="experience-radio" />
            <span className="experience-text">
              <strong>Balanced</strong>
              <small>A little guidance, learning and progress tracking.</small>
            </span>
          </button>

          <button
            type="button"
            className={`experience-card ${experience === "detailed" ? "selected" : ""}`}
            onClick={() => setExperience("detailed")}
            aria-pressed={experience === "detailed"}
          >
            <span className="experience-radio" />
            <span className="experience-text">
              <strong>Detailed & structured</strong>
              <small>More insights, goals, reminders and progress details.</small>
            </span>
          </button>
        </div>

        <div className="preferences-footer">
          <button
            className="preferences-continue"
            onClick={handleContinue}
          >
            Continue →
          </button>

          <p className="preferences-note">
            You can change these preferences anytime in Settings.
          </p>
        </div>
      </div>
    </div>
  );
}