import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'; // Import the Footer component
import SignInModal from './components/SignInModal'; // Import the SignInModal component
import ChatBox from './components/chatbox'; // Import the ChatBox component

function App() {
  // State to manage the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle opening the modal
  const handleProfileClick = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Pass the handleProfileClick function to the Navbar */}
        <Navbar onProfileClick={handleProfileClick} />

        {/* Routes to navigate between pages */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Render the SignInModal */}
        {isModalOpen && <SignInModal onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
