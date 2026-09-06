import { FaJava, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTypescript, SiGithubactions, SiSpringsecurity, SiRedis } from "react-icons/si";
import ecommerceImage from "../assets/projects/ecommerce/home.webp";
import ecommerceVideo from "../assets/projects/ecommerce/project-demo.mp4";

const projects = [
    {
        type: "Full-Stack Application",
        title: "Modern E-Commerce Platform",
        description:
            "A production-oriented full-stack e-commerce application built with a Java and Spring Boot backend and React frontend, designed with modular architecture, secure APIs, payment integration, automated deployment, and application monitoring.",
        image: ecommerceImage,
        video: ecommerceVideo,

        engineeringHighlights: [
            "Modular Monolith Architecture",
            "Spring Security & JWT",
            "RESTful APIs",
            "Role-Based Access Control",
            "API Rate Limiting",
            "Razorpay Payment Integration",
            "Docker & CI/CD",
            "AWS Deployment",
            "Prometheus & Grafana Monitoring",
        ],

        technologies: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Spring Security", icon: SiSpringsecurity },
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
            { name: "Docker", icon: FaDocker },
            { name: "AWS", icon: FaAws },
            { name: "GitHub Actions", icon: SiGithubactions },
        ],

        links: {
            liveDemo: "https://ecommerce.mohdsameer.info/",
            backend: "https://github.com/ma3llim/ecommerce-backend/",
            frontend: "https://github.com/ma3llim/ecommerce-frontend/",
        },
    },
];

export default projects;
