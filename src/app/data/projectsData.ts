import { Project } from "../types/portfolio";

export const projectsData: Project[] = [
  {
  id: "vines-and-views",
  title: "Vines & Views — Organic Gardening & Horticulturist Hub",
  shortDescription: "A modern, community-driven organic gardening, horticulture blog, and botanist platform with AI generation, guide summaries, and engagement analytics.",
  image: "/vinesandviews.png",
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript 5",
    "Tailwind CSS v4",
    "Framer Motion",
    "MongoDB",
    "Better Auth",
    "Vercel AI SDK",
    "Google Gemini API",
    "Lucide React",
    "React Toastify"
  ],
  fullDescription: "Vines & Views empowers gardeners, organic horticulturists, and plant enthusiasts to document cultivation journeys, discover eco-friendly growing techniques, generate AI-powered articles, summarize complex guides, and analyze engagement metrics via a personalized dashboard. It features an organic community feed with real-time searching and filtering, an AI article summarizer via Google Gemini, an AI post generator, and an executive profile activity overview.",
  liveLink: "https://vines-and-views.onrender.com/",
  githubLink: "https://github.com/masumb30/vines-and-views.git",
  challenges: [
    "Implementing real-time filtering, instant search, and client/server paginated grid performance without sacrificing browsing capacity.",
    "Integrating Google Gemini AI via the Vercel AI SDK for dual asynchronous tasks: full article generation and instant summaries within modal drawers."
  ],
  futureImprovements: [
    "Enhance multi-language support for international plant enthusiasts and regional botanical terminology.",
    "Expand offline-first features for horticulturists documenting plant growth without active internet connections."
  ]
},
{
  id: "bitecraft",
  title: "BiteCraft — Premium Community-Based Meal-Prep & Local Chef Marketplace",
  shortDescription: "A high-fidelity Next.js web application connecting local culinary artists with health-conscious individuals for custom meal-prep, local orders, and kitchen management.",
  image: "/bitecraft.png",
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript 5",
    "Tailwind CSS v4",
    "MongoDB",
    "Better Auth",
    "Framer Motion",
    "React Toastify",
    "Stripe"
  ],
  fullDescription: "BiteCraft enables independent chefs to monetize their talents, manage custom menus, and handle orders, while allowing users to explore local meal-prep options, filter by dietary requirements, and order fresh, ready-to-eat gastronomy. It features dynamic marketplace exploration with portion calculation calculators, role-based dashboards for chefs and customers, automated mock data seeding tools, and a secure server-side proxy for role protection.",
  liveLink: "https://bitecraft-wleh.onrender.com/",
  githubLink: "https://github.com/masumb30/bitecraft",
  challenges: [
    "Ensuring strict role-based authorization and session security across server-side route guards and protected dashboard paths using Better Auth and custom middleware proxy logic.",
    "Handling dynamic order fulfillment pipelines and inventory state transitions in real time via high-concurrency MongoDB operations."
  ],
  futureImprovements: [
    "Stripe checkout integration for fully functional credit card and mobile wallet payment sessions.",
    "Real-time WebSockets-based messaging between customers and preparing chefs.",
    "Interactive geographic distance calculation maps to match chefs and users based on exact neighborhood proximity.",
    "Automatic recurring weekly subscription plans for scheduled meal prep deliveries."
  ]
},
{
  id: "rentease",
  title: "RentEase — Property Rental & Booking Platform",
  shortDescription: "A modern, responsive property rental and booking platform bridging the gap between property owners listing rentals and tenants seeking seamless discovery, booking, and online payments.",
  image: "/rentease.png",
  techStack: [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "DaisyUI",
    "Better Auth",
    "Framer Motion",
    "Recharts",
    "Stripe",
    "Lucide React"
  ],
  fullDescription: "RentEase provides an end-to-end rental experience featuring a dynamic landing page, backend-driven search and filtering, and secure Stripe payment processing. It includes role-based dashboards for tenants (booking tracking, favorites, reviews), owners (revenue line charts via Recharts, listing creation, booking approvals), and admins (user moderation, property moderation with feedback notes, transaction auditing).",
  liveLink: "https://rental-frontend-26fc.onrender.com/",
  githubLink: "https://github.com/masumb30/rental-frontend",
  challenges: [
    "Implementing role-based access control (RBAC) across three distinct user workflows (Tenant, Owner, Admin) with granular route and modal permissions.",
    "Integrating Stripe tokenized payments while maintaining real-time transaction auditing and property booking status synchronization."
  ],
  futureImprovements: [
    "Add real-time messaging between tenants and property owners for instant inquiry resolution.",
    "Incorporate interactive map integration (e.g., Mapbox/Google Maps) for location-based property searching."
  ]
}
  
];