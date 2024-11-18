import React, { StrictMode } from 'react';
import './index.css'; // Ensure this import exists
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Import Tailwind CSS

// Validate the presence of the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Ensure there is a <div id="root"></div> in index.html.');
}

// Error Boundary for runtime error handling
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {children}
    </React.Suspense>
  );
}

// Render the application
createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
