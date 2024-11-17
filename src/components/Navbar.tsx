import { BookOpen, Bell, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onProfileClick: () => void; // Handler for profile click
  onBellClick: () => void; // Handler for bell icon click
}

export default function Navbar({ onProfileClick, onBellClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Nirnoi Logo and Name */}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Nirnoi</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Notifications */}
            <button
              className="p-2 text-gray-500 hover:text-indigo-600 relative"
              onClick={onBellClick} // Handle bell icon click
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Chat */}
            <Link
              to="/chat"
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg transition-all"
            >
              <MessageSquare className="h-5 w-5" />
            </Link>

            {/* Profile */}
            <button
              onClick={onProfileClick} // Attach the profile click handler
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <User className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
