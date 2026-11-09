import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AAMAAL_ITEMS = [
  {
    id: "durood",
    title: "313 Durood Shareef",
    subtitle: "Daily Salawat",
    icon: "📿",
    target: 313,
    unit: "recitations",
    color: "#eaf1e7",
  },
  {
    id: "surahMulk",
    title: "Surah Mulk",
    subtitle: "Daily Quran recitation",
    icon: "📖",
    target: 1,
    unit: "recitation",
    color: "#edf0e4",
  },
  {
    id: "istighfar",
    title: "100 Istighfar",
    subtitle: "Daily remembrance",
    icon: "🤲",
    target: 100,
    unit: "recitations",
    color: "#fbf0dc",
  },
];

const todayKey = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const formatNumber = (value) =>
  Number(value || 0).toLocaleString("en-IN");

export default function FamilyMemberAamaal() {
  const navigate = useNavigate();
  const { profileId } = useParams();

  const [member, setMember] = useState(null);
  const [records, setRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState(todayKey());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const family = JSON.parse(
        localStorage.getItem("aamaal-family") || "[]"
      );

      const selectedMember = family.find(
        (item) => item.id === profileId
      );

      if (!selectedMember) {
        setError("Family member not found.");
        setLoading(false);
        return;
      }

      setMember(selectedMember);

      const savedRecords = JSON.parse(
        localStorage.getItem("aamaal-records") || "[]"
      );

      if (Array.isArray(savedRecords)) {
        setRecords(
          savedRecords.filter(
            (record) => record.profileId === profileId
          )
        );
      }
    } catch {
      setError("Unable to load this member's Aamaal.");
    }

    setLoading(false);
  }, [profileId]);

  const getDailyCount = (itemId) => {
    const record = records.find(
      (item) => item.date === selectedDate
    );

    return Number(record?.[itemId] || 0);
  };

  const getLifetimeCount = (itemId) => {
    return records.reduce(
      (total, record) => total + Number(record[itemId] || 0),
      0
    );
  };

  const getCompletion = (item) => {
    const count = getDailyCount(item.id);

    return Math.min(
      100,
      Math.round((count / item.target) * 100)
    );
  };

  const completedItems = AAMAAL_ITEMS.filter(
    (item) => getDailyCount(item.id) >= item.target
  ).length;

  const totalItems = AAMAAL_ITEMS.length;

  if (loading) {
    return (
      <div className="family-aamaal-loading">
        Loading Aamaal...
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="family-aamaal-loading">
        <p>{error || "Profile not found."}</p>
        <button onClick={() => navigate("/account/family")}>
          Back to Family Profiles
        </button>
      </div>
    );
  }

  return (
    <div className="family-aamaal-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .family-aamaal-page {
          min-height: 100vh;
          background: #f8f8f5;
          color: #26352e;
          padding: 22px 20px 40px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .family-aamaal-container {
          max-width: 480px;
          margin: auto;
        }

        .family-aamaal-header {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 25px;
        }

        .family-aamaal-back {
          width: 40px;
          height: 40px;
          border: 1px solid #e5e9e3;
          border-radius: 12px;
          background: white;
          color: #426b53;
          font-size: 20px;
          cursor: pointer;
        }

        .family-aamaal-header h1 {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 500;
          color: #263d31;
          margin: 0;
        }

        .family-aamaal-header p {
          font-size: 11px;
          color: #929b94;
          margin: 5px 0 0;
        }

        .family-aamaal-profile {
          background: #426b53;
          border-radius: 19px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
          margin-bottom: 20px;
        }

        .family-aamaal-avatar {
          width: 57px;
          height: 57px;
          border-radius: 50%;
          background: #dce9d9;
          color: #35533f;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: Georgia, serif;
          font-size: 25px;
          flex-shrink: 0;
        }

        .family-aamaal-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .family-aamaal-profile h2 {
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 5px;
        }

        .family-aamaal-profile p {
          color: #dce7dd;
          font-size: 11px;
          margin: 0;
        }

        .family-aamaal-date {
          background: white;
          border: 1px solid #e7ebe5;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 20px;
        }

        .family-aamaal-date label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #526257;
          margin-bottom: 9px;
        }

        .family-aamaal-date input {
          width: 100%;
          height: 42px;
          border: 1px solid #e2e8e1;
          border-radius: 9px;
          padding: 0 11px;
          color: #35483c;
          background: #fcfdfb;
          font-size: 13px;
        }

        .family-aamaal-summary {
          background: #fff;
          border: 1px solid #e7ebe5;
          border-radius: 16px;
          padding: 17px;
          margin-bottom: 25px;
        }

        .family-aamaal-summary-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 13px;
        }

        .family-aamaal-summary-top strong {
          color: #35483c;
          font-size: 13px;
        }

        .family-aamaal-summary-top span {
          color: #64866c;
          font-size: 12px;
          font-weight: 700;
        }

        .family-aamaal-track {
          height: 9px;
          border-radius: 20px;
          background: #edf0eb;
          overflow: hidden;
        }

        .family-aamaal-track-fill {
          height: 100%;
          border-radius: 20px;
          background: #648c70;
          transition: width 0.3s ease;
        }

        .family-aamaal-section-title {
          font-family: Georgia, serif;
          font-size: 21px;
          color: #263d31;
          font-weight: 500;
          margin: 0 0 13px;
        }

        .family-aamaal-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .family-aamaal-card {
          background: white;
          border: 1px solid #e7ebe5;
          border-radius: 16px;
          padding: 16px;
        }

        .family-aamaal-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .family-aamaal-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
          flex-shrink: 0;
        }

        .family-aamaal-card-title {
          flex: 1;
          min-width: 0;
        }

        .family-aamaal-card-title strong {
          display: block;
          font-size: 13px;
          color: #35483c;
          margin-bottom: 4px;
        }

        .family-aamaal-card-title small {
          color: #929b94;
          font-size: 10px;
        }

        .family-aamaal-percent {
          color: #64866c;
          font-size: 13px;
          font-weight: 800;
        }

        .family-aamaal-counts {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 11px;
        }

        .family-aamaal-counts strong {
          color: #35483c;
          font-size: 12px;
        }

        .family-aamaal-counts span {
          color: #929b94;
          font-size: 10px;
        }

        .family-aamaal-lifetime {
          background: #f0f4ed;
          border-radius: 15px;
          padding: 17px;
          margin-top: 25px;
        }

        .family-aamaal-lifetime h3 {
          color: #35533f;
          font-family: Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          margin: 0 0 13px;
        }

        .family-aamaal-lifetime-row {
          display: flex;
          justify-content: space-between;
          padding: 9px 0;
          border-bottom: 1px solid #dfe8dc;
          font-size: 12px;
          color: #617365;
        }

        .family-aamaal-lifetime-row:last-child {
          border-bottom: none;
        }

        .family-aamaal-lifetime-row strong {
          color: #35533f;
        }

        .family-aamaal-history {
          width: 100%;
          min-height: 49px;
          border: 1px solid #648c70;
          border-radius: 12px;
          background: transparent;
          color: #426b53;
          font-size: 13px;
          font-weight: 700;
          margin-top: 20px;
          cursor: pointer;
        }

        .family-aamaal-note {
          color: #929b94;
          font-size: 10px;
          line-height: 1.6;
          text-align: center;
          margin-top: 18px;
        }

        .family-aamaal-loading {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
          background: #f8f8f5;
          color: #426b53;
          font-family: Inter, sans-serif;
          text-align: center;
        }

        .family-aamaal-loading button {
          border: none;
          background: #426b53;
          color: white;
          border-radius: 25px;
          padding: 12px 20px;
        }
      `}</style>

      <div className="family-aamaal-container">
        <header className="family-aamaal-header">
          <button
            className="family-aamaal-back"
            onClick={() =>
              navigate(`/account/family/${profileId}`)
            }
            aria-label="Back to profile"
          >
            ←
          </button>

          <div>
            <h1>Member's Aamaal</h1>
            <p>Personal spiritual progress</p>
          </div>
        </header>

        <section className="family-aamaal-profile">
          <div className="family-aamaal-avatar">
            {member.photo ? (
              <img src={member.photo} alt={member.name} />
            ) : (
              member.initials ||
              member.name.charAt(0).toUpperCase()
            )}
          </div>

          <div>
            <h2>{member.name}</h2>
            <p>{member.relation || "Family Member"}</p>
          </div>
        </section>

        <section className="family-aamaal-date">
          <label htmlFor="aamaal-date">VIEW DAILY AAMAAL</label>
          <input
            id="aamaal-date"
            type="date"
            value={selectedDate}
            max={todayKey()}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </section>

        <section className="family-aamaal-summary">
          <div className="family-aamaal-summary-top">
            <strong>Daily Completion</strong>
            <span>
              {completedItems}/{totalItems} completed
            </span>
          </div>

          <div className="family-aamaal-track">
            <div
              className="family-aamaal-track-fill"
              style={{
                width: `${(completedItems / totalItems) * 100}%`,
              }}
            />
          </div>
        </section>

        <h3 className="family-aamaal-section-title">
          Daily Aamaal
        </h3>

        <section className="family-aamaal-list">
          {AAMAAL_ITEMS.map((item) => {
            const count = getDailyCount(item.id);
            const percentage = getCompletion(item);
            const complete = count >= item.target;

            return (
              <article
                className="family-aamaal-card"
                key={item.id}
              >
                <div className="family-aamaal-card-top">
                  <div
                    className="family-aamaal-icon"
                    style={{ background: item.color }}
                  >
                    {item.icon}
                  </div>

                  <div className="family-aamaal-card-title">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </div>

                  <span className="family-aamaal-percent">
                    {complete ? "✓ " : ""}
                    {percentage}%
                  </span>
                </div>

                <div className="family-aamaal-track">
                  <div
                    className="family-aamaal-track-fill"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="family-aamaal-counts">
                  <strong>
                    {formatNumber(count)} / {formatNumber(item.target)}
                  </strong>

                  <span>
                    {complete
                      ? "Target completed"
                      : `${formatNumber(
                          Math.max(0, item.target - count)
                        )} remaining`}
                  </span>
                </div>
              </article>
            );
          })}
        </section>

        <section className="family-aamaal-lifetime">
          <h3>Lifetime Progress</h3>

          {AAMAAL_ITEMS.map((item) => (
            <div
              className="family-aamaal-lifetime-row"
              key={item.id}
            >
              <span>{item.title}</span>
              <strong>
                {formatNumber(getLifetimeCount(item.id))}
              </strong>
            </div>
          ))}
        </section>

        <button
          className="family-aamaal-history"
          onClick={() =>
            navigate(`/aamaal/history?profileId=${profileId}`)
          }
        >
          View Complete Aamaal History →
        </button>

        <p className="family-aamaal-note">
          This page displays records belonging only to {member.name}.
          Other family members' Aamaal records remain separate.
        </p>
      </div>
    </div>
  );
}