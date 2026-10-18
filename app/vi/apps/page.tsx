import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import AppsGrid from '@/app/components/AppsGrid';
import { getAllApps } from '@/lib/apps';
import { baseInfo } from '@/content/informations/info';
import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';

export const metadata: Metadata = {
    title: `Ứng dụng | ${baseInfo.shortName}`,
    description: 'Bộ sưu tập các công cụ và ứng dụng hữu ích chạy trên trình duyệt.',
};

export default function VietnameseAppsPage() {
    const apps = getAllApps();

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
            <div className="container mx-auto max-w-7xl px-4 pt-8 flex items-center justify-between">
                <Link
                    href="/vi/"
                    className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                >
                    <ArrowLeft size={18} aria-hidden="true" />
                    Về trang chủ
                </Link>
                <LanguageSwitcher inline />
            </div>
            <AppsGrid apps={apps} />
        </main>
    );
}
