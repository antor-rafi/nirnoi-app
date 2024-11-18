import { CheckCircle2, Circle } from 'lucide-react';
import React from 'react';

export default function ProgressTracker() {
  const tasks = [
    { title: 'Set up your profile', completed: true },
    { title: 'Verify your email', completed: true },
    { title: 'Upload necessary documents', completed: false },
    { title: 'Take your skill assessment', completed: false }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Readiness Checklist</h2>
      
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
            ) : (
              <Circle className="h-5 w-5 text-gray-200 flex-shrink-0" />
            )}
            <span className={task.completed ? 'text-gray-200' : 'text-white'}>
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
