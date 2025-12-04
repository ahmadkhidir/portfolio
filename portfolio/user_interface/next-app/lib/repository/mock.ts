import {
    ArticleSchema,
    ClientReviewSchema,
    ProjectSchema,
    ServiceSchema,
    ContactMessageSchema,
} from "../schema/schema";
import z from "zod";
import PortfolioRepository from "./base";

export default class PortfolioRepositoryMock extends PortfolioRepository {
    private mockProjects: z.infer<typeof ProjectSchema>[] = [
        {
            id: 1,
            title: "E-Commerce Platform",
            overview: "A full-stack e-commerce platform built with Next.js and FastAPI",
            content: "## Overview\n\nThis project showcases a modern e-commerce solution with features like:\n- Product catalog\n- Shopping cart\n- Payment integration\n- Order management",
            image: {
                url: "/images/mobile.png",
                alt_text: "E-Commerce Platform",
                id: 1,
            },
            created_at: "2024-01-15T10:00:00Z",
            updated_at: "2024-01-15T10:00:00Z",
            stacks: [
                { id: 1, name: "Next.js", description: "React Framework", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
                { id: 2, name: "FastAPI", description: "Python Web Framework", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
                { id: 3, name: "PostgreSQL", description: "Database", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
                { id: 4, name: "Docker", description: "Containerization", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
            ],
        },
        {
            id: 2,
            title: "Task Management System",
            overview: "A collaborative task management application with real-time updates",
            content: "## Features\n\n- Real-time collaboration\n- Task assignments\n- Progress tracking\n- Team analytics",
            image: {
                url: "/images/mobile.png",
                alt_text: "Task Management System",
                id: 2,
            },
            created_at: "2024-02-20T14:30:00Z",
            updated_at: "2024-02-20T14:30:00Z",
            stacks: [
                { id: 5, name: "React", description: "UI Library", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
                { id: 6, name: "Node.js", description: "JavaScript Runtime", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
                { id: 7, name: "MongoDB", description: "NoSQL Database", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
            ],
        },
        {
            id: 3,
            title: "AI Content Generator",
            overview: "An AI-powered content generation tool using GPT models",
            content: "## Capabilities\n\n- Blog post generation\n- SEO optimization\n- Multiple content formats\n- Language translation",
            image: {
                url: "/images/mobile.png",
                alt_text: "AI Content Generator",
                id: 3,
            },
            created_at: "2024-03-10T09:15:00Z",
            updated_at: "2024-03-10T09:15:00Z",
            stacks: [
                { id: 8, name: "Python", description: "Programming Language", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
                { id: 9, name: "OpenAI", description: "AI API", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
                { id: 10, name: "TypeScript", description: "Typed JavaScript", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
            ],
        },
    ];

    private mockReviews: z.infer<typeof ClientReviewSchema>[] = [
        {
            id: 1,
            name: "Sarah Johnson",
            title: "CEO, TechStart Inc",
            image: {
                url: "/images/mobile.png",
                alt_text: "Sarah Johnson",
                id: 1,
            },
            company_image: {
                url: "/images/mobile.png",
                alt_text: "TechStart Inc",
                id: 1,
            },
            content: "Exceptional work! The portfolio website exceeded our expectations. The attention to detail and technical expertise made the entire process seamless.",
            created_at: "2024-01-20T12:00:00Z",
            updated_at: "2024-01-20T12:00:00Z",
        },
        {
            id: 2,
            name: "Michael Chen",
            title: "CTO, DevSolutions",
            image: {
                url: "/images/mobile.png",
                alt_text: "Michael Chen",
                id: 2,
            },
            company_image: {
                url: "/images/mobile.png",
                alt_text: "DevSolutions",
                id: 2,
            },
            content: "Outstanding developer who delivers quality code on time. The e-commerce platform they built has been running flawlessly for months.",
            created_at: "2024-02-15T15:30:00Z",
            updated_at: "2024-02-15T15:30:00Z",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            title: "Product Manager, InnovateCo",
            image: {
                url: "/images/mobile.png",
                alt_text: "Emily Rodriguez",
                id: 3,
            },
            company_image: {
                url: "/images/mobile.png",
                alt_text: "InnovateCo",
                id: 3,
            },
            content: "Great communication skills and technical prowess. They turned our complex requirements into an elegant solution.",
            created_at: "2024-03-05T10:45:00Z",
            updated_at: "2024-03-05T10:45:00Z",
        },
        {
            id: 4,
            name: "David Thompson",
            title: "Founder, StartupHub",
            image: {
                url: "/images/mobile.png",
                alt_text: "David Thompson",
                id: 4,
            },
            company_image: {
                url: "/images/mobile.png",
                alt_text: "StartupHub",
                id: 4,
            },
            content: "Highly recommended! Professional, efficient, and always willing to go the extra mile. Our project was completed ahead of schedule.",
            created_at: "2024-03-25T14:20:00Z",
            updated_at: "2024-03-25T14:20:00Z",
        },
    ];

    private mockArticles: z.infer<typeof ArticleSchema>[] = [
        {
            id: 1,
            title: "Building Scalable Web Applications with Next.js",
            content: "# Building Scalable Web Applications with Next.js\n\n## Introduction\n\nNext.js has become the go-to framework for building modern web applications...\n\n## Key Concepts\n\n### Server Components\n\nServer components allow you to render components on the server...\n\n### App Router\n\nThe new app router provides improved routing capabilities...",
            image: {
                url: "/images/mobile.png",
                alt_text: "Building Scalable Web Applications with Next.js",
                id: 1,
            },
            created_at: "2024-01-10T08:00:00Z",
            updated_at: "2024-01-10T08:00:00Z",
        },
        {
            id: 2,
            title: "FastAPI: Building High-Performance APIs",
            content: "# FastAPI: Building High-Performance APIs\n\n## Why FastAPI?\n\nFastAPI is a modern, fast web framework for building APIs with Python...\n\n## Getting Started\n\nLet's create our first FastAPI application...",
            image: {
                url: "/images/mobile.png",
                alt_text: "FastAPI: Building High-Performance APIs",
                id: 2,
            },
            created_at: "2024-02-05T11:30:00Z",
            updated_at: "2024-02-05T11:30:00Z",
        },
        {
            id: 3,
            title: "Docker Best Practices for Development",
            content: "# Docker Best Practices for Development\n\n## Introduction\n\nDocker has revolutionized how we develop and deploy applications...\n\n## Multi-stage Builds\n\nMulti-stage builds help reduce image size...",
            image: {
                url: "/images/mobile.png",
                alt_text: "Docker Best Practices for Development",
                id: 3,
            },
            created_at: "2024-03-01T16:00:00Z",
            updated_at: "2024-03-01T16:00:00Z",
        },
    ];

    private mockServices: z.infer<typeof ServiceSchema>[] = [
        {
            heading: "AI/ML Solutions",
            content: "I create intelligent systems that solve complex problems using machine learning and AI algorithms. Whether it's predictive modeling or natural language processing, I bring data-driven insights to life with precision and efficiency."
        },
        {
            heading: "Full-Stack Development",
            content: "I build robust, scalable applications from front to back, ensuring seamless integration and optimal performance. My expertise spans both client-side and server-side technologies, allowing me to deliver complete, end-to-end solutions."
        },
        {
            heading: "Front-End Development",
            content: "I craft responsive, user-friendly interfaces with modern tools like React, Next.js, and Vue. My focus is on creating engaging, intuitive designs that enhance user experiences and drive interaction."
        },
        {
            heading: "Back-End Development",
            content: "I design and implement efficient back-end systems, ensuring high performance, security, and scalability. Using technologies like Node.js, Django, and Flask, I deliver solid back-end architectures that power seamless applications."
        },
        {
            heading: "API Development",
            content: "I specialize in designing and building RESTful APIs and GraphQL services that are fast, scalable, and maintainable. My goal is to ensure your applications can communicate smoothly with external services and data sources, providing a solid interface for users and other systems."
        },
        {
            heading: "Web Optimization",
            content: "I optimize websites for speed, performance, and SEO. By analyzing and fine-tuning every aspect, I ensure fast load times and improved user engagement, making your website work smarter, not harder."
        },
        {
            heading: "Mobile Development",
            content: "I create powerful mobile applications for both Android and iOS, using tools like React Native and Flutter. I focus on delivering seamless, high-performance mobile experiences that align with your business goals."
        },
        {
            heading: "System Architecture",
            content: "I design scalable, high-performance architectures that ensure systems are robust, maintainable, and future-proof. From cloud integration to microservices, I create architectures that grow with your business."
        }
    ];

    getProjects = async () => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        console.log('Fetched mock projects', this.mockProjects);
        return this.mockProjects;
    };

    getReviews = async () => {
        await new Promise(resolve => setTimeout(resolve, 200));
        return this.mockReviews;
    };

    getArticles = async () => {
        await new Promise(resolve => setTimeout(resolve, 250));
        return this.mockArticles;
    };

    getServices = async () => {
        await new Promise(resolve => setTimeout(resolve, 150));
        return this.mockServices;
    };

    getArticleById = async (id: number) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        const article = this.mockArticles.find(a => a.id === id);
        if (!article) {
            throw new Error(`Article with id ${id} not found`);
        }
        return article;
    };

    getProjectById = async (id: number) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        const project = this.mockProjects.find(p => p.id === id);
        if (!project) {
            throw new Error(`Project with id ${id} not found`);
        }
        return project;
    };

    getServiceById = async (id: number) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        // ServiceSchema doesn't have an id field, so we'll use array index
        const service = this.mockServices[id - 1];
        if (!service) {
            throw new Error(`Service with id ${id} not found`);
        }
        return service;
    };

    sendContactMessage = async (data: z.infer<typeof ContactMessageSchema>) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        console.log('Mock contact message sent:', data);
        // In a real scenario, this would send the message to a backend
    };
}
