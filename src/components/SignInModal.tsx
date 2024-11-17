import React, { useState } from "react";

interface SignInModalProps {
  onClose: () => void;
  onSignIn: (credentials: { emailOrPhone: string; password: string }) => void;
  onSignUp: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose, onSignIn, onSignUp }) => {
  const [usePhone, setUsePhone] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailOrPhone || !password) {
      setError("Both fields are required.");
      return;
    }

    // Call onSignIn with the captured credentials
    onSignIn({ emailOrPhone, password });
    setError(""); // Clear error after successful submission
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#4F46E5",
            cursor: "pointer",
          }}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              {usePhone ? "Phone Number" : "Email"}
            </label>
            <input
              type={usePhone ? "tel" : "email"}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder={usePhone ? "Enter your phone number" : "Enter your email"}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Display Error */}
          {error && (
            <p style={{ color: "red", marginBottom: "10px", fontSize: "12px" }}>{error}</p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              background: "#4F46E5",
              color: "white",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        <div style={{ marginTop: "15px", fontSize: "14px" }}>
          <span>Don't have an account?</span>{" "}
          <button
            onClick={onSignUp}
            style={{
              background: "none",
              border: "none",
              color: "#4F46E5",
              textDecoration: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </div>
        <div style={{ marginTop: "10px", fontSize: "14px", cursor: "pointer" }}>
          <span
            onClick={() => setUsePhone(!usePhone)}
            style={{
              color: "#4F46E5",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {usePhone ? "Sign in with Email instead" : "Sign in with Phone instead"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
