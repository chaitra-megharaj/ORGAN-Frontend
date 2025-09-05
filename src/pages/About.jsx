function About() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #e6f0f7, #dbe9f4)",
        padding: "60px 20px",
        fontFamily: "'Georgia', serif",
        color: "#1c313a",
        lineHeight: "1.8",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#0d47a1",
              marginBottom: "15px",
              letterSpacing: "1px",
            }}
          >
            About GiftOfLife Hub
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#37474f",
              maxWidth: "750px",
              margin: "0 auto",
            }}
          >
            A platform built to connect organ donors with patients in need,
            fostering hope, compassion, and the ultimate gift of life.
          </p>
        </div>

        {/* Mission, Vision, Values in Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {/* Mission */}
          <div
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #b0bec5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>
              🌍 Our Mission
            </h3>
            <p style={{ fontSize: "16px", color: "#455a64" }}>
              To create a transparent and accessible system that promotes organ
              donation, reduces waiting times, and offers new chances at life.
            </p>
          </div>

          {/* Vision */}
          <div
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #b0bec5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>
              ✨ Our Vision
            </h3>
            <p style={{ fontSize: "16px", color: "#455a64" }}>
              A future where no patient loses hope waiting for an organ, and
              everyone is empowered to contribute to saving lives.
            </p>
          </div>

          {/* Values */}
          <div
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #b0bec5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>
              💙 Core Values
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                fontSize: "16px",
                color: "#455a64",
                lineHeight: "1.6",
              }}
            >
              <li>✔️ Compassion and empathy</li>
              <li>✔️ Transparency in processes</li>
              <li>✔️ Innovation with technology</li>
              <li>✔️ Awareness and education</li>
            </ul>
          </div>
        </div>

        {/* Closing Quote */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <p
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              color: "#0d47a1",
            }}
          >
            “Every donor is a hero, every recipient is a story of hope.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
