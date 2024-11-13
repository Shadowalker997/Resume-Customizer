import React from 'react';
import { FileText, Briefcase, Sparkles, Eye, Download, Shield } from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Multiple Format Support',
    description: 'Upload your resume in PDF, DOCX, or paste text directly.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze and match your skills with job requirements.',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Real-time Preview',
    description: 'See suggested changes instantly with side-by-side comparison.',
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: 'Export Options',
    description: 'Download your optimized resume in multiple formats.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Privacy First',
    description: 'Your data is encrypted and never shared with third parties.',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Job Match Score',
    description: 'Get instant feedback on how well your resume matches the job.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered tools help you create the perfect resume for every job application.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}