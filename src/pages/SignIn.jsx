function SignIn(props) {
  return (
    <section
      style={{
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(135deg, #e6f2ff, #d9ebff)",
        minHeight: "100vh",
        padding: "50px 20px",
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
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#003366",
            marginBottom: "20px",
            fontSize: "26px",
          }}
        >
          🔐 Sign In
        </h2>

        {/* Sign In Form */}
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#003366",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#002244")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#003366")}
          >
            ✅ Sign In
          </button>
        </form>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={() => props.setPage("signup")}
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #003366",
            background: "#fff",
            color: "#003366",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          ➕ Create Account
        </button>
      </div>
    </section>
  );
}

export default SignIn;
