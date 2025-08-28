'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import Fuse from 'fuse.js';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  image: string;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Sample blog posts data (in real app, this would come from your blog system)
  const blogPosts: BlogPost[] = [
    {
      slug: 'building-modern-web-apps',
      title: 'Building Modern Web Applications with Next.js and TypeScript',
      excerpt: 'Explore the power of Next.js 14 and TypeScript for creating scalable, performant web applications with modern development practices.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Next.js', 'TypeScript', 'Web Development', 'Performance'],
      featured: true,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg'
    },
    {
      slug: 'mastering-css-animations',
      title: 'Mastering CSS Animations and Transitions',
      excerpt: 'Learn how to create smooth, performant animations that enhance user experience without compromising accessibility.',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['CSS', 'Animations', 'UX Design', 'Performance'],
      featured: false,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
    },
    {
      slug: 'react-state-management',
      title: 'React State Management: From useState to Zustand',
      excerpt: 'A comprehensive guide to managing state in React applications, from basic hooks to advanced state management libraries.',
      date: '2024-01-05',
      readTime: '12 min read',
      tags: ['React', 'State Management', 'JavaScript', 'Architecture'],
      featured: true,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg'
    },
    {
      slug: 'serverless-deployment',
      title: 'Serverless Deployment Strategies for Modern Apps',
      excerpt: 'Discover the best practices for deploying serverless applications using Vercel, Netlify, and AWS.',
      date: '2023-12-28',
      readTime: '10 min read',
      tags: ['Serverless', 'Deployment', 'DevOps', 'Cloud'],
      featured: false,
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
    },
    {
      slug: 'api-design-principles',
      title: 'RESTful API Design Principles and Best Practices',
      excerpt: 'Learn how to design clean, maintainable, and scalable REST APIs that follow industry standards.',
      date: '2023-12-20',
      readTime: '9 min read',
      tags: ['API Design', 'Backend', 'REST', 'Architecture'],
      featured: false,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    }
  ];

  const fuse = new Fuse(blogPosts, {
    keys: ['title', 'excerpt', 'tags'],
    threshold: 0.3,
  });

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  useEffect(() => {
    setPosts(blogPosts);
    setFilteredPosts(blogPosts);
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      const results = fuse.search(searchTerm);
      filtered = results.map(result => result.item);
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag, posts]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold pb-6"
            whileInView={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: 'linear-gradient(to right, #fff, #ec4899, #8b5cf6, #fff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Blog & Insights
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thoughts, tutorials, and insights about web development, technology trends, and best practices.
          </motion.p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <motion.div
              className="relative"
              whileFocus={{ scale: 1.02 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-[1]" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors duration-300"
              />
            </motion.div>
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag, index) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="flex items-center gap-1">
                  {tag !== 'all' && <Tag size={14} />}
                  {tag}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchTerm}-${selectedTag}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-16">
                <motion.h3
                  className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <BookOpen size={24} className="text-pink-400" />
                  Featured Articles
                </motion.h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-xs font-bold text-white">
                            Featured
                          </span>
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <motion.h3
                            className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 cursor-pointer transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {post.title}
                          </motion.h3>
                        </Link>
                        <motion.p
                          className="text-gray-400 mb-4 leading-relaxed"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {post.excerpt}
                        </motion.p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <motion.div
                            className="flex items-center text-pink-400 hover:text-pink-300 font-medium text-sm cursor-pointer group/link"
                            whileHover={{ x: 5 }}
                          >
                            <span>Read More</span>
                            <motion.div
                              className="ml-2"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight size={16} />
                            </motion.div>
                          </motion.div>
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 && (
              <div>
                <motion.h3
                  className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <BookOpen size={24} className="text-blue-400" />
                  Recent Articles
                </motion.h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <motion.h3
                            className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 cursor-pointer transition-colors duration-300 line-clamp-2"
                            whileHover={{ x: 5 }}
                          >
                            {post.title}
                          </motion.h3>
                        </Link>
                        <motion.p
                          className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {post.excerpt}
                        </motion.p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <motion.div
                            className="flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm cursor-pointer group/link"
                            whileHover={{ x: 5 }}
                          >
                            <span>Read More</span>
                            <motion.div
                              className="ml-2"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight size={16} />
                            </motion.div>
                          </motion.div>
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Search size={32} className="text-gray-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                <motion.button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}