import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/blog';
import { getAllProjectSlugs } from '@/lib/project';
import { getAllAppSlugs } from '@/lib/apps';
import { baseInfo } from '@/content/informations/info';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = baseInfo.portfolioURL;
  const now = new Date();

  const blogSlugsEn = getAllBlogSlugs('en');
  const blogSlugsVi = getAllBlogSlugs('vi');
  const projectSlugsEn = await getAllProjectSlugs('en');
  const projectSlugsVi = await getAllProjectSlugs('vi');
  const appSlugs = getAllAppSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vi/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/apps/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vi/apps/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const blogRoutesEn: MetadataRoute.Sitemap = blogSlugsEn.map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutesVi: MetadataRoute.Sitemap = blogSlugsVi.map((slug) => ({
    url: `${baseUrl}/vi/blog/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectRoutesEn: MetadataRoute.Sitemap = projectSlugsEn.map((slug) => ({
    url: `${baseUrl}/project/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectRoutesVi: MetadataRoute.Sitemap = projectSlugsVi.map((slug) => ({
    url: `${baseUrl}/vi/project/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const appRoutesEn: MetadataRoute.Sitemap = appSlugs.map((slug) => ({
    url: `${baseUrl}/app/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const appRoutesVi: MetadataRoute.Sitemap = appSlugs.map((slug) => ({
    url: `${baseUrl}/vi/app/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...blogRoutesEn,
    ...blogRoutesVi,
    ...projectRoutesEn,
    ...projectRoutesVi,
    ...appRoutesEn,
    ...appRoutesVi,
  ];
}
