import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMetadata, BlogPost } from '@/types';

export type Locale = 'en' | 'vi';

const blogBaseDirectory = path.join(process.cwd(), 'content/blogs');

export function getBlogDir(locale: Locale = 'en'): string {
  const localizedDir = path.join(blogBaseDirectory, locale);
  if (fs.existsSync(localizedDir)) {
    return localizedDir;
  }
  return blogBaseDirectory;
}

export function getAllBlogPosts(locale: Locale = 'en'): BlogPost[] {
  const dir = getBlogDir(locale);
  if (!fs.existsSync(dir)) {
    return [];
  }
  const fileNames = fs.readdirSync(dir);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string, locale: Locale = 'en'): BlogPost | null {
  try {
    let fullPath = path.join(getBlogDir(locale), `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      const altLocale: Locale = locale === 'en' ? 'vi' : 'en';
      fullPath = path.join(getBlogDir(altLocale), `${slug}.mdx`);
    }
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(blogBaseDirectory, `${slug}.mdx`);
    }
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getAllBlogSlugs(locale?: Locale): string[] {
  if (locale) {
    const dir = getBlogDir(locale);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));
  }

  const slugs = new Set<string>();
  ['en', 'vi'].forEach((loc) => {
    const dir = path.join(blogBaseDirectory, loc);
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir)
        .filter((fileName) => fileName.endsWith('.mdx'))
        .forEach((fileName) => slugs.add(fileName.replace(/\.mdx$/, '')));
    }
  });

  if (slugs.size === 0 && fs.existsSync(blogBaseDirectory)) {
    fs.readdirSync(blogBaseDirectory)
      .filter((fileName) => fileName.endsWith('.mdx'))
      .forEach((fileName) => slugs.add(fileName.replace(/\.mdx$/, '')));
  }

  return Array.from(slugs);
}

export function getBlogMetadata(locale: Locale = 'en'): BlogMetadata[] {
  const posts = getAllBlogPosts(locale);
  return posts.map(({ content, ...metadata }) => metadata);
}

export function getFeaturedBlogPosts(locale: Locale = 'en'): BlogPost[] {
  const posts = getAllBlogPosts(locale);
  return posts.filter((post) => post.featured);
}

export function getBlogPostsByTag(tag: string, locale: Locale = 'en'): BlogPost[] {
  const posts = getAllBlogPosts(locale);
  return posts.filter((post) => post.tags.includes(tag));
}

export function getAllBlogTags(locale: Locale = 'en'): string[] {
  const posts = getAllBlogPosts(locale);
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
