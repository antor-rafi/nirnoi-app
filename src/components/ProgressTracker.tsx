import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export default function ProgressTracker() {
  const tasks = [
    { title: 'Complete profile', completed: true },
    { title: 'Take IELTS diagnostic test', completed: true },
    { title: 'Submit documents', completed: false },
    { title: 'Book counseling session', completed: false }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Progress</h2>
      
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
            ) : (
              <Circle className="h-5 w-5 text-gray-300 flex-shrink-0" />
            )}
            <span className={task.completed ? 'text-gray-600' : 'text-gray-900'}>
              {task.title}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="text-sm font-medium text-gray-900 mb-2">Overall Progress</div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600 rounded-full" style={{ width: '50%' }}></div>
        </div>
        <div className="mt-2 text-sm text-gray-600">50% completed</div>
      </div>
    </div>
  );
}