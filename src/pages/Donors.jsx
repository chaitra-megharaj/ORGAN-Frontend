import { createSignal, onMount } from "solid-js";

function Donors() {
  const [dName, setDName] = createSignal("");
  const [dOrgan, setDOrgan] = createSignal("");
  const [dBlood, setDBlood] = createSignal("");
  const [donors, setDonors] = createSignal([]);

  // ✅ Fetch donors from backend
  const fetchDonors = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/donors");
      const data = await res.json();
      setDonors(data);
    } catch (err) {
      console.error("Error fetching donors:", err);
    }
  };

  // ✅ Add new donor (POST to backend)
  const addDonor = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: dName(),
          organ: dOrgan(),
          blood: dBlood(),
        }),
      });

      if (res.ok) {
        const saved = await res.json();
        alert(`✅ Donor Registered:\n\nName: ${saved.donor.name}\nOrgan: ${saved.donor.organ}\nBlood: ${saved.donor.blood}`);
        fetchDonors(); // refresh donor list
      } else {
        alert("❌ Error registering donor");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Backend might be down");
    }

    setDName(""); setDOrgan(""); setDBlood("");
  };

  // ✅ Load donors when page loads
  onMount(fetchDonors);

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
        <h1 style={{ margin: "0", fontSize: "32px" }}>❤️ Donor Registration Portal</h1>
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
          onSubmit={addDonor}
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
            placeholder="Donor Name"
            value={dName()}
            onInput={(e) => setDName(e.target.value)}
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
            placeholder="Organ Available"
            value={dOrgan()}
            onInput={(e) => setDOrgan(e.target.value)}
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
            value={dBlood()}
            onInput={(e) => setDBlood(e.target.value)}
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
            ➕ Register Donor
          </button>
        </form>

        {/* Registered Donors */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#003366" }}>📋 Registered Donors</h2>
          {donors().length === 0 ? (
            <p style={{ color: "#777" }}>No donors yet.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: "0" }}>
              {donors().map((d) => (
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
                  <strong>{d.name}</strong> — {d.organ} ({d.blood})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Donors;
