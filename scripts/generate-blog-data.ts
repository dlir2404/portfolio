import { getAllBlogPosts } from '@/lib/blog';
import fs from 'fs';
import path from 'path';

export function generateBlogSearchIndex(): void {
  const postsEn = getAllBlogPosts('en');
  const postsVi = getAllBlogPosts('vi');

  const outputPathDefault = path.join(process.cwd(), 'public/blog-search-index.json');
  const outputPathEn = path.join(process.cwd(), 'public/blog-search-index-en.json');
  const outputPathVi = path.join(process.cwd(), 'public/blog-search-index-vi.json');

  fs.writeFileSync(outputPathDefault, JSON.stringify(postsEn, null, 2));
  fs.writeFileSync(outputPathEn, JSON.stringify(postsEn, null, 2));
  fs.writeFileSync(outputPathVi, JSON.stringify(postsVi, null, 2));
}

// Allow direct execution
if (require.main === module) {
  generateBlogSearchIndex();
}
