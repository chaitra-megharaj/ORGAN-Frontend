function Home(props) {
  return (
  <div
      style={{
        background: "#e8f0f2", // vintage bluish parchment
        color: "#1c313a",
        padding: "40px 30px",
        "font-family": "'Georgia', serif",
      }}
    >
      {/* Title */}
      <h1
        style={{
          "font-size": "30px",
          "margin-bottom": "15px",
          "font-weight": "bold",
          color: "#0d47a1", // vintage navy
          "text-align": "center",
          "letter-spacing": "1px",
        }}
      >
        Welcome to GiftOfLife Hub</h1>
        <h2 style={{
          "font-size": "25px",
          "margin-bottom": "15px",
          "font-weight": "bold",
          color: "#0d47a1", // vintage navy
          "text-align": "center",
          "letter-spacing": "1px",
        }}
        >
          Organ Donation Matching System
      </h2>

      {/* Subtitle */}
      <p
        style={{
          "font-size": "18px",
          "margin-bottom": "40px",
          "line-height": "1.8",
          color: "#37474f",
          "max-width": "800px",
          margin: "0 auto",
          "text-align": "center",
        }}
      >
        Bridging the gap between patients waiting for organ transplants and
        selfless donors willing to save lives. Explore our platform to register
        as a donor, add patients, and view real-time matches. 💙
      </p>

      {/* Info Sections */}
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          gap: "30px",
          "flex-wrap": "wrap",
          "max-width": "1000px",
          margin: "0 auto 40px",
        }}
      >
        {/* Patients Card */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            background: "#cfd8dc",
            padding: "25px",
            "border-radius": "12px",
            border: "1px solid #90a4ae",
            "box-shadow": "inset 0 1px 4px rgba(0,0,0,0.15)",
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3
            style={{
              "margin-bottom": "12px",
              color: "#0d47a1",
              "font-size": "22px",
              "text-align": "center",
            }}
          >
            🧑‍⚕️ Patients
          </h3>
          <p
            style={{
              "font-size": "16px",
              color: "#263238",
              "line-height": "1.6",
              "text-align": "center",
              "margin-bottom": "20px",
            }}
          >
            Register patients in need of life-saving transplants and keep track
            of their organ and blood type requirements.
          </p>
          <div style={{ "text-align": "center" }}>
            <button
              onClick={() => props.setPage("patients")}
              style={{
                display: "inline-flex",
                "align-items": "center",
                gap: "8px",
                padding: "10px 22px",
                background: "linear-gradient(90deg, #1565c0, #0d47a1)", // bluish vintage
                border: "none",
                "border-radius": "8px",
                color: "#fff",
                "font-size": "15px",
                "font-weight": "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "box-shadow": "0 3px 8px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #0d47a1, #08306b)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #1565c0, #0d47a1)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              ➕ Register as Patient
            </button>
          </div>
        </div>

        {/* Donors Card */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            background: "#cfd8dc",
            padding: "25px",
            "border-radius": "12px",
            border: "1px solid #90a4ae",
            "box-shadow": "inset 0 1px 4px rgba(0,0,0,0.15)",
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3
            style={{
              "margin-bottom": "12px",
              color: "#0d47a1",
              "font-size": "22px",
              "text-align": "center",
            }}
          >
            💚 Donors
          </h3>
          <p
            style={{
              "font-size": "16px",
              color: "#263238",
              "line-height": "1.6",
              "text-align": "center",
              "margin-bottom": "20px",
            }}
          >
            Encourage and register donors who want to make a difference by
            offering the ultimate gift of life.
          </p>
          <div style={{ "text-align": "center" }}>
            <button
              onClick={() => props.setPage("donors")}
              style={{
                display: "inline-flex",
                "align-items": "center",
                gap: "8px",
                padding: "10px 22px",
                background: "linear-gradient(90deg, #1565c0, #0d47a1)", // same bluish vintage
                border: "none",
                "border-radius": "8px",
                color: "#fff",
                "font-size": "15px",
                "font-weight": "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "box-shadow": "0 3px 8px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #0d47a1, #08306b)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #1565c0, #0d47a1)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              ➕ Register as Donor
            </button>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <p
        style={{
          "margin-top": "20px",
          "font-style": "italic",
          "font-size": "17px",
          color: "#455a64",
          "text-align": "center",
        }}
      >
        “To the world you may be one person, but to one person you may be the
        world.”
      </p>
    </div>
  );
}

export default Home;
