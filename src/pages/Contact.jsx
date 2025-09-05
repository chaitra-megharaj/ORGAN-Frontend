function Contact() {
  return (
    <section
      style={{
        background: "#f0f7fa",
        padding: "50px 30px",
        fontFamily: "'Georgia', serif",
        color: "#1c313a",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Title */}
        <h2
          style={{
            fontSize: "32px",
            color: "#0d47a1",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact Us
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", marginBottom: "30px", textAlign: "center" }}>
          Have questions, feedback, or want to partner with us? We’d love to hear
          from you. Use the form below or reach us directly through our contact
          details.
        </p>

        {/* Contact Form */}
        <form
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <label style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}>
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #90a4ae",
            }}
          />

          <label style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #90a4ae",
            }}
          />

          <label style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}>
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #90a4ae",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              background: "linear-gradient(90deg, #0073e6, #0059b3)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #0059b3, #003d80)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #0073e6, #0059b3)")
            }
          >
            📩 Send Message
          </button>
        </form>

        {/* Direct Contact Info */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "18px" }}>
            📍 Location: Bengaluru, India
          </p>
          <p style={{ fontSize: "18px" }}>
            📞 Phone: +91-9876543210
          </p>
          <p style={{ fontSize: "18px" }}>
            📧 Email: support@giftoflifehub.org
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
