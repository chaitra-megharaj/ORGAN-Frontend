import { createSignal } from "solid-js";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Donors from "./pages/Donors";
import Matching from "./pages/Matching";

function App() {
  const [page, setPage] = createSignal("home");

  return (
    <div class="container">
      {/* Header */}
      <header class="header">
        {/* Website Title */}
        <div class="site-title">
          <h1>GiftOfLife <span>Hub</span></h1>
        </div>

        {/* Navigation Bar */}
        <nav class="nav-bar">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("patients")}>Patients</button>
          <button onClick={() => setPage("donors")}>Donors</button>
          <button onClick={() => setPage("matching")}>Matching</button>
        </nav>
      </header>

      {/* Main content */}
      <main>
        {page() === "home" && <Home />}
        {page() === "patients" && <Patients />}
        {page() === "donors" && <Donors />}
        {page() === "matching" && <Matching />}
      </main>

      {/* Footer */}
      <footer>
        © 2025 GiftOfLife Hub | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
