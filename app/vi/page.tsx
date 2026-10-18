import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getAllProjects } from '@/lib/project';
import Experiences from '../components/Experiences';
import { Metadata } from 'next';
import { baseInfo } from '@/content/informations/info';

export const metadata: Metadata = {
  title: `${baseInfo.shortName} - Lập trình viên Full Stack`,
  description: `${baseInfo.role} & Kỹ sư công nghệ sáng tạo.`,
};

export default async function VietnameseHome() {
  const projects = await getAllProjects('vi');
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Projects projects={projects} />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
