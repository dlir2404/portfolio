import { Experience } from "@/types";

export const baseInfo = {
    name: "Larry Vu",
    shortName: "Larry",
    role: "Full Stack Developer",
    portfolioURL: "https://larry.is-a.dev",
    avatar: "/images/avatar.jpg",
    email: "dinhlinh.work24@gmail.com",
    phone: "+84 966103320",
    location: "Dong Da, Hanoi, Vietnam",
    socials: {
        linkedin: "https://www.linkedin.com/in/linh-%C4%91%C3%ACnh-128b7630a/",
        facebook: "https://www.facebook.com/Dlir24",
        github: "https://github.com/dlir2404",
    }
}

export const experiences: Experience[] = [
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
        endDate: "Present",
        summary: "Serving as a Full Stack Developer in a 15-member engineering team. Building and maintaining enterprise-grade web applications, integrating complex business logic, and ensuring system scalability and performance.",
        techStack: ["JavaScript", "PHP", "MySQL", "In-house proprietary framework"]
    }
];