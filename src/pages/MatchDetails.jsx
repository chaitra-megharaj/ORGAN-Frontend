function MatchDetails(props) {
  const match = props.match;

  if (!match) {
    return (
      <section>
        <h2>ℹ️ Match Details</h2>
        <p>Select a match from the list to view details.</p>
      </section>
    );
  }

  // Safely extract organ and blood if details exist
  const organ = match.details?.split(",")[0]?.replace("Needs ", "") || match.organ;
  const blood = match.details?.split("Blood group ")[1] || match.blood;

  return (
    <section>
      <h2>📝 Match Details</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h3>👩‍⚕️ Patient</h3>
        <p>
          <b>Name:</b> {match.patientName}
        </p>
        <p>
          <b>Organ Needed:</b> {organ}
        </p>
        <p>
          <b>Blood Group:</b> {blood}
        </p>

        <h3 style={{ marginTop: "15px" }}>🫀 Donor</h3>
        <p>
          <b>Name:</b> {match.donorName}
        </p>
        <p>
          <b>Organ:</b> {organ}
        </p>
        <p>
          <b>Blood Group:</b> {blood}
        </p>

        <h3 style={{ marginTop: "15px" }}>📅 Other Info</h3>
        <p>
          <b>Matched At:</b>{" "}
          {new Date(match.createdAt).toLocaleString("en-IN", {
            dateStyle: "full",
            timeStyle: "short",
          })}
        </p>
        <p>
          <b>Patient ID:</b> {match.patientId}
        </p>
        <p>
          <b>Donor ID:</b> {match.donorId}
        </p>
      </div>
    </section>
  );
}

export default MatchDetails;
