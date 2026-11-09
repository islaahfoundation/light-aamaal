import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function RemoveFamilyMember() {
  const navigate = useNavigate();
  const { profileId } = useParams();

  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    try {
      const family = JSON.parse(
        localStorage.getItem("aamaal-family") || "[]"
      );

      const selectedMember = family.find(
        (item) => item.id === profileId
      );

      if (!selectedMember) {
        setError("This family profile could not be found.");
      } else {
        setMember(selectedMember);

        if (selectedMember.isPrimary) {
          setError("The primary account profile cannot be removed.");
        }
      }
    } catch {
      setError("Unable to load this family profile.");
    }

    setLoading(false);
  }, [profileId]);

  const handleRemove = () => {
    if (!confirmation || !member || member.isPrimary) return;

    try {
      const family = JSON.parse(
        localStorage.getItem("aamaal-family") || "[]"
      );

      const updatedFamily = family.filter(
        (item) => item.id !== profileId
      );

      localStorage.setItem(
        "aamaal-family",
        JSON.stringify(updatedFamily)
      );

      // If the removed member was active, switch to the primary profile.
      const activeProfile = localStorage.getItem(
        "aamaal-active-profile"
      );

      if (activeProfile === profileId) {
        const primaryProfile =
          updatedFamily.find((item) => item.isPrimary) ||
          updatedFamily[0];

        if (primaryProfile) {
          localStorage.setItem(
            "aamaal-active-profile",
            primaryProfile.id
          );
        } else {
          localStorage.removeItem("aamaal-active-profile");
        }
      }

      // Intentionally retain Aamaal records.
      // They must not be silently destroyed by removing a profile.
      navigate("/account/family", {
        state: { message: "Family profile removed." },
      });
    } catch {
      setError("Unable to remove this profile. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="remove-family-loading">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="remove-family-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .remove-family-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 25px 20px 40px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .remove-family-container {
          max-width: 440px;
          margin: auto;
        }

        .remove-family-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 40px;
        }

        .remove-family-back {
          width: 40px;
          height: 40px;
          border: 1px solid #e5e9e3;
          border-radius: 12px;
          background: white;
          color: #426b53;
          font-size: 20px;
          cursor: pointer;
        }

        .remove-family-header h1 {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 500;
          color: #263d31;
          margin: 0;
        }

        .remove-family-content {
          text-align: center;
          background: white;
          border: 1px solid #e9ece6;
          border-radius: 20px;
          padding: 27px 21px;
        }

        .remove-family-warning-icon {
          width: 82px;
          height: 82px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #fff0e9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 37px;
        }

        .remove-family-content h2 {
          font-family: Georgia, serif;
          color: #35483c;
          font-size: 24px;
          font-weight: 500;
          margin: 0 0 12px;
        }

        .remove-family-description {
          color: #87938a;
          font-size: 12px;
          line-height: 1.8;
          margin: 0 0 22px;
        }

        .remove-family-member {
          display: flex;
          align-items: center;
          gap: 13px;
          text-align: left;
          background: #f5f7f3;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 21px;
        }

        .remove-family-avatar {
          width: 49px;
          height: 49px;
          border-radius: 50%;
          background: #dce9d9;
          color: #35533f;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: Georgia, serif;
          font-size: 21px;
          flex-shrink: 0;
        }

        .remove-family-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-family-member strong {
          display: block;
          color: #35483c;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .remove-family-member small {
          color: #929b94;
          font-size: 11px;
        }

        .remove-family-data-note {
          text-align: left;
          background: #fff8e9;
          border: 1px solid #f0e5c9;
          border-radius: 12px;
          padding: 13px;
          color: #816b42;
          font-size: 11px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .remove-family-check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          text-align: left;
          color: #617066;
          font-size: 11px;
          line-height: 1.6;
          margin: 17px 0 22px;
          cursor: pointer;
        }

        .remove-family-check input {
          width: 17px;
          height: 17px;
          margin: 1px 0 0;
          accent-color: #426b53;
          flex-shrink: 0;
        }

        .remove-family-delete {
          width: 100%;
          min-height: 49px;
          border: none;
          border-radius: 12px;
          background: #b64b42;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .remove-family-delete:disabled {
          background: #d8aaa5;
          cursor: not-allowed;
        }

        .remove-family-cancel {
          width: 100%;
          min-height: 45px;
          border: 1px solid #dfe6dd;
          border-radius: 12px;
          background: white;
          color: #426b53;
          font-size: 12px;
          font-weight: 700;
          margin-top: 11px;
          cursor: pointer;
        }

        .remove-family-error {
          background: #fff0ed;
          color: #a84138;
          border-radius: 12px;
          padding: 14px;
          font-size: 12px;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .remove-family-loading {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f8f5;
          color: #426b53;
          font-family: Inter, sans-serif;
        }
      `}</style>

      <div className="remove-family-container">
        <header className="remove-family-header">
          <button
            className="remove-family-back"
            onClick={() =>
              navigate(
                member
                  ? `/account/family/${profileId}`
                  : "/account/family"
              )
            }
            aria-label="Go back"
          >
            ←
          </button>

          <h1>Remove Member</h1>
        </header>

        <section className="remove-family-content">
          <div className="remove-family-warning-icon">
            {error ? "!" : "⚠️"}
          </div>

          <h2>
            {error ? "Unable to Continue" : "Remove Family Member?"}
          </h2>

          {error ? (
            <>
              <div className="remove-family-error">{error}</div>

              <button
                className="remove-family-cancel"
                onClick={() => navigate("/account/family")}
              >
                Back to Family Profiles
              </button>
            </>
          ) : (
            <>
              <p className="remove-family-description">
                Are you sure you want to remove this family
                profile from your account? You can add the
                member again later.
              </p>

              <div className="remove-family-member">
                <div className="remove-family-avatar">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    member.initials ||
                    member.name.charAt(0).toUpperCase()
                  )}
                </div>

                <div>
                  <strong>{member.name}</strong>
                  <small>{member.relation || "Family Member"}</small>
                </div>
              </div>

              <div className="remove-family-data-note">
                <strong>What happens to their Aamaal?</strong>
                <br />
                This action removes the profile from your family
                list. Its existing Aamaal records are retained
                in this prototype and are not automatically deleted.
                Reassigning or permanently deleting those records
                requires a separate decision.
              </div>

              <label className="remove-family-check">
                <input
                  type="checkbox"
                  checked={confirmation}
                  onChange={(e) =>
                    setConfirmation(e.target.checked)
                  }
                />

                <span>
                  I understand that this profile will no longer
                  appear in my family profile list.
                </span>
              </label>

              <button
                className="remove-family-delete"
                disabled={!confirmation}
                onClick={handleRemove}
              >
                Yes, Remove Profile
              </button>

              <button
                className="remove-family-cancel"
                onClick={() =>
                  navigate(`/account/family/${profileId}`)
                }
              >
                Keep Profile
              </button>
            </>
          )}
        </section>
      </div>
    </div>
  );
}