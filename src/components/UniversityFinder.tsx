import { useState, useEffect } from 'react';
import React from 'react';
import { Search, Filter, MapPin, Star, Loader, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

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
  const [filters, setFilters] = useState({
    location: '',
    budget: '',
    scholarships: false,
    fieldOfStudy: '',
  });
  const [results, setResults] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nirnoi-backend.onrender.com';

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
      setError('Failed to fetch universities. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, [filters, page]);

  const handleFilterChange = (field: keyof typeof filters, value: string | boolean) => {
    if (field === 'budget' && isNaN(Number(value))) {
      alert('Budget must be a number.');
      return;
    }
    setFilters({ ...filters, [field]: value });
    setPage(1);
  };

  const saveToFavorites = async (universityId: number) => {
    try {
      await axios.post(`${API_BASE_URL}/api/favorites`, { userId: 1, universityId });
      alert('Added to favorites!');
    } catch (error) {
      console.error('Error saving to favorites:', error);
      alert('Failed to save to favorites.');
    }
  };

  const resetFilters = () => {
    setFilters({ location: '', budget: '', scholarships: false, fieldOfStudy: '' });
    setPage(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Explore Opportunities</h2>
        <button
          onClick={resetFilters}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg"
        >
          <Filter className="h-4 w-4" />
          Reset Filters
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Location"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          onChange={(e) => handleFilterChange('location', e.target.value)}
        />
        <input
          type="text"
          placeholder="Budget"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          onChange={(e) => handleFilterChange('budget', e.target.value)}
        />
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          onChange={(e) => handleFilterChange('fieldOfStudy', e.target.value)}
        >
          <option value="">Field of Study</option>
          <option value="engineering">Engineering</option>
          <option value="medicine">Medicine</option>
          <option value="business">Business</option>
        </select>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="form-checkbox"
            onChange={(e) => handleFilterChange('scholarships', e.target.checked)}
          />
          Scholarships Available
        </label>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader className="animate-spin h-8 w-8 text-indigo-600" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : results.length > 0 ? (
          results.map((uni) => (
            <div
              key={uni.id}
              className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={uni.image}
                alt={uni.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{uni.name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {uni.country}
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium text-indigo-600">{uni.match}% match</div>
                  <div className="mt-1 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600"
                      style={{ width: `${uni.match}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => saveToFavorites(uni.id)}
                className="text-yellow-500 hover:text-yellow-600"
              >
                <Star className="h-6 w-6" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No results found. Try adjusting the filters.</div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`p-2 rounded-full border ${
            page === 1 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-indigo-500 text-indigo-500 hover:bg-indigo-50'
          }`}
          disabled={page === 1}
          aria-label="Previous Page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-sm text-gray-600">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="p-2 rounded-full border border-indigo-500 text-indigo-500 hover:bg-indigo-50"
          aria-label="Next Page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
