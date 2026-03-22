import {
  mobile,
  backend,
  creator,
  web,
  github,
  flutter,
  ai,
  health,
  sankalp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "GenAI & LLM Developer",
    icon: creator,
  },
  {
    title: "Backend & Cloud Engineer",
    icon: backend,
  },
  {
    title: "AI/NLP Specialist",
    icon: ai,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Flutter Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: backend,
  },
  {
    name: "JavaScript",
    icon: web,
  },
  {
    name: "Dart",
    icon: mobile,
  },
  {
    name: "SQL",
    icon: backend,
  },
  {
    name: "Flask",
    icon: backend,
  },
  {
    name: "FastAPI",
    icon: web,
  },
  {
    name: "TensorFlow",
    icon: creator,
  },
  {
    name: "HuggingFace",
    icon: ai,
  },
  {
    name: "PyTorch",
    icon: creator,
  },
  {
    name: "Scikit-learn",
    icon: backend,
  },
  {
    name: "Docker",
    icon: backend,
  },
  {
    name: "PostgreSQL",
    icon: backend,
  },
  {
    name: "Firebase",
    icon: web,
  },
  {
    name: "LangChain",
    icon: ai,
  },
  {
    name: "NLP / spaCy",
    icon: creator,
  },
  {
    name: "Flutter",
    icon: mobile,
  },
  {
    name: "React",
    icon: web,
  },
  {
    name: "Git",
    icon: backend,
  },
  {
    name: "IBM Cloud",
    icon: web,
  },
];

const experiences = [
  {
    title: "Project Volunteer – GenAI & Backend Engineering",
    company_name: "Gudsky Research Foundation",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Oct 2025 – Present",
    points: [
      "Architecting a GenAI-powered Webmail System integrating 5 open-source LLMs (Llama 3, Mistral 7B, Phi-3, Gemma 2) via HuggingFace Transformers and Ollama.",
      "Built secure REST APIs with Flask & PostgreSQL; multi-provider OAuth 2.0 (Gmail, Outlook) and IMAP/SMTP integration.",
      "Backend containerized with Docker + AES-256 credential encryption for GDPR compliance.",
      "Benchmarking LLM performance using BLEU/ROUGE metrics for email quality and inference speed.",
    ],
  },
  {
    title: "AI & Cloud Intern",
    company_name: "Edunet Foundation × IBM SkillsBuild",
    icon: ai,
    iconBg: "#383E56",
    date: "Jul 2025 – Aug 2025",
    points: [
      "Built a RAG (Retrieval-Augmented Generation) pipeline using IBM Granite, LangChain, and Milvus vector database.",
      "Implemented vector indexing, document chunking, and embedding pipelines on IBM Cloud.",
      "Earned IBM certifications: Machine Learning with Python, AI Fundamentals, and Journey to Cloud (Credly verified).",
      "Deployed and tested RAG systems for production-grade applications.",
    ],
  },
  {
    title: "Data Analysis Intern",
    company_name: "Sankalp Concepts",
    icon: sankalp,
    iconBg: "#E6DEDD",
    date: "Oct 2024 – Dec 2024",
    points: [
      "Led team of 5+ interns in conducting data analysis for school profiling projects.",
      "Utilized Excel & Google Sheets for efficient data management and analysis.",
      "Streamlined information collection pipelines for strategic decision-making.",
      "Enhanced school profiling processes through data-driven insights.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Working with Preyash was a delight. His Flutter skills and Python expertise made a major impact on our project!",
    name: "Project Reviewer",
    designation: "Mentor",
    company: "BITS Pilani",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "AI Mock Interview System",
    description:
      "An intelligent interview simulator built using Python and NLP that uses spaCy and HuggingFace Transformers for intent recognition, topic classification, and real-time answer evaluation with structured feedback scoring.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "transformers",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "orange-text-gradient",
      },
      {
        name: "streamlit",
        color: "purple-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/Preyashjain",
  },
  {
    name: "E-Commerce Mobile App",
    description:
      "A cross-platform e-commerce mobile app built with Flutter featuring Firebase authentication, Firestore database integration, RazorPay payment gateway, Provider state management, lazy loading, and modular architecture for both Android and iOS.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "orange-text-gradient",
      },
      {
        name: "provider",
        color: "purple-text-gradient",
      },
    ],
    image: flutter,
    source_code_link: "https://github.com/Preyashjain",
  },
  {
    name: "GenAI-Powered Webmail System",
    description:
      "An advanced webmail system integrating 5 open-source LLMs (Llama 3, Mistral 7B, Phi-3, Gemma 2) for intelligent email composition, summarization, and spam detection. Includes secure REST APIs, OAuth 2.0, Docker containerization, and GDPR-compliant encryption.",
    tags: [
      {
        name: "genai",
        color: "blue-text-gradient",
      },
      {
        name: "llm",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "purple-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/Preyashjain",
  },
];

export { services, technologies, experiences, testimonials, projects };
