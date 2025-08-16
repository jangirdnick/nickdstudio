import { MetadataRoute } from 'next'

// This is just an example — replace it with your real DB/CMS fetch
async function getProjects() {
  // Example project slugs
  return [
    { slug: 'decorewala', updatedAt: '2025-07-01' },
    { slug: 'misan', updatedAt: '2025-07-4' },
    { slug: 'vinayakartplace', updatedAt: '2025-07-05' },
    { slug: 'rodiwal', updatedAt: '2025-07-03' },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nickdstudio.online'

  // Fetch dynamic projects
  const projects = await getProjects()

  return [
    {
      url: `${baseUrl}/`,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
    },
    {
      url: `${baseUrl}/contact`,
    },
    {
      url: `${baseUrl}/privacy-policy`,
    },
    {
      url: `${baseUrl}/projects`,
    },
    {
      url: `${baseUrl}/terms-conditions`,
    },
   ...projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
  })),
]
}