import { Project } from "../types/portfolio";

export const projectsData: Project[] = [
  {
    id: "nexus-ecom",
    title: "Nexus Commerce Platform",
    shortDescription: "A high-performance full-stack e-commerce dashboard with real-time analytics and inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    fullDescription: "Nexus Commerce is a modern e-commerce solution engineered for speed and conversion. It features real-time inventory synchronization, dynamic server-side rendering for product pages, optimized image delivery, and a seamless checkout experience with Stripe webhooks.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/nexus-commerce-client",
    challenges: [
      "Managing complex state across nested shopping cart items without causing excessive re-renders.",
      "Ensuring transactional consistency for high-volume inventory purchases using database locks."
    ],
    futureImprovements: [
      "Implement AI-powered product recommendations based on user browsing history.",
      "Add multi-currency localization support with automated exchange rate conversion."
    ]
  },
  {
    id: "taskify-pm",
    title: "Taskify - Kanban Project Manager",
    shortDescription: "Interactive Kanban task management tool with drag-and-drop support and real-time collaboration.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Node.js", "Socket.io"],
    fullDescription: "Taskify streamlines project workflows for remote teams. It includes customizable Kanban boards, drag-and-drop task organization, deadline alerts, priority flags, and instant sync across connected users.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/taskify-client",
    challenges: [
      "Handling smooth drag-and-drop animations without performance hits on mobile views.",
      "Resolving race conditions when two users update the same task board simultaneously."
    ],
    futureImprovements: [
      "Add automated Slack and Discord webhook notifications.",
      "Build a native desktop client wrapper using Electron."
    ]
  },
  {
    id: "devpulse-blog",
    title: "DevPulse - Tech Community Hub",
    shortDescription: "A developer-centric blogging and community platform with markdown editing and syntax highlighting.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth.js"],
    fullDescription: "DevPulse provides a distraction-free platform for developer content creators. It features live markdown previews, code block highlighting, comment threads, and user bookmarking.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/devpulse-client",
    challenges: [
      "Securing user-generated markdown against XSS attacks while maintaining high rendering speed.",
      "Structuring MongoDB indices for efficient article tagging and search execution."
    ],
    futureImprovements: [
      "Add voice audio playback for published articles using AI text-to-speech.",
      "Implement a full dark/light theme switchable layout engine."
    ]
  }
];