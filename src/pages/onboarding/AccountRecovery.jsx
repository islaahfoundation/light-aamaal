import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountRecovery() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Backend password recovery will be connected later.
    setStatus("submitted");
  };

  return (
    <div className="recovery-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .recovery-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 28px 22px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .recovery-container {
          width: 100%;
          max-width: 420px;
          margin: auto;
        }

        .recovery-back {
          border: none;
          background: transparent;
          color: #64816b;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 0;
          cursor: pointer;
          margin-bottom: 45px;
        }

        .recovery-brand {
          text-align: center;
          color: #426b53;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 48px;
        }

        .recovery-art {
          width: 155px;
          height: 155px;
          border-radius: 50%;
          background: #edf2e9;
          margin: 0 auto 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .recovery-icon {
          font-size: 61px;
        }

        .recovery-spark {
          position: absolute;
          color: #b88b49;
          font-size: 22px;
        }

        .recovery-spark.one {
          top: 23px;
          right: 25px;
        }

        .recovery-spark.two {
          bottom: 23px;
          left: 25px;
        }

        .recovery-heading {
          font-family: Georgia, serif;
          font-size: 31px;
          font-weight: 500;
          line-height: 1.2;
          color: #263d31;
          text-align: center;
          margin: 0 0 13px;
        }

        .recovery-description {
          color: #849087;
          font-size: 13px;
          line-height: 1.8;
          text-align: center;
          max-width: 330px;
          margin: 0 auto 30px;
        }

        .recovery-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .recovery-label {
          font-size: 12px;
          font-weight: 650;
          color: #526257;
        }

        .recovery-input {
          width: 100%;
          padding: 15px;
          border: 1px solid #e2e7e0;
          border-radius: 11px;
          background: #fff;
          color: #35483c;
          font-size: 14px;
          outline: none;
        }

        .recovery-input:focus {
          border-color: #648c70;
        }

        .recovery-input::placeholder {
          color: #b0b8b1;
        }

        .recovery-error {
          padding: 11px 13px;
          border-radius: 9px;
          background: #f8eeee;
          color: #9a5555;
          font-size: 12px;
        }

        .recovery-submit {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 12px;
          background: #426b53;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 8px;
        }

        .recovery-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .recovery-help {
          text-align: center;
          font-size: 12px;
          color: #89928b;
          line-height: 1.7;
          margin-top: 24px;
        }

        .recovery-help button {
          border: none;
          background: transparent;
          color: #64816b;
          font-weight: 650;
          cursor: pointer;
        }

        .recovery-success {
          background: #edf2e9;
          border: 1px solid #dce8dc;
          border-radius: 14px;
          padding: 20px;
          text-align: center;
          margin-top: 20px;
        }

        .recovery-success-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .recovery-success strong {
          display: block;
          color: #426b53;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .recovery-success p {
          color: #748278;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
          overflow-wrap: anywhere;
        }

        @media (max-width: 360px) {
          .recovery-heading {
            font-size: 27px;
          }
        }
      `}</style>

      <div className="recovery-container">
        <button
          className="recovery-back"
          onClick={() => navigate("/login")}
        >
          ← Back to sign in
        </button>

        <div className="recovery-brand">AAMAAL</div>

        <div className="recovery-art">
          <span className="recovery-icon">✉️</span>
          <span className="recovery-spark one">✦</span>
          <span className="recovery-spark two">✧</span>
        </div>

        {status === "submitted" ? (
          <>
            <h1 className="recovery-heading">
              Check your inbox.
            </h1>

            <p className="recovery-description">
              If an account exists for this email address, a password
              reset link will be sent to you.
            </p>

            <div className="recovery-success">
              <div className="recovery-success-icon">📩</div>
              <strong>Reset request submitted</strong>
              <p>
                Email address: {email}
                <br />
                Please check your inbox and spam folder.
              </p>
            </div>

            <button
              className="recovery-submit"
              onClick={() => navigate("/login")}
            >
              Return to sign in
            </button>
          </>
        ) : (
          <>
            <h1 className="recovery-heading">
              Forgot your password?
            </h1>

            <p className="recovery-description">
              It happens. Enter the email address associated with your
              Aamaal account and we'll help you reset your password.
            </p>

            <form className="recovery-form" onSubmit={handleSubmit}>
              <label className="recovery-label" htmlFor="recovery-email">
                Email address
              </label>

              <input
                id="recovery-email"
                className="recovery-input"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
                required
              />

              {error && (
                <div className="recovery-error" role="alert">
                  {error}
                </div>
              )}

              <button className="recovery-submit" type="submit">
                Send reset link →
              </button>
            </form>

            <p className="recovery-help">
              Remembered your password?
              <br />
              <button onClick={() => navigate("/login")}>
                Back to sign in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}