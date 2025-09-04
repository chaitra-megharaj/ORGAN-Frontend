import { createSignal } from "solid-js";

function Donors() {
  const [dName, setDName] = createSignal("");
  const [dOrgan, setDOrgan] = createSignal("");
  const [dBlood, setDBlood] = createSignal("");

  const addDonor = (e) => {
    e.preventDefault();
    alert(
      `Donor Registered:\nName: ${dName()}\nOrgan: ${dOrgan()}\nBlood: ${dBlood()}`
    );
    setDName("");
    setDOrgan("");
    setDBlood("");
  };

  return (
    <section>
      <h2>Register Donor</h2>
      <form onSubmit={addDonor}>
        <input
          type="text"
          placeholder="Donor Name"
          value={dName()}
          onInput={(e) => setDName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Organ Available"
          value={dOrgan()}
          onInput={(e) => setDOrgan(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Blood Group"
          value={dBlood()}
          onInput={(e) => setDBlood(e.target.value)}
          required
        />
        <button type="submit">Register Donor</button>
      </form>
    </section>
  );
}

export default Donors;
