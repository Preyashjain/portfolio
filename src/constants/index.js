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
  ibm, // ✅ Add this line
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Python & ML Developer",
    icon: backend,
  },
  {
    title: "AI/NLP Enthusiast",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Python",
    icon: backend,
  },
  {
    name: "Firebase",
    icon: web,
  },
  {
    name: "TensorFlow",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Intern Executive – School Profiling",
    company_name: "Sankalp Concepts",
    icon: sankalp,
    iconBg: "#383E56",
    date: "Oct 2024 – Dec 2024",
    points: [
      "Conducted data analysis to enhance school profiling for strategic decision-making.",
      "Utilized Excel and Google Sheets for efficient data management.",
      "Streamlined information collection processes for school profiling projects.",
    ],
  },
  {
    title: "AI & Cloud Intern",
    company_name: "Edunet Foundation (IBM SkillsBuild)",
    icon: ibm, // ✅ uses ibm image
    iconBg: "#003366",
    date: "July 2025 – August 2025",
    points: [
      "Completed a 4-week internship focused on AI, Cloud Computing, and Data Analytics using IBM SkillsBuild.",
      "Participated in live virtual sessions, hands-on cloud experiments, and real-world problem solving.",
      "Developed and presented a final project involving AI/ML experimentation on the IBM Cloud platform.",
      "Gained experience with technologies such as Chatbots, AutoAI, and Exploratory Data Analysis (EDA).",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Working with Preyash was a delight. His Flutter skills and Python expertise made a major impact on our project!",
    name: "Project Reviewer",
    designation: "Mentor",
    company: "BIT RAIPUR",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce App (Flutter)",
    description:
      "A full-featured mobile shopping app with Firebase backend, cart, checkout, RazorPay integration, and responsive design.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: flutter,
    source_code_link: "https://github.com/Preyashjain",
  },
  {
    name: "AI Mock Interview System",
    description:
      "Simulates technical/HR interviews using NLP, ML models, and gives feedback based on grammar, keywords, and clarity.",
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
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/Preyashjain",
  },
  {
    name: "AI Health Tracker App",
    description:
      "A mobile health monitoring app that detects patterns in user data, suggests improvements, and predicts risks using TensorFlow.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/Preyashjain",
  },
];

export { services, technologies, experiences, testimonials, projects };
