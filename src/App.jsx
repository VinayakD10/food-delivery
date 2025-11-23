import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-display font-bold text-Swiggy-orange">
            FOODxPREE
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-display font-bold text-charcoal mb-4">
            Welcome to FOODxPREE
          </h2>
          <p className="text-lg text-gray-600">
            Your modern food delivery experience
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
