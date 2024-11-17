import { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import NotificationPanel from './components/NotificationPanel';
import { lazy } from 'react';

// Lazy-loaded components
const Dashboard = lazy(() => import('./components/Dashboard'));
const ChatBox = lazy(() => import('./components/ChatBox'));
const Resources = lazy(() => import('./components/Resources'));
const ApplicationTracker = lazy(() => import('./components/ApplicationTracker'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);

  const handleProfileClick = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleNotificationPanel = () => setNotificationPanelOpen(!isNotificationPanelOpen);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar onProfileClick={handleProfileClick} onBellClick={toggleNotificationPanel} />

        {/* Routes with Suspense for lazy-loaded components */}
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<ChatBox />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tracker" element={<ApplicationTracker />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

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
