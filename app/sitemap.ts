import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ridechecks.us'
  const now = new Date()

  return [
    { url: base,                         lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/vin-check`,          lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/pricing`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/how-it-works`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/about`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/refund`,             lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/privacy`,            lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/terms`,              lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
  ]
}
