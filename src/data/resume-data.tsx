import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Himanshu Gupta",
  initials: "HG",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Senior Full-Stack Engineer (Frontend-focused) delivering AI-powered web solutions with an emphasis on clean architecture and user experience.",
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
      badges: ["Remote", "React", "Next.js", "AI", "WebAR", "RAG", "3D"],
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
              up-skill and get help from others in the field.
            </li>
            <li>Hosted 8 events and maintained an active WhatsApp group.</li>
            <li>Built and managed the community through Meetup platform.</li>
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
      techStack: ["TypeScript", "Node.js", "npm package"],
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
  ],
} as const;
