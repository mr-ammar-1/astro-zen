import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ammar Farooq — Full Stack Developer",
  author: "Ammar Farooq",
  description:
    "Full Stack Developer based in Lahore, Pakistan. I specialize in building modern web applications using MERN stack, Next.js, and TypeScript.",
  lang: "en",
  siteLogo: "/801.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/ammar-farooq207/" },
    { text: "Github", href: "https://github.com/mr-ammar-1" },
    { text: "Email", href: "mailto:ammarfarooq207@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ammar Farooq",
    specialty: "Full Stack Developer",
    summary:
      "Aspiring Full Stack developer based in Lahore, Pakistan with a strong passion for coding and building modern web applications. Proficient in JavaScript, TypeScript, and frameworks like Node.js, React.js, and Next.js.",
    email: "ammarfarooq207@gmail.com",
  },
  experience: [
    {
      company: "ML Bench (Pvt) Ltd",
      position: "MERN Stack Developer",
      startDate: "June 2025",
      endDate: "Present",
      summary: [
        "Developed full-stack web applications using Next.js, Tailwind CSS, and MongoDB, ensuring modern and scalable architecture that delivers optimal performance across all devices.",
        "Integrated third-party services including Stripe API for secure payment processing and Cloudinary for efficient media upload and management, enhancing application functionality and user experience.",
        "Built interactive UI components using Canvas API and implemented responsive design patterns, resulting in seamless user experiences across desktop, tablet, and mobile devices.",
        "Deployed scalable applications on Vercel with automated CI/CD pipelines and maintained clean version control using Git and GitHub, ensuring smooth collaboration and code quality.",
      ],
    },
    {
      company: "Magnatec Systems (Pvt) Ltd",
      position: "Junior Software Developer",
      startDate: "July 2022",
      endDate: "September 2022",
      summary: [
        "Assisted in developing enterprise-level web applications using .NET Core framework, contributing to robust backend solutions for business-critical operations.",
        "Collaborated with cross-functional teams to implement server-side logic and RESTful APIs, ensuring efficient data communication between client and server applications.",
        "Worked with SQL Server database schemas to design and optimize data storage solutions, improving query performance and data retrieval efficiency.",
        "Participated in code reviews and comprehensive testing cycles to ensure high standards of code quality, performance optimization, and long-term maintainability.",
      ],
    },
  ],
  projects: [
    {
      name: "Trending Topics Identification from Urdu Videos",
      summary: "A system that extracts and analyzes trending topics from Urdu YouTube videos using speech-to-text models and fine-tuned LLaMA 3.1 8B Instruct model.",
      linkPreview: "/",
      linkSource: "https://github.com/mr-ammar-1",
      image: "/spotifu.png",
    },
    {
      name: "E-Commerce Website",
      summary: "A full-featured e-commerce platform with product listing, cart management, secure checkout, and payment integration built using MERN stack.",
      linkPreview: "/",
      linkSource: "https://github.com/mr-ammar-1",
      image: "/shopify-clon.png",
    },
    {
      name: "Distributed Routing System",
      summary: "A distributed system for logistics route optimization using real-time data from Google Maps API for efficient delivery management.",
      linkPreview: "/",
      linkSource: "https://github.com/mr-ammar-1",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Ammar Farooq, a passionate Full Stack Developer based in Lahore, Pakistan. I recently graduated from the University of Engineering and Technology, Lahore with a BS in Computer Science (CGPA: 3.29/4.0).

      I specialize in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. My experience spans both frontend and backend development, with a strong focus on creating seamless user experiences and efficient server-side solutions.

      Throughout my journey, I've worked with various technologies including TypeScript, Tailwind CSS, and integrated services like Stripe and Cloudinary. I'm passionate about clean code, performance optimization, and staying updated with the latest web development trends. My projects range from AI-powered systems to full-featured e-commerce platforms, all built with attention to detail and user-centric design.
    `,
    image: "/801.jpg",
  },
};

// #5755ff