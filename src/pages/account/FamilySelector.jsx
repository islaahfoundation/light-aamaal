import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultFamily = [
  {
    id: "primary",
    name: "My Profile",
    relation: "Account Owner",
    initials: "M",
    color: "#426b53",
    isPrimary: true,
  },
];

export default function FamilySelector() {
  const navigate = useNavigate();

  const [family, setFamily] = useState(defaultFamily);
  const [activeId, setActiveId] = useState("primary");

  useEffect(() => {
    const savedFamily = localStorage.getItem("aamaal-family");
    const savedActive = localStorage.getItem("aamaal-active-profile");

    if (savedFamily) {
      try {
        const parsed = JSON.parse(savedFamily);

        if (Array.isArray(parsed) && parsed.length > 0) {
          setFamily(parsed);
          setActiveId(
            parsed.some((member) => member.id === savedActive)
              ? savedActive
              : parsed[0].id
          );
        }
      } catch {
        // Keep the default profile if stored data is invalid.
      }
    }
  }, []);

  const selectProfile = (id) => {
    setActiveId(id);
    localStorage.setItem("aamaal-active-profile", id);

    // The selected profile ID will be used to scope Aamaal records.
    navigate("/account/family");
  };

  const activeProfile = family.find(
    (member) => member.id === activeId
  );

  return (
    <div className="family-selector-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .family-selector-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 25px 20px 40px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .family-selector-container {
          width: 100%;
          max-width: 480px;
          margin: auto;
        }

        .family-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .family-back {
          width: 40px;
          height: 40px;
          border: 1px solid #e5e9e3;
          border-radius: 12px;
          background: #fff;
          color: #426b53;
          font-size: 19px;
          cursor: pointer;
        }

        .family-header h1 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 500;
          color: #263d31;
          margin: 0;
        }

        .family-header p {
          color: #929b94;
          font-size: 11px;
          margin: 5px 0 0;
        }

        .family-intro {
          background: #426b53;
          color: white;
          border-radius: 18px;
          padding: 22px;
          margin-bottom: 27px;
        }

        .family-intro-icon {
          font-size: 29px;
          margin-bottom: 12px;
        }

        .family-intro h2 {
          font-family: Georgia, serif;
          font-size: 23px;
          font-weight: 500;
          margin: 0 0 9px;
        }

        .family-intro p {
          color: #dce7dd;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        .family-section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 13px;
        }

        .family-section-heading h3 {
          font-size: 13px;
          color: #526257;
          font-weight: 750;
          margin: 0;
        }

        .family-count {
          font-size: 11px;
          color: #929b94;
        }

        .family-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .family-card {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px;
          background: #fff;
          border: 1px solid #e7ebe5;
          border-radius: 15px;
          text-align: left;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .family-card.active {
          border: 1.5px solid #648c70;
          background: #f0f5ef;
        }

        .family-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: Georgia, serif;
          font-size: 21px;
          flex-shrink: 0;
        }

        .family-details {
          flex: 1;
          min-width: 0;
        }

        .family-details strong {
          display: block;
          color: #35483c;
          font-size: 13px;
          margin-bottom: 5px;
        }

        .family-details small {
          color: #929b94;
          font-size: 11px;
        }

        .family-selected {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #648c70;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .family-unselected {
          width: 21px;
          height: 21px;
          border: 1.5px solid #d7ded6;
          border-radius: 50%;
        }

        .family-add {
          width: 100%;
          padding: 16px;
          border: 1px dashed #aabcae;
          border-radius: 14px;
          background: #f1f5ef;
          color: #426b53;
          font-size: 13px;
          font-weight: 700;
          margin-top: 17px;
          cursor: pointer;
        }

        .family-active-summary {
          background: #fff;
          border: 1px solid #e7ebe5;
          border-radius: 14px;
          padding: 16px;
          margin-top: 25px;
        }

        .family-active-summary small {
          display: block;
          color: #929b94;
          font-size: 10px;
          margin-bottom: 7px;
        }

        .family-active-summary strong {
          color: #426b53;
          font-size: 13px;
        }

        .family-info {
          color: #929b94;
          font-size: 11px;
          line-height: 1.7;
          text-align: center;
          margin-top: 22px;
        }
      `}</style>

      <div className="family-selector-container">
        <header className="family-header">
          <button
            className="family-back"
            onClick={() => navigate("/account")}
            aria-label="Back to account"
          >
            ←
          </button>

          <div>
            <h1>Family Profiles</h1>
            <p>One account, multiple journeys</p>
          </div>
        </header>

        <section className="family-intro">
          <div className="family-intro-icon">👨‍👩‍👧‍👦</div>
          <h2>Every journey is personal.</h2>
          <p>
            Manage Aamaal for your family from one account.
            Each member gets their own progress, daily records
            and spiritual journey.
          </p>
        </section>

        <div className="family-section-heading">
          <h3>CHOOSE A PROFILE</h3>
          <span className="family-count">
            {family.length} {family.length === 1 ? "profile" : "profiles"}
          </span>
        </div>

        <div className="family-list">
          {family.map((member) => {
            const isActive = activeId === member.id;

            return (
              <button
                key={member.id}
                className={`family-card ${isActive ? "active" : ""}`}
                onClick={() => selectProfile(member.id)}
              >
                <span
                  className="family-avatar"
                  style={{ background: member.color || "#648c70" }}
                >
                  {member.initials ||
                    member.name.charAt(0).toUpperCase()}
                </span>

                <span className="family-details">
                  <strong>{member.name}</strong>
                  <small>{member.relation}</small>
                </span>

                {isActive ? (
                  <span className="family-selected">✓</span>
                ) : (
                  <span className="family-unselected" />
                )}
              </button>
            );
          })}
        </div>

        <button
          className="family-add"
          onClick={() => navigate("/account/family/add")}
        >
          + Add Family Member
        </button>

        <div className="family-active-summary">
          <small>CURRENTLY ACTIVE PROFILE</small>
          <strong>
            {activeProfile?.name || "My Profile"}
          </strong>
        </div>

        <p className="family-info">
          Switching profiles changes whose Aamaal records and
          progress you are viewing. Family members' records
          remain separate.
        </p>
      </div>
    </div>
  );
}