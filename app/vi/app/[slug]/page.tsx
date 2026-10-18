import { getAllAppSlugs, getAppBySlug } from '@/lib/apps';
import { baseInfo } from '@/content/informations/info';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EmbeddedAppClient } from '@/app/app/[slug]/EmbeddedAppClient';

interface EmbeddedAppPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return getAllAppSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: EmbeddedAppPageProps): Metadata {
    const app = getAppBySlug(params.slug);

    if (!app) {
        return {
            title: 'Không tìm thấy ứng dụng',
        };
    }

    const desc = app.descriptionVi || app.description;

    return {
        title: `${app.title} | ${baseInfo.shortName}`,
        description: desc,
        openGraph: {
            title: app.title,
            description: desc,
            type: 'website',
        },
    };
}

export default function VietnameseEmbeddedAppPage({ params }: EmbeddedAppPageProps) {
    const app = getAppBySlug(params.slug);

    if (!app) {
        notFound();
    }

    return (
        <main className="fixed inset-0 z-[100] h-dvh w-screen overflow-hidden bg-black">
            <EmbeddedAppClient initialUrl={app.url} title={app.title} />
        </main>
    );
}
