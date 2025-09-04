function Matching() {
  return (
    <section
      style={{
        background: "#e8f0f2", // light bluish parchment
        color: "#1c313a", // deep bluish-brown text
        padding: "30px",
        "max-width": "600px",
        margin: "40px auto",
        "border-radius": "12px",
        "box-shadow": "0 4px 12px rgba(0,0,0,0.2)",
        "font-family": "'Georgia', serif",
        "text-align": "center",
        border: "2px solid #90a4ae",
      }}
    >
      <h2
        style={{
          "font-size": "28px",
          "margin-bottom": "15px",
          "font-weight": "bold",
          "letter-spacing": "1px",
          color: "#0d47a1", // vintage navy
        }}
      >
        🕰️ Organ Matching Dashboard
      </h2>

      <p
        style={{
          "font-size": "16px",
          "margin-bottom": "25px",
          "line-height": "1.6",
          color: "#37474f", // muted blue-gray
        }}
      >
        Here you will see matched patients and donors once backend integration
        is complete.
      </p>

      <ul
        style={{
          "list-style": "none",
          padding: "0",
          margin: "0",
        }}
      >
        <li
          style={{
            background: "#cfd8dc", // dusty blue-gray
            margin: "10px 0",
            padding: "12px",
            "border-radius": "8px",
            border: "1px solid #90a4ae",
            "font-size": "18px",
            "box-shadow": "inset 0 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          Patient A 🫁 matched with Donor X
        </li>
        <li
          style={{
            background: "#cfd8dc",
            margin: "10px 0",
            padding: "12px",
            "border-radius": "8px",
            border: "1px solid #90a4ae",
            "font-size": "18px",
            "box-shadow": "inset 0 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          Patient B ❤️ matched with Donor Y
        </li>
      </ul>
    </section>
  );
}

export default Matching;
