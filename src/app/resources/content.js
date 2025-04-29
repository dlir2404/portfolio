import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Larry",
  lastName: "Vu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about coding, devops and technology
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dlir2404",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dinhlinh.work24@gmail.com",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  headline: <>Software engineer and builder</>,
  subline: (
    <>
      I'm Larry, a software engineer at <InlineCode>Standard.inc</InlineCode>
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/dlir2404/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Larry is just a normal developer with no outstanding skill, attempt to learn everythings he can.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Standard",
        timeframe: "07/2024 - Present",
        role: "Junior Fullstack Software Engineer",
        achievements: [
          <>
            Contributed to key projects such as Socials (a multi-platform social media management tool), Writers (an AI-powered SEO optimization tool), and Bookmarks (a smart bookmark management system).
          </>,
          <>
            Gained invaluable experience working in a SaaS company alongside talented professionals. A special thanks to my mentor, Mr. Ethan, a senior developer at Standard, for guiding me in both technical and soft skills, significantly shaping my growth as a developer.
          </>,
        ],
        images: [
          {
            src: "/images/projects/socials/socials.png",
            alt: "Socials Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/writers/seo.png",
            alt: "Writers Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "VIPTAM Groups",
        timeframe: "10/2023 - 07/2024",
        role: "Fresher BA, Tester, Backend & Frontend Developer",
        achievements: [
          <>
            Played diverse roles including Business Analyst, Tester, and Backend & Frontend Developer, gaining a holistic understanding of the software development lifecycle. This experience provided a strong foundation in project workflows and cross-functional collaboration.
          </>,
        ],
        images: []
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hanoi University of Science and Technology (HUST)",
        description: <>Studied computer science.</>,
      },
      {
        name: "Kim Thanh High School",
        description: <></>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frameworks",
        description: <>Able to use Nestjs, Nextjs, Reactjs,....</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/avatar-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Languages",
        description: <>TypeScript, JavaScript, PHP, Python,...</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing everythings about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: "My projects",
  description: `Some main projects of ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
