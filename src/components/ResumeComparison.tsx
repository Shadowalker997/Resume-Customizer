import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface MatchScore {
  category: string;
  score: number;
  matches: string[];
  missing: string[];
}

const mockScores: MatchScore[] = [
  {
    category: 'Technical Skills',
    score: 75,
    matches: ['React', 'TypeScript', 'Git'],
    missing: ['Node.js', 'AWS'],
  },
  {
    category: 'Experience',
    score: 90,
    matches: ['5+ years', 'Team leadership'],
    missing: ['Enterprise scale'],
  },
];

export default function ResumeComparison() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Resume Analysis</h2>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">82%</div>
            <div className="text-sm opacity-90">Overall Match Score</div>
          </div>
        </div>

        <div className="space-y-4">
          {mockScores.map((score, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">{score.category}</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full border-4 border-indigo-500 flex items-center justify-center font-bold">
                    {score.score}%
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <MatchList
                  title="Matching Skills"
                  items={score.matches}
                  icon={<CheckCircle className="w-4 h-4 text-green-500" />}
                />
                <MatchList
                  title="Missing Skills"
                  items={score.missing}
                  icon={<XCircle className="w-4 h-4 text-red-500" />}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MatchList({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-500 mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-sm">
            {icon}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}