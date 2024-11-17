import React from "react";

interface NotificationPanelProps {
  notifications: { title: string; description: string }[];
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  notifications,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "60px",
        right: "20px",
        width: "300px",
        background: "white",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "15px",
          backgroundColor: "#4F46E5", // Indigo header
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Notifications
      </div>
      <ul style={{ listStyleType: "none", margin: 0, padding: "10px" }}>
        {notifications.map((notification, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              borderBottom: index < notifications.length - 1 ? "1px solid #E5E7EB" : "none",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F3F4F6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <p style={{ fontWeight: "bold", color: "#111827", margin: "0 0 5px" }}>
              {notification.title}
            </p>
            <p style={{ color: "#6B7280", fontSize: "14px", margin: 0 }}>
              {notification.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
