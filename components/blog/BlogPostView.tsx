import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useMDXComponents } from '@/app/mdx-component';
import { BlogPost } from '@/types';
import { Locale, getTranslations } from '@/lib/i18n';

interface BlogPostViewProps {
  post: BlogPost;
  locale?: Locale;
}

export default function BlogPostView({ post, locale = 'en' }: BlogPostViewProps) {
  const t = getTranslations(locale);
  const backHref = locale === 'vi' ? '/vi/#blog' : '/#blog';
  const contactHref = locale === 'vi' ? '/vi/#contact' : '/#contact';

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    locale === 'vi' ? 'vi-VN' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const shareText = encodeURIComponent(
    `Check out "${post.title}" by @${post.author || 'Larry'}`
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        {/* Back to Blog */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          {t.blog.backToBlog}
        </Link>

        {/* Featured Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-black">
                {t.blog.featuredBadge}
              </span>
            </div>
          )}
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="text-gray-300 leading-relaxed">
            <MDXRemote
              source={post.content}
              components={useMDXComponents()}
              options={{ blockJS: false }}
            />
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {locale === 'vi' ? 'Bạn thấy bài viết này hữu ích?' : 'Enjoyed this article?'}
              </h3>
              <p className="text-gray-400">
                {locale === 'vi'
                  ? 'Theo dõi mình qua mạng xã hội để cập nhật thêm nhiều chia sẻ kỹ thuật thú vị.'
                  : 'Follow me on social media for more content like this.'}
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 text-sm font-medium"
              >
                {locale === 'vi' ? 'Chia sẻ lên X' : 'Share on Twitter'}
              </a>
              <Link
                href={contactHref}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full transition-colors duration-300 text-sm font-medium"
              >
                {t.hero.ctaContact}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
