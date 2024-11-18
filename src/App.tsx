import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import NotificationPanel from './components/NotificationPanel';
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary
import Spinner from './components/Spinner'; // Import Spinner

// Lazy-loaded components
const Dashboard = lazy(() => import('./components/Dashboard'));
const ChatBox = lazy(() => import('./components/ChatBox'));
const Resources = lazy(() => import('./components/Resources'));
const ApplicationTracker = lazy(() => import('./components/ApplicationTracker'));

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false); // Corrected the state updater name

  const handleProfileClick = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleNotificationPanel = () => setNotificationPanelOpen(!isNotificationPanelOpen); // Corrected here

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar onProfileClick={handleProfileClick} onBellClick={toggleNotificationPanel} />

        {/* Routes with ErrorBoundary and Suspense for lazy-loaded components */}
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center mt-10"><Spinner /></div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chat" element={<ChatBox />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/tracker" element={<ApplicationTracker />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>

        {/* Footer */}
        <Footer />

        {/* SignIn Modal */}
        {isModalOpen && (
          <SignInModal
            onClose={closeModal}
            onSignIn={(credentials) => {
              console.log('Sign-in attempted with:', credentials);
              closeModal();
            }}
            onSignUp={() => {
              console.log('Redirecting to sign-up...');
              closeModal();
            }}
          />
        )}

        {/* Notification Panel */}
        {isNotificationPanelOpen && <NotificationPanel onClose={toggleNotificationPanel} />}
      </div>
    </Router>
  );
}

export default App;
