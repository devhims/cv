import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Himanshu Gupta",
  initials: "HG",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Senior Full-Stack Engineer building AI-powered web solutions with an emphasis on clean architecture and user experience.",
  summary: (
    <>
      React / Next.js specialist with 6+ years of experience building
      production-grade frontends, serverless APIs, and AI-powered features.
      Skilled in integrating generative AI APIs like OpenAI and Cloudflare
      Workers AI into real-world applications. Trusted technical architect and
      mentor with a calm, problem-solving mindset — known for translating
      complex problems into understandable, practical solutions.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/17825870?v=4",
  personalWebsiteUrl: "https://www.devhims.com/",
  contact: {
    email: "contact@devhims.com",
    tel: "+918587005433",
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
      company: "Immersive Realities",
      badges: ["Remote", "React", "Next.js", "AI", "WebAR", "RAG"],
      title: "Senior Software Engineer",
      start: "2021",
      end: "2024",
      description: (
        <>
          <ul className="list-disc pl-5">
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
          <ul className="list-disc pl-5">
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
          <ul className="list-disc pl-5">
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
      badges: ["Mentoring", "Code Review"],
      title: "Mentor and Project Reviewer",
      start: "2016",
      end: "2019",
      description: (
        <>
          <ul className="list-disc pl-5">
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
    "System Architecture",
    "Remote Team Leadership",
    "Generative AI",
    "Postgres",
    "RAG",
    "Cloudflare Workers",
  ],
  projects: [
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
      title: "Whisper NextJS Sample",
      techStack: ["Next.js", "TypeScript", "OpenAI", "Speech-to-Text"],
      description:
        "Sample Next.js project showcasing real-time speech-to-text conversion using OpenAI&apos;s Whisper API",
      link: {
        label: "github.com/devhims/whisper-nextjs-sample",
        href: "https://github.com/devhims/whisper-nextjs-sample",
      },
    },
    {
      title: "Hono D1 Drizzle Template",
      techStack: ["Hono.js", "Cloudflare D1", "Drizzle ORM", "Edge API"],
      description:
        "A modern template for building REST APIs using Hono.js, Cloudflare D1, and Drizzle ORM, providing a robust foundation for building scalable applications on Cloudflare's edge network.",
      link: {
        label: "github.com/devhims/hono-d1-drizzle",
        href: "https://github.com/devhims/hono-d1-drizzle",
      },
    },
    {
      title: "React 8thWall A-Frame",
      techStack: ["React", "WebAR", "8thWall", "A-Frame"],
      description:
        "A lightweight package to integrate 8th Wall WebAR capabilities into React applications, making it easier to create engaging WebAR experiences with simplified script management.",
      link: {
        label: "github.com/devhims/react-8thwall-aframe",
        href: "https://github.com/devhims/react-8thwall-aframe",
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
