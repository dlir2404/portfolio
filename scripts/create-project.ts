import fs from 'fs';
import path from 'path';

interface ProjectTemplate {
  title: string;
  summary: string;
  image: string;
  publishedAt: string;
  live?: string;
  repo?: string;
  category?: string;
  tags: string[];
  featured: boolean;
  teamSize?: number;
}

const createProjectTemplate = (title: string): string => {
  const template: ProjectTemplate = {
    title,
    summary: "",
    image: `/images/projects/${title.toLowerCase()}/cover.png`,
    publishedAt: new Date().toISOString().split('T')[0],
    live: "",
    repo: "",
    category: "",
    tags: [],
    featured: false,
    teamSize: 1
  };

  return `---
title: "${template.title}"
summary: "${template.summary}"
image: "${template.image}"
publishedAt: "${template.publishedAt}"
live: "${template.live}"
repo: "${template.repo}"
category: "${template.category}"
tags: ${JSON.stringify(template.tags)}
featured: ${template.featured}
teamSize: ${template.teamSize}
---

## Overview
`;
};

const createProject = (filename: string, localeArg: string = 'en'): void => {
  try {
    if (!filename) {
      throw new Error('Filename is required');
    }

    const locale = localeArg === 'vi' ? 'vi' : 'en';
    const cleanFilename = filename.endsWith('.mdx') ? filename : `${filename}.mdx`;
    const title = filename
      .replace(/-/g, ' ')
      .replace('.mdx', '')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const projectDir = path.join(process.cwd(), 'content', 'projects', locale);
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }

    const filePath = path.join(projectDir, cleanFilename);

    if (fs.existsSync(filePath)) {
      throw new Error(`File already exists at: ${filePath}`);
    }

    fs.writeFileSync(filePath, createProjectTemplate(title));
    console.log(`✅ Project file created successfully at: ${filePath}`);

  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
    process.exit(1);
  }
};

// Get filename and locale from command line argument
const filename = process.argv[2];
const locale = process.argv[3] || 'en';
createProject(filename, locale);