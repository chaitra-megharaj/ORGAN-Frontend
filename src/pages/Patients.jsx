import { createSignal } from "solid-js";

function Patients() {
  const [pName, setPName] = createSignal("");
  const [pOrgan, setPOrgan] = createSignal("");
  const [pBlood, setPBlood] = createSignal("");

  const addPatient = (e) => {
    e.preventDefault();
    alert(
      `Patient Registered:\nName: ${pName()}\nOrgan: ${pOrgan()}\nBlood: ${pBlood()}`
    );
    setPName("");
    setPOrgan("");
    setPBlood("");
  };

  return (
    <section>
      <h2>Register Patient</h2>
      <form onSubmit={addPatient}>
        <input
          type="text"
          placeholder="Patient Name"
          value={pName()}
          onInput={(e) => setPName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Organ Needed"
          value={pOrgan()}
          onInput={(e) => setPOrgan(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Blood Group"
          value={pBlood()}
          onInput={(e) => setPBlood(e.target.value)}
          required
        />
        <button type="submit">Register Patient</button>
      </form>
    </section>
  );
}

export default Patients;
