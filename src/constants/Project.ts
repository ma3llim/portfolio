import { FaJava, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTypescript, SiGithubactions } from "react-icons/si";
import ecommerceImage from "../assets/projects/ecommerce/home.webp";
import ecommerceVideo from "../assets/projects/ecommerce/home.webp";

const projects = [
    {
        type: "Full-Stack Application",
        title: "Modern E-Commerce Platform",
        description:
            "A production-style e-commerce application built with a Java backend and React frontend, featuring secure authentication, RESTful APIs, rate limiting, automated testing, containerization, CI/CD, monitoring, and AWS deployment.",
        image: ecommerceImage,
        video: ecommerceVideo,
        engineeringHighlights: ["Spring Security", "RESTful APIs", "Rate Limiting", "Swagger / OpenAPI", "Testing", "CI/CD", "Docker", "Monitoring"],
        technologies: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "PostgreSQL", icon: SiPostgresql },
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
