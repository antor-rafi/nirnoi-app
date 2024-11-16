import { useState } from "react";
import { Send, Smile } from "lucide-react";

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input.trim()]);
      setInput("");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F3F4F6", // Light gray background
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          backgroundColor: "#4F46E5", // Indigo
          padding: "20px",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Chat with Us
      </div>

      {/* Chat Messages Section */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.length === 0 && (
          <p
            style={{
              color: "#6B7280", // Neutral gray
              textAlign: "center",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            No messages yet. Start the conversation!
          </p>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#4F46E5",
              color: "white",
              padding: "10px",
              borderRadius: "15px",
              maxWidth: "60%",
              wordWrap: "break-word",
              fontSize: "14px",
            }}
          >
            {message}
          </div>
        ))}
      </div>

      {/* Chat Input Section */}
      <div
        style={{
          padding: "10px 20px",
          borderTop: "1px solid #E5E7EB", // Light gray border
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Smile style={{ color: "#6B7280", cursor: "pointer" }} size={24} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #D1D5DB", // Gray border
            borderRadius: "10px",
            fontSize: "14px",
            outline: "none",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: "#4F46E5",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
