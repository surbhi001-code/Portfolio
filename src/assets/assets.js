import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPlug } from 'react-icons/fa';
import profileImg from '../assets/profile.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg5 from '../assets/project5.avif';
import crm from '../assets/crm.avif';
import buyer from '../assets/buyer.avif';
import portfolio from '../assets/portfolio.avif';
export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Engineering',
    icon: FaReact,
    description: 'Creating accessible, responsive, and interactive interfaces with a strong focus on user experience.',
    tags: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5', 'Responsive Design']
  },
  {
    title: 'Advanced React',
    icon: FaCode,
    description: 'Structuring scalable React applications with reusable patterns and performance-focused techniques.',
    tags: ['React Hooks', 'Context API', 'React Router', 'Lazy Loading', 'Code Splitting']
  },
  {
    title: 'API & AI Integration',
    icon: FaPlug,
    description: 'Connecting frontend experiences with REST APIs and integrating AI-powered features into user flows.',
    tags: ['REST APIs', 'Axios', 'Async/Await', 'Error Handling', 'AI API Integration']
  },
  {
    title: 'AI-Assisted Development',
    icon: FaRobot,
    description: 'Adapting modern AI tools to explore solutions, improve workflows, debug faster, and learn new technologies.',
    tags: ['GitHub Copilot', 'OpenAI Codex', 'Claude AI', 'Prompting', 'Rapid Prototyping']
  },
  {
    title: 'Backend & Data Basics',
    icon: FaServer,
    description: 'Working knowledge of server-side development and data storage for building complete application flows.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Authentication']
  },
  {
    title: 'Tools & Foundations',
    icon: FaTools,
    description: 'Using practical development and design tools while strengthening programming and problem-solving fundamentals.',
    tags: ['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'C++ & DSA']
  }
];



export const projects = [
  {
    title: "Expense Tracker",
    description: "A web application for tracking monthly expenses and income with a simple and user-friendly dashboard.",
    image: projectImg3,
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    icons: [FaReact, FaDatabase],
    code: "https://github.com/surbhi001-code/ExpenseTracker",
  },
  {
    title: "CRM Platform",
    description: "Designed and developed the responsive frontend UI for managing leads, follow-ups, customer activity, and business insights, with API integration.",
    image: crm,
    tech: ["React.js", "Tailwind CSS", "REST API", "GitHub Copilot", "Claude AI"],
    icons: [FaReact],
    demo: "https://crm-kappa-nine-28.vercel.app",
    code: "https://github.com/surbhi001-code/CRM",
  },
  {
    title: "Buyer–Seller Platform",
    description: "Built the responsive frontend UI for a buyer–seller marketplace and integrated APIs for products, listings, and user interactions.",
    image: buyer,
    tech: ["React.js", "Tailwind CSS", "REST API", "GitHub Copilot", "Claude AI"],
    icons: [FaReact],
    code: "https://github.com/surbhi001-code/BuyerSeller",
  },
  {
    title: "Portfolio Website",
    description: "A modern and fully responsive personal portfolio showcasing my experience, technical skills, and selected development work.",
    image: portfolio,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "https://seo-portfolio-rho.vercel.app/",
    code: "https://github.com/surbhi001-code/SEO-Portfolio",
  },
  {
    title: "MERN Authentication System",
    description: "A secure authentication application featuring user registration, login, protected routes, and session management.",
    image: projectImg5,
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    code: "https://github.com/surbhi001-code/Full-Stack-MERN-Authentication-App",
  },
];


