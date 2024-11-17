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
              width: '300px',
              background: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              zIndex: 1000,
            }}
          >
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '0 0 10px', fontSize: '18px', borderBottom: '1px solid #ccc' }}>Notifications</h3>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="/article-1" style={{ textDecoration: 'none', color: '#4F46E5', fontWeight: 'bold' }}>
                    New University Program Announced
                  </a>
                  <p style={{ margin: '5px 0', fontSize: '12px', color: '#555' }}>Learn about our latest offerings.</p>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="/article-2" style={{ textDecoration: 'none', color: '#4F46E5', fontWeight: 'bold' }}>
                    DAAD Scholarships 2024 are Open
                  </a>
                  <p style={{ margin: '5px 0', fontSize: '12px', color: '#555' }}>Apply now for financial aid opportunities.</p>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="/article-3" style={{ textDecoration: 'none', color: '#4F46E5', fontWeight: 'bold' }}>
                    How to Write a Stellar Application
                  </a>
                  <p style={{ margin: '5px 0', fontSize: '12px', color: '#555' }}>Improve your application with our guide.</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
