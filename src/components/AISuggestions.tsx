import React from 'react';
import { Sparkles, ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Suggestion {
  type: 'improvement' | 'addition' | 'removal';
  original?: string;
  suggested: string;
  reason: string;
}

const mockSuggestions: Suggestion[] = [
  {
    type: 'improvement',
    original: 'Developed React applications',
    suggested: 'Architected and developed scalable React applications, improving performance by 40%',
    reason: 'Add specific metrics and scope to demonstrate impact',
  },
  {
    type: 'addition',
    suggested: 'Led a team of 5 developers in implementing microservices architecture',
    reason: 'Highlight leadership experience mentioned in job requirements',
  },
];

export default function AISuggestions() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-semibold">AI Suggestions</h2>
      </div>

      <div className="space-y-6">
        {mockSuggestions.map((suggestion, index) => (
          <div key={index} className="border rounded-lg p-4 hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {suggestion.type.charAt(0).toUpperCase() + suggestion.type.slice(1)}
              </span>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-green-500 transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <ThumbsDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {suggestion.original && (
              <div className="flex items-center space-x-3 mb-2 text-gray-500 line-through">
                <p>{suggestion.original}</p>
              </div>
            )}

            <div className="flex items-center space-x-3 mb-3 text-indigo-600 font-medium">
              {suggestion.original && <ArrowRight className="w-4 h-4" />}
              <p>{suggestion.suggested}</p>
            </div>

            <p className="text-sm text-gray-600">
              <span className="font-medium">Why: </span>
              {suggestion.reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}