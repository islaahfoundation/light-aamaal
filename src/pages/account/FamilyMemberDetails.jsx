import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const defaultStats = {
  durood: 0,
  surahMulk: 0,
  istighfar: 0,
};

const countries = {
  India: "🇮🇳",
  Pakistan: "🇵🇰",
  Bangladesh: "🇧🇩",
  "Saudi Arabia": "🇸🇦",
  "United Arab Emirates": "🇦🇪",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
};

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en-IN");
}

function formatMemberSince(date) {
  if (!date) return "Not available";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "Not available";

  return parsed.toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

export default function FamilyMemberDetails() {
  const navigate = useNavigate();
  const { profileId } = useParams();

  const [member, setMember] = useState(null);
  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const savedFamily = localStorage.getItem("aamaal-family");
      const family = savedFamily ? JSON.parse(savedFamily) : [];

      const selectedMember = family.find(
        (item) => item.id === profileId
      );

      if (!selectedMember) {
        setError("This family profile could not be found.");
        setLoading(false);
        return;
      }

      setMember(selectedMember);

      // Read only records belonging to this family profile.
      // Expected record format:
      // { profileId, durood, surahMulk, istighfar }
      const savedRecords = localStorage.getItem("aamaal-records");
      const records = savedRecords ? JSON.parse(savedRecords) : [];

      if (Array.isArray(records)) {
        const memberRecords = records.filter(
          (record) => record.profileId === profileId
        );

        const totals = memberRecords.reduce(
          (result, record) => ({
            durood: result.durood + Number(record.durood || 0),
            surahMulk:
              result.surahMulk + Number(record.surahMulk || 0),
            istighfar:
              result.istighfar + Number(record.istighfar || 0),
          }),
          { ...defaultStats }
        );

        setStats(totals);
      }
    } catch {
      setError("Unable to load this family profile.");
    }

    setLoading(false);
  }, [profileId]);

  if (loading) {
    return (
      <div className="member-details-loading">
        Loading profile...
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="member-details-page">
        <div className="member-details-error">
          <p>{error || "Profile not found."}</p>

          <button onClick={() => navigate("/account/family")}>
            Back to Family Profiles
          </button>
        </div>
      </div>
    );
  }

  const country = member.country || "India";
  const privacy = member.privacy || "public";

  const memberSince = formatMemberSince(
    member.createdAt
  );

  const handleViewHistory = () => {
    localStorage.setItem("aamaal-active-profile", profileId);

    navigate(`/aamaal/history?profileId=${profileId}`);
  };

  return (
    <div className="member-details-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .member-details-page {
          min-height: 100vh;
          background: #fbfaf3;
          color: #192d25;
          padding: 22px 20px 35px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .member-details-container {
          max-width: 480px;
          margin: auto;
        }

        .member-details-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 28px;
        }

        .member-details-back {
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

        .member-details-header h1 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 600;
          color: #183c2f;
          margin: 0;
        }

        .member-details-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 25px;
        }

        .member-details-avatar {
          width: 174px;
          height: 174px;
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
          margin-bottom: 15px;
        }

        .member-details-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member-details-name {
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 600;
          color: #172f25;
          margin: 0 0 10px;
          overflow-wrap: anywhere;
        }

        .member-details-badge {
          display: inline-block;
          background: #087451;
          color: white;
          border-radius: 25px;
          padding: 8px 23px;
          font-size: 13px;
          font-weight: 700;
        }

        .member-details-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin: 20px 0 35px;
        }

        .member-stat-card {
          min-height: 145px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 13px 5px;
          box-shadow: 0 4px 12px #243c2910;
          border: 1px solid #ecece2;
        }

        .member-stat-card.durood {
          background: #f0f2e9;
        }

        .member-stat-card.mulk {
          background: #f0f4e5;
        }

        .member-stat-card.istighfar {
          background: #fff3d9;
        }

        .member-stat-icon {
          font-size: 29px;
          margin-bottom: 8px;
        }

        .member-stat-number {
          color: #152b22;
          font-size: 25px;
          font-weight: 800;
          margin-bottom: 3px;
          text-align: center;
          overflow-wrap: anywhere;
        }

        .member-stat-label {
          color: #26382e;
          font-family: Georgia, serif;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
        }

        .member-details-section-title {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 600;
          color: #172f25;
          margin: 0 0 13px;
        }

        .member-account-info {
          background: #fffef9;
          border: 1px solid #ece9dc;
          border-radius: 19px;
          padding: 5px 18px;
          box-shadow: 0 4px 12px #243c2909;
          margin-bottom: 28px;
        }

        .member-info-row {
          min-height: 58px;
          display: flex;
          align-items: center;
          gap: 13px;
          color: #26382e;
          font-size: 14px;
          border-bottom: 1px solid #efeee6;
        }

        .member-info-row:last-child {
          border-bottom: none;
        }

        .member-info-icon {
          width: 25px;
          text-align: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .member-info-text {
          overflow-wrap: anywhere;
        }

        .member-info-text strong {
          font-weight: 700;
        }

        .member-history-button {
          width: 100%;
          min-height: 61px;
          border: 2px solid #174c3a;
          border-radius: 35px;
          background: transparent;
          color: #173c2f;
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 13px;
        }

        .member-history-button span {
          margin-left: 9px;
          font-family: Arial, sans-serif;
        }

        .member-edit-button {
          width: 100%;
          min-height: 49px;
          border: none;
          border-radius: 30px;
          background: #e9efe7;
          color: #315b42;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .member-details-loading,
        .member-details-error {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          background: #fbfaf3;
          color: #426b53;
          font-family: Inter, sans-serif;
          text-align: center;
          padding: 25px;
        }

        .member-details-error button {
          border: none;
          background: #426b53;
          color: white;
          border-radius: 25px;
          padding: 13px 20px;
          cursor: pointer;
        }

        @media (max-width: 360px) {
          .member-stat-number {
            font-size: 21px;
          }

          .member-stat-label {
            font-size: 13px;
          }

          .member-stat-card {
            min-height: 130px;
          }
        }
      `}</style>

      <div className="member-details-container">
        <header className="member-details-header">
          <button
            className="member-details-back"
            onClick={() => navigate("/account/family")}
            aria-label="Back to family profiles"
          >
            ←
          </button>

          <h1>Profile Details</h1>
        </header>

        <section className="member-details-profile">
          <div className="member-details-avatar">
            {member.photo ? (
              <img src={member.photo} alt={member.name} />
            ) : (
              member.initials ||
              member.name.charAt(0).toUpperCase()
            )}
          </div>

          <h2 className="member-details-name">
            {member.name}
          </h2>

          <span className="member-details-badge">
            {member.relation || "Member"}
          </span>
        </section>

        <section className="member-details-stats">
          <div className="member-stat-card durood">
            <span className="member-stat-icon">📖</span>
            <strong className="member-stat-number">
              {formatNumber(stats.durood)}
            </strong>
            <span className="member-stat-label">Durood</span>
          </div>

          <div className="member-stat-card mulk">
            <span className="member-stat-icon">🌿</span>
            <strong className="member-stat-number">
              {formatNumber(stats.surahMulk)}
            </strong>
            <span className="member-stat-label">Surah Mulk</span>
          </div>

          <div className="member-stat-card istighfar">
            <span className="member-stat-icon">🤲</span>
            <strong className="member-stat-number">
              {formatNumber(stats.istighfar)}
            </strong>
            <span className="member-stat-label">Istighfar</span>
          </div>
        </section>

        <section>
          <h3 className="member-details-section-title">
            Account Info
          </h3>

          <div className="member-account-info">
            <div className="member-info-row">
              <span className="member-info-icon">
                {countries[country] || "🌍"}
              </span>

              <span className="member-info-text">
                {country}
              </span>
            </div>

            <div className="member-info-row">
              <span className="member-info-icon">▦</span>

              <span className="member-info-text">
                <strong>Member since:</strong> {memberSince}
              </span>
            </div>

            <div className="member-info-row">
              <span className="member-info-icon">🛡️</span>

              <span className="member-info-text">
                <strong>Privacy:</strong>{" "}
                {privacy === "private" ? "Private" : "Public"}
              </span>
            </div>
          </div>
        </section>

        <button
          className="member-history-button"
          onClick={handleViewHistory}
        >
          View Full History <span>→</span>
        </button>

        <button
          className="member-edit-button"
          onClick={() =>
            navigate(`/account/family/${profileId}/edit`)
          }
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}