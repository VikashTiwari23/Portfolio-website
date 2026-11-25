const info = {
    name:'Vikash Tiwari',
    email: 'vikash.tiwari.236968@gmail.com',
    stack : ['Full Stack Developer', 'Software Engineer', 'Competitive Programmer', 'Backend Developer'],
    bio : "A passionate software engineer with a strong background in competitive programming, full-stack web development, and scalable backend design. I specialize in crafting robust, high-performance REST APIs and responsive web applications, delivering solutions that exceed user expectations. Let's connect and create something amazing together!"
}

const projectDetails = [
    {
        title: "Car Rental Application",
        desc: "A full-stack vehicle booking platform featuring car browsing, reservation workflows, and real-time availability management.",
        image: "car-rental.png",
        live: "https://car-rental-frontend-app.vercel.app", 
        technologies: ["Java", "Spring Boot", "React", "JavaScript", "REST API", "MySQL"],
        link: "https://car-rental-frontend-app.vercel.app",
        github: "https://github.com/VikashTiwari23/car-rental-backend-app"
    },
    {
        title: "Course Management System",
        desc: "A backend service designed for academic management, featuring JWT authentication, role-based access control, and course-semester mapping.",
        image: "course-management.jpg",
        live: "", 
        technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "MySQL"],
        link: "https://github.com/VikashTiwari23/Course_Management_System_Backend",
        github: "https://github.com/VikashTiwari23/Course_Management_System_Backend"
    },
    {
        title: "Parking Lot (LLD)",
        desc: "An object-oriented multi-level parking lot system implementing spot allocation strategies, automated ticketing, and extensible dynamic fee calculation.",
        image: "", 
        live: "", 
        technologies: ["Java","Docker", "Object-Oriented Design", "Design Patterns (Strategy, Factory)", ],
        link: "https://github.com/VikashTiwari23/parking-lot-system",
        github: "https://github.com/VikashTiwari23/parking-lot-system"
    },
    {
        title: "Product Management System",
        desc: "A full-featured management application designed to handle inventory, catalog management, and CRUD operations for products.",
        image: "product-management.jpg",
        live: "", 
        technologies: ["Java", "Spring Boot", "React", "REST API", "MySQL"],
        link: "https://github.com/VikashTiwari23/Product_Management_System_Frontend",
        github: "https://github.com/VikashTiwari23/Product_Management_System_Frontend"
    },
    {
        title: "Gmail Clone",
        desc: "A web application that mimics the core functionality of Gmail, including email composition, inbox management, and user authentication.",
        image: "gmail-clone.jpg",
        live: "", 
        technologies: ["Java", "Spring Boot", "React", "REST API", "MySQL"],
        link: "https://github.com/VikashTiwari23/Gmail-application-service-clone",
        github: "https://github.com/VikashTiwari23/Gmail-application-service-clone"
    },

];


const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Springboot",
      "MySQL"
    ]
  },
  {
    title: "Languages",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Postman"
    ]
  }
];

const ExperienceInfo = [
  {
    role: "Full-Stack & Backend Developer",
    company: "Independent Projects",
    date: "2024 - Present",
    desc: "Architected and deployed full-stack web applications and scalable backend microservices using Java, Spring Boot, and React. Implemented secure stateless authentication using Spring Security & JWT, containerized services with Docker, and designed low-level system architectures applying design patterns like Strategy and Factory.",
    skills: ["Java", "Spring Boot", "React", "Spring Security", "MySQL", "Docker", "REST APIs", "LLD"]
  },
  {
    role: "Open Source & Competitive Problem Solver",
    company: "Independent / LeetCode",
    date: "2024 - Present",
    desc: "Implemented clean, performant data structures and algorithmic solutions focusing on Dynamic Programming, Trees, and Object-Oriented Design. Practiced writing modular, reusable code, managing version control workflows with Git, and deploying production builds to platforms like Render and Vercel.",
    skills: ["Data Structures & Algorithms", "System Design", "Git", "GitHub", "Vercel", "Render"]
  }
];


const slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "html5",
  "css3",
  "springboot",
  "docker",
  "git",
  "github",
  "vscode"
];

export {info, projectDetails , SkillInfo , ExperienceInfo , slugs};