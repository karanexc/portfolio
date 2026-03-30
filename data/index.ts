export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education"},
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build end-to-end AI systems focused on real-world impact",
    description: "GenAI | NLP | MLOps",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in the UK, open to global opportunities",
    description: "Flexible across time zones",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Python, ML, DL, NLP, GenAI, AWS, FastAPI",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about AI, data, and intelligent systems",
    description: "Always learning and building",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building AI products with LLMs and automation",
    description: "Projects include RAG systems & AI agents",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s build something impactful together",
    description: "Open to internships & collaborations",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Research Assistant",
    des: "Built an AI research assistant with JWT authentication, document ingestion (text/URL), and a context-aware RAG system using pgvector embeddings, enabling semantic search, summarization, and intelligent Q&A over unstructured data.",
    img: "/research.png",
    iconLists: [
      "/python1.png",
      "/langchain-color.png",
      "/postgre.png",
    ],
    link: "https://github.com/karanexc/ai-research-assistant",
  },
  {
    id: 2,
    title: "AI Job Market Intelligence Platform",
    des: "Built a scalable end-to-end AI system processing 10,000+ job listings using web scraping, NLP-based skill extraction, and embedding-driven semantic search for real-time job matching and recommendations.",
    img: "/ai-job-market.jpg",
    iconLists: ["/python1.png", "/langchain-color.png", "/postgre.png"],
    link: "https://github.com/karanexc/ai-job-market-intelligence",
  },
  {
    id: 3,
    title: "Medical Chatbot (RAG)",
    des: "Developed a RAG-based chatbot using LangChain, Pinecone, and LLMs with vector embeddings and semantic search to deliver accurate, context-aware responses while reducing hallucinations.",
    img: "/medical-chatbot.webp",
    iconLists: ["/python1.png", "/langchain-color.png", "/aws.png", "/fastapi.svg"],
    link: "https://github.com/karanexc/Medical-Chatbot",
  },
  {
    id: 4,
    title: "UK Traffic Sign Recognition",
    des: "Trained deep learning models (ResNet, MobileNet) for multi-class traffic sign classification achieving 96% accuracy using data augmentation and optimized preprocessing pipelines.",
    img: "/traffic-final.jpg",
    iconLists: ["/python1.png", "/huggingface.png", "/docker.png"],
    link: "https://github.com/karanexc",
  },
];

export const companies = [
  {
    id: 1,
    name: "Infocare Technologies Pvt Ltd",
    img: "/infocare.jpeg",
    nameImg: "/infocare.jpeg",
  },
  {
    id: 2,
    name: "Velocity Gaming",
    img: "/velocity.jpg",
    nameImg: "/velocity.jpg",
  },
  {
    id: 3,
    name: "Enigma Gaming",
    img: "/enigma.png",
    nameImg: "/enigma.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Machine Learning Intern | Infocare Technologies Pvt Ltd",
    desc: "Worked on machine learning models, data preprocessing, and exploratory data analysis to extract actionable insights from real-world datasets.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Computer Vision Project | UK Based company",
    desc: "Developed a computer vision model to recognize UK traffic signs using deep learning techniques. Handled dataset preparation, model training, and evaluation for real-world road scenarios.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Professional Esports Athlete",
    desc: "Led and managed a competitive esports team, coordinating strategies, training sessions, and performance analysis, strengthening leadership and teamwork skills under high-pressure environments.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/karanexc",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/karan-exc/",
  },
];