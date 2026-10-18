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
        linkedin: "https://www.linkedin.com/in/linh-%C4%91%C3%ACnh-128b7630a/",
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
        summary: "Worked in a 10-member product team as a Full Stack Developer, Business Analyst, and Tester. Designed and developed scalable web applications, collaborated closely with stakeholders, and optimized delivery processes.",
        techStack: ["Next.js", "NestJS", "PostgreSQL", "Jira", "Confluence", "Figma", "Notion"]
    },
    {
        company: "True Platform Vietnam JSC",
        role: ["Full Stack Developer"],
        startDate: "2024-08",
        endDate: "2025-09",
        summary: "Serving as a Full Stack Developer in a 15-member engineering team. Building and maintaining enterprise-grade web applications, integrating complex business logic, and ensuring system scalability and performance.",
        techStack: ["JavaScript", "PHP", "MySQL", "In-house proprietary framework"]
    },
    {
        company: "OpenCommerce Group",
        role: ["Full Stack Developer", "Domain Owner"],
        startDate: "2025-10",
        endDate: "Present",
        summary: "Serving as Development Owner for Analytics & Tracking and CR-Agent (ConvertCore / sbase-ai). Architecting high-throughput real-time event streaming pipelines with Kafka and ClickHouse, engineering AI-powered Conversion Rate Optimization (CRO) agents with Model Context Protocol (MCP), and scaling automated POD AI rendering workflows.",
        techStack: ["Python", "Kafka", "ClickHouse", "Celery", "FastAPI", "Vue.js", "Django", "MCP"]
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
        summary: "Làm việc trong đội ngũ sản phẩm 10 người với vai trò Full Stack Developer, BA và Tester. Thiết kế và phát triển các hệ thống web tối ưu, cộng tác chặt chẽ với các bên liên quan để đẩy nhanh tiến độ sản phẩm.",
        techStack: ["Next.js", "NestJS", "PostgreSQL", "Jira", "Confluence", "Figma", "Notion"]
    },
    {
        company: "Công ty Cổ phần True Platform Việt Nam",
        role: ["Lập trình viên Full Stack"],
        startDate: "2024-08",
        endDate: "2025-09",
        summary: "Đảm nhiệm vị trí Full Stack Developer trong đội ngũ kỹ thuật 15 thành viên. Xây dựng và tối ưu các ứng dụng web cấp doanh nghiệp, tích hợp nghiệp vụ phức tạp, bảo đảm tính sẵn sàng và hiệu năng hệ thống.",
        techStack: ["JavaScript", "PHP", "MySQL", "In-house proprietary framework"]
    },
    {
        company: "OpenCommerce Group",
        role: ["Lập trình viên Full Stack", "Chủ trì kỹ thuật (Domain Owner)"],
        startDate: "2025-10",
        endDate: "Present",
        summary: "Đảm nhiệm vai trò Chủ trì kỹ thuật (Development Owner) cho mảng Analytics & Tracking và CR-Agent (ConvertCore / sbase-ai). Trực tiếp xây dựng hệ thống streaming sự kiện thời gian thực thông lượng cao với Kafka & ClickHouse, kiến trúc trợ lý AI tối ưu tỷ lệ chuyển đổi (CRO) qua giao thức MCP, và phát triển pipeline render tự động cho sản phẩm POD AI.",
        techStack: ["Python", "Kafka", "ClickHouse", "Celery", "FastAPI", "Vue.js", "Django", "MCP"]
    }
];

export function getExperiences(locale: Locale = 'en'): Experience[] {
    return locale === 'vi' ? experiencesVi : experiencesEn;
}

export const experiences = experiencesEn;

export function getYearsOfExperience(from: string = baseInfo.careerStartDate): number {
    const [year, month] = from.split("-").map(Number);
    const start = new Date(year, (month ?? 1) - 1, 1);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    if (now.getMonth() < start.getMonth()) {
        years -= 1;
    }
    return Math.max(0, years);
}

export function getAboutDescription(locale: Locale = 'en'): string[] {
    const years = getYearsOfExperience();
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
            skills: ["NestJS", "Python (FastAPI, Django)", "gRPC", "Kafka", "Redis", "Spring Boot", "MCP / AI Agents", "Golang", "PHP"],
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
    const years = getYearsOfExperience();
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
