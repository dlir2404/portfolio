import { Experience } from "@/types";
import {
    Globe,
    Server,
    Database,
    Cloud,
    Smartphone,
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
        role: ["Full Stack Developer"],
        startDate: "2025-10",
        endDate: "Present",
        summary: "Currently working as a Full Stack Developer in Front team (Front here doesn't mean frontend), contributing to the development of e-commerce solutions.",
        techStack: ["Django", "Golang", "Python", "Vue.js", "MySQL"]
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
        role: ["Lập trình viên Full Stack"],
        startDate: "2025-10",
        endDate: "Present",
        summary: "Đang làm việc tại vị trí Full Stack Developer trong Front team, trực tiếp tham gia phát triển và tối ưu các giải pháp thương mại điện tử quy mô lớn.",
        techStack: ["Django", "Golang", "Python", "Vue.js", "MySQL"]
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
            `Lập trình viên Full-Stack với hơn ${years} năm kinh nghiệm kiến tạo các ứng dụng web và di động thực tế. Nền tảng vững vàng về hệ thống backend, kiến trúc phân tán và phát triển cloud-native với ưu tiên hàng đầu về hiệu năng, độ chịu tải và bảo mật.`,
            "Mình chuyên sâu về Nest.js và Next.js, nhưng luôn sẵn sàng tiếp cận các công nghệ mới để giải quyết những thử thách thú vị. Ngoài thời gian lập trình, mình thường phát triển các dự án cá nhân, đón đầu các xu hướng công nghệ mới và học hỏi từ các bài viết kỹ thuật.",
        ];
    }
    return [
        `Passionate Full-Stack Developer with ${years}+ years of experience delivering production-ready web and mobile applications. Strong background in backend systems, distributed computing, and cloud-native development with a focus on performance, scalability, and security.`,
        "I specialize in Nest.js and Next.js, but I'm always excited to learn new technologies and tackle challenging problems. When I'm not coding, you'll find me working on personal projects, exploring the latest tech trends, or learning from tech blogs and documentation.",
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
            skills: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS", "jQuery", "HTML Canvas"],
        },
        {
            name: locale === 'vi' ? "Hệ thống (Backend)" : "Backend",
            icon: Server,
            color: "from-violet-500 to-purple-500",
            skills: ["Nest.js", "Express", "MCP", "Spring Boot", "Socket.io", "AI Agents", "RabbitMQ", "Redis"],
        },
        {
            name: locale === 'vi' ? "Cơ sở dữ liệu" : "Database",
            icon: Database,
            color: "from-emerald-500 to-green-500",
            skills: ["PostgreSQL", "MongoDB", "MySQL", "Clickhouse", "Elasticsearch", "Solr"],
        },
        {
            name: locale === 'vi' ? "DevOps & Đám mây" : "DevOps & Cloud",
            icon: Cloud,
            color: "from-orange-500 to-red-500",
            skills: ["Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Automation"],
        },
        {
            name: locale === 'vi' ? "Ứng dụng Di động" : "Mobile",
            icon: Smartphone,
            color: "from-pink-500 to-rose-500",
            skills: ["Flutter", "Android (Kotlin)", "React Native"],
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
