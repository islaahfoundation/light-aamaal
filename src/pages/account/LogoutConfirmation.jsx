import { useNavigate } from "react-router-dom";

export default function LogoutConfirmation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication/session information only.
    // Preserve family profiles, Aamaal records and preferences.
    localStorage.removeItem("aamaal-auth-token");
    localStorage.removeItem("aamaal-user-session");

    navigate("/login", { replace: true });
  };

  return (
    <div className="logout-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .logout-page {
          min-height: 100vh;
          background: #fbfaf3;
          color: #192d25;
          padding: 25px 20px 40px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          display: flex;
          flex-direction: column;
        }

        .logout-container {
          width: 100%;
          max-width: 440px;
          margin: auto;
        }

        .logout-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 55px;
        }

        .logout-back {
          width: 42px;
          height: 42px;
          border: 1px solid #e5e9e3;
          border-radius: 12px;
          background: white;
          color: #426b53;
          font-size: 21px;
          cursor: pointer;
        }

        .logout-header h1 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 500;
          color: #263d31;
          margin: 0;
        }

        .logout-content {
          text-align: center;
          background: #fff;
          border: 1px solid #e8ece6;
          border-radius: 22px;
          padding: 35px 24px 27px;
        }

        .logout-illustration {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          background: #eaf1e7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }

        .logout-illustration svg {
          width: 62px;
          height: 62px;
        }

        .logout-content h2 {
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 500;
          color: #263d31;
          margin: 0 0 13px;
        }

        .logout-description {
          color: #87938a;
          font-size: 13px;
          line-height: 1.8;
          margin: 0 0 28px;
        }

        .logout-reminder {
          background: #f1f5ef;
          border-radius: 13px;
          padding: 15px;
          text-align: left;
          color: #617365;
          font-size: 11px;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .logout-reminder strong {
          display: block;
          color: #426b53;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .logout-confirm {
          width: 100%;
          min-height: 53px;
          border: none;
          border-radius: 30px;
          background: #426b53;
          color: white;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .logout-cancel {
          width: 100%;
          min-height: 49px;
          border: 1px solid #dce5dc;
          border-radius: 30px;
          background: white;
          color: #426b53;
          font-size: 13px;
          font-weight: 700;
          margin-top: 12px;
          cursor: pointer;
        }

        .logout-footer {
          color: #a0aaa1;
          text-align: center;
          font-size: 10px;
          line-height: 1.7;
          margin-top: 30px;
        }

        @media (max-width: 360px) {
          .logout-content {
            padding: 28px 18px 22px;
          }

          .logout-content h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <main className="logout-container">
        <header className="logout-header">
          <button
            className="logout-back"
            onClick={() => navigate("/account")}
            aria-label="Back to account"
          >
            ←
          </button>

          <h1>Sign Out</h1>
        </header>

        <section className="logout-content">
          <div className="logout-illustration">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="#426b53"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M34 10H16a5 5 0 0 0-5 5v34a5 5 0 0 0 5 5h18" />
              <path d="M29 32h25" />
              <path d="m44 22 10 10-10 10" />
            </svg>
          </div>

          <h2>Leaving so soon?</h2>

          <p className="logout-description">
            Are you sure you want to sign out of your
            Aamaal account? You can always return to
            continue your spiritual journey.
          </p>

          <div className="logout-reminder">
            <strong>Your progress matters.</strong>
            Your family profiles, saved preferences and
            recorded Aamaal will remain on this device.
          </div>

          <button
            className="logout-confirm"
            onClick={handleLogout}
          >
            Yes, Sign Out
          </button>

          <button
            className="logout-cancel"
            onClick={() => navigate("/account")}
          >
            Stay Logged In
          </button>
        </section>

        <p className="logout-footer">
          May Allah accept your efforts and grant you
          consistency in your Aamaal. 🤲
        </p>
      </main>
    </div>
  );
}