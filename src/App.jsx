import { createSignal } from "solid-js";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Donors from "./pages/Donors";
import Matching from "./pages/Matching";
import MatchDetails from "./pages/MatchDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [page, setPage] = createSignal("home");
  const [selectedMatch, setSelectedMatch] = createSignal(null);

  return (
    <div class="container">
      {/* Header */}
      <header
        class="header"
        style={{
          background: "linear-gradient(90deg, #003366, #005f73)",
          padding: "115px 100px", // reduced height
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Website Title */}
        <div class="site-title" style={{ color: "#fff" }}>
          <h1 style={{ fontSize: "22px", margin: 0 }}>
            GiftOfLife <span style={{ color: "#a7c7e7" }}>Hub</span>
          </h1>
        </div>

        {/* Navigation Bar */}
        <nav
          class="nav-bar"
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("patients")}>Patients</button>
          <button onClick={() => setPage("donors")}>Donors</button>
          <button onClick={() => setPage("matching")}>Matching</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>

          {/* ✅ Sign In / Sign Up Button */}
          <button
            onClick={() => setPage("signin")}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #003366",
              background: "#fff",
              color: "#003366",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#f0f8ff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
            }}
          >
            Sign In / Sign Up
          </button>
        </nav>
      </header>

      {/* Main content */}
      <main>
        {page() === "home" && <Home setPage={setPage} />}
        {page() === "patients" && <Patients />}
        {page() === "donors" && <Donors />}
        {page() === "matching" && (
          <Matching
            onSelectMatch={(match) => {
              setSelectedMatch(match);
              setPage("matchDetails");
            }}
          />
        )}
        {page() === "matchDetails" && (
          <MatchDetails
            match={selectedMatch()}
            goBack={() => setPage("matching")}
          />
        )}
        {page() === "about" && <About />}
        {page() === "contact" && <Contact />}
        {page() === "signin" && <SignIn setPage={setPage} />}
        {page() === "signup" && <SignUp setPage={setPage} />}
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#003366",
          color: "#fff",
          marginTop: "30px",
        }}
      >
        © 2025 GiftOfLife Hub | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
