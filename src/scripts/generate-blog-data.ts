import fs from 'fs';
import path from 'path';
import { getPosts } from '@/app/utils/utils';

export interface SearchablePost {
  id: string;
  title: string;
  summary: string;
  content: string;
  slug: string;
  type: 'blog' | 'work';
  publishedAt: string;
  tag?: string;
  image?: string;
  images?: string[];
}

export function generateSearchData() {
  try {
    // Get blog posts
    const blogPosts = getPosts(['src', 'app', 'blog', 'posts']);
    const workProjects = getPosts(['src', 'app', 'work', 'projects']);

    const searchableData: SearchablePost[] = [];

    // Process blog posts
    blogPosts.forEach((post) => {
      searchableData.push({
        id: `blog-${post.slug}`,
        title: post.metadata.title,
        summary: post.metadata.summary,
        content: post.content,
        slug: post.slug,
        type: 'blog',
        publishedAt: post.metadata.publishedAt,
        tag: post.metadata.tag,
        image: post.metadata.image,
      });
    });

    // Process work projects
    workProjects.forEach((project) => {
      searchableData.push({
        id: `work-${project.slug}`,
        title: project.metadata.title,
        summary: project.metadata.summary,
        content: project.content,
        slug: project.slug,
        type: 'work',
        publishedAt: project.metadata.publishedAt,
        tag: project.metadata.tag,
        images: project.metadata.images,
      });
    });

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write search data to public directory
    const searchDataPath = path.join(publicDir, 'search-data.json');
    fs.writeFileSync(searchDataPath, JSON.stringify(searchableData, null, 2));

    console.log(`✅ Generated search data: ${searchableData.length} items`);
    console.log(`   - Blog posts: ${blogPosts.length}`);
    console.log(`   - Work projects: ${workProjects.length}`);
    
    return searchableData;
  } catch (error) {
    console.error('❌ Error generating search data:', error);
    throw error;
  }
}

// Allow direct execution
if (require.main === module) {
  generateSearchData();
}