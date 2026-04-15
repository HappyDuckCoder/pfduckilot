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

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  role: string;
  category: string;
  timeline: string;
  status: "Completed" | "In Progress";
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  highlights: string[];
  outcomes: string[];
  contribution: string[];
  achievements: string[];
  teamSize: number;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Celebrate International Women's Day",
    description:
      "A web application that allows users to create personalized messages to celebrate International Women's Day (March 8th).",
    techStack: ["Liveblocks", "TypeScript", "Motion-framer", "Groq API"],
    image: "/projects/83.png",
    githubUrl: "https://github.com/HappyDuckCoder/celebrate83project",
    role: "Full-Stack Developer",
    category: "AI Web Experience",
    timeline: "2025",
    status: "Completed",
    overview:
      "A celebratory web experience that creates personalized wishes and visual cards for Women's Day using prompt-driven generation.",
    problem:
      "People wanted a quick and meaningful way to create personalized celebration content without design skills.",
    solution:
      "I built an interactive flow that combines templates, prompt processing, and real-time collaboration touches for sharing.",
    keyFeatures: [
      "Dynamic message generation",
      "Real-time interaction components",
      "Collaborative sharing functionality",
    ],
    highlights: [
      "Integrated Groq API for fast generation",
      "Used framer-motion for delightful transitions",
      "Implemented collaborative behaviors with Liveblocks",
    ],
    outcomes: [
      "Reduced content creation time for users",
      "Improved engagement through shareable outputs",
    ],
    contribution: [
      "Designed and implemented the end-to-end user flow",
      "Integrated AI generation and real-time collaboration modules",
      "Handled UI/UX polish for responsive interactions",
    ],
    achievements: [
      "Delivered a production-ready celebratory web experience",
      "Improved personalization quality with prompt-based generation",
      "Supported around 20 rooms with up to 300 concurrent online users.",
    ],
    teamSize: 5,
  },
  {
    id: 2,
    title: "AIRushHour (RushRelic)",
    description:
      "A remake of the AI RushHour game—intelligent puzzle game powered by AI.",
    techStack: ["Python", "AI", "Game"],
    image: "/projects/rushhour.png",
    githubUrl: "https://github.com/HappyDuckCoder/AIRushHour",
    role: "AI Developer",
    category: "Game AI",
    timeline: "2024",
    status: "Completed",
    overview:
      "An AI-powered reinterpretation of Rush Hour puzzle where algorithms assist in finding and evaluating optimal moves.",
    problem:
      "Players often get stuck and cannot understand efficient solving strategies.",
    solution:
      "I implemented search-based solving logic and visualized puzzle states to help compare manual and AI-assisted decisions.",
    keyFeatures: [
      "Intelligent move suggestion system",
      "Puzzle state representation and evaluation",
      "Interactive gameplay loop",
      "Algorithmic experimentation mode",
    ],
    highlights: [
      "Applied AI search techniques for puzzle solving",
      "Balanced game challenge and explainability",
      "Structured code for extensible levels",
    ],
    outcomes: [
      "Created a practical demo for AI in games",
      "Improved understanding of heuristic strategies",
    ],
    contribution: [
      "Built puzzle logic and AI-assisted solving pipeline",
      "Implemented state evaluation and gameplay interactions",
      "Optimized code structure for extensible levels",
    ],
    achievements: [
      "Completed a functional AI puzzle game prototype",
      "Demonstrated heuristic search in an interactive game setting",
    ],
    teamSize: 4,
  },
  {
    id: 3,
    title: "IOTFRIDGE",
    description:
      "IoT bridge project for connecting and managing IoT devices. Implemented in C++.",
    techStack: ["C++", "IoT"],
    image: "/projects/iot.png",
    githubUrl: "https://github.com/HappyDuckCoder/IOTFRIDGE",
    role: "Backend / Embedded Developer",
    category: "IoT System",
    timeline: "2024",
    status: "Completed",
    overview:
      "A device bridge layer that streamlines communication between IoT endpoints and management services.",
    problem:
      "IoT devices used inconsistent communication patterns, making integration difficult and fragile.",
    solution:
      "I built a C++ bridge service to standardize messaging and device control workflows.",
    keyFeatures: [
      "Device communication abstraction",
      "State synchronization",
      "Command routing pipeline",
      "Lightweight system architecture",
    ],
    highlights: [
      "Focused on reliability for constrained environments",
      "Designed modular handlers for extensibility",
      "Optimized core routines for stable performance",
    ],
    outcomes: [
      "Reduced integration complexity across devices",
      "Made control flow easier to debug and maintain",
    ],
    contribution: [
      "Implemented core C++ bridge layer for IoT communication",
      "Standardized command and state handling workflows",
      "Improved reliability for constrained runtime environments",
    ],
    achievements: [
      "Stabilized cross-device communication behavior",
      "Reduced maintenance effort through modular handlers",
    ],
    teamSize: 3,
  },
  {
    id: 4,
    title: "AI-Holyann (Holyann Explore)",
    description:
      "A full-stack guidance platform for students, mentors, and admins with role-based dashboards and subscription features.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    image: "/projects/Hoex.png",
    githubUrl: "https://github.com/AI-Holyann/AI-Holyann",
    role: "Full-Stack Developer",
    category: "EdTech Platform",
    timeline: "2025 - 2026",
    status: "In Progress",
    overview:
      "Holyann Explore supports career and study-abroad planning with dedicated experiences for students, mentors, and administrators.",
    problem:
      "Users in different roles need separate workflows, permissions, and navigation while sharing one unified system.",
    solution:
      "I structured the app with route groups, role-based redirects, modular dashboards, and reusable components for each user segment.",
    keyFeatures: [
      "Role-based authentication and dashboard routing",
      "Student, mentor, and admin workspaces",
      "Subscription and pricing flows",
      "Integrated support and chat-oriented modules",
    ],
    highlights: [
      "Designed maintainable App Router structure",
      "Implemented role-aware UX for three user groups",
      "Built scalable component architecture for future features",
    ],
    outcomes: [
      "Improved workflow clarity for each user role",
      "Established a strong base for product expansion",
    ],
    contribution: [
      "Developed role-based routing and dashboard structure",
      "Built reusable components across student/mentor/admin flows",
      "Contributed to subscription and pricing experience",
    ],
    achievements: [
      "Shipped a scalable multi-role platform architecture",
      "Improved navigational clarity for all user segments",
    ],
    teamSize: 3,
  },
  {
    id: 5,
    title: "Video Summarization (BiLSTM Multimodal)",
    description:
      "A supervised video summarization system using BiLSTM and temporal attention with visual and audio features.",
    techStack: ["Python", "PyTorch", "Whisper", "SentenceBERT"],
    image: "/projects/Video Summarize.png",
    githubUrl: "https://github.com/Computer-Vision-HCMUS/video-summarize",
    role: "Computer Vision Engineer",
    category: "AI & Computer Vision",
    timeline: "2025 - 2026",
    status: "Completed",
    overview:
      "A multimodal pipeline that predicts frame-level importance and generates concise summary videos with preserved audio.",
    problem:
      "Manual video review is time-consuming, and visual-only methods may miss important speech context.",
    solution:
      "I combined CNN visual embeddings with Whisper and SentenceBERT audio features, then trained a BiLSTM with temporal attention on SumMe/TVSum.",
    keyFeatures: [
      "Visual + audio feature extraction pipeline",
      "BiLSTM summarizer with temporal attention",
      "Shot-based keyframe selection with diversity control",
      "Streamlit demo for practical inference",
    ],
    highlights: [
      "Implemented multimodal training and inference flow",
      "Used ffmpeg export to preserve audio in summaries",
      "Added evaluation metrics for summary quality",
    ],
    outcomes: [
      "Generated concise and informative video summaries",
      "Improved summary relevance through multimodal cues",
    ],
    contribution: [
      "Implemented multimodal feature extraction (visual + audio)",
      "Developed training/inference pipeline with BiLSTM attention",
      "Built evaluation and demo flow for model outputs",
    ],
    achievements: [
      "Produced coherent summary videos with preserved audio",
      "Improved summary quality with shot-based diversity selection",
    ],
    teamSize: 2,
  },
  {
    id: 6,
    title: "TourismTogether",
    description:
      "A Next.js frontend for a social travel platform covering trips, destinations, diaries, forum, and safety features.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/projects/tourism.png",
    githubUrl: "https://github.com/TourismTogether/frontend",
    role: "Frontend Developer",
    category: "Travel Community Platform",
    timeline: "2025 - 2026",
    status: "In Progress",
    overview:
      "A community-driven travel web app focused on planning trips, sharing experiences, and connecting travelers through interactive modules.",
    problem:
      "Travelers need a single platform that combines planning, social interaction, and practical travel tools.",
    solution:
      "I contributed to a modular frontend architecture with App Router screens, responsive UI, and integrated BaaS support.",
    keyFeatures: [
      "Trip planning and itinerary management",
      "Destination exploration and reviews",
      "Travel diary and community forum",
      "Safety and weather-related UI modules",
    ],
    highlights: [
      "Built with modern Next.js and TypeScript stack",
      "Structured large feature set with scalable UI sections",
      "Integrated with Supabase-oriented workflows",
    ],
    outcomes: [
      "Improved user journey from planning to sharing",
      "Enabled team collaboration on a large frontend codebase",
    ],
    contribution: [
      "Contributed responsive UI modules for major travel features",
      "Helped structure scalable App Router-based frontend flows",
      "Integrated frontend behaviors with Supabase-oriented services",
    ],
    achievements: [
      "Delivered a maintainable frontend foundation for team development",
      "Improved consistency across multiple product modules",
    ],
    teamSize: 5,
  },
];

