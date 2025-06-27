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
    title: "Next-Gen E-commerce",
    description: "A headless e-commerce platform with a focus on performance, using Next.js, GraphQL, and Stripe for a modern shopping experience.",
    tags: ["Next.js", "GraphQL", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "online store",
  },
  {
    id: 2,
    title: "Real-time Collab Whiteboard",
    description: "A collaborative whiteboard application built with Liveblocks and Next.js for real-time interaction and creativity.",
    tags: ["Next.js", "Liveblocks", "Real-time", "Shadcn UI"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "collaboration design",
  },
  {
    id: 3,
    title: "AI-Powered Content Generator",
    description: "A SaaS platform that leverages Genkit and Gemini to generate high-quality marketing copy and blog posts automatically.",
    tags: ["GenAI", "Genkit", "SaaS", "Next.js"],
    githubUrl: "https://github.com/",
    image: "https://placehold.co/600x400.png",
    imageHint: "ai writing",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "An analytics dashboard for visualizing complex datasets, built with D3.js and React. Features interactive charts and graphs.",
    tags: ["React", "D3.js", "Data Viz", "API"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "charts graphs",
  },
  {
    id: 5,
    title: "Dev Community Platform",
    description: "A full-stack community platform for developers to ask questions, share projects, and connect with peers. Built with the T3 Stack.",
    tags: ["T3 Stack", "Next.js", "tRPC", "Prisma"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "social network",
  },
  {
    id: 6,
    title: "Cloud Storage Solution",
    description: "A secure and scalable cloud storage service similar to Dropbox, built using Go for the backend and React for the frontend.",
    tags: ["Go", "React", "Cloud", "API"],
    githubUrl: "https://github.com/",
    image: "https://placehold.co/600x400.png",
    imageHint: "cloud storage",
  },
];

export const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
