import { createSignal, onMount } from "solid-js";

function Patients() {
  const [pName, setPName] = createSignal("");
  const [pOrgan, setPOrgan] = createSignal("");
  const [pBlood, setPBlood] = createSignal("");
  const [patients, setPatients] = createSignal([]);

  // ✅ Fetch patients from backend
  const fetchPatients = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/patients");
      const data = await res.json();
      setPatients(data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };

  // ✅ Add new patient (POST to backend)
  const addPatient = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: pName(),
          organ: pOrgan(),
          blood: pBlood(),
        }),
      });

      if (res.ok) {
        const saved = await res.json();
        alert(`✅ Patient Registered:\n\nName: ${saved.patient.name}\nOrgan: ${saved.patient.organ}\nBlood: ${saved.patient.blood}`);
        fetchPatients(); // refresh list after add
      } else {
        alert("❌ Error registering patient");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Backend might be down");
    }

    setPName(""); setPOrgan(""); setPBlood("");
  };

  // ✅ Load patients when page loads
  onMount(fetchPatients);

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
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
        <h1 style={{ margin: "0", fontSize: "32px" }}>🏥 Patient Registration Portal</h1>
      </div>

      {/* Main */}
      <div
        style={{
          margin: "40px auto",
          width: "90%",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      >
        <form
          onSubmit={addPatient}
          style={{
            background: "#f9fbff",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Patient Name"
            value={pName()}
            onInput={(e) => setPName(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "14px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.border = "1px solid #004080")}
            onMouseOut={(e) => (e.target.style.border = "1px solid #bbb")}
          />
          <input
            type="text"
            placeholder="Organ Needed"
            value={pOrgan()}
            onInput={(e) => setPOrgan(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "14px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.border = "1px solid #004080")}
            onMouseOut={(e) => (e.target.style.border = "1px solid #bbb")}
          />
          <input
            type="text"
            placeholder="Blood Group"
            value={pBlood()}
            onInput={(e) => setPBlood(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "14px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.border = "1px solid #004080")}
            onMouseOut={(e) => (e.target.style.border = "1px solid #bbb")}
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
            onMouseOver={(e) => (e.target.style.background = "linear-gradient(90deg,#0066b2,#004080)")}
            onMouseOut={(e) => (e.target.style.background = "linear-gradient(90deg,#004080,#0066b2)")}
          >
            ➕ Register Patient
          </button>
        </form>

        {/* Registered Patients */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#003366" }}>📋 Registered Patients</h2>
          {patients().length === 0 ? (
            <p style={{ color: "#777" }}>No patients yet.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: "0" }}>
              {patients().map((p) => (
                <li
                  style={{
                    padding: "12px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    background: "#fff",
                    border: "1px solid #ddd",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#e6f0ff";
                    e.target.style.border = "1px solid #004080";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#fff";
                    e.target.style.border = "1px solid #ddd";
                  }}
                >
                  <strong>{p.name}</strong> — {p.organ} ({p.blood})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Patients;
