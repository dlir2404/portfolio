import { Experience } from "@/types";
import {
    Globe,
    Server,
    Database,
    Cloud,
    type LucideIcon,
} from "lucide-react";
import { Locale } from "@/lib/i18n";

export type SkillGroup = {
    name: string;
    icon: LucideIcon;
    color: string;
    skills: string[];
};

export type Stat = {
    number: string;
    label: string;
};

export const baseInfo = {
    name: "Larry Vu",
    shortName: "Larry",
    role: "Full Stack Developer",
    careerStartDate: "2023-03",
    portfolioURL: "https://larry.is-a.dev",
    avatar: "/images/avatar.jpg",
    email: "dinhlinh.work24@gmail.com",
    phone: "+84 966103320",
    location: "Dong Da, Hanoi, Vietnam",
    locationVi: "Đống Đa, Hà Nội, Việt Nam",
    socials: {
        linkedin: "https://www.linkedin.com/in/dlir2404/",
        facebook: "https://www.facebook.com/Dlir24",
        github: "https://github.com/dlir2404",
    }
};

export const experiencesEn: Experience[] = [
    {
        company: "Freelance / Outsourcing Team",
        role: ["Full Stack Developer", "Business Analyst", "Tester"],
        startDate: "2023-03",
        endDate: "2023-08",
        summary: "Contributed as a Full Stack Developer, Business Analyst, and Tester in a 5-member outsourcing team. Delivered multiple web applications by gathering requirements, implementing features, and ensuring product quality.",
        techStack: ["Next.js", "NestJS", "PostgreSQL", "Trello"]
    },
    {
        company: "VIPTAM Technology Group",
        role: ["Full Stack Developer", "Business Analyst", "Tester"],
        startDate: "2023-08",
        endDate: "2024-07",
        summary: "Full Stack Developer, Business Analyst, and Tester in a 10-member product team building VDONE, a social-commerce ecosystem that connects consumers, suppliers, manufacturers, and logistics partners. Built backend APIs and admin portal interfaces, clarified requirements with stakeholders, and tested features across web, iOS, and Android before each release.",
        techStack: ["Next.js", "NestJS", "PostgreSQL", "Jira", "Confluence", "Figma", "Notion"]
    },
    {
        company: "True Platform Vietnam JSC",
        role: ["Full Stack Developer"],
        startDate: "2024-07",
        endDate: "2025-09",
        summary: "Full Stack Developer in a 15-member engineering team, building production web applications on the company's in-house PHP and JavaScript framework. Built Socials, a multi-platform publishing tool for Facebook, Instagram, Threads, X, and LinkedIn, with scheduled publishing through background queues and cron workers, full-text search over historical posts with Apache Solr, and a drag-and-drop content calendar built from scratch. Also built Bookmarks and an AI-assisted SEO writing tool.",
        techStack: ["PHP", "JavaScript", "jQuery", "MySQL", "Apache Solr", "In-house framework"]
    },
    {
        company: "OpenCommerce Group",
        role: ["Full Stack Developer"],
        startDate: "2025-10",
        endDate: "Present",
        summary: "Owned two e-commerce domains end to end: Analytics & Tracking (a real-time event pipeline on Kafka and ClickHouse) and CR-Agent (an AI conversion-rate-optimization agent built on the Model Context Protocol). Also built the POD AI personalization product end to end, from seller setup and campaign launch to buyer personalization and print fulfillment, through to its production release.",
        techStack: ["Python", "Django", "FastAPI", "Celery", "Kafka", "ClickHouse", "Vue.js", "MCP", "Kubernetes"]
    }
];

