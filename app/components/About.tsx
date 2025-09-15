'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap, Cloud, Server, Section } from 'lucide-react';

const skills = [
  { 
    name: 'Frontend', 
    icon: Globe, 
    color: 'from-blue-500 to-cyan-500', 
    skills: [
      'React',
      'Next.js', 
      'Redux',
      'Tailwind CSS',
      'HTML/CSS',
      'jQuery',
      'HTML Canvas',
    ]
  },
  { 
    name: 'Backend', 
    icon: Server, 
    color: 'from-violet-500 to-purple-500', 
    skills: [
      'Nest.js',
      'Express',
      'MCP',
      'Spring Boot',
      'Socket.io',
      'AI Agents',
      'RabbitMQ',
      'Redis',
    ]
  },
  { 
    name: 'Database', 
    icon: Database, 
    color: 'from-emerald-500 to-green-500', 
    skills: [
      'PostgreSQL',
      'MongoDB', 
      'MySQL',
      'Clickhouse',
      'Elasticsearch',
      'Solr'
    ]
  },
  { 
    name: 'DevOps & Cloud', 
    icon: Cloud, 
    color: 'from-orange-500 to-red-500', 
    skills: [
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git',
      'Linux',
      'Automation'
    ]
  },
  { 
    name: 'Mobile', 
    icon: Smartphone, 
    color: 'from-pink-500 to-rose-500', 
    skills: [
      'Flutter',
      'Android (Kotlin)',
      'React Native'
    ]
  }
];

const stats = [
  { number: '2.5+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '15+', label: 'Technologies Mastered' },
  { number: '24/7', label: 'Development Passion' }, 
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader title="About Me" subtitle="Passionate developer with a love for creating innovative solutions and pushing the boundaries of what's possible with code." />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                whileInView={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Passionate Full-Stack Developer with 2.5+ years of experience delivering production-ready web and mobile applications. Strong background in backend systems, distributed computing, and cloud-native development with a focus on performance, scalability, and security.
              </motion.p>
              
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                whileInView={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                I specialize in Nest.js and Next.js, but I'm always excited to learn new technologies 
                and tackle challenging problems. When I'm not coding, you'll find me working on personal projects, 
                exploring the latest tech trends, or learning from tech blogs and documentation.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Tech Enthusiast'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-white"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-6"
          >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex flex-col"
                    whileHover={{ scale: 1.02, y: -3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          className="text-xs text-gray-300 bg-white/5 group-hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.08) + (techIndex * 0.04) }}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}