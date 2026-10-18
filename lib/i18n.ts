export type Locale = 'en' | 'vi';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experiences: string;
    projects: string;
    blog: string;
    apps: string;
    contact: string;
  };
  hero: {
    greeting: string;
    welcomeBadge: string;
    taglineLead: string;
    taglineHighlight: string;
    roles: string[];
    ctaWork: string;
    ctaContact: string;
    scrollPrompt: string;
  };
  about: {
    title: string;
    subtitle: string;
    skillsHeading: string;
    experienceBadge: string;
  };
  experiences: {
    title: string;
    subtitle: string;
    present: string;
    technologiesUsed: string;
    month: string;
    months: string;
    year: string;
    years: string;
  };
  projects: {
    title: string;
    subtitle: string;
    filters: Record<string, string>;
    featuredBadge: string;
    viewProject: string;
    liveDemo: string;
    sourceCode: string;
    teamSize: string;
    teamMembers: string;
    viewAllGithub: string;
  };
  blog: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allTag: string;
    readTime: string;
    readArticle: string;
    featuredBadge: string;
    noResults: string;
    backToBlog: string;
    backToHome: string;
    shareArticle: string;
  };
  appsPage: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    launchApp: string;
    noAppsFound: string;
    noAppsFoundDesc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    getInTouchDesc: string;
    connectWithMe: string;
    infoLabels: {
      email: string;
      phone: string;
      location: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
    };
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    connectTitle: string;
    rights: string;
    backToTop: string;
  };
  switcher: {
    current: string;
    togglePrompt: string;
    ariaLabel: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experiences: 'Experiences',
      projects: 'Projects',
      blog: 'Blog',
      apps: 'Apps',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      welcomeBadge: 'Welcome to my digital realm',
      taglineLead: 'Crafting digital experiences with modern technologies.',
      taglineHighlight: 'Passionate about creating innovative solutions that make a difference.',
      roles: [
        'Full Stack Developer',
        'Creative Technologist',
        'Problem Solver',
        'Code Architect',
        'Digital Innovator',
      ],
      ctaWork: 'View My Work',
      ctaContact: 'Get In Touch',
      scrollPrompt: 'Scroll to explore',
    },
    about: {
      title: 'About Me',
      subtitle: "Passionate developer with a love for creating innovative solutions and pushing the boundaries of what's possible with code.",
      skillsHeading: 'Technical Expertise',
      experienceBadge: 'Experience',
    },
    experiences: {
      title: 'Professional Journey',
      subtitle: "A timeline of my professional growth and the impactful projects I've contributed to across different organizations.",
      present: 'Present',
      technologiesUsed: 'Technologies Used',
      month: 'month',
      months: 'months',
      year: 'year',
      years: 'years',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A showcase of my recent work, spanning web applications, AI solutions, and open source contributions.',
      filters: {
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        ai: 'AI & ML',
      },
      featuredBadge: 'Featured',
      viewProject: 'View Project',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      teamSize: 'Team Size',
      teamMembers: 'member(s)',
      viewAllGithub: 'View All Projects on GitHub',
    },
    blog: {
      title: 'Blog & Insights',
      subtitle: 'Thoughts, tutorials, and insights about web development, technology trends, and best practices.',
      searchPlaceholder: 'Search articles...',
      allTag: 'All',
      readTime: 'min read',
      readArticle: 'Read article',
      featuredBadge: 'Featured',
      noResults: 'No articles found matching your criteria.',
      backToBlog: 'Back to Blog',
      backToHome: 'Back to Home',
      shareArticle: 'Share this post',
    },
    appsPage: {
      title: 'Apps',
      subtitle: 'A collection of useful tools that run directly in your browser.',
      searchPlaceholder: 'Search apps by name, description, or tag...',
      launchApp: 'Launch app',
      noAppsFound: 'No apps found',
      noAppsFoundDesc: 'Try a different name, description, or tag.',
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.",
      getInTouch: 'Get in Touch',
      getInTouchDesc: "I'm always excited to work on new projects and collaborate with talented people. Whether you have a specific project in mind or just want to connect, feel free to reach out.",
      connectWithMe: 'Connect with me',
      infoLabels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      form: {
        name: 'Your Name',
        namePlaceholder: 'John Doe',
        email: 'Your Email',
        emailPlaceholder: 'john@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Project Discussion',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
      },
    },
    footer: {
      tagline: 'Designing and engineering high-impact web and mobile experiences with passion.',
      quickLinksTitle: 'Quick Links',
      connectTitle: 'Connect',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    switcher: {
      current: 'EN',
      togglePrompt: 'Chuyển sang Tiếng Việt',
      ariaLabel: 'Switch language to Vietnamese',
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Về tôi',
      experiences: 'Kinh nghiệm',
      projects: 'Dự án',
      blog: 'Bài viết',
      apps: 'Ứng dụng',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: 'Xin chào, mình là',
      welcomeBadge: 'Chào mừng bạn đến với thế giới số của mình',
      taglineLead: 'Kiến tạo trải nghiệm số với các công nghệ hiện đại.',
      taglineHighlight: 'Đam mê xây dựng các giải pháp sáng tạo tạo nên sự khác biệt.',
      roles: [
        'Lập trình viên Full Stack',
        'Kỹ sư giải pháp',
        'Người giải quyết bài toán',
        'Kiến trúc sư phần mềm',
        'Đổi mới công nghệ',
      ],
      ctaWork: 'Khám phá dự án',
      ctaContact: 'Liên hệ ngay',
      scrollPrompt: 'Cuộn xuống để xem thêm',
    },
    about: {
      title: 'Về tôi',
      subtitle: 'Lập trình viên đam mê kiến tạo những giải pháp đột phá và khám phá giới hạn của công nghệ.',
      skillsHeading: 'Kỹ năng chuyên môn',
      experienceBadge: 'Kinh nghiệm',
    },
    experiences: {
      title: 'Hành trình sự nghiệp',
      subtitle: 'Dấu mốc phát triển sự nghiệp và những dự án ý nghĩa mà mình đã đóng góp qua từng tổ chức.',
      present: 'Hiện tại',
      technologiesUsed: 'Công nghệ sử dụng',
      month: 'tháng',
      months: 'tháng',
      year: 'năm',
      years: 'năm',
    },
    projects: {
      title: 'Dự án nổi bật',
      subtitle: 'Tổng hợp các dự án tiêu biểu gần đây của mình, từ ứng dụng web, giải pháp AI cho đến các tiện ích mã nguồn mở.',
      filters: {
        all: 'Tất cả',
        web: 'Web',
        mobile: 'Di động',
        ai: 'AI & Học máy',
      },
      featuredBadge: 'Nổi bật',
      viewProject: 'Xem dự án',
      liveDemo: 'Bản chạy thử',
      sourceCode: 'Mã nguồn',
      teamSize: 'Quy mô đội ngũ',
      teamMembers: 'thành viên',
      viewAllGithub: 'Xem tất cả dự án trên GitHub',
    },
    blog: {
      title: 'Bài viết & Chia sẻ',
      subtitle: 'Những góc nhìn, hướng dẫn kỹ thuật và đúc kết thực tế về lập trình web, xu hướng công nghệ và best practices.',
      searchPlaceholder: 'Tìm kiếm bài viết...',
      allTag: 'Tất cả',
      readTime: 'phút đọc',
      readArticle: 'Đọc tiếp',
      featuredBadge: 'Nổi bật',
      noResults: 'Không tìm thấy bài viết phù hợp.',
      backToBlog: 'Quay lại danh sách blog',
      backToHome: 'Về trang chủ',
      shareArticle: 'Chia sẻ bài viết',
    },
    appsPage: {
      title: 'Ứng dụng & Tiện ích',
      subtitle: 'Bộ sưu tập các công cụ hữu ích chạy trực tiếp trên trình duyệt của bạn.',
      searchPlaceholder: 'Tìm ứng dụng theo tên, mô tả hoặc thẻ...',
      launchApp: 'Mở ứng dụng',
      noAppsFound: 'Không tìm thấy ứng dụng',
      noAppsFoundDesc: 'Thử tìm kiếm với từ khóa, mô tả hoặc thẻ khác.',
    },
    contact: {
      title: 'Cùng hợp tác nhé!',
      subtitle: 'Bạn đang ấp ủ một dự án thú vị hay đơn giản chỉ muốn giao lưu học hỏi? Hãy kết nối với mình nhé.',
      getInTouch: 'Kết nối trực tiếp',
      getInTouchDesc: 'Mình luôn hào hứng tham gia các dự án mới và hợp tác cùng những người bạn tài năng. Dù bạn có dự án cụ thể hay chỉ muốn kết nối, đừng ngần ngại liên hệ nhé.',
      connectWithMe: 'Kết nối với mình',
      infoLabels: {
        email: 'Email',
        phone: 'Điện thoại',
        location: 'Khu vực',
      },
      form: {
        name: 'Họ và tên của bạn',
        namePlaceholder: 'Nguyễn Văn A',
        email: 'Địa chỉ Email',
        emailPlaceholder: 'you@example.com',
        subject: 'Tiêu đề trao đổi',
        subjectPlaceholder: 'Trao đổi về dự án...',
        message: 'Nội dung tin nhắn',
        messagePlaceholder: 'Chia sẻ chi tiết dự án hoặc câu hỏi của bạn tại đây...',
        send: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        success: 'Tin nhắn đã được gửi thành công!',
      },
    },
    footer: {
      tagline: 'Kiến tạo và phát triển các sản phẩm công nghệ chất lượng cao với tất cả đam mê.',
      quickLinksTitle: 'Liên kết nhanh',
      connectTitle: 'Kết nối',
      rights: 'Bảo lưu mọi quyền.',
      backToTop: 'Lên đầu trang',
    },
    switcher: {
      current: 'VI',
      togglePrompt: 'Switch to English',
      ariaLabel: 'Chuyển sang Tiếng Anh',
    },
  },
};

export function getTranslations(locale: Locale = 'en'): Translations {
  return translations[locale] || translations.en;
}
