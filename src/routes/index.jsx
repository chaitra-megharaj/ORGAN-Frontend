import PatientForm from "../components/PatientForm";
import MatchList from "../components/MatchList";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Gift Of Life Hub</h1>
      <PatientForm />
      <MatchList />
    </div>
  );
}
