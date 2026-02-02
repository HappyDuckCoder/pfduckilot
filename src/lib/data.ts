export const BlogBoxDummyData = [
  {
    id: "1",
    name: "Microsoft",
    title: "Developing Solutions for Microsoft Azure",
    description:
      "Blog about the Developing Solutions for Microsoft Azure course.",
    image: "/blog/azure.png",
  },
  {
    id: "2",
    name: "Perplexity AI",
    title: "A new AI researcher for better insights",
    description: "Best discoveries and insights about Perplexity AI.",
    image: "/blog/perplexity.png",
  },
  {
    id: "3",
    name: "Deep Learning D2L",
    title: "Perception in Deep Learning",
    description: "Concepts of perception in deep learning.",
    image: "/blog/perception.png",
  },
  {
    id: "4",
    name: "Deep Learning D2L",
    title: "Deep Learning calculation",
    description: "Computational concepts in deep learning.",
    image: "/blog/calculation.png",
  },
  {
    id: "5",
    name: "LlamaIndex",
    title: "Introduction to LlamaIndex framework",
    description: "Learn about LlamaIndex and its use cases.",
    image: "/blog/LlamaIndex.png",
  },
  {
    id: "6",
    name: "Relational SQL",
    title: "Relational algebra and MS SQL syntax",
    description: "Self-study notes on SQL fundamentals.",
    image: "/blog/sql.jpg",
  },
  {
    id: "7",
    name: "HappyDuckCoder",
    title: "Using Ollama to train on personal data",
    description:
      "How to build a chatbot that understands your personal database.",
    image: "/blog/ollama.png",
  },
  {
    id: "8",
    name: "HappyDuckCoder",
    title: "RAG, AI agent & AI Agentic",
    description: "Overview of RAG, AI agents, and agentic systems.",
    image: "/blog/aiagent.jpg",
  },
  {
    id: "9",
    name: "HappyDuckCoder",
    title: "What you need to know about UX/UI",
    description: "Core concepts and laws in UX/UI design.",
    image: "/blog/UXUI.webp",
  },
  {
    id: "10",
    name: "HappyDuckCoder",
    title: "AI Personality",
    description:
      "What automation AI is and how to build a basic example step by step.",
    image: "/blog/AIPersonal.webp",
  },
  {
    id: "11",
    name: "HappyDuckCoder",
    title: "Crawl data",
    description: "Interesting aspects of web scraping and data crawling.",
    image: "/blog/crawl-data.jpg",
  },
  {
    id: "12",
    name: "HappyDuckCoder",
    title: "Crawl data with BeautifulSoup",
    description: "How to crawl data using BeautifulSoup.",
    image: "/blog/beautifulSoup.jpg",
  },
  {
    id: "13",
    name: "HappyDuckCoder",
    title: "TensorAI",
    description: "Introduction to TensorAI and its capabilities.",
    image: "/blog/OIP.jpg",
  },
  {
    id: "14",
    name: "HappyDuckCoder",
    title: "Project Manager",
    description: "Basic methods and tools for being a project manager.",
    image: "/blog/PM.jpg",
  },
];

const PLACEHOLDER_IMAGE = (id: number) =>
  `https://picsum.photos/seed/${id}/800/600`;

export const projects = [
  {
    id: 1,
    title: "celebrate83project",
    description:
      "A fun project that generates personalized messages and images to celebrate International Women's Day (March 8th). Built with TypeScript.",
    techStack: ["TypeScript", "Motion-framer", "Groq API", "Liveblocks"],
    image: PLACEHOLDER_IMAGE(1),
    link: "https://github.com/HappyDuckCoder/celebrate83project",
  },
  {
    id: 2,
    title: "pfduckilot",
    description:
      "Personal portfolio and project showcase. TypeScript-based web application.",
    techStack: ["TypeScript", "React", "Next.js"],
    image: PLACEHOLDER_IMAGE(2),
    link: "https://github.com/HappyDuckCoder/pfduckilot",
  },
  {
    id: 3,
    title: "AIRushHour (RushRelic)",
    description:
      "AI RushHour remake game—intelligent puzzle game powered by AI. Built with Python.",
    techStack: ["Python", "AI", "Game"],
    image: PLACEHOLDER_IMAGE(3),
    link: "https://github.com/HappyDuckCoder/AIRushHour",
  },
  {
    id: 4,
    title: "IOTFRIDGE",
    description:
      "IoT bridge project for connecting and managing IoT devices. Implemented in C++.",
    techStack: ["C++", "IoT"],
    image: PLACEHOLDER_IMAGE(4),
    link: "https://github.com/HappyDuckCoder/IOTFRIDGE",
  },
  {
    id: 5,
    title: "cpp_Game_TowerDefense",
    description:
      "Tower Defense game—OOP project at HCMUS. Classic tower defense mechanics in C++.",
    techStack: ["C++", "OOP", "Game"],
    image: PLACEHOLDER_IMAGE(5),
    link: "https://github.com/ariesanhthu/cpp_Game_TowerDefense",
  },
  {
    id: 6,
    title: "freecodecampCertificateAPI",
    description:
      "API and tooling around FreeCodeCamp certificates. Built with JavaScript.",
    techStack: ["JavaScript", "API"],
    image: PLACEHOLDER_IMAGE(6),
    link: "https://github.com/HappyDuckCoder/freecodecampCertificateAPI",
  },
];
