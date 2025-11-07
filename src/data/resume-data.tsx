import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

{
  /* <>
React / Next.js specialist with 6+ years of experience building production-grade frontends, serverless APIs, and AI-powered features. Skilled in architecting scalable, low latency platforms on edge computing environments such as Cloudflare Workers, with expertise in browser automation, real-time data extraction, and secure API design. Experienced in delivering complete solutions from system architecture to product launch, while integrating generative AI into practical, high impact applications. Trusted technical architect and mentor with a calm, problem solving mindset, known for translating complex challenges into elegant and maintainable solutions.
</> */
}

export const RESUME_DATA = {
  name: "Himanshu Gupta",
  initials: "HG",
  location: "Bengaluru, India", // Kuala Lumpur, Malaysia // Bengaluru, India
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Senior Full-Stack Engineer building AI-powered solutions with an emphasis on clean architecture and user experience.",
  summary: (
    <>
      I’m a full-stack engineer focused on the intersection of AI and web
      systems. Over the past 8 years, I’ve worked across React, Next.js,
      Node.js, TypeScript, and Cloudflare’s edge stack, designing and deploying
      production-grade systems that blend frontend design with backend
      scalability. My work often involves building retrieval and reasoning
      pipelines (RAG), integrating LLMs and tools, and building agentic systems.
      I built WebLinq, a distributed browser automation and data-extraction
      platform that runs entirely on Cloudflare Workers and turns web into an
      API layer. I care about clarity, performance, and reliability —
      translating complex ideas into clean, maintainable systems that scale.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/17825870?v=4",
  personalWebsiteUrl: "https://www.devhims.com/",
  contact: {
    email: "contact@devhims.com",
    tel: "+918587005433", // +918587005433 // +60174177644
    social: [
      {
        name: "GitHub",
        url: "https://github.com/devhims",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/creativehims/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/devhims",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Delhi Technological University",
      degree: "B.tech Engineering Physics",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "WebLinq",
      badges: ["Cloudflare", "AI", "Web Scraping", "Browser Automation"],
      title: "Founder and Platform Engineer",
      start: "2025",
      end: "Present",
      description: (
        <>
          <ul className="space-y-1/2 list-disc pl-5">
            <li>
              Created WebLinq, a Cloudflare workers based web scraping and
              browser automation platform for real-time data access by
              developers and AI systems.
            </li>
            <li>
              Implemented intelligent browser session reuse via Durable Objects
              for efficient session reuse and performance optimization.
            </li>
            <li>
              Built a secure API key system with endpoints for search,
              screenshots, HTML/Markdown/PDF extraction, and MCP integration.
            </li>
            <li>
              Developed a Next.js dashboard and docs site for visual API
              interaction and quick onboarding.
            </li>
            <li>
              Oversaw the full product lifecycle from architecture to launch on
              Product Hunt.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Immersive Realities",
      badges: ["Remote", "React", "Next.js", "AI", "WebAR", "RAG"],
      title: "Senior Software Engineer",
      start: "2021",
      end: "2024",
      description: (
        <>
          <ul className="space-y-1/2 list-disc pl-5">
            <li>
              Built a RAG based &quot;Chat with Documents&quot; AI web
              application, enabling secure and efficient document storage,
              retrieval, and Q&A functionality.
            </li>
            <li>
              Developed WebAR projects for brand promotion and educational
              purposes using 8thWall and WebXR.
            </li>
            <li>
              Created and launched &quot;Gizmo,&quot; a 3D model viewer and
              editor platform that enables developers to quickly evaluate model
              performance and rendering on mobile devices.
            </li>
            <li>
              Involved in the development of the Appearition Web SDK and created
              samples to demonstrate the platform&apos;s capabilities.
            </li>
            <li>
              Led code reviews and refined software architecture to ensure
              scalable and maintainable solutions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Cosmoreal",
      badges: ["AR/VR", "Unity", "Mobile Development", "Entrepreneurship"],
      title: "Founder and Lead Developer",
      start: "2020",
      end: "2021",
      description: (
        <>
          <ul className="space-y-1/2 list-disc pl-5">
            <li>
              Developed an AR-based mobile app that understands space, offering
              a true-to-life experience for furniture visualization and interior
              design.
            </li>
            <li>
              Advised top builders and office spaces on running XR-based
              marketing campaigns.
            </li>
            <li>
              Led full-stack development of company website and client projects
              focusing on AR/VR solutions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Unity",
      badges: ["Community Management", "Event Organization"],
      title: "Co-organizer Unity Bangalore Community",
      start: "2019",
      end: "2021",
      description: (
        <>
          <ul className="space-y-/2 list-disc pl-5">
            <li>
              Provided a platform for indie Unity developers and artists to
              upskill, collaborate, and seek mentorship.
            </li>
            <li>
              Organized 8 developer events and maintained long-term engagement
              through the Meetup platform.
            </li>
            <li>
              Curated event content and coordinated speakers, ensuring each
              session delivered technical value to the community.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Udacity",
      badges: ["Mentorship", "Code Review"],
      title: "Mentor and Project Reviewer",
      start: "2016",
      end: "2019",
      description: (
        <>
          <ul className="space-y-1/2 list-disc pl-5">
            <li>
              Reviewed over 1500 student projects for Virtual Reality, Digital
              Marketing, and Android Basics programs with an average rating of
              4.95/5.
            </li>
            <li>
              Established code best practices, ensuring students wrote clean and
              maintainable code, aligning with industry trends.
            </li>
            <li>
              Trained new mentors and fostered a collaborative environment in
              the mentor community.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Generative AI",
    "Postgres",
    "RAG",
    "Agents",
    "AI SDK",
    "API Design",
    "Cloudflare",
    "System Architecture",
  ],
  projects: [
    {
      title: "WebLinq",
      techStack: [
        "Cloudflare Workers",
        "Next.js",
        "Web Scraping",
        "Browser Automation",
      ],
      description:
        "High-performance web scraping and browser automation platform built on Cloudflare Workers. Features include intelligent browser session reuse, real-time data extraction, secure API key management, and a full API suite for search, screenshots, and content extraction.",
      link: {
        label: "weblinq.dev",
        href: "https://github.com/devhims/weblinq",
      },
    },
    {
      title: "YouTube Caption Extractor",
      techStack: ["TypeScript", "Node.js", "NPM package"],
      description:
        "A lightweight package to scrape and parse captions (subtitles) from YouTube videos, supporting both user-submitted and auto-generated captions with language options.",
      link: {
        label: "github.com/devhims/youtube-caption-extractor",
        href: "https://github.com/devhims/youtube-caption-extractor",
      },
    },

    {
      title: "Mermaid Agent",
      techStack: ["Next.js", "TypeScript", "OpenAI", "AI SDK", "Mermaid.js"],
      description:
        "A modern Mermaid diagram editor with agentic error fixing and export capabilities. Built for developers and designers who want real-time AI-assisted diagram creation, validation, and professional-grade exports.",
      link: {
        label: "github.com/devhims/mermaid-agent",
        href: "https://github.com/devhims/mermaid-agent",
      },
    },

    {
      title: "OpenGPT",
      techStack: ["OpenNext", "AI SDK", "Cloudflare Workers AI"],
      description:
        "Experiment with 50+ open-source AI models, including GPT-OSS, Leonardo, Llama, Qwen, Gemini, DeepSeek, and more. Features text-to-speech with multiple voices and real-time speech-to-text transcription.",
      link: {
        label: "github.com/devhims/opengpt",
        href: "https://github.com/devhims/opengpt",
      },
    },

    {
      title: "Model Viewer React",
      techStack: ["React", "Three.js", "WebAR", "3D"],
      description:
        "Reusable React components and layouts to streamline WebAR and 3D model workflows. Based on the model-viewer component for 3D model visualization.",
      link: {
        label: "github.com/devhims/model-viewer-react",
        href: "https://github.com/devhims/model-viewer-react",
      },
    },

    {
      title: "3D Web Editor",
      techStack: ["Next.js", "Three.js", "React Three Fiber", "Chakra UI"],
      description:
        "A web-based 3D editor for viewing, optimizing, and sharing 3D models. Features include model optimization, performance metrics, and QR code generation for easy sharing.",
      link: {
        label: "github.com/devhims/3d-web-editor",
        href: "https://github.com/devhims/3d-web-editor",
      },
    },
  ],
} as const;
