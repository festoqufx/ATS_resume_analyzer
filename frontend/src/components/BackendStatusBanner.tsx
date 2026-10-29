'use client';

import { useState, useEffect, useCallback } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { getHealthCheckUrls } from '@/utils/api';

const POLL_INTERVAL = 30000; // check every 30s

export default function BackendStatusBanner() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null); // null = checking

  const checkHealth = useCallback(async () => {
    const healthUrls = getHealthCheckUrls();

    for (const baseUrl of healthUrls) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(`${baseUrl}/health`, { signal: controller.signal });
        clearTimeout(timeout);

        if (res.ok) {
          setIsOnline(true);
          return;
        }
      } catch {
        // Try the next configured backend URL.
      }
    }

    setIsOnline(false);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      void checkHealth();
    });
    const interval = setInterval(checkHealth, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [checkHealth]);

  return (
    <div className="fixed top-[68px] left-1/2 -translate-x-1/2 z-40 transition-all duration-500">
      <div
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-md border transition-all duration-500 ${
          isOnline === null
            ? 'bg-gray-800/80 border-gray-600/50 text-gray-300'
            : isOnline
            ? 'bg-gray-700/85 border-gray-500/40 text-gray-100'
            : 'bg-gray-900/85 border-gray-600/40 text-gray-300'
        }`}
      >
        {isOnline === null ? (
          <>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
            <span>Checking server...</span>
          </>
        ) : isOnline ? (
          <>
            <Wifi className="w-3.5 h-3.5" />
            <span>Server Online</span>
            <div className="w-2 h-2 rounded-full bg-gray-200 animate-pulse" />
          </>
        ) : (
          <>
            <WifiOff className="w-3.5 h-3.5" />
            <span>Server Offline</span>
            <div className="w-2 h-2 rounded-full bg-gray-500" />
          </>
        )}
      </div>
    </div>
  );
}
