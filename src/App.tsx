import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import ChatBox from './components/chatbox';
import Resources from './components/Resources';

function App() {
  // State to manage the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // State to manage the notification panel visibility
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);

  // Function to handle opening the modal
  const handleProfileClick = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to toggle the notification panel
  const toggleNotificationPanel = () => {
    setNotificationPanelOpen(!isNotificationPanelOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Pass both handlers to the Navbar */}
        <Navbar onProfileClick={handleProfileClick} onBellClick={toggleNotificationPanel} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Render the SignInModal */}
        {isModalOpen && (
          <SignInModal
            onClose={closeModal}
            onSignIn={(credentials) => {
              console.log('Sign-in attempted with:', credentials);
              closeModal(); // Close modal after sign-in
            }}
            onSignUp={() => {
              console.log('Redirecting to sign-up...');
              closeModal(); // Optional: Close modal when redirecting
            }}
          />
        )}

        {/* Notification Panel */}
        {isNotificationPanelOpen && (
          <div
            style={{
              position: 'absolute',
              top: '60px',
              right: '20px',
              width: '350px',
              background: 'white',
              border: '1px solid #E5E7EB', // Frame-like border
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              zIndex: 1000,
              animation: 'fadeIn 0.3s ease-in-out',
            }}
          >
            <div style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
              <h3 style={{ fontSize: '18px', margin: 0, color: '#333', fontWeight: 'bold' }}>
                Your Notifications
              </h3>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { id: 1, title: 'New University Program Announced', desc: 'Learn about our latest offerings.' },
                { id: 2, title: 'DAAD Scholarships 2024 are Open', desc: 'Apply now for financial aid opportunities.' },
                { id: 3, title: 'How to Write a Stellar Application', desc: 'Improve your application with our guide.' },
              ].map((notification) => (
                <li
                  key={notification.id}
                  style={{
                    padding: '15px 20px',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f9f9f9')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
                >
                  <div style={{ background: '#4F46E5', color: 'white', borderRadius: '50%', padding: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>🔔</span>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                      {notification.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{notification.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
