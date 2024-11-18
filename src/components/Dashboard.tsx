import React from 'react';
import { Compass, GraduationCap, Calculator, BookOpen, Users, LineChart } from 'lucide-react';
import UniversityFinder from './UniversityFinder';
import ProgressTracker from './ProgressTracker';

export default function Dashboard() {
  const features = [
    { icon: Compass, title: 'Program Finder', desc: 'AI-powered recommendations based on your profile' },
    { icon: GraduationCap, title: 'Scholarship Match', desc: 'Find and track scholarship opportunities tailored to you' },
    { icon: Calculator, title: 'Financial Aid', desc: 'Calculate your eligibility for availing assistance' },
    { icon: BookOpen, title: 'Exam Prep', desc: 'AI-assisted prep for IELTS, Goethe-Zertifikat, GRE, and more' },
    { icon: Users, title: 'Alumni Network', desc: 'Connect with successful NRBs studying abroad' },
    { icon: LineChart, title: 'Visa Tracker', desc: 'Real-time updates on your visa application status' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your complete study abroad compass</h1>
          <p className="mt-2 text-gray-600">Track your study abroad journey and explore opportunities</p>
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

        {/* New Sections */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <h2 className="text-xl font-semibold">Your Next Steps</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-3" />
                Upload academic documents for evaluation
                </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-3" />
                Book a FREE mentor consultation session 
              </li>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-3" />
                Complete registration for required language skills
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-3" />
                Track university deadlines and start applications
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-3" />
                Arrange financial proof for visa and study funding
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Deadlines</h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Summer 2025 Application Open</p>
                  <p className="text-sm text-gray-600">Germany</p>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                  45 days left
                </span>
                </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Erasmus Mundus Scholarships</p>
                  <p className="text-sm text-gray-600">Funding for EU universities</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                  80 days left
                </span>
              </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Ausbildung 2025 Applications</p>
                  <p className="text-sm text-gray-600">Vocational training in Germany</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                  100 days left
                </span>
              </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">MBBS Applications</p>
                  <p className="text-sm text-gray-600">Top universities in Russia</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                  120 days left
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
