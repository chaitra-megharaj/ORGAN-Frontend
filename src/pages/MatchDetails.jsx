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

  return (
    <section>
      <h2>📝 Match Details</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          "border-radius": "8px",
          "margin-top": "10px",
          "background-color": "#f9f9f9",
        }}
      >
        <h3>👩‍⚕️ Patient</h3>
        <p>
          <b>Name:</b> {match.patient}
        </p>
        <p>
          <b>Organ Needed:</b> {match.details.split(",")[0].replace("Needs ", "")}
        </p>
        <p>
          <b>Blood Group:</b> {match.details.split("Blood group ")[1]}
        </p>

        <h3 style={{ "margin-top": "15px" }}>🫀 Donor</h3>
        <p>
          <b>Name:</b> {match.donor}
        </p>
        <p>
          <b>Organ:</b> {match.details.split(",")[0].replace("Needs ", "")}
        </p>
        <p>
          <b>Blood Group:</b> {match.details.split("Blood group ")[1]}
        </p>

        <h3 style={{ "margin-top": "15px" }}>📅 Other Info</h3>
        <p>
          <b>Matched At:</b>{" "}
          {new Date(match.matchedAt).toLocaleString("en-IN", {
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
