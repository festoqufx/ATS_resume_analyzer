export const DEFAULT_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const BACKEND_FALLBACK_URL =
  'https://resume-ats-backend-xlo8.onrender.com';

export const API_HEALTH_URLS = [DEFAULT_API_BASE_URL, BACKEND_FALLBACK_URL];

export function getHealthCheckUrls() {
  return Array.from(new Set(API_HEALTH_URLS.filter(Boolean)));
}

export function buildApiUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${DEFAULT_API_BASE_URL}${normalizedPath}`;
}
