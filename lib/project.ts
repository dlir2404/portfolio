import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '@/types';
import { cache } from 'react';

export type Locale = 'en' | 'vi';

const projectBaseDirectory = path.join(process.cwd(), 'content/projects');

export function getProjectDir(locale: Locale = 'en'): string {
    const localizedDir = path.join(projectBaseDirectory, locale);
    if (fs.existsSync(localizedDir)) {
        return localizedDir;
    }
    return projectBaseDirectory;
}

export const getAllProjects = cache(async (locale: Locale = 'en'): Promise<Project[]> => {
    const dir = getProjectDir(locale);
    if (!fs.existsSync(dir)) return [];
    const fileNames = fs.readdirSync(dir);
    const allProjectsData = fileNames
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
            } as Project;
        });

    // Sort projects by date
    return allProjectsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
});

export const getProjectBySlug = cache(async (slug: string, locale: Locale = 'en'): Promise<Project | null> => {
    try {
        let fullPath = path.join(getProjectDir(locale), `${slug}.mdx`);
        if (!fs.existsSync(fullPath)) {
            const altLocale: Locale = locale === 'en' ? 'vi' : 'en';
            fullPath = path.join(getProjectDir(altLocale), `${slug}.mdx`);
        }
        if (!fs.existsSync(fullPath)) {
            fullPath = path.join(projectBaseDirectory, `${slug}.mdx`);
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
        } as Project;
    } catch (error) {
        return null;
    }
});

export const getAllProjectSlugs = cache(async (locale?: Locale): Promise<string[]> => {
    if (locale) {
        const dir = getProjectDir(locale);
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir)
            .filter((fileName) => fileName.endsWith('.mdx'))
            .map((fileName) => fileName.replace(/\.mdx$/, ''));
    }

    const slugs = new Set<string>();
    (['en', 'vi'] as const).forEach((loc) => {
        const dir = path.join(projectBaseDirectory, loc);
        if (fs.existsSync(dir)) {
            fs.readdirSync(dir)
                .filter((fileName) => fileName.endsWith('.mdx'))
                .forEach((fileName) => slugs.add(fileName.replace(/\.mdx$/, '')));
        }
    });

    if (slugs.size === 0 && fs.existsSync(projectBaseDirectory)) {
        fs.readdirSync(projectBaseDirectory)
            .filter((fileName) => fileName.endsWith('.mdx'))
            .forEach((fileName) => slugs.add(fileName.replace(/\.mdx$/, '')));
    }

    return Array.from(slugs);
});

export const getProjectMetadata = cache(async (locale: Locale = 'en'): Promise<Omit<Project, 'content'>[]> => {
    const projects = await getAllProjects(locale);
    return projects.map(({ content, ...metadata }) => metadata);
});

export const getFeaturedProjects = cache(async (locale: Locale = 'en'): Promise<Project[]> => {
    const projects = await getAllProjects(locale);
    return projects.filter((project) => project.featured);
});

export const getProjectsByTag = cache(async (tag: string, locale: Locale = 'en'): Promise<Project[]> => {
    const projects = await getAllProjects(locale);
    return projects.filter((project) => project.tags.includes(tag));
});
