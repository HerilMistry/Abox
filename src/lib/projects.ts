export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  imageHint: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe for payments, and Prisma for database management. Focuses on performance and user experience.",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "Material UI"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "ecommerce shopping",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates using Firebase. Drag-and-drop interface for easy task organization.",
    tags: ["React", "Firebase", "Material UI", "Real-time"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "kanban board",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and experience. Built with Astro for speed and simplicity.",
    tags: ["Astro", "Tailwind CSS", "Static Site"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "portfolio design",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot using OpenAI's API to provide customer support. Integrated with a custom dashboard for conversation analysis.",
    tags: ["React", "Next.js", "GenAI", "OpenAI"],
    githubUrl: "https://github.com/",
    image: "https://placehold.co/600x400.png",
    imageHint: "ai chatbot",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A clean and modern weather dashboard that provides real-time weather data for any location, using a third-party weather API.",
    tags: ["React", "API", "Material UI"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "weather map",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A web application to discover and save recipes. Features advanced search and filtering capabilities. Built with Vue.js and a public recipe API.",
    tags: ["Vue.js", "Tailwind CSS", "API"],
    githubUrl: "https://github.com/",
    image: "https://placehold.co/600x400.png",
    imageHint: "food recipe",
  },
];

export const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
