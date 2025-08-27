import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://larry.is-a.dev'),
  title: 'Larry - Full Stack Developer',
  description: 'Full Stack Developer & Creative Technologist based in the digital realm.',
  keywords: ['developer', 'full stack', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Larry' }],
  creator: 'Larry',
  openGraph: {
    title: 'Larry - Full Stack Developer',
    description: 'Full Stack Developer & Creative Technologist',
    url: 'https://larry.is-a.dev',
    siteName: 'Larry Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Larry - Full Stack Developer',
    description: 'Full Stack Developer & Creative Technologist',
    creator: '@larry',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-inter antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}