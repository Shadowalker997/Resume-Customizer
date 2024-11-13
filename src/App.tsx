import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UploadSection from './components/UploadSection';
import JobAnalysis from './components/JobAnalysis';
import ResumeComparison from './components/ResumeComparison';
import AISuggestions from './components/AISuggestions';

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <div className="relative -mt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <UploadSection />
            {showAnalysis && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                <JobAnalysis />
                <ResumeComparison />
              </div>
            )}
            {showAnalysis && (
              <div className="p-6 border-t">
                <AISuggestions />
              </div>
            )}
            {!showAnalysis && (
              <div className="p-6 text-center">
                <button
                  onClick={() => setShowAnalysis(true)}
                  className="btn btn-primary"
                >
                  Start Analysis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
}

export default App;