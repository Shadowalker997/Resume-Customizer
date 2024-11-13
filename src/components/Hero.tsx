import React from 'react';
import { FileText, Briefcase, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white pb-32 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Optimize Your Resume with AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Get personalized suggestions to match your resume perfectly with job requirements using advanced AI analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition flex items-center justify-center">
              Upload Resume
              <FileText className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-400 transition flex items-center justify-center">
              Analyze Job Description
              <Briefcase className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}