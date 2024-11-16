const Resources = () => {
    return (
      <div
        style={{
          backgroundColor: "#F9FAFB",
          minHeight: "100vh",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#4F46E5",
            marginBottom: "20px",
          }}
        >
          Explore Our Resources
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#6B7280",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Discover tools, articles, and guides to empower your journey.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#4F46E5" }}>
              Guides & Tutorials
            </h2>
            <p style={{ color: "#6B7280" }}>
              Step-by-step instructions to achieve your goals.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#4F46E5" }}>
              Tools & Calculators
            </h2>
            <p style={{ color: "#6B7280" }}>
              Handy tools to simplify your processes.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#4F46E5" }}>
              Articles & Insights
            </h2>
            <p style={{ color: "#6B7280" }}>
              In-depth articles to keep you informed.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resources;
  