export const experiencesVi: Experience[] = [
    {
        company: "Freelance / Đội ngũ Outsourcing",
        role: ["Lập trình viên Full Stack", "Phân tích nghiệp vụ", "Kiểm thử phần mềm"],
        startDate: "2023-03",
        endDate: "2023-08",
        summary: "Đóng vai trò Full Stack Developer, BA và Tester trong đội ngũ 5 thành viên. Trực tiếp làm rõ yêu cầu, phát triển tính năng và đảm bảo chất lượng cho các sản phẩm web khách hàng.",
        techStack: ["Next.js", "NestJS", "PostgreSQL", "Trello"]
    },
    {
        company: "Tập đoàn Công nghệ VIPTAM",
        role: ["Lập trình viên Full Stack", "Phân tích nghiệp vụ", "Kiểm thử phần mềm"],
        startDate: "2023-08",
        endDate: "2024-07",
        summary: "Full Stack Developer, BA và Tester trong đội ngũ sản phẩm 10 người phát triển VDONE, hệ sinh thái thương mại xã hội kết nối người tiêu dùng, nhà cung cấp, nhà sản xuất và đối tác vận chuyển. Xây dựng API backend và giao diện cổng quản trị, làm rõ yêu cầu với các bên liên quan, đồng thời kiểm thử tính năng trên web, iOS và Android trước mỗi lần phát hành.",
        techStack: ["Next.js", "NestJS", "PostgreSQL", "Jira", "Confluence", "Figma", "Notion"]
    },
    {
        company: "Công ty Cổ phần True Platform Việt Nam",
        role: ["Lập trình viên Full Stack"],
        startDate: "2024-07",
        endDate: "2025-09",
        summary: "Full Stack Developer trong đội ngũ kỹ thuật 15 thành viên, phát triển các ứng dụng web production trên framework PHP và JavaScript nội bộ của công ty. Xây dựng Socials, công cụ đăng bài đa nền tảng cho Facebook, Instagram, Threads, X và LinkedIn, với cơ chế lên lịch đăng qua hàng đợi nền và cron worker, tìm kiếm toàn văn trên kho bài viết bằng Apache Solr, và lịch nội dung kéo thả tự xây dựng từ đầu. Đồng thời phát triển Bookmarks và công cụ hỗ trợ viết bài chuẩn SEO tích hợp AI.",
        techStack: ["PHP", "JavaScript", "jQuery", "MySQL", "Apache Solr", "In-house framework"]
    },
    {
        company: "OpenCommerce Group",
        role: ["Lập trình viên Full Stack"],
        startDate: "2025-10",
        endDate: "Present",
        summary: "Chịu trách nhiệm toàn bộ hai mảng e-commerce: Analytics & Tracking (luồng events thời gian thực trên Kafka và ClickHouse) và CR-Agent (trợ lý AI tối ưu tỷ lệ chuyển đổi, xây dựng trên giao thức MCP). Đồng thời tham gia trọn vẹn sản phẩm cá nhân hóa POD AI từ đầu đến cuối, từ setup của seller, lên campaign, buyer cá nhân hóa đến in ấn, cho đến khi lên production.",
        techStack: ["Python", "Django", "FastAPI", "Celery", "Kafka", "ClickHouse", "Vue.js", "MCP", "Kubernetes"]
    }
];

export function getExperiences(locale: Locale = 'en'): Experience[] {
    return locale === 'vi' ? experiencesVi : experiencesEn;
}

export const experiences = experiencesEn;

// Years of experience rounded down to the nearest half year (e.g. 3 years 8 months -> 3.5).
// The site is statically exported, so this is evaluated at build time.
export function getYearsOfExperience(from: string = baseInfo.careerStartDate): number {
    const [year, month] = from.split("-").map(Number);
    const now = new Date();
    const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - (month ?? 1));
    return Math.max(0, Math.floor(months / 6) / 2);
}

// Vietnamese uses a decimal comma: 3.5 -> "3,5".
function formatYears(years: number, locale: Locale): string {
    return locale === 'vi' ? String(years).replace('.', ',') : String(years);
}

