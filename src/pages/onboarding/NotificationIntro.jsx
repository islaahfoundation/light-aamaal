import { useNavigate } from "react-router-dom";

export default function NotificationIntro() {
  const navigate = useNavigate();

  return (
    <div className="notification-intro">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .notification-intro {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 28px 22px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notification-container {
          width: 100%;
          max-width: 430px;
          margin: auto;
          text-align: center;
        }

        .notification-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 45px;
        }

        .notification-brand {
          font-size: 15px;
          font-weight: 750;
          letter-spacing: 1.5px;
          color: #355b48;
        }

        .notification-step {
          font-size: 12px;
          color: #929b94;
        }

        .notification-art {
          width: 210px;
          height: 210px;
          margin: 0 auto 35px;
          border-radius: 50%;
          background: #edf2e9;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .notification-bell {
          font-size: 76px;
          filter: drop-shadow(0 8px 10px rgba(50, 80, 60, 0.12));
        }

        .notification-dot {
          position: absolute;
          top: 37px;
          right: 35px;
          width: 15px;
          height: 15px;
          background: #d7a85d;
          border-radius: 50%;
          border: 3px solid #edf2e9;
        }

        .notification-spark {
          position: absolute;
          color: #b88b49;
          font-size: 23px;
        }

        .notification-spark.one {
          top: 37px;
          left: 34px;
        }

        .notification-spark.two {
          bottom: 35px;
          right: 25px;
          font-size: 17px;
        }

        .notification-heading {
          font-family: Georgia, serif;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 500;
          color: #263d31;
          margin: 0 0 15px;
        }

        .notification-description {
          font-size: 14px;
          line-height: 1.8;
          color: #7b867e;
          margin: 0 auto 30px;
          max-width: 340px;
        }

        .notification-benefits {
          text-align: left;
          background: #fff;
          border: 1px solid #e8ebe5;
          border-radius: 16px;
          padding: 17px;
          margin-bottom: 30px;
        }

        .notification-benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: #526257;
          padding: 9px 0;
        }

        .notification-benefit + .notification-benefit {
          border-top: 1px solid #f0f1ed;
        }

        .notification-benefit-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #f0f5ef;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .notification-primary {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 13px;
          background: #426b53;
          color: white;
          font-size: 15px;
          font-weight: 650;
          cursor: pointer;
        }

        .notification-skip {
          border: none;
          background: transparent;
          color: #89928b;
          font-size: 13px;
          padding: 16px;
          cursor: pointer;
        }

        .notification-footer {
          font-size: 11px;
          color: #a0a8a1;
          line-height: 1.6;
          margin-top: 10px;
        }

        @media (max-width: 360px) {
          .notification-art {
            width: 180px;
            height: 180px;
          }

          .notification-heading {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="notification-container">
        <div className="notification-top">
          <div className="notification-brand">AAMAAL</div>
          <div className="notification-step">Step 8 of 9</div>
        </div>

        <div className="notification-art">
          <span className="notification-bell">🔔</span>
          <span className="notification-dot" />
          <span className="notification-spark one">✦</span>
          <span className="notification-spark two">✧</span>
        </div>

        <h1 className="notification-heading">
          Gentle reminders.<br />Meaningful moments.
        </h1>

        <p className="notification-description">
          Let Aamaal remind you of the little things that bring you closer
          to Allah — without overwhelming your day.
        </p>

        <div className="notification-benefits">
          <div className="notification-benefit">
            <span className="notification-benefit-icon">🌅</span>
            <span>Morning and evening adhkar reminders</span>
          </div>

          <div className="notification-benefit">
            <span className="notification-benefit-icon">📿</span>
            <span>Gentle reminders for your daily Aamaal</span>
          </div>

          <div className="notification-benefit">
            <span className="notification-benefit-icon">🤲</span>
            <span>Daily duas and spiritual reflections</span>
          </div>
        </div>

        <button
          className="notification-primary"
          onClick={() => navigate("/onboarding/notification-permission")}
        >
          Set up reminders →
        </button>

        <button
          className="notification-skip"
          onClick={() => navigate("/login")}
        >
          Maybe later
        </button>

        <p className="notification-footer">
          You can customise or turn off notifications anytime in Settings.
        </p>
      </div>
    </div>
  );
}