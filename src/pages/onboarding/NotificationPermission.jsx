import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotificationPermission() {
  const navigate = useNavigate();
  const [permissionStatus, setPermissionStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      setPermissionStatus("unsupported");
      setMessage("Notifications are not supported by this browser.");
      return;
    }

    try {
      const result = await Notification.requestPermission();

      if (result === "granted") {
        setPermissionStatus("granted");
        setMessage("You're all set! Aamaal can now send you reminders.");
      } else if (result === "denied") {
        setPermissionStatus("denied");
        setMessage(
          "Notifications are blocked. You can enable them later from your browser or device settings."
        );
      } else {
        setPermissionStatus("dismissed");
        setMessage("No problem. You can enable reminders whenever you wish.");
      }
    } catch (error) {
      setPermissionStatus("error");
      setMessage("We couldn't request permission right now. You can try again later.");
    }
  };

  const handleContinue = () => {
    localStorage.setItem(
      "aamaal-notification-preference",
      permissionStatus === "granted" ? "enabled" : "not-enabled"
    );

    navigate("/login");
  };

  return (
    <div className="permission-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .permission-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 28px 22px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .permission-container {
          width: 100%;
          max-width: 430px;
          margin: auto;
          text-align: center;
        }

        .permission-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 45px;
        }

        .permission-brand {
          font-size: 15px;
          font-weight: 750;
          letter-spacing: 1.5px;
          color: #355b48;
        }

        .permission-step {
          font-size: 12px;
          color: #929b94;
        }

        .permission-art {
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: #edf2e9;
          margin: 0 auto 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .permission-bell {
          font-size: 70px;
          filter: drop-shadow(0 8px 10px rgba(50, 80, 60, 0.12));
        }

        .permission-ring {
          position: absolute;
          inset: 15px;
          border: 1px dashed #b8c9b9;
          border-radius: 50%;
        }

        .permission-spark {
          position: absolute;
          color: #b88b49;
          font-size: 22px;
        }

        .permission-spark.one {
          top: 28px;
          left: 30px;
        }

        .permission-spark.two {
          bottom: 30px;
          right: 25px;
        }

        .permission-heading {
          font-family: Georgia, serif;
          font-size: 31px;
          line-height: 1.2;
          font-weight: 500;
          color: #263d31;
          margin: 0 0 14px;
        }

        .permission-description {
          font-size: 14px;
          line-height: 1.8;
          color: #7b867e;
          margin: 0 auto 28px;
          max-width: 340px;
        }

        .permission-info {
          padding: 17px;
          background: #fff;
          border: 1px solid #e8ebe5;
          border-radius: 15px;
          text-align: left;
          margin-bottom: 25px;
        }

        .permission-info-title {
          font-size: 13px;
          font-weight: 700;
          color: #405747;
          margin-bottom: 10px;
        }

        .permission-info p {
          font-size: 12px;
          line-height: 1.7;
          color: #89928b;
          margin: 0;
        }

        .permission-status {
          font-size: 12px;
          line-height: 1.6;
          padding: 12px;
          border-radius: 10px;
          background: #edf2e9;
          color: #426b53;
          margin-bottom: 18px;
        }

        .permission-status.error {
          background: #f8eeee;
          color: #9a5555;
        }

        .permission-primary {
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

        .permission-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .permission-secondary {
          width: 100%;
          border: none;
          background: transparent;
          color: #89928b;
          font-size: 13px;
          padding: 16px;
          cursor: pointer;
        }

        .permission-footer {
          font-size: 11px;
          color: #a0a8a1;
          line-height: 1.6;
          margin-top: 10px;
        }

        @media (max-width: 360px) {
          .permission-art {
            width: 165px;
            height: 165px;
          }

          .permission-heading {
            font-size: 27px;
          }
        }
      `}</style>

      <div className="permission-container">
        <div className="permission-top">
          <div className="permission-brand">AAMAAL</div>
          <div className="permission-step">Step 9 of 9</div>
        </div>

        <div className="permission-art">
          <div className="permission-ring" />
          <span className="permission-bell">🔔</span>
          <span className="permission-spark one">✦</span>
          <span className="permission-spark two">✧</span>
        </div>

        <h1 className="permission-heading">
          Stay connected<br />to your good deeds.
        </h1>

        <p className="permission-description">
          Allow notifications if you'd like gentle reminders for your
          Aamaal, duas and daily reflections.
        </p>

        <div className="permission-info">
          <div className="permission-info-title">
            Your choice, your peace of mind
          </div>
          <p>
            Notifications are optional. You can change your preference
            anytime in your device or browser settings. We won't send
            unnecessary alerts.
          </p>
        </div>

        {message && (
          <div
            className={`permission-status ${
              permissionStatus === "error" ||
              permissionStatus === "unsupported"
                ? "error"
                : ""
            }`}
            role="status"
          >
            {message}
          </div>
        )}

        {permissionStatus === "idle" && (
          <button
            className="permission-primary"
            onClick={requestPermission}
          >
            Allow notifications
          </button>
        )}

        {permissionStatus !== "idle" && (
          <button
            className="permission-primary"
            onClick={handleContinue}
          >
            Continue to Aamaal →
          </button>
        )}

        {permissionStatus === "idle" && (
          <button
            className="permission-secondary"
            onClick={() => {
              setPermissionStatus("skipped");
              setMessage("You can enable notifications later in Settings.");
            }}
          >
            Not now
          </button>
        )}

        {permissionStatus === "skipped" && (
          <button
            className="permission-primary"
            onClick={handleContinue}
          >
            Continue to Aamaal →
          </button>
        )}

        <p className="permission-footer">
          May every reminder bring you closer to what matters.
        </p>
      </div>
    </div>
  );
}