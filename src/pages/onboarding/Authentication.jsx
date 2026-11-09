import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "register" && !form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (mode === "register" && form.password !== form.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // Authentication will be connected to the backend later.
    setError("Authentication service is not connected yet.");
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setError("");
  };

  return (
    <div className="auth-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .auth-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 28px 22px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .auth-container {
          width: 100%;
          max-width: 420px;
          margin: auto;
        }

        .auth-brand {
          text-align: center;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #426b53;
          margin-bottom: 42px;
        }

        .auth-symbol {
          display: block;
          font-size: 29px;
          margin-bottom: 8px;
        }

        .auth-heading {
          font-family: Georgia, serif;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 500;
          color: #263d31;
          margin: 0 0 10px;
          text-align: center;
        }

        .auth-subtitle {
          color: #849087;
          font-size: 13px;
          line-height: 1.7;
          text-align: center;
          margin: 0 auto 27px;
          max-width: 320px;
        }

        .auth-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 5px;
          border-radius: 12px;
          background: #edf0eb;
          margin-bottom: 25px;
        }

        .auth-tab {
          border: none;
          border-radius: 9px;
          background: transparent;
          color: #879188;
          padding: 12px;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
        }

        .auth-tab.active {
          background: #fff;
          color: #426b53;
          box-shadow: 0 2px 8px rgba(35, 60, 43, 0.06);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .auth-field label {
          display: block;
          font-size: 12px;
          font-weight: 650;
          color: #526257;
          margin-bottom: 8px;
        }

        .auth-field input {
          width: 100%;
          border: 1px solid #e2e7e0;
          background: #fff;
          border-radius: 11px;
          padding: 14px;
          font-size: 14px;
          color: #35483c;
          outline: none;
          transition: border 0.2s;
        }

        .auth-field input:focus {
          border-color: #648c70;
        }

        .auth-field input::placeholder {
          color: #b0b8b1;
        }

        .auth-password-wrap {
          position: relative;
        }

        .auth-password-wrap input {
          padding-right: 65px;
        }

        .auth-show-password {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: #64816b;
          font-size: 11px;
          font-weight: 650;
          cursor: pointer;
        }

        .auth-forgot {
          display: block;
          width: fit-content;
          margin: -3px 0 3px auto;
          border: none;
          background: transparent;
          color: #64816b;
          font-size: 12px;
          cursor: pointer;
        }

        .auth-error {
          background: #f8eeee;
          color: #9a5555;
          border-radius: 9px;
          padding: 11px 13px;
          font-size: 12px;
          line-height: 1.5;
        }

        .auth-submit {
          width: 100%;
          border: none;
          border-radius: 12px;
          padding: 16px;
          background: #426b53;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 5px;
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #a1aaa2;
          font-size: 11px;
          margin: 23px 0;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: "";
          height: 1px;
          background: #e6e9e3;
          flex: 1;
        }

        .auth-google {
          width: 100%;
          padding: 14px;
          border: 1px solid #e2e7e0;
          border-radius: 11px;
          background: #fff;
          color: #536157;
          font-size: 13px;
          font-weight: 600;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .auth-bottom {
          text-align: center;
          color: #89928b;
          font-size: 12px;
          line-height: 1.7;
          margin-top: 25px;
        }

        .auth-bottom strong {
          color: #426b53;
        }

        .auth-terms {
          text-align: center;
          color: #a0a8a1;
          font-size: 10px;
          line-height: 1.7;
          margin-top: 24px;
        }

        @media (max-width: 360px) {
          .auth-heading {
            font-size: 28px;
          }

          .auth-brand {
            margin-bottom: 30px;
          }
        }
      `}</style>

      <div className="auth-container">
        <div className="auth-brand">
          <span className="auth-symbol">☪</span>
          AAMAAL
        </div>

        <h1 className="auth-heading">
          {mode === "login" ? "Welcome back." : "Begin your journey."}
        </h1>

        <p className="auth-subtitle">
          {mode === "login"
            ? "Sign in and continue building meaningful daily habits."
            : "Create your account and make every day count."}
        </p>

        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${mode === "login" ? "active" : ""}`}
            onClick={() => switchMode("login")}
          >
            Sign in
          </button>

          <button
            type="button"
            className={`auth-tab ${mode === "register" ? "active" : ""}`}
            onClick={() => switchMode("register")}
          >
            Create account
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="auth-field">
              <label htmlFor="auth-name">Full name</label>
              <input
                id="auth-name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="auth-email">Email address</label>
            <input
              id="auth-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label htmlFor="auth-password">Password</label>
            <div className="auth-password-wrap">
              <input
                id="auth-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                value={form.password}
                onChange={(e) => updateField("password", e.target.value)}
              />

              <button
                type="button"
                className="auth-show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {mode === "register" && (
            <div className="auth-field">
              <label htmlFor="auth-confirm-password">Confirm password</label>
              <input
                id="auth-confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={(e) =>
                  updateField("confirmPassword", e.target.value)
                }
              />
            </div>
          )}

          {mode === "login" && (
            <button
              type="button"
              className="auth-forgot"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </button>
          )}

          {error && <div className="auth-error" role="alert">{error}</div>}

          <button type="submit" className="auth-submit">
            {mode === "login" ? "Sign in →" : "Create account →"}
          </button>
        </form>

        <div className="auth-divider">OR</div>

        <button
          type="button"
          className="auth-google"
          disabled
          title="Google sign-in will be connected later"
        >
          Continue with Google · Coming soon
        </button>

        <p className="auth-bottom">
          {mode === "login"
            ? "New to Aamaal? "
            : "Already have an account? "}
          <strong
            onClick={() =>
              switchMode(mode === "login" ? "register" : "login")
            }
            style={{ cursor: "pointer" }}
          >
            {mode === "login" ? "Create an account" : "Sign in"}
          </strong>
        </p>

        <p className="auth-terms">
          By continuing, you agree to Aamaal's Terms of Service and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
}