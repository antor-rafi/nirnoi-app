import React from 'react';
import { Compass, GraduationCap, Calculator, BookOpen, Users, LineChart } from 'lucide-react';
import UniversityFinder from './UniversityFinder';
import ProgressTracker from './ProgressTracker';

export default function Dashboard() {
  const features = [
    { icon: Compass, title: 'Program Finder', desc: 'Find your perfect university match' },
    { icon: GraduationCap, title: 'Scholarships', desc: 'Discover funding opportunities' },
    { icon: Calculator, title: 'Financial Aid', desc: 'Calculate your eligibility' },
    { icon: BookOpen, title: 'Exam Prep', desc: 'AI-powered study plans' },
    { icon: Users, title: 'Alumni Network', desc: 'Connect with mentors' },
    { icon: LineChart, title: 'Application Tracker', desc: 'Track your progress' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Make it Happen!</h1>
          <p className="mt-2 text-gray-600">Let's continue your journey to study abroad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <button key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <UniversityFinder />
          </div>
          <div className="lg:col-span-1">
            <ProgressTracker />
          </div>
        </div>
      </main>
    </div>
  );
}