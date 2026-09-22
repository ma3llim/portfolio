import { FaJava, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTypescript, SiGithubactions, SiSpringsecurity, SiRedis, SiSpring } from "react-icons/si";
import { BrainCircuit, Database, ListOrdered, Sparkles, Webhook } from "lucide-react";
import { TbBrain, TbVector } from "react-icons/tb";

import ecommerceImage from "../assets/projects/ecommerce/home.webp";
import ecommerceVideo from "../assets/projects/ecommerce/project-demo.mp4";
import aiAssistantImage from "../assets/projects/ai-knowledge/home.webp";
import aiAssistantVideo from "../assets/projects/ai-knowledge/project-demo.mp4";

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
    {
        type: "AI-Powered Application",
        title: "AI Knowledge & Document Assistant",
        description:
            "An AI-powered document assistant built with Spring Boot and Spring AI, designed for conversational document retrieval using RAG, embeddings, vector search, reranking, guardrails, asynchronous document processing, and real-time AI response streaming.",

        image: aiAssistantImage,
        video: aiAssistantVideo,
        engineeringHighlights: [
            "Spring AI & RAG Pipeline",
            "Document Intelligence & Extraction",
            "Embeddings & pgvector",
            "Top-5 Retrieval & Top-3 Reranking",
            "Conversation Context & Memory",
            "AI Guardrails",
            "WebSocket Streaming",
            "AWS SQS & Dead-Letter Queue",
            "Cloudflare R2 Storage",
            "PostgreSQL & pgvector",
        ],

        technologies: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Spring AI", icon: SiSpring },
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "pgvector", icon: Database },
            { name: "AWS SQS", icon: ListOrdered },
            { name: "WebSockets", icon: Webhook },
            { name: "LLMs", icon: BrainCircuit },
            { name: "RAG", icon: TbBrain },
            { name: "Embeddings", icon: TbVector },
            { name: "Prompt Engineering", icon: Sparkles },
        ],

        links: {
            liveDemo: "https://ai.mohdsameer.info/",
            backend: "https://github.com/ma3llim/ai-knowledge-document-assistant-backend/",
            frontend: "https://github.com/ma3llim/ai-knowledge-document-assistant/",
        },
    },
];

export default projects;
