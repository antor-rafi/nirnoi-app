import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'; // Import the Footer component
import SignInModal from './components/SignInModal'; // Import the SignInModal component

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
    <div className="min-h-screen bg-gray-50">
      {/* Pass the handleProfileClick function to the Navbar */}
      <Navbar onProfileClick={handleProfileClick} />

      {/* Main Dashboard Content */}
      <Dashboard />

      {/* Footer */}
      <Footer />

      {/* Render the SignInModal */}
      {isModalOpen && <SignInModal onClose={closeModal} />}
    </div>
  );
}

export default App;
