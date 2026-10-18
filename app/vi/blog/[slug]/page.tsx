import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';
import { Metadata } from 'next';
import { baseInfo } from '@/content/informations/info';
import BlogPostView from '@/components/blog/BlogPostView';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs('vi');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug, 'vi');
  
  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
    };
  }

  return {
    title: `${post.title} | ${baseInfo.shortName} Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

export default async function VietnameseBlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug, 'vi');

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} locale="vi" />;
}