export function getAboutDescription(locale: Locale = 'en'): string[] {
    const years = formatYears(getYearsOfExperience(), locale);
    if (locale === 'vi') {
        return [
            `Lập trình viên Full-Stack với hơn ${years} năm kinh nghiệm kiến tạo các ứng dụng web thực tế. Nền tảng vững vàng về hệ thống backend, kiến trúc phân tán và phát triển cloud-native với ưu tiên hàng đầu về hiệu năng, độ chịu tải và bảo mật.`,
            "Mình chuyên sâu về hệ sinh thái Next.js/React, NestJS và Python (FastAPI/Django), đồng thời có kinh nghiệm thực chiến phát triển các pipeline dữ liệu lớn (Kafka, ClickHouse) và các giải pháp AI Agents/MCP. Ngoài thời gian lập trình, mình thường phát triển các sản phẩm SaaS cá nhân, nghiên cứu các mô hình AI mới và học hỏi từ các bài viết kỹ thuật chuyên sâu.",
        ];
    }
    return [
        `Passionate Full-Stack Developer with ${years}+ years of experience delivering production-ready web applications. Strong background in backend systems, distributed computing, and cloud-native development with a focus on performance, scalability, and security.`,
        "I specialize in Next.js/React, NestJS, and Python (FastAPI/Django), with production experience architecting high-throughput data streaming pipelines (Kafka, ClickHouse) and AI Agents/MCP solutions. When not coding, you'll find me building personal SaaS products, exploring emerging AI models, and diving deep into technical systems design.",
    ];
}

export const aboutDescription = getAboutDescription('en');

export function getTraits(locale: Locale = 'en'): string[] {
    if (locale === 'vi') {
        return [
            "Tư duy giải quyết vấn đề",
            "Làm việc nhóm hiệu quả",
            "Học hỏi không ngừng",
            "Đam mê công nghệ",
        ];
    }
    return [
        "Problem Solver",
        "Team Player",
        "Continuous Learner",
        "Tech Enthusiast",
    ];
}

export const traits = getTraits('en');

export function getSkillGroups(locale: Locale = 'en'): SkillGroup[] {
    return [
        {
            name: locale === 'vi' ? "Giao diện (Frontend)" : "Frontend",
            icon: Globe,
            color: "from-blue-500 to-cyan-500",
            skills: ["Next.js", "React", "Vue.js", "TypeScript", "Vite", "Tailwind CSS", "HTML5 / Canvas", "Redux"],
        },
        {
            name: locale === 'vi' ? "Hệ thống (Backend)" : "Backend",
            icon: Server,
            color: "from-violet-500 to-purple-500",
            skills: ["NestJS", "Python (FastAPI, Django)", "gRPC", "Kafka", "Redis", "Celery", "MCP / AI Agents", "PHP"],
        },
        {
            name: locale === 'vi' ? "Cơ sở dữ liệu" : "Database",
            icon: Database,
            color: "from-emerald-500 to-green-500",
            skills: ["PostgreSQL", "ClickHouse", "MySQL", "MongoDB", "Elasticsearch", "Redis"],
        },
        {
            name: locale === 'vi' ? "DevOps & Đám mây" : "DevOps & Cloud",
            icon: Cloud,
            color: "from-orange-500 to-red-500",
            skills: ["Docker", "Kubernetes", "CI/CD", "Linux", "Git", "Cloudflare / Edge"],
        },
    ];
}

export const skillGroups = getSkillGroups('en');

export function getStats(locale: Locale = 'en'): Stat[] {
    const years = formatYears(getYearsOfExperience(), locale);
    if (locale === 'vi') {
        return [
            { number: `${years}+`, label: "Năm kinh nghiệm" },
            { number: "20+", label: "Dự án hoàn thành" },
            { number: "15+", label: "Công nghệ thành thạo" },
            { number: "24/7", label: "Đam mê lập trình" },
        ];
    }
    return [
        { number: `${years}+`, label: "Years Experience" },
        { number: "20+", label: "Projects Completed" },
        { number: "15+", label: "Technologies Mastered" },
        { number: "24/7", label: "Development Passion" },
    ];
}

export const stats = getStats('en');
