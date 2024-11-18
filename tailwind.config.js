import React from 'react';
import { BookOpen, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

interface NavbarProps {
  onProfileClick: () => void;
  onBellClick: () => void;
}

export default function Navbar({ onProfileClick, onBellClick }: NavbarProps) {
  const notificationCount = 3; // Example notification count

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Nirnoi Logo */}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Nirnoi</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Notifications */}
            <button
              className="relative p-2 text-gray-500 hover:text-indigo-600"
              onClick={onBellClick}
              aria-label="Notifications"
            >
              <FaBell size={24} />
              {notificationCount > 0 && (
                <span
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1"
                  aria-label={`${notificationCount} notifications`}
                >
                  {notificationCount}
                </span>
              )}
            </button>

            {/* Chat */}
            <Link
              to="/chat"
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
              aria-label="Chat"
            >
              <MessageSquare className="h-5 w-5" />
            </Link>

            {/* Profile */}
            <button
              onClick={onProfileClick}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Profile"
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
