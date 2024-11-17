import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NotificationPanel({ onClose }: { onClose: () => void }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://nirnoi-backend.onrender.com/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="absolute top-16 right-4 w-80 bg-white border rounded-lg shadow-lg z-50">
      <div className="p-4 border-b">
        <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
        <button className="text-sm text-gray-500 hover:text-gray-800" onClick={onClose}>
          Close
        </button>
      </div>
      {loading ? (
        <div className="p-4 text-center">Loading...</div>
      ) : notifications.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {notifications.map((notif: any) => (
            <li key={notif.id} className="p-4 hover:bg-gray-50">
              <h4 className="text-sm font-bold">{notif.title}</h4>
              <p className="text-xs text-gray-500">{notif.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-center text-gray-500">No new notifications</div>
      )}
    </div>
  );
}
