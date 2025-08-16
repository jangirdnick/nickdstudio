import { MetadataRoute } from 'next'

// This is just an example — replace it with your real DB/CMS fetch
async function getProjects() {
  // Example project slugs
  return [
    { slug: 'decorewala', updatedAt: '2025-07-01' },
    { slug: 'misan', updatedAt: '2025-07-04' },
    { slug: 'vinayakartplace', updatedAt: '2025-07-05' },
    { slug: 'rodiwal', updatedAt: '2025-07-03' },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nickdstudio.online'
  const currentDate = new Date().toISOString()

  // Fetch dynamic projects
  const projects = await getProjects()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2025-01-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: '2025-01-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Dynamic project pages
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updatedAt).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
