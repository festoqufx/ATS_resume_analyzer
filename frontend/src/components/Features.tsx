'use client';

import { motion } from 'framer-motion';
import {
  Target,
  User,
  Compass,
  Code2,
  FolderKanban,
  Briefcase,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'ATS Score',
    description: 'Get a comprehensive score out of 100 showing how well your resume will perform in ATS systems.',
    color: 'text-gray-900',
    bgColor: 'bg-gray-100',
  },
  {
    icon: User,
    title: 'Candidate Profile',
    description: 'Automatically extract and verify your contact information, name, email, and phone.',
    color: 'text-gray-800',
    bgColor: 'bg-gray-100',
  },
  {
    icon: Compass,
    title: 'Domain Detection',
    description: 'AI detects your primary job domain - IT, Data, Marketing, Finance, and more.',
    color: 'text-gray-700',
    bgColor: 'bg-gray-100',
  },
  {
    icon: Code2,
    title: 'Skills Analysis',
    description: 'Comprehensive breakdown of technical skills, frameworks, tools, and soft skills.',
    color: 'text-gray-900',
    bgColor: 'bg-gray-100',
  },
  {
    icon: FolderKanban,
    title: 'Projects Review',
    description: 'Analyze project descriptions, technologies used, and impact statements.',
    color: 'text-gray-800',
    bgColor: 'bg-gray-100',
  },
  {
    icon: Briefcase,
    title: 'Experience Analysis',
    description: 'Evaluate work experience quality, action verbs usage, and quantifiable achievements.',
    color: 'text-gray-700',
    bgColor: 'bg-gray-100',
  },
  {
    icon: AlertTriangle,
    title: 'Issue Detection',
    description: 'Identify formatting issues, missing sections, and ATS compatibility problems.',
    color: 'text-gray-900',
    bgColor: 'bg-gray-100',
  },
  {
    icon: Lightbulb,
    title: 'Smart Suggestions',
    description: 'Get actionable recommendations to improve your resume and boost your ATS score.',
    color: 'text-gray-700',
    bgColor: 'bg-gray-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-kicker mb-4">Capabilities</div>
          <h2 className="section-title text-3xl sm:text-4xl">
            Comprehensive Resume Analysis
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Our AI-powered analyzer examines every aspect of your resume to
            provide recruiter-level insights with consistent, reliable scoring.
          </p>
          {/* Tech Stack Badge */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">Next.js 14</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">FastAPI</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">AI/ML Powered</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">TypeScript</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">Tailwind CSS</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-hover p-6 bg-white/90"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
