import { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Loader } from 'lucide-react';
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

  // Define the state for results, loading, pagination, and error
  const [results, setResults] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Backend base URL from environment variables
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nirnoi-backend.onrender.com';

  // Fetch universities from the backend
  const fetchUniversities = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<University[]>(`${API_BASE_URL}/api/universities`, {
        params: { ...filters, page },
      });
      setResults(response.data);
    } catch (error: any) {
      console.error('Error fetching universities:', error);
      if (error.response?.status === 404) {
        setError('No universities found with the given criteria.');
      } else {
        setError('Failed to fetch universities. Please check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Update the filters or page whenever they change
  useEffect(() => {
    fetchUniversities();
  }, [filters, page]);

  // Handle filter changes
  const handleFilterChange = (field: keyof typeof filters, value: string | boolean) => {
    if (field === 'budget' && isNaN(Number(value))) {
      alert('Budget must be a number.');
      return;
    }
    setFilters({ ...filters, [field]: value });
    setPage(1); // Reset to the first page when filters change
  };

  // Save to favorites
  const saveToFavorites = async (universityId: number) => {
    try {
      await axios.post(`${API_BASE_URL}/api/favorites`, { userId: 1, universityId }); // Replace `userId` with dynamic value
      alert('Added to favorites!');
    } catch (error) {
      console.error('Error saving to favorites:', error);
      alert('Failed to save to favorites.');
    }
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({ location: '', budget: '', scholarships: false, fieldOfStudy: '' });
    setPage(1); // Reset to the first page when filters reset
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recommended Universities</h2>
        <button
          onClick={resetFilters}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg"
        >
          <Filter className="h-4 w-4" />
          Reset Filters
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
          <div className="flex justify-center items-center">
            <Loader className="animate-spin h-6 w-6 text-indigo-600" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
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
                <button
                  onClick={() => saveToFavorites(uni.id)}
                  className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >
                  Save to Favorites
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>No results found.</p>
            <p>Try adjusting the filters or search for something else.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
