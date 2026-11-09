import { useState } from "react";
import { useNavigate } from "react-router-dom";

const avatarColors = [
  "#426b53",
  "#9b7955",
  "#647b9a",
  "#987b91",
  "#8b8956",
];

export default function AddFamilyMember() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [relation, setRelation] = useState("Child");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter the family member's name.");
      return;
    }

    const savedFamily = localStorage.getItem("aamaal-family");

    let family = [];

    try {
      family = savedFamily ? JSON.parse(savedFamily) : [];
      if (!Array.isArray(family)) family = [];
    } catch {
      family = [];
    }

    const newMember = {
      id: `profile-${Date.now()}`,
      name: name.trim(),
      relation,
      gender,
      dateOfBirth,
      initials: name.trim().charAt(0).toUpperCase(),
      color: avatarColors[family.length % avatarColors.length],
      isPrimary: false,
      createdAt: new Date().toISOString(),
    };

    const updatedFamily = [...family, newMember];

    localStorage.setItem(
      "aamaal-family",
      JSON.stringify(updatedFamily)
    );

    // Keep the current profile selected after adding a family member.
    setError("");
    navigate("/account/family");
  };

  return (
    <div className="add-family-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .add-family-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 25px 20px 40px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .add-family-container {
          max-width: 480px;
          margin: auto;
        }

        .add-family-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .add-family-back {
          width: 40px;
          height: 40px;
          border: 1px solid #e5e9e3;
          border-radius: 12px;
          background: #fff;
          color: #426b53;
          font-size: 19px;
          cursor: pointer;
        }

        .add-family-header h1 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 500;
          color: #263d31;
          margin: 0;
        }

        .add-family-header p {
          color: #929b94;
          font-size: 11px;
          margin: 5px 0 0;
        }

        .add-family-illustration {
          background: #eaf0e8;
          border-radius: 18px;
          padding: 23px;
          text-align: center;
          margin-bottom: 27px;
        }

        .add-family-icon {
          font-size: 43px;
          margin-bottom: 10px;
        }

        .add-family-illustration h2 {
          font-family: Georgia, serif;
          font-size: 21px;
          font-weight: 500;
          color: #35533f;
          margin: 0 0 8px;
        }

        .add-family-illustration p {
          color: #77877a;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        .add-family-form {
          background: #fff;
          border: 1px solid #e8ece6;
          border-radius: 17px;
          padding: 20px;
        }

        .add-family-form h3 {
          font-size: 13px;
          color: #526257;
          margin: 0 0 22px;
        }

        .add-family-field {
          margin-bottom: 19px;
        }

        .add-family-field label {
          display: block;
          color: #53645a;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .add-family-field input,
        .add-family-field select {
          width: 100%;
          height: 47px;
          padding: 0 13px;
          border: 1px solid #e2e8e1;
          border-radius: 11px;
          background: #fcfdfb;
          color: #35483c;
          font-size: 13px;
          outline: none;
        }

        .add-family-field input:focus,
        .add-family-field select:focus {
          border-color: #648c70;
          box-shadow: 0 0 0 3px #648c7015;
        }

        .add-family-field input::placeholder {
          color: #b0b9b1;
        }

        .add-family-note {
          background: #f3f6f1;
          border-radius: 11px;
          padding: 13px;
          color: #718073;
          font-size: 11px;
          line-height: 1.7;
          margin: 5px 0 20px;
        }

        .add-family-error {
          color: #b64b42;
          font-size: 11px;
          margin: -8px 0 15px;
        }

        .add-family-submit {
          width: 100%;
          height: 49px;
          border: none;
          border-radius: 12px;
          background: #426b53;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .add-family-submit:active {
          transform: scale(0.99);
        }

        .add-family-cancel {
          width: 100%;
          border: none;
          background: transparent;
          color: #87938a;
          font-size: 12px;
          padding: 16px 0 3px;
          cursor: pointer;
        }
      `}</style>

      <div className="add-family-container">
        <header className="add-family-header">
          <button
            className="add-family-back"
            onClick={() => navigate("/account/family")}
            aria-label="Go back"
          >
            ←
          </button>

          <div>
            <h1>Add Family Member</h1>
            <p>Grow your family's spiritual journey</p>
          </div>
        </header>

        <section className="add-family-illustration">
          <div className="add-family-icon">🤲</div>
          <h2>A journey shared with family</h2>
          <p>
            Create an individual profile for each family member
            and help everyone track their own Aamaal.
          </p>
        </section>

        <form className="add-family-form" onSubmit={handleSubmit}>
          <h3>FAMILY MEMBER DETAILS</h3>

          <div className="add-family-field">
            <label htmlFor="family-name">Full Name *</label>
            <input
              id="family-name"
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              autoComplete="off"
              required
            />
          </div>

          <div className="add-family-field">
            <label htmlFor="family-relation">Relationship</label>
            <select
              id="family-relation"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
            >
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Grandparent">Grandparent</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="add-family-field">
            <label htmlFor="family-gender">Gender (optional)</label>
            <select
              id="family-gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Prefer not to say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="add-family-field">
            <label htmlFor="family-dob">Date of Birth (optional)</label>
            <input
              id="family-dob"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <div className="add-family-note">
            <strong>Individual progress:</strong> Every family
            member will have separate Aamaal counts, daily targets,
            completion history and reports.
          </div>

          {error && (
            <p className="add-family-error">{error}</p>
          )}

          <button className="add-family-submit" type="submit">
            Create Family Profile →
          </button>

          <button
            className="add-family-cancel"
            type="button"
            onClick={() => navigate("/account/family")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}