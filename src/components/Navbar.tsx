import { BookOpen, Bell, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Define props interface for Navbar
interface NavbarProps {
  onProfileClick: () => void; // Add the onProfileClick prop
}

export default function Navbar({ onProfileClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Nirnoi</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Notifications */}
            <button className="p-2 text-gray-500 hover:text-indigo-600 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Chat Link */}
            <Link
              to="/chat" // Navigate to the chat route
              className="p-2 text-gray-500 hover:text-indigo-600 flex items-center"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="ml-2 text-sm font-medium">Chat</span>
            </Link>

            {/* Profile */}
            <button
              onClick={onProfileClick} // Attach the onProfileClick handler
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
