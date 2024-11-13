import React from 'react';
import { FileText, Briefcase, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8" />
            <span className="text-2xl font-bold">ResumeAI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/90 hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-white/90 hover:text-white transition">How it Works</a>
            <a href="#pricing" className="text-white/90 hover:text-white transition">Pricing</a>
          </nav>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}