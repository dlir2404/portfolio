import { getAllProjectSlugs, getProjectBySlug } from "@/lib/project";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { baseInfo } from "@/content/informations/info";
import ProjectView from "@/components/project/ProjectView";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Không tìm thấy dự án',
    };
  }

  return {
    title: `${project.title} | ${baseInfo.shortName} Portfolio`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'website',
      images: [project.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function VietnameseProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} locale="vi" />;
}
