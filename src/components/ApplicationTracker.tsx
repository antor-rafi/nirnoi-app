import { useState, useEffect } from 'react';
import axios from 'axios';

type Application = {
  id: number;
  university: string;
  status: string;
  dateApplied: string;
  lastUpdated: string;
};

export default function ApplicationTracker() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Backend API URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nirnoi-backend.onrender.com';

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/applications/1`); // Replace `1` with dynamic user ID
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setError('Failed to fetch applications. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Application Tracker</h2>
      
      {loading ? (
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-indigo-500"></div>
          <p>Loading applications...</p>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : applications.length > 0 ? (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li
              key={app.id}
              className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 hover:shadow"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{app.university}</h3>
                <p className="text-sm text-gray-600">Status: {app.status}</p>
                <p className="text-sm text-gray-600">Applied on: {new Date(app.dateApplied).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">Last updated: {new Date(app.lastUpdated).toLocaleDateString()}</p>
              </div>
              <div>
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    app.status === 'Accepted'
                      ? 'bg-green-100 text-green-800'
                      : app.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {app.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">
          <p>No applications found.</p>
          <p>Start by submitting applications to universities.</p>
        </div>
      )}
    </div>
  );
}
