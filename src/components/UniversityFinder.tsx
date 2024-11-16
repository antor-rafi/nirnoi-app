import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

export default function UniversityFinder() {
  const universities = [
    {
      name: 'Technical University of Munich',
      country: 'Germnay',
      match: 95,
      image: 'https://tum-asia.edu.sg/wp-content/uploads/2023/09/Technical-University-of-Munich-Asia-80.jpg'
    },
    {
      name: 'University of Melbourne',
      country: 'Australia',
      match: 92,
      image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=400&h=200'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recommended Universities</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search universities..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-4">
        {universities.map((uni, index) => (
          <div key={index} className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:border-indigo-100 cursor-pointer">
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
        ))}
      </div>
    </div>
  );
}