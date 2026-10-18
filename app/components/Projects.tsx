'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Sparkles } from 'lucide-react';
import { Project } from '@/types';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { baseInfo } from '@/content/informations/info';
import { useLocale } from '@/components/i18n/LocaleContext';

export default function Projects({
  projects
}: {
  projects: Project[];
}) {
  const { t, locale } = useLocale();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'ai'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => {
        const cat = (project.category || '').toLowerCase();
        const tags = (project.tags || []).map(t => t.toLowerCase());
        const f = activeFilter.toLowerCase();
        if (f === 'ai') {
          return cat.includes('machine learning') || cat.includes('ai') || tags.includes('ai') || tags.includes('machine learning');
        }
        return cat.includes(f);
      });

  const getProjectUrl = (slug: string) => {
    return locale === 'vi' ? `/vi/project/${slug}` : `/project/${slug}`;
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {t.projects.filters[filter] || (filter.charAt(0).toUpperCase() + filter.slice(1))}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => {
              const isFeatured = !!project.featured;

              return (
                <motion.article
                  key={project.slug || index}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-sm ${
                    isFeatured
                      ? 'border border-amber-500/35 hover:border-amber-400/70 bg-gradient-to-b from-amber-500/[0.06] via-white/[0.05] to-white/[0.03] shadow-[0_4px_20px_-4px_rgba(245,158,11,0.15)] hover:shadow-[0_8px_30px_-4px_rgba(245,158,11,0.25)]'
                      : 'border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  {/* Top Accent Line for Featured */}
                  {isFeatured && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent z-20 pointer-events-none" />
                  )}

                  {/* Featured Badge */}
                  {isFeatured && (
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-[11px] font-bold text-black shadow-lg">
                      <Sparkles size={11} className="text-black" />
                      <span>{t.projects.featuredBadge}</span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative w-full h-44 shrink-0 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                      {project.repo && (
                        <motion.a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Source Code"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <Link href={getProjectUrl(project.slug)}>
                        <h3 className="font-bold text-base md:text-lg text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                          {project.title}
                        </h3>
                      </Link>

                      <p className="text-gray-400 mb-3 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 border rounded-full text-[11px] font-medium ${
                              isFeatured
                                ? 'bg-amber-500/10 border-amber-500/20 text-amber-200/90'
                                : 'bg-blue-500/10 border-white/10 text-gray-300'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <Link href={getProjectUrl(project.slug)}>
                        <div className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-xs md:text-sm cursor-pointer group/link">
                          <span>{t.projects.viewProject}</span>
                          <ChevronRight
                            size={15}
                            className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`${baseInfo.socials.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-white/20 rounded-full text-white font-medium transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>{t.projects.viewAllGithub}</span>
            <motion.div
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <ExternalLink size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}