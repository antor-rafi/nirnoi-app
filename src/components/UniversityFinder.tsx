import { useState, useEffect } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import axios from 'axios';

// Define the type for university data
type University = {
  id: number;
  name: string;
  country: string;
  match: number;
  scholarship: boolean;
  program: string;
  image: string;
};

export default function UniversityFinder() {
  // Define the filters state
  const [filters, setFilters] = useState<{
    location: string;
    budget: string;
    scholarships: boolean;
    fieldOfStudy: string;
  }>({
    location: '',
    budget: '',
    scholarships: false,
    fieldOfStudy: '',
  });

  // Define the state for results and loading
  const [results, setResults] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Backend base URL from environment variables
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nirnoi-backend.onrender.com';

  // Fetch universities from the backend
  const fetchUniversities = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<University[]>(`${API_BASE_URL}/api/universities`, {
        params: filters,
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching universities:', error);
      setError('Failed to fetch universities. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Update the filters whenever they change
  useEffect(() => {
    fetchUniversities();
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (field: keyof typeof filters, value: string | boolean) => {
    setFilters({ ...filters, [field]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recommended Universities</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Search input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search universities..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => handleFilterChange('location', e.target.value)}
        />
      </div>

      {/* Results */}
      <div className="space-y-4">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : results.length > 0 ? (
          results.map((uni) => (
            <div
              key={uni.id}
              className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:border-indigo-100 cursor-pointer"
            >
              <img
                src={uni.image}
                alt={uni.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{uni.name}</h3>
                <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {uni.country}
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium text-indigo-600">{uni.match}% match</div>
                  <div className="mt-1 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${uni.match}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
}
