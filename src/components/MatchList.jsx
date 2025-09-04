import { createSignal, onMount } from "solid-js";
import axios from "axios";

export default function MatchList() {
  const [matches, setMatches] = createSignal([]);

  onMount(async () => {
    const res = await axios.get("http://localhost:8080/match");
    setMatches(res.data);
  });

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Available Matches</h2>
      <ul>
        {matches().map((m) => (
          <li>
            🧑‍🤝‍🧑 {m.patient} matched with {m.donor} for {m.organ}
          </li>
        ))}
      </ul>
    </div>
  );
}