export interface ExperienceItem {
  id: number;
  icon: "education" | "current" | "previous";
  label: string;
  title: string;
  subtitle: string;
  period: string;
  status: string;
  location: string;
  description: string;
  contribution: string[];
  highlights: string[];
  skills: string[];
  color: "amber" | "emerald" | "violet";
  image: string;
}

export interface AwardItem {
  id: number;
  rank: number;
  title: string;
  org: string;
  year: string;
  category: string;
  role: string;
  summary: string;
  achievement: string;
  image: string;
}

export const experienceTimeline: ExperienceItem[] = [
  {
    id: 1,
    icon: "education",
    label: "Education",
    title: "University of Science, VNU-HCM (HCMUS)",
    subtitle: "BSc Computer Science - Computer Vision Track",
    period: "2023 - Present",
    status: "Third-year student",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Focused on AI and Computer Vision with strong foundations in algorithms, software engineering, and applied machine learning.",
    contribution: [
      "Built AI and web-based portfolio projects with end-to-end ownership",
      "Applied Computer Vision techniques in research-oriented prototypes",
      "Collaborated in technical competitions and team engineering tasks",
      "Designed modular components and reusable data-driven sections",
      "Documented project workflows and technical decisions for teammates",
    ],
    highlights: [
      "Built multiple AI and web-based projects",
      "Participated in technical competitions and team projects",
      "Applied CV knowledge to practical research prototypes",
    ],
    skills: ["Python", "OpenCV", "PyTorch", "Data Structures"],
    color: "amber",
    image: "/experiences/hcmus.jpg",
  },
  {
    id: 2,
    icon: "current",
    label: "Current",
    title: "OptimAI",
    subtitle: "AI Engineer - Full-stack Intern",
    period: "2026 - Present",
    status: "Active role",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Working on AI-driven product features, model integration, and rapid prototyping for intelligent user experiences.",
    contribution: [
      "Integrated LLM-powered features into existing product workflows",
      "Designed prompt and API orchestration for practical use cases",
      "Improved team iteration speed through reusable implementation patterns",
      "Implemented backend-to-frontend integration for AI outputs",
      "Contributed to debugging, QA checks, and release stabilization",
    ],
    highlights: [
      "Integrated AI services into product workflows",
      "Collaborated with cross-functional team members",
      "Improved iteration speed for AI feature experiments",
    ],
    skills: ["LLM Integration", "Prompt Engineering", "TypeScript", "APIs"],
    color: "emerald",
    image: "/experiences/optimai.png",
  },
  {
    id: 3,
    icon: "previous",
    label: "Previous",
    title: "Asoft",
    subtitle: "Software Developer Intern",
    period: "2026",
    status: "Completed internship",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Contributed to internal software modules and learned professional development practices in a product environment.",
    contribution: [
      "Implemented and maintained key modules in production codebase",
      "Participated in debugging and issue resolution with senior engineers",
      "Followed team standards across code review, Git flow, and delivery",
      "Wrote and refined SQL queries for core application features",
      "Improved UI consistency and responsiveness across internal pages",
    ],
    highlights: [
      "Implemented and maintained application features",
      "Worked with team coding standards and workflows",
      "Improved debugging and delivery discipline",
    ],
    skills: ["React", "Node.js", "SQL", "Git"],
    color: "violet",
    image: "/experiences/asoft.png",
  },
  {
    id: 4,
    icon: "current",
    label: "Current",
    title: "AI-Holyann (HOEX)",
    subtitle: "AI Engineer & Tech Lead",
    period: "2025 - Present",
    status: "Core team member",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Building Holyann Explore, a study-abroad guidance platform that helps students understand themselves, choose suitable majors, and plan long-term development.",
    contribution: [
      "Led technical direction and task distribution across the team",
      "Designed and implemented AI modules for profile analysis and recommendations",
      "Collaborated on full-stack features for student and counselor workflows",
      "Defined architecture decisions for scalable multi-role dashboard flows",
      "Supported testing, feedback loops, and iterative product improvement",
    ],
    highlights: [
      "Developed AI-first features for practical educational use cases",
      "Improved product structure for multi-role users (student, counselor, admin)",
      "Contributed to scalable architecture for long-term roadmap",
    ],
    skills: ["AI Engineering", "System Design", "Next.js", "TypeScript"],
    color: "emerald",
    image: "/experiences/hoex.png",
  },
];

export const experienceAwards: AwardItem[] = [
  {
    id: 1,
    rank: 1,
    title: "AI Innovation Competition",
    org: "HCMUS",
    year: "2024",
    category: "Applied AI",
    role: "IOT Hardware Engineer",
    summary:
      "Developed smart glasses for visually impaired users, supporting tasks such as hazard detection, pothole avoidance, and sharp-object alerts.",
    achievement:
      "Secured 1st place among student teams with strong technical execution and presentation.",
    image: "/experiences/highfive.jpg",
  },
  {
    id: 2,
    rank: 6,
    title: "SoictAI Challenge",
    org: "HCMUS",
    year: "2024",
    category: "AI & Application",
    role: "AI Engineer",
    summary:
      "Built an intelligent camera system to detect child abuse behaviors early and trigger timely alerts for protection.",
    achievement:
      "Reached Top 6 with a robust baseline and iterative model improvements.",
    image: "/experiences/soict.png",
  },
];
