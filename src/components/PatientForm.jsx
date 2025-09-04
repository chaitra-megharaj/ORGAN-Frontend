import { createSignal } from "solid-js";
import axios from "axios";

export default function PatientForm() {
  const [name, setName] = createSignal("");
  const [organ, setOrgan] = createSignal("");
  const [blood, setBlood] = createSignal("");
  const [message, setMessage] = createSignal("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/patients", {
        name: name(),
        organ: organ(),
        blood: blood(),
      });
      setMessage(`✅ Patient ${res.data.name} registered successfully!`);
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", "border-radius": "10px" }}>
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={name()}
          onInput={(e) => setName(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Organ Needed"
          value={organ()}
          onInput={(e) => setOrgan(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Blood Group"
          value={blood()}
          onInput={(e) => setBlood(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", background: "teal", color: "white" }}>
          Register
        </button>
      </form>
      <p>{message()}</p>
    </div>
  );
}
