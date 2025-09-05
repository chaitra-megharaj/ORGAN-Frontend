import { createSignal } from "solid-js";

function SignUp(props) {
  const [hover, setHover] = createSignal(false);

  return (
    <section
      style={{
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(135deg, #e6f2ff, #d9ebff)",
        minHeight: "100vh",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#003366", marginBottom: "20px" }}>
          Create Account
        </h2>

        <form>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#003366",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>

        {/* ✅ Sign In link with hover effect */}
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
          Already have an account?{" "}
          <span
            style={{
              color: hover() ? "#0059b3" : "#003366",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: hover() ? "underline" : "none",
              transition: "0.3s",
            }}
            onClick={() => props.setPage("signin")}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            Sign In
          </span>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
