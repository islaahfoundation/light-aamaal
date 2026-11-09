import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    language: localStorage.getItem("aamaal-language") || "en",
    country: "India",
  });

  const [saved, setSaved] = useState(false);

  const updateField = (field, value) => {
    setProfile((previous) => ({
      ...previous,
      [field]: value,
    }));
    setSaved(false);
  };

  const handleSave = (event) => {
    event.preventDefault();

    localStorage.setItem("aamaal-profile", JSON.stringify(profile));
    localStorage.setItem("aamaal-language", profile.language);

    setSaved(true);
  };

  return (
    <div className="personal-profile-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .personal-profile-page {
          min-height: 100vh;
          background: #f8f8f5;
          padding: 24px 20px 40px;
          color: #26352e;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .profile-container {
          width: 100%;
          max-width: 480px;
          margin: auto;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 28px;
        }

        .profile-back {
          width: 39px;
          height: 39px;
          border: 1px solid #e5e9e3;
          border-radius: 12px;
          background: #fff;
          color: #426b53;
          font-size: 19px;
          cursor: pointer;
        }

        .profile-header h1 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 500;
          color: #263d31;
          margin: 0;
        }

        .profile-header p {
          font-size: 11px;
          color: #929b94;
          margin: 4px 0 0;
        }

        .profile-avatar-section {
          background: #426b53;
          border-radius: 17px;
          padding: 23px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: white;
          margin-bottom: 27px;
        }

        .profile-avatar {
          width: 67px;
          height: 67px;
          border-radius: 50%;
          background: #e8eee4;
          color: #426b53;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Georgia, serif;
          font-size: 27px;
          flex-shrink: 0;
        }

        .profile-avatar-info strong {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .profile-avatar-info small {
          font-size: 11px;
          color: #d6e2d8;
          line-height: 1.5;
        }

        .profile-section-title {
          font-size: 12px;
          font-weight: 750;
          color: #526257;
          letter-spacing: 0.5px;
          margin: 25px 0 13px;
        }

        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .profile-field label {
          display: block;
          font-size: 12px;
          font-weight: 650;
          color: #526257;
          margin-bottom: 8px;
        }

        .profile-field input,
        .profile-field select {
          width: 100%;
          padding: 14px;
          border: 1px solid #e2e7e0;
          border-radius: 11px;
          background: #fff;
          color: #35483c;
          font-size: 13px;
          outline: none;
        }

        .profile-field input:focus,
        .profile-field select:focus {
          border-color: #648c70;
        }

        .profile-field input::placeholder {
          color: #b0b8b1;
        }

        .profile-two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .profile-save {
          width: 100%;
          padding: 16px;
          margin-top: 25px;
          border: none;
          border-radius: 12px;
          background: #426b53;
          color: white;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .profile-save:active {
          transform: scale(0.99);
        }

        .profile-saved {
          padding: 12px;
          margin-top: 14px;
          border-radius: 10px;
          background: #edf2e9;
          color: #426b53;
          font-size: 12px;
          text-align: center;
        }

        .profile-note {
          text-align: center;
          color: #9aa39b;
          font-size: 10px;
          line-height: 1.6;
          margin-top: 17px;
        }

        @media (max-width: 360px) {
          .profile-two-columns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="profile-container">
        <header className="profile-header">
          <button
            className="profile-back"
            onClick={() => navigate("/account")}
            aria-label="Back to account"
          >
            ←
          </button>

          <div>
            <h1>Personal Profile</h1>
            <p>Your personal information</p>
          </div>
        </header>

        <section className="profile-avatar-section">
          <div className="profile-avatar">
            {profile.fullName.trim()
              ? profile.fullName.trim().charAt(0).toUpperCase()
              : "?"}
          </div>

          <div className="profile-avatar-info">
            <strong>{profile.fullName || "Your profile"}</strong>
            <small>
              Your personal account details.
              <br />
              Profile photo upload can be added later.
            </small>
          </div>
        </section>

        <form className="profile-form" onSubmit={handleSave}>
          <h2 className="profile-section-title">PERSONAL INFORMATION</h2>

          <div className="profile-field">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={profile.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
            />
          </div>

          <div className="profile-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={profile.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>

          <div className="profile-field">
            <label htmlFor="phone">Mobile number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter mobile number"
              autoComplete="tel"
              value={profile.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          <div className="profile-two-columns">
            <div className="profile-field">
              <label htmlFor="dob">Date of birth</label>
              <input
                id="dob"
                type="date"
                value={profile.dateOfBirth}
                onChange={(e) => updateField("dateOfBirth", e.target.value)}
              />
            </div>

            <div className="profile-field">
              <label htmlFor="gender">Gender (optional)</label>
              <select
                id="gender"
                value={profile.gender}
                onChange={(e) => updateField("gender", e.target.value)}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <h2 className="profile-section-title">PREFERENCES</h2>

          <div className="profile-field">
            <label htmlFor="language">Preferred language</label>
            <select
              id="language"
              value={profile.language}
              onChange={(e) => updateField("language", e.target.value)}
            >
              <option value="en">English</option>
              <option value="ur">Urdu</option>
              <option value="hi">Hindi</option>
              <option value="roman-ur">Roman Urdu</option>
            </select>
          </div>

          <div className="profile-field">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              value={profile.country}
              onChange={(e) => updateField("country", e.target.value)}
            >
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="profile-save">
            Save Changes →
          </button>

          {saved && (
            <div className="profile-saved" role="status">
              ✓ Profile details saved on this device.
            </div>
          )}

          <p className="profile-note">
            Your information is intended for your account. Family members
            will have separate profiles and independent Aamaal records.
          </p>
        </form>
      </div>
    </div>
  );
}