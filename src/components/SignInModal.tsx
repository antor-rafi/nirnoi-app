import React, { useState } from "react";

interface SignInModalProps {
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const [usePhone, setUsePhone] = useState(false); // State to toggle between Email and Phone options

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
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#4F46E5" }}>
          Sign In
        </h2>
        <form>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              {usePhone ? "Phone Number" : "Email"}
            </label>
            <input
              type={usePhone ? "tel" : "email"}
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
            Sign In
          </button>
        </form>
        <div style={{ marginTop: "15px", fontSize: "14px" }}>
          <span>Don't have an account?</span>{" "}
          <a
            href="#"
            style={{
              color: "#4F46E5",
              textDecoration: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </a>
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
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            background: "#ccc",
            color: "#333",
            border: "none",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
