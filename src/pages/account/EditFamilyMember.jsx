import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const countries = [
  { name: "India", flag: "🇮🇳" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Other", flag: "🌍" },
];

export default function EditFamilyMember() {
  const navigate = useNavigate();
  const { profileId } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("India");
  const [privacy, setPrivacy] = useState("public");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedFamily = localStorage.getItem("aamaal-family");
      const family = savedFamily ? JSON.parse(savedFamily) : [];

      const member = family.find(
        (item) => item.id === profileId
      );

      if (!member) {
        setError("Family profile could not be found.");
        setLoading(false);
        return;
      }

      setName(member.name || "");
      setAge(member.age || "");
      setCountry(member.country || "India");
      setPrivacy(member.privacy || "public");
      setPhoto(member.photo || "");
    } catch {
      setError("Unable to load this family profile.");
    }

    setLoading(false);
  }, [profileId]);

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Please choose an image smaller than 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
      setError("");
    };

    reader.onerror = () => {
      setError("Unable to read the selected image.");
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter the family member's name.");
      return;
    }

    if (age !== "" && (!Number.isInteger(Number(age)) ||
      Number(age) < 1 || Number(age) > 120)) {
      setError("Please enter a valid age between 1 and 120.");
      return;
    }

    try {
      const savedFamily = localStorage.getItem("aamaal-family");
      const family = savedFamily ? JSON.parse(savedFamily) : [];

      const updatedFamily = family.map((member) =>
        member.id === profileId
          ? {
              ...member,
              name: name.trim(),
              initials: name.trim().charAt(0).toUpperCase(),
              age: age === "" ? "" : Number(age),
              country,
              privacy,
              photo,
              updatedAt: new Date().toISOString(),
            }
          : member
      );

      localStorage.setItem(
        "aamaal-family",
        JSON.stringify(updatedFamily)
      );

      navigate(`/account/family/${profileId}`);
    } catch {
      setError("Unable to save changes. Please try again.");
    }
  };

  const selectedCountry = countries.find(
    (item) => item.name === country
  );

  if (loading) {
    return (
      <div className="edit-family-loading">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="edit-family-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .edit-family-page {
          min-height: 100vh;
          background: #fbfaf3;
          color: #192d25;
          padding: 22px 20px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .edit-family-container {
          max-width: 480px;
          margin: auto;
        }

        .edit-family-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 35px;
        }

        .edit-family-back {
          position: absolute;
          left: 0;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          color: #173d30;
          font-size: 27px;
          cursor: pointer;
        }

        .edit-family-header h1 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 600;
          margin: 0;
          color: #183c2f;
        }

        .edit-family-avatar-area {
          display: flex;
          justify-content: center;
          margin: 10px 0 35px;
        }

        .edit-family-avatar-wrap {
          width: 180px;
          height: 180px;
          position: relative;
        }

        .edit-family-avatar {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: #c6dfbd;
          border: 5px solid #d9e9d0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: #31533d;
          font-family: Georgia, serif;
          font-size: 65px;
        }

        .edit-family-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .edit-family-camera {
          position: absolute;
          right: -4px;
          bottom: 10px;
          width: 49px;
          height: 49px;
          border: 4px solid #fbfaf3;
          border-radius: 50%;
          background: #07563f;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          cursor: pointer;
        }

        .edit-family-camera input {
          display: none;
        }

        .edit-family-field {
          margin-bottom: 23px;
        }

        .edit-family-field label,
        .edit-family-privacy-title {
          display: block;
          font-family: Georgia, serif;
          font-size: 17px;
          font-weight: 600;
          color: #172b23;
          margin-bottom: 9px;
        }

        .edit-family-field input,
        .edit-family-field select {
          width: 100%;
          height: 56px;
          padding: 0 15px;
          border: 1.5px solid #d8d9d0;
          border-radius: 17px;
          background: transparent;
          color: #182c24;
          font-size: 16px;
          outline: none;
        }

        .edit-family-field input:focus,
        .edit-family-field select:focus {
          border-color: #17664d;
          box-shadow: 0 0 0 3px #17664d12;
        }

        .edit-family-country {
          position: relative;
        }

        .edit-family-country select {
          appearance: none;
          padding-left: 54px;
          cursor: pointer;
        }

        .edit-family-country-flag {
          position: absolute;
          left: 17px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 22px;
          pointer-events: none;
        }

        .edit-family-country-arrow {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 17px;
        }

        .edit-family-privacy {
          margin-top: 30px;
          margin-bottom: 28px;
        }

        .edit-family-privacy-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 20px;
        }

        .edit-family-info {
          width: 19px;
          height: 19px;
          border: 1.5px solid #52645a;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
          font-size: 12px;
          cursor: help;
        }

        .edit-family-radio {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin: 0 0 19px;
          cursor: pointer;
        }

        .edit-family-radio input {
          appearance: none;
          width: 23px;
          height: 23px;
          border: 2px solid #a6aaa3;
          border-radius: 50%;
          margin: 3px 0 0;
          flex-shrink: 0;
          cursor: pointer;
        }

        .edit-family-radio input:checked {
          border: 6px solid #07563f;
        }

        .edit-family-radio strong {
          display: block;
          font-size: 17px;
          color: #172b23;
          margin-bottom: 4px;
        }

        .edit-family-radio small {
          display: block;
          color: #68746c;
          font-size: 13px;
        }

        .edit-family-error {
          color: #b43e36;
          background: #fff0ed;
          border-radius: 10px;
          padding: 11px;
          font-size: 12px;
          margin-bottom: 17px;
        }

        .edit-family-submit {
          width: 100%;
          min-height: 58px;
          border: none;
          border-radius: 35px;
          background: linear-gradient(110deg, #07563f, #087452);
          color: white;
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 5px 12px #07563f18;
        }

        .edit-family-submit:active {
          transform: scale(0.99);
        }

        .edit-family-loading {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fbfaf3;
          color: #426b53;
          font-family: Inter, sans-serif;
        }
      `}</style>

      <div className="edit-family-container">
        <header className="edit-family-header">
          <button
            className="edit-family-back"
            onClick={() =>
              navigate(`/account/family/${profileId}`)
            }
            aria-label="Go back"
          >
            ←
          </button>

          <h1>Edit Profile</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="edit-family-avatar-area">
            <div className="edit-family-avatar-wrap">
              <div className="edit-family-avatar">
                {photo ? (
                  <img src={photo} alt="Profile" />
                ) : (
                  name.charAt(0).toUpperCase() || "?"
                )}
              </div>

              <label className="edit-family-camera">
                <span>📷</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  aria-label="Upload profile photo"
                />
              </label>
            </div>
          </div>

          <div className="edit-family-field">
            <label htmlFor="edit-name">Name</label>
            <input
              id="edit-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>

          <div className="edit-family-field">
            <label htmlFor="edit-age">Age</label>
            <input
              id="edit-age"
              type="number"
              min="1"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
          </div>

          <div className="edit-family-field">
            <label htmlFor="edit-country">Country</label>

            <div className="edit-family-country">
              <span className="edit-family-country-flag">
                {selectedCountry?.flag || "🌍"}
              </span>

              <select
                id="edit-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>

              <span className="edit-family-country-arrow">⌄</span>
            </div>
          </div>

          <section className="edit-family-privacy">
            <div className="edit-family-privacy-title">
              Privacy Settings

              <span
                className="edit-family-info"
                title="Choose whether this member's name appears in shared Aamaal reports."
              >
                i
              </span>
            </div>

            <label className="edit-family-radio">
              <input
                type="radio"
                name="privacy"
                value="public"
                checked={privacy === "public"}
                onChange={() => setPrivacy("public")}
              />

              <span>
                <strong>Public</strong>
                <small>Visible in reports</small>
              </span>
            </label>

            <label className="edit-family-radio">
              <input
                type="radio"
                name="privacy"
                value="private"
                checked={privacy === "private"}
                onChange={() => setPrivacy("private")}
              />

              <span>
                <strong>Private</strong>
                <small>Only for you</small>
              </span>
            </label>
          </section>

          {error && (
            <div className="edit-family-error">
              {error}
            </div>
          )}

          <button
            className="edit-family-submit"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}