import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountSecurity() {
  const navigate = useNavigate();

  const [privacy, setPrivacy] = useState("public");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const activeProfileId = localStorage.getItem(
        "aamaal-active-profile"
      );

      const family = JSON.parse(
        localStorage.getItem("aamaal-family") || "[]"
      );

      const activeProfile = family.find(
        (member) => member.id === activeProfileId
      );

      if (activeProfile) {
        setPrivacy(activeProfile.privacy || "public");
      } else {
        setPrivacy(
          localStorage.getItem("aamaal-account-privacy") || "public"
        );
      }
    } catch {
      setPrivacy("public");
    }

    setLoading(false);
  }, []);

  const handleSave = () => {
    try {
      const activeProfileId = localStorage.getItem(
        "aamaal-active-profile"
      );

      const family = JSON.parse(
        localStorage.getItem("aamaal-family") || "[]"
      );

      const activeProfileIndex = family.findIndex(
        (member) => member.id === activeProfileId
      );

      if (activeProfileIndex !== -1) {
        const updatedFamily = family.map((member) =>
          member.id === activeProfileId
            ? { ...member, privacy }
            : member
        );

        localStorage.setItem(
          "aamaal-family",
          JSON.stringify(updatedFamily)
        );
      } else {
        localStorage.setItem("aamaal-account-privacy", privacy);
      }

      setSaved(true);

      setTimeout(() => setSaved(false), 2500);
    } catch {
      alert("Unable to save privacy settings. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="account-security-loading">
        Loading privacy settings...
      </div>
    );
  }

  return (
    <div className="account-security-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .account-security-page {
          min-height: 100vh;
          background: #fbfaf3;
          color: #172d24;
          padding: 25px 20px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .account-security-container {
          width: 100%;
          max-width: 480px;
          margin: auto;
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
        }

        .account-security-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 82px;
        }

        .account-security-back {
          position: absolute;
          left: 0;
          width: 42px;
          height: 42px;
          border: none;
          background: transparent;
          color: #173d30;
          font-size: 29px;
          cursor: pointer;
        }

        .account-security-header h1 {
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 600;
          color: #142c23;
          margin: 0;
          text-align: center;
        }

        .account-security-intro {
          font-family: Georgia, serif;
          font-size: 23px;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
          color: #172d24;
          margin: 0 0 60px;
          padding: 0 12px;
        }

        .account-security-options {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .account-security-option {
          width: 100%;
          min-height: 166px;
          display: flex;
          align-items: center;
          gap: 23px;
          padding: 23px 24px;
          border: 2px solid #e3e3dc;
          border-radius: 28px;
          background: #fffdf7;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.2s ease,
                      background 0.2s ease;
        }

        .account-security-option.selected {
          border: 2px solid #07563f;
          background: #e9f7e8;
        }

        .account-security-option-icon {
          width: 85px;
          min-width: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #07563f;
        }

        .account-security-option.private .account-security-option-icon {
          color: #8a8f8a;
        }

        .account-security-option-content {
          flex: 1;
          min-width: 0;
        }

        .account-security-option-content h2 {
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 700;
          color: #111e19;
          margin: 0 0 14px;
        }

        .account-security-option-content p {
          font-size: 17px;
          line-height: 1.65;
          color: #313b35;
          margin: 0;
        }

        .account-security-info {
          display: flex;
          align-items: center;
          gap: 24px;
          background: #e5f3e3;
          border-radius: 25px;
          padding: 22px 25px;
          margin-top: 62px;
          color: #172d24;
        }

        .account-security-info-icon {
          width: 65px;
          min-width: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .account-security-info p {
          font-size: 17px;
          line-height: 1.6;
          margin: 0;
        }

        .account-security-footer {
          margin-top: auto;
          padding-top: 65px;
        }

        .account-security-save {
          width: 100%;
          min-height: 76px;
          border: 2px solid #07563f;
          border-radius: 50px;
          background: linear-gradient(110deg, #07563f, #087452);
          color: white;
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 5px 12px #07563f18;
        }

        .account-security-save:active {
          transform: scale(0.99);
        }

        .account-security-saved {
          text-align: center;
          color: #17664d;
          font-size: 12px;
          font-weight: 700;
          margin-top: 13px;
        }

        .account-security-loading {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fbfaf3;
          color: #426b53;
          font-family: Inter, sans-serif;
        }

        @media (max-width: 380px) {
          .account-security-header {
            margin-bottom: 65px;
          }

          .account-security-intro {
            font-size: 20px;
            margin-bottom: 45px;
          }

          .account-security-option {
            min-height: 145px;
            gap: 12px;
            padding: 17px;
          }

          .account-security-option-icon {
            width: 65px;
            min-width: 65px;
          }

          .account-security-option-content h2 {
            font-size: 25px;
          }

          .account-security-option-content p {
            font-size: 14px;
          }

          .account-security-info p {
            font-size: 14px;
          }
        }
      `}</style>

      <main className="account-security-container">
        <header className="account-security-header">
          <button
            className="account-security-back"
            onClick={() => navigate("/account")}
            aria-label="Go back"
          >
            ←
          </button>

          <h1>Privacy Settings</h1>
        </header>

        <h2 className="account-security-intro">
          Choose how your Aamaal
          <br />
          are visible to other members.
        </h2>

        <section className="account-security-options">
          <button
            type="button"
            className={`account-security-option ${
              privacy === "public" ? "selected" : ""
            }`}
            onClick={() => {
              setPrivacy("public");
              setSaved(false);
            }}
            aria-pressed={privacy === "public"}
          >
            <div className="account-security-option-icon">
              <svg
                width="82"
                height="82"
                viewBox="0 0 80 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="40" cy="40" r="29" />
                <path d="M11 40h58" />
                <path d="M40 11c-10 9-15 19-15 29s5 20 15 29" />
                <path d="M40 11c10 9 15 19 15 29s-5 20-15 29" />
                <path d="M16 25c7 5 15 7 24 7s17-2 24-7" />
                <path d="M16 55c7-5 15-7 24-7s17 2 24 7" />
              </svg>
            </div>

            <div className="account-security-option-content">
              <h2>Public</h2>
              <p>
                Your activity will be visible in reports and
                leaderboard.
              </p>
            </div>
          </button>

          <button
            type="button"
            className={`account-security-option private ${
              privacy === "private" ? "selected" : ""
            }`}
            onClick={() => {
              setPrivacy("private");
              setSaved(false);
            }}
            aria-pressed={privacy === "private"}
          >
            <div className="account-security-option-icon">
              <svg
                width="75"
                height="82"
                viewBox="0 0 75 82"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="12" y="35" width="51" height="42" rx="11" />
                <path d="M22 35V24a16 16 0 0 1 32 0v11" />
              </svg>
            </div>

            <div className="account-security-option-content">
              <h2>Private</h2>
              <p>
                Your activity will be kept private in reports.
              </p>
            </div>
          </button>
        </section>

        <aside className="account-security-info">
          <div className="account-security-info-icon">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="31" cy="31" r="25" />
              <path d="M31 27v17" />
              <circle cx="31" cy="18" r="2" fill="currentColor" />
            </svg>
          </div>

          <p>
            You can change this
            <br />
            any time.
          </p>
        </aside>

        <footer className="account-security-footer">
          <button
            className="account-security-save"
            onClick={handleSave}
          >
            Save Settings
          </button>

          {saved && (
            <p className="account-security-saved">
              ✓ Privacy settings saved successfully.
            </p>
          )}
        </footer>
      </main>
    </div>
  );
}