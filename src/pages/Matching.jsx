import { createSignal } from "solid-js";

function Matching(props) {
  const [matches] = createSignal([
    { id: 1, patient: "Patient A 🫁", donor: "Donor X", details: "Needs Lung transplant, Blood group O+" },
    { id: 2, patient: "Patient B ❤️", donor: "Donor Y", details: "Needs Heart transplant, Blood group B+" },
    { id: 3, patient: "Patient C 🧬", donor: "Donor Z", details: "Needs Kidney transplant, Blood group AB-" },
  ]);

  return (
    <section
      style={{
        fontFamily: "Segoe UI, sans-serif",
        color: "#333",
        background: "linear-gradient(135deg, #d9ebff, #e6f2ff)",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #003366, #005580)",
          padding: "25px",
          color: "#fff",
          borderRadius: "0 0 20px 20px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "32px" }}>🕰️ Organ Matching Dashboard</h1>
        <p style={{ marginTop: "8px", fontSize: "16px", opacity: 0.9 }}>
          Click a match to view more details
        </p>
      </div>

      {/* Matches */}
      <div
        style={{
          margin: "40px auto",
          width: "90%",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#003366",
          }}
        >
          🔗 Current Matches
        </h2>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: "500px" }}>
          {matches().map((match) => (
            <li
              style={{
                background: "#e6f0ff",
                margin: "12px 0",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #90a4ae",
                fontSize: "18px",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onClick={() => props.onSelectMatch(match)}   // ✅ navigate to details
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "inset 0 1px 6px rgba(0,0,0,0.08)";
              }}
            >
              {match.patient} matched with {match.donor}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Matching;
