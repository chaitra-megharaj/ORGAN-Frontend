function MatchDetails(props) {
  const match = props.match;

  if (!match) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>No Match Selected</h2>
        <button
          onClick={props.goBack}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#003366",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          🔙 Back to Matching
        </button>
      </div>
    );
  }

  return (
    <section
      style={{
        fontFamily: "Segoe UI, sans-serif",
        color: "#333",
        background: "linear-gradient(135deg, #e6f2ff, #d9ebff)",
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ color: "#003366", fontSize: "28px", marginBottom: "20px" }}>
          Match Details
        </h2>
        <p style={{ fontSize: "20px", marginBottom: "15px" }}>
          <strong>Patient:</strong> {match.patient}
        </p>
        <p style={{ fontSize: "20px", marginBottom: "15px" }}>
          <strong>Donor:</strong> {match.donor}
        </p>
        <p style={{ fontSize: "18px", color: "#555" }}>{match.details}</p>

        <button
          onClick={props.goBack}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            borderRadius: "8px",
            border: "none",
            background: "#003366",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🔙 Back to Matching
        </button>
      </div>
    </section>
  );
}

export default MatchDetails;
