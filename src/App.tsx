import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Dashboard />
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;
