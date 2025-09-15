# Portfolio Website

A modern, responsive portfolio website built with Next.js 13, React, TypeScript, and TailwindCSS. This repository serves both as my personal portfolio website and as an open-source template that others can use for their own portfolios.

> **Live Demo**: [larry.is-a.dev](https://larry.is-a.dev)

## About

This project is my personal portfolio website, but I've decided to make it open source to help other developers create their own portfolios. Feel free to use it as a template and customize it for your needs. If you find it helpful, please consider giving it a star ⭐!

## Features

- 🚀 Built with Next.js 13 App Router
- 💅 Styled with Tailwind CSS
- 📝 MDX for blog posts and project descriptions
- 🎨 Custom dark mode theme
- 🔍 Full-text search functionality
- 📱 Fully responsive design
- 🖼️ Image carousel component
- ✨ Custom cursor effects

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dlir2404/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To use this template for your own portfolio:

1. Replace content in `content/` directory:
   - Update `content/informations/info.ts` with your personal information
   - Add your own blog posts in `content/blogs/`
   - Add your projects in `content/projects/`

2. Customize the theme:
   - Modify colors in `tailwind.config.ts`
   - Update themes in `utils/themes/`
   - Customize components in `components/ui/`

3. Update images:
   - Replace `public/images/avatar.jpg` with your photo
   - Add your own project and blog images in respective directories

4. Deployment:
   - Deploy to Vercel (recommended) or your preferred hosting platform
   - Update the domain settings as needed

## Project Structure

```
app/                  # Next.js 13 app router pages
components/          # React components
content/            # MDX content for blogs and projects
hooks/              # Custom React hooks
lib/                # Utility functions and libraries
public/             # Static assets
types/              # TypeScript type definitions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js
- Tailwind CSS
- MDX
- React
- TypeScript