const apiBaseUrl = (import.meta.env.VITE_NEWS_API_URL || 'https://backend-v1-c5vq.vercel.app').replace(/\/$/, '')

/** Hindari cache browser; hanya development yang meminta refresh backend secara paksa. */
export async function fetchLatestNews(signal) {
  const response = await fetch(`${apiBaseUrl}/api/news?limit=6`, {
    signal,
    cache: 'no-store',
    headers: import.meta.env.DEV ? { 'Cache-Control': 'no-cache' } : {},
  })

  if (!response.ok) {
    throw new Error('Berita belum dapat dimuat. Coba lagi sebentar.')
  }

  return response.json()
}
