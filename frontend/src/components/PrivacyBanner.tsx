'use client';

import { motion } from 'framer-motion';
import { Shield, Database, Lock, Trash2, Code, Code2 } from 'lucide-react';

export default function PrivacyBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-100 border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full border border-gray-300 mb-4">
            <Shield className="w-5 h-5 text-gray-800" />
            <span className="text-sm font-semibold text-gray-800">
              Privacy-First Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
            Privacy by Design
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Resume files are processed in-memory for analysis and are not stored after processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <Database className="w-8 h-8 text-gray-800 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">No Persistent Resume Storage</h3>
            <p className="text-sm text-gray-600">
              Resume content is not written to a long-term data store.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <Lock className="w-8 h-8 text-gray-800 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Stateless API</h3>
            <p className="text-sm text-gray-600">
              Each request is handled independently with no persistent session data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <Trash2 className="w-8 h-8 text-gray-800 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Automatic Cleanup</h3>
            <p className="text-sm text-gray-600">
              Temporary processing artifacts are removed immediately after analysis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <Code className="w-8 h-8 text-gray-800 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Open Source</h3>
            <p className="text-sm text-gray-600">
              Review the implementation publicly to verify data handling behavior.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/itslovepatel/Resume-ATS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            <Code2 className="w-5 h-5" />
            <span>Audit our code on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
