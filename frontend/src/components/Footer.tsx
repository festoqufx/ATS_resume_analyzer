'use client';

import { FileText, Code2, Link2, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight font-display">
                ATS<span className="text-gray-400">Analyzer</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              Free AI-powered resume analyzer that helps job seekers understand
              how ATS systems read their resumes. Built with cutting-edge tech,
              with a privacy-first architecture.
            </p>
            <p className="text-gray-300 font-medium mb-4">
              Built for job seekers and hiring teams
            </p>
            {/* Privacy Notice */}
            <div className="bg-gray-800 rounded-lg p-3 mb-4 border border-gray-700">
              <p className="text-gray-300 text-sm font-medium mb-1">Zero Data Storage Policy</p>
              <p className="text-gray-400 text-xs">
                Resume data is processed transiently for analysis and is not retained after request completion.
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 3h10l5 5v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 14l2 2 5-6" stroke="#D1D5DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Local OCR fallback for scanned PDFs
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/itslovepatel/Resume-ATS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Code2 className="w-5 h-5" />
                <span>Open Source on GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/love-patel-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Link2 className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © <span suppressHydrationWarning>{currentYear}</span> ATS Resume Analyzer. Created by{' '}
            <a
              href="https://github.com/itslovepatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Love Patel
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:Lovepatelforwork@gmail.com"
              className="text-gray-300 hover:text-white transition-colors font-semibold"
              title="Email"
              aria-label="Email Love Patel"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/itslovepatel/Resume-ATS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              title="GitHub - Open Source"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/love-patel-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Link2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
