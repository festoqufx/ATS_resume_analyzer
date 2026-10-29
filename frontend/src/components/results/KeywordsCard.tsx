'use client';

import { KeywordsAnalysis } from '@/types';
import { Search, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

interface KeywordsCardProps {
  keywords: KeywordsAnalysis;
}

export default function KeywordsCard({ keywords }: KeywordsCardProps) {
  return (
    <div className="card p-6 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
          <Search className="w-5 h-5 text-gray-800" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Keywords Analysis</h2>
          <p className="text-sm text-gray-500">Important keywords for ATS</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Found Keywords */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-gray-700" />
            <h3 className="text-sm font-semibold text-gray-700">
              Found Keywords ({keywords.found.length})
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {keywords.found.length > 0 ? (
              keywords.found.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium"
                >
                  {kw}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-500">No matching keywords found</span>
            )}
          </div>
        </div>

        {/* Missing Keywords */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-gray-700" />
            <h3 className="text-sm font-semibold text-gray-700">
              Missing Keywords ({keywords.missing.length})
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {keywords.missing.length > 0 ? (
              keywords.missing.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1.5 bg-gray-300 text-gray-800 rounded-lg text-sm font-medium"
                >
                  {kw}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-500">All important keywords present!</span>
            )}
          </div>
        </div>

        {/* Recommended Keywords */}
        {keywords.recommended.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gray-800" />
              <h3 className="text-sm font-semibold text-gray-700">
                Recommended to Add
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.recommended.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium border border-gray-300 border-dashed"
                >
                  + {kw}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
