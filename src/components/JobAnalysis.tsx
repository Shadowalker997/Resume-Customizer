import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';

export default function JobAnalysis() {
  const [jobDescription, setJobDescription] = useState('');

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Job Description Analysis</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="job-description" className="block text-sm font-medium text-gray-700 mb-2">
            Paste Job Description
          </label>
          <textarea
            id="job-description"
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        {jobDescription && (
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-900 mb-2">Key Requirements</h3>
            <div className="space-y-2">
              <RequirementItem label="Required Skills" items={['React', 'TypeScript', 'Node.js']} />
              <RequirementItem label="Experience Level" items={['5+ years experience']} />
              <RequirementItem label="Education" items={["Bachelor's degree"]} />
            </div>
          </div>
        )}
        <button className="btn btn-primary w-full">
          <Search className="w-5 h-5 mr-2" />
          Analyze Requirements
        </button>
      </div>
    </div>
  );
}

function RequirementItem({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-indigo-800">{label}</h4>
      <div className="flex flex-wrap gap-2 mt-1">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}