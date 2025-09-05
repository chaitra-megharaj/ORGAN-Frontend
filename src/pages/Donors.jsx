import { createSignal } from "solid-js";

function Donors() {
  const [dName, setDName] = createSignal("");
  const [dOrgan, setDOrgan] = createSignal("");
  const [dBlood, setDBlood] = createSignal("");

  const addDonor = (e) => {
    e.preventDefault();
    alert(
      `✅ Donor Registered:\n\nName: ${dName()}\nOrgan Available: ${dOrgan()}\nBlood Group: ${dBlood()}`
    );
    setDName("");
    setDOrgan("");
    setDBlood("");
  };

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        color: "#333",
        background: "linear-gradient(135deg, #d9ebff, #e6f2ff)",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      {/* Header Banner */}
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
        <h1 style={{ margin: "0", fontSize: "32px" }}>
          ❤️ Donor Registration Portal
        </h1>
        <p style={{ marginTop: "8px", fontSize: "16px", opacity: 0.9 }}>
          Giving hope and saving lives through donation
        </p>
      </div>

      {/* Main Content Background Box */}
      <div
        style={{
          margin: "40px auto",
          width: "90%",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.01)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
        }}
      >
        {/* Registration Form */}
        <form
          onSubmit={addDonor}
          style={{
            flex: "1",
            background: "#f9fbff",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>
            Register New Donor
          </h2>

          <input
            type="text"
            placeholder="Donor Name"
            value={dName()}
            onInput={(e) => setDName(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "14px",
            }}
          />
          <input
            type="text"
            placeholder="Organ Available"
            value={dOrgan()}
            onInput={(e) => setDOrgan(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "14px",
            }}
          />
          <input
            type="text"
            placeholder="Blood Group (e.g., A+, O-)"
            value={dBlood()}
            onInput={(e) => setDBlood(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "14px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "linear-gradient(90deg, #004080, #0066b2)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #002b5c, #004d80)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #004080, #0066b2)")
            }
          >
            ➕ Register Donor
          </button>

          <p style={{ fontSize: "12px", color: "#777", marginTop: "10px" }}>
            ⚠️ Donor information will remain confidential and only used for
            patient–donor matching.
          </p>
        </form>

        {/* Sidebar Info */}
        <aside
          style={{
            flex: "0.8",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Info Box 1 */}
          <div
            style={{
              background: "#e6f0ff",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 2px 10px rgba(0,0,0,0.05)";
            }}
          >
            <h3 style={{ color: "#003366" }}>💡 Donor Guidelines</h3>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
              <li>Ensure you are in good health before registering.</li>
              <li>Clearly specify the organ(s) available for donation.</li>
              <li>Enter accurate blood group details.</li>
              <li>All data remains confidential and secure.</li>
            </ul>
          </div>

          {/* Info Box 2 */}
          <div
            style={{
              background: "#f0f8ff",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 2px 10px rgba(0,0,0,0.05)";
            }}
          >
            <h3 style={{ color: "#004080" }}>🌍 Impact of Donation</h3>
            <p style={{ lineHeight: "1.6" }}>
              A single donor can save up to 8 lives. Organ donation is the
              greatest gift one can give to humanity.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Donors;
