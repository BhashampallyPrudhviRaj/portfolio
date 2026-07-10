export const socialLinks = {
  email: "mailto:bhashampallyprudhviraj@gmail.com",
  phone: "+1 (518) 948-2833",
  linkedin: "https://www.linkedin.com/in/bprudhviraj",
  github: "https://github.com/BhashampallyPrudhviRaj",
};

export const about = {
  name: "Prudhvi Raj Bhashampally",
  role: "Java Full Stack Developer",
  tagline: "Building scalable enterprise solutions and SaaS products that drive business impact.",
  availability: "Open to Projects & Full-Time Roles",
  location: "Albany, NY",
  summary: `I am a Java Full Stack Developer delivering enterprise-grade, cloud-native applications. I specialize in Java (Sprint Boot), React, and Microservices architectures.`,
};

export const skills = {
  backend: ["Java (8-21)", "Spring Boot", "Microservices", "Node.js (Express/NestJS)", "FastAPI", "GraphQL/gRPC", "Hibernate/JPA"],
  frontend: ["React 18", "TypeScript", "Material UI", "Redux Toolkit", "Tailwind CSS", "Next.js", "Remix"],
  cloud: ["AWS (Lambda, EC2, S3)", "Google Cloud Platform", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD (GitHub Actions)"],
  database: ["PostgreSQL", "MongoDB", "Redis", "CockroachDB", "MySQL", "DynamoDB"],
  ai: ["Hugging Face", "LangChain/RAG", "Vertex AI", "OpenAI API", "Python (Pandas/NumPy)"],
};

export const experience = [
  {
    company: "RealOpen",
    role: "Senior Java Full Stack Developer",
    period: "Mar 2025 – Present",
    description: "Re-architecting high-traffic real estate platforms.",
    achievements: [
      "Improved page load performance by 25% through backend optimizations and Redis caching.",
      "Built AI-powered MLS search prototype using Hugging Face models.",
      "Automated CI/CD pipelines shrinking deployment cycles from 3 days to 12 hours.",
      "Reduced unauthorized access incidents by 30% via OAuth2/RBAC security hardening.",
    ],
    tech: ["Java", "Spring Boot", "React", "Redis", "AWS"]
  },
  {
    company: "Vintek",
    role: "Senior Java Full Stack Developer",
    period: "Jun 2024 – Mar 2025",
    description: "Building scalable microservices and optimizing workflow pipelines.",
    achievements: [
      "Improved application performance and UX by 25% with optimized React components.",
      "Reduced deployment time by 30% through Docker/Kubernetes containerization.",
      "Reduced data retrieval latency by 20% via PostgreSQL and MongoDB query tuning.",
      "Enhanced test coverage reducing post-release defects by 40%."
    ],
    tech: ["Spring Boot", "React", "Kappa", "Kubernetes", "Azure"]
  },
  {
    company: "Rockefeller Institute of Government",
    role: "Full Stack Developer",
    period: "Oct 2023 – May 2024",
    description: "Developing data-driven dashboards for public policy decisions.",
    achievements: [
      "Increased user engagement by 30% via responsive React/TypeScript dashboards.",
      "Reduced hosting costs by 20% through AWS EC2/S3 optimization.",
      "Improved real-time data accuracy by 25% integrating live demographic APIs."
    ],
    tech: ["React", "TypeScript", "AWS", "Data Visualization"]
  },
  {
    company: "Secernate Games",
    role: "Java Full Stack Developer",
    period: "Mar 2020 – Dec 2022",
    description: "High-performance application development for gaming infrastructure.",
    achievements: [
      "Increased system throughput by 35% using Spring Boot/React.",
      "Migrated monolith to microservices improving deployment agility by 40%.",
      "Achieved 99.9% uptime with scalable AWS infrastructure architecture."
    ],
    tech: ["Java", "Microservices", "GraphQL", "AWS"]
  },
  {
    company: "Quickcore",
    role: "Java Developer",
    period: "Feb 2018 – Feb 2020",
    description: "Core Java development for responsive web applications.",
    achievements: [
      "Implemented efficiently CRUD operations improving database reliability.",
      "Improved issue resolution speed by 20% through rigorous backend testing."
    ],
    tech: ["Java", "Servlets", "MySQL", "HTML/CSS"]
  }
];

export const projects = [
  {
    id: "task-mgmt",
    title: "Task Management Platform",
    category: "Full Stack",
    description: "A modern Kanban-style task management system with drag-and-drop capabilities and analytics dashboards.",
    tech: ["React 18", "TypeScript", "Redux Toolkit", "Node.js", "Express", "dnd-kit"],
    featured: true,
    details: {
      challenge: "Ensuring type safety across the full stack and managing complex optimistic UI updates for the Kanban board.",
      solution: "Used Zod schemas shared between frontend and backend, plus RTK Query for cache management and optimistic updates.",
      impact: "Reduced boilerplate by 40% and eliminated most runtime type errors."
    }
  },
  {
    id: "azure-genai",
    title: "Azure GenAI Chatbot",
    category: "AI/ML",
    description: "Multimodal chatbot supporting text, image, and audio interactions deployed on Azure Container Apps.",
    tech: ["FastAPI", "Hugging Face", "Azure Container Apps", "Docker", "DistilGPT2"],
    featured: true,
    details: {
      challenge: "Handling heavy AI model inference loads while maintaining low latency in a serverless container environment.",
      solution: "Optimized model artifact loading and implemented auto-scaling rules in Azure Container Apps.",
      impact: "Enabled scalable, natural language property discovery experiments."
    }
  },
  {
    id: "nlp-chatbot",
    title: "NLP Chatbot with GCP",
    category: "AI/ML",
    description: "Hybrid conversational AI combining Dialogflow CX with Hugging Face Transformers for fallback handling.",
    tech: ["Dialogflow CX", "Flask", "GCP Cloud Functions", "Transformers"],
    featured: false,
  },
  {
    id: "cicd-mlflow",
    title: "MLOps CI/CD Pipeline",
    category: "DevOps",
    description: "Fully automated CI/CD pipeline for ML model training and deployment using Vertex AI and GitHub Actions.",
    tech: ["GitHub Actions", "Vertex AI", "MLflow", "Terraform"],
    featured: false,
  },
  {
    id: "smart-forms",
    title: "Smart Form Digitizer",
    category: "Cloud",
    description: "Serverless OCR application for automated document digitization and field mapping.",
    tech: ["React", "AWS Lambda", "Textract/OCR", "S3"],
    featured: false,
  }
];

export const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using modern Java and React stacks.",
    icon: "Code"
  },
  {
    title: "Microservices Architecture",
    description: "Decomposing monoliths into scalable, resilient microservices with Spring Boot.",
    icon: "Architecture"
  },
  {
    title: "SaaS Product Engineering",
    description: "Building MVP to IPO-ready SaaS platforms with tenant isolation and subscription billing.",
    icon: "Launch"
  },
  {
    title: "AI/ML Integration",
    description: "Embedding GenAI agents, chatbots, and predictive models into business workflows.",
    icon: "Psychology"
  },
];
