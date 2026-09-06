export default function OrderForm() {
  return (
    <section style={{ padding: "40px", minHeight: "100vh", background: "#0f172a" }}>
      
      <div style={{ maxWidth: "900px", margin: "0 auto", color: "#fff" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          Website Requirement Form
        </h2>
        <p style={{ opacity: 0.7, marginBottom: "20px" }}>
          Fill the details below so I can understand your project properly.
        </p>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfFOvPL0xW4CfBv6km78Mt3C1hYCJbrjmyKBaSS4fQS56T3fQ/viewform?embedded=true"
          width="100%"
          height="900"
          style={{
            border: "none",
            borderRadius: "12px",
            background: "#fff"
          }}
        >
          Loading…
        </iframe>
      </div>

    </section>
  );
